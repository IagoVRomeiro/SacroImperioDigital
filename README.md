# Sacro Império Digital

Site católico com orações, Santo Rosário, liturgia diária, santos do dia e catequese.
Publicado em https://sacro-imperio-digital.vercel.app.

Feito com [Astro](https://astro.build), Tailwind CSS e MDX, hospedado na Vercel.

## Rodando localmente

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o build da Vercel em .vercel/output
```

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `src/pages/*.mdx` | Uma página por oração (o nome do arquivo vira a URL) |
| `src/pages/oracoes.md` | Índice das orações. Adicione aqui o link de cada oração nova |
| `src/content/` | Trechos reutilizados (Pai Nosso, Ave Maria, abertura e fechamento do terço) |
| `src/data/santos.ts` | Santo de cada dia do ano (data fixa, vale para todos os anos) |
| `public/santos/MM-DD.jpg` | Imagem do santo de cada dia |
| `src/data/liturgia.ts` | Leituras da missa por data (`AAAA-MM-DD`) |
| `src/data/frases-dos-santos.ts` | Frases exibidas aleatoriamente na página inicial |

As páginas são geradas estaticamente. Só a página inicial, `/santos-do-dia` e `/rosario-do-dia`
rodam no servidor a cada visita, porque dependem da data de hoje (horário de Brasília).

## Manutenção

- **Liturgia:** `src/data/liturgia.ts` cobre até 31/12/2026. Antes disso, adicione as datas de 2027.
  Dias sem entrada mostram "Liturgia de hoje ainda não cadastrada".
- **Nova oração:** crie `src/pages/nome-da-oracao.mdx` com `layout: ../layouts/post-layout.astro` e `title`,
  escreva uma linha por verso e adicione o link em `oracoes.md`.
