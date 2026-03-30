const ARTICLES = [
  {
    id: "ampscript-personalizacao",
    title: "AMPscript: Personalização Dinâmica no SFMC",
    category: "Tutorial",
    categoryLabel: "Tutorial · SFMC",
    date: "Mar 2024",
    type: "PDF",
    description: "Guia completo sobre variáveis, condicionais e loops para e-mails inteligentes e altamente personalizados.",
    color: "linear-gradient(90deg,#22d3ee,#a78bfa)",
    content: `
      <h2>Introdução</h2>
      <p>O AMPscript é uma das linguagens mais importantes do Salesforce Marketing Cloud quando o objetivo é personalização dinâmica de conteúdo em e-mails, landing pages e jornadas.</p>
      <p>Com ele, é possível adaptar mensagens com base em atributos do contato, dados de Data Extensions e regras de negócio específicas.</p>

      <h2>Principais recursos</h2>
      <ul>
        <li>Criação e uso de variáveis com <code>SET</code></li>
        <li>Estruturas condicionais com <code>IF</code>, <code>ELSEIF</code> e <code>ELSE</code></li>
        <li>Buscas em Data Extensions com funções como <code>Lookup</code> e <code>LookupRows</code></li>
        <li>Manipulação de datas, strings e valores numéricos</li>
      </ul>

      <h2>Exemplo prático</h2>
      <pre><code>%%[
SET @nome = AttributeValue("FirstName")
IF EMPTY(@nome) THEN
  SET @nome = "cliente"
ENDIF
]%%

Olá, %%=v(@nome)=%%</code></pre>

      <h2>Boas práticas</h2>
      <p>Evite regras muito espalhadas pelo HTML. Sempre que possível, mantenha a lógica organizada, com variáveis bem nomeadas e validações claras.</p>
      <p>Também é importante tratar cenários de valores vazios para evitar experiências quebradas.</p>

      <h2>Conclusão</h2>
      <p>Quando bem usado, o AMPscript transforma campanhas comuns em comunicações altamente contextuais e relevantes.</p>
    `
  },
  {
    id: "journey-builder-praticas",
    title: "Journey Builder: 10 Práticas Essenciais",
    category: "Boas Práticas",
    categoryLabel: "Boas Práticas · Journey Builder",
    date: "Fev 2024",
    type: "Artigo",
    description: "Como estruturar jornadas robustas, escaláveis e fáceis de manter no longo prazo.",
    color: "linear-gradient(90deg,#a78bfa,#fb923c)",
    content: `
      <h2>1. Planeje a entrada</h2>
      <p>Defina com clareza como o contato entra na jornada e quais critérios garantem qualidade na audiência.</p>

      <h2>2. Evite complexidade desnecessária</h2>
      <p>Jornadas excessivamente longas e difíceis de manter tendem a gerar mais erro operacional e menos previsibilidade.</p>

      <h2>3. Pense em saída e reentrada</h2>
      <p>Uma jornada madura precisa considerar encerramento, reprocessamento, duplicidade e regras de elegibilidade.</p>

      <h2>4. Monitore continuamente</h2>
      <p>Não basta publicar. É fundamental acompanhar desempenho, falhas, quedas de volume e comportamento das audiências.</p>

      <h2>5. Documente a lógica</h2>
      <p>Documentação simples evita dependência excessiva de conhecimento tácito e facilita manutenção futura.</p>

      <h2>Conclusão</h2>
      <p>O Journey Builder funciona melhor quando é tratado como parte de uma arquitetura de comunicação, e não apenas como um fluxo visual.</p>
    `
  },
  {
    id: "sql-data-extensions",
    title: "SQL em Data Extensions: Do Básico ao Avançado",
    category: "Técnico",
    categoryLabel: "Técnico · SQL",
    date: "Jan 2024",
    type: "Tutorial",
    description: "Queries SQL no SFMC para segmentação e transformação de dados com alta performance.",
    color: "linear-gradient(90deg,#fb923c,#22d3ee)",
    content: `
      <h2>Fundamentos</h2>
      <p>No Salesforce Marketing Cloud, SQL é essencial para segmentar públicos, transformar dados e preparar bases para jornadas e disparos.</p>

      <h2>Usos mais comuns</h2>
      <ul>
        <li>Segmentação de audiências</li>
        <li>Deduplicação de contatos</li>
        <li>Construção de bases intermediárias</li>
        <li>Preparação de dados para automações</li>
      </ul>

      <h2>Pontos de atenção</h2>
      <p>Evite trazer colunas desnecessárias, revise joins com cuidado e pense sempre em performance quando estiver lidando com grandes volumes.</p>

      <h2>Boas práticas</h2>
      <p>Prefira queries objetivas, nomes claros para colunas e uma estratégia de staging quando houver múltiplas transformações.</p>

      <h2>Conclusão</h2>
      <p>Dominar SQL no Marketing Cloud aumenta muito sua capacidade de construir soluções escaláveis e orientadas por dados.</p>
    `
  }
];

function getArticleById(id) {
  return ARTICLES.find(article => article.id === id);
}