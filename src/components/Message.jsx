import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Message = () => {
  return (
    <Box display="flex" gap="1.5rem" flexDir={true && "row-reverse"} mb='1rem' >
      <Box mb="1rem">
        <Image
          objectFit="cover"
          src="https://images.pexels.com/photos/10769588/pexels-photo-10769588.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          h="50px"
          w="50px"
          borderRadius={"50%"}
        />
        <Text mt="0.5rem" fontSize="12px" color="gray">
          just now
        </Text>
      </Box>
      <Box maxW="80%" display={'flex'} flexDir='column' gap='10px' alignItems={'flex-end'} >
        <Text
          bg={(false && "white") || "#8da4f1"}
          p="0.5rem"
          borderRadius={(false && "0px 10px 10px 10px") || "10px 0px 10px 10px"}
          maxW={'max-content'}
        >
          Hello
        </Text>
        <Image
          w="50%"
          src="https://images.pexels.com/photos/14211152/pexels-photo-14211152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </Box>
    </Box>
  );
};

export default Message;
