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
      <AboutUsHeader id="about-us"/>
      <AboutUs
        textImage="/cat.png"
        heading="Our love of pets"
        description="We put lots of expertise into manufacturing our premium cat food so
        that all our feline friends can spend long, happy and healthy lives
        by our sides. We draw upon our long-standing experience and skill to
        create perfect recipes using natural ingredients. These supply your
        cat with the basis for a happy life full of vitality. And her special
        needs are covered – naturally. So your little gourmet can be sure of
        eating the right food for a long and healthy life."
        mainImage="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        reverse={false}
      />
      <AboutUs
        textImage="/sitting.png"
        heading="Precision in Care"
        description="At the heart of everything we do is a commitment to the precise care and well-being of your beloved pets. We meticulously craft recipes that cater to their unique nutritional needs, using only high-quality, natural ingredients. Our approach ensures every meal contributes to their vitality, happiness, and overall health. With our expertise, your furry companions can enjoy a balanced diet tailored just for them, allowing them to thrive and live their best lives by your side."
        mainImage="https://images.unsplash.com/photo-1607163365613-c281acde5012?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        reverse={true}
      />

      <AboutUs
        textImage="/poultry.png"
        heading="Passion in Health"
        description="Our passion for health drives everything we do. We believe in creating products that promote the long-term well-being of your pets, combining natural ingredients with innovative formulations. Each recipe is designed with care to support a healthy lifestyle, ensuring your furry friends remain active, happy, and full of vitality. With our dedication to their health, you can trust us to provide the best nutrition for a lifetime of wellness."
        mainImage="https://images.unsplash.com/photo-1653209067175-46985fcd3ee2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        reverse={false}
      />
      <Banner id="our-brands" heading={"Our Pet Food Brands"} rightImage={"/cats-banner.png"} />
      <OurBrands brands={brandsFood} />
      <Banner heading={"Our Poultry Brands"} rightImage={"/dogs.png"} />
      <OurBrands brands={brandsPolutay} />
      <OurAchievements />
      <ContactUs id="contact-us" />
      <OurLocation />
      <Flex flex="1" />
      <Footer />
      <Footnote />
      <ScrollToTop/>
    </Box>
  );
};

export default Landing;
