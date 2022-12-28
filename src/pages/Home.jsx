import { Box } from '@chakra-ui/react'
import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <Box backgroundColor={'#a7bcff'} w='100%' h={'100vh'} display='flex' justifyContent={'center'} alignItems='center' >
      <Box w={{lg:'70%'}} h={{lg:"80%"}} border='1px solid white' borderRadius={'1rem'} display='flex' overflow={'hidden'}>
        <Box flex={1} bg='#3e3c61'>
        <Sidebar/>
        </Box>
        <Box flex={2}>
        <Chat />
        </Box>
      </Box>
    </Box>
  )
}

export default Home