# Report Spec — People Analytics Dashboard (Home Experience)

> Gerado por `powerbi-report-planning`, com base em `_Prompts/BussinesCase.txt` (Case) e
> `_Prompts/Regras_de_negocios.md` (Root/roteamento de skills). Dependências indisponíveis
> nesta sessão (`powerbi-modeling-mcp`, `powerbi-report-authoring`, `powerbi-report-design`) —
> ver "Nota de dependências" no final.

## Report identity
- Report name: People_Analytics_Dashboard (evolução do relatório existente)
- Semantic model: `People_Analytics_Dashboard.SemanticModel` (local, TMDL) — brownfield
- Audience: Diretores da Home Experience (executivos)
- Primary purpose: Monitorar rotatividade, custo de mão de obra, absenteísmo e retenção; responder
  as 11 perguntas macro do case + trazer achados extras não óbvios
- Delivery target: Local PBIP primeiro (sem publicação em Fabric solicitada)

## User decisions and constraints
- Scope: cobertura completa do case — 11 análises macro + 5 análises extras
- Page count: 4 páginas temáticas
- Interactivity: slicers globais (Ano/Mês) + slicers por página conforme o tema
- Design direction: reaproveitar o HR Analytics Design System (`design-system/DESIGN.md`) —
  paleta violeta monocromática, Inter, 1 card-hero por tela, status ok/warn/risk
- Publishing: não solicitado nesta fase
- Tooling: 4 skills Power BI (`power-bi-model-design-review`, `power-bi-dax-optimization`,
  `power-bi-performance-troubleshooting`, `powerbi-report-planning`) + edição direta de TMDL
  (sem MCP de modelagem conectado nesta sessão)
- Model edit permissions: liberado — o objetivo explícito é evoluir o modelo (relacionamentos,
  tabela Calendario, medidas)
- Accessibility: contraste WCAG AA, alt text em gráficos, evitar vermelho-sobre-vermelho,
  slicers pesquisáveis para campos de alta cardinalidade (ex.: Cargo, Funcionário)
- Data caveats: ver "Lacunas de modelo" abaixo — várias métricas dependem de correções de
  modelo que ainda não existem

## Narrative
- Core story: "Como está a saúde do nosso quadro de pessoas em 2020 — quem entra, quem sai, por
  quê, quanto custa e quem fica?"
- Audience promise: em 4 páginas, a diretoria enxerga headcount/turnover, causas de saída,
  retenção por perfil, e o custo (folha, horas extras, absenteísmo, equidade salarial)
- Key questions answered: as 11 perguntas macro (contratações por ano, demissões por faixa
  etária, headcount 2019 vs 2020, má contratação por cargo/faixa etária, turnover demissional,
  massa salarial de gestores, absenteísmo total/causa/mês, hora extra por escolaridade) + as 5
  extras (segmentação de turnover, retenção segmentada, drivers de retenção, leque salarial,
  índice de tecnicidade)

## Design identity
- Tone: Calma executiva / precisão analítica (Editorial-corporativo)
- Signature: hierarquia violet-on-violet — uma única série de cor de marca em tons de violeta
  para todos os gráficos, com exatamente 1 card-hero violeta por página e o restante em
  superfícies neutras
- Brownfield delta: reaplicar a identidade já usada no design-system web do projeto ao tema do
  Power BI (tema `.json` de report), não introduzir uma paleta nova

## Page plan

### 1. Visão Geral — Executive Summary
- Purpose: KPIs executivos de topo + tendência mensal, ponto de entrada para a diretoria
- Visuals:
  - Faixa de KPIs (6 stat tiles, tratamento de KPI composto — não card solto dominando a página):
    Headcount, Turnover Demissional %, Massa Salarial, % Absenteísmo, Contratações, Demissões
  - Gráfico de linha/área: Headcount e Turnover Demissional % por mês (visual hero da página)
  - Donut: Turnover segmentado (Ativo/Passivo/Espontâneo) no período filtrado
- Fields/measures: `[Headcount]`, `[Turnover Demissional %]`, `[Massa Salarial]`,
  `[% Absenteísmo]`, `[Contratações]`, `[Demissões]`, `[Turnover Ativo]`, `[Turnover Passivo]`,
  `[Turnover Espontâneo]`, `Calendario[Ano-Mês]`
- Slicers/interactions: Ano, Mês (globais, top-right); drillthrough para as páginas 2–4 a partir
  dos KPIs correspondentes

### 2. Contratações & Turnover — Analytical Canvas
- Purpose: responder contratações por ano, demissões por faixa etária, má contratação e turnover
  segmentado
- Visuals:
  - Coluna: Contratações por Ano (destaca o ano de pico — pergunta macro 1)
  - Barra: Demissões por Faixa Etária (pergunta macro 2)
  - Coluna empilhada: Turnover segmentado (Ativo/Passivo/Espontâneo) por Ano/Mês (extra 1)
  - Matriz: Má Contratação — contagem e % por Cargo x Faixa Etária (macro 4 e 5)
  - Linha: Turnover Demissional % por Ano (macro 6, valida com dado real qual ano consultar)
- Fields/measures: `[Contratações]`, `[Demissões]`, `[Turnover Demissional %]`,
  `[Má Contratação #]`, `[Má Contratação %]`, `[Turnover Ativo/Passivo/Espontâneo]`,
  `Funcionarios[Faixa Etária]`, `Funcionarios[Cargo]`
- Slicers/interactions: Ano, Cargo, Faixa Etária (top-right); tooltip com causa de afastamento

### 3. Retenção & Perfil — Analytical Canvas
- Purpose: segmentar tempo de retenção e identificar o que influencia reter talentos por mais
  tempo
- Visuals:
  - Coluna empilhada: Retenção (<60d / 60–365d / >365d) por Sexo
  - Coluna empilhada: Retenção por Faixa Etária
  - Coluna empilhada: Retenção por Ano de admissão
  - Coluna empilhada: Retenção por Escolaridade
  - Matriz/scatter: cruzamento Retenção x (Escolaridade, Cargo, Centro de Custo) para achado de
    driver de retenção (extra 3)
- Fields/measures: `Funcionarios[Categoria de Retenção]`, `[Tempo de Retenção (dias)]`,
  `Funcionarios[Sexo]`, `Funcionarios[Faixa Etária]`, `Funcionarios[Escolaridade]`
- Slicers/interactions: Ano de admissão, Sexo, Escolaridade (top-right)

### 4. Folha, Absenteísmo & Equidade — Analytical Canvas
- Purpose: custo de mão de obra, absenteísmo e indicadores de equidade/qualificação
- Visuals:
  - Linha/área: Massa Salarial por mês
  - Colunas clusterizadas: Horas Normais vs Horas Extras por mês + KPI `% Horas Extras`
    (recorte por Escolaridade para a pergunta macro 11)
  - Linha: % Absenteísmo por mês (destaca o mês mínimo — macro 10) + barra horizontal ranqueada:
    Absenteísmo por Causa (macro 9)
  - KPI + breakdown: Leque Salarial geral e por Cargo/Escolaridade (extra 4)
  - KPI/gauge: Índice de Tecnicidade (extra 5)
- Fields/measures: `[Massa Salarial]`, `[Horas Normais]`, `[Horas Extras]`, `[% Horas Extras]`,
  `[Absenteísmo]`, `[% Absenteísmo]`, `[Leque Salarial]`, `[Índice de Tecnicidade]`,
  `Funcionarios[Escolaridade]`, `Funcionarios[Cargo]`
- Slicers/interactions: Ano, Mês, Escolaridade, Cargo (top-right)

## Design system summary
- Theme: HR Analytics Design System (`design-system/DESIGN.md`) portado para tema Power BI
- Base palette: violeta `#7A60CA` (marca/série 1) → `#9580D4` → `#AF9FDF` → `#CFC4EC`
  (séries 2–4); neutros `#FFFFFF`/`#F1F1F1`/`#EAEAEC` para superfícies e bordas hairline
- Color semantics: status ok `#2BA76A` (ex.: retenção alta, turnover em queda), warn `#E0812F`
  (ex.: absenteísmo em alta), risk `#DC5B54` (ex.: turnover espontâneo alto, má contratação alta)
- Typography: Inter (headings `--neutral-900`, corpo `--neutral-700`)
- Layout pattern: canvas FHD 1920×1080, grid com faixa de filtros no topo-direito, KPIs em faixa
  superior, visual "hero" abaixo, tabelas/matrizes detalhadas na parte inferior da página
- Accessibility commitments: contraste AA em todos os pares texto/fundo; nunca usar vermelho
  como única série categórica; slicers pesquisáveis para Cargo/Funcionário; alt text em todos os
  gráficos

## Model requirements
- Existing measures: nenhuma (modelo hoje só tem colunas importadas)
- New measures (nomenclatura conforme glossário de `Regras_de_negocios.md`):
  `Contratações`, `Demissões`, `Headcount`, `Turnover Demissional %`, `Turnover Ativo`,
  `Turnover Passivo`, `Turnover Espontâneo`, `Má Contratação #`, `Má Contratação %`,
  `Massa Salarial`, `Horas Normais`, `Horas Extras`, `% Horas Extras`, `Absenteísmo`,
  `% Absenteísmo`, `Leque Salarial`, `Índice de Tecnicidade`, `Tempo de Retenção (dias)`
- New calculated columns:
  - `Funcionarios[Faixa Etária]` (a partir de `Data Nascimento`, após corrigir o tipo)
  - `Funcionarios[Tempo de Retenção (dias)]` e `Funcionarios[Categoria de Retenção]`
    (<60 / 60–365 / >365, a partir de `Data Admissão` e `Data Afastamento`)
  - `Funcionarios[Segmento de Turnover]` (Ativo: 3,4,14 · Passivo: 1,2,13 · Espontâneo: demais,
    a partir de `Cód Causa Afastamento`)
  - `BaseDados[Categoria de Evento]` (Horas Normais / Horas Extras / Falta / Atraso / Atestado —
    depende do mapeamento de `Evento`/`Descrição` ainda pendente, ver Riscos)
- Relationship/sort requirements:
  - Criar relacionamento `BaseDados.'Matricula '` → `Funcionarios.'Cód Funcionário'`
    (muitos-para-um, direção única cross-filter)
  - Criar tabela `Calendario` dedicada (substituindo as date tables automáticas), com feriados
    nacionais brasileiros (incl. móveis) e hierarquia de datas
  - Relacionamento ativo `Calendario` ↔ `BaseDados.' Mês Pag. '` (eixo de tempo principal das
    medidas de folha/absenteísmo)
  - Relacionamentos inativos `Calendario` ↔ `Funcionarios.'Data Admissão'` /
    `'Data Cargo'` / `'Data Salário'`, ativados via `USERELATIONSHIP` nas medidas que analisam
    por data de admissão (Contratações, Headcount por coorte, Tempo de Retenção)
  - Coluna de ordenação (sort-by-column) para `Categoria de Retenção` e para nomes de mês em
    `Calendario`

## Canonical design contract

```yaml
Design Brief:
  generated_by: powerbi-report-planning (manual — powerbi-report-design não instalado neste ambiente)
  contract_version: manual-1.0
  canvas: { width: 1920, height: 1080 }
  theme_source: design-system/DESIGN.md
  pages:
    - name: "Visão Geral"
      archetype: Executive Summary
      layout_contract:
        grid:
          regions: [header, filters, kpi_row, hero_trend, donut_segmento]
        placements:
          - { region: header, type: page_title, text: "Visão Geral — People Analytics" }
          - { region: filters, type: slicer_group, fields: [Calendario.Ano, Calendario.Mês] }
          - { region: kpi_row, type: composite_kpi_row, tiles: [Headcount, "Turnover Demissional %", "Massa Salarial", "% Absenteísmo", Contratações, Demissões] }
          - { region: hero_trend, type: lineChart, fields: ["Calendario.Ano-Mês", Headcount, "Turnover Demissional %"] }
          - { region: donut_segmento, type: donutChart, fields: ["Turnover Ativo", "Turnover Passivo", "Turnover Espontâneo"] }
        space_audit: { unplaced_regions: [], rationale: "hero_trend ocupa a maior área abaixo da faixa de KPIs; donut ao lado como apoio, nunca card solto como maior elemento" }
    - name: "Contratações & Turnover"
      archetype: Analytical Canvas
      layout_contract:
        grid:
          regions: [header, filters, chart_contratacoes, chart_demissoes_faixa, chart_turnover_segmentado, matriz_ma_contratacao, chart_turnover_trend]
        placements:
          - { region: header, type: page_title, text: "Contratações & Turnover" }
          - { region: filters, type: slicer_group, fields: [Calendario.Ano, Funcionarios.Cargo, Funcionarios."Faixa Etária"] }
          - { region: chart_contratacoes, type: columnChart, fields: [Calendario.Ano, Contratações] }
          - { region: chart_demissoes_faixa, type: barChart, fields: [Funcionarios."Faixa Etária", Demissões] }
          - { region: chart_turnover_segmentado, type: stackedColumnChart, fields: [Calendario.Ano, "Turnover Ativo", "Turnover Passivo", "Turnover Espontâneo"] }
          - { region: matriz_ma_contratacao, type: matrix, fields: [Funcionarios.Cargo, Funcionarios."Faixa Etária", "Má Contratação #", "Má Contratação %"] }
          - { region: chart_turnover_trend, type: lineChart, fields: [Calendario.Ano, "Turnover Demissional %"] }
        space_audit: { unplaced_regions: [], rationale: "matriz detalhada posicionada na parte inferior da página, gráficos de tendência/comparação acima" }
    - name: "Retenção & Perfil"
      archetype: Analytical Canvas
      layout_contract:
        grid:
          regions: [header, filters, retencao_sexo, retencao_faixa, retencao_ano, retencao_escolaridade, matriz_drivers]
        placements:
          - { region: header, type: page_title, text: "Retenção & Perfil" }
          - { region: filters, type: slicer_group, fields: ["Funcionarios.Data Admissão".Ano, Funcionarios.Sexo, Funcionarios.Escolaridade] }
          - { region: retencao_sexo, type: stackedColumnChart, fields: [Funcionarios.Sexo, "Categoria de Retenção"] }
          - { region: retencao_faixa, type: stackedColumnChart, fields: [Funcionarios."Faixa Etária", "Categoria de Retenção"] }
          - { region: retencao_ano, type: stackedColumnChart, fields: ["Funcionarios.Data Admissão".Ano, "Categoria de Retenção"] }
          - { region: retencao_escolaridade, type: stackedColumnChart, fields: [Funcionarios.Escolaridade, "Categoria de Retenção"] }
          - { region: matriz_drivers, type: matrix, fields: [Funcionarios.Escolaridade, Funcionarios.Cargo, "Funcionarios.Centro Custo", "Tempo de Retenção (dias)"] }
        space_audit: { unplaced_regions: [], rationale: "4 cortes de retenção em grid 2x2 acima, matriz de drivers ocupando a faixa inferior" }
    - name: "Folha, Absenteísmo & Equidade"
      archetype: Analytical Canvas
      layout_contract:
        grid:
          regions: [header, filters, massa_salarial_trend, horas_normais_extras, absenteismo_mes_causa, leque_salarial, indice_tecnicidade]
        placements:
          - { region: header, type: page_title, text: "Folha, Absenteísmo & Equidade" }
          - { region: filters, type: slicer_group, fields: [Calendario.Ano, Calendario.Mês, Funcionarios.Escolaridade, Funcionarios.Cargo] }
          - { region: massa_salarial_trend, type: areaChart, fields: ["Calendario.Ano-Mês", "Massa Salarial"] }
          - { region: horas_normais_extras, type: clusteredColumnChart, fields: ["Calendario.Ano-Mês", "Horas Normais", "Horas Extras", "% Horas Extras"] }
          - { region: absenteismo_mes_causa, type: comboChart, fields: ["Calendario.Ano-Mês", "% Absenteísmo", "BaseDados.Causa Afastamento", Absenteísmo] }
          - { region: leque_salarial, type: composite_kpi, fields: ["Leque Salarial", Funcionarios.Cargo, Funcionarios.Escolaridade] }
          - { region: indice_tecnicidade, type: composite_kpi, fields: ["Índice de Tecnicidade"] }
        space_audit: { unplaced_regions: [], rationale: "tendências financeiras/horas no topo, absenteísmo no meio, KPIs de equidade/tecnicidade lado a lado no rodapé como par comparável" }
```

## Implementation notes
- Model changes: relacionamento `BaseDados↔Funcionarios`, tabela `Calendario` + feriados +
  hierarquia, correção de tipos (`Data Nascimento`, `Data Afastamento`), colunas calculadas
  (Faixa Etária, Segmento de Turnover, Categoria de Retenção), medidas DAX do glossário —
  conduzir via `power-bi-model-design-review` (arquitetura) e `power-bi-dax-optimization`
  (fórmulas), editando TMDL diretamente (sem MCP nesta sessão)
- PBIR/report authoring: sem `powerbi-report-authoring` instalado — geração/edição de páginas
  será feita manualmente nos arquivos de `People_Analytics_Dashboard.Report/definition/pages`,
  seguindo o layout_contract acima como referência
- Validation: `power-bi-performance-troubleshooting` após o primeiro build, para checar tempo de
  refresh e DAX das medidas mais pesadas (Turnover, Retenção)
- Desktop screenshot verification: manual — abrir o `.pbip` no Power BI Desktop e revisar página
  a página
- Publishing boundary: nenhuma publicação nesta fase
- Riscos:
  - Códigos de `Evento` em `BaseDados` que definem Horas Normais/Extras/Faltas/Atrasos/Atestados
    não estão documentados no case — precisam ser extraídos dos valores distintos de
    `Descrição`/`Tipo` antes de escrever as medidas de folha/absenteísmo
  - Pergunta macro 6 pede "turnover demissional do ano de 2004", mas a base cobre jan–jun/2020 —
    validar se é erro de digitação no case (provavelmente 2020) antes de fechar a medida
  - `Data Nascimento`/`Data Afastamento` como texto podem ter formatos inconsistentes entre os 6
    arquivos de Ficha Financeira — checar antes de converter o tipo
  - Um único relacionamento ativo por vez entre `Calendario` e as datas de `Funcionarios` exige
    `USERELATIONSHIP` nas medidas — checar performance com `power-bi-performance-troubleshooting`
    se o volume de medidas com relacionamento trocado crescer

## Nota de dependências
Esta sessão não tinha `powerbi-modeling-mcp`, `powerbi-report-authoring` nem `powerbi-report-design`
disponíveis — apenas as 4 skills solicitadas (`power-bi-model-design-review`,
`power-bi-dax-optimization`, `power-bi-performance-troubleshooting`, `powerbi-report-planning`).
Por isso, o "Canonical design contract" acima foi montado manualmente pelo planejador (mesma
estrutura mecânica exigida pelo gate: canvas, grid, placements, space_audit por página), e a
implementação será conduzida por edição direta de TMDL/PBIR em vez de chamadas de MCP/skill de
autoria. Se essas skills/MCP forem instaladas depois, revalide este contrato com elas antes de
construir.
