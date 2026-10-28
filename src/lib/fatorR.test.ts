import { describe, expect, it } from 'vitest';
import { calcularFatorR, formatarPercentual, lerNumero } from './fatorR';

describe('calcularFatorR', () => {
  it('folha zero resulta em 0% e Anexo V', () => {
    expect(calcularFatorR(0, 1_000_000)).toEqual({ ok: true, razao: 0, percentual: 0, anexo: 'V' });
  });

  it('receita zero não divide por zero', () => {
    expect(calcularFatorR(100_000, 0)).toEqual({ ok: false, motivo: 'receita-zero' });
  });

  it('exatamente 28% fica no Anexo III', () => {
    const r = calcularFatorR(280_000, 1_000_000);
    expect(r.ok && r.anexo).toBe('III');
  });

  it('27,99% fica no Anexo V', () => {
    const r = calcularFatorR(279_900, 1_000_000);
    expect(r.ok && r.anexo).toBe('V');
    expect(r.ok && r.percentual).toBe(27.99);
  });

  it('acima de 28% fica no Anexo III', () => {
    const r = calcularFatorR(350_000, 1_000_000);
    expect(r.ok && r.anexo).toBe('III');
  });

  it('valores vazios ou negativos são inválidos', () => {
    expect(calcularFatorR(NaN, 1000)).toEqual({ ok: false, motivo: 'vazio' });
    expect(calcularFatorR(-1, 1000)).toEqual({ ok: false, motivo: 'invalido' });
  });
});

describe('lerNumero', () => {
  it('aceita vírgula decimal', () => {
    expect(lerNumero('1234,56')).toBe(1234.56);
  });
  it('aceita ponto de milhar com vírgula decimal', () => {
    expect(lerNumero('1.234.567,89')).toBe(1234567.89);
  });
  it('aceita ponto de milhar sem decimais', () => {
    expect(lerNumero('1.234.567')).toBe(1234567);
  });
  it('aceita ponto decimal', () => {
    expect(lerNumero('1234.56')).toBe(1234.56);
  });
  it('ignora R$ e espaços', () => {
    expect(lerNumero('R$ 3.500.000,00')).toBe(3_500_000);
  });
  it('texto vazio ou lixo vira NaN', () => {
    expect(lerNumero('')).toBeNaN();
    expect(lerNumero('abc')).toBeNaN();
  });
});

describe('formatarPercentual', () => {
  it('usa vírgula decimal', () => {
    expect(formatarPercentual(22)).toBe('22,0');
  });
  it('trunca 27,99 para 27,9 em vez de arredondar para 28,0', () => {
    expect(formatarPercentual(27.99)).toBe('27,9');
  });
});
