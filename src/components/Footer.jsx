import { Box, Text, Link, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} borderTopWidth="1px" borderColor="gray.200" mt={8}>
      <VStack spacing={2}>
        <Text fontSize="sm" color="gray.600">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </Text>
        <VStack spacing={1}>
          <Link href="/about" color="brand.500">
            About
          </Link>
          <Link href="/contact" color="brand.500">
            Contact
          </Link>
          <Link href="/privacy" color="brand.500">
            Privacy Policy
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Footer;