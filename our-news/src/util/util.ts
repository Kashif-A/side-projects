import { Share } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { News } from '../../App'

export const shareMessage = (message: string, subject?: string) =>
  Share.share({
    message,
    title: subject
  }).catch()

export const onPress = async (bookmarkedNews: News[], bookmarked: boolean, item: News, setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>) => {
  let payload: News[] = bookmarkedNews

  if (bookmarkedNews.length > 0) {
    if (bookmarked) {
      payload = payload.filter(p => p.title !== item.title)
      await AsyncStorage.setItem('our-news-bookmarks', JSON.stringify(payload))
    } else {
      payload.push(item)
      await AsyncStorage.setItem('our-news-bookmarks', JSON.stringify(payload))
    }
  } else {
    payload.push(item)
    await AsyncStorage.setItem('our-news-bookmarks', JSON.stringify([item]))
  }
  setBookmarkedNews([...payload])
}
