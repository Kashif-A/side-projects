import React from 'react'
import {
  Box,
  Heading,
  HStack,
  Image,
  Text
} from 'native-base'

import { News } from '../../App'
import { BookmarkIcon } from '../svgs/BookmarkIcon'
import { ShareIcon } from '../svgs/ShareIcon'
import { Dimensions, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface CardProps extends News {
  bookmarkedNews: News[]
  isBookmarked?: boolean
  setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>
}

const NewsCard = ({
  title,
  description,
  urlToImage,
  publishedAt,
  setBookmarkedNews,
  bookmarkedNews,
  isBookmarked,
  ...rest
}: CardProps) => {
  const bookmarked = isBookmarked || bookmarkedNews.find((b) => b.title === title) ? true : false

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const onPress = async () => {
    let payload: News[] = bookmarkedNews

    if (bookmarkedNews.length > 0) {
      if (bookmarked) {
        payload = payload.filter(p => p.title !== title)
        await AsyncStorage.setItem('our-news-bookmarks', JSON.stringify(payload))
      } else {
        payload.push({
          title,
          description,
          urlToImage,
          publishedAt,
          ...rest
        })
        await AsyncStorage.setItem('our-news-bookmarks', JSON.stringify(payload))
      }
    } else {
      payload.push({
        title,
        description,
        urlToImage,
        publishedAt,
        ...rest
      })
      await AsyncStorage.setItem('our-news-bookmarks', JSON.stringify([{
        title,
        description,
        urlToImage,
        publishedAt,
        ...rest
      }]))
    }
    setBookmarkedNews([...payload])
  }

  const date = new Date(publishedAt)

  return (
    <Box backgroundColor='white' marginTop='3'>
      <Image alt='news' source={{ uri: urlToImage }} style={styles.image} />
      <Box padding='5' backgroundColor='white'>
        <Heading fontFamily='heading'>{title}</Heading>
        <Text paddingTop='2' fontSize='md'>{description}</Text>
        <HStack paddingTop='4' justifyContent='space-between'>
          <Text marginTop='2'>{`${monthNames[date.getMonth()].toUpperCase()} ${date.getDate()}`}</Text>
          <HStack>
            <TouchableOpacity onPress={async () => await onPress()}>
              <BookmarkIcon isBookmarked={bookmarked} />
            </TouchableOpacity>
            <Box width='3' />
            <ShareIcon />
          </HStack>
        </HStack>
      </Box>
    </Box >
  )
}

const styles = {
  image: {
    minWidth: Dimensions.get('screen').width,
    aspectRatio: 1,
    top: 0,
    maxHeight: 180
  }
}

export default NewsCard
