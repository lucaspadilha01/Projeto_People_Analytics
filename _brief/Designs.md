# Especificação Unificada de Relatório & Design — People Analytics (Home Experience)

> **Documento Único Consolidado (Master Specification):** Integração total entre Especificação de Negócio, Arquitetura de Dados, Modelo Semântico TMDL, Fórmulas DAX, Código Power Query M e Design System Visual (FHD 1920×1080).

---

## 1. Identidade e Propósito Executivo

- **Nome do Relatório:** `People_Analytics_Dashboard` (PBIP / TMDL local).
- **Modelo Semântico:** `People_Analytics_Dashboard.SemanticModel` (Star Schema com Fato Folha e Dimensão Colaboradores).
- **Público-Alvo:** Diretoria Executiva da Home Experience.
- **Pergunta Central do Negócio:** *"Como está a saúde do quadro de pessoas em 2020 — quem entra, quem sai, por quê, quanto custa e quem fica?"*
- **Canvas / Formato:** 4 páginas temáticas estruturadas em resolução Full HD 1920×1080 (proporção 16:9).
- **Padrão Visual:** HR Analytics Design System (`design-system/DESIGN.md` / Stitch Standard) com paleta monocromática violeta e tipografia Inter.

---

## 2. Sistema de Design & Tokens Visuais

### 2.1 Rampa Cromática Monocromática (Violet Ramp)
Gráficos e séries seguem uma rampa contínua de violetas para evitar ruído visual e garantir leitura densa e profissional:

| Token | Hex | Papel e Aplicação no Power BI |
|---|---|---|
| `--violet-700` | `#5B43A8` | Violeta profundo; interações ativas e valores máximos |
| `--violet-500` | `#7A60CA` | **Cor de Marca e Série 1** (Contratações, Headcount, Linhas principais) |
| `--violet-400` | `#9580D4` | **Série 2** (Turnover Passivo, faixa 60–365 dias, Horas Extras) |
| `--violet-300` | `#AF9FDF` | **Série 3** (Turnover Espontâneo, faixa >365 dias) |
| `--violet-200` | `#CFC4EC` | **Série 4** (Barras secundárias, faixa <60 dias) |
| `--violet-50` | `#EFECF9` | Fundo de StatTiles ativos, backdrops de gauges e cards |

### 2.2 Superfícies Neutras e Tipografia
- **Fundo do Canvas (`--bg-app`):** `#F1F1F1`
- **Superfície de Cards (`--surface-card`):** `#FFFFFF`
- **Bordas dos Cards (`--border-hairline`):** `1px solid #EAEAEC` com raio de curvatura de `12px` e micro-sombra suave.
- **Linhas de Grade dos Gráficos:** `#DFE0E4` (tracejadas, 1px).
- **Tipografia:** `Inter`
  - Títulos de Página (H2): 24px, Semibold (600), cor `#111218`.
  - Títulos de Visual (H4): 16px, Semibold (600), cor `#111218`.
  - KPI Callout Numérico: 28–32px, Bold (700), cor `#111218` / `#7A60CA`.
  - Subtítulos e Rótulos Secundários: 10–12px, Regular (400), cor `#71727C`.

### 2.3 Semântica de Status e Regras de Layout
- **Status Ok (`#2BA76A` / Fundo `#E4F5EC`):** Retenção elevada, má contratação controlada, turnover em queda.
- **Status Alerta (`#E0812F` / Fundo `#FCEFE2`):** Absenteísmo crescente, volume de horas extras elevado.
- **Status Crítico (`#DC5B54` / Fundo `#FBE9E8`):** Turnover espontâneo elevado, pedidos de demissão, saídas precoces.
- **Regra de 1 Hero Card por Tela:** Cada página possui apenas 1 visual de destaque principal em violeta; os demais cards mantêm superfícies neutras brancas.
- **Acessibilidade:** Razão de contraste mínima de 4.5:1 (WCAG AA) e suporte a slicers com barra de pesquisa para alta cardinalidade.

---

## 3. Blueprint e Anatomia Visual das 4 Páginas

```
======================================================================================================
HEADER GLOBAL: Logo Mark NexaFlow | People Analytics — Home Experience | Navegação por Abas | Slicers
======================================================================================================
[01. Visão Geral]  |  [02. Contratações & Turnover]  |  [03. Retenção & Perfil]  |  [04. Folha & Equidade]
======================================================================================================
```

---

### Página 01: Visão Geral (Executive Summary)
- **Objetivo:** Ponto de entrada executivo com KPIs de topo, tendência mensal de quadro e turnover, e composição das saídas.
- **Grid do Canvas (1920×1080):**
  1. **Faixa Superior (Header + Filtros):** Título + Slicers `Ano` (padrão 2020) e `Mês` (padrão Todos).
  2. **Faixa de KPIs (Grid 6 StatTiles — Altura 72px):**
     - `[Headcount]` (`389`, delta `-5,6%`)
     - `[Turnover Demissional %]` (`3,1%`, delta `-0,5 p.p.`)
     - `[Massa Salarial]` (`R$ 3,64 mi`, delta `-1,9%`)
     - `[% Absenteísmo]` (`2,9%`, delta `-0,5 p.p.`)
     - `[Contratações]` (`74`, delta `+12`)
     - `[Demissões]` (`97`, delta `+9`)
  3. **Corpo Principal (Grid 2.05fr : 1fr):**
     - **Esquerda (Hero Visual — 2.05fr):** Gráfico desacoplado com Linha de `[Headcount]` (Jan–Jun) no topo e Colunas de `[Turnover Demissional %]` abaixo + Banner de Alerta (`AlertBanner tone: warn`).
     - **Direita (Composição de Saídas — 1fr):** Gráfico de Rosca (`SegmentDonut`) com `[Turnover Ativo]` (96), `[Turnover Passivo]` (78) e `[Turnover Espontâneo]` (59) + 2 `InsightTiles` (Turnover Espontâneo crítico e Má Contratação).

---

### Página 02: Contratações & Turnover (Analytical Canvas)
- **Objetivo:** Responder às perguntas macro de entradas e saídas, sazonalidade de contratações, demissões por idade e matriz de má contratação.
- **Grid do Canvas (1920×1080):**
  1. **Faixa Superior de Filtros:** Slicers `Ano`, `Cargo` (pesquisável) e `Faixa Etária`.
  2. **Linha 1 de Gráficos (Grid 1fr : 1fr : 1.25fr — Altura 340px):**
     - **Contratações por Ano (BarChart Vertical):** `[Contratações]` por `Calendario[Ano]` com destaque para o ano de pico (`2019`).
     - **Demissões por Faixa Etária (RankedBarList):** `[Demissões]` por `Funcionarios[Faixa Etária]` (`25–34 anos` concentra maior volume).
     - **Turnover Segmentado por Ano (StackedBarChart):** `[Turnover Ativo]`, `[Passivo]`, `[Espontâneo]` empilhados por ano.
  3. **Linha 2 de Gráficos (Grid 1.62fr : 1fr):**
     - **Matriz de Má Contratação (Esquerda — 1.62fr):** Linhas `Funcionarios[Cargo]` x Colunas `Funcionarios[Faixa Etária]` com valores `[Má Contratação #]` e `[Má Contratação %]` formatados com mapa de calor.
     - **Evolução do Turnover Demissional (Direita — 1fr):** Gráfico de Linha de `[Turnover Demissional %]` por ano.

---

### Página 03: Retenção & Perfil (Analytical Canvas)
- **Objetivo:** Analisar a permanência no quadro em 3 categorias (`< 60 dias`, `60–365 dias`, `> 365 dias`) e identificar os drivers de retenção.
- **Grid do Canvas (1920×1080):**
  1. **Faixa Superior de Filtros:** Legenda das 3 categorias de retenção + Slicers `Ano de Admissão` e `Sexo`.
  2. **Bloco Esquerdo (Grid 2×2 — 2fr):**
     - Top-Left: Retenção por `Funcionarios[Sexo]` (Barras 100% empilhadas).
     - Top-Right: Retenção por `Funcionarios[Faixa Etária]` (Barras 100% empilhadas).
     - Bottom-Left: Retenção por `Calendario[Ano]` de admissão (Barras 100% empilhadas).
     - Bottom-Right: Retenção por `Funcionarios[Escolaridade]` (Barras 100% empilhadas).
  3. **Bloco Direito (Drivers & Insights — 1fr):**
     - **Matriz de Drivers (Superior):** Cruzamento de Escolaridade x Cargo x Centro de Custo com valor `[Tempo de Retenção (dias)]` em gradiente violeta.
     - **Insight Tiles (Inferior):** Destaque de Escolaridade como driver principal (retenção 3,4× maior no nível Superior) e taxa de perda precoce (<60 dias).

---

### Página 04: Folha, Absenteísmo & Equidade (Analytical Canvas)
- **Objetivo:** Gestão financeira de pessoal, custos de horas normais/extras, análise de faltas/atestados, equidade salarial e índice de tecnicidade.
- **Grid do Canvas (1920×1080):**
  1. **Faixa Superior de Filtros:** Slicers `Ano`, `Escolaridade` e `Cargo` (pesquisável).
  2. **Linha 1 — Massa e Horas (Grid 1fr : 1.15fr — Altura 336px):**
     - **Massa Salarial por Mês:** Linha / Área de `[Massa Salarial]` mensal (`Calendario[Ano-Mês]`).
     - **Horas Normais vs. Horas Extras:** Colunas agrupadas com `[Horas Normais]` e `[Horas Extras]` + StatTile integrado `% Horas Extras`.
  3. **Linha 2 — Absenteísmo (Grid 1fr : 1.15fr — Altura 300px):**
     - **% Absenteísmo por Mês:** Gráfico de Colunas verticais de `[% Absenteísmo]` destacando o menor mês (`Junho`).
     - **Absenteísmo por Causa:** Lista ranqueada de `[Absenteísmo]` e `[R$ Absenteísmo]` por `dEvento[Descrição]`.
  4. **Linha 3 — Equidade e Qualificação (Grid 1.6fr : 1fr):**
     - **Leque Salarial (Esquerda):** Card Hero com o múltiplo de dispersão `8,4×` + Matriz por Cargo/Escolaridade.
     - **Índice de Tecnicidade (Direita):** Donut Gauge de `37%` com texto contextual da proporção de colaboradores qualificados.

---

## 4. Arquitetura do Modelo Semântico & Relacionamentos

```
                    +--------------------+
                    |     dFeriados      | (Power Query M)
                    +---------+----------+
                              |
                              v
                    +---------+----------+
                    |    Calendario      | (Tabela de Datas Dedicada)
                    +----+----------+----+
                         |          |
         (1:* Inativo)   |          | (1:* Ativo)
                         |          v
                         |   +--------------------+
                         |   |     BaseDados      | (Fato Folha & Eventos: Jan–Jun 2020)
                         |   +----------+---------+
                         v              | (*:1 Ativo)
                    +----+--------------+----+
                    |      Funcionarios      | (Dimensão Colaboradores)
                    +------------------------+
```

### Relacionamentos Físicos
1. `BaseDados[Matricula]` `*` ─── `1` `Funcionarios[Cód Funcionário]` (Filtro Cruzado: Direção Única).
2. `Calendario[Data]` `1` ─── `*` `BaseDados[Mês Pag.]` (**Ativo** — eixo temporal da folha e absenteísmo).
3. `Calendario[Data]` `1` ─── `*` `Funcionarios[Data Admissão]` (**Inativo**, ativado via `USERELATIONSHIP`).
4. `Calendario[Data]` `1` ─── `*` `Funcionarios[Data Afastamento]` (**Inativo**, ativado via `USERELATIONSHIP`).

---

## 5. Código Power Query M: Tabela de Feriados Nacionais (`dFeriados`)

```powerquery
let
    AnoInicial = 2015,
    AnoFinal   = 2035,

    // Algoritmo de Meeus/Jones/Butcher para Páscoa
    Pascoa = (ano as number) as date =>
        let
            a = Number.Mod(ano, 19),
            b = Number.IntegerDivide(ano, 100),
            c = Number.Mod(ano, 100),
            d = Number.IntegerDivide(b, 4),
            e = Number.Mod(b, 4),
            f = Number.IntegerDivide(b + 8, 25),
            g = Number.IntegerDivide(b - f + 1, 3),
            h = Number.Mod(19 * a + b - d - g + 15, 30),
            i = Number.IntegerDivide(c, 4),
            k = Number.Mod(c, 4),
            l = Number.Mod(32 + 2 * e + 2 * i - h - k, 7),
            m = Number.IntegerDivide(a + 11 * h + 22 * l, 451),
            s = h + l - 7 * m + 114,
            mes = Number.IntegerDivide(s, 31),
            dia = Number.Mod(s, 31) + 1
        in
            #date(ano, mes, dia),

    FeriadosDoAno = (ano as number) as list =>
        let
            p = Pascoa(ano),
            fixos = {
                [Data = #date(ano, 1, 1),   Feriado = "Confraternização Universal", Tipo = "Fixo"],
                [Data = #date(ano, 4, 21),  Feriado = "Tiradentes",                 Tipo = "Fixo"],
                [Data = #date(ano, 5, 1),   Feriado = "Dia do Trabalho",            Tipo = "Fixo"],
                [Data = #date(ano, 9, 7),   Feriado = "Independência",              Tipo = "Fixo"],
                [Data = #date(ano, 10, 12), Feriado = "Nossa Senhora Aparecida",    Tipo = "Fixo"],
                [Data = #date(ano, 11, 2),  Feriado = "Finados",                    Tipo = "Fixo"],
                [Data = #date(ano, 11, 15), Feriado = "Proclamação da República",   Tipo = "Fixo"],
                [Data = #date(ano, 12, 25), Feriado = "Natal",                      Tipo = "Fixo"]
            },
            consciencia =
                if ano >= 2024
                then { [Data = #date(ano, 11, 20), Feriado = "Consciência Negra", Tipo = "Fixo"] }
                else {},
            moveis = {
                [Data = Date.AddDays(p, -48), Feriado = "Carnaval (segunda)",   Tipo = "Móvel"],
                [Data = Date.AddDays(p, -47), Feriado = "Carnaval",             Tipo = "Móvel"],
                [Data = Date.AddDays(p, -46), Feriado = "Quarta-feira de Cinzas", Tipo = "Móvel"],
                [Data = Date.AddDays(p, -2),  Feriado = "Sexta-feira Santa",    Tipo = "Móvel"],
                [Data = p,                    Feriado = "Páscoa",               Tipo = "Móvel"],
                [Data = Date.AddDays(p, 60),  Feriado = "Corpus Christi",       Tipo = "Móvel"]
            }
        in
            fixos & consciencia & moveis,

    Anos     = List.Numbers(AnoInicial, AnoFinal - AnoInicial + 1),
    Todos    = List.Combine(List.Transform(Anos, each FeriadosDoAno(_))),
    Tabela   = Table.FromRecords(Todos),
    Tipada   = Table.TransformColumnTypes(Tabela, {{"Data", type date}, {"Feriado", type text}, {"Tipo", type text}}),
    Ordenada = Table.Sort(Tipada, {{"Data", Order.Ascending}})
in
    Ordenada
```

---

## 6. Fórmulas DAX Canônicas do Modelo

### 6.1 Tabela Calculada: `Calendario`
```dax
Calendario =
VAR _min = MINX ( BaseDados, BaseDados[Mês Pag.] )
VAR _max = MAXX ( BaseDados, BaseDados[Mês Pag.] )
VAR _inicio = DATE ( YEAR ( MIN ( _min, MINX ( Funcionarios, Funcionarios[Data Admissão] ) ) ), 1, 1 )
VAR _fim    = DATE ( YEAR ( _max ), 12, 31 )
RETURN
ADDCOLUMNS (
    CALENDAR ( _inicio, _fim ),
    "Ano",           YEAR ( [Date] ),
    "Nº Mês",        MONTH ( [Date] ),
    "Mês",           FORMAT ( [Date], "mmm", "pt-BR" ),
    "Mês Completo",  FORMAT ( [Date], "mmmm", "pt-BR" ),
    "Ano-Mês",       FORMAT ( [Date], "yyyy-mm" ),
    "Ano-Mês Label", FORMAT ( [Date], "mmm/yy", "pt-BR" ),
    "Trimestre",     "T" & QUARTER ( [Date] ),
    "Nº Dia Semana", WEEKDAY ( [Date], 2 ),
    "Dia Semana",    FORMAT ( [Date], "ddd", "pt-BR" ),
    "Fim de Semana", WEEKDAY ( [Date], 2 ) > 5,
    "É Feriado",     NOT ISBLANK ( LOOKUPVALUE ( dFeriados[Data], dFeriados[Data], [Date] ) ),
    "Dia Útil",
        WEEKDAY ( [Date], 2 ) <= 5
            && ISBLANK ( LOOKUPVALUE ( dFeriados[Data], dFeriados[Data], [Date] ) )
)
```

---

### 6.2 Colunas Calculadas em `Funcionarios`
```dax
Funcionarios[Faixa Etária] =
VAR _idade = DATEDIFF ( Funcionarios[Data Nascimento], TODAY (), YEAR )
RETURN
SWITCH (
    TRUE (),
    ISBLANK ( Funcionarios[Data Nascimento] ), "Não informado",
    _idade < 25, "18–24 anos",
    _idade < 35, "25–34 anos",
    _idade < 45, "35–44 anos",
    _idade < 55, "45–54 anos",
    "55+ anos"
)

Funcionarios[Nº Faixa Etária] =
SWITCH (
    Funcionarios[Faixa Etária],
    "18–24 anos", 1, "25–34 anos", 2, "35–44 anos", 3,
    "45–54 anos", 4, "55+ anos", 5, 9
)

Funcionarios[Tempo de Retenção (dias)] =
DATEDIFF (
    Funcionarios[Data Admissão],
    COALESCE ( Funcionarios[Data Afastamento], TODAY () ),
    DAY
)

Funcionarios[Categoria de Retenção] =
SWITCH (
    TRUE (),
    Funcionarios[Tempo de Retenção (dias)] < 60,   "< 60 dias",
    Funcionarios[Tempo de Retenção (dias)] <= 365, "60–365 dias",
    "> 365 dias"
)

Funcionarios[Nº Categoria de Retenção] =
SWITCH (
    Funcionarios[Categoria de Retenção],
    "< 60 dias", 1, "60–365 dias", 2, "> 365 dias", 3
)

Funcionarios[Segmento de Turnover] =
SWITCH (
    TRUE (),
    ISBLANK ( Funcionarios[Data Afastamento] ), "Ativo no quadro",
    Funcionarios[Cód Causa Afastamento] IN { 3, 4, 14 }, "Ativo",
    Funcionarios[Cód Causa Afastamento] IN { 1, 2, 13 }, "Passivo",
    "Espontâneo"
)

Funcionarios[É Cargo Gestão] =
VAR _cargo = LOWER ( Funcionarios[Cargo] )
RETURN
    CONTAINSSTRING ( _cargo, "gerente" )
        || CONTAINSSTRING ( _cargo, "diretor" )
        || CONTAINSSTRING ( _cargo, "coordenador" )
        || CONTAINSSTRING ( _cargo, "supervisor" )
        || CONTAINSSTRING ( _cargo, "líder" )
        || CONTAINSSTRING ( _cargo, "lider" )
        || CONTAINSSTRING ( _cargo, "gestor" )

Funcionarios[É Cargo Técnico] =
Funcionarios[Escolaridade] IN { "Superior", "Pós-graduação" }
```

---

### 6.3 Medidas do Quadro de Pessoal e Movimentação
```dax
Contratações =
CALCULATE (
    COUNTROWS ( Funcionarios ),
    USERELATIONSHIP ( Calendario[Data], Funcionarios[Data Admissão] )
)

Demissões =
CALCULATE (
    COUNTROWS ( Funcionarios ),
    USERELATIONSHIP ( Calendario[Data], Funcionarios[Data Afastamento] )
)

Headcount =
VAR _fim = MAX ( Calendario[Data] )
RETURN
CALCULATE (
    COUNTROWS ( Funcionarios ),
    REMOVEFILTERS ( Calendario ),
    Funcionarios[Data Admissão] <= _fim,
    ISBLANK ( Funcionarios[Data Afastamento] ) || Funcionarios[Data Afastamento] > _fim
)

Headcount Médio =
AVERAGEX ( VALUES ( Calendario[Ano-Mês] ), [Headcount] )

Turnover Ativo      = CALCULATE ( [Demissões], Funcionarios[Segmento de Turnover] = "Ativo" )
Turnover Passivo    = CALCULATE ( [Demissões], Funcionarios[Segmento de Turnover] = "Passivo" )
Turnover Espontâneo = CALCULATE ( [Demissões], Funcionarios[Segmento de Turnover] = "Espontâneo" )

Turnover Demissional % =
DIVIDE ( [Turnover Ativo], [Headcount Médio] )

Má Contratação # =
CALCULATE ( [Demissões], Funcionarios[Categoria de Retenção] = "< 60 dias" )

Má Contratação % =
DIVIDE ( [Má Contratação #], [Contratações] )

Tempo de Retenção (dias) =
AVERAGE ( Funcionarios[Tempo de Retenção (dias)] )
```

---

### 6.4 Medidas de Folha, Horas e Absenteísmo
```dax
Massa Salarial =
CALCULATE ( SUM ( BaseDados[Valor] ), dEvento[Grupo] = "Remuneração" )

Horas Normais =
CALCULATE ( SUM ( BaseDados[Horas] ), dEvento[Categoria] = "Horas Normais" )

Horas Extras =
CALCULATE ( SUM ( BaseDados[Horas] ), dEvento[Categoria] = "Horas Extras" )

% Horas Extras =
DIVIDE ( [Horas Extras], [Horas Normais] + [Horas Extras] )

Absenteísmo =
CALCULATE ( SUM ( BaseDados[Horas] ), dEvento[Grupo] = "Absenteísmo" )

R$ Absenteísmo =
CALCULATE ( SUM ( BaseDados[Valor] ), dEvento[Grupo] = "Absenteísmo" )

% Absenteísmo =
DIVIDE ( [Absenteísmo], [Horas Normais] + [Absenteísmo] )
```

---

### 6.5 Medidas de Equidade e Qualificação
```dax
Leque Salarial =
VAR _maior = MAX ( Funcionarios[Salário] )
VAR _menor = MIN ( Funcionarios[Salário] )
RETURN
DIVIDE ( _maior, _menor )

Salário Médio = AVERAGE ( Funcionarios[Salário] )

Massa Salarial de Gestores =
CALCULATE (
    [Massa Salarial],
    Funcionarios[É Cargo Gestão] = TRUE ()
)

Índice de Tecnicidade =
VAR _fim = MAX ( Calendario[Data] )
VAR _tecnicos =
    CALCULATE (
        COUNTROWS ( Funcionarios ),
        REMOVEFILTERS ( Calendario ),
        Funcionarios[É Cargo Técnico] = TRUE (),
        Funcionarios[Data Admissão] <= _fim,
        ISBLANK ( Funcionarios[Data Afastamento] ) || Funcionarios[Data Afastamento] > _fim
    )
RETURN
DIVIDE ( _tecnicos, [Headcount] )
```

---

## 7. Matriz Completa de Rastreabilidade do Case

| Pergunta do Case | Descrição / Fórmula | Página no Dashboard | Visual & Medidas no Power BI |
|---|---|---|---|
| **Macro 1** | Ano com maior quantidade de contratações? | **02. Contratações & Turnover** | Colunas de `[Contratações]` por `Calendario[Ano]` |
| **Macro 2** | Faixa etária com maior quantidade de demissões? | **02. Contratações & Turnover** | Lista ranqueada de `[Demissões]` por `Funcionarios[Faixa Etária]` |
| **Macro 3** | Headcount aumentou ou diminuiu (2019 vs 2020)? | **01. Visão Geral / 02** | StatTile e Gráfico de `[Headcount]` filtrado por ano |
| **Macro 4** | Quantas más contratações para cargo de gestor? | **02. Contratações & Turnover** | Matriz `[Má Contratação #]` com `Funcionarios[É Cargo Gestão] = TRUE` |
| **Macro 5** | % más contratações na faixa de 45–54 anos? | **02. Contratações & Turnover** | Matriz `[Má Contratação %]` na coluna `45–54 anos` |
| **Macro 6** | % turnover demissional de 2004 / histórico? | **02. Contratações & Turnover** | Linha de `[Turnover Demissional %]` dinâmico por `Calendario[Ano]` |
| **Macro 7** | Massa salarial dos gestores com superior completo? | **04. Folha & Equidade** | `[Massa Salarial de Gestores]` com filtro `Escolaridade = "Superior"` |
| **Macro 8** | Valor total gasto com absenteísmo? | **04. Folha & Equidade** | StatTile e Card `[R$ Absenteísmo]` |
| **Macro 9** | Maior causa do absenteísmo? | **04. Folha & Equidade** | Lista ranqueada de `[Absenteísmo]` por `dEvento[Descrição]` |
| **Macro 10** | Mês com menor % de absenteísmo e seu valor? | **04. Folha & Equidade** | Colunas de `[% Absenteísmo]` por `Calendario[Ano-Mês]` |
| **Macro 11** | Valor total e % de hora extra com ensino médio? | **04. Folha & Equidade** | StatTile `[Horas Extras]` e `[% Horas Extras]` com `Escolaridade = "Médio"` |
| **Extra 1** | Turnover segmentado (Ativo, Passivo, Espontâneo)? | **01. Visão Geral / 02** | Rosca `[Turnover Ativo/Passivo/Espontâneo]` e Colunas Empilhadas |
| **Extra 2** | Retenção em 3 faixas (<60d, 60–365d, >365d)? | **03. Retenção & Perfil** | Grid 2×2 de Colunas 100% empilhadas por Sexo, Idade, Ano e Escolaridade |
| **Extra 3** | Avaliar o que influencia a retenção por mais tempo? | **03. Retenção & Perfil** | Matriz Heatmap de `[Tempo de Retenção (dias)]` por Cargo e Escolaridade |
| **Extra 4** | Cálculo do leque salarial para equidade? | **04. Folha & Equidade** | Card Hero `[Leque Salarial]` (`8,4×`) + Matriz por Cargo |
| **Extra 5** | Avaliar investimento em qualificação (Tecnicidade)? | **04. Folha & Equidade** | Donut Gauge `[Índice de Tecnicidade]` (`37%`) |
