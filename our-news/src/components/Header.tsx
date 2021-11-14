import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerActions, useNavigation } from '@react-navigation/native'

import { Box, HamburgerIcon, HStack, Image, VStack } from 'native-base'

import Slider from './Slider'

export default () => {
  const nav = useNavigation()
  return (
    <>
      <VStack paddingBottom={1} safeAreaTop paddingLeft='3' paddingRight='3' marginTop='2'>
        <HStack justifyContent='space-between'>
          <Box position='absolute' top={3.5} left={3} zIndex={1}>
            <TouchableOpacity onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
              <Box>
                <HamburgerIcon size='sm' />
              </Box>
            </TouchableOpacity>
          </Box>

          <Box flex='1' alignItems='center'>
            <Image alt='logo' source={require('../../assets/images/logo.png')} resizeMode='contain' height='12' />
          </Box>
          {/* <TouchableOpacity>
            <Box padding='2.5'>
              <InfoOutlineIcon size='sm' />
            </Box>
          </TouchableOpacity>
          <TouchableOpacity>
            <Box padding='2.5'>
              <SearchIcon size='sm' />
            </Box>
          </TouchableOpacity> */}
        </HStack>
      </VStack>

      <Slider navigation={nav as any} />

      <Box
        position='absolute'
        bottom={0}
        left={0}
        right={0}
        padding='0.35'
        shadow='5'
        backgroundColor='black' />
    </>
  )
}
