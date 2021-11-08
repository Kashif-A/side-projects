import React from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/core'

import { Box, Text } from 'native-base'


const titles = [
  'UK',
  'US',
  'World',
  'Business',
  'Technology',
  'Sports'
]

export default ({ navigation }: {
  navigation: NavigationProp<ParamListBase, string, any, any>
}) => {
  const selection = (title: string) => {
    switch (title) {
      case 'US':
        return 'top-headlines?country=us'
      case 'UK':
        return 'everything?domains=bbc.co.uk'
      case 'World':
        return 'everything?q=world'
      case 'Business':
        return 'top-headlines?country=gb&category=business'
      case 'Technology':
        return 'top-headlines?country=gb&category=technology'
      case 'Sports':
        return 'top-headlines?country=gb&category=sports'
      default:
        return ''
    }
  }

  return (
    <Box justifyContent='space-between' flexDirection='row'>
      {titles.map(t =>
        <TouchableOpacity
          key={t}
          onPress={() => navigation.navigate('Latest News', {
            selected: selection(t)
          })}>
          <Box padding='3' paddingRight='3' paddingLeft='3'>
            <Text>{t}</Text>
          </Box>
        </TouchableOpacity>
      )}
    </Box>
  )
}
