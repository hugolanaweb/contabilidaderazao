const SVG =
  '<svg class="hl-svg" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 4 L5 1.2 L24 3 L47 1 L71 2.8 L100 0.6 L99 9 L100 15 L96 19 L73 17 L49 19.2 L22 17.4 L3 19 L1.2 11 Z" /></svg>';

/** Troca **trecho** pelo marcador de marca-texto (mesmo HTML do componente Highlight). */
export function marcar(titulo: string): string {
  return titulo.replace(/\*\*(.+?)\*\*/g, (_, t: string) => `<span class="hl"><span class="hl-txt">${t}</span>${SVG}</span>`);
}
