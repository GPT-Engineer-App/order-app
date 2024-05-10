import { Box, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";

const CategoryView = ({ items, onAddToCart }) => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
        {items.map((item) => (
          <Box key={item.id} boxShadow="md" p="5" rounded="md" bg="white">
            <Image src={item.image} alt={item.name} boxSize="150px" objectFit="cover" m="auto" />
            <Text mt={2} fontSize="lg" fontWeight="semibold" textAlign="center">{item.name}</Text>
            <Text mt={1} fontSize="md" color="gray.600" textAlign="center">${item.price}</Text>
            <Button colorScheme="blue" size="sm" mt={3} onClick={() => onAddToCart(item)}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CategoryView;