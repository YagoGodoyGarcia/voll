import React, { useState } from 'react';
import { ScrollView, VStack, Image, Text, Input, Button, Box, Center, ZStack } from 'native-base';
import Logo from '../assets/Logo.png';
import { Titulo } from '../componentes/Titulo';

export default function Principal() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [codigo, setCodigo] = useState('');

    const cadastrarCliente = () => {
        // Aqui você pode implementar a lógica para cadastrar o novo cliente
        console.log('Cliente cadastrado:', { nome, email, telefone, codigo });
        // Resetar os campos após cadastrar
        setNome('');
        setEmail('');
        setTelefone('');
        setCodigo('');
    };

    return (
        <ScrollView flex={1} p={5}>
            
            <VStack flex={1} color="#FFF">
                <Image source={Logo} alt='Logo do Restaurante' mt={5} />
                <Titulo color="blue.500" textAlign={"left"} mt={5}>Cadastrar Novo Cliente</Titulo>
                
                <Input
                    placeholder="Nome"
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                    mt={3}
                />
                <Input
                    placeholder="E-mail"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    mt={3}
                />
                <Input
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={(text) => setTelefone(text)}
                    mt={3}
                />
                <Input
                    placeholder="Código Único (4 dígitos)"
                    value={codigo}
                    onChangeText={(text) => setCodigo(text)}
                    mt={3}
                />

                <Button onPress={cadastrarCliente} mt={5}>Cadastrar</Button>
            </VStack>
        </ScrollView>
    );
}
