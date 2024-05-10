import { useState } from "react";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import CategoryView from "../components/CategoryView";
import Cart from "../components/Cart";

const categories = ["Fruits", "Vegetables", "Dairy", "Bakery"];
const items = [
  { id: 1, name: "Apple", price: 0.99, category: "Fruits", image: "/images/apple.jpg" },
  { id: 2, name: "Milk", price: 2.99, category: "Dairy", image: "/images/milk.jpg" },
  // Add more items here
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [cartItems, setCartItems] = useState([]);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleCheckout = () => {
    console.log("Proceed to checkout", cartItems);
    // Implement checkout logic here
  };

  return (
    <Box>
      <Navbar categories={categories} onSelectCategory={setSelectedCategory} />
      <Flex direction={isLargerThan768 ? "row" : "column"} p={4}>
        <Box flex="1" mr={isLargerThan768 ? 4 : 0}>
          <CategoryView items={items.filter(item => item.category === selectedCategory)} onAddToCart={handleAddToCart} />
        </Box>
        <Box width={isLargerThan768 ? "300px" : "100%"} mt={isLargerThan768 ? 0 : 4}>
          <Cart cartItems={cartItems} onCheckout={handleCheckout} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;