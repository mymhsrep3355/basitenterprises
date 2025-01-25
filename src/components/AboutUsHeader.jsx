import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const AboutUsHeader = () => {
  return (
    <Box
      w="100%"
      h="400px" 
      position="relative"
      bgImage="url('https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" // Replace with your image URL
      bgSize="cover"
      bgPosition="center"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(5px)",
        zIndex: 1,
      }}
    >
      <VStack
        spacing={4}
        align="center"
        justify="center"
        position="relative"
        zIndex={2} 
        h="100%"
        textAlign="center"
        px={4}
      >
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontFamily="'Meow Script', cursive" 
          color="red.600" // Match the text color from the reference
        >
          Crafting Wellness with Precision and Passion
        </Heading>
        <Heading
          as="h2"
          fontSize={{ base: "lg", md: "xl" }}
          fontFamily="'Poppins', sans-serif"
          color="gray.700"
          fontWeight="medium"
        >
          Because only healthy cats are happy cats
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          fontFamily="'Poppins', sans-serif"
          color="gray.600"
          maxW="800px"
        >
          Today a good cat food must do much more than fill your feline friend’s
          tummy. More importantly, the food must be tasty and healthy. This is
          why we have been developing and refining exquisite recipes for our
          healthy pet food for many years. And in doing this we pursue the
          following values:
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutUsHeader;
