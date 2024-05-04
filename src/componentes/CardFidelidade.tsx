import React from 'react';
import { Box, Text, Button } from 'native-base'; // Importe os componentes necessários do NativeBase

export const CardFidelidade = () => {
  return (
    <Box
      bg="blue.100"
      p={4}
      borderRadius={8}
      borderWidth={1}
      borderColor="blue.300"
      mt={5}
    >
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Programa de Fidelidade
      </Text>
      <Text fontSize="md" mb={2}>
        Junte pontos a cada compra e ganhe recompensas exclusivas!
      </Text>
      <Button colorScheme="blue" mt={2}>
        Saiba Mais
      </Button>
    </Box>
  );
};
