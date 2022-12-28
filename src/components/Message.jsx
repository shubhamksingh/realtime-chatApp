import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Message = () => {
  return (
    <Box display='flex' gap='2rem'>
      <Box mb='1rem'>
        <Image objectFit='cover' src='https://images.pexels.com/photos/10769588/pexels-photo-10769588.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' h='50px' w='50px'borderRadius={'50%'}/>
        <Text color='gray'>just now</Text>
      </Box>
      <Box>
        <Text color='white' bg='#2f2d52' p='0.5rem' borderRadius='0.5rem'>Hello</Text>
        <Image/>
      </Box>
    </Box>
  )
}

export default Message