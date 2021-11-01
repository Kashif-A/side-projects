import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { extendTheme, NativeBaseProvider } from 'native-base'

import MainTabNavigator from './src/navigators/MainTabNavigator'
import DrawerContent from './src/navigators/DrawerContent'

export interface News {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

// const theme = extendTheme({
//   fontConfig: {
//     TNR: {
//       200: {
//         normal: 'TimesNewRomanPSMT',
//         italic: 'TimesNewRomanPS-ItalicMT'
//       },
//       300: {
//         normal: 'TimesNewRomanPSMT',
//         italic: 'TimesNewRomanPS-ItalicMT'
//       },
//       400: {
//         normal: 'TimesNewRomanPSMT'
//       },
//       500: {
//         normal: 'TimesNewRomanPSMT'
//       },
//       600: {
//         normal: 'TimesNewRomanPS-BoldMT',
//         italic: 'TimesNewRomanPS-BoldItalicMT'
//       },
//       700: {
//         normal: 'TimesNewRomanPS-BoldMT',
//         italic: 'TimesNewRomanPS-BoldItalicMT'
//       }
//     }
//   },
//   fonts: {
//     heading: 'TNR',
//     body: 'TNR',
//     mono: 'TNR'
//   }
// })

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Drawer.Navigator drawerContent={() => <DrawerContent />}>
            <Drawer.Screen
              options={{
                header: () => null
              }}
              name='MainTabs'
              component={MainTabNavigator}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  )
}

export default App
