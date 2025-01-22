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
import OurAchievements from "../../components/OurAchievements";
import Banner from "../../components/BannerHeading";

const Landing = () => {

  const brandsFood = [
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
    {
      id: 6,
      name: "Brand 6",
      logo:"/brand-logos/cat-litter.png",
      link: "/brand6",
    }
  ];
  const brandsPolutay = [
    { id: 1, name: "Brand 6", logo: "/polutary/brand1.png", link: "/brand6" },
    { id: 2, name: "Brand 7", logo: "/polutary/brand2.png", link: "/brand7" },
    { id: 3, name: "Brand 8", logo: "/polutary/brand3.png", link: "/brand8" },
    { id: 4, name: "Brand 9", logo: "/polutary/brand4.png", link: "/brand9" },
    {
      id: 5,
      name: "Brand 10",
      logo: "/polutary/brand5.png",
      link: "/brand10",
    },
  ]
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
      <Banner heading={"Our Pet Food Brands"} rightImage={'/cats-banner.png'}/>
      <OurBrands brands={brandsFood} />
      <Banner heading={"Our Poultry Brands"} rightImage={'/dogs.png'}/>
      <OurBrands brands={brandsPolutay} />
      <OurAchievements/>
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
