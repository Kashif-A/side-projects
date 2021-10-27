import React from 'react'
import {
  ScrollView
} from 'native-base'

import { News } from '../../App'
import NewsCard from '../components/NewsCard'
import BookmarksWrapper from '../components/BookmarksWrapper'
import { ActivityIndicator, Share } from 'react-native'

export interface HomeProps {
}


export const shareMessage = (message: string, subject?: string) =>
  Share.share({
    message,
    title: subject
  }).catch()

export default ({ }: HomeProps) => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [newsData, setNewsData] = React.useState<News[]>()

  React.useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-10-25&sortBy=popularity&apiKey=fed9b93d26564ec2baf0c3226c3395dd')
      .then(resp => {
        if (resp) {
          resp.json().then(
            d => {
              if (d) {
                setNewsData(d.articles)
                setLoading(false)
              }
            }
          )
        }
      })
  }, [])

  return (
    <BookmarksWrapper>
      {(bookmarkedNews: News[], setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>) =>
        !loading
          ? (
            <ScrollView showsVerticalScrollIndicator={false} flex={1}>
              {newsData?.map(d =>
                <NewsCard
                  {...d}
                  key={`${d.title}${d.source.id}`}
                  bookmarkedNews={bookmarkedNews}
                  setBookmarkedNews={setBookmarkedNews}
                />)}
            </ScrollView >
          )
          : (
            <ActivityIndicator size='large' />
          )}
    </BookmarksWrapper>
  )
}
