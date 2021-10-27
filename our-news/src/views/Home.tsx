import React from 'react'
import {
  ScrollView
} from 'native-base'

import { News } from '../../App'
import NewsCard from '../components/NewsCard'

export interface HomeProps {
  newsData: News[]
  bookmarkedNews: News[]
  setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>
}

export const bookmark = (add: boolean, item: News, bookmarkedNews: News[], setBookmarkedNews: (payload: News[]) => void) => {
  const payload = add ? [{ ...bookmarkedNews, ...item }] : bookmarkedNews.filter(b => b.title !== item.title)
  setBookmarkedNews(payload)
}

export default ({ newsData, bookmarkedNews, setBookmarkedNews }: HomeProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} flex={1}>
      {newsData.map(d =>
        <NewsCard
          {...d}
          key={`${d.title}${d.source.id}`}
          bookmark={(add) => bookmark(add, d, bookmarkedNews, setBookmarkedNews)}
          isBookmarked={bookmarkedNews.find(b => b.title === d.title) ? true : false}
        />)}
    </ScrollView >
  )
}
