import React from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/core'

import { Box, ScrollView, Text } from 'native-base'


const titles = [
  'What\'s new',
  'UK',
  'US',
  'World',
  'Finance',
  'Sports',
  'Weather'
]

export default ({ navigation }: {
  navigation: NavigationProp<ParamListBase, string, any, any>
}) => {
  return (
    <ScrollView horizontal={true}>
      {titles.map(t =>
        <TouchableOpacity
          key={t}
          onPress={() => navigation.navigate('Latest News', {
            selected: t
          })}>
          <Box padding='3' paddingRight='3' paddingLeft='3'>
            <Text>{t}</Text>
          </Box>
        </TouchableOpacity>
      )}
    </ScrollView>
  )
}
