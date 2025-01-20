// import React from "react";
// import {
//   Box,
//   Image,
//   Heading,
//   Text,
//   HStack,
//   Link,
//   Flex,
//   VStack,
// } from "@chakra-ui/react";
// import CustomButton from "./CustomButton";
// import { ChevronRightIcon } from "@chakra-ui/icons";
// import { motion } from "framer-motion";

// // Motion component
// const MotionBox = motion(Box);

// const OurBrands = () => {
//   const brands = [
//     {
//       id: 1,
//       name: "Brand 1",
//       logo: "/brand-logos/benefit-logo.png",
//       link: "/brand1",
//     },
//     {
//       id: 2,
//       name: "Brand 2",
//       logo: "/brand-logos/petvia.png",
//       link: "/brand2",
//     },
//     {
//       id: 3,
//       name: "Brand 3",
//       logo: "/brand-logos/klicker-logo.png",
//       link: "/brand3",
//     },
//     { id: 4, name: "Brand 4", logo: "/brand-logos/petbite.png", link: "/brand4" },
//     {
//       id: 5,
//       name: "Brand 5",
//       logo: "/brand-logos/pawpaw-logo-guncel.png",
//       link: "/brand5",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 1, ease: "easeOut" },
//     },
//   };

//   return (
//     <MotionBox
//       as="section"
//       w="full"
//       py="12"
//       px="6"
//       bgGradient="linear(to-b, white, gray.100)"
//       textAlign="center"
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <Heading
//         size="lg"
//         mb="6"
//         fontWeight="bold"
//         bgGradient="linear(to-r, red.600, red.400)"
//         bgClip="text"
//       >
//         Our Brands
//       </Heading>
//       <Box h="2px" w="50px" bg="red.500" mb="6" borderRadius="full" />

//       {/* Brands Row */}
//       <HStack
//         spacing={{ base: "20px", md: "40px", lg: "150px" }}
//         w="full"
//         maxW="7xl"
//         justifyContent="center"
//         alignItems="center"
//         mb="10"
//         flexWrap={{ base: "wrap", lg: "nowrap" }}
//       >
//         {brands.map((brand) => (
//           <Link
//             key={brand.id}
//             href={brand.link}
//             isExternal
//             _hover={{ textDecoration: "none" }}
//           >
//             <Flex
//               flexDirection="column"
//               alignItems="center"
//               transition="transform 0.3s ease"
//               _hover={{ transform: "scale(1.1)" }}
//             >
//               <Image
//                 src={brand.logo}
//                 alt={brand.name}
//                 boxSize={{ base: "100px", md: "120px", lg: "130px" }}
//                 objectFit="contain"
//               />
//             </Flex>
//           </Link>
//         ))}
//       </HStack>

//       {/* Call-to-Action Button */}
//       <Box mt="4">
//         <CustomButton
//           bgColor="red.500"
//           textColor="white"
//           icon={<ChevronRightIcon />}
//           onClick={() => console.log("Button clicked!")}
//         >
//           Explore Our Brands
//         </CustomButton>
//       </Box>
//     </MotionBox>
//   );
// };

// export default OurBrands;

import React, { useState } from "react";
import {
  Box,
  Image,
  Heading,
  HStack,
  Link,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";
import { textRed, logoInnerRed } from "../constants.js";

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
    {
      id: 4,
      name: "Brand 4",
      logo: "/brand-logos/petbite.png",
      link: "/brand4",
    },
    {
      id: 5,
      name: "Brand 5",
      logo: "/brand-logos/pawpaw-logo-guncel.png",
      link: "/brand5",
    },
    { id: 6, name: "Brand 6", logo: "/polutary/brand1.png", link: "/brand6" },
    { id: 7, name: "Brand 7", logo: "/polutary/brand2.png", link: "/brand7" },
    { id: 8, name: "Brand 8", logo: "/polutary/brand3.png", link: "/brand8" },
    { id: 9, name: "Brand 9", logo: "/polutary/brand4.png", link: "/brand9" },
    {
      id: 10,
      name: "Brand 10",
      logo: "/polutary/brand5.png",
      link: "/brand10",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 5;

  const handleNext = () => {
    if (currentIndex + visibleItems < brands.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleBrands = brands.slice(currentIndex, currentIndex + visibleItems);

  return (
    <MotionBox
      as="section"
      w="full"
      py="12"
      px="6"
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="rgba(255, 255, 255, 0.2)" // Transparent background for glassmorphism
      backdropFilter="blur(10px)" // Blur effect
      border="1px solid rgba(255, 255, 255, 0.3)" // Subtle border
      borderRadius="md" // Rounded corners
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" // Subtle shadow for depth
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeOut" },
        },
      }}
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

      <Box position="relative" w="full" maxW="7xl" overflow="hidden">
        <HStack
          spacing="20px"
          justifyContent="center"
          alignItems="center"
          gap={24}
        >
          {visibleBrands.map((brand) => (
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
                  boxSize={{ base: "100px", md: "120px", lg: "140px" }}
                  objectFit="contain"
                />
              </Flex>
            </Link>
          ))}
        </HStack>

        <IconButton
          position="absolute"
          top="50%"
          left="0px"
          transform="translateY(-50%)"
          aria-label="Previous"
          icon={<ChevronLeftIcon boxSize="6" />}
          onClick={handlePrev}
          bg={textRed}
          color={"white"}
          // boxShadow="md"
          borderRadius={"full"}
          _hover={{ bg: { logoInnerRed } }}
          isDisabled={currentIndex === 0}
        />

        <IconButton
          position="absolute"
          top="50%"
          right="0px"
          transform="translateY(-50%)"
          aria-label="Next"
          borderRadius={"full"}
          color={"white"}
          icon={<ChevronRightIcon boxSize="6" />}
          onClick={handleNext}
          bg={textRed}
          boxShadow="md"
          _hover={{ bg: { logoInnerRed } }}
          isDisabled={currentIndex + visibleItems >= brands.length}
        />
      </Box>

      <Box mt="8">
        <CustomButton
          bgColor="red.500"
          textColor="white"
          icon={<ChevronRightIcon />}
          onClick={() => console.log("Explore More Brands!")}
        >
          Explore Our Brands
        </CustomButton>
      </Box>
    </MotionBox>
  );
};

export default OurBrands;
