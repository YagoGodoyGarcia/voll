import { VStack, Image, Text, Box, Link } from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { secoesLogin } from './utils/LoginEntradaTexto';
export default function Login({ navigation }) {
   
  return (
    <VStack flex={1} alignItems={"center"} justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll' />
      <Titulo>{secoesLogin.titulo}</Titulo>

      <Box>
        {
          secoesLogin.entradaTexto.map((entrada) => (
            <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          ))
        }
      </Box>

      <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

      <Link href='https://google.com' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
