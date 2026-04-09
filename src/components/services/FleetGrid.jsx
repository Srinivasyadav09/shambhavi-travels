import React from "react";
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Stack,
  Text,
  Badge,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";

const FleetGrid = ({ id }) => {
  const cars = [
    {
      id: 1,
      name: "Premium Sedan",
      type: "Maruti Suzuki Dzire / Toyota Etios",
      capacity: "4+1 Seater",
      price: "Starts from ₹12/km",
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      features: ["AC", "Music System", "Large Boot Space"],
    },
    {
      id: 2,
      name: "Luxury SUV",
      type: "Toyota Innova Crysta",
      capacity: "6+1 Seater",
      price: "Starts from ₹18/km",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800",
      features: ["Premium Leather Seats", "Extra Legroom", "Dual AC"],
    },
    {
      id: 3,
      name: "Tempo Traveler",
      type: "Force Traveler",
      capacity: "12-17 Seater",
      price: "Starts from ₹24/km",
      image:
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800",
      features: ["Pushback Seats", "Ample Luggage", "Perfect for Groups"],
    },
  ];

  return (
    <Box
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 6 }}
      id={id}
      maxW="1200px"
      mx="auto"
    >
      <Stack
        textAlign="center"
        mb={{ base: 6, md: 10 }}
        spacing={{ base: 3, md: 4 }}
      >
        <Heading fontSize={{ base: "xl", md: "2xl" }}>
          Our Premium Fleet
        </Heading>
        <Text color="gray.500" fontSize={{ base: "sm", md: "md" }}>
          Choose the perfect ride for your next journey
        </Text>
      </Stack>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 6, md: 8 }}
      >
        {cars.map((car) => (
          <Card.Root
            key={car.id}
            overflow="hidden"
            borderRadius="2xl"
            bg="white"
            boxShadow="md"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-8px)",
              boxShadow: "xl",
            }}
          >
            {/* Image Section */}
            <Box position="relative">
              <Image
                src={car.image}
                alt={car.name}
                h={{ base: "160px", md: "200px", lg: "240px" }}
                w="100%"
                objectFit="cover"
                transition="transform 0.4s ease"
                _hover={{ transform: "scale(1.05)" }}
              />

              <Badge
                position="absolute"
                top={{ base: 2, md: 3 }}
                right={{ base: 2, md: 3 }}
                colorScheme="yellow"
                px={{ base: 2, md: 3 }}
                py={{ base: 0.5, md: 1 }}
                borderRadius="md"
              >
                {car.capacity}
              </Badge>
            </Box>

            {/* Body */}
            <Card.Body>
              <Heading size="sm" mb={1}>
                {car.name}
              </Heading>

              <Text fontSize="sm" color="gray.500" mb={3}>
                {car.type}
              </Text>

              <Stack spacing={1} mb={4}>
                {car.features.map((feature, index) => (
                  <Text key={index} fontSize="sm" color="gray.600">
                    ✔ {feature}
                  </Text>
                ))}
              </Stack>

              <HStack justify="space-between">
                <Text fontWeight="bold">{car.price}</Text>
                <Button size="sm" variant="outline">
                  Details
                </Button>
              </HStack>
            </Card.Body>

            {/* Footer */}
            <Card.Footer>
              <Button
                colorScheme="yellow"
                w={{ base: "100%", md: "auto" }}
                size={{ base: "md", md: "md" }}
                fontWeight="bold"
                borderRadius="full"
                _hover={{ bg: "yellow.400" }}
              >
                Book This Car
              </Button>
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FleetGrid;
