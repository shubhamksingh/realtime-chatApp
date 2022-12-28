import { Box, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Search = () => {
  return (
    <Box  border='1px solid gray'>
        <Box>
            <Input placeholder='find a user' bg='transparent' border='none' />
        </Box>
        <Box color='white' display={'flex'} alignItems='center' gap='1rem' p='0.7rem' _hover={{bg:'#2f2d52'}}>
            <Image w='50px' h='50px' borderRadius={'50%'} src='https://images.pexels.com/photos/13853841/pexels-photo-13853841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loadd'/>
            <Text>Jane</Text>
        </Box>
    </Box>
  )
}

export default Search