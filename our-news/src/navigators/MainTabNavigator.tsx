import React, { Profiler } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Box, Text } from 'native-base'

import Header from '../components/Header'
import { BookmarkIcon } from '../svgs/BookmarkIcon'
import { LatestNewsIcon } from '../svgs/LatestNews'
import Bookmarks from '../views/Bookmarks'
import LatestNews from '../views/LatestNews'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Tab = createBottomTabNavigator()

const renderLabel = (text: string) =>
  <TouchableOpacity>
    <Box>
      <Text fontSize='xs'>{text}</Text>
    </Box>
  </TouchableOpacity>

export default () =>
  <Tab.Navigator screenOptions={{
    header: () => <Header />
  }}>
    <Tab.Screen
      name='Latest News'
      options={{
        tabBarLabel: () => renderLabel('Latest News'),
        tabBarIcon: () => <TouchableOpacity><LatestNewsIcon /></TouchableOpacity>,
        tabBarStyle: {
          paddingBottom: 15,
          paddingTop: 5,
          height: 80
        }
      }}
      component={LatestNews} />
    <Tab.Screen
      name='Saved'
      options={{
        tabBarLabel: () => renderLabel('Saved'),
        tabBarIcon: () => <TouchableOpacity><BookmarkIcon /></TouchableOpacity>,
        tabBarStyle: {
          paddingBottom: 15,
          paddingTop: 5,
          height: 80
        }
      }}
      component={Bookmarks} />
  </Tab.Navigator>
