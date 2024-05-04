// CardCliente.js

import React from 'react';
import { Box, Text } from 'native-base'; // Importe os componentes necessários do NativeBase

export const CardCliente = ({ nome, email, telefone }) => {
  return (
    <Box
      bg="gray.100"
      p={4}
      borderRadius={8}
      borderWidth={1}
      borderColor="gray.300"
    >
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        Cliente: {nome}
      </Text>
      <Text fontSize="md" mb={2}>
        E-mail: {email}
      </Text>
      <Text fontSize="md" mb={2}>
        Telefone: {telefone}
      </Text>
    </Box>
  );
};
