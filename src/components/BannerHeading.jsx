import React from "react";
import { Box, Flex, Heading, Link, Image } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
// backgroundImage,
const BannerHeading = ({backgroundImage, headingText, imageSrc }) => {
  return (
    <MotionBox
      as="section"
      w="full"
      h={{ base: "100px", sm: "50px", md: "80px", lg: "150px" }}
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      objectFit="cover"
    //   bgColor={'red.600'}
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Glassmorphism Background Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        bg="rgba(255, 0, 0, 0.3)" // Reddish overlay
        backdropFilter="blur(10px)"
        zIndex="1"
      />

      <Flex
        w="full"
        h="full"
        px={{ base: "6", md: "10", lg: "20" }}
        justifyContent="space-between"
        alignItems="center"
        zIndex="2"
      >
        {/* Left Section: Heading and Link */}
        <Box>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color="white"
            textTransform="uppercase"
          >
            {headingText}
          </Heading>
          {/* <Link
            display="flex"
            alignItems="center"
            mt="4"
            color="white"
            fontWeight="bold"
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ textDecoration: "underline" }}
          >
            View All <ChevronRightIcon ml="2" />
          </Link> */}
        </Box>

        {/* Right Section: Image */}
        <Flex
          alignItems="center"
          justifyContent="center"
          w={{ base: "50%", sm: "40%", md: "35%" }}
        >
          <Image
            src={imageSrc}
            alt="Banner Image"
            boxSize={{ base: "150px", sm: "200px", md: "250px", lg: "300px" }}
            objectFit="contain"
          />
        </Flex>
      </Flex>
    </MotionBox>
  );
};

export default BannerHeading;
