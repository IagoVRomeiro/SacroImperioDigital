Analisando o projeto, identifiquei alguns pontos importantes de melhoria para remover redundâncias e otimizar a performance.

**Principais Problemas:**

1.  **Carregamento de Dados Ineficiente:** O problema mais crítico é a forma como os dados são carregados. Componentes como `LiturgiaDoDia`, `HomiliaDoDia` e `SantosDoDia` carregam arquivos de dados com o ano inteiro, mesmo que precisem apenas das informações de um dia. Isso torna o site lento, especialmente a página de 'Santos do Dia', que envia todos os dados para o navegador.
2.  **Redundância de Código e Dados:**
    *   Existem muitos textos repetidos nos arquivos de dados (por exemplo, os salmos).
    *   As páginas de orações na pasta `src/pages` são quase todas iguais, apenas mudando o conteúdo importado. Isso gera uma grande quantidade de arquivos desnecessários.

**Plano de Melhoria:**

Para resolver esses problemas, proponho uma refatoração em fases. A primeira e mais impactante seria **mudar a forma como os dados são carregados**.

**Fase 1: Otimização do Carregamento de Dados**

1.  **Dividir os Dados:** Em vez de arquivos grandes, vou quebrar os dados em arquivos JSON menores (por exemplo, um para cada mês ou dia).
2.  **Carregamento Dinâmico:** Os componentes passarão a carregar apenas os dados do dia necessário, em vez do ano inteiro.

Esta primeira fase já trará uma melhora de performance muito grande. As fases seguintes seriam para normalizar os dados (remover repetições) e refatorar as páginas de orações.

Você gostaria que eu iniciasse a **Fase 1** para otimizar o carregamento de dados?