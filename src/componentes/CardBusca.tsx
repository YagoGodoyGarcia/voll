import { Text, Avatar, VStack } from "native-base";
import { Botao } from "./Botao";
import { buscarProps } from '../utils/PrincipalEntradaTexto'
import { EntradaTexto } from "./EntradaTexto";


export function CardBusca() {
    return (
        <VStack w={"100%"} bg={"white"} borderRadius="lg" shadow={3} mt={5} p={5} >
        {buscarProps.entradaTexto && buscarProps.entradaTexto.map((conteudo) => (

            <EntradaTexto placeholder={conteudo.placeholder} key={conteudo.id} />

        ))}
        {buscarProps?.botao && <Botao key={buscarProps.botao} mt={5}>{buscarProps.botao}</Botao>}
    </VStack>
    )
}