/** Escopo dos planos: texto de projeto conceitual (preços e entregas são hipóteses). */
export interface Plano {
  id: 'base' | 'gestao' | 'estrategia';
  nome: string;
  preco: string;
  sufixo?: string;
  para: string;
  etiqueta?: string;
  itens: string[];
  botao: string;
}

export const planos: Plano[] = [
  {
    id: 'base',
    nome: 'Razão Base',
    preco: 'R$ 890',
    sufixo: 'a partir de · por mês',
    para: 'Para quem precisa de tudo em dia, com clareza.',
    itens: [
      'Obrigações fiscais e contábeis em dia',
      'Painel Razão mensal, com 5 indicadores comentados',
      'Resposta em 1 dia útil',
      '1 contador responsável',
    ],
    botao: 'Falar sobre o Base',
  },
  {
    id: 'gestao',
    nome: 'Razão Gestão',
    preco: 'R$ 2.400',
    sufixo: 'a partir de · por mês',
    para: 'Para quem quer decidir com os números e se preparar para a reforma.',
    etiqueta: 'Recomendado para empresas em crescimento',
    itens: [
      'Tudo do Razão Base',
      'Acompanhamento mensal do Fator R',
      'Revisão anual do Plano de Transição da Reforma',
      'Reunião trimestral de análise dos números',
    ],
    botao: 'Falar sobre o Gestão',
  },
  {
    id: 'estrategia',
    nome: 'Razão Estratégia',
    preco: 'Sob proposta',
    para: 'Para quem precisa de apoio contínuo nas decisões.',
    itens: [
      'Tudo do Razão Gestão',
      'Reunião mensal de resultado e caixa',
      'Projeção de caixa e cenários tributários',
      'Escopo desenhado sob medida',
    ],
    botao: 'Pedir proposta',
  },
];

/** Matriz de comparação da página /servicos. */
export const comparativo: { item: string; base: boolean; gestao: boolean; estrategia: boolean }[] = [
  { item: 'Obrigações fiscais e contábeis em dia', base: true, gestao: true, estrategia: true },
  { item: 'Painel Razão mensal, com 5 indicadores comentados', base: true, gestao: true, estrategia: true },
  { item: 'Resposta em 1 dia útil', base: true, gestao: true, estrategia: true },
  { item: '1 contador responsável', base: true, gestao: true, estrategia: true },
  { item: 'Acompanhamento mensal do Fator R', base: false, gestao: true, estrategia: true },
  { item: 'Revisão anual do Plano de Transição da Reforma', base: false, gestao: true, estrategia: true },
  { item: 'Reunião trimestral de análise dos números', base: false, gestao: true, estrategia: true },
  { item: 'Reunião mensal de resultado e caixa', base: false, gestao: false, estrategia: true },
  { item: 'Projeção de caixa e cenários tributários', base: false, gestao: false, estrategia: true },
  { item: 'Escopo desenhado sob medida', base: false, gestao: false, estrategia: true },
];
