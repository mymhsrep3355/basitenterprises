import React from "react";
import {
  Box,
  Text,
  VStack,
  Flex,
  Heading,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Slide from "../../components/coming_soon/Slide"; 
import logo from "/logo01-red.png"; 

const primaryRed = "#C02232";
const textWhite = "#383938";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // ✅ Delay between each word animation
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const gradientText = {
  backgroundImage: `linear-gradient(
    105deg,
    hsl(0deg 65% 50%) 0%,
    hsl(315deg 60% 55%) 10%,
    hsl(330deg 70% 60%) 20%,
    hsl(340deg 75% 65%) 30%,
    hsl(350deg 80% 70%) 40%,
    hsl(360deg 85% 75%) 50%,
    hsl(10deg 90% 80%) 60%,
    hsl(20deg 92% 85%) 70%,
    hsl(30deg 94% 90%) 80%,
    hsl(40deg 96% 93%) 90%,
    hsl(50deg 98% 95%) 100%
  )`,
  backgroundClip: "text",
  textFillColor: "transparent",
};

const words = [
  "Basit",
  "Enterprises,",
  "Precision",
  "in",
  "Care,",
  "Passion",
  "in",
  "Health",
];

const ComingSoonPage = () => {
  const headingSize = useBreakpointValue({ base: "3xl", md: "5xl" });
  const textSize = useBreakpointValue({ base: "md", md: "lg" });
  const navigate = useNavigate();

  return (
    <Box
      bg="gray.900"
      color={textWhite}
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <MotionBox
        width="50vw"
        height={{ base: "200px", md: "350px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <MotionBox
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={logo} // ✅ Uses your complete logo
            alt="Basit Enterprises"
            width={{ base: "250px", md: "500px" }}
            borderRadius="full"
            filter="drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.3))" // ✅ Slightly stronger shadow for emphasis
          />
        </MotionBox>
      </MotionBox>

      {/* ✅ Animated Text Slogan */}
      <MotionText
        fontSize={{ base: "xl", md: "3xl" }}
        fontWeight="bold"
        textAlign="center"
        mt={6}
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

      <MotionText
        fontSize={textSize}
        color="whiteAlpha.800"
        textAlign="center"
        maxW="700px"
        mt={4}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        We are launching the ultimate pet store & feed platform! 🐶🐱 Get ready
        for premium pet food, accessories, and expert care tips. Stay tuned for
        a seamless shopping experience for all pet lovers! 🐾
      </MotionText>

     
      <MotionButton
        mt={6}
        size="lg"
        bg={primaryRed}
        color="white"
        _hover={{ transform: "scale(1.05)", bg: "#a81b29" }}
        _active={{ transform: "scale(0.95)" }}
        borderRadius="full"
        fontWeight="bold"
        px={8}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        // onClick={() => navigate("/landing")}
      >
        Stay Notified 🚀
      </MotionButton>

    
      <Slide
        images={[
          "/images/1.jpeg",
          "/images/2.jpeg",
          "/images/3.jpeg",
          "/images/4.jpeg",
          "/images/5.jpeg",
          "/images/6.jpeg",
          "/images/7.jpeg",
        ]}
      />

      {/* ✅ Footer */}
      <Flex
        mt={12}
        fontSize="sm"
        color="whiteAlpha.700"
        justifyContent="center"
      >
        <Text>
          © {new Date().getFullYear()} Basit Enterprises - Pet Stores & Pet
          Foods. All Rights Reserved, Under Development by <b>@dotCodeInc</b>
        </Text>
      </Flex>
    </Box>
  );
};

export default ComingSoonPage;
