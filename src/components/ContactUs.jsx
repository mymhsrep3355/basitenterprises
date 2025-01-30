import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import Captcha from "./Captha";
import { textRed } from "../constants.js";

const MotionBox = motion(Box);

const ContactUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Box
      as="section"
      w="full"
      px={{ base: "4", md: "10", lg: "20" }}
      py={{ base: "4", md: "10", lg: "10" }}
      bg="white"
      ref={ref}
    >
      <Flex
        direction={{ base: "column", lg: "row", md: "row" }}  
        justifyContent="space-between"
        gap="14" 
        align="flex-start"
        
      >
        
        <MotionBox
          flex="1"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          // transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box
             bg="black"
            color="white"
            px="8"
            py="6"
            display="inline-block"
            mb="6"
          >
            <Heading size="lg" fontWeight="bold" fontFamily="'Poppins', sans-serif">
              Contact Us
            </Heading>
          </Box>
          <Heading size="lg" mb="4" fontWeight="bold" fontFamily="'Poppins', sans-serif">
            Basit Enterprises
          </Heading>
          <Box h="2px" w="145px" bg="red.500" mb="6" borderRadius="full" />
          <VStack align="start" spacing="8">
            <HStack align="start" spacing="4">
              <Icon as={HiLocationMarker} boxSize="6" color={textRed} />
              <Text fontSize="md">
              31-Ifthikar Building, Bahawal Sher Road, Chauburghi, Lahore, Pakistan, 05488
              </Text>
            </HStack>

            <HStack align="start" spacing="4">
              <Icon as={PhoneIcon} boxSize="6" color={textRed} />
              <Text fontSize="md">+92 303 7272702</Text>
            </HStack>


            <HStack align="start" spacing="4">
              <Icon as={EmailIcon} boxSize="6" color={textRed} />
              <Text fontSize="md">Basit@basitenterprise.com</Text>
            </HStack>

            {/* <HStack align="start" spacing="4">
              <Icon as={AiOutlineGlobal} boxSize="6" color={textRed} />
              <Text fontSize="sm">
                For export related enquiries: exports@basitenterprises.com
              </Text>
            </HStack> */}
           
          </VStack>
        </MotionBox>

        
        <MotionBox
          flex="1"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Box
            bg={textRed}
            color="white"
           
            px="8"
            py="6"
            display="inline-block"
            mb="6"
          >
            <Heading size="lg" fontWeight="bold" fontFamily="'Poppins', sans-serif">
              Contact Form
            </Heading>
          </Box>
          <VStack align="start" spacing="6">

            <Box w="full">
              <Text mb="2" fontSize="md" color="gray.600" fontWeight={500}>
                Your Name *
              </Text>
              <Input
              fontStyle={'italic'}
                placeholder="Enter your name"
                variant={'flushed'}
                focusBorderColor="black"
                fontSize={'sm'}

              />
            </Box>


            <Box w="full">
              <Text mb="2" fontSize="md" color="gray.600" fontWeight={500}>
                Your Email *
              </Text>
              <Input
                type="email"
                fontStyle={'italic'}
                placeholder="Enter your email"
                variant={'flushed'}
                focusBorderColor="black"
                fontSize={'sm'}

              />
            </Box>


            <Box w="full">
              <Text mb="2" fontSize="md" color="gray.600"  fontWeight={500}>
                Your Message *
              </Text>
              <Textarea
                h="20"
                fontStyle={'italic'}
                placeholder="Type your message here..."
                variant={'flushed'}
                focusBorderColor="black"
                resize="none"
                fontSize={'sm'}
              />
            </Box>


            <Box w="full" display="flex" alignItems="center" gap="4">
              {/* <Text fontSize="sm" color="gray.600">
                61 – = 54
              </Text>
              <Input
                w="60px"
                placeholder="?"
                variant="outline"
                focusBorderColor="red.500"
              /> */}
              <Captcha/>
            </Box>

            {/* Submit Button */}
            <Button
              colorScheme="blackAlpha"
              bg="black"
              color="white"
              _hover={{ bg: "red.600" }}
              w="150px"
              fontWeight="bold"
              mt="4"
              p={2}
              size="md"
            >
              Send
            </Button>
          </VStack>
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default ContactUs;
