import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Box, Text } from 'native-base'

import Header from '../components/Header'
import { BookmarkIcon } from '../svgs/BookmarkIcon'
import { LatestNewsIcon } from '../svgs/LatestNews'
import Bookmarks from '../views/Bookmarks'
import Home from '../views/Flights'

const Tab = createBottomTabNavigator()

const renderLabel = (text: string) =>
  <Box marginBottom='-2.5'>
    <Text fontSize='xs'>{text}</Text>
  </Box>

export default () =>
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
    <Tab.Screen
      name='Saved'
      options={{
        tabBarLabel: () => renderLabel('Saved'),
        tabBarIcon: () => <Box marginBottom='-2'><BookmarkIcon /></Box>
      }}
      component={() => <Bookmarks />} />
  </Tab.Navigator>