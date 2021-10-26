import React from 'react'
import {
  extendTheme,
  NativeBaseProvider, View
} from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './src/views/Home'
import Header from './src/components/Header'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ActivityIndicator } from 'react-native'

export interface News<T = string> {
  source: {
    id: T
    name: T
  }
  author: T
  title: T
  description: T
  url: T
  urlToImage: T
  publishedAt: T
  content: T
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

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{
            header: () => <Header />
          }}>
            <Tab.Screen name='Latest News' component={() => data ? <Home data={data} /> : <ActivityIndicator />} />
            <Tab.Screen name={'Today\'s Paper'} component={() => <View style={{ padding: 20, backgroundColor: 'red' }} />} />
            <Tab.Screen name='Saved' component={() => <View style={{ padding: 20, backgroundColor: 'green' }} />} />
            <Tab.Screen name='Notifications' component={() => <View style={{ padding: 20, backgroundColor: 'orange' }} />} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  )
}
export default App
