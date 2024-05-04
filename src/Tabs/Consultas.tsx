import React, { useState } from 'react';
import {
    VStack,
    Text,
    ScrollView,
    Input,
    Button,
    Box,
    Center,
    HStack,
    useToken,
    Icon,
    Spinner,
    Pressable,
    Badge,
    Flex,
    Spacer,
    Fab,
} from 'native-base';
import { clientes, relatorios } from '../utils/Dados';
import { Titulo } from '../componentes/Titulo';
import { AntDesign, MaterialIcons,  } from '@expo/vector-icons';


export default function Consultas() {
    const [codigo, setCodigo] = useState('');
    const [clienteEncontrado, setClienteEncontrado] = useState(null);
    const [pontos, setPontos] = useState(0);
    const [mensagem, setMensagem] = useState('');
    const [relatorio, setRelatorio] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const bg = useToken('colors', 'gray.200');

    const buscarCliente = async () => {
        setIsLoading(true);
        const cliente = clientes.find((cliente) => cliente.codigo === codigo);
        if (cliente) {
            setClienteEncontrado(cliente);
            const rel = relatorios.find((item) => item.codigo === codigo);
            if (!rel) {
                setRelatorio({ completos: 0, premiosResgatados: 0 });
            } else {
                setRelatorio(rel);
            }
            setMensagem('');
        } else {
            setMensagem('Cliente não encontrado');
        }
        setIsLoading(false);
    };

    const adicionarPonto = () => {
        if (clienteEncontrado) {
            if (pontos < 10) {
                const novosPontos = pontos + 1;
                setPontos(novosPontos);
                setMensagem(`Ponto adicionado ao cliente ${clienteEncontrado.nome}`);
                if (novosPontos === 10) {
                    alert(`Parabéns!, ${clienteEncontrado.nome} provou ser fiel e ganhou o prêmio!`);
                    setPontos(0);
                    setRelatorio({
                        completos: relatorio.completos + 1,
                        premiosResgatados: relatorio.premiosResgatados + 1,
                    });
                }
            } else {
                setMensagem('Limite de pontos atingido');
            }
        } else {
            setMensagem('Nenhum cliente selecionado');
        }
    };

    return (
        <ScrollView flex={1} p={5}>
            <center>
                <HStack space={2} alignItems="center" w="80%">
                    <Input
                        placeholder="Código do Cliente"
                        value={codigo}
                        onChangeText={(text) => setCodigo(text)}
                        borderRadius={8}
                        borderColor="gray.300"
                        borderWidth={1}
                        px={4}
                        py={2}
                        flex={1}
                    />
                    <Button
                        onPress={buscarCliente}
                        colorScheme="blue"
                        size="sm"
                    >
                        Buscar
                    </Button>
                </HStack>
                {isLoading ? (
                    <Center mt={4}>
                        <Spinner size="lg" color="blue.500" />
                    </Center>
                ) : (
                    clienteEncontrado && (
                        <Box height="200" w="600" marginTop="5%" shadow="4" rounded="lg" bg="blue.200" p={5}>
                              <Fab renderInPortal={false} shadow={2} placement="top-right" size="sm" icon={<Icon color="white" as={MaterialIcons} name="lightbulb" size="4" />} label="Dados Cliente" />
      
                            <HStack alignItems="center" color="blue.500" >
                                <Badge colorScheme="darkBlue" _text={{
                                    color: "white"
                                }} variant="solid" rounded="4">
                                    {clienteEncontrado.codigo}
                                </Badge>

                                <Spacer />
                                
                                <Text fontWeight="bold" fontSize="md" color="'blue.700">
                                    {pontos}/10
                                </Text>
                            </HStack>

                            <VStack space={3}  marginTop={2.5}   >

 
                                <HStack>
                                    {[...Array(5)].map((_, index) => (
                                        <Box
                                            key={index}
                                            bg={index < pontos ? 'blue.700' : '#fff'}
                                            size={12}
                                            borderRadius={4}
                                            mx={1}
                                            ml={8}
                                           
                                            rounded="lg" shadow={3}
                                        />
                                    ))}
                                </HStack>
                                <HStack>
                                    {[...Array(5)].map((_, index) => (
                                        <Box
                                            key={index + 5}
                                            bg={(index + 5) < pontos ? 'blue.700' : '#fff'}
                                            size={12}
                                            borderRadius={4}
                                            mx={1}
                                            ml={8}
                                            rounded="lg" shadow={3}
                                        />
                                    ))}
                                </HStack>
                            </VStack>
                            <Fab onPress={adicionarPonto} renderInPortal={false} shadow={2} size="sm" icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />} />


                        </Box>
                    )
                )}
            </center>
            
        </ScrollView>
    );
}
