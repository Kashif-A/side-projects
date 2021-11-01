import React from 'react'
import {ImageStyle, ViewStyle} from 'react-native'

import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  Divider,
  Switch,
  ScrollView
} from 'native-base'
import {TouchableOpacity} from 'react-native-gesture-handler'

export default () => (
  <>
    <ScrollView style={styles.container}>
      <Flex padding='6' justifyContent='center'>
        <Text fontFamily='Arial' fontSize='lg'>
          Log In
        </Text>
        <Box padding='3' />

        <Divider />

        <Box padding='4' />
        <Text fontFamily='Arial' fontSize='sm'>
          SETTINGS
        </Text>
        <Box padding='2' />

        <TouchableOpacity>
          <HStack
            paddingTop='5'
            justifyContent='space-between'
            alignItems='center'>
            <HStack>
              <Box width='10'>
                {/* <Image
                  style={styles.image}
                  resizeMode='contain'
                  source={require('../../assets/images/world.png')} /> */}
              </Box>
              <Text fontSize='lg'>Edition</Text>
            </HStack>
            <Text fontSize='md'>{'English  >'}</Text>
          </HStack>
        </TouchableOpacity>

        <HStack
          paddingTop='5'
          alignItems='center'
          justifyContent='space-between'>
          <HStack flex={1}>
            <Box width='10'>
              <Image
                style={styles.image}
                resizeMode='contain'
                source={require('../../assets/images/moon.png')}
              />
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
                source={require('../../assets/images/gallery.png')}
              />
            </Box>
            <Text fontSize='lg'>Image Autoplay</Text>
          </HStack>
          <Switch alignSelf='flex-end' size='sm' />
        </HStack>

        <TouchableOpacity>
          <HStack paddingTop='5' alignItems='center'>
            <Box width='10'>
              <Image
                style={styles.image}
                resizeMode='contain'
                source={require('../../assets/images/folder.png')}
              />
            </Box>
            <Text fontSize='lg'>Manage Data</Text>
          </HStack>
        </TouchableOpacity>

        <TouchableOpacity>
          <HStack paddingTop='5' alignItems='center'>
            <Box width='10'>
              <Image
                style={styles.image}
                resizeMode='contain'
                source={require('../../assets/images/learn-more.png')}
              />
            </Box>
            <Text fontSize='lg'>Learn More</Text>
          </HStack>
        </TouchableOpacity>

        <TouchableOpacity>
          <HStack paddingTop='5' alignItems='center'>
            <Box width='10'>
              <Image
                style={styles.image}
                resizeMode='contain'
                source={require('../../assets/images/info.png')}
              />
            </Box>
            <Text fontSize='lg'>About</Text>
          </HStack>
        </TouchableOpacity>

        <TouchableOpacity>
          <HStack paddingTop='5' alignItems='center'>
            <Box width='10'>
              <Image
                style={styles.image}
                resizeMode='contain'
                source={require('../../assets/images/support.png')}
              />
            </Box>
            <Text fontSize='lg'>Support</Text>
          </HStack>
        </TouchableOpacity>
      </Flex>
    </ScrollView>

    <Box backgroundColor='gray.300' padding='5' paddingBottom='9'>
      <Box paddingTop='9' />

      <Text fontFamily='Arial' bold={true} fontSize='lg'>
        Contact Details
      </Text>
      <Box paddingTop='3' />
      <Text fontFamily='Arial' fontSize='sm'>
        {''}
      </Text>
      <Text fontFamily='Arial' fontSize='sm'>
        {''}
      </Text>
      <Text fontFamily='Arial' fontSize='sm'>
        https://github.com/kashif-a
      </Text>

      <Box paddingTop='9' />
    </Box>
  </>
)

const styles: {
  container: ViewStyle;

  image: ImageStyle;
} = {
  container: {
    paddingTop: 40
  },
  image: {
    height: 23,
    width: 23
  }
}
