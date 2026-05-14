const ARTICLES = [
  {
    id: "ampscript-personalizacao",
    title: "AMPscript: Personalização Dinâmica no SFMC",
    category: "Tutorial",
    categoryLabel: "Tutorial · SFMC",
    date: "Mar 2026",
    type: "PDF",
    description: "Material aprofundado sobre AMPscript no Salesforce Marketing Cloud, cobrindo personalização avançada, lógica condicional, boas práticas, escalabilidade e referências para estudo.",
    color: "linear-gradient(90deg,#22d3ee,#a78bfa)",
    content: `
      <h2>Introdução</h2>
      <p>No universo de CRM e Marketing Cloud, falar de personalização já deixou de ser um diferencial para se tornar uma necessidade. Ainda assim, muitas empresas tratam personalização de forma superficial, limitando-se ao uso de nome no assunto ou no corpo da mensagem.</p>
      <p>A verdadeira personalização acontece quando o conteúdo se adapta ao contexto, ao comportamento e aos dados do cliente. É exatamente nesse ponto que o AMPscript se destaca dentro do Salesforce Marketing Cloud.</p>
      <p>O AMPscript é uma linguagem nativa da plataforma que permite construir comunicações dinâmicas, condicionais e orientadas a dados, sendo amplamente utilizada em e-mails, landing pages, SMS e jornadas automatizadas.</p>

      <h2>O que é AMPscript na prática</h2>
      <p>Enquanto as personalization strings apenas exibem valores disponíveis, o AMPscript vai além e permite aplicar lógica diretamente dentro da comunicação.</p>
      <p>Com ele, é possível:</p>
      <ul>
        <li>Criar e reutilizar variáveis com <code>SET</code></li>
        <li>Aplicar regras com <code>IF</code>, <code>ELSEIF</code> e <code>ELSE</code></li>
        <li>Buscar informações em Data Extensions com <code>Lookup</code>, <code>LookupRows</code> e funções relacionadas</li>
        <li>Tratar datas, textos e números</li>
        <li>Exibir conteúdos diferentes conforme atributos, perfil, comportamento ou jornada do contato</li>
      </ul>
      <p>Na prática, isso significa deixar de enviar mensagens genéricas para passar a construir experiências mais inteligentes, relevantes e orientadas a contexto.</p>

      <h2>Por que AMPscript é tão importante</h2>
      <p>Em um cenário de caixas de entrada lotadas e usuários cada vez mais seletivos, enviar a mesma mensagem para todos tende a gerar baixa relevância e menor conversão.</p>
      <p>O AMPscript se torna essencial porque permite que a comunicação reflita regras reais de negócio, segmentações avançadas e dados do cliente em tempo de execução. Dessa forma, a mensagem pode responder a perguntas como:</p>
      <ul>
        <li>Quem é esse contato?</li>
        <li>O que ele fez recentemente?</li>
        <li>Qual oferta faz sentido para esse perfil?</li>
        <li>Qual conteúdo deve ser exibido para esse estágio da jornada?</li>
      </ul>
      <p>Mais do que uma ferramenta técnica, o AMPscript é um recurso estratégico para transformar dados em comunicação relevante.</p>

      <h2>Níveis de personalização</h2>
      <h3>1. Personalização básica</h3>
      <p>É o nível mais comum e mais simples. Consiste em exibir um dado do contato, como nome ou empresa.</p>
      <pre><code>Olá %%FirstName%%</code></pre>
      <p>Apesar de útil, esse modelo ainda é limitado, porque não altera de fato a experiência com base em lógica ou contexto.</p>

      <h3>2. Personalização condicional</h3>
      <p>Nesse nível, a comunicação já passa a responder a condições específicas.</p>
      <pre><code>%%[
IF @Genero == "M" THEN
  SET @saudacao = "Bem-vindo"
ELSE
  SET @saudacao = "Bem-vinda"
ENDIF
]%%</code></pre>
      <p>Aqui, o conteúdo deixa de ser apenas estático e passa a refletir regras definidas no negócio.</p>

      <h3>3. Personalização contextual</h3>
      <p>Esse é o ponto em que a comunicação começa a se tornar realmente relevante. A mensagem é adaptada com base em comportamento, histórico, preferências ou jornada do cliente.</p>
      <pre><code>%%[
IF @UltimaCompra == "Yoga" THEN
  SET @oferta = "Confira novos acessórios de yoga"
ELSEIF @UltimaCompra == "Suplemento" THEN
  SET @oferta = "Novos suplementos para você"
ENDIF
]%%</code></pre>
      <p>Nesse cenário, o conteúdo já não é apenas personalizado por atributo, mas também por contexto.</p>

      <h3>4. Personalização em escala</h3>
      <p>No nível mais avançado, o AMPscript ajuda a sustentar comunicações modulares e inteligentes, conectadas a múltiplas fontes de dados e regras mais complexas. Aqui, a organização deixa de apenas criar campanhas e passa a estruturar sistemas de comunicação.</p>

      <h2>Principais recursos do AMPscript</h2>
      <ul>
        <li>Criação e uso de variáveis com <code>SET</code></li>
        <li>Estruturas condicionais com <code>IF</code>, <code>ELSEIF</code> e <code>ELSE</code></li>
        <li>Buscas em Data Extensions com funções como <code>Lookup</code>, <code>LookupRows</code> e <code>Row</code></li>
        <li>Manipulação de datas com funções específicas da linguagem</li>
        <li>Tratamento de strings, concatenação e validação de valores</li>
        <li>Criação de blocos lógicos reutilizáveis para diferentes cenários de personalização</li>
      </ul>

      <h2>Exemplo prático</h2>
      <p>Um exemplo simples e muito útil é tratar campos vazios para evitar experiências quebradas na comunicação.</p>
      <pre><code>%%[
SET @nome = AttributeValue("FirstName")
IF EMPTY(@nome) THEN
  SET @nome = "cliente"
ENDIF
]%%

Olá, %%=v(@nome)=%%</code></pre>
      <p>Nesse caso, se o campo <code>FirstName</code> estiver vazio, o conteúdo não ficará incompleto ou estranho para o destinatário. Esse tipo de cuidado melhora a apresentação da mensagem e evita falhas de personalização.</p>

      <h2>Casos de uso do AMPscript</h2>
      <h3>1. Carrinho abandonado</h3>
      <p>Um dos usos mais comuns é exibir produtos, preços ou recomendações de forma dinâmica com base no comportamento recente do cliente.</p>

      <h3>2. Ofertas segmentadas</h3>
      <p>O conteúdo pode variar conforme região, perfil do consumidor, preferências declaradas ou estágio de relacionamento.</p>

      <h3>3. Cross-sell e upsell</h3>
      <p>Com base em compras anteriores ou categorias de interesse, o AMPscript pode ajudar a direcionar ofertas mais aderentes ao histórico do cliente.</p>

      <h3>4. Comunicação por estágio da jornada</h3>
      <p>É possível adaptar o conteúdo para novos leads, clientes recorrentes, contatos inativos ou públicos com alto engajamento, tornando a comunicação mais contextual.</p>

      <h2>Boas práticas</h2>
      <p>Ao trabalhar com AMPscript, algumas práticas fazem muita diferença para a manutenção, performance e confiabilidade da comunicação:</p>
      <ul>
        <li>Evite regras excessivamente espalhadas pelo HTML</li>
        <li>Mantenha variáveis com nomes claros e organizados</li>
        <li>Centralize a lógica sempre que possível</li>
        <li>Trate cenários de campos vazios com <code>EMPTY()</code></li>
        <li>Evite excesso de lookups desnecessários</li>
        <li>Teste diferentes cenários antes da publicação</li>
      </ul>

      <h2>Erros comuns</h2>
      <h3>Excesso de consultas</h3>
      <p>O uso excessivo de funções de busca em Data Extensions pode impactar a performance e dificultar a manutenção do código. Sempre que possível, centralize e organize os dados para reduzir chamadas desnecessárias.</p>

      <h3>Falta de fallback</h3>
      <p>Não considerar campos vazios ou nulos pode gerar mensagens quebradas, saudações estranhas ou blocos incompletos.</p>

      <h3>Código difícil de manter</h3>
      <p>Scripts extensos, mal nomeados ou misturados ao HTML tornam a manutenção mais complexa. Um código que só uma pessoa entende representa risco para o projeto.</p>

      <h3>Usar AMPscript para tudo</h3>
      <p>Nem toda necessidade exige AMPscript. Em alguns casos, recursos nativos do Content Builder, Dynamic Content ou até SSJS podem ser mais adequados.</p>

      <h2>AMPscript e SSJS</h2>
      <p>Embora o AMPscript seja excelente para personalização e lógica de comunicação, ele possui limites. Quando o cenário exige consumo de APIs, manipulação avançada de JSON ou integrações mais complexas, o SSJS pode complementar muito bem a solução.</p>
      <p>Profissionais mais experientes costumam combinar essas abordagens de forma estratégica, usando AMPscript onde ele é mais eficiente e recorrendo ao SSJS quando a complexidade exige.</p>

      <h2>Visão estratégica</h2>
      <p>O grande valor do AMPscript não está apenas na sintaxe, mas na sua capacidade de transformar dados em experiências. Em vez de enxergá-lo apenas como um recurso técnico para personalizar e-mails, vale entendê-lo como um mecanismo que ajuda a construir comunicações orientadas por contexto, negócio e comportamento.</p>
      <p>Quando bem implementado, o AMPscript contribui diretamente para melhorar relevância, experiência do cliente e resultados das campanhas.</p>

      <h2>Conclusão</h2>
      <p>O AMPscript é um dos principais recursos do Salesforce Marketing Cloud para quem deseja evoluir da simples substituição de variáveis para uma comunicação realmente inteligente.</p>
      <p>Quando usado com organização, boas práticas e visão estratégica, ele transforma campanhas comuns em experiências altamente contextuais, relevantes e escaláveis.</p>
      <p>Mais do que personalizar mensagens, o AMPscript permite criar decisões dentro da comunicação. E essa é uma diferença importante para quem deseja atuar em um nível mais avançado dentro do ecossistema Salesforce Marketing Cloud.</p>

      <h2>Bibliografia</h2>
      <ul>
        <li>Salesforce. <em>AMPscript for Non-Developers</em>. Trailhead.</li>
        <li>Salesforce. <em>AMPscript Language Reference</em>. Developer Documentation.</li>
        <li>Salesforce. <em>Marketing Cloud Overview</em>.</li>
        <li>NevoLearn. <em>Using AMPscript in Emails</em>.</li>
        <li>Digital Marketing on Cloud. <em>Advanced AMPscript Techniques for Personalization in Salesforce Marketing Cloud</em>.</li>
        <li>Trailblazer Community. Discussões e conteúdos sobre AMPscript e personalização no Salesforce Marketing Cloud.</li>
      </ul>
    `
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
      <p>Neste artigo, compartilho 10 práticas essenciais para estruturar jornadas mais robustas, escaláveis e fáceis de evoluir no longo prazo.</p>

      <h2>1. Planeje a entrada da jornada com clareza</h2>
      <p>Antes de construir qualquer jornada, defina exatamente quem entra, por qual motivo entra e em qual momento entra. Esse ponto parece básico, mas é um dos mais críticos.</p>
      <p>Uma entrada mal planejada compromete toda a jornada, pois pode trazer contatos fora do perfil esperado, causar duplicidade ou ativar comunicações indevidas.</p>
      <p>Algumas perguntas importantes:</p>
      <ul>
        <li>Qual evento dispara a entrada do contato?</li>
        <li>Essa entrada vem de Data Extension, API, Automation ou comportamento?</li>
        <li>Quais critérios mínimos garantem que esse contato realmente deve entrar?</li>
        <li>Existe risco de o mesmo contato entrar múltiplas vezes sem necessidade?</li>
      </ul>
      <p>Quanto mais claro estiver o critério de entrada, mais previsível será a jornada.</p>

      <h2>2. Garanta qualidade nos dados de entrada</h2>
      <p>Uma jornada nunca será melhor que os dados que a alimentam. Por isso, antes de pensar no desenho do fluxo, valide se a base de entrada possui os campos necessários, dados consistentes e regras bem definidas.</p>
      <ul>
        <li>Validar chaves como SubscriberKey e ContactKey</li>
        <li>Evitar campos críticos nulos</li>
        <li>Padronizar status, datas e valores usados em Decision Splits</li>
        <li>Preparar a base em uma query antes da jornada, quando necessário</li>
      </ul>

      <h2>3. Evite complexidade desnecessária</h2>
      <p>Nem toda jornada precisa ser grande para ser eficiente. Muitas vezes, fluxos excessivamente complexos surgem quando tentamos resolver múltiplos cenários dentro de uma mesma estrutura.</p>
      <ul>
        <li>Fluxos mais claros e objetivos</li>
        <li>Separação de cenários muito diferentes em jornadas distintas</li>
        <li>Decisões simples e fáceis de rastrear</li>
        <li>Menos dependência de caminhos excessivamente ramificados</li>
      </ul>

      <h2>4. Pense na jornada como parte de uma arquitetura</h2>
      <p>Uma jornada não deve ser vista como um fluxo isolado. Ela faz parte de uma arquitetura maior que envolve segmentação, governança de dados, automações, integrações, priorização de canais e estratégia de comunicação.</p>
      <ul>
        <li>Que outras jornadas impactam esse mesmo público?</li>
        <li>Existe prioridade entre comunicações?</li>
        <li>Há risco de excesso de contatos em canais diferentes?</li>
        <li>Essa jornada faz sentido dentro da estratégia do funil?</li>
      </ul>

      <h2>5. Estruture saídas e critérios de reentrada</h2>
      <p>Uma jornada madura não pensa apenas em entrada. Ela também precisa considerar claramente quando o contato deve sair, quando pode reentrar e quais regras evitam repetições desnecessárias.</p>
      <ul>
        <li>Quando o contato conclui a jornada com sucesso?</li>
        <li>Quando ele deve ser removido por perda de elegibilidade?</li>
        <li>É permitido reentrar? Em qual intervalo?</li>
        <li>Qual campo ou regra controla essa reentrada?</li>
      </ul>

      <h2>6. Use Decision Splits com responsabilidade</h2>
      <p>Decision Splits são extremamente úteis, mas precisam ser usados com critério. Quando há muitas condições, muitos caminhos e pouca documentação, a jornada rapidamente se torna difícil de manter.</p>
      <p>Uma boa prática é simplificar a lógica previamente com SQL ou com campos de apoio na Data Extension, evitando regras muito complexas diretamente no Journey Builder.</p>

      <h2>7. Cuide bem dos tempos de espera</h2>
      <p>Wait Activities não servem apenas para "dar um intervalo". Elas influenciam diretamente a experiência do cliente e o timing da comunicação.</p>
      <ul>
        <li>O comportamento esperado do usuário</li>
        <li>O canal utilizado</li>
        <li>O contexto da oferta ou mensagem</li>
        <li>A janela real de oportunidade da comunicação</li>
      </ul>

      <h2>8. Monitore continuamente</h2>
      <p>Publicar uma jornada não encerra o trabalho. Na prática, é a partir da ativação que começa a etapa de monitoramento real.</p>
      <ul>
        <li>Queda inesperada no volume de entrada</li>
        <li>Aumento de falhas em activities</li>
        <li>Caminhos que recebem contatos demais ou de menos</li>
        <li>Tempo excessivo de permanência em etapas específicas</li>
      </ul>

      <h2>9. Documente a lógica da jornada</h2>
      <p>Documentação não é burocracia: é uma forma de proteger a operação. O ideal é registrar:</p>
      <ul>
        <li>Objetivo da jornada</li>
        <li>Critérios de entrada</li>
        <li>Regras de saída e reentrada</li>
        <li>Lógica dos principais splits</li>
        <li>Dependências de automações, queries ou integrações</li>
        <li>Responsáveis pela operação</li>
      </ul>

      <h2>10. Planeje manutenção e evolução</h2>
      <p>Uma jornada eficiente hoje pode não continuar eficiente daqui a alguns meses. Construir com visão de longo prazo significa deixar o fluxo preparado para adaptações, sem comprometer a estabilidade da operação.</p>

      <h2>Erros comuns em Journey Builder</h2>
      <ul>
        <li>Colocar contatos na jornada sem validação suficiente</li>
        <li>Permitir duplicidade sem perceber</li>
        <li>Usar splits complexos demais dentro do próprio fluxo</li>
        <li>Não documentar dependências externas</li>
        <li>Não revisar o impacto de outras jornadas no mesmo público</li>
        <li>Publicar e não acompanhar performance depois</li>
      </ul>

      <h2>Conclusão</h2>
      <p>O Journey Builder funciona melhor quando é tratado como parte de uma arquitetura de comunicação e não apenas como um fluxo visual. Jornadas bem planejadas combinam clareza, governança, qualidade de dados e visão de longo prazo.</p>
      <p>Quando uma jornada nasce com estratégia, documentação e monitoramento, ela deixa de ser apenas operacional e passa a gerar valor real para a empresa.</p>
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
