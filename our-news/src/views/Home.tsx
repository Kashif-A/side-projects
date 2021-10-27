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

export default ({ newsData, bookmarkedNews, setBookmarkedNews }: HomeProps) => {
  console.log('bookmarkedNews:  ', bookmarkedNews)
  console.log('bookmarkedNews:  ', bookmarkedNews)
  return (
    <ScrollView showsVerticalScrollIndicator={false} flex={1}>
      {newsData.map(d =>
        <NewsCard
          {...d}
          key={`${d.title}${d.source.id}`}
          bookmarkedNews={bookmarkedNews}
          setBookmarkedNews={setBookmarkedNews}
          isBookmarked={bookmarkedNews.find(b => b.title === d.title) ? true : false}
        />)}
    </ScrollView >
  )
}
