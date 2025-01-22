import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const gradientText = {
  backgroundImage: `url('/pattern.png')`, 
  backgroundClip: "text",
  textFillColor: "transparent",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const wordsLine1 = ["Basit", "Enterprises,"];
const wordsLine2 = ["precision", "in", "care,"];
const wordsLine3 = ["passion", "in", "health"];

const HeroSection = () => {
  return (
    <Box
      as="section"
      w="100%"
      h={{ base: "55vh", sm: "35vh", md: "65vh", lg: "100vh" }}
      bgImage="url('https://images.unsplash.com/photo-1524060814534-c8540185978d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      px={{ base: "0", md: "12", lg: "16" }}
    >
      {/* <Flex direction="column" textAlign="right" mt={{ base: 10, md: 10, lg: 16 }} bg={"rgba(0, 0, 0, 0.5)"} p={6}> */}

        {/* <MotionText
          fontSize={{ base: "1xl", sm: "1xl", md: "3xl" }}
          fontWeight="bold"
          lineHeight="1.5"
          sx={gradientText}
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
        >
          {wordsLine1.map((word, index) => (
            <MotionText
              key={index}
              variants={wordVariants}
              display="inline-block"
              mr={2}
              sx={gradientText}
            >
              {word}
            </MotionText>
          ))}
        </MotionText> */}

        {/* Line 2 */}
        {/* <MotionText
          // fontSize={{ base: "3xl", sm: "2xl", md: "5xl" }}
          fontSize={{ base: "1xl", sm: "1xl", md: "3xl" }}
          fontWeight="bold"
          lineHeight="1.2"
          sx={gradientText}
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
          mt="2"
        >
          {wordsLine2.map((word, index) => (
            <MotionText
              key={index}
              variants={wordVariants}
              display="inline-block"
              mr={2}
              sx={gradientText}
            >
              {word}
            </MotionText>
          ))}
        </MotionText> */}

        {/* Line 3 */}
        {/* <MotionText
          // fontSize={{ base: "3xl", sm: "2xl", md: "5xl" }}
          fontSize={{ base: "1xl", sm: "1xl", md: "3xl" }}
          fontWeight="bold"
          lineHeight="1.2"
          sx={gradientText}
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
          mt="2"
        >
          {wordsLine3.map((word, index) => (
            <MotionText
              key={index}
              variants={wordVariants}
              display="inline-block"
              mr={2}
              sx={gradientText}
            >
              {word}
            </MotionText>
          ))}
        </MotionText> */}
      {/* </Flex> */}
    </Box>
  );
};

export default HeroSection;
