import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { News } from '../../App'
import { Box } from 'native-base'

export interface BookmarksWrapperProps {
  children: (news: News[], setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>) => React.ReactNode
}

export default ({ children }: BookmarksWrapperProps) => {
  const [bookmarkedNews, setBookmarkedNews] = React.useState<News[]>([])
  React.useEffect(() => {
    AsyncStorage.removeItem('our-news-bookmarks')
    AsyncStorage.getItem('our-news-bookmarks')
      .then(nb => nb && setBookmarkedNews(JSON.parse(nb)))
      .catch()
  }, [])

  return (
    <Box flex={1}>
      {children(bookmarkedNews, setBookmarkedNews)}
    </Box>
  )
}
