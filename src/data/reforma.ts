export interface Marco {
  id: string;
  /** rótulo na régua */
  rotulo: string;
  de: number;
  ate: number;
  /** resumo da Home */
  resumo: string;
  muda: string;
  fazer: string;
  fonteId: string;
}

/** Marcos completos, ano a ano (página /reforma-tributaria). */
export const marcosAno: Marco[] = [
  {
    id: 'a2026', rotulo: '2026', de: 2026, ate: 2026,
    resumo: 'Teste: CBS 0,9% e IBS 0,1%.',
    muda: 'Ano de teste. Entram a CBS a 0,9% e o IBS a 0,1%, destacados nos documentos fiscais de forma informativa e compensados com PIS e Cofins no mesmo período.',
    fazer: 'Conferir se o sistema de emissão de notas já destaca CBS e IBS e se a equipe sabe ler os novos campos.',
    fonteId: 'reforma-2026',
  },
  {
    id: 'a2027', rotulo: '2027', de: 2027, ate: 2027,
    resumo: 'CBS integral. Fim de PIS e Cofins.',
    muda: 'A CBS passa a valer de verdade e PIS e Cofins deixam de existir.',
    fazer: 'Simular a carga da CBS sobre o seu faturamento e revisar contratos que citam PIS e Cofins.',
    fonteId: 'reforma-2027',
  },
  {
    id: 'a2028', rotulo: '2028', de: 2028, ate: 2028,
    resumo: 'Consolidação da CBS.',
    muda: 'Ano de consolidação: a CBS segue em vigor e não há novo passo do IBS no cronograma que consultamos.',
    fazer: 'Usar o ano para ajustar processos e conferir créditos antes do início da troca de ICMS e ISS.',
    fonteId: 'reforma-2027',
  },
  {
    id: 'a2029', rotulo: '2029', de: 2029, ate: 2029,
    resumo: 'IBS 10%. ICMS e ISS a 90%.',
    muda: 'Começa a troca: IBS a 10% do previsto e ICMS e ISS reduzidos para 90%.',
    fazer: 'Revisar a precificação de contratos que atravessam a transição.',
    fonteId: 'reforma-2029-2032',
  },
  {
    id: 'a2030', rotulo: '2030', de: 2030, ate: 2030,
    resumo: 'IBS 20%. ICMS e ISS a 80%.',
    muda: 'IBS a 20% do previsto; ICMS e ISS a 80%.',
    fazer: 'Reavaliar o plano de transição da empresa com os números do ano anterior.',
    fonteId: 'reforma-2029-2032',
  },
  {
    id: 'a2031', rotulo: '2031', de: 2031, ate: 2031,
    resumo: 'IBS 30%. ICMS e ISS a 70%.',
    muda: 'IBS a 30% do previsto; ICMS e ISS a 70%.',
    fazer: 'Conferir o quanto da carga já migrou para o IBS e o que ainda depende de ICMS ou ISS.',
    fonteId: 'reforma-2029-2032',
  },
  {
    id: 'a2032', rotulo: '2032', de: 2032, ate: 2032,
    resumo: 'IBS 40%. ICMS e ISS a 60%.',
    muda: 'IBS a 40% do previsto; ICMS e ISS a 60%. É o último ano antes do modelo completo.',
    fazer: 'Fechar os ajustes de sistemas, contratos e preços para o modelo completo.',
    fonteId: 'reforma-2029-2032',
  },
  {
    id: 'a2033', rotulo: '2033', de: 2033, ate: 2033,
    resumo: 'Modelo completo.',
    muda: 'Modelo completo: CBS e IBS no lugar dos cinco tributos antigos sobre consumo.',
    fazer: 'Manter a revisão periódica de enquadramento e créditos no novo modelo.',
    fonteId: 'reforma-2033',
  },
];

/** Marcos da Home: 2029 a 2032 agrupados, como no brief. */
export const marcosHome: Marco[] = [
  marcosAno[0],
  marcosAno[1],
  {
    id: 'a2029-2032', rotulo: '2029–2032', de: 2029, ate: 2032,
    resumo: 'IBS 10/20/30/40%. ICMS e ISS 90/80/70/60%.',
    muda: 'A troca é gradual: o IBS sobe para 10%, 20%, 30% e 40% do previsto, e ICMS e ISS caem para 90%, 80%, 70% e 60%.',
    fazer: 'Acompanhar ano a ano na página da reforma.',
    fonteId: 'reforma-2029-2032',
  },
  marcosAno[7],
];
