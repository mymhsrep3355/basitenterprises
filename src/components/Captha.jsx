import React, { useState, useEffect } from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import CustomButton from "./CustomButton";

const Captcha = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(null); // `true`, `false`, or `null`

  useEffect(() => {
    // Generate two random numbers between 1 and 100
    setNum1(Math.floor(Math.random() * 100) + 1);
    setNum2(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Check if the input value matches the correct result
    if (parseInt(value) === num1 - num2) {
      setIsCorrect(true); // Correct answer
    } else {
      setIsCorrect(false); // Incorrect answer
    }
  };

  return (
    <Box w="full" display="flex" alignItems="center" gap="4">
      <Text fontSize="sm" color="gray.600">
        {`${num1} – ${num2} =`}
      </Text>
      <Input
        w="60px"
        placeholder="?"
        variant="outline"
        value={inputValue}
        onChange={handleInputChange}
        focusBorderColor={isCorrect === null ? "gray.300" : isCorrect ? "green.500" : "red.500"}
      />
    </Box>
  );
};

export default Captcha;
