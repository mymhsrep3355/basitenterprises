import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Framer Motion Wrapper
const MotionBox = motion(Box);

const OurLocation = () => {
  // Animation Variants
  const mapVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <Box
      as="section"
      w="full"
      bg="white"
      overflow="hidden"
    >
      {/* Location Details */}
      {/* 
        Uncomment to add location details in future:
        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack
            align={{ base: "center", lg: "start" }}
            spacing="4"
            textAlign={{ base: "center", lg: "left" }}
            maxW="400px"
          >
            <Box
              bg="red.600"
              color="white"
              px="6"
              py="4"
              display="inline-block"
              mb="4"
            >
              <Heading size="sm" fontWeight="bold">
                Our Location
              </Heading>
            </Box>
            <Heading size="lg" fontWeight="bold" color="gray.700">
              Visit Us
            </Heading>
            <Box
              h="2px"
              w="50px"
              bg="red.500"
              borderRadius="full"
              mb="6"
            ></Box>
            <VStack align="start" spacing="3">
              <Flex align="center" gap="3">
                <Icon as={HiLocationMarker} boxSize="6" color="red.500" />
                <Text fontSize="sm" color="gray.600">
                  Ümit Mah. 7406/1 Sok. No: 9 Bornova – İZMİR – TURKEY
                </Text>
              </Flex>
              <Link
                href="https://www.google.com/maps"
                color="red.500"
                fontWeight="bold"
                isExternal
              >
                Get Directions
              </Link>
            </VStack>
          </VStack>
        </Flex>
      */}

      {/* Google Map */}
      <MotionBox
        w="full"
        h={{ base: "300px", md: "400px", lg: "400px" }}
        // borderRadius="md"
        overflow="hidden"
        boxShadow="lg"
        initial="hidden"
        animate="visible"
        variants={mapVariants}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13619.669932332847!2d74.30639689999999!3d31.555304599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919039534b93bab%3A0x4467bed85645271c!2sBasit%20Enterprises!5e0!3m2!1sen!2s!4v1689390868333!5m2!1sen!2s"
          title="Google Map - Basit Enterprises"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </MotionBox>
    </Box>
  );
};

export default OurLocation;
