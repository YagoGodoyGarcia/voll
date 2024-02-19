import { NativeBaseProvider, StatusBar } from 'native-base'
import { TEMAS } from './src/estilos/estilo';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
      <Rotas />
    </NativeBaseProvider>
  );
}
