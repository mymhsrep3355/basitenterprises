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
  backgroundImage: `url('/pattern.png')`, // Replace with your PNG path
  backgroundClip: "text",
  textFillColor: "transparent",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const wordsLine1 = ["Basit", "Enterprises,"];
const wordsLine2 = ["Excellence", "in", "Service,"];
const wordsLine3 = ["Commitment", "to", "Care"];

const HeroSection = () => {
  return (
    <Box
      as="section"
      w="100%"
      h={{ base: "80vh", sm: "35vh", md: "70vh", lg: "65vh" }}
      bgImage="url('https://images.unsplash.com/photo-1524060814534-c8540185978d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      px={{ base: "6", md: "12", lg: "16" }} // Padding for left alignment
    >
      <Flex direction="column" textAlign="left" mt={{ base: 10, md: 10, lg: 16 }}>
        {/* Line 1 */}
        <MotionText
          fontSize={{ base: "3xl", sm: "2xl", md: "5xl" }}
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
        </MotionText>

        {/* Line 2 */}
        <MotionText
          fontSize={{ base: "3xl", sm: "2xl", md: "5xl" }}
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
        </MotionText>

        {/* Line 3 */}
        <MotionText
          fontSize={{ base: "3xl", sm: "2xl", md: "5xl" }}
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
        </MotionText>
      </Flex>
    </Box>
  );
};

export default HeroSection;
