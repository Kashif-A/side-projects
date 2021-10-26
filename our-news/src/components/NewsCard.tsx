import React from 'react'
import {
  Box,
  Heading,
  HStack,
  Text
} from 'native-base'

import { News } from '../../App'
import { BookmarkIcon } from '../svgs/BookmarkIcon'
import { ShareIcon } from '../svgs/ShareIcon'

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
    <Box padding='5' backgroundColor='white' marginTop='3'>
      <Heading fontFamily='heading'>{title}</Heading>
      <Text paddingTop='2'>{description}</Text>
      <HStack paddingTop='3' paddingBottom='2' justifyContent='space-between'>
        <Text>{`${monthNames[date.getMonth()].toUpperCase()} ${date.getDate()}`}</Text>
        <HStack>
          <BookmarkIcon />
          <Box width='3' />
          <ShareIcon />
        </HStack>
      </HStack>
    </Box >
  )
}
export default NewsCard
