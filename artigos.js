const ARTICLES = [
  {
    id: "ampscript-personalizacao",
    title: "AMPscript: Personalização Dinâmica no SFMC",
    category: "Tutorial",
    categoryLabel: "Tutorial · SFMC",
    date: "Mai 2026",
    type: "Tutorial",
    description: "Guia completo de AMPscript em português: variáveis, condicionais, Lookup, LookupRows, funções de texto e data, style guide e exemplos práticos do básico ao avançado.",
    color: "linear-gradient(90deg,#22d3ee,#a78bfa)",
    externalUrl: "ampscript-mc.html"
  },
  {
    id: "adobe-journey-optimizer",
    title: "Adobe Journey Optimizer: Guia Prático",
    category: "Técnico",
    categoryLabel: "Técnico · AJO · AEP",
    date: "Mai 2026",
    type: "Tutorial",
    description: "Arquitetura sobre AEP, Journeys, Campaigns, personalização com Handlebars, canais suportados, integração com Salesforce Marketing Cloud e coexistência SFMC + AJO.",
    color: "linear-gradient(90deg,#eb1000,#fa6400)",
    externalUrl: "ajo-mc.html"
  },
  {
    id: "hubspot-marketing-hub",
    title: "HubSpot Marketing Hub: Guia Prático",
    category: "Tutorial",
    categoryLabel: "Tutorial · HubSpot",
    date: "Mai 2026",
    type: "Tutorial",
    description: "Workflows, Listas, Personalization Tokens, Smart Content e Lead Scoring — guia completo de HubSpot Marketing Hub em português com exemplos práticos de automação.",
    color: "linear-gradient(90deg,#ff7a59,#f5c26b)",
    externalUrl: "hubspot-mc.html"
  },
  {
    id: "journey-builder-praticas",
    title: "Journey Builder: 10 Práticas Essenciais",
    category: "Boas Práticas",
    categoryLabel: "Boas Práticas · Journey Builder",
    date: "Mar 2026",
    type: "Artigo",
    description: "Como estruturar jornadas robustas, escaláveis e fáceis de manter no longo prazo dentro do Salesforce Marketing Cloud.",
    color: "linear-gradient(90deg,#a78bfa,#fb923c)",
    content: `
      <h2>Introdução</h2>
      <p>O Journey Builder é uma das ferramentas mais estratégicas do Salesforce Marketing Cloud, pois permite orquestrar comunicações automatizadas com base em comportamento, dados e regras de negócio. No entanto, criar jornadas eficientes vai muito além de arrastar atividades na tela.</p>
      <p>Uma jornada bem construída precisa ser clara, sustentável, monitorável e alinhada aos objetivos da operação. Quando isso não acontece, o resultado costuma ser fluxo difícil de manter, falhas de entrada, duplicidade de contatos e baixa previsibilidade.</p>

      <h2>1. Planeje a entrada da jornada com clareza</h2>
      <p>Antes de construir qualquer jornada, defina exatamente quem entra, por qual motivo entra e em qual momento entra. Uma entrada mal planejada compromete toda a jornada.</p>
      <ul>
        <li>Qual evento dispara a entrada do contato?</li>
        <li>Essa entrada vem de Data Extension, API, Automation ou comportamento?</li>
        <li>Quais critérios mínimos garantem que esse contato realmente deve entrar?</li>
        <li>Existe risco de o mesmo contato entrar múltiplas vezes sem necessidade?</li>
      </ul>

      <h2>2. Garanta qualidade nos dados de entrada</h2>
      <p>Uma jornada nunca será melhor que os dados que a alimentam.</p>
      <ul>
        <li>Validar chaves como SubscriberKey e ContactKey</li>
        <li>Evitar campos críticos nulos</li>
        <li>Padronizar status, datas e valores usados em Decision Splits</li>
        <li>Preparar a base em uma query antes da jornada, quando necessário</li>
      </ul>

      <h2>3. Evite complexidade desnecessária</h2>
      <p>Sempre que possível, prefira fluxos mais claros e objetivos, separando cenários muito diferentes em jornadas distintas.</p>

      <h2>4. Pense na jornada como parte de uma arquitetura</h2>
      <p>Uma jornada não deve ser vista como um fluxo isolado — ela faz parte de uma arquitetura maior que envolve segmentação, automações, integrações e estratégia de comunicação.</p>

      <h2>5. Estruture saídas e critérios de reentrada</h2>
      <p>Defina claramente quando o contato deve sair, quando pode reentrar e quais regras evitam repetições desnecessárias.</p>

      <h2>6. Use Decision Splits com responsabilidade</h2>
      <p>Simplifique a lógica previamente com SQL ou com campos de apoio na Data Extension, evitando regras muito complexas diretamente no Journey Builder.</p>

      <h2>7. Cuide bem dos tempos de espera</h2>
      <p>Wait Activities influenciam diretamente a experiência do cliente. O tempo deve fazer sentido para a jornada do usuário e para o objetivo de negócio.</p>

      <h2>8. Monitore continuamente</h2>
      <p>Acompanhe entradas, volumes, erros e comportamento por caminho após a publicação. Queda no volume, aumento de falhas ou permanência excessiva em etapas são sinais de alerta.</p>

      <h2>9. Documente a lógica da jornada</h2>
      <p>Registre objetivo, critérios de entrada e saída, regras de reentrada, lógica dos principais splits e dependências de automações ou integrações.</p>

      <h2>10. Planeje manutenção e evolução</h2>
      <p>Construir com visão de longo prazo significa deixar o fluxo preparado para adaptações sem comprometer a estabilidade da operação.</p>

      <h2>Conclusão</h2>
      <p>Jornadas bem planejadas combinam clareza, governança, qualidade de dados e visão de longo prazo. Quando nascem com estratégia, documentação e monitoramento, deixam de ser apenas operacionais e passam a gerar valor real para a empresa.</p>
    `
  },
  {
    id: "sql-data-extensions",
    title: "SQL em Data Extensions: Noções Básicas",
    category: "Técnico",
    categoryLabel: "Técnico · SQL",
    date: "Mar 2026",
    type: "Tutorial",
    description: "Queries SQL no SFMC para segmentação, transformação e preparação de dados com mais performance e governança.",
    color: "linear-gradient(90deg,#fb923c,#22d3ee)",
    externalUrl: "sql-mc.html"
  }
];

function getArticleById(id) {
  return ARTICLES.find(article => article.id === id);
}
