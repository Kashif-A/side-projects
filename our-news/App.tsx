import React from 'react'
import {
  Box,
  extendTheme,
  NativeBaseProvider, Text
} from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Home from './src/views/Home'
import Header from './src/components/Header'
import { ActivityIndicator } from 'react-native'
import { BookmarkIcon } from './src/svgs/BookmarkIcon'
import { LatestNewsIcon } from './src/svgs/LatestNews'
import BookmarksWrapper from './src/components/BookmarksWrapper'
import Bookmarks from './src/views/Bookmarks'

export interface News {
  source: {
    id: string
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

const theme = extendTheme({
  fontConfig: {
    TNR: {
      200: {
        normal: 'Playfair-Regular',
        italic: 'TimesNewRomanPS-ItalicMT'
      },
      300: {
        normal: 'Playfair-Regular',
        italic: 'TimesNewRomanPS-ItalicMT'
      },
      400: {
        normal: 'TimesNewRomanPSMT'
      },
      500: {
        normal: 'TimesNewRomanPSMT'
      },
      600: {
        normal: 'TimesNewRomanPS-BoldMT',
        italic: 'TimesNewRomanPS-BoldItalicMT'
      },
      700: {
        normal: 'TimesNewRomanPS-BoldMT',
        italic: 'TimesNewRomanPS-BoldItalicMT'
      }
    }
  },
  fonts: {
    heading: 'TNR',
    body: 'TNR',
    mono: 'TNR'
  }
})

const Tab = createBottomTabNavigator()

const App = () => {
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

  const renderLabel = (text: string) =>
    <Box marginBottom='-2.5'>
      <Text fontSize='xs'>{text}</Text>
    </Box>

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <BookmarksWrapper>
          {(bookmarkedNews: News[], setBookmarkedNews: React.Dispatch<React.SetStateAction<News[]>>) =>
            <NavigationContainer>
              <Tab.Navigator screenOptions={{
                header: () => <Header />
              }}>
                <Tab.Screen
                  name='Latest News'
                  options={{
                    tabBarLabel: () => renderLabel('Latest News'),
                    tabBarIcon: () => <Box marginBottom='-2'><LatestNewsIcon /></Box>
                  }}
                  component={() => newsData
                    ? <Home
                      newsData={newsData}
                      setBookmarkedNews={setBookmarkedNews}
                      bookmarkedNews={bookmarkedNews} />
                    : <ActivityIndicator />} />
                {/* <Tab.Screen
                  name={'Today\'s Paper'}
                  options={{
                    tabBarLabel: () => renderLabel('Today\'s Paper'),
                    tabBarIcon: () => <Box marginBottom='-2'><NewsIcon /></Box>
                  }}
                  component={() => newsData
                    ? <Home
                      newsData={newsData}
                      setBookmarkedNews={setBookmarkedNews}
                      bookmarkedNews={bookmarkedNews} />
                    : <ActivityIndicator />} /> */}
                <Tab.Screen
                  name='Saved'
                  options={{
                    tabBarLabel: () => renderLabel('Saved'),
                    tabBarIcon: () => <Box marginBottom='-2'><BookmarkIcon /></Box>
                  }}
                  component={() => <Bookmarks setBookmarkedNews={setBookmarkedNews} bookmarkedNews={bookmarkedNews} />} />
              </Tab.Navigator>
            </NavigationContainer>}
        </BookmarksWrapper>
      </NativeBaseProvider>
    </SafeAreaProvider>
  )
}
export default App
