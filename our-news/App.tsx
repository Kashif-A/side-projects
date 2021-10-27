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
import { BookmarkIcon } from './src/svgs/BookmarkIcon'
import { LatestNewsIcon } from './src/svgs/LatestNews'
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
  const renderLabel = (text: string) =>
    <Box marginBottom='-2.5'>
      <Text fontSize='xs'>{text}</Text>
    </Box>

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
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
              component={() => <Home />} />
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
              component={() => <Bookmarks />} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider >
  )
}
export default App
