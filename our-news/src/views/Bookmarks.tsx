import React from 'react'
import { View, ViewStyle } from 'react-native'

import {
  Text,
  Heading,
  ScrollView
} from 'native-base'

import { News } from '../../App'

import { BookmarkIcon } from '../svgs/BookmarkIcon'
import NewsCard from '../components/NewsCard'
import { bookmark } from './Home'

export interface HomeProps {
  bookmarkedNews: News[]
  setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>
}

export interface HomeStyles {
  container: ViewStyle
}

export default ({ bookmarkedNews, setBookmarkedNews }: HomeProps) => {
  return bookmarkedNews.length > 0
    ? (
      <ScrollView showsVerticalScrollIndicator={false} flex={1}>
        {bookmarkedNews.map(b =>
          <NewsCard
            {...b}
            bookmarkedNews={bookmarkedNews}
            bookmark={(add) => bookmark(add, b, bookmarkedNews, setBookmarkedNews)}
            isBookmarked={true}
            key={`${b.title}${b.source.id}`}
          />)}
      </ScrollView>
    )
    : (
      <View style={styles.container}>
        <BookmarkIcon />
        <Heading marginTop='6'>Saved Articles</Heading>
        <Text fontSize='md' textAlign='center' marginTop='4'>Saved articles are stored here. Tap the icon on any article to add it to your collection.</Text>
      </View>
    )
}

const styles: HomeStyles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  }
}
