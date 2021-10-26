import React from 'react'
import { View, Text } from 'react-native'

import {
  Center,
  Heading,
  ScrollView
} from 'native-base'

import { News } from '../../App'

import { BookmarkIcon } from '../svgs/BookmarkIcon'

export interface HomeProps {
  news: News[]
}

export default ({ news }: HomeProps) =>
  <ScrollView showsVerticalScrollIndicator={false} flex={1}>
    {news ? (
      <View style={{ padding: 20, backgroundColor: 'aqua' }} />
    )
      : (
        <Center>
          <BookmarkIcon />
          <Heading>Saved Articles</Heading>
          <Text>Saved articles are stored here. Tap the icon on any article to add it to your collection.</Text>
        </Center>
      )
    }
  </ScrollView >
