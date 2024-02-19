import { VStack, Image, Text, ScrollView, Box, Divider } from 'native-base'
import Logo from '../assets/Logo.png'
import { Titulo } from '../componentes/Titulo'
import { sessaoPrincipal } from '../utils/PrincipalEntradaTexto'
import { CardBusca } from '../componentes/CardBusca'
import { especialistas } from '../utils/ConsultasEntradaTexto'
import { CardConsulta } from '../componentes/CardConsulta'

export default function Explorar() {
    return (
        <ScrollView flex={1} p={5} >
            <VStack flex={1} color="#FFF" mb={10} >
                <CardBusca />

                <Titulo color="blue.500" textAlign={"center"} mt={5}>Resultado da Busca</Titulo>
                {
                    especialistas.map((consulta) => (

                        <CardConsulta
                            nome={consulta.nome}
                            especialidade={consulta.especialidade}
                            foto={consulta.foto}
                            data={consulta.data}
                            foiAgendado={false}
                        />
                    ))
                }
            </VStack>
        </ScrollView>
    )
}