import React, { useState, useEffect } from "react";
import { Box, Flex, Link, Image, IconButton, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { yellowTone, Darkyellow, logoInnerRed } from "../constants";

const MotionBox = motion(Box);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  const handleScroll = () => {
    setScrolled(window.scrollY > 30);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    "About Us",
    "Our Brands",
    "Products",
    "Services",
    "Contact",
    "Clients",
  ];

  return (
    <Box w="full" position="fixed" top="0" zIndex="20">
      <Flex
      className="navbar"
        as="nav"
        position={scrolled ? "sticky" : "absolute"}
        top={{ base: "52px", md: "53px", lg: "53px" }}
        // bottom={{sm: "-40px", md: "0px", lg: "0px"}}
        sx={{
          "@media (max-width: 480px)": {
            top: "30px",
          },
        }}
        left="0" 
        w="100vw" // Full width of viewport to avoid extra space
        maxW="100vw" // Prevents overflow
        bg={scrolled ? "rgba(255, 255, 255, 0.36)" : "rgba(0, 0, 0, 0.16)"}
        backdropFilter={scrolled ? "blur(12px)" : "none"}
        transition="all 0.3s ease"
        px={{ base: "2", md: "8", lg: "16" }} // Reduced padding to avoid overflow
        py={{ base: "2", md: "4" }} // Adds some padding for better spacing
        alignItems="center"
        justifyContent="space-between"
        boxShadow={scrolled ? "sm" : "none"}
        zIndex="1000" // Ensures navbar stays above other elements
        overflowX="hidden" // Prevents horizontal scroll issues
      >
        <Image
          src="/logo01-red.png"
          alt="Logo"
          width={{ base: "100px", md: "80px", lg: "150px" }}
          height={{ base: "50px", md: "50px", lg: "100px" }}
          objectFit="cover"
          ml={{ base: "0", md: "10", lg: "20" }}
        />

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
                href="#"
                fontWeight="bold"
                fontSize="sm"
                textTransform="uppercase"
                color={scrolled ? "gray.800" : "gray.800"}
                _hover={{ textDecoration: "none", color: logoInnerRed }}
                position="relative"
                transition="color 0.3s ease-in-out"
              >
                {link}
              </Link>

              <Box
                position="absolute"
                left="0"
                bottom="-3px"
                width="0%"
                height="2px"
                bg={logoInnerRed}
                transition="width 0.3s ease-in-out"
              />
            </MotionBox>
          ))}
        </Flex>

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

      {isOpen && (
        <VStack
          bg={"rgba(255, 255, 255, 0.36)"}
          backdropFilter={"blur(12px)"}
          transition="all 0.3s ease"
          pos="absolute"
          top="100%"
          left="0"
          w="100%"
          py="4"
          spacing="4"
          display={{ base: "flex", md: "none" }}
          boxShadow="md"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href="#"
              fontWeight="bold"
              fontSize="lg"
              textTransform="uppercase"
              color="gray.800"
              _hover={{ color: "green.800" }}
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Navbar;
