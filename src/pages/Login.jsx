import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { AuthContext } from "../context/AuthContext";
import {   signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const { currentUser } = React.useContext(AuthContext);
  console.log(currentUser);
  const toast = useToast();
  const [err, setErr] = React.useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("clicked");
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      navigate('/');
    } catch (error) {
      setErr(true);

      toast({
        title: "Error",
        description: "make password more than 6 characters/user already exists",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      // ..
    }
  };
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      h="100vh"
      bg="#a7bcff"
    >
      <form
        onSubmit={handleSubmit}
        style={{
          boxShadow: "0px 0px 15px -9px",
          padding: "3rem",
          borderRadius: "1rem",
          background: "white",
        }}
        // w={{ lg: "30%" }}
        // boxShadow="0px 0px 15px -9px"
        // p="3rem"
        // borderRadius={"1rem"}
        // bg="white"
      >
        <Center>
          <Heading mt="0.5rem" mb="0.5rem" color="#5d5d8d">
            Chatters
          </Heading>
        </Center>
        <Center>
          <Text mt="0.5rem" mb="0.5rem" color="#5d5d8d">
            Login
          </Text>
        </Center>
        <Input
          mt="0.5rem"
          mb="0.5rem"
          placeholder="email"
          border="none"
          borderBottom={"1px solid 	#D3D3D3"}
        />
        <Input
          mt="0.5rem"
          mb="0.5rem"
          placeholder="password"
          border="none"
          borderBottom={"1px solid 	#D3D3D3"}
        />
        <Button
          type="submit"
          display="block"
          m="auto"
          mt="0.5rem"
          mb="0.5rem"
          bg="#5d5d8d"
          color="white"
          _hover={"none"}
        >
          Login
        </Button>
        <Center>
          <Text color="#5d5d8d">You don't have an account? Register</Text>
        </Center>
      </form>
    </Box>
  );
};

export default Login;
