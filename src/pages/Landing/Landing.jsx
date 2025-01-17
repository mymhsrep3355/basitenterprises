import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/Hero";
import ContactUs from "../../components/ContactUs";
import OurBrands from "../../components/OurBrands";
import OurLocation from "../../components/OurLocation";
import Footnote from "../../components/Footnote";

const Landing = () => {
  return (
    <Box 
      w="100vw" 
      maxW="100%" 
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
      {/* <Box h="1px" bg="red.500" /> */}
      <OurLocation/>
      <Flex flex="1" />  
      <Footer />
      <Footnote/>
    </Box>
  );
};

export default Landing;
