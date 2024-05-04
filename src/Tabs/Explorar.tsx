import React from 'react';
import { VStack, ScrollView, Text, Box, Center, HStack } from 'native-base';
import { relatorioEstrategico } from '../utils/Dados';
import { Titulo } from '../componentes/Titulo';

export default function Explorar() {
  const { numeroClientesFieis, numeroCartoesCompletos, numeroPremiosCompletos, topClientesFieis } = relatorioEstrategico;

  return (
    <ScrollView flex={1} p={5}>
      <Center>
        <VStack space={4} alignItems="center">
          <Titulo color="blue.500" fontSize="lg">Relatório Estratégico</Titulo>
          <Box
            bg="white"
            p={4}
            borderRadius={16}
            shadow={2}
            w="100%"
          >
            <Text fontWeight="bold" fontSize="md" mb={2}>
              Número de Clientes Fiéis: {numeroClientesFieis}
            </Text>
            <Text fontWeight="bold" fontSize="md" mb={2}>
              Número de Cartões Completos: {numeroCartoesCompletos}
            </Text>
            <Text fontWeight="bold" fontSize="md" mb={2}>
              Número de Prêmios Resgatados: {numeroPremiosCompletos}
            </Text>
          </Box>
          <Box
            bg="white"
            p={4}
            borderRadius={16}
            shadow={2}
            w="100%"
          >
            <Titulo color="blue.500" fontSize="md" mb={2}>Top 5 Clientes Mais Fiéis</Titulo>
            {topClientesFieis.map((cliente, index) => (
              <HStack key={index} justifyContent="space-between" mb={2}>
                <Text fontWeight="bold" fontSize="md">{index + 1}. {cliente.nome}</Text>
                <Text fontWeight="bold" fontSize="md">Cartões Completos: {cliente.completos}</Text>
              </HStack>
            ))}
          </Box>
        </VStack>
      </Center>
    </ScrollView>
  );
}
