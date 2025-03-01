// import React, { useState, useEffect } from "react";
// import { Box, Flex, Link, Image, IconButton, VStack } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { yellowTone, Darkyellow, logoInnerRed } from "../constants";

// const MotionBox = motion(Box);

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false); 
//   const handleScroll = () => {
//     setScrolled(window.scrollY > 30);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//     setIsOpen(false); // Close the menu on smaller screens
//   };

//   const links = [
//     { name: "About Us", id: "about-us" },
//     { name: "Our Brands", id: "our-brands" },
//     { name: "Contact", id: "contact-us" },
//     { name: "Blogs", id: "blogs" },
//   ];

//   return (
//     <Box w="full" position="fixed" top="0" zIndex="20">
//       <Flex
//       className="navbar"
//         as="nav"
//         position={scrolled ? "sticky" : "absolute"}
//         top={{ base: "52px", md: "53px", lg: "53px" }}
//         // bottom={{sm: "-40px", md: "0px", lg: "0px"}}
//         sx={{
//           "@media (max-width: 480px)": {
//             top: "30px",
//           },
//         }}
//         left="0" 
//         w="100vw" 
//         maxW="100vw" 
//         bg={scrolled ? "rgba(255, 255, 255, 0.36)" : "rgba(0, 0, 0, 0.16)"}
//         backdropFilter={scrolled ? "blur(12px)" : "none"}
//         transition="all 0.3s ease"
//         px={{ base: "2", md: "8", lg: "16" }}
//         py={{ base: "2", md: "4" }} // Adds some padding for better spacing
//         alignItems="center"
//         justifyContent="space-between"
//         boxShadow={scrolled ? "sm" : "none"}
//         zIndex="1000" 
//         overflowX="hidden" // Prevents horizontal scroll issues
//       >
//         <Image
//           src="/logo01-red.png"
//           alt="Logo"
//           width={{ base: "150px", md: "80px", lg: "150px" }}
//           height={{ base: "50px", md: "50px", lg: "100px" }}
//           objectFit="cover"
//           ml={{ base: "0", md: "10", lg: "20" }}
//         />

//         <Flex
//           gap="6"
//           alignItems="center"
//           display={{ base: "none", md: "flex" }}
//         >
//           {links.map((link, index) => (
//             <MotionBox
//               key={index}
//               position="relative"
//               _hover={{ "& div": { width: "100%" } }}
//             >
//               <Link
//                 href="#"
//                 fontWeight="bold"
//                 fontSize="lg"
//                 onClick={() => scrollToSection(link.id)}
//                 textTransform="uppercase"
//                 color={scrolled ? "gray.800" : "gray.800"}
//                 _hover={{ textDecoration: "none", color: logoInnerRed }}
//                 position="relative"
//                 transition="color 0.3s ease-in-out"
//               >
//                 {link.name}
//               </Link>

//               <Box
//                 position="absolute"
//                 left="0"
//                 bottom="-3px"
//                 width="0%"
//                 height="2px"
//                 bg={logoInnerRed}
//                 transition="width 0.3s ease-in-out"
//               />
//             </MotionBox>
//           ))}
//         </Flex>

//         <IconButton
//           aria-label="Open Menu"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           display={{ base: "flex", md: "none" }}
//           onClick={toggleMenu}
//           variant="ghost"
//           colorScheme="blackAlpha"
//           fontSize="24px"
//         />
//       </Flex>

//       {isOpen && (
//         <VStack
//           bg={"rgba(255, 255, 255, 0.36)"}
//           backdropFilter={"blur(12px)"}
//           transition="all 0.3s ease"
//           pos="absolute"
//           top="100%"
//           left="0"
//           w="100%"
//           py="4"
//           spacing="4"
//           display={{ base: "flex", md: "none" }}
//           boxShadow="md"
//         >
//           {links.map((link, index) => (
//             <Link
//               key={index}
//               href="#"
//               fontWeight="bold"
//               fontSize="lg"
//               textTransform="uppercase"
//               color="gray.800"
//               _hover={{ color: "green.800" }}
//               onClick={() => setIsOpen(false)}
//             >
//               {link}
//             </Link>
//           ))}
//         </VStack>
//       )}
//     </Box>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  Image,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100); 
    console.log(id);
    
  };

  const links = [
    { name: "About Us", id: "about-us" },
    { name: "Our Brands", id: "our-brands" },
    { name: "Contact", id: "contact" },
    { name: "Blogs", id: "blogs" },
  ];

  // Fixed height for the navbar so we can offset the mobile menu
  const NAVBAR_HEIGHT = "80px";

  return (
    <>
      {/* Fixed Navbar */}
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        w="full"
        zIndex="1000"
        bg={scrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(138, 30, 30, 0.39)"}
        backdropFilter={scrolled ? "blur(11px)" : "none"}
        transition="all 0.3s ease"
        boxShadow={scrolled ? "sm" : "none"}
      >
        <Flex
          as="nav"
          alignItems="center"
          justifyContent="space-between"
          px={{ base: 4, md: 8, lg: 16 }}
          py={{ base: 2, md: 4 }}
          h={NAVBAR_HEIGHT} 
        >
          {/* Logo */}
          <Image
            src="/logo1.png"
            alt="Logo"
            width={{ base: "120px", md: "150px" }}
            height={{ base: "50px", md: "60px" }}
            objectFit="cover"
          />

          {/* Desktop Links */}
          <Flex
            gap="6"
            alignItems="center"
            display={{ base: "none", md: "flex" }}
          >
            {links.map((link, index) => (
              <MotionBox
                key={index}
                position="relative"
                _hover={{ "& div": { width: "100%" } }}
              >
                <Link
                  onClick={() => scrollToSection(link.id)}
                  fontWeight={500}
                  fontFamily="Poppins"
                  fontSize="xl"
                  textTransform="uppercase"
                  color="gray.800"
                  _hover={{ textDecoration: "none", color: "red.500" }}
                  position="relative"
                  transition="color 0.3s ease-in-out"
                >
                  
                  {link.name}
                </Link>
                <Box
                  position="absolute"
                  left="0"
                  bottom="-3px"
                  width="0%"
                  height="2px"
                  bg="red.500"
                  transition="width 0.3s ease-in-out"
                />
              </MotionBox>
            ))}
          </Flex>

          {/* Mobile Menu Icon */}
          <IconButton
            aria-label="Open Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ base: "flex", md: "none" }}
            onClick={toggleMenu}
            variant="ghost"
            colorScheme="blackAlpha"
            fontSize="24px"
          />
        </Flex>
      </Box>

      {/* Mobile Menu (drawn below the fixed navbar) */}
      {isOpen && (
        <VStack
          position="fixed"
          top={NAVBAR_HEIGHT} // offset so it appears below the navbar
          left="0"
          w="full"
          bg="rgba(255, 255, 255, 0.9)"
          backdropFilter="blur(12px)"
          transition="all 0.3s ease"
          py="4"
          spacing="4"
          display={{ base: "flex", md: "none" }}
          boxShadow="md"
          zIndex="999"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              onClick={() => scrollToSection(link.id)}
              fontWeight="bold"
              fontSize="lg"
              fontFamily="Poppins"
              textTransform="uppercase"
              color="gray.800"
              _hover={{ color: "red.500" }}
            >
              {link.name}
            </Link>
          ))}
        </VStack>
      )}

      {/* Spacer to push page content below the fixed navbar */}
      <Box height={NAVBAR_HEIGHT} />

      {/* Rest of your page sections here */}
      {/* ... */}
    </>
  );
};

export default Navbar;
