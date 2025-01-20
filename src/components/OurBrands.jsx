import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  Link,
  Flex,
  VStack,
} from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

// Motion component
const MotionBox = motion(Box);

const OurBrands = () => {
  const brands = [
    {
      id: 1,
      name: "Brand 1",
      logo: "/brand-logos/benefit-logo.png",
      link: "/brand1",
    },
    {
      id: 2,
      name: "Brand 2",
      logo: "/brand-logos/petvia.png",
      link: "/brand2",
    },
    {
      id: 3,
      name: "Brand 3",
      logo: "/brand-logos/klicker-logo.png",
      link: "/brand3",
    },
    { id: 4, name: "Brand 4", logo: "/brand-logos/petbite.png", link: "/brand4" },
    {
      id: 5,
      name: "Brand 5",
      logo: "/brand-logos/pawpaw-logo-guncel.png",
      link: "/brand5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <MotionBox
      as="section"
      w="full"
      py="12"
      px="6"
      bgGradient="linear(to-b, white, gray.100)"
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Heading
        size="lg"
        mb="6"
        fontWeight="bold"
        bgGradient="linear(to-r, red.600, red.400)"
        bgClip="text"
      >
        Our Brands
      </Heading>
      <Box h="2px" w="50px" bg="red.500" mb="6" borderRadius="full" />

      {/* Brands Row */}
      <HStack
        spacing={{ base: "20px", md: "40px", lg: "150px" }}
        w="full"
        maxW="7xl"
        justifyContent="center"
        alignItems="center"
        mb="10"
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={brand.link}
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                boxSize={{ base: "100px", md: "120px", lg: "130px" }}
                objectFit="contain"
              />
            </Flex>
          </Link>
        ))}
      </HStack>

      {/* Call-to-Action Button */}
      <Box mt="4">
        <CustomButton
          bgColor="red.500"
          textColor="white"
          icon={<ChevronRightIcon />}
          onClick={() => console.log("Button clicked!")}
        >
          Explore Our Brands
        </CustomButton>
      </Box>
    </MotionBox>
  );
};

export default OurBrands;
