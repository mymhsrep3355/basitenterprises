import React, { useState, useEffect } from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <MotionBox
      position="fixed"
      bottom="40px"
      right="20px"
      zIndex="1000"
      initial={{ opacity: 0, scale: 0.5 }} // Start invisible and scaled down
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }} // Animate on visibility
      transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth animation
    >
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          icon={<ArrowUpIcon />}
          aria-label="Scroll to top"
          size="lg"
          colorScheme="red" // Changed color scheme to red
          variant="solid"
          borderRadius="full"
          boxShadow="lg"
          _hover={{
            bg: "red.500",
            transform: "scale(1.1)",
            transition: "all 0.3s ease-in-out",
          }}
          _active={{
            bg: "red.600",
          }}
        />
      )}
    </MotionBox>
  );
};

export default ScrollToTop;
