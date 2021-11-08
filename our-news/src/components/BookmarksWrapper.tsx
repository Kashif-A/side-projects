import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/core'

import { Box } from 'native-base'

import { News } from '../../App'

export interface BookmarksWrapperProps {
  children: (news: News[], setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>) => React.ReactNode
}

export default ({ children }: BookmarksWrapperProps) => {
  const [bookmarkedNews, setBookmarkedNews] = React.useState<News[]>([])

  const isFocused = useIsFocused()

  React.useEffect(() => {
    if (isFocused) {
      AsyncStorage.getItem('our-news-bookmarks')
        .then(nb => nb && setBookmarkedNews(JSON.parse(nb)))
        .catch()
    }
  }, [isFocused])

  return (
    <Box flex={1}>
      {children(bookmarkedNews, setBookmarkedNews)}
    </Box>
  )
}
