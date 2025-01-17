import React from "react";
import { Button, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { textRed } from "../constants.js";
const MotionText = motion(Text);

const CustomButton = ({ bgColor, textColor = "white", onClick, children, icon }) => {
  return (
    <Button
      bg={bgColor}
      color={textColor}
      px="8"
      py="6"
      borderRadius="full"
      _hover={{ bg: {textRed} }}
      _active={{ bg: `${bgColor}.800` }}
      onClick={onClick}
      overflow="hidden"
      position="relative"
    >
      <Flex alignItems="center" justifyContent="center">
        <MotionText
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          fontWeight="bold"
          fontSize="md"
          mr={icon ? 2 : 0} 
        >
          {children}
          {icon}
        </MotionText>
        {/* {icon && (
          <motion.div
            whileHover={{ x: [0, 3, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            {icon}
          </motion.div>
        )} */}
      </Flex>
    </Button>
  );
};

export default CustomButton;
