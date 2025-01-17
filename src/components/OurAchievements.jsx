import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Motion components for animations
const MotionBox = motion(Box);
const MotionText = motion(Text);

// Counter Component
const Counter = ({ max, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = max / (duration * 3000 / 60); // Increment per frame
    const interval = setInterval(() => {
      start += increment;
      if (start >= max) {
        clearInterval(interval);
        setCount(max);
      } else {
        setCount(Math.floor(start));
      }
    }, 17); // Runs every 16ms (~60fps)
    return () => clearInterval(interval);
  }, [max, duration]);

  return <>{count}</>;
};

const OurAchievements = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const achievements = [
    { id: 1, value: 400, label: "Customers" },
    { id: 2, value: 10, label: "Products" },
    { id: 3, value: 95, label: "Employees" },
    { id: 4, value: 100, label: "Happy Pet Friends" },
  ];

  return (
    <Box
      as="section"
      w="full"
      py={{ base: "8", md: "16" }}
      px={{ base: "4", md: "10", lg: "20" }}
      bg="black"
      color="white"
      ref={ref}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "center", md: "flex-start" }}
        gap="14"
      >
        {/* Heading Section */}
        <VStack
          align="start"
          spacing="6"
          w={{ base: "full", md: "40%" }}
          textAlign="left"
        >
          <Heading size="lg" fontWeight="bold" color="white">
            Numbers Don't Lie
          </Heading>
          <Box
            h="2px"
            w="50px"
            bg="red.500"
            borderRadius="full"
          ></Box>
        </VStack>

        {/* Achievements Section */}
        <Flex
          wrap="wrap"
          justifyContent={{ base: "center", md: "flex-start" }}
          gap="20"
          w={{ base: "full", md: "60%" }}
        >
          {achievements.map((achievement, index) => (
            <MotionBox
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              textAlign="center"
            >
              <Text
                fontSize="4xl"
                fontWeight="bold"
                color="white"
                fontFamily={'heading'}
                mb="4"
                position="relative"
                _after={{
                  content: '""',
                  display: "block",
                  height: "2px",
                  width: "40px",
                  bg: "red.500",
                  position: "absolute",
                  bottom: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Counter max={achievement.value} duration={3} />+
              </Text>
              <Text fontSize="md" color="gray.400">
                {achievement.label}
              </Text>
            </MotionBox>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default OurAchievements;
