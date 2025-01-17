import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import { textDark, textRed } from '../constants';

const Footnote = () => {
  return (
    <Box
      as="footer"
      w="100%"
      textAlign="center"
      py={4}
      px={12}
      bg={textRed}
    //   borderTop="1px solid"
    //   borderColor="gray.200"
    >
      <Text fontSize="sm" color="white" fontFamily={'body'}>
        Developed and Powered by: DotCodeInc <Link href="#" color="white" isExternal>basitenterprises.com</Link> are subject to our{' '}
        <Link href="#" color="white" isExternal>Terms of Service</Link> and{' '}

        <Link href="#" color="white">info@basitenterprises.com</Link>
      </Text>
    </Box>
  );
};

export default Footnote;
