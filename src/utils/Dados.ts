// utils/Dados.ts

// Dados dos clientes
export const clientes = [
    { codigo: '001', nome: 'Cliente 1' },
    { codigo: '002', nome: 'Cliente 2' },
    { codigo: '003', nome: 'Cliente 3' },
  ];
  
  // Dados dos relatórios
  export const relatorios = [
    { codigo: '001', nome:"thiago", completos: 2, premiosResgatados: 1 }, // Exemplo de relatório para o cliente 001
    { codigo: '002', nome:"thiago", completos: 1, premiosResgatados: 0 }, // Exemplo de relatório para o cliente 002
    { codigo: '003', nome:"thiago", completos: 0, premiosResgatados: 0 }, // Exemplo de relatório para o cliente 003
  ];
  
  export const relatorioEstrategico = {
    numeroClientesFieis: 50,
    numeroCartoesCompletos: 180,
    numeroPremiosCompletos: 120,
    topClientesFieis: [
      { nome: 'Cliente 1', completos: 10 },
      { nome: 'Cliente 2', completos: 9 },
      { nome: 'Cliente 3', completos: 8 },
      { nome: 'Cliente 4', completos: 7 },
      { nome: 'Cliente 5', completos: 6 },
    ],
  };
  