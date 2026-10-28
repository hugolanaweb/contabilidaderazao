export type FatorRResultado =
  | { ok: true; razao: number; percentual: number; anexo: 'III' | 'V' }
  | { ok: false; motivo: 'vazio' | 'invalido' | 'receita-zero' };

/** Converte "1.234,56", "1234,56" ou "1234.56" em número. Retorna NaN se inválido. */
export function lerNumero(texto: string): number {
  const t = texto.replace(/[R$\s]/g, '');
  if (t === '') return NaN;
  if (t.includes(',')) return Number(t.replace(/\./g, '').replace(',', '.'));
  // só pontos: "1.234.567" é milhar; "1234.56" é decimal
  if (/^\d{1,3}(\.\d{3})+$/.test(t)) return Number(t.replace(/\./g, ''));
  return Number(t);
}

/** Fator R = folha 12 meses ÷ receita bruta 12 meses. >= 28% → Anexo III; < 28% → Anexo V. */
export function calcularFatorR(folha: number, receita: number): FatorRResultado {
  if (Number.isNaN(folha) || Number.isNaN(receita)) return { ok: false, motivo: 'vazio' };
  if (folha < 0 || receita < 0 || !Number.isFinite(folha) || !Number.isFinite(receita)) {
    return { ok: false, motivo: 'invalido' };
  }
  if (receita === 0) return { ok: false, motivo: 'receita-zero' };
  const razao = folha / receita;
  // compara em centésimos de ponto percentual para evitar erro de ponto flutuante em 27,99% vs 28%
  const percentual = Math.round(razao * 10000) / 100;
  return { ok: true, razao, percentual, anexo: razao >= 0.28 - 1e-12 ? 'III' : 'V' };
}

/** pt-BR, uma casa, truncado: 27,99 vira "27,9" para nunca exibir "28,0" abaixo do limite. */
export function formatarPercentual(p: number): string {
  const truncado = Math.floor(p * 10 + 1e-9) / 10;
  return truncado.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}
