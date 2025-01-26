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
import AboutUs from "../../components/AboutUs";
import AboutUsHeader from "../../components/AboutUsHeader";
import ScrollToTop from "../../components/ScrollToTop";

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
      logo: "/brand-logos/cat-litter.png",
      link: "/brand6",
    },
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
  ];
  return (
    <Box
      w="100vw"
      maxW="100%"
      minH="100vh" // Ensures full viewport height
      overflowX="hidden" // Prevents horizontal scrolling
      display="flex"
      flexDirection="column"
    >
      {/* <Header /> */}
      <Navbar />
      <HeroSection />
      <AboutUsHeader id="about-us" />
      <AboutUs
        textImage="/cat.png"
        heading={'A Vision for a Healthier Tomorrow'}
        description="We believe that healthier animals lead to healthier communities. This philosophy drives us to continuously innovate, collaborate, and expand our reach across Pakistan, partnering with farmers, veterinarians, and pet owners to create a brighter future for all."
        mainImage="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        reverse={false}
      />
      <AboutUs
        textImage="/sitting.png"
        heading="Driven by Expertise, Guided by Care"
        description="Our journey is fueled by decades of expertise and a deep understanding of animal health. Whether it’s preventing disease in poultry or providing pets with the best nutrition, we are relentless in our pursuit of solutions that make a real difference. Every product is a reflection of our promise: uncompromising quality and care for the animals you love."
        mainImage="https://images.unsplash.com/photo-1607163365613-c281acde5012?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        reverse={true}
      />

      <AboutUs
        textImage="/poultry.png"
        heading="Health Beyond Boundaries"
        description="We strive to deliver excellence in every product we offer. From nutraceuticals and vaccines to premium pet food and high-quality cat litter, we bring global innovations to the local market. By combining imported solutions with locally manufactured products, we ensure that every animal, regardless of their environment, gets the care they deserve."
        mainImage="https://images.unsplash.com/photo-1653209067175-46985fcd3ee2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        reverse={false}
      />
      <Banner
        id="our-brands"
        heading={"Our Pet Food Brands"}
        rightImage={"/cats-banner.png"}
      />
      <OurBrands brands={brandsFood} />
      <Banner heading={"Our Poultry Brands"} rightImage={"/dogs.png"} />
      <OurBrands brands={brandsPolutay} />
      <OurAchievements />
      <ContactUs id="contact-us" />
      <OurLocation />
      <Flex flex="1" />
      <Footer />
      <Footnote />
      <ScrollToTop />
    </Box>
  );
};

export default Landing;
