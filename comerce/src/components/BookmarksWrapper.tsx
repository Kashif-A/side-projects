import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useIsFocused, useNavigation} from '@react-navigation/core'

import {Box} from 'native-base'

import {News} from '../../App'
import {AppState} from 'react-native'

export interface BookmarksWrapperProps {
  children: (
    news: News[],
    setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>,
  ) => React.ReactNode;
}

export default ({children}: BookmarksWrapperProps) => {
  const [bookmarkedNews, setBookmarkedNews] = React.useState<News[]>([])

  const isFocused = useIsFocused()
  const nav = useNavigation()

  React.useEffect(() => {
    if (isFocused) {
      AsyncStorage.getItem('our-news-bookmarks')
        .then(nb => nb && setBookmarkedNews(JSON.parse(nb)))
        .catch()
    }
  }, [isFocused])

  React.useEffect(() => {
    AppState.addEventListener('change', appState => {
      if (appState.match(/inactive|background/)) {
        setBookmarkedNews(bookmarkedNews)
      }
    })

    const blurUnsubscribe = nav.addListener('blur', () => {
      setBookmarkedNews(bookmarkedNews)
    })

    return () => {
      AppState.removeEventListener('change', () => {})
      blurUnsubscribe()
    }
  }, [isFocused, nav, bookmarkedNews])

  React.useEffect(() => {
    AsyncStorage.setItem('our-news-bookmarks', JSON.stringify(bookmarkedNews))
  }, [bookmarkedNews])

  return <Box flex={1}>{children(bookmarkedNews, setBookmarkedNews)}</Box>
}
