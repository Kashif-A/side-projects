import { Box, ScrollView, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const titles = [
  'What\'s new',
  'UK',
  'US',
  'World',
  'Finance',
  'Sports',
  'Weather'
]

const Slider = () =>
  <ScrollView horizontal={true}>
    {titles.map(t =>
      <TouchableOpacity
        key={t}
        onPress={() => { }}>
        <Box padding='3' paddingRight='3' paddingLeft='3'>
          <Text>{t}</Text>
        </Box>
      </TouchableOpacity>
    )}
  </ScrollView>

export default Slider
