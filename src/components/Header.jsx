import React from "react";
import { Box, Flex, Text, Icon, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";
import { logoInnerRed } from "../constants"; 

const MotionFlex = motion(Flex);

const Header = () => {
  
  const fontSize = useBreakpointValue({ base: "xs", md: "sm" });
  const flexDirection = useBreakpointValue({ base: "row", md: "row", sm: "column" });

  return (
    <MotionFlex
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      bg={logoInnerRed}
      w="full"
      p={{ base: 1, md: 4 }}
      justify={'right'}
      align="end"
      flexDirection={flexDirection}
      textAlign="end"
    >
      <Flex align="end" mr={{ base: 0, md: 4 }} mb={{ base: 1, md: 0 }}>
        <Icon as={MdPhone} color="white" boxSize={{ base: 4, md: 5 }} />
        <Text fontSize={fontSize} color="white" ml={2}>
          +92 300 1234567
        </Text>
      </Flex>
      <Flex align="end" mr={{ base: 0, md: 4 }} mb={{ base: 1, md: 0 }}>
        <Icon as={MdEmail} color="white" boxSize={{ base: 4, md: 5 }} />
        <Text fontSize={fontSize} color="white" ml={2}>
          info.basit@gmail.com
        </Text>
      </Flex>

    </MotionFlex>
  );
};

export default Header;
