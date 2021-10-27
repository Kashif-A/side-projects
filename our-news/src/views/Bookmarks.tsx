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
import BookmarksWrapper from '../components/BookmarksWrapper'

export interface HomeProps {
}

export interface HomeStyles {
  container: ViewStyle
}

export default ({ }: HomeProps) => {
  return (
    <BookmarksWrapper>
      {(bookmarkedNews: News[], setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>) =>
        bookmarkedNews.length > 0
          ? (
            <ScrollView showsVerticalScrollIndicator={false} flex={1}>
              {bookmarkedNews.map(b =>
                <NewsCard
                  {...b}
                  isBookmarked={true}
                  bookmarkedNews={bookmarkedNews}
                  key={`${b.title}${b.source.id}`}
                  setBookmarkedNews={setBookmarkedNews}
                />)}
            </ScrollView>
          )
          : (
            <View style={styles.container}>
              <BookmarkIcon />
              <Heading marginTop='6'>Saved Articles</Heading>
              <Text fontSize='md' textAlign='center' marginTop='4'>Saved articles are stored here. Tap the icon on any article to add it to your collection.</Text>
            </View>
          )}
    </BookmarksWrapper>
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
