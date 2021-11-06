import React from 'react'
import { ActivityIndicator } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/core'

import {
  Box,
  Flex,
  Text,
  ScrollView
} from 'native-base'

import { News } from '../../App'
import NewsCard from '../components/NewsCard'
import BookmarksWrapper from '../components/BookmarksWrapper'

type ParamList = {
  LatestNews: {
    selected: string
  };
}

export default () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [newsData, setNewsData] = React.useState<News[]>()

  const route = useRoute<RouteProp<ParamList>>()


  React.useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${route.params?.selected || 'world'}&from=2021-10-25&sortBy=popularity&apiKey=fed9b93d26564ec2baf0c3226c3395dd`)
      .then(resp => {
        if (resp) {
          resp.json().then(
            d => {
              if (d) {
                setNewsData(d.articles)
                setLoading(false)
              }
            }
          )
        }
      })
  }, [route.params?.selected])

  return (
    <BookmarksWrapper>
      {(bookmarkedNews: News[], setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>) =>
        !loading
          ? (
            <>
              {route.params?.selected &&
                <Box backgroundColor='black' padding='3'>
                  <Text
                    color='white'
                    fontFamily='Arial'
                    textAlign='center'
                    fontSize='md'>
                    This is a demo app, therefore, results may not reflect what you selected from the Slider above.
                  </Text>
                </Box>}
              <ScrollView showsVerticalScrollIndicator={false} flex={1}>
                {newsData?.map(d =>
                  <NewsCard
                    {...d}
                    key={`${d.title}${d.source.id}${Math.random()}`}
                    bookmarkedNews={bookmarkedNews}
                    setBookmarkedNews={setBookmarkedNews}
                  />)}
              </ScrollView>
            </>
          )
          : (
            <Flex flex={1} justifyContent='center' alignItems='center'>
              <ActivityIndicator size='large' />
            </Flex>
          )}
    </BookmarksWrapper>
  )
}
