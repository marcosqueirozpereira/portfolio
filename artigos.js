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
    <p>É importante verificar, por exemplo, se os identificadores estão corretos, se há opt-in válido, se os atributos usados em decisões estão preenchidos e se não existem registros duplicados.</p>
    <p>Boas práticas incluem:</p>
    <ul>
      <li>Validar chaves como SubscriberKey e ContactKey</li>
      <li>Evitar campos críticos nulos</li>
      <li>Padronizar status, datas e valores usados em Decision Splits</li>
      <li>Preparar a base em uma query antes da jornada, quando necessário</li>
    </ul>

    <h2>3. Evite complexidade desnecessária</h2>
    <p>Nem toda jornada precisa ser grande para ser eficiente. Muitas vezes, fluxos excessivamente complexos surgem quando tentamos resolver múltiplos cenários dentro de uma mesma estrutura.</p>
    <p>O problema é que jornadas muito longas e difíceis de entender tendem a aumentar o risco de erro operacional, dificultar testes e tornar a manutenção cansativa.</p>
    <p>Sempre que possível, prefira:</p>
    <ul>
      <li>Fluxos mais claros e objetivos</li>
      <li>Separação de cenários muito diferentes em jornadas distintas</li>
      <li>Decisões simples e fáceis de rastrear</li>
      <li>Menos dependência de caminhos excessivamente ramificados</li>
    </ul>
    <p>Uma jornada simples costuma ser mais segura e mais escalável.</p>

    <h2>4. Pense na jornada como parte de uma arquitetura</h2>
    <p>Uma jornada não deve ser vista como um fluxo isolado. Ela faz parte de uma arquitetura maior que envolve segmentação, governança de dados, automações, integrações, priorização de canais e estratégia de comunicação.</p>
    <p>Quando a jornada é tratada de forma isolada, surgem problemas como conflitos com outros disparos, sobreposição de mensagens e inconsistência na experiência do cliente.</p>
    <p>Por isso, vale sempre avaliar:</p>
    <ul>
      <li>Que outras jornadas impactam esse mesmo público?</li>
      <li>Existe prioridade entre comunicações?</li>
      <li>Há risco de excesso de contatos em canais diferentes?</li>
      <li>Essa jornada faz sentido dentro da estratégia do funil?</li>
    </ul>

    <h2>5. Estruture saídas e critérios de reentrada</h2>
    <p>Uma jornada madura não pensa apenas em entrada. Ela também precisa considerar claramente quando o contato deve sair, quando pode reentrar e quais regras evitam repetições desnecessárias.</p>
    <p>Esse é um dos pontos mais negligenciados em muitos projetos. Sem regra de saída e reentrada, a jornada pode gerar experiências repetitivas, duplicadas ou desconectadas do momento do cliente.</p>
    <p>Alguns pontos de atenção:</p>
    <ul>
      <li>Quando o contato conclui a jornada com sucesso?</li>
      <li>Quando ele deve ser removido por perda de elegibilidade?</li>
      <li>É permitido reentrar? Em qual intervalo?</li>
      <li>Qual campo ou regra controla essa reentrada?</li>
    </ul>

    <h2>6. Use Decision Splits com responsabilidade</h2>
    <p>Decision Splits são extremamente úteis, mas precisam ser usados com critério. Quando há muitas condições, muitos caminhos e pouca documentação, a jornada rapidamente se torna difícil de manter.</p>
    <p>Antes de criar um novo split, pergunte se aquela decisão realmente precisa existir na jornada ou se deveria ser resolvida antes, na preparação da base.</p>
    <p>Uma boa prática é simplificar a lógica previamente com SQL ou com campos de apoio na Data Extension, evitando regras muito complexas diretamente no Journey Builder.</p>

    <h2>7. Cuide bem dos tempos de espera</h2>
    <p>Wait Activities não servem apenas para “dar um intervalo”. Elas influenciam diretamente a experiência do cliente e o timing da comunicação.</p>
    <p>Esperas muito curtas podem gerar pressão excessiva. Esperas muito longas podem fazer a mensagem perder contexto. O ideal é que o tempo faça sentido para a jornada do usuário e para o objetivo de negócio.</p>
    <p>Ao definir esperas, considere:</p>
    <ul>
      <li>O comportamento esperado do usuário</li>
      <li>O canal utilizado</li>
      <li>O contexto da oferta ou mensagem</li>
      <li>A janela real de oportunidade da comunicação</li>
    </ul>

    <h2>8. Monitore continuamente</h2>
    <p>Publicar uma jornada não encerra o trabalho. Na prática, é a partir da ativação que começa a etapa de monitoramento real.</p>
    <p>É essencial acompanhar entradas, volumes, erros, tempos de permanência, taxa de saída, comportamento por caminho e impacto dos envios. Esse acompanhamento ajuda a identificar gargalos e ajustar a operação com mais rapidez.</p>
    <p>Alguns sinais de alerta:</p>
    <ul>
      <li>Queda inesperada no volume de entrada</li>
      <li>Aumento de falhas em activities</li>
      <li>Caminhos que recebem contatos demais ou de menos</li>
      <li>Tempo excessivo de permanência em etapas específicas</li>
    </ul>

    <h2>9. Documente a lógica da jornada</h2>
    <p>Documentação não é burocracia: é uma forma de proteger a operação. Sem documentação, a jornada fica dependente da memória de quem criou o fluxo, o que dificulta manutenção, passagem de contexto e evolução do projeto.</p>
    <p>Mesmo uma documentação simples já ajuda muito. O ideal é registrar:</p>
    <ul>
      <li>Objetivo da jornada</li>
      <li>Critérios de entrada</li>
      <li>Regras de saída e reentrada</li>
      <li>Lógica dos principais splits</li>
      <li>Dependências de automações, queries ou integrações</li>
      <li>Responsáveis pela operação</li>
    </ul>

    <h2>10. Planeje manutenção e evolução</h2>
    <p>Uma jornada eficiente hoje pode não continuar eficiente daqui a alguns meses. Por isso, é importante já criar a estrutura pensando em manutenção e evolução.</p>
    <p>Novos canais, novas regras de segmentação, mudanças de negócio e alterações em dados são comuns. Se a jornada nascer rígida demais, cada ajuste futuro será mais caro e arriscado.</p>
    <p>Construir com visão de longo prazo significa deixar o fluxo preparado para adaptações, sem comprometer a estabilidade da operação.</p>

    <h2>Erros comuns em Journey Builder</h2>
    <p>Além das boas práticas, vale ficar atento a alguns erros bastante recorrentes:</p>
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
    <p>Mais do que criar automações, o objetivo é construir experiências coerentes, sustentáveis e alinhadas às necessidades do negócio e do cliente.</p>
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
  content: `
    <h2>Introdução</h2>
    <p>No Salesforce Marketing Cloud, SQL é uma das ferramentas mais importantes para transformar dados em ação. É por meio dele que construímos segmentações, criamos bases intermediárias, tratamos duplicidade, preparamos audiências e alimentamos jornadas e campanhas com mais inteligência.</p>
    <p>Mais do que saber escrever uma query, é importante entender como estruturar consultas com clareza, performance e segurança operacional. Uma query mal planejada pode gerar lentidão, duplicidade de contatos, erros em jornadas e impactos diretos na comunicação.</p>
    <p>Neste artigo, reuni práticas essenciais para usar SQL em Data Extensions de forma mais estratégica, desde os fundamentos até cuidados mais avançados no dia a dia.</p>

    <h2>1. Entenda o papel do SQL no Marketing Cloud</h2>
    <p>No Marketing Cloud, SQL não serve apenas para consultar dados. Ele é usado como parte da operação de marketing para montar públicos, enriquecer registros, cruzar fontes, preparar dados para automações e dar suporte a regras de negócio.</p>
    <p>Na prática, o SQL costuma ser usado para:</p>
    <ul>
      <li>Segmentar audiências para campanhas</li>
      <li>Deduplicar registros</li>
      <li>Criar bases intermediárias para jornadas</li>
      <li>Unificar informações de múltiplas tabelas</li>
      <li>Filtrar contatos com base em regras de elegibilidade</li>
      <li>Preparar relatórios e estruturas de apoio</li>
    </ul>
    <p>Ou seja: dominar SQL em Marketing Cloud significa aumentar sua capacidade de construir soluções realmente orientadas por dados.</p>

    <h2>2. Conheça bem suas Data Extensions</h2>
    <p>Antes de escrever qualquer query, é fundamental conhecer a estrutura das Data Extensions envolvidas. Saber quais campos existem, quais são obrigatórios, quais funcionam como chave e como os dados se relacionam evita boa parte dos erros mais comuns.</p>
    <p>Alguns pontos que merecem atenção:</p>
    <ul>
      <li>Nome e tipo de cada campo</li>
      <li>Quais campos podem vir nulos</li>
      <li>Quais campos representam identificadores únicos</li>
      <li>Como diferentes Data Extensions se conectam</li>
      <li>Qual é a chave primária da DE de destino</li>
    </ul>
    <p>Muitas falhas em automações acontecem não porque a lógica da query está errada, mas porque a estrutura da DE de destino não foi considerada corretamente.</p>

    <h2>3. Comece com queries simples e claras</h2>
    <p>Um erro comum é querer resolver tudo em uma única query gigantesca. Embora isso pareça mais “eficiente”, na prática costuma dificultar leitura, manutenção e troubleshooting.</p>
    <p>Sempre que possível, prefira queries mais claras, organizadas e fáceis de revisar. Em fluxos mais complexos, muitas vezes vale mais a pena dividir o processo em etapas usando Data Extensions intermediárias.</p>
    <p>Uma boa query deve ser:</p>
    <ul>
      <li>Fácil de entender</li>
      <li>Fácil de validar</li>
      <li>Fácil de ajustar no futuro</li>
      <li>Compatível com o objetivo da automação</li>
    </ul>

    <h2>4. Selecione apenas o que realmente precisa</h2>
    <p>Trazer colunas demais impacta legibilidade e pode prejudicar performance, especialmente em bases muito grandes. Uma boa prática é retornar apenas os campos que serão realmente usados no próximo passo da operação.</p>
    <p>Isso ajuda a manter a query objetiva e reduz o risco de levar informações desnecessárias para a DE de destino.</p>
    <p>Em vez de pensar “vou trazer tudo porque pode ser útil depois”, prefira pensar “quais campos são indispensáveis para o objetivo desta etapa?”.</p>

    <h2>5. Use filtros com intenção clara</h2>
    <p>O <code>WHERE</code> é um dos pontos mais importantes da query, porque define quem entra e quem fica de fora. Um filtro mal feito pode incluir pessoas erradas, excluir contatos válidos ou gerar uma base completamente diferente da esperada.</p>
    <p>Ao montar filtros, é importante validar:</p>
    <ul>
      <li>Se os status usados realmente existem na base</li>
      <li>Se campos nulos foram tratados</li>
      <li>Se as datas estão sendo avaliadas corretamente</li>
      <li>Se a regra está coerente com a necessidade do negócio</li>
    </ul>
    <p>Filtros bem definidos tornam a segmentação muito mais confiável.</p>

    <h2>6. Entenda bem seus JOINs</h2>
    <p>Grande parte do poder do SQL está nos joins. É por meio deles que cruzamos informações de diferentes fontes para gerar contexto e enriquecer os dados.</p>
    <p>Mas joins também estão entre os principais causadores de erro, duplicidade e perda de performance. Por isso, é importante saber exatamente por qual chave duas tabelas estão sendo conectadas e qual é a cardinalidade dessa relação.</p>
    <p>Perguntas essenciais antes de fazer um join:</p>
    <ul>
      <li>Esse campo realmente relaciona as duas tabelas?</li>
      <li>É uma relação de 1 para 1, 1 para muitos ou muitos para muitos?</li>
      <li>Esse join pode multiplicar linhas sem eu perceber?</li>
      <li>Preciso mesmo de um <code>LEFT JOIN</code> ou um <code>INNER JOIN</code> resolve?</li>
    </ul>
    <p>Entender a relação entre os dados evita surpresas no resultado final.</p>

    <h2>7. Trate duplicidade com estratégia</h2>
    <p>Uma das necessidades mais frequentes em Marketing Cloud é deduplicar registros. Isso acontece quando há múltiplas captações, atualizações em momentos diferentes ou várias linhas para o mesmo contato.</p>
    <p>Deduplicar não é apenas “remover repetidos”. É decidir qual registro deve ser mantido com base em uma lógica clara, como data mais recente, prioridade de origem ou status específico.</p>
    <p>Em cenários mais avançados, é comum usar regras como:</p>
    <ul>
      <li>Manter o registro mais recente</li>
      <li>Priorizar determinada origem de captação</li>
      <li>Conservar apenas contatos com campos críticos preenchidos</li>
      <li>Evitar duplicidade com <code>NOT EXISTS</code> ou estruturas de apoio</li>
    </ul>
    <p>Sem uma estratégia de deduplicação, a automação pode se tornar imprevisível.</p>

    <h2>8. Pense em performance desde o início</h2>
    <p>Em bases pequenas, quase toda query parece funcionar bem. O problema aparece quando o volume cresce. Por isso, é importante escrever queries já pensando em performance, principalmente em ambientes com muitas automações e alto volume de dados.</p>
    <p>Alguns cuidados importantes:</p>
    <ul>
      <li>Evitar joins desnecessários</li>
      <li>Reduzir o número de colunas retornadas</li>
      <li>Filtrar antes de cruzar tabelas muito grandes, quando possível</li>
      <li>Evitar lógica excessivamente pesada em uma única etapa</li>
      <li>Usar bases intermediárias para simplificar transformações complexas</li>
    </ul>
    <p>Performance não é apenas velocidade: é estabilidade operacional.</p>

    <h2>9. Use Data Extensions intermediárias quando necessário</h2>
    <p>Muitas vezes, a melhor forma de resolver uma lógica complexa não é em uma query única, mas em etapas. Data Extensions intermediárias ajudam a separar a transformação em partes menores e mais controláveis.</p>
    <p>Essa abordagem facilita testes, permite inspeção de resultados e torna a manutenção mais segura.</p>
    <p>É especialmente útil quando você precisa:</p>
    <ul>
      <li>Consolidar dados antes do enriquecimento final</li>
      <li>Separar etapas de deduplicação</li>
      <li>Tratar regras complexas de entrada em jornadas</li>
      <li>Reduzir o peso de consultas muito grandes</li>
    </ul>

    <h2>10. Valide a DE de destino antes de executar</h2>
    <p>Não basta a query estar correta. A Data Extension de destino também precisa estar compatível com o resultado. Isso inclui nome dos campos, tipos, tamanho, nulabilidade e chaves primárias.</p>
    <p>Se a estrutura da DE não estiver alinhada com a query, podem acontecer erros como:</p>
    <ul>
      <li>Falha por tipo incompatível</li>
      <li>Tentativa de inserir valor nulo em campo obrigatório</li>
      <li>Violação de chave primária</li>
      <li>Truncamento de texto</li>
    </ul>
    <p>Por isso, revisar a DE de destino faz parte da qualidade da query.</p>

    <h2>11. Documente a lógica da consulta</h2>
    <p>Assim como em jornadas, documentação também é importante em SQL. Não precisa ser algo complexo: uma descrição simples já ajuda a entender o objetivo da query, a origem dos dados e a lógica principal usada.</p>
    <p>Isso facilita manutenção futura, passagem de contexto e troubleshooting, especialmente em ambientes com muitas automações.</p>

    <h2>Erros comuns em SQL no Marketing Cloud</h2>
    <p>Alguns problemas aparecem com frequência em projetos e operações:</p>
    <ul>
      <li>Trazer colunas demais sem necessidade</li>
      <li>Fazer join por campo inadequado</li>
      <li>Ignorar duplicidade na origem</li>
      <li>Não tratar valores nulos</li>
      <li>Montar uma query difícil demais de manter</li>
      <li>Desconsiderar a estrutura da DE de destino</li>
      <li>Executar sem validar amostras do resultado</li>
    </ul>
    <p>Evitar esses pontos já melhora muito a confiabilidade da operação.</p>

    <h2>Conclusão</h2>
    <p>SQL em Data Extensions vai muito além de escrever comandos. Trata-se de construir bases confiáveis, preparar dados com inteligência e sustentar automações com qualidade.</p>
    <p>Quando combinamos clareza, performance, validação e boa arquitetura, o SQL deixa de ser apenas uma ferramenta técnica e passa a ser parte central da estratégia de comunicação orientada por dados.</p>
    <p>Dominar esse processo significa ganhar mais controle sobre a operação, mais previsibilidade nos resultados e mais capacidade de escalar campanhas com segurança.</p>
  `
}
 {
  <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SQL no Marketing Cloud | MC · DEV</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Sora:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #0a0e1a;
      --bg2: #111827;
      --bg3: #1a2235;
      --accent: #00d4ff;
      --accent2: #7c3aed;
      --accent3: #10b981;
      --text: #e2e8f0;
      --text-muted: #64748b;
      --text-dim: #94a3b8;
      --border: rgba(0,212,255,0.15);
      --code-bg: #0d1117;
      --tag-bg: rgba(0,212,255,0.08);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Sora', sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.7;
      overflow-x: hidden;
    }

    /* NAV */
    nav {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(10,14,26,0.92);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
    }
    .nav-brand {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: var(--accent);
      text-decoration: none;
      font-size: 1rem;
      letter-spacing: 0.05em;
    }
    .nav-links {
      display: flex;
      gap: 1.5rem;
      list-style: none;
    }
    .nav-links a {
      color: var(--text-dim);
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 400;
      transition: color 0.2s;
    }
    .nav-links a:hover, .nav-links a.active { color: var(--accent); }

    /* HERO */
    .hero {
      padding: 5rem 2rem 3rem;
      max-width: 900px;
      margin: 0 auto;
    }
    .breadcrumb {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
    }
    .breadcrumb a { color: var(--accent); text-decoration: none; }
    .breadcrumb span { margin: 0 0.4rem; }

    .hero-tag {
      display: inline-block;
      background: var(--tag-bg);
      border: 1px solid var(--border);
      color: var(--accent);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      padding: 0.3rem 0.8rem;
      border-radius: 2px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 1.2rem;
    }

    h1 {
      font-size: clamp(2rem, 5vw, 3.2rem);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: 1.2rem;
    }
    h1 em {
      font-style: normal;
      color: var(--accent);
    }

    .hero-desc {
      font-size: 1.05rem;
      color: var(--text-dim);
      max-width: 680px;
      margin-bottom: 2rem;
      font-weight: 300;
    }

    .hero-meta {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      font-size: 0.8rem;
      color: var(--text-muted);
      font-family: 'JetBrains Mono', monospace;
    }
    .hero-meta span { display: flex; align-items: center; gap: 0.4rem; }

    /* LAYOUT */
    .page-layout {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem 6rem;
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 3rem;
      align-items: start;
    }

    /* SIDEBAR */
    .sidebar {
      position: sticky;
      top: 80px;
    }
    .sidebar-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 0.8rem;
    }
    .sidebar-nav {
      list-style: none;
      border-left: 1px solid var(--border);
    }
    .sidebar-nav li a {
      display: block;
      padding: 0.4rem 0 0.4rem 1rem;
      font-size: 0.82rem;
      color: var(--text-dim);
      text-decoration: none;
      border-left: 2px solid transparent;
      margin-left: -1px;
      transition: all 0.2s;
      line-height: 1.4;
    }
    .sidebar-nav li a:hover {
      color: var(--accent);
      border-left-color: var(--accent);
    }
    .sidebar-nav .sub a {
      padding-left: 1.8rem;
      font-size: 0.77rem;
      color: var(--text-muted);
    }
    .sidebar-nav .sub a:hover { color: var(--accent); }

    /* CONTENT */
    .content { min-width: 0; }

    /* SECTION TITLES */
    .content h2 {
      font-size: 1.6rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      color: var(--text);
      margin: 3rem 0 1rem;
      padding-top: 1rem;
    }
    .content h2:first-child { margin-top: 0; }
    .content h3 {
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--accent);
      margin: 2rem 0 0.8rem;
      font-family: 'JetBrains Mono', monospace;
    }
    .content p {
      color: var(--text-dim);
      margin-bottom: 1rem;
      font-size: 0.95rem;
      font-weight: 300;
    }
    .content strong { color: var(--text); font-weight: 600; }

    /* DIVIDER */
    .section-divider {
      border: none;
      border-top: 1px solid var(--border);
      margin: 2.5rem 0;
    }

    /* CALLOUT BOX */
    .callout {
      background: var(--bg3);
      border-left: 3px solid var(--accent);
      border-radius: 0 6px 6px 0;
      padding: 1.2rem 1.5rem;
      margin: 1.5rem 0;
    }
    .callout.warning { border-left-color: #f59e0b; }
    .callout.tip { border-left-color: var(--accent3); }
    .callout-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    .callout.warning .callout-title { color: #f59e0b; }
    .callout.tip .callout-title { color: var(--accent3); }
    .callout p { margin-bottom: 0; }

    /* CODE BLOCK */
    .code-block {
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      margin: 1.5rem 0;
    }
    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.6rem 1rem;
      background: rgba(255,255,255,0.03);
      border-bottom: 1px solid var(--border);
    }
    .code-lang {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--accent);
    }
    .copy-btn {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      color: var(--text-muted);
      background: none;
      border: 1px solid var(--border);
      border-radius: 3px;
      padding: 0.2rem 0.6rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .copy-btn:hover { color: var(--accent); border-color: var(--accent); }
    .copy-btn.copied { color: var(--accent3); border-color: var(--accent3); }
    pre {
      padding: 1.2rem 1.4rem;
      overflow-x: auto;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      line-height: 1.7;
      color: #e2e8f0;
    }
    .kw { color: #c792ea; } /* keywords */
    .fn { color: #82aaff; } /* functions */
    .str { color: #c3e88d; } /* strings */
    .cm { color: #546e7a; font-style: italic; } /* comments */
    .num { color: #f78c6c; } /* numbers */
    .col { color: #ffcb6b; } /* columns */
    .tbl { color: #89ddff; } /* tables */
    .op { color: #89ddff; } /* operators */

    /* LEVEL CARD */
    .level-card {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 1.8rem;
      margin: 1.5rem 0;
      position: relative;
      overflow: hidden;
    }
    .level-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--accent), var(--accent2));
    }
    .level-badge {
      display: inline-block;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      color: #fff;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 0.25rem 0.7rem;
      border-radius: 3px;
      letter-spacing: 0.08em;
      margin-bottom: 0.8rem;
    }
    .level-card h3 {
      color: var(--text);
      font-size: 1.1rem;
      margin: 0 0 0.8rem;
      font-family: 'Sora', sans-serif;
    }
    .level-card p { margin-bottom: 0; }

    /* INLINE CODE */
    code {
      font-family: 'JetBrains Mono', monospace;
      background: rgba(0,212,255,0.08);
      border: 1px solid rgba(0,212,255,0.15);
      color: var(--accent);
      padding: 0.1em 0.4em;
      border-radius: 3px;
      font-size: 0.85em;
    }

    /* TABLE */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      font-size: 0.87rem;
    }
    .data-table th {
      background: var(--bg3);
      color: var(--accent);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 0.8rem 1rem;
      text-align: left;
      border-bottom: 1px solid var(--border);
    }
    .data-table td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid rgba(255,255,255,0.04);
      color: var(--text-dim);
      vertical-align: top;
    }
    .data-table td:first-child {
      font-family: 'JetBrains Mono', monospace;
      color: var(--accent);
      font-size: 0.82rem;
    }
    .data-table tr:hover td { background: rgba(255,255,255,0.02); }

    /* REFS */
    .refs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1rem;
      margin: 1.5rem 0;
    }
    .ref-card {
      background: var(--bg2);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1.2rem;
      text-decoration: none;
      transition: all 0.2s;
      display: block;
    }
    .ref-card:hover {
      border-color: var(--accent);
      transform: translateY(-2px);
    }
    .ref-source {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      color: var(--accent);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 0.4rem;
    }
    .ref-title {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 0.3rem;
    }
    .ref-desc {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    /* FOOTER */
    footer {
      border-top: 1px solid var(--border);
      padding: 2rem;
      text-align: center;
      font-size: 0.8rem;
      color: var(--text-muted);
      font-family: 'JetBrains Mono', monospace;
    }

    /* SCROLLBAR */
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

    @media (max-width: 768px) {
      .page-layout { grid-template-columns: 1fr; }
      .sidebar { display: none; }
      .nav-links { display: none; }
    }
  </style>
</head>
<body>

  <!-- NAV -->
  <nav>
    <a class="nav-brand" href="index.html">MC · DEV</a>
    <ul class="nav-links">
      <li><a href="index.html">Início</a></li>
      <li><a href="sobre.html">Sobre</a></li>
      <li><a href="skills.html">Skills</a></li>
      <li><a href="exp.html">Experiência</a></li>
      <li><a href="certs.html">Certificações</a></li>
      <li><a href="blog.html" class="active">Blog</a></li>
      <li><a href="contato.html">Contato</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <div class="hero">
    <div class="breadcrumb">
      <a href="index.html">Início</a>
      <span>/</span>
      <a href="blog.html">Blog</a>
      <span>/</span>
      SQL no Marketing Cloud
    </div>
    <div class="hero-tag">Técnico · SQL · Tutorial</div>
    <h1>SQL no <em>Marketing Cloud</em></h1>
    <p class="hero-desc">
      Aprenda a usar SQL no Salesforce Marketing Cloud para ir além dos filtros de arrastar e soltar — e ter controle total sobre segmentação, transformação e qualidade de dados.
    </p>
    <div class="hero-meta">
      <span>📅 Mai 2025</span>
      <span>⏱ ~15 min de leitura</span>
      <span>🎯 Iniciante → Avançado</span>
      <span>✍ Marcos Queiroz</span>
    </div>
  </div>

  <!-- LAYOUT -->
  <div class="page-layout">

    <!-- SIDEBAR -->
    <aside class="sidebar">
      <p class="sidebar-title">Neste artigo</p>
      <ul class="sidebar-nav">
        <li><a href="#o-que-e-sql">O que é SQL no SFMC?</a></li>
        <li><a href="#onde-usar">Onde usar SQL</a></li>
        <li><a href="#limitacoes">Limitações importantes</a></li>
        <li><a href="#anatomia">Anatomia de uma query</a></li>
        <li class="sub"><a href="#select">SELECT</a></li>
        <li class="sub"><a href="#from">FROM</a></li>
        <li class="sub"><a href="#where">WHERE</a></li>
        <li class="sub"><a href="#join">JOIN</a></li>
        <li class="sub"><a href="#case">CASE</a></li>
        <li class="sub"><a href="#funcoes-data">Funções de data</a></li>
        <li class="sub"><a href="#funcoes-texto">Funções de texto</a></li>
        <li class="sub"><a href="#agregacao">Agregação</a></li>
        <li><a href="#data-views">System Data Views</a></li>
        <li><a href="#exemplos-praticos">Exemplos práticos</a></li>
        <li><a href="#boas-praticas">Boas práticas</a></li>
        <li><a href="#referencias">Referências</a></li>
      </ul>
    </aside>

    <!-- CONTENT -->
    <main class="content">

      <!-- INTRO -->
      <section id="o-que-e-sql">
        <h2>O que é SQL no Salesforce Marketing Cloud?</h2>
        <p>
          O <strong>SQL (Structured Query Language)</strong> é uma das formas mais poderosas de trabalhar com dados relacionais — e o Marketing Cloud, com suas Data Extensions e System Data Views, é essencialmente um banco de dados relacional. Por isso, o SQL é a ferramenta ideal para segmentação avançada, transformação de dados e automação de processos de marketing.
        </p>
        <p>
          No SFMC, o SQL é utilizado principalmente dentro do <strong>Automation Studio</strong> via <em>Query Activity</em>. O resultado de uma query sempre precisa ser salvo em uma Data Extension de destino, que pode ser criada previamente ou gerada automaticamente.
        </p>
        <div class="callout tip">
          <div class="callout-title">💡 Dica</div>
          <p>O SFMC utiliza uma versão próxima do <strong>SQL Server (T-SQL)</strong>, com algumas limitações específicas da plataforma. Se você já conhece SQL padrão, a curva de aprendizado é pequena.</p>
        </div>
      </section>

      <hr class="section-divider" />

      <!-- ONDE USAR -->
      <section id="onde-usar">
        <h2>Onde usar SQL no SFMC</h2>
        <p>O SQL pode ser utilizado em dois contextos principais:</p>

        <table class="data-table">
          <thead>
            <tr>
              <th>Local</th>
              <th>Uso</th>
              <th>Quando usar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Automation Studio → Query Activity</td>
              <td>Segmentação agendada, transformação de dados, ETL</td>
              <td>Produção e automações recorrentes</td>
            </tr>
            <tr>
              <td>Query Studio (AppExchange)</td>
              <td>Exploração e validação de dados ad-hoc</td>
              <td>Desenvolvimento e debugging</td>
            </tr>
          </tbody>
        </table>

        <p>
          O <strong>Query Studio</strong> é uma extensão gratuita disponível no AppExchange, desenvolvida pela Salesforce. É altamente recomendada para quem está aprendendo SQL no SFMC, pois permite ver os resultados em tempo real sem precisar criar Data Extensions manualmente para cada teste.
        </p>
      </section>

      <hr class="section-divider" />

      <!-- LIMITAÇÕES -->
      <section id="limitacoes">
        <h2>Limitações importantes</h2>

        <div class="callout warning">
          <div class="callout-title">⚠ Atenção — AutoKill</div>
          <p>O SFMC encerra automaticamente qualquer query que exceda <strong>30 minutos de execução</strong>. Pense sempre em performance e em como a query se comportará conforme o volume de dados crescer.</p>
        </div>

        <p>Outras limitações que você precisa conhecer:</p>
        <ul style="color: var(--text-dim); font-size:0.95rem; font-weight:300; padding-left:1.5rem; margin-bottom:1rem;">
          <li style="margin-bottom:0.5rem">Apenas o comando <code>SELECT</code> é suportado — sem <code>INSERT</code>, <code>UPDATE</code> ou <code>DELETE</code> direto</li>
          <li style="margin-bottom:0.5rem">Apenas dados de <strong>Data Extensions</strong> e <strong>System Data Views</strong> são acessíveis</li>
          <li style="margin-bottom:0.5rem">O resultado deve sempre ser salvo em uma Data Extension</li>
          <li style="margin-bottom:0.5rem">Sem suporte a stored procedures ou triggers</li>
        </ul>
      </section>

      <hr class="section-divider" />

      <!-- ANATOMIA -->
      <section id="anatomia">
        <h2>Anatomia de uma query</h2>
        <p>Toda query SQL no SFMC segue esta estrutura base:</p>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">SQL</span>
            <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
          </div>
          <pre><span class="kw">SELECT</span>   <span class="cm">-- quais colunas você quer no resultado</span>
    <span class="col">Coluna1</span>,
    <span class="col">Coluna2</span>
<span class="kw">FROM</span>     <span class="cm">-- de qual tabela/data extension</span>
    <span class="tbl">NomeDaDataExtension</span>
<span class="kw">WHERE</span>    <span class="cm">-- filtros opcionais</span>
    <span class="col">Status</span> <span class="op">=</span> <span class="str">'active'</span></pre>
        </div>
      </section>

      <!-- SELECT -->
      <section id="select">
        <h3>SELECT — O que trazer</h3>
        <p>O <code>SELECT</code> define quais colunas aparecerão no resultado. Você pode selecionar colunas específicas, renomeá-las com <code>AS</code> ou criar valores calculados.</p>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">SQL</span>
            <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
          </div>
          <pre><span class="cm">-- Selecionar colunas específicas com alias</span>
<span class="kw">SELECT</span>
    <span class="col">SubscriberKey</span>,
    <span class="col">EmailAddress</span>                   <span class="kw">AS</span> <span class="col">Email</span>,
    <span class="col">FirstName</span> <span class="op">+</span> <span class="str">' '</span> <span class="op">+</span> <span class="col">LastName</span>     <span class="kw">AS</span> <span class="col">NomeCompleto</span>,
    <span class="str">'ativo'</span>                        <span class="kw">AS</span> <span class="col">StatusFixo</span>
<span class="kw">FROM</span>
    <span class="tbl">DE_Clientes</span></pre>
        </div>

        <div class="callout tip">
          <div class="callout-title">💡 Boas práticas de SELECT</div>
          <p>Evite usar <code>SELECT *</code> em produção. Selecione apenas as colunas que você realmente precisa — isso melhora a performance e evita trazer dados desnecessários para a DE destino.</p>
        </div>
      </section>

      <!-- FROM -->
      <section id="from">
        <h3>FROM — De onde vem</h3>
        <p>O <code>FROM</code> aponta para a Data Extension de origem. Você pode usar o nome da DE ou seu External Key.</p>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">SQL</span>
            <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
          </div>
          <pre><span class="cm">-- Por nome da Data Extension</span>
<span class="kw">FROM</span> <span class="tbl">MinhaDe</span>

<span class="cm">-- Por External Key (necessário quando o nome tem espaços ou caracteres especiais)</span>
<span class="kw">FROM</span> <span class="tbl">[Minha DE com Espaços]</span>

<span class="cm">-- Com alias para usar em JOINs</span>
<span class="kw">FROM</span> <span class="tbl">DE_Clientes</span> <span class="kw">AS</span> <span class="tbl">cli</span></pre>
        </div>
      </section>

      <!-- WHERE -->
      <section id="where">
        <h3>WHERE — Filtros</h3>
        <p>O <code>WHERE</code> filtra os registros. Você pode combinar condições com <code>AND</code>, <code>OR</code> e <code>NOT</code>.</p>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">SQL</span>
            <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
          </div>
          <pre><span class="cm">-- Operadores de comparação</span>
<span class="kw">WHERE</span> <span class="col">Status</span> <span class="op">=</span> <span class="str">'active'</span>
  <span class="kw">AND</span> <span class="col">Idade</span> <span class="op">&gt;=</span> <span class="num">18</span>
  <span class="kw">AND</span> <span class="col">Estado</span> <span class="op">IN</span> (<span class="str">'SP'</span>, <span class="str">'RJ'</span>, <span class="str">'MG'</span>)

<span class="cm">-- BETWEEN para intervalos</span>
<span class="kw">WHERE</span> <span class="col">DataCadastro</span> <span class="kw">BETWEEN</span> <span class="str">'2024-01-01'</span> <span class="kw">AND</span> <span class="str">'2024-12-31'</span>

<span class="cm">-- LIKE para padrões de texto</span>
<span class="kw">WHERE</span> <span class="col">EmailAddress</span> <span class="kw">LIKE</span> <span class="str">'%@gmail.com'</span>

<span class="cm">-- IS NULL / IS NOT NULL</span>
<span class="kw">WHERE</span> <span class="col">Telefone</span> <span class="kw">IS NOT NULL</span></pre>
        </div>
      </section>

      <!-- JOIN -->
      <section id="join">
        <h3>JOIN — Cruzando dados</h3>
        <p>O <code>JOIN</code> permite combinar dados de duas ou mais Data Extensions. É um dos recursos mais poderosos do SQL no SFMC.</p>

        <table class="data-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Retorna</th>
              <th>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INNER JOIN</td>
              <td>Apenas registros com correspondência nas duas tabelas</td>
              <td>Quem comprou E está ativo</td>
            </tr>
            <tr>
              <td>LEFT JOIN</td>
              <td>Todos da tabela esquerda + correspondência da direita (NULL se não existir)</td>
              <td>Todos os clientes, com dados de compra se existirem</td>
            </tr>
            <tr>
              <td>RIGHT JOIN</td>
              <td>Todos da tabela direita + correspondência da esquerda</td>
              <td>Menos comum no SFMC</td>
            </tr>
          </tbody>
        </table>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">SQL</span>
            <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
          </div>
          <pre><span class="cm">-- INNER JOIN: clientes que abriram algum e-mail</span>
<span class="kw">SELECT</span>
    <span class="tbl">cli</span>.<span class="col">SubscriberKey</span>,
    <span class="tbl">cli</span>.<span class="col">EmailAddress</span>
<span class="kw">FROM</span> <span class="tbl">DE_Clientes</span>       <span class="kw">AS</span> <span class="tbl">cli</span>
    <span class="kw">INNER JOIN</span> <span class="tbl">_Open</span>    <span class="kw">AS</span> <span class="tbl">op</span>
        <span class="kw">ON</span> <span class="tbl">op</span>.<span class="col">SubscriberKey</span> <span class="op">=</span> <span class="tbl">cli</span>.<span class="col">SubscriberKey</span>
<span class="kw">WHERE</span> <span class="tbl">cli</span>.<span class="col">Status</span> <span class="op">=</span> <span class="str">'active'</span>

<span class="cm">-- LEFT JOIN: todos os clientes, identificando quem nunca recebeu e-mail</span>
<span class="kw">SELECT</span>
    <span class="tbl">cli</span>.<span class="col">SubscriberKey</span>,
    <span class="tbl">cli</span>.<span class="col">EmailAddress</span>,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> <span class="tbl">env</span>.<span class="col">SubscriberKey</span> <span class="kw">IS NULL</span> <span class="kw">THEN</span> <span class="str">'Nunca enviado'</span>
        <span class="kw">ELSE</span> <span class="str">'Já recebeu'</span>
    <span class="kw">END</span> <span class="kw">AS</span> <span class="col">StatusEnvio</span>
<span class="kw">FROM</span> <span class="tbl">DE_Clientes</span>       <span class="kw">AS</span> <span class="tbl">cli</span>
    <span class="kw">LEFT JOIN</span> <span class="tbl">_Sent</span>     <span class="kw">AS</span> <span class="tbl">env</span>
        <span class="kw">ON</span> <span class="tbl">env</span>.<span class="col">SubscriberKey</span> <span class="op">=</span> <span class="tbl">cli</span>.<span class="col">SubscriberKey</span></pre>
        </div>
      </section>

      <!-- CASE -->
      <section id="case">
        <h3>CASE — Lógica condicional</h3>
        <p>O <code>CASE</code> funciona como um <em>if/else</em> dentro do SQL. Permite criar colunas calculadas com base em condições.</p>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">SQL</span>
            <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
          </div>
          <pre><span class="kw">SELECT</span>
    <span class="col">SubscriberKey</span>,
    <span class="col">TotalCompras</span>,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> <span class="col">TotalCompras</span> <span class="op">&gt;=</span> <span class="num">10</span>   <span class="kw">THEN</span> <span class="str">'VIP'</span>
        <span class="kw">WHEN</span> <span class="col">TotalCompras</span> <span class="op">&gt;=</span> <span class="num">3</span>    <span class="kw">THEN</span> <span class="str">'Recorrente'</span>
        <span class="kw">WHEN</span> <span class="col">TotalCompras</span> <span class="op">=</span>  <span class="num">1</span>    <span class="kw">THEN</span> <span class="str">'Primeira compra'</span>
        <span class="kw">ELSE</span>                          <span class="str">'Sem compras'</span>
    <span class="kw">END</span> <span class="kw">AS</span> <span class="col">Segmento</span>
<span class="kw">FROM</span> <span class="tbl">DE_Clientes</span></pre>
        </div>
      </section>

      <!-- FUNÇÕES DE DATA -->
      <section id="funcoes-data">
        <h3>Funções de data</h3>
        <p>Filtros por data são essenciais em campanhas de marketing. O SFMC trabalha com <code>GETDATE()</code> para data/hora atual e <code>DATEADD()</code> para cálculos relativos.</p>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">SQL</span>
            <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
          </div>
          <pre><span class="cm">-- Clientes cadastrados nos últimos 30 dias</span>
<span class="kw">WHERE</span> <span class="col">DataCadastro</span> <span class="op">&gt;=</span> <span class="fn">DATEADD</span>(<span class="str">DAY</span>, <span class="op">-</span><span class="num">30</span>, <span class="fn">GETDATE</span>())

<span class="cm">-- Clientes com aniversário este mês</span>
<span class="kw">WHERE</span> <span class="fn">MONTH</span>(<span class="col">DataNascimento</span>) <span class="op">=</span> <span class="fn">MONTH</span>(<span class="fn">GETDATE</span>())

<span class="cm">-- Conversão de texto para data</span>
<span class="kw">WHERE</span> <span class="col">DataEvento</span> <span class="op">&gt;=</span> <span class="fn">CONVERT</span>(<span class="kw">DATE</span>, <span class="str">'2024-01-01'</span>)

<span class="cm">-- Formato de data no SELECT</span>
<span class="kw">SELECT</span>
    <span class="fn">FORMAT</span>(<span class="col">DataCadastro</span>, <span class="str">'dd/MM/yyyy'</span>) <span class="kw">AS</span> <span class="col">DataFormatada</span>
<span class="kw">FROM</span> <span class="tbl">DE_Clientes</span></pre>
        </div>

        <table class="data-table">
          <thead>
            <tr><th>Função</th><th>Descrição</th><th>Exemplo</th></tr>
          </thead>
          <tbody>
            <tr><td>GETDATE()</td><td>Data e hora atual</td><td><code>GETDATE()</code></td></tr>
            <tr><td>GETUTCDATE()</td><td>Data/hora em UTC</td><td><code>GETUTCDATE()</code></td></tr>
            <tr><td>DATEADD()</td><td>Adiciona intervalo a uma data</td><td><code>DATEADD(DAY, -7, GETDATE())</code></td></tr>
            <tr><td>DATEDIFF()</td><td>Diferença entre duas datas</td><td><code>DATEDIFF(DAY, DataCadastro, GETDATE())</code></td></tr>
            <tr><td>DAY / MONTH / YEAR</td><td>Extrai parte da data</td><td><code>MONTH(DataNascimento)</code></td></tr>
            <tr><td>CONVERT()</td><td>Converte tipos de dados</td><td><code>CONVERT(DATE, '2024-01-01')</code></td></tr>
          </tbody>
        </table>
      </section>

      <!-- FUNÇÕES DE TEXTO -->
      <section id="funcoes-texto">
        <h3>Funções de texto</h3>
        <p>Manipulação de strings é frequente no dia a dia: padronizar dados, extrair domínios de e-mail, formatar campos e muito mais.</p>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">SQL</span>
            <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
          </div>
          <pre><span class="cm">-- Extrair domínio do e-mail</span>
<span class="kw">SELECT</span>
    <span class="col">EmailAddress</span>,
    <span class="fn">SUBSTRING</span>(
        <span class="col">EmailAddress</span>,
        <span class="fn">CHARINDEX</span>(<span class="str">'@'</span>, <span class="col">EmailAddress</span>) <span class="op">+</span> <span class="num">1</span>,
        <span class="fn">LEN</span>(<span class="col">EmailAddress</span>)
    ) <span class="kw">AS</span> <span class="col">Dominio</span>
<span class="kw">FROM</span> <span class="tbl">DE_Clientes</span>

<span class="cm">-- Padronizar: primeira letra maiúscula (simulado)</span>
<span class="kw">SELECT</span>
    <span class="fn">UPPER</span>(<span class="fn">LEFT</span>(<span class="col">FirstName</span>, <span class="num">1</span>)) <span class="op">+</span> <span class="fn">LOWER</span>(<span class="fn">SUBSTRING</span>(<span class="col">FirstName</span>, <span class="num">2</span>, <span class="fn">LEN</span>(<span class="col">FirstName</span>))) <span class="kw">AS</span> <span class="col">Nome</span>
<span class="kw">FROM</span> <span class="tbl">DE_Clientes</span>

<span class="cm">-- Limpar espaços extras</span>
<span class="kw">SELECT</span> <span class="fn">LTRIM</span>(<span class="fn">RTRIM</span>(<span class="col">Nome</span>)) <span class="kw">AS</span> <span class="col">NomeLimpo</span>
<span class="kw">FROM</span> <span class="tbl">DE_Clientes</span></pre>
        </div>

        <table class="data-table">
          <thead>
            <tr><th>Função</th><th>Descrição</th></tr>
          </thead>
          <tbody>
            <tr><td>LEFT(str, n)</td><td>Retorna os primeiros N caracteres</td></tr>
            <tr><td>RIGHT(str, n)</td><td>Retorna os últimos N caracteres</td></tr>
            <tr><td>LEN(str)</td><td>Tamanho da string</td></tr>
            <tr><td>UPPER / LOWER</td><td>Converte para maiúsculas / minúsculas</td></tr>
            <tr><td>LTRIM / RTRIM</td><td>Remove espaços à esquerda / direita</td></tr>
            <tr><td>REPLACE(str, old, new)</td><td>Substitui texto</td></tr>
            <tr><td>CHARINDEX(substr, str)</td><td>Posição de um caractere na string</td></tr>
            <tr><td>SUBSTRING(str, start, len)</td><td>Extrai trecho da string</td></tr>
          </tbody>
        </table>
      </section>

      <!-- AGREGAÇÃO -->
      <section id="agregacao">
        <h3>Agregação — GROUP BY, COUNT, SUM</h3>
        <p>Funções de agregação permitem sumarizar dados: contar registros, somar valores, calcular médias. Fundamentais para relatórios e análises.</p>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">SQL</span>
            <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
          </div>
          <pre><span class="cm">-- Contagem por domínio de e-mail</span>
<span class="kw">SELECT</span>
    <span class="fn">SUBSTRING</span>(<span class="col">EmailAddress</span>, <span class="fn">CHARINDEX</span>(<span class="str">'@'</span>, <span class="col">EmailAddress</span>) <span class="op">+</span> <span class="num">1</span>, <span class="fn">LEN</span>(<span class="col">EmailAddress</span>)) <span class="kw">AS</span> <span class="col">Dominio</span>,
    <span class="fn">COUNT</span>(<span class="op">*</span>)  <span class="kw">AS</span> <span class="col">TotalContatos</span>
<span class="kw">FROM</span> <span class="tbl">DE_Clientes</span>
<span class="kw">GROUP BY</span>
    <span class="fn">SUBSTRING</span>(<span class="col">EmailAddress</span>, <span class="fn">CHARINDEX</span>(<span class="str">'@'</span>, <span class="col">EmailAddress</span>) <span class="op">+</span> <span class="num">1</span>, <span class="fn">LEN</span>(<span class="col">EmailAddress</span>))
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(<span class="op">*</span>) <span class="op">&gt;</span> <span class="num">100</span>
<span class="kw">ORDER BY</span> <span class="col">TotalContatos</span> <span class="kw">DESC</span></pre>
        </div>

        <div class="callout">
          <div class="callout-title">📌 Nota</div>
          <p><code>HAVING</code> é usado para filtrar resultados <em>após</em> a agregação — ao contrário do <code>WHERE</code>, que filtra antes. Use <code>HAVING</code> quando quiser filtrar por um valor calculado (ex: <code>COUNT(*) > 100</code>).</p>
        </div>
      </section>

      <hr class="section-divider" />

      <!-- SYSTEM DATA VIEWS -->
      <section id="data-views">
        <h2>System Data Views</h2>
        <p>
          O SFMC possui Data Views de sistema que armazenam dados de engajamento das suas campanhas. Elas são prefixadas com <code>_</code> (underscore) e são somente leitura — você não pode modificá-las, apenas consultá-las.
        </p>

        <table class="data-table">
          <thead>
            <tr>
              <th>Data View</th>
              <th>O que contém</th>
              <th>Chave principal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>_Subscribers</td><td>Todos os assinantes da All Subscribers List</td><td>SubscriberKey</td></tr>
            <tr><td>_Sent</td><td>Todos os envios de e-mail</td><td>SubscriberKey, JobID</td></tr>
            <tr><td>_Open</td><td>Aberturas de e-mail</td><td>SubscriberKey, JobID</td></tr>
            <tr><td>_Click</td><td>Cliques em links de e-mails</td><td>SubscriberKey, JobID</td></tr>
            <tr><td>_Bounce</td><td>Devoluções (bounces)</td><td>SubscriberKey, JobID</td></tr>
            <tr><td>_Unsubscribe</td><td>Descadastramentos</td><td>SubscriberKey</td></tr>
            <tr><td>_Journey</td><td>Jornadas ativas e históricas</td><td>VersionID</td></tr>
            <tr><td>_JourneyActivity</td><td>Atividades dentro de jornadas</td><td>JourneyActivityObjectID</td></tr>
          </tbody>
        </table>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang">SQL — Exemplo com _Subscribers</span>
            <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
          </div>
          <pre><span class="cm">-- Todos os assinantes ativos</span>
<span class="kw">SELECT</span>
    <span class="col">SubscriberKey</span>,
    <span class="col">EmailAddress</span>,
    <span class="col">Status</span>,
    <span class="col">DateJoined</span>
<span class="kw">FROM</span> <span class="tbl">_Subscribers</span>
<span class="kw">WHERE</span> <span class="col">Status</span> <span class="op">=</span> <span class="str">'active'</span></pre>
        </div>
      </section>

      <hr class="section-divider" />

      <!-- EXEMPLOS PRÁTICOS -->
      <section id="exemplos-praticos">
        <h2>Exemplos práticos</h2>

        <div class="level-card">
          <div class="level-badge">Exemplo 1 — Básico</div>
          <h3>Assinantes ativos do Gmail</h3>
          <p>Segmenta todos os assinantes ativos que usam Gmail — útil para testes de entregabilidade ou personalização por provedor.</p>
          <div class="code-block" style="margin-top:1rem">
            <div class="code-header">
              <span class="code-lang">SQL</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><span class="kw">SELECT</span>
    <span class="col">SubscriberKey</span>,
    <span class="col">EmailAddress</span>
<span class="kw">FROM</span> <span class="tbl">_Subscribers</span>
<span class="kw">WHERE</span>
    <span class="col">Status</span> <span class="op">=</span> <span class="str">'active'</span>
    <span class="kw">AND</span> <span class="col">Domain</span> <span class="op">=</span> <span class="str">'gmail.com'</span></pre>
          </div>
        </div>

        <div class="level-card">
          <div class="level-badge">Exemplo 2 — Intermediário</div>
          <h3>Clientes ativos que nunca abriram um e-mail (Win-back)</h3>
          <p>Identifica assinantes ativos que nunca registraram uma abertura — segmento clássico para campanhas de reengajamento.</p>
          <div class="code-block" style="margin-top:1rem">
            <div class="code-header">
              <span class="code-lang">SQL</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><span class="kw">SELECT</span>
    <span class="tbl">sub</span>.<span class="col">SubscriberKey</span>,
    <span class="tbl">sub</span>.<span class="col">EmailAddress</span>
<span class="kw">FROM</span> <span class="tbl">_Subscribers</span>        <span class="kw">AS</span> <span class="tbl">sub</span>
    <span class="kw">LEFT JOIN</span> <span class="tbl">_Open</span>        <span class="kw">AS</span> <span class="tbl">op</span>
        <span class="kw">ON</span> <span class="tbl">op</span>.<span class="col">SubscriberKey</span> <span class="op">=</span> <span class="tbl">sub</span>.<span class="col">SubscriberKey</span>
<span class="kw">WHERE</span>
    <span class="tbl">sub</span>.<span class="col">Status</span> <span class="op">=</span> <span class="str">'active'</span>
    <span class="kw">AND</span> <span class="tbl">op</span>.<span class="col">SubscriberKey</span> <span class="kw">IS NULL</span></pre>
          </div>
        </div>

        <div class="level-card">
          <div class="level-badge">Exemplo 3 — Intermediário</div>
          <h3>Segmentação por aniversário do mês</h3>
          <p>Busca clientes que fazem aniversário no mês atual — base para campanhas de birthday trigger.</p>
          <div class="code-block" style="margin-top:1rem">
            <div class="code-header">
              <span class="code-lang">SQL</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><span class="kw">SELECT</span>
    <span class="col">SubscriberKey</span>,
    <span class="col">EmailAddress</span>,
    <span class="col">NomeCliente</span>,
    <span class="col">DataNascimento</span>
<span class="kw">FROM</span> <span class="tbl">DE_Clientes</span>
<span class="kw">WHERE</span>
    <span class="fn">MONTH</span>(<span class="col">DataNascimento</span>) <span class="op">=</span> <span class="fn">MONTH</span>(<span class="fn">GETDATE</span>())
    <span class="kw">AND</span> <span class="fn">DAY</span>(<span class="col">DataNascimento</span>) <span class="op">=</span> <span class="fn">DAY</span>(<span class="fn">GETDATE</span>())</pre>
          </div>
        </div>

        <div class="level-card">
          <div class="level-badge">Exemplo 4 — Avançado</div>
          <h3>Segmentação RFM — Recência, Frequência e Valor</h3>
          <p>Classifica clientes com base em comportamento de compra para campanhas de alta precisão.</p>
          <div class="code-block" style="margin-top:1rem">
            <div class="code-header">
              <span class="code-lang">SQL</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><span class="kw">SELECT</span>
    <span class="col">SubscriberKey</span>,
    <span class="col">EmailAddress</span>,
    <span class="fn">MAX</span>(<span class="col">DataCompra</span>)         <span class="kw">AS</span> <span class="col">UltimaCompra</span>,
    <span class="fn">COUNT</span>(<span class="col">PedidoID</span>)         <span class="kw">AS</span> <span class="col">TotalPedidos</span>,
    <span class="fn">SUM</span>(<span class="col">ValorPedido</span>)        <span class="kw">AS</span> <span class="col">ValorTotal</span>,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> <span class="fn">MAX</span>(<span class="col">DataCompra</span>) <span class="op">&gt;=</span> <span class="fn">DATEADD</span>(<span class="str">DAY</span>, <span class="op">-</span><span class="num">30</span>, <span class="fn">GETDATE</span>()) <span class="kw">THEN</span> <span class="str">'Recente'</span>
        <span class="kw">WHEN</span> <span class="fn">MAX</span>(<span class="col">DataCompra</span>) <span class="op">&gt;=</span> <span class="fn">DATEADD</span>(<span class="str">DAY</span>, <span class="op">-</span><span class="num">90</span>, <span class="fn">GETDATE</span>()) <span class="kw">THEN</span> <span class="str">'Em risco'</span>
        <span class="kw">ELSE</span>                                                              <span class="str">'Inativo'</span>
    <span class="kw">END</span>                        <span class="kw">AS</span> <span class="col">SegmentoRecencia</span>
<span class="kw">FROM</span> <span class="tbl">DE_Pedidos</span>
<span class="kw">GROUP BY</span> <span class="col">SubscriberKey</span>, <span class="col">EmailAddress</span>
<span class="kw">HAVING</span> <span class="fn">COUNT</span>(<span class="col">PedidoID</span>) <span class="op">&gt;=</span> <span class="num">1</span></pre>
          </div>
        </div>

        <div class="level-card">
          <div class="level-badge">Exemplo 5 — Avançado</div>
          <h3>Bounces recentes por provedor</h3>
          <p>Identifica assinantes com bounces nos últimos 7 dias segmentados por provedor de e-mail — útil para higiene de base.</p>
          <div class="code-block" style="margin-top:1rem">
            <div class="code-header">
              <span class="code-lang">SQL</span>
              <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><span class="kw">SELECT</span>
    <span class="tbl">sub</span>.<span class="col">SubscriberKey</span>,
    <span class="tbl">sub</span>.<span class="col">EmailAddress</span>,
    <span class="tbl">b</span>.<span class="col">BounceCategory</span>,
    <span class="tbl">b</span>.<span class="col">SMTPBounceReason</span>,
    <span class="kw">CASE</span>
        <span class="kw">WHEN</span> <span class="tbl">b</span>.<span class="col">Domain</span> <span class="kw">IN</span> (<span class="str">'gmail.com'</span>)                           <span class="kw">THEN</span> <span class="str">'Google'</span>
        <span class="kw">WHEN</span> <span class="tbl">b</span>.<span class="col">Domain</span> <span class="kw">IN</span> (<span class="str">'outlook.com'</span>, <span class="str">'hotmail.com'</span>, <span class="str">'live.com'</span>) <span class="kw">THEN</span> <span class="str">'Microsoft'</span>
        <span class="kw">WHEN</span> <span class="tbl">b</span>.<span class="col">Domain</span> <span class="kw">IN</span> (<span class="str">'yahoo.com'</span>, <span class="str">'yahoo.com.br'</span>)            <span class="kw">THEN</span> <span class="str">'Yahoo'</span>
        <span class="kw">ELSE</span>                                                             <span class="str">'Outros'</span>
    <span class="kw">END</span> <span class="kw">AS</span> <span class="col">Provedor</span>
<span class="kw">FROM</span> <span class="tbl">_Subscribers</span>        <span class="kw">AS</span> <span class="tbl">sub</span>
    <span class="kw">INNER JOIN</span> <span class="tbl">_Bounce</span>    <span class="kw">AS</span> <span class="tbl">b</span>
        <span class="kw">ON</span> <span class="tbl">b</span>.<span class="col">SubscriberKey</span> <span class="op">=</span> <span class="tbl">sub</span>.<span class="col">SubscriberKey</span>
<span class="kw">WHERE</span>
    <span class="tbl">b</span>.<span class="col">EventDate</span> <span class="op">&gt;=</span> <span class="fn">DATEADD</span>(<span class="str">DAY</span>, <span class="op">-</span><span class="num">7</span>, <span class="fn">GETDATE</span>())
    <span class="kw">AND</span> <span class="tbl">b</span>.<span class="col">BounceCategory</span> <span class="op">=</span> <span class="str">'HardBounce'</span></pre>
          </div>
        </div>
      </section>

      <hr class="section-divider" />

      <!-- BOAS PRÁTICAS -->
      <section id="boas-praticas">
        <h2>Boas práticas</h2>

        <div class="callout tip">
          <div class="callout-title">✅ Use aliases em tabelas com JOIN</div>
          <p>Sempre use aliases (<code>AS cli</code>, <code>AS sub</code>) quando fizer JOINs. Além de deixar o código mais legível, evita ambiguidade quando duas tabelas têm colunas com o mesmo nome.</p>
        </div>

        <div class="callout tip">
          <div class="callout-title">✅ Implemente períodos de retenção</div>
          <p>Data Extensions usadas em queries recorrentes devem ter um período de retenção definido. Isso limita o volume de dados processados e reduz o risco de AutoKill.</p>
        </div>

        <div class="callout tip">
          <div class="callout-title">✅ Teste no Query Studio antes de automatizar</div>
          <p>Sempre valide sua query no Query Studio antes de movê-la para uma Automation. Isso economiza tempo e evita erros silenciosos em produção.</p>
        </div>

        <div class="callout warning">
          <div class="callout-title">⚠ Evite SELECT * em produção</div>
          <p>Trazer todas as colunas é ineficiente e pode trazer dados desnecessários para a DE de destino. Sempre selecione apenas o que precisa.</p>
        </div>

        <div class="callout warning">
          <div class="callout-title">⚠ Cuidado com dados das System Data Views</div>
          <p>As System Data Views como <code>_Sent</code> e <code>_Open</code> retêm dados por apenas <strong>6 meses</strong>. Para históricos mais longos, você precisa persistir os dados em suas próprias Data Extensions via automações periódicas.</p>
        </div>
      </section>

      <hr class="section-divider" />

      <!-- REFERÊNCIAS -->
      <section id="referencias">
        <h2>Referências</h2>
        <div class="refs-grid">
          <a class="ref-card" href="https://trailhead.salesforce.com/pt-BR/content/learn/modules/marketing-cloud-data-management/query-data-with-sql" target="_blank" rel="noopener">
            <div class="ref-source">Salesforce Trailhead</div>
            <div class="ref-title">Query Data with SQL</div>
            <div class="ref-desc">Módulo oficial Trailhead em português sobre SQL no Marketing Cloud</div>
          </a>
          <a class="ref-card" href="https://handsonsfmc.com/2024/12/26/how-to-sql-marketing-cloud-from/" target="_blank" rel="noopener">
            <div class="ref-source">Hands-on SFMC</div>
            <div class="ref-title">How to SQL in Marketing Cloud</div>
            <div class="ref-desc">Guia prático com exemplos reais de uso de SQL no SFMC</div>
          </a>
          <a class="ref-card" href="https://www.martechnotes.com/50-salesforce-marketing-cloud-sql-examples/" target="_blank" rel="noopener">
            <div class="ref-source">MarTech Notes</div>
            <div class="ref-title">50 SFMC SQL Examples</div>
            <div class="ref-desc">Biblioteca de 50 exemplos prontos para uso no dia a dia</div>
          </a>
          <a class="ref-card" href="https://mateuszdabrowski.pl/docs/salesforce/marketing-cloud-engagement/sql/sql-basics/" target="_blank" rel="noopener">
            <div class="ref-source">Mateusz Dabrowski</div>
            <div class="ref-title">SFMC SQL Basics</div>
            <div class="ref-desc">Referência técnica aprofundada sobre SQL no SFMC (em inglês)</div>
          </a>
        </div>
      </section>

    </main>
  </div>

  <footer>
    © 2025 · Senior Marketing Cloud Developer · Recife, PE · marcosqueirozpereira@gmail.com
  </footer>

  <script>
    function copyCode(btn) {
      const pre = btn.closest('.code-block').querySelector('pre');
      const text = pre.innerText;
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copiado!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copiar';
          btn.classList.remove('copied');
        }, 2000);
      });
    }

    // Smooth scroll for sidebar links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Highlight active sidebar item on scroll
    const sections = document.querySelectorAll('section[id]');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sidebarLinks.forEach(l => l.style.color = '');
          const active = document.querySelector(`.sidebar-nav a[href="#${entry.target.id}"]`);
          if (active) {
            active.style.color = 'var(--accent)';
            active.style.borderLeftColor = 'var(--accent)';
          }
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });
    sections.forEach(s => observer.observe(s));
  </script>

</body>
</html>
 }
];

function getArticleById(id) {
  return ARTICLES.find(article => article.id === id);
}
