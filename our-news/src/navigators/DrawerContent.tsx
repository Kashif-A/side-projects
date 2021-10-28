import React from 'react'
import { ImageStyle } from 'react-native'

import { Box, Flex, Text, HStack, Image, Divider } from 'native-base'

const DrawerContent = () =>
  <Flex flex={1} padding='8' justifyContent='center'>

    <Text fontFamily='Aerial' fontSize='lg'>Log In</Text>

    <Divider />

    <HStack alignItems='center'>
      <Box width='10'>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={require('../../assets/images/world.png')} />
      </Box>
      <Text fontSize='xl'>Edition</Text>
    </HStack>

    <HStack alignItems='center'>
      <Box width='10'>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={require('../../assets/images/moon.png')} />
      </Box>
      <Text fontSize='xl'>Dark Theme</Text>
    </HStack>

    <HStack alignItems='center'>
      <Box width='10'>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={require('../../assets/images/gallery.png')} />
      </Box>
      <Text fontSize='xl'>GIF Image Autoplay</Text>
    </HStack>

    <HStack alignItems='center'>
      <Box width='10'>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={require('../../assets/images/folder.png')} />
      </Box>
      <Text fontSize='xl'>Manage Data</Text>
    </HStack>

    <HStack alignItems='center'>
      <Box width='10'>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={require('../../assets/images/learn-more.png')} />
      </Box>
      <Text fontSize='xl'>Learn More</Text>
    </HStack>

    <HStack alignItems='center'>
      <Box width='10'>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={require('../../assets/images/info.png')} />
      </Box>
      <Text fontSize='xl'>About</Text>
    </HStack>

    <HStack alignItems='center'>
      <Box width='10'>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={require('../../assets/images/support.png')} />
      </Box>
      <Text fontSize='xl'>Support</Text>
    </HStack>

  </Flex>

const styles: {
  image: ImageStyle
} = {
  image: {
    height: 23,
    width: 23
  }
}

export default DrawerContent
