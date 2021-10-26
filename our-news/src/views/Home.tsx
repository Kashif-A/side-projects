import React from 'react'
import {
  ScrollView
} from 'native-base'

import { News } from '../../App'
import NewsCard from '../components/NewsCard'

export interface HomeProps {
  data: News[]
}

export default ({ data }: HomeProps) =>
  <ScrollView showsVerticalScrollIndicator={false} flex={1}>
    {data.map(d =>
      <NewsCard
        {...d}
      />)}
  </ScrollView >
