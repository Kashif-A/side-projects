import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerActions, useNavigation } from '@react-navigation/native'

import {
  Box,
  HamburgerIcon,
  Heading,
  HStack,
  Image,
  Flex,
  VStack
} from 'native-base'

export default () => {
  const nav = useNavigation()
  return (
    <>
      <VStack paddingBottom={4} safeAreaTop paddingLeft='3' paddingRight='3'>
        <HStack justifyContent='space-between'>
          <TouchableOpacity
            onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
            <Box paddingTop='5' paddingLeft='2'>
              <HamburgerIcon size='sm' />
            </Box>
          </TouchableOpacity>
          <Box>
            <Image
              alt='logo'
              source={require('../../assets/images/logo.png')}
              resizeMode='contain'
              height='12'
            />
          </Box>
          <Flex flexDirection='row' paddingTop='5'>
            <Heading fontSize='sm' paddingRight='2'>FLIGHTS</Heading>
            <Heading fontSize='sm' paddingRight='2'>HOTELS</Heading>
            <Heading fontSize='sm' paddingRight='2'>NOMAD</Heading>
          </Flex>
        </HStack>
      </VStack>

      <Box
        position='absolute'
        bottom={0}
        left={0}
        right={0}
        padding='0.35'
        shadow='5'
        backgroundColor='black'
      />
    </>
  )
}
