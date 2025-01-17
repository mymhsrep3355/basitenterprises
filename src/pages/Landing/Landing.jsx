import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/Hero";
import ContactUs from "../../components/ContactUs";
import OurBrands from "../../components/OurBrands";

const Landing = () => {
  return (
    <Box 
      w="100vw" 
      maxW="100vw" 
      minH="100vh" // Ensures full viewport height
      overflowX="hidden" // Prevents horizontal scrolling
      display="flex"
      flexDirection="column"
    >
      <Header />
      <Navbar />
      <HeroSection />
      <OurBrands />
      <ContactUs />
      <Flex flex="1" />  
      
      <Footer />
    </Box>
  );
};

export default Landing;
