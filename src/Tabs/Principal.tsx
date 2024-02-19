import { VStack, Image, Text, ScrollView, Box, Divider } from 'native-base'
import Logo from '../assets/Logo.png'
import { Titulo } from '../componentes/Titulo'
import { sessaoPrincipal } from '../utils/PrincipalEntradaTexto'
import { CardBusca } from '../componentes/CardBusca'

export default function Principal() {
    return (
        <ScrollView flex={1} p={5} >
            <VStack flex={1} color="#FFF" >
                <Image source={Logo} alignItems={'left'} mt={5} alt='Logo Voll' />
                <Titulo color="blue.500"  textAlign={"left"} mt={5}>Boas-vindas!</Titulo>
                <CardBusca/>

                <Titulo color="blue.500"  textAlign={"center"} mt={5}>Depoimentos</Titulo>

                {
                    sessaoPrincipal.map((entrada) => (
                            <Box flex={1} mt={5}>
                                {entrada.depoimentosTexto && entrada.depoimentosTexto.map((depoimento) => (
                                    <>
                                        <Text key={depoimento.id} > {depoimento.placeholder} </Text>
                                        <Titulo key={depoimento.from} fontSize='md' mb={1} mt={3}>{depoimento.from}</Titulo>
                                        <Divider mt={4} />
                                    </>
                                ))}
                            </Box>
                    ))
                }


            </VStack>
        </ScrollView>
    )
}