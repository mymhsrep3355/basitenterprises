import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const AboutUs = ({id, textImage, heading, description, mainImage, reverse }) => {
  return (
    <Box id={id} w="100%" bg="gray.50" py={{ base: 4, md: 6 }}>
      <Flex
        direction={{ base: "column", lg: reverse ? "row-reverse" : "row" }}
        align="center"
        justify="center"
        maxW="1200px"
        mx="auto"
        gap={{ base: 2, lg: 4 }} // Reduced gap between sections
        h={{ lg: "350px" }} // Reduced height for consistent sizing
      >
        {/* Left Text Section */}
        <MotionBox
          w={{ base: "100%", lg: "50%" }} // Ensures equal width
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          p={{ base: 4, md: 6 }} // Reduced padding
          bg="rgba(225, 238, 250, 0.7)" // Light hazy background
          h="100%" // Ensures equal height
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {textImage && (
            <Image
              src={textImage}
              alt="Section Illustration"
              boxSize="60px" // Reduced icon size
              objectFit="contain"
              mb={3} // Reduced margin-bottom
            />
          )}
          <Text
            fontWeight="bold"
            fontSize="xl" // Reduced font size
            color="gray.800"
            mb={1}
            fontFamily="'Poppins', sans-serif" 
            
          >
            {heading}
          </Text>
          <Text fontSize="sm" color="gray.600" fontFamily="'Poppins', sans-serif">
            {description}
          </Text>
        </MotionBox>

        {/* Right Image Section */}
        <MotionBox
          w={{ base: "100%", lg: "50%" }} // Ensures equal width
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%" // Ensures equal height
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={mainImage}
            alt="Section Main Visual"
            objectFit="cover" // Ensures the image content is scaled or cropped
            w="100%" // Full width
            h="100%" // Full height of the container
            maxH="400px" // Limit the maximum height for consistency
          />
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default AboutUs;
