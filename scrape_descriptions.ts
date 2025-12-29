
import { santosDoDia2025 } from './src/data/santos-do-dia.ts';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import * as fs from 'fs';

async function scrapeDescriptions() {
  const updatedSantos = { ...santosDoDia2025 };

  for (const month in updatedSantos) {
    for (const santo of updatedSantos[month]) {
      if (santo.source && (!santo.description || santo.description.length < 150)) {
        try {
          console.log(`Fetching description for ${santo.title}...`);
          const response = await fetch(santo.source);
          if (!response.ok) {
            console.error(`Error fetching ${santo.source}: ${response.statusText}`);
            continue;
          }
          const html = await response.text();
          const dom = new JSDOM(html);
          const document = dom.window.document;
          
          // This is a guess based on common website structures. 
          // It will need to be adjusted if it doesn't work.
          const articleBody = document.querySelector('.entry-content');
          let description = '';
          if (articleBody) {
            description = articleBody.textContent.trim();
          } else {
            console.warn(`Could not find article body for ${santo.title}`);
          }

          santo.description = description;
          
        } catch (error) {
          console.error(`Error processing ${santo.title}:`, error);
        }
      }
    }
  }

  // Now, we need to format this as a TypeScript file.
  let output = `
type SantoDoDia = {
  day: number;
  title: string;
  image?: string;
  source?: string;
  description?: string;
};

export const mesesOrdenados = [
  "janeiro",
  "fevereiro",
  "marco",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro"
];
`;

  for (const month in updatedSantos) {
    output += `
const ${month}: SantoDoDia[] = ${JSON.stringify(updatedSantos[month], null, 2)};
`;
  }
  
  output += `
export const santosDoDia2025: Record<string, SantoDoDia[]> = {
  janeiro,
  fevereiro,
  marco,
  abril,
  maio,
  junho,
  julho,
  agosto,
  setembro,
  outubro,
  novembro,
  dezembro,
};

// ... keep the rest of the file as is
`;

  fs.writeFileSync('santos_com_descricoes.ts', output);
  console.log('File with updated descriptions written to santos_com_descricoes.ts');
}

scrapeDescriptions();
