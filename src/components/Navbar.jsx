import { Box, Flex, Text, Button } from "@chakra-ui/react";

const Navbar = ({ categories, onSelectCategory }) => {
  return (
    <Flex bg="brand.900" color="white" p={4} justifyContent="space-between" alignItems="center">
      <Text fontSize="xl" fontWeight="bold">OrderApp</Text>
      <Flex>
        {categories.map((category) => (
          <Button key={category} onClick={() => onSelectCategory(category)} m={2}>
            {category}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;