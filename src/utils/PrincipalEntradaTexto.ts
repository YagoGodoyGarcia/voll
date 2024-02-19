const entradaPrincial: entradaTexto[] = [
  {
    id: 1,
    placeholder: 'Digite a especialidade'
  },
  {
    id: 2,
    placeholder: 'Digite sua localização'
  }
]
const depoimentosPrincial: entradaTexto[] = [
  {
    id: 1,
    placeholder: 'Mas, na verdade, ambos acusamos e com justo ódio trazemos aqueles que merecem, que são amolecidos e corrompidos pela lisonja dos prazeres presentes, e que estão cegos pela luxúria pelas dores e problemas que estão prestes a experimentar, e não os sustentam. E, de fato, a distinção entre essas coisas é fácil e conveniente.',
    from: "Júlio, 40 anos, São Paulo/SP."
  },
  {
    id: 2,
    placeholder: 'Pois no tempo livre, quando temos a opção de escolher e nada nos impede de fazer o que mais nos agrada, todo prazer deve ser assumido, toda dor rejeitada.',
    from: "Pedro, 48 anos, São Paulo/SP."
  },
  {
    id: 3,
    placeholder: 'Mas em certos momentos, e seja por deveres ou por necessidades das coisas, muitas vezes acontecerá que ambos os prazeres devem ser rejeitados e os problemas não devem ser recusados. E assim a escolha destas coisas é realizada aqui por um homem sábio, para que ou rejeitando os prazeres ele possa obter outras coisas, ou suportando dores mais severas.',
    from: "Marcos, 34 anos, São Paulo/SP."
  }
]

const buscarProps ={
  id: 1,
  entradaTexto: entradaPrincial,
  botao: "Buscar",
}

const sessaoPrincipal = [
 
  {
    id: 2,
    titulo: "Depoimentos",
    depoimentosTexto: depoimentosPrincial,
    posicao: "center",
    shadow: 0,
    p: 0,
    borderRadius: 'none'
  }
]


interface entradaTexto {
  id: number,
  placeholder: string,
  from?: string
}
export { sessaoPrincipal, buscarProps }