import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ChatInput from './ChatInput'
import Messages from './Messages'

const Chat = () => {
  return (
    <Box>
      <Box display={'flex'} alignItems='center' justifyContent={'space-between'} p='1rem' bg='#5d5d8d' h='4rem'>
        <Text color='white' fontWeight={'bold'}>Jane</Text>
        <Box display={'flex'} gap='0.5rem' >
          <Image h='25px' src='https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/cam.png'/>
          <Image h='25px' src='https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/add.png'/>
          <Image h='25px' src='https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/more.png'/>
        </Box>
      </Box>
      <Box bg='#ddddf7' p='1rem' minH="calc(80vh - 128px)" overflow='scroll' overflowY={'hidden'} overflowX='hidden'>
        <Messages/>
      </Box>
      <Box bg='white' h='3.8rem' overflow='hidden' border='none'>
       <ChatInput/>
      </Box>
    </Box>
  )
}

export default Chat