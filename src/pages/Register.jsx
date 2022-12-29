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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import {auth} from ".../firebase"
import React from "react";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Register = () => {
  const toast = useToast();
  const [err, setErr] = React.useState(false);
  const handlesubmit = async e => {
    e.preventDefault();
    console.log("clicked");

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        error => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // console.log('File available at', downloadURL);
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
          });
        },
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
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
        w={{ lg: "30%" }}
        /*boxShadow='0px 0px 15px -9px' p='3rem' borderRadius={'1rem'} bg='white' onSubmit={handlesubmit}*/ style={{
          boxShadow: "0px 0px 15px -9px",
          padding: "3rem",
          borderRadius: "1rem",
          background: "white",
        }}
        onSubmit={handlesubmit}
      >
        <Center>
          <Heading mt="0.5rem" mb="0.5rem" color="#5d5d8d">
            Chatters
          </Heading>
        </Center>
        <Center>
          <Text mt="0.5rem" mb="0.5rem" color="#5d5d8d">
            Register
          </Text>
        </Center>
        <Input
          mt="0.5rem"
          mb="0.5rem"
          placeholder="display name"
          border="none"
          borderBottom={"1px solid 	#D3D3D3"}
        />
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
        <Input
          mt="0.5rem"
          mb="0.5rem"
          type="file"
          display={"none"}
          style={{ display: "none" }}
          id="file"
        />
        <FormLabel
          htmlFor="file"
          display={"flex"}
          alignItems="center"
          gap="1rem"
          cursor={"pointer"}
          fontSize="12px"
        >
          <Image
            w="55px"
            mt="0.5rem"
            mb="0.5rem"
            src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/addAvatar.png"
          />
          <Text color="#5d5d8d" display={"inline"}>
            Add an avatar
          </Text>
        </FormLabel>
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
          Sign up
        </Button>
        <Center>
          <Text color="#5d5d8d">You do have an account? Login</Text>
        </Center>
      </form>
    </Box>
  );
};

export default Register;
