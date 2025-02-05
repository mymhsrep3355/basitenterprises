// import React, { useState } from "react";
// import {
//   Box,
//   Image,
//   Heading,
//   HStack,
//   Link,
//   Flex,
//   IconButton,
// } from "@chakra-ui/react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import { motion } from "framer-motion";
// import CustomButton from "./CustomButton";
// import { textRed, logoInnerRed } from "../constants.js";
// import Banner from "./BannerHeading.jsx";
// // import bannerImg from "../../public/cat-banner.png"

// // Motion component
// const MotionBox = motion(Box);

// const OurBrands = ({brands}) => {
//   // const brands = [
//   //   {
//   //     id: 1,
//   //     name: "Brand 1",
//   //     logo: "/brand-logos/benefit-logo.png",
//   //     link: "/brand1",
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Brand 2",
//   //     logo: "/brand-logos/petvia.png",
//   //     link: "/brand2",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Brand 3",
//   //     logo: "/brand-logos/klicker-logo.png",
//   //     link: "/brand3",
//   //   },
//   //   {
//   //     id: 4,
//   //     name: "Brand 4",
//   //     logo: "/brand-logos/petbite.png",
//   //     link: "/brand4",
//   //   },
//   //   {
//   //     id: 5,
//   //     name: "Brand 5",
//   //     logo: "/brand-logos/pawpaw-logo-guncel.png",
//   //     link: "/brand5",
//   //   },
//   //   {
//   //     id: 6,
//   //     name: "Brand 6",
//   //     logo:"/brand-logos/cat-litter.png",
//   //     link: "/brand6",
//   //   }

//   //   // { id: 6, name: "Brand 6", logo: "/polutary/brand1.png", link: "/brand6" },
//   //   // { id: 7, name: "Brand 7", logo: "/polutary/brand2.png", link: "/brand7" },
//   //   // { id: 8, name: "Brand 8", logo: "/polutary/brand3.png", link: "/brand8" },
//   //   // { id: 9, name: "Brand 9", logo: "/polutary/brand4.png", link: "/brand9" },
//   //   // {
//   //   //   id: 10,
//   //   //   name: "Brand 10",
//   //   //   logo: "/polutary/brand5.png",
//   //   //   link: "/brand10",
//   //   // },
//   // ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleItems = 5;

//   const handleNext = () => {
//     if (currentIndex + visibleItems < brands.length) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const visibleBrands = brands.slice(currentIndex, currentIndex + visibleItems);

//   return (
//     <>
//     {/* <Banner heading={"Our Pet Food Brands"} rightImage={'/cats-banner.png'}/> */}
//     <MotionBox
//       as="section"
//       w="full"
//       py="12"
//       px="6"
//       textAlign="center"
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       bg="rgba(255, 255, 255, 0.2)"
//       backdropFilter="blur(10px)"
//       border="1px solid rgba(255, 255, 255, 0.3)"
//       borderRadius="md"
//       boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
//       initial="hidden"
//       animate="visible"
//       variants={{
//         hidden: { opacity: 0, y: 50 },
//         visible: {
//           opacity: 1,
//           y: 0,
//           transition: { duration: 1, ease: "easeOut" },
//         },
//       }}
//     >
//       <Box position="relative" w="full" maxW="7xl" overflow="hidden">
//         <HStack
//           spacing={{ base: "20px", sm: "10px", md: "20px", lg: "40px" }}
//           justifyContent="center"
//           alignItems="center"
//         >
//           {visibleBrands.map((brand) => (
//             <Link
//               key={brand.id}
//               href={brand.link}
//               isExternal
//               _hover={{ textDecoration: "none" }}
//             >
//               <Flex
//                 flexDirection="column"
//                 alignItems="center"
//                 transition="transform 0.3s ease"
//                 _hover={{ transform: "scale(1.1)" }}
//               >
//                 <Image
//                   src={brand.logo}
//                   alt={brand.name}
//                   boxSize={{ base: "80px", sm: "100px", md: "120px", lg: "140px" }}
//                   objectFit="contain"
//                 />
//               </Flex>
//             </Link>
//           ))}
//         </HStack>

//         <IconButton
//           position="absolute"
//           top="50%"
//           left="10px"
//           transform="translateY(-50%)"
//           aria-label="Previous"
//           icon={<ChevronLeftIcon boxSize="6" />}
//           onClick={handlePrev}
//           bg={textRed}
//           color="white"
//           borderRadius="full"
//           _hover={{ bg: logoInnerRed }}
//           isDisabled={currentIndex === 0}
//         />

//         <IconButton
//           position="absolute"
//           top="50%"
//           right="10px"
//           transform="translateY(-50%)"
//           aria-label="Next"
//           icon={<ChevronRightIcon boxSize="6" />}
//           onClick={handleNext}
//           bg={textRed}
//           color="white"
//           borderRadius="full"
//           _hover={{ bg: logoInnerRed }}
//           isDisabled={currentIndex + visibleItems >= brands.length}
//         />
//       </Box>

//       <Box mt="8">
//         <CustomButton
//           bgColor="red.500"
//           textColor="white"
//           icon={<ChevronRightIcon />}
//           onClick={() => console.log("Explore More Brands!")}
//         >
//           Explore Our Brands
//         </CustomButton>
//       </Box>
//     </MotionBox>
//     </>
//   );
// };

// export default OurBrands;



import React, { useEffect, useRef } from "react";
import { Box, Image, Link, Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

// Motion component
const MotionBox = motion(Box);

const OurBrands = ({ brands, direction = "right" }) => {
  const controls = useAnimation();
  const sliderRef = useRef(null);

  // Dynamically adjust image size based on screen size
  const imageSize = useBreakpointValue({
    base: "120px",
    sm: "140px",
    md: "160px",
    lg: "180px",
  });

  // Duplicate brands for seamless infinite loop
  const brandList = [...brands, ...brands];

  // Determine animation values based on direction
  const isRightToLeft = direction === "right";
  const startX = isRightToLeft ? "0%" : "-100%";
  const endX = isRightToLeft ? "-100%" : "0%";

  // Start infinite scrolling
  const startScrolling = async () => {
    if (!sliderRef.current) return;

    await controls.start({
      x: [startX, endX], // Moves based on direction
      transition: {
        ease: "linear",
        duration: 30, // Adjust speed for smooth animation
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startScrolling();
  }, [direction]); // Restart animation if direction changes

  return (
    <Box w="full" py="12" px="6" textAlign="center" overflow="hidden" position="relative">
      <MotionBox
        ref={sliderRef}
        display="flex"
        alignItems="center"
        gap={{ base: "30px", sm: "40px", md: "50px", lg: "60px" }}
        minW="max-content"
        animate={controls}
      >
        {brandList.map((brand, index) => (
          <Link key={`${brand.id}-${index}`} href={brand.link} isExternal _hover={{ textDecoration: "none" }}>
            <Flex flexDirection="column" alignItems="center" transition="transform 0.3s ease" _hover={{ transform: "scale(1.1)" }}>
              <Image src={brand.logo} alt={brand.name} boxSize={imageSize} objectFit="contain" borderRadius={"full"} />
            </Flex>
          </Link>
        ))}
      </MotionBox>
    </Box>
  );
};

export default OurBrands;
