import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const primaryRed = "#C02232";
const textWhite = "#383938";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// const gradientText = {
//   backgroundImage: `linear-gradient(
//     105deg,
//     hsl(0deg 65% 50%) 0%,
//     hsl(315deg 60% 55%) 10%,
//     hsl(330deg 70% 60%) 20%,
//     hsl(340deg 75% 65%) 30%,
//     hsl(350deg 80% 70%) 40%,
//     hsl(360deg 85% 75%) 50%,
//     hsl(10deg 90% 80%) 60%,
//     hsl(20deg 92% 85%) 70%,
//     hsl(30deg 94% 90%) 80%,
//     hsl(40deg 96% 93%) 90%,
//     hsl(50deg 98% 95%) 100%
//   )`,
//   backgroundClip: "text",
//   textFillColor: "transparent",
// };


const gradientText = {
  backgroundImage: `url('/pattern.png')`, // Replace with your PNG path
  backgroundClip: "text",
  textFillColor: "transparent",
  backgroundSize: "cover", 
  backgroundRepeat: "no-repeat", 
  backgroundPosition: "center", 
};
const words = [
  "Basit",
  "Enterprises,",
  "Excellence",
  "in",
  "Service,",
  "Commitment",
  "to",
  "Care",
];

const HeroSection = () => {
  return (
    <Box
      as="section"
      w="100%"
      h={{ base: "80vh", sm: "35vh", md: "70vh", lg: "65vh" }}
      sx={{
        "@media (max-width: 480px)": {
          h: "30vh",
        },
      }}
      bgImage="url('https://images.unsplash.com/photo-1524060814534-c8540185978d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      justifyContent="center"
      alignItems="center"
      pt={{ base: "0px", sm: "40px", md: "80px", lg: "120px" }}
    >
      <Flex
        w="full"
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <MotionText
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          textAlign="center"
          mt={1}
          
          sx={gradientText}
          initial="hidden"
          animate="visible"
          variants={textContainerVariants}
        >
          {words.map((word, index) => (
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
