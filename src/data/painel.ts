/** Dados FICTÍCIOS da "Empresa Exemplo Ltda." Nenhum número aqui é de cliente real. */
export interface Indicador {
  nome: string;
  valor: string;
  variacao: string;
  tom: 'pos' | 'neg' | 'neutro';
  comentario: string;
}
export interface Mes {
  id: string;
  rotulo: string;
  indicadores: Indicador[];
}

export const meses: Mes[] = [
  {
    id: 'mar', rotulo: 'Março 2026',
    indicadores: [
      { nome: 'Faturamento', valor: 'R$ 312.400', variacao: '+4,1% vs. fevereiro', tom: 'pos', comentario: 'Dois contratos novos foram faturados pela primeira vez neste mês.' },
      { nome: 'Margem', valor: '18,2%', variacao: '−1,4 p.p.', tom: 'neg', comentario: 'Margem 18,2% (−1,4 p.p.): o aumento da folha em março ainda não virou faturamento.' },
      { nome: 'Carga tributária efetiva', valor: '9,8%', variacao: '+0,2 p.p.', tom: 'neutro', comentario: 'A alíquota efetiva do Simples acompanha a receita dos últimos 12 meses, por isso muda devagar.' },
      { nome: 'Caixa', valor: 'R$ 186.500', variacao: '−R$ 21.300', tom: 'neg', comentario: 'A queda vem do pagamento da folha maior no mesmo mês em que um cliente atrasou.' },
      { nome: 'Provisões', valor: 'R$ 48.200', variacao: '+R$ 3.900', tom: 'neutro', comentario: 'Férias e 13º acumulados, ainda não pagos. É dinheiro comprometido, não livre.' },
    ],
  },
  {
    id: 'abr', rotulo: 'Abril 2026',
    indicadores: [
      { nome: 'Faturamento', valor: 'R$ 329.800', variacao: '+5,6% vs. março', tom: 'pos', comentario: 'Os dois contratos novos faturaram o mês inteiro.' },
      { nome: 'Margem', valor: '19,6%', variacao: '+1,4 p.p.', tom: 'pos', comentario: 'O faturamento extra cobriu a folha maior e a margem voltou ao patamar de fevereiro.' },
      { nome: 'Carga tributária efetiva', valor: '9,9%', variacao: '+0,1 p.p.', tom: 'neutro', comentario: 'Segue a receita acumulada em 12 meses. Sem mudança de faixa neste mês.' },
      { nome: 'Caixa', valor: 'R$ 214.700', variacao: '+R$ 28.200', tom: 'pos', comentario: 'O cliente em atraso pagou. O caixa recuperou o que saiu em março.' },
      { nome: 'Provisões', valor: 'R$ 52.100', variacao: '+R$ 3.900', tom: 'neutro', comentario: 'Mesmo ritmo de provisão mensal de março.' },
    ],
  },
  {
    id: 'mai', rotulo: 'Maio 2026',
    indicadores: [
      { nome: 'Faturamento', valor: 'R$ 321.100', variacao: '−2,6% vs. abril', tom: 'neg', comentario: 'Menos dias úteis no mês e um projeto adiado para junho.' },
      { nome: 'Margem', valor: '19,1%', variacao: '−0,5 p.p.', tom: 'neutro', comentario: 'A folha é fixa, então qualquer queda de faturamento aparece direto na margem.' },
      { nome: 'Carga tributária efetiva', valor: '9,9%', variacao: '0,0 p.p.', tom: 'neutro', comentario: 'Estável. A razão entre folha e receita segue acima de 28% nos últimos 12 meses.' },
      { nome: 'Caixa', valor: 'R$ 223.900', variacao: '+R$ 9.200', tom: 'pos', comentario: 'Mesmo com faturamento menor, os recebimentos de abril entraram em maio.' },
      { nome: 'Provisões', valor: 'R$ 56.000', variacao: '+R$ 3.900', tom: 'neutro', comentario: 'Segue o ritmo mensal.' },
    ],
  },
];
