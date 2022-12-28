import { Box, Button, FormLabel, Image, Input } from '@chakra-ui/react'
import React from 'react'

const ChatInput = () => {
  return (
    <Box h='100%' display={'flex'}>
    
      <Input border='none' h='100%' placeholder='type something...' _focus={{border : 'none'}} type='text'/>   
      <Box display='flex' gap='0.2rem' p='1rem' >
        <Image src='https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/attach.png'/>
        <Box h='100%'  w='3rem'>
          <Input type='file' display='none' id='file' />
          <FormLabel htmlFor='file'  h='100%' w='100%'>
            <Image display='block' h='100%' src ='https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/img.png' />
          </FormLabel>
        </Box>
        <Button display='block' ml='0.2rem' w='5rem' mt='-0.2rem' colorScheme='linkedin'>Send</Button>
      </Box>
    </Box>
  )
}

export default ChatInput