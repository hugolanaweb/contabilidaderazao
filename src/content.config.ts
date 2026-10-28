import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const fontes = defineCollection({
  loader: file('src/content/fontes.json'),
  schema: z.object({
    rotulo: z.string(),
    valor: z.string(),
    fonte: z.string(),
    url: z.string().url(),
    conferidoEm: z.string().nullable(),
    // oficial: conferido no texto legal; secundaria: conferido só em fonte de terceiros; pendente: não conferido
    status: z.enum(['oficial', 'secundaria', 'pendente']),
  }),
});

export const collections = { fontes };
