import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Slide = ({ images }) => {
  const sliderSpeed = 20; // ✅ Slower and smoother speed (20 seconds per loop)

  return (
    <Box overflow="hidden" width="100%" mt={8} position="relative">
      <motion.div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
        }}
        animate={{ x: ["0%", "-100%"] }} // ✅ Start from left to right
        transition={{
          duration: sliderSpeed, // ✅ Adjusted for a slower transition
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* ✅ Loop through images twice for seamless effect */}
        {[...images, ...images].map((src, index) => (
          <MotionBox
            key={index}
            as="img"
            src={src}
            alt={`Product ${index + 1}`}
            boxSize={{ base: "150px", md: "250px" }} // ✅ Slightly larger for better visibility
            mx={3}
            borderRadius="lg"
            boxShadow="lg"
            whileHover={{ scale: 1.15, transition: { duration: 0.3 } }} // ✅ Smooth hover effect
          />
        ))}
      </motion.div>
    </Box>
  );
};

export default Slide;
