import { Box, VStack, Text, Button, Divider } from "@chakra-ui/react";

const Cart = ({ cartItems, onCheckout }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Box p={4} bg="gray.100" rounded="md" boxShadow="base">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">Cart</Text>
        {cartItems.map((item) => (
          <Box key={item.id}>
            <Text>{item.name} - ${item.price}</Text>
            <Divider my={2} />
          </Box>
        ))}
        <Text fontSize="xl">Total: ${totalPrice.toFixed(2)}</Text>
        <Button colorScheme="green" onClick={onCheckout}>Checkout</Button>
      </VStack>
    </Box>
  );
};

export default Cart;