import { Box, Button, Center, FormControl, FormLabel, Heading, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Box display={'flex'} justifyContent='center' alignItems={'center'} h='100vh' bg='#a7bcff'>
        <FormControl w={{lg:'30%'}} boxShadow='0px 0px 15px -9px' p='3rem' borderRadius={'1rem'} bg='white'>
            <Center ><Heading mt='0.5rem' mb='0.5rem' color='#5d5d8d'>Chatters</Heading></Center>
            <Center ><Text mt='0.5rem' mb='0.5rem' color='#5d5d8d'>Login</Text></Center>
            <Input mt='0.5rem' mb='0.5rem' placeholder='email' border='none' borderBottom={'1px solid 	#D3D3D3'} />
            <Input mt='0.5rem' mb='0.5rem'  placeholder='password' border='none' borderBottom={'1px solid 	#D3D3D3'} />
            <Button  display='block' m='auto' mt='0.5rem' mb='0.5rem'  bg='#5d5d8d' color='white' _hover={'none'}>Sign up</Button>
            <Center><Text color='#5d5d8d'>You don't have an account? Register</Text></Center>
        </FormControl>
    </Box>
  )
}

export default Login