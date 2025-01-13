import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";

const Landing = () => {
  return (
    <>
      <Header />

 

      <Navbar />

      <Box
        as="section"
        w="full"
        h={{ base: "60vh", md: "80vh" }}
        bgImage="url('https://images.unsplash.com/photo-1524060814534-c8540185978d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        bgSize="cover"
        bgPosition="center"
        position={"relative"}
        bgRepeat="no-repeat"
        display="flex"
        justifyContent="center"
        alignItems="center"
         pt="200px"
      >
        
        <Flex
          w="full"
          direction="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Landing;
