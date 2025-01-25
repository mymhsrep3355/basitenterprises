import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Image,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { FaXTwitter } from "react-icons/fa6";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { textRed } from "../constants";

const MotionBox = motion(Box);

const Footer = () => {
  return (
    <MotionBox
      bg="black"
      color="white"
      px={{ base: 6, md: 10 }}
      py={12}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
        wrap="wrap"
        spacing={12}
      >
        <VStack
          align="start"
          spacing={6} // Increased spacing to ensure proper separation
          flex="1"
          maxW={{ base: "full", md: "40%" }}
          pr={{ md: 8 }}
        >
          <Image
            src="/logo01-red.png"
            alt="Brand Logo"
            width="100%"
            maxW="300px"
            objectFit="contain"
          />
          <Text fontSize="sm" color="gray.400">
            For over three decades, Basit Enterprises has been a family-run
            business dedicated to improving animal welfare across Pakistan. We
            proudly offer a diverse range of high-quality and innovative
            products tailored for pets, poultry, and livestock. Our mission is
            to enhance the health and well-being of all animals, from household
            pets to poultry birds and production livestock. With a steadfast
            commitment to excellence and innovation, we strive to deliver the
            best solutions in animal care
          </Text>

          <VStack align="start" spacing={5} mt={{ base: 6, md: 0 }}>
            <Text fontWeight="bold" fontSize="lg" mb={1}>
              Keep in Touch
            </Text>
            <Divider borderColor="gray.600" />
            <HStack spacing={3}>
              <FaXTwitter size={20} color={textRed} />
              <Link _hover={{ color: textRed }}>X (Twitter)</Link>
            </HStack>
            <HStack spacing={3}>
              <FacebookOutlined style={{ fontSize: "20px", color: textRed }} />
              <Link _hover={{ color: textRed }}>Facebook</Link>
            </HStack>
            <HStack spacing={3}>
              <LinkedinOutlined style={{ fontSize: "20px", color: textRed }} />
              <Link _hover={{ color: textRed }}>LinkedIn</Link>
            </HStack>
            <HStack spacing={3}>
              <InstagramOutlined style={{ fontSize: "20px", color: textRed }} />
              <Link _hover={{ color: textRed }}>Instagram</Link>
            </HStack>
            <HStack spacing={3}>
              <YoutubeOutlined style={{ fontSize: "20px", color: textRed }} />
              <Link _hover={{ color: textRed }}>YouTube</Link>
            </HStack>
          </VStack>
        </VStack>

        <VStack
          align="start"
          spacing={2}
          flex="1"
          mt={{ base: 6, md: 0 }}
          width="100%"
        >
          {[
            // { title: "Home", subLinks: [] },
            {
              title: "About Us",
              subLinks: [
                "Our History",
                "Unique Ingredients",
                "Production & Packaging",
                "Quality Control",
                "B2C E-Commerce Model",
              ],
            },
            { title: "Our Nutrition Philosophy", subLinks: [] },
            {
              title: "Our Brands",
              subLinks: [
                { category: "Super Premium", links: ["Bonacibo"] },
                {
                  category: "Premium",
                  links: ["Micho", "Kucho", "La Mito", "Kennel"],
                },
                { links: ["temizmama.com"] },
              ],
            },
            { title: "News", subLinks: [] },
            { title: "Contact Us", subLinks: [] },
          ].map((section, idx) => (
            <React.Fragment key={section.title}>
              <HStack
                as={Link}
                href="#"
                fontWeight="bold"
                fontSize="md"
                mb={1}
                _hover={{ textDecoration: "none", color: "red.500", pl: 4 }}
                transition="all 0.2s"
              >
                <ChevronRightIcon
                  opacity={1}
                  _groupHover={{ opacity: 1, transform: "translateX(-10px)" }}
                  transition="all 0.2s"
                  color="red.500"
                />
                <Text>{section.title}</Text>
              </HStack>
              <Divider borderColor="gray.600" width="100%" />

              {section.subLinks.length > 0 && (
                <VStack align="start" spacing={2} pl={4}>
                  {section.subLinks.map((item) =>
                    typeof item === "string" ? (
                      <HStack
                        as={Link}
                        href="#"
                        fontSize="sm"
                        _hover={{ color: "red.500", pl: 4 }}
                        transition="all 0.2s"
                        key={item}
                      >
                        <ChevronRightIcon
                          opacity={0.6}
                          _groupHover={{
                            opacity: 1,
                            transform: "translateX(-10px)",
                          }}
                          transition="all 0.2s"
                          color="red.500"
                        />
                        <Text>{item}</Text>
                      </HStack>
                    ) : (
                      <React.Fragment key={item.category || item.links[0]}>
                        {item.category && (
                          <Text fontSize="sm" fontWeight="bold">
                            {item.category}
                          </Text>
                        )}
                        <VStack align="start" spacing={1} pl={4}>
                          {item.links.map((subLink) => (
                            <HStack
                              as={Link}
                              href="#"
                              fontSize="sm"
                              _hover={{ color: "red.500", pl: 4 }}
                              transition="all 0.2s"
                              key={subLink}
                            >
                              <ChevronRightIcon
                                opacity={0.6}
                                _groupHover={{
                                  opacity: 1,
                                  transform: "translateX(-10px)",
                                }}
                                transition="all 0.2s"
                                color="red.500"
                              />
                              <Text>{subLink}</Text>
                            </HStack>
                          ))}
                        </VStack>
                      </React.Fragment>
                    )
                  )}
                </VStack>
              )}
            </React.Fragment>
          ))}
        </VStack>

        {/* news */}

        <VStack
          align="end"
          ml={2}
          flex="1"
          mt={{ base: 6, md: 0 }}
          width="100%"
          // mr={12}
          // border={
          //   "1px solid rgba(255, 255, 255, 0.2)" /* "1px solid rgba(255, 255, 255, 0.2)" */
          // }
        >
          <Text fontWeight="bold" fontSize="lg">
            Recent Blogs
          </Text>

          {/* News Item 1 */}
          <VStack align="end" spacing={2} mt={4} width="100%">
            <Image
              src="https://images.unsplash.com/photo-1580230273693-c83dfa2b9bac?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="100%"
              maxW="300px"
              //   borderRadius="md"
              objectFit="cover"
            />
            <Text fontSize="xs" color="gray.500">
              28 June 2024
            </Text>
            <Link fontSize="sm" fontWeight="bold" _hover={{ color: "red.500" }}>
              Cat Expo India 23rd June 2024
            </Link>
            {/* <Divider borderColor="gray.600" w={"100%"} /> */}
          </VStack>

          <VStack align="end" spacing={2} mt={4} width="100%">
            <Image
              src="https://images.unsplash.com/photo-1726245219440-37d541ac3db8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="100%"
              maxW="300px"
              //   borderRadius="md"
              objectFit="cover"
            />
            <Text fontSize="xs" color="gray.500">
              3 June 2024
            </Text>
            <Link fontSize="sm" fontWeight="bold" _hover={{ color: "red.500" }}>
              My Cat Expo Malaysia 8-10 March 2024
            </Link>
          </VStack>
        </VStack>
      </Flex>

      {/* <Divider my={6} borderColor="gray.600" /> */}

      {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <HStack justify="center">
          <Image src="/country-icon.png" boxSize="20px" />
          <Link _hover={{ color: "red.500" }}>Change Country</Link>
        </HStack>
      </motion.div> */}

      {/* Copyright */}
      {/* <Text textAlign="center" fontSize="xs" color="gray.500" mt={4}>
        © {new Date().getFullYear()} Your Brand. All Rights Reserved.
      </Text> */}
    </MotionBox>
  );
};

export default Footer;
