import React from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Motion component
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);

const Banner = ({ heading, rightImage }) => {
  const headingFontSize = useBreakpointValue({
    base: "35px", // smaller screens
    md: "28px", // medium screens
    lg: "40px", // larger screens
  });

  return (
    <MotionBox
      position="relative"
      width="100%"
      bg="linear-gradient(115deg, rgba(0, 0, 0, 1), rgba(255, 0, 30, 0.6))"
      backdropFilter="blur(2px)"
      px={{ base: "16px", md: "24px", lg: "32px" }}
      pt={{ base: "5px", md: "10px", lg: "0px" }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      color="white"
      overflow="hidden"
      maxWidth="100%"
      minHeight="150px"
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation on load
      transition={{
        duration: 1, // Animation duration
        ease: "easeOut", // Smooth easing function
      }}
    >
      {/* Left Section */}
      <Box
        flex="1"
        mb={{ base: "16px", md: "0" }}
        textAlign={{ base: "center", md: "center" }}
      >
        <MotionHeading
          fontSize={headingFontSize}
          fontWeight="bold"
          bgGradient="linear(to-r, gray.50, gray.100)"
          bgClip="text"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          initial={{ x: -50, opacity: 0 }} // Slide in from the left
          animate={{ x: 0, opacity: 1 }} // Final state
          transition={{
            duration: 0.8, // Duration for the text animation
            delay: 0.2, // Small delay after the main banner animation
          }}
        >
          {heading}
        </MotionHeading>
        {/* <Box h="2px" w="50px" bg="red.500" mb="6" borderRadius="full" /> */}
        {/* <Text
          as="a"
          href="#"
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="medium"
          display="inline-flex"
          alignItems="center"
          textDecoration="none"
          transition="all 0.2s ease-in-out"
          _hover={{
            textDecoration: "underline",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          VIEW ALL{" "}
          <Box as="span" ml="5px">
            →
          </Box>
        </Text> */}
      </Box>

      {/* Right Image Section */}
      <Flex
        alignItems="center"
        justifyContent="center"
        flex="1"
        maxWidth="100%"
        position="relative"
      >
        <MotionImage
          src={rightImage}
          alt="Right Image"
          maxH="150px"
          objectFit="contain"
          ml={{ base: "0", md: "20px" }}
          initial={{ scale: 0.8, opacity: 0 }} // Shrink and fade
          animate={{ scale: 1, opacity: 1 }} // Scale up and fade in
          transition={{
            duration: 0.8, // Image animation duration
            delay: 0.4, // Starts after the heading animation
          }}
        />
      </Flex>

      {/* Background Text */}
      {/* <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontSize={{ base: "64px", md: "96px", lg: "128px" }}
        fontWeight="bold"
        color="rgba(255, 255, 255, 0.1)"
        zIndex="0"
        pointerEvents="none"
        textAlign="center"
      >
        HOW
      </Box> */}
    </MotionBox>
  );
};

export default Banner;
