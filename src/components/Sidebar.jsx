import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = () => {
  return (
    <Box>
      <Navbar/>
      <Search/>
      <Chats/> 
    </Box>
  );
};

export default Sidebar;
