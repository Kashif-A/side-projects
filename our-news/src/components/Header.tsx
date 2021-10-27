import React from 'react'

import { Box, HamburgerIcon, HStack, Image, SearchIcon, VStack } from 'native-base'

import Slider from './Slider'

const Header = () =>
  <>
    <VStack paddingBottom={4} safeAreaTop paddingLeft='3' paddingRight='3'>
      <HStack justifyContent='space-between'>
        <Box padding='2.5'>
          <HamburgerIcon size='sm' />
        </Box>
        <Box flex='1' alignItems='center'>
          <Image alt='logo' source={require('../../assets/images/logo.png')} resizeMode='contain' height='12' />
        </Box>
        <Box padding='2.5'>
          <SearchIcon size='sm' />
        </Box>
      </HStack>
    </VStack>

    <Slider />

    <Box
      position='absolute'
      bottom={0}
      left={0}
      right={0}
      padding='0.35'
      shadow='5'
      backgroundColor='black' />
  </>


export default Header
