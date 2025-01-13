import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      as="section"
      w="100%"
      h={{ base: "80vh", sm: "35vh", md: "70vh", lg: "65vh" }} // Fixed height for consistency
      bgImage="url('https://images.unsplash.com/photo-1524060814534-c8540185978d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      justifyContent="center"
      alignItems="center"
      pt={{ base: "0px", sm: "40px", md: "80px", lg: "120px" }} // Controlled padding
    >
      <Flex
        w="full"
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        {/* Add any content here */}
      </Flex>
    </Box>
  );
};

export default HeroSection;
