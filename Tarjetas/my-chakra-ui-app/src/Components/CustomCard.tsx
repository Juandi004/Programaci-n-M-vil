import { Box, Image, Text, Stack } from '@chakra-ui/react';

const CustomCard = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="sm" mx="auto">
      <Image src="/web.jpg" alt="Card Image" />

      <Stack p="6">
        <Text fontWeight="bold" fontSize="xl">
        REACT GRAHQL DEVELOP
        </Text>
        <Text mt="1" fontSize="lg">
        Best one bars to take friends and relatives, one bars to take friends and relatives.
        </Text>
      </Stack>
    </Box>
  );
};

export default CustomCard;
