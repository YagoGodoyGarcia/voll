import { VStack, Text, Divider, ScrollView } from 'native-base'
import { CardConsulta } from '../componentes/CardConsulta'
import { consultas } from '../utils/ConsultasEntradaTexto'
import { Titulo } from '../componentes/Titulo'
import { Botao } from '../componentes/Botao'

export default function Consultas() {
    let proximas = []
    let passadas = []

    consultas.forEach(consulta => {
        consulta.foiAgendado ? proximas.push(consulta) : passadas.push(consulta)
    })

    return (
        <ScrollView flex={1}>
            <VStack p={5}>
                <VStack>
                    <Titulo color="blue.500">Minhas Consultas</Titulo>
                    <Botao mt={5}>Agendar outra consulta</Botao>
                </VStack>
                <VStack mt={5} >
                    <Titulo color="blue.500" fontSize='lg' textAlign={"left"} >Minhas Consultas</Titulo>
                    {
                        proximas.map((consulta) => (

                            <CardConsulta
                                nome={consulta.nome}
                                especialidade={consulta.especialidade}
                                foto={consulta.foto}
                                data={consulta.data}
                                foiAgendado={consulta.foiAgendado}
                                foiAtendido={consulta.foiAtendido}
                            />
                        ))
                    }

                    <Divider mt={5} bg='#606060' />
                    <Titulo color="blue.500" fontSize='lg' textAlign={"left"} >Consultas Passadas</Titulo>
                    {
                        passadas.map((consulta) => (

                            <CardConsulta
                                nome={consulta.nome}
                                especialidade={consulta.especialidade}
                                foto={consulta.foto}
                                data={consulta.data}
                                foiAgendado={consulta.foiAgendado}
                                foiAtendido={consulta.foiAtendido}
                            />
                        ))
                    }
                </VStack>

            </VStack>
        </ScrollView>
    )
}