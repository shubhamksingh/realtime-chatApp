import { Box } from '@chakra-ui/react'
import React from 'react'
import Message from './Message'
import '../css/Messages.css'
const Messages = () => {
  return (
      <Box  height='80%' border='1px solid black' overflow='scroll' scrollbarWidth='none' className='content' pt='1rem'>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </Box>
    
  )
}

export default Messages