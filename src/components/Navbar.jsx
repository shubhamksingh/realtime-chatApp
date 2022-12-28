import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box display={'flex'} alignItems='center' justifyContent={'space-between'} p='1rem' bg='#2f2d52' h='4rem'>
        <Text color='white' fontWeight={'bold'} fontSize='20px'>Chatters</Text>
        <Box display={'flex'} gap='0.7rem' alignItems={'center'}>
            <Image src='https://images.pexels.com/photos/14211152/pexels-photo-14211152.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' bg='#ddddf7' objectFit={'cover'} h='28px' w='28px' borderRadius={'50%'}></Image>
            <Text color={'white'}>John</Text >
            <Button h='1.7rem' w='4rem'>Logout</Button>
        </Box>
    </Box>
  )
}

export default Navbar