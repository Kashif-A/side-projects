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
  const [error, setError] = React.useState<boolean>(false)
  const [newsData, setNewsData] = React.useState<News[]>()

  const route = useRoute<RouteProp<ParamList>>()

  React.useEffect(() => {
    fetch(`https://newsapi.org/v2/${route.params?.selected || 'everything?domains=bbc.co.uk'}&sortBy=popularity&domains=cnn.com,bbc.co.uk&apiKey=fed9b93d26564ec2baf0c3226c3395dd`)
      .then(resp => {
        if (resp) {
          resp.json().then(
            d => {
              if (d) {
                if (d.status === 'error') {
                  setError(true)
                  setTimeout(() => {
                    setError(false)
                  }, 1500)
                  return
                }
                setNewsData(d.articles)
                setLoading(false)
              }
            }
          )
        }
      })
      .catch()
  }, [route.params?.selected])

  return (
    <BookmarksWrapper>
      {(bookmarkedNews: News[], setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>) =>
        <>
          {error &&
            <Box backgroundColor='red.300' padding='2'>
              <Text
                color='black'
                bold={true}
                fontFamily='Arial'
                textAlign='center'
                fontSize='md'>
                Error fetching data.
              </Text>
            </Box>}
          {!loading
            ? (
              <ScrollView showsVerticalScrollIndicator={false} flex={1}>
                {newsData?.map(d =>
                  <NewsCard
                    {...d}
                    key={`${d.title}${d.source.id}${Math.random()}`}
                    bookmarkedNews={bookmarkedNews}
                    setBookmarkedNews={setBookmarkedNews}
                  />)}
              </ScrollView>
            )
            : (
              <Flex flex={1} justifyContent='center' alignItems='center'>
                <ActivityIndicator size='large' color='black' />
              </Flex>
            )}
        </>}
    </BookmarksWrapper>
  )
}
