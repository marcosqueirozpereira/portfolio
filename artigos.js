const ARTICLES = [
 {
  id: "ampscript-personalizacao",
  title: "AMPscript: Personalização Dinâmica no SFMC",
  category: "Tutorial",
  categoryLabel: "Tutorial · SFMC",
  date: "Mar 2024",
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
  date: "Fev 2024",
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
  title: "SQL em Data Extensions: Do Básico ao Avançado",
  category: "Técnico",
  categoryLabel: "Técnico · SQL",
  date: "Jan 2024",
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
];

function getArticleById(id) {
  return ARTICLES.find(article => article.id === id);
}
