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
import { Dimensions } from 'react-native'

export interface CardProps<T = string> extends News {
}

const NewsCard = ({
  source,
  id,
  name,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content
}: CardProps) => {

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
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
            <BookmarkIcon />
            <Box width='3' />
            <ShareIcon />
          </HStack>
        </HStack>
      </Box>
    </Box>
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
