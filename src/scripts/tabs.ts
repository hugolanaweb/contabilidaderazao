/**
 * Abas acessíveis (padrão WAI-ARIA tabs, ativação automática no foco).
 * HTML esperado: [data-tabs] > [role=tablist] > button[role=tab][aria-controls] e painéis [role=tabpanel].
 * Sem JS, todos os painéis ficam visíveis (ver CSS `html.js`).
 */
export function iniciarAbas(raiz: HTMLElement, aoMudar?: (indice: number) => void): { ativar: (i: number) => void } {
  const abas = Array.from(raiz.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const painel = (aba: HTMLElement) => raiz.querySelector<HTMLElement>(`#${aba.getAttribute('aria-controls')}`);

  const ativar = (i: number, focar = false) => {
    abas.forEach((aba, j) => {
      const ativa = i === j;
      aba.setAttribute('aria-selected', String(ativa));
      aba.tabIndex = ativa ? 0 : -1;
      const p = painel(aba);
      if (p) p.hidden = !ativa;
      if (ativa && focar) aba.focus();
    });
    aoMudar?.(i);
  };

  abas.forEach((aba, i) => {
    aba.addEventListener('click', () => ativar(i));
    aba.addEventListener('keydown', (e) => {
      const n = abas.length;
      let alvo = -1;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') alvo = (i + 1) % n;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') alvo = (i - 1 + n) % n;
      else if (e.key === 'Home') alvo = 0;
      else if (e.key === 'End') alvo = n - 1;
      if (alvo >= 0) {
        e.preventDefault();
        ativar(alvo, true);
      }
    });
  });

  const inicial = Math.max(
    0,
    abas.findIndex((a) => a.getAttribute('aria-selected') === 'true'),
  );
  ativar(inicial);
  return { ativar: (i) => ativar(i, false) };
}
