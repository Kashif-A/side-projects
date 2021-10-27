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

export interface CardProps<T = string> extends News {
  isBookmarked: boolean
  bookmark: (add: boolean) => void
}

const NewsCard = ({
  title,
  description,
  urlToImage,
  publishedAt,
  isBookmarked,
  bookmark,
  ...rest
}: CardProps) => {
  const [bookmarked, setBookmarked] = React.useState<boolean>(isBookmarked)

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const onPress = async () => {
    let payload: News[] = []
    let tempPayload = await AsyncStorage.getItem('our-news-bookmarks')
    if (tempPayload) {
      payload = JSON.parse(tempPayload)
      if (bookmarked) {
        payload = payload.filter(p => p.title !== title)
        await AsyncStorage.setItem('our-news-bookmarks', JSON.stringify(payload))
        bookmark(false)
        setBookmarked(false)
      } else {
        payload.push({
          title,
          description,
          urlToImage,
          publishedAt,
          ...rest
        })
        await AsyncStorage.setItem('our-news-bookmarks', JSON.stringify(payload))
        bookmark(true)
        setBookmarked(true)
      }
    } else {
      await AsyncStorage.setItem('our-news-bookmarks', JSON.stringify([{
        title,
        description,
        urlToImage,
        publishedAt,
        ...rest
      }]))
      bookmark(true)
      setBookmarked(true)
    }
  }

  const date = new Date(publishedAt)

  return (
    <Box backgroundColor='white' marginTop='3'>
      <Image source={{ uri: urlToImage }} style={styles.image} />
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
