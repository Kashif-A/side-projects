import React from 'react'
import {
  Box,
  extendTheme,
  NativeBaseProvider, Text, View
} from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './src/views/Home'
import Header from './src/components/Header'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ActivityIndicator } from 'react-native'
import { BookmarkIcon } from './src/svgs/BookmarkIcon'
import { NewsIcon } from './src/svgs/NewsIcon'
import { LatestNewsIcon } from './src/svgs/LatestNews'
import BookmarksProvider from './src/components/BookmarksProvider'
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
  const [data, setData] = React.useState<News[]>()

  React.useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-10-25&sortBy=popularity&apiKey=fed9b93d26564ec2baf0c3226c3395dd')
      .then(resp => {
        if (resp) {
          resp.json().then(
            d => {
              if (d) {
                setData(d.articles)
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
        <BookmarksProvider>
          {(news) =>
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
                  component={() => data ? <Home data={data} /> : <ActivityIndicator />} />
                <Tab.Screen
                  name={'Today\'s Paper'}
                  options={{
                    tabBarLabel: () => renderLabel('Today\'s Paper'),
                    tabBarIcon: () => <Box marginBottom='-2'><NewsIcon /></Box>
                  }}
                  component={() => <View style={{ padding: 20, backgroundColor: 'red' }} />} />
                <Tab.Screen
                  name='Saved'
                  options={{
                    tabBarLabel: () => renderLabel('Saved'),
                    tabBarIcon: () => <Box marginBottom='-2'><BookmarkIcon /></Box>
                  }}
                  component={() => <Bookmarks news={news} />} />
              </Tab.Navigator>
            </NavigationContainer>}
        </BookmarksProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  )
}
export default App
