import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('calculadora do Fator R leva o resultado ao formulário de contato', async ({ page }) => {
  await page.goto('/fator-r');
  await page.getByLabel(/Folha de pagamento/).fill('840.000,00');
  await page.getByLabel(/Receita bruta/).fill('3.500.000,00');
  await page.getByRole('button', { name: 'Calcular Fator R' }).click();

  await expect(page.getByText('Seu Fator R é 24,0%. Anexo V', { exact: false })).toBeAttached();
  await page.getByRole('link', { name: 'Levar meu resultado para o diagnóstico' }).click();

  await expect(page).toHaveURL(/\/contato\?fator=24\.0$/);
  await expect(page.getByText('Fator R que você calculou: 24,0%')).toBeVisible();
  await expect(page.locator('input[name="fator_r"]')).toHaveValue('24.0');

  await page.getByLabel('Nome').fill('Ana Teste');
  await page.getByLabel('E-mail').fill('ana@exemplo.com');
  await page.getByLabel('WhatsApp').fill('19999990000');
  await page.getByLabel('Faixa de faturamento anual').selectOption('R$ 1 mi a R$ 5 mi');
  await page.getByLabel('Regime atual').selectOption('Simples Nacional');
  await page.getByLabel(/Concordo com o uso destes dados/).check();
  await page.getByRole('button', { name: 'Agendar diagnóstico gratuito' }).click();

  await expect(page.getByRole('status')).toContainText('Formulário fictício');
});

test('27,99% fica no Anexo V', async ({ page }) => {
  await page.goto('/fator-r');
  await page.getByLabel(/Folha de pagamento/).fill('279900');
  await page.getByLabel(/Receita bruta/).fill('1000000');
  await page.getByRole('button', { name: 'Calcular Fator R' }).click();
  await expect(page.getByText('Anexo V', { exact: false }).first()).toBeAttached();
  await expect(page.getByRole('link', { name: 'Levar meu resultado para o diagnóstico' })).toHaveAttribute('href', '/contato?fator=27.9');
});

test('régua da reforma navega por teclado', async ({ page }) => {
  await page.goto('/reforma-tributaria');
  const tabs = page.getByRole('tab');
  await tabs.first().focus();
  await page.keyboard.press('ArrowRight');
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('End');
  await expect(tabs.last()).toHaveAttribute('aria-selected', 'true');
});

for (const caminho of ['/', '/fator-r', '/reforma-tributaria', '/painel', '/contato']) {
  test(`axe sem violações em ${caminho}`, async ({ page }) => {
    await page.goto(caminho);
    const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
    expect(r.violations.map((v) => `${v.id}: ${v.nodes[0]?.target}`)).toEqual([]);
  });
}
