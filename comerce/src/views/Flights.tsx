import React from 'react'
import { ActivityIndicator } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/core'

import {
  Box,
  Flex,
  Text,
  ScrollView,
  View,
  Slide
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
  const [loading, setLoading] = React.useState<boolean>(false)
  const [flightData, setFlightData] = React.useState<News[]>()

  const route = useRoute<RouteProp<ParamList>>()


  // React.useEffect(() => {
  //   fetch(`https://newsapi.org/v2/everything?q=${route.params?.selected || 'world'}&from=2021-10-25&sortBy=popularity&apiKey=fed9b93d26564ec2baf0c3226c3395dd`)
  //     .then(resp => {
  //       if (resp) {
  //         resp.json().then(
  //           d => {
  //             if (d) {
  //               setFlightData(d.articles)
  //               setLoading(false)
  //             }
  //           }
  //         )
  //       }
  //     })
  // }, [route.params?.selected])

  return (
    <BookmarksWrapper>
      {(bookmarkedNews: News[], setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>) =>
        !loading
          ? (
            <>
              <Slide />
              {route.params?.selected &&
                <Box backgroundColor='black' padding='3'>
                  <Text
                    color='white'
                    fontFamily='Arial'
                    textAlign='center'
                    fontSize='md'>
                    Because the App uses a Free API, results may not reflect what you selected from the Slider above.
                  </Text>
                </Box>}
              <View flex={1}>
                {flightData?.map(d =>
                  <NewsCard
                    {...d}
                    key={`${d.title}${d.source.id}${Math.random()}`}
                    bookmarkedNews={bookmarkedNews}
                    setBookmarkedNews={setBookmarkedNews}
                  />)}
              </View>
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
