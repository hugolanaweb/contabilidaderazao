# Razão Contabilidade

Site de uma empresa **fictícia** de contabilidade consultiva (Campinas, SP). Projeto de portfólio: marca e website conceituais, sem backend, banco ou login.

Slogan: **"Todo número tem uma razão."**

## Stack

- [Astro 5](https://astro.build) + TypeScript, CSS puro
- Interações em TypeScript vanilla (sem framework de UI): calculadora do Fator R, régua da reforma tributária, Painel de exemplo
- Content Collections para os dados legais (`src/content/fontes.json`)
- Fontes self-hosted via Fontsource (Archivo, IBM Plex Sans, IBM Plex Mono)
- Vitest (fórmula do Fator R) e Playwright + axe (fluxo calculadora → contato e acessibilidade)

## Como rodar

```bash
npm install
npm run dev
```

| Comando | O que faz |
|---|---|
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve o build local |
| `npm test` | Testes unitários (Vitest) |
| `npm run test:e2e` | Testes Playwright, incluindo axe WCAG 2.2 AA |
| `npm run check` | Verificação de tipos do Astro |

Na primeira execução do Playwright: `npx playwright install chromium`.

## Observações

- **Formulário fictício:** o formulário de contato não envia nada. Para uso real, troque o handler por um endpoint (Formspree ou Netlify Forms).
- **Valores legais:** cada número legal tem fonte e data de conferência em `src/content/fontes.json`. Os valores da transição 2026–2033 foram conferidos só em fontes secundárias e devem ser **reconferidos em fonte oficial antes de qualquer deploy**.
- **Conteúdo de exemplo:** preços, escopo dos planos e dados do Painel são fictícios. Itens ainda indefinidos aparecem como `[placeholder]`.
- **Fotos:** banco de imagens do Unsplash (licença Unsplash). Créditos em [CREDITS.md](CREDITS.md). As pessoas retratadas não são clientes nem equipe.

## Estrutura

```
src/
  components/   Componentes Astro (Header, PlanTable, FatorRCalculator, ReformRuler, SamplePanel…)
  content/      fontes.json (dados legais com fonte e data)
  data/         Planos, FAQ, régua da reforma, Painel de exemplo
  lib/          Fórmula do Fator R (+ testes) e marcador de títulos
  pages/        Rotas: /, /servicos, /reforma-tributaria, /fator-r, /painel, /migracao, /sobre, /contato, /privacidade, /termos
  styles/       Tokens (CSS custom properties) e estilos globais
e2e/            Testes Playwright
```
