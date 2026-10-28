const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function formatar(n: number, casas: number, agrupar: boolean): string {
  return n.toLocaleString('pt-BR', {
    minimumFractionDigits: casas,
    maximumFractionDigits: casas,
    useGrouping: agrupar,
  });
}

/** Conta de 0 até o valor final em 900 ms, uma vez. O valor final já está no HTML. */
function contar(el: HTMLElement): void {
  const alvo = Number(el.dataset.count);
  const de = Number(el.dataset.from ?? 0);
  const casas = Number(el.dataset.decimals ?? 0);
  const prefixo = el.dataset.prefix ?? '';
  const sufixo = el.dataset.suffix ?? '';
  const agrupar = el.dataset.group === '1';
  const saida = el.querySelector<HTMLElement>('.bn-v');
  if (!saida || Number.isNaN(alvo)) return;
  const dur = 900;
  const ini = performance.now();
  const passo = (t: number) => {
    const p = Math.min((t - ini) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    saida.textContent = prefixo + formatar(de + (alvo - de) * ease, casas, agrupar) + sufixo;
    if (p < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
}

function observarEntrada(): void {
  const contadores = document.querySelectorAll<HTMLElement>('[data-count]');
  const marcas = document.querySelectorAll<HTMLElement>('.hl');
  if (reduzir || !('IntersectionObserver' in window)) {
    marcas.forEach((m) => m.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        if (el.matches('[data-count]')) contar(el);
        if (el.matches('.hl')) el.classList.add('is-visible');
        io.unobserve(el);
      }
    },
    { threshold: 0.4 },
  );
  contadores.forEach((c) => io.observe(c));
  marcas.forEach((m) => io.observe(m));
}

function cabecalho(): void {
  const hdr = document.querySelector<HTMLElement>('[data-header]');
  if (!hdr) return;
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (hero?.hasAttribute('data-hero-cta')) document.body.classList.add('tem-hero-cta');
  const atualizar = () => {
    const limite = hero ? hero.offsetHeight - hdr.offsetHeight : 80;
    const passou = window.scrollY > limite;
    hdr.classList.toggle('is-compact', passou);
    document.body.classList.toggle('apos-hero', passou);
  };
  atualizar();
  window.addEventListener('scroll', atualizar, { passive: true });

  const btn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!btn || !nav) return;
  const alternar = (abrir: boolean) => {
    nav.classList.toggle('aberto', abrir);
    btn.setAttribute('aria-expanded', String(abrir));
  };
  btn.addEventListener('click', () => alternar(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      alternar(false);
      btn.focus();
    }
  });
  nav.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) alternar(false);
  });
}

observarEntrada();
cabecalho();
