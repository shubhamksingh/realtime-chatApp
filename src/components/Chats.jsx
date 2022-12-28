import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Chats = () => {
  return (
    <Box>
      <Box display={'flex'} p='0.7rem' gap='1rem' color='white'>
        <Image h='50px' w='50px' borderRadius={'50%'} src='https://images.pexels.com/photos/10769588/pexels-photo-10769588.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
        <Box >
          <Text fontWeight={800}>Jane</Text>
          <Text color='lightgray'>Hey, how are you?</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Chats