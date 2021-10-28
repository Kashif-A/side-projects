import React from 'react'
import { ImageStyle, ViewStyle } from 'react-native'

import { Box, Flex, Text, HStack, Image, Divider, Switch, ScrollView } from 'native-base'

const DrawerContent = () =>
  <ScrollView style={styles.container}>
    <Flex flex={1} padding='6' justifyContent='center'>

      <Text fontFamily='Arial' fontSize='lg'>Log In</Text>
      <Box padding='3' />

      <Divider />

      <Box padding='4' />
      <Text fontFamily='Arial' fontSize='sm'>SETTINGS</Text>
      <Box padding='2' />

      <HStack paddingTop='5' justifyContent='space-between' alignItems='center'>
        <HStack>
          <Box width='10'>
            <Image
              style={styles.image}
              resizeMode='contain'
              source={require('../../assets/images/world.png')} />
          </Box>
          <Text fontSize='lg'>Edition</Text>
        </HStack>
        <Text fontSize='md'>{'English  >'}</Text>
      </HStack>

      <HStack paddingTop='5' alignItems='center' justifyContent='space-between'>
        <HStack flex={1}>
          <Box width='10'>
            <Image
              style={styles.image}
              resizeMode='contain'
              source={require('../../assets/images/moon.png')} />
          </Box>
          <Text fontSize='lg'>Notifications</Text>
        </HStack>
        <Switch size='sm' />
      </HStack>

      <HStack paddingTop='5' alignItems='center'>
        <HStack flex={1}>
          <Box width='10'>
            <Image
              style={styles.image}
              resizeMode='contain'
              source={require('../../assets/images/gallery.png')} />
          </Box>
          <Text fontSize='lg'>Image Autoplay</Text>
        </HStack>
        <Switch alignSelf='flex-end' size='sm' />
      </HStack>

      <HStack paddingTop='5' alignItems='center'>
        <Box width='10'>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={require('../../assets/images/folder.png')} />
        </Box>
        <Text fontSize='lg'>Manage Data</Text>
      </HStack>

      <HStack paddingTop='5' alignItems='center'>
        <Box width='10'>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={require('../../assets/images/learn-more.png')} />
        </Box>
        <Text fontSize='lg'>Learn More</Text>
      </HStack>

      <HStack paddingTop='5' alignItems='center'>
        <Box width='10'>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={require('../../assets/images/info.png')} />
        </Box>
        <Text fontSize='lg'>About</Text>
      </HStack>

      <HStack paddingTop='5' alignItems='center'>
        <Box width='10'>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={require('../../assets/images/support.png')} />
        </Box>
        <Text fontSize='lg'>Support</Text>
      </HStack>

    </Flex>
  </ScrollView>

const styles: {
  container: ViewStyle

  image: ImageStyle
} = {
  container: {
    paddingTop: 70
  },
  image: {
    height: 23,
    width: 23
  }
}

export default DrawerContent
