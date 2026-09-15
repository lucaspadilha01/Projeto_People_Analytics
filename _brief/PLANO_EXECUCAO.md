# 📋 Plano de Execução — People Analytics Dashboard

**Status Geral:** 🟡 **40% Concluído** | **Data Atualização:** 2026-09-14

---

## 1️⃣ VISÃO GERAL DO PROGRESSO

### ✅ O QUE JÁ ESTÁ INTEGRADO (40%)

#### A. Modelo Semântico (TMDL) — ✅ 95% PRONTO
- ✅ **Tabela: Funcionarios**
  - Colunas de dimensão: Sexo, Data Admissão, Cargo, Escala, Escolaridade, Faixa Etária, etc.
  - Cálculos derivados: Segmento Turnover, Má Contratação, Tempo de Retenção
  - Status: Estrutura 95% completa, faltam alguns ajustes de formatação

- ✅ **Tabela: BaseDados**
  - Fato de folha e eventos (Remuneração, Horas, Absenteísmo)
  - Categoria de Evento, Valor, Horas
  - Status: Pronta

- ✅ **Tabela: Calendario**
  - Tabela de datas dedicada com derivadas (Ano, Mês, Trimestre, Dia Útil, Feriado)
  - Status: Estruturada e funcional

- ✅ **Relacionamentos**
  - 4 relacionamentos definidos (Funcionarios ↔ BaseDados/Calendario)
  - Status: Ativos e configurados

#### B. Medidas DAX — ✅ 90% PRONTO
Todas 18 medidas canônicas já implementadas:
- ✅ Headcount, Contratações, Demissões
- ✅ Turnover (Ativo, Passivo, Espontâneo, %)
- ✅ Má Contratação (#, %)
- ✅ Massa Salarial, Horas, Absenteísmo, %
- ✅ Leque Salarial, Índice de Tecnicidade
- ✅ Tempo Médio de Retenção

**Observação:** Algumas medidas usam `SUM` em vez de `CALCULATE` com filtros granulares — será refinado na otimização.

#### C. Design System & Tema Visual — ✅ 80% PRONTO
- ✅ Tema customizado `HR_Analytics___People_Analytic5908932345766135.json`
- ✅ Paleta violeta monocromática registrada
- ✅ Base Fluent2-CY26SU08 importada
- Status: Tema aplicado, cores definidasno Power BI Desktop

#### D. Página 1: "Visão Geral" — 🟡 50% IMPLEMENTADA
**Visuals Criados:**
- ✅ Título da página
- ✅ 6 KPI StatTiles: Headcount, Turnover %, Massa Salarial, Absenteísmo %, Contratações, Demissões
- ✅ Gráfico Headcount (linha com tendência)
- ✅ Gráfico Turnover Trend (colunas)
- ✅ Donut Turnover (composição Ativo/Passivo/Espontâneo)
- ✅ Slicers: Ano, Mês

**Faltam Ajustes Críticos:**
- 🔴 KPIs não exibem deltas (variação YoY / MoM)
- 🔴 Layout desalinhado (grid 6 tiles + hero visual 2.05fr : 1fr)
- 🔴 Sem AlertBanner avisos de Turnover crítico
- 🔴 Sem InsightTiles contextuais

---

### ❌ O QUE FALTA (60%)

#### 📄 Páginas 2, 3, 4 — 0% IMPLEMENTADAS
| Página | Objetivo | Visuals Necessários | Status |
|--------|----------|---|---|
| **02. Contratações & Turnover** | Análise macro de entradas/saídas | 5 gráficos + matriz heatmap + slicers | ❌ Não iniciada |
| **03. Retenção & Perfil** | Permanência em 3 categorias + drivers | Grid 2×2 + Heatmap + InsightTiles | ❌ Não iniciada |
| **04. Folha, Absenteísmo & Equidade** | Gestão financeira + equidade salarial | 7 visuals (Linha, Colunas, Gauge, Donut) | ❌ Não iniciada |

#### 🎨 Refinamentos de UX/Design — 20% FEITO
- ❌ Acessibilidade (Razão de Contraste 4.5:1 — verificação formal)
- ❌ Slicers com barra de pesquisa (Cargo, Escolaridade — alta cardinalidade)
- ❌ Responsividade (comportamento em diferentes resoluções)
- ❌ Microcópias e tooltips informativos

#### 🔧 Otimizações de Performance — NÃO INICIADO
- ❌ Query folding em Power Query
- ❌ Agregações em estrela para grandes volumes
- ❌ Cache de medidas lentas (Leque Salarial, Retenção)

---

## 2️⃣ ROADMAP ESTRUTURADO (Prioridade Desempenho)

### **FASE 1: Página 1 — Polish (Dias 1–2) — CRÍTICA**
**Objetivo:** Tornar a página executiva visualmente completa e funcional.

#### Task 1.1: Ajustar KPIs com Deltas
- [ ] Criar medida `[Headcount Período Anterior]` (já existe, precisa ajuste)
- [ ] Criar medida `[Delta Headcount %]` = (Headcount / Anterior) - 1
- [ ] Replicar para Turnover %, Massa Salarial, Absenteísmo %
- [ ] Formatar KPI cards no Power BI com indicador visual de seta (↑↓)

**Exemplo DAX:**
```dax
[Delta Headcount %] = 
VAR Atual = [Headcount]
VAR Anterior = [Headcount Período Anterior]
RETURN DIVIDE(Atual - Anterior, Anterior)
```

#### Task 1.2: Refinar Layout Grid (Responsive Design)
- [ ] Ajustar altura de slicers (100px)
- [ ] Grid de KPIs: 6 tiles em 1 linha (72px cada)
- [ ] Hero visual esquerdo (2.05fr) + Donut direito (1fr) com proporção 16:9
- [ ] Testar em 1920×1080

#### Task 1.3: Adicionar AlertBanner e InsightTiles
- [ ] Criar card com alerta: "⚠️ Turnover espontâneo crítico (3.1% acima da meta)"
- [ ] Criar tile insight: "📊 Más contratações representam 12% das entradas"
- [ ] Posicionar abaixo do Donut (1fr)

#### Task 1.4: Validar Tema & Cores
- [ ] Verificar aplicação do tema `HR_Analytics_Violet` em todos os visuals
- [ ] Confirmar cores:
  - Série 1: `#7A60CA` (violeta 500 — Headcount, Contratações)
  - Série 2: `#9580D4` (violeta 400 — Turnover Passivo)
  - Série 3: `#AF9FDF` (violeta 300 — Turnover Espontâneo)
  - Fundo cards: `#FFFFFF` | Grid: `#F1F1F1`

---

### **FASE 2: Página 2 — Contratações & Turnover (Dias 3–5)**
**Objetivo:** Responder às perguntas macro sobre entradas/saídas.

#### Task 2.1: Criar Slicers Avançados
- [ ] Slicer `Ano` (dropdown padrão: todos)
- [ ] Slicer `Cargo` (dropdown com barra de busca — alta cardinalidade)
- [ ] Slicer `Faixa Etária` (buttons: 18–24, 25–34, ..., 55+)

#### Task 2.2: Linha 1 de Gráficos (Grid 1fr : 1fr : 1.25fr)
- [ ] **Visual 1 — Contratações por Ano (Vertical Bar)**
  - Eixo X: `Calendario[Ano]`
  - Eixo Y: `[Contratações]`
  - Destacar o pico (2019)
  
- [ ] **Visual 2 — Demissões por Faixa Etária (Ranked Bar — Top 10)**
  - Linhas: `Funcionarios[Faixa Etária]`
  - Valores: `[Demissões]` (decrescente)
  - Foco: 25–34 anos (maior concentração)
  
- [ ] **Visual 3 — Turnover Segmentado por Ano (Stacked Bar)**
  - Eixo X: `Calendario[Ano]`
  - Cores empilhadas: Ativo (#7A60CA) + Passivo (#9580D4) + Espontâneo (#AF9FDF)
  - Valores: `[Turnover Ativo]`, `[Passivo]`, `[Espontâneo]`

#### Task 2.3: Linha 2 de Gráficos (Grid 1.62fr : 1fr)
- [ ] **Visual 4 — Matriz de Má Contratação (Esquerda — 1.62fr)**
  - Linhas: `Funcionarios[Cargo]` (top 12)
  - Colunas: `Funcionarios[Faixa Etária]`
  - Valores: `[Má Contratação %]` com mapa de calor (verde → amarelo → vermelho)
  - Format: 0.0%
  
- [ ] **Visual 5 — Evolução Turnover Demissional % (Linha — Direita 1fr)**
  - Eixo X: `Calendario[Ano]`
  - Eixo Y: `[Turnover Demissional %]`
  - Linha destacada em violeta 500

#### Task 2.4: Validar Relacionamentos Dinâmicos
- [ ] Testar filtros cruzados (slicer Cargo → atualiza todos os 5 visuals)
- [ ] Validar REMOVEFILTERS em Calendario se necessário

---

### **FASE 3: Página 3 — Retenção & Perfil (Dias 6–8)**
**Objetivo:** Analisar permanência em 3 categorias e identificar drivers.

#### Task 3.1: Estruturar Grid 2×2 (Esquerdo 2fr)
- [ ] **Visual 1 (Top-Left):** Retenção por `Sexo` (100% Stacked Bar)
- [ ] **Visual 2 (Top-Right):** Retenção por `Faixa Etária` (100% Stacked Bar)
- [ ] **Visual 3 (Bottom-Left):** Retenção por `Ano de Admissão` (100% Stacked Bar)
- [ ] **Visual 4 (Bottom-Right):** Retenção por `Escolaridade` (100% Stacked Bar)

**Cada visual mostrará 3 cores:**
- `< 60 dias`: #CFC4EC (violeta 200)
- `60–365 dias`: #9580D4 (violeta 400)
- `> 365 dias`: #7A60CA (violeta 500)

#### Task 3.2: Bloco de Drivers (Direito 1fr)
- [ ] **Visual 5 (Superior):** Matriz Heatmap
  - Linhas: `Funcionarios[Escolaridade]`
  - Colunas: `Funcionarios[Cargo]` (top 8)
  - Valores: `[Tempo Médio de Retenção (Dias)]` (gradiente violeta)
  
- [ ] **Visuals 6–7 (Inferior):** InsightTiles
  - Tile 1: "📚 **3.4×** Retenção Superior vs. Médio"
  - Tile 2: "⚠️ **18%** saem nos primeiros 60 dias"

#### Task 3.3: Adicionar Slicers Superiores
- [ ] Slicer `Ano de Admissão` (dropdown)
- [ ] Slicer `Sexo` (buttons: M, F, Ambos)
- [ ] Legenda clara das 3 categorias (cores + rótulos)

---

### **FASE 4: Página 4 — Folha, Absenteísmo & Equidade (Dias 9–12)**
**Objetivo:** Gestão financeira + análise de equidade salarial.

#### Task 4.1: Linha 1 — Massa e Horas (Grid 1fr : 1.15fr — Altura 336px)
- [ ] **Visual 1:** Massa Salarial por Mês (Linha/Área)
  - Eixo X: `Calendario[Ano-Mês]` (Jan–Jun 2020)
  - Eixo Y: `[Massa Salarial]` (formato moeda R$)
  - Área preenchida em violeta 500
  
- [ ] **Visual 2:** Horas Normais vs. Extras (Grouped Columns + StatTile)
  - Eixo X: `Calendario[Mês]`
  - Colunas: `[Horas Normais]` (#7A60CA) + `[Horas Extras]` (#9580D4)
  - StatTile integrado: `[% Horas Extras]` (posição superior-direita)

#### Task 4.2: Linha 2 — Absenteísmo (Grid 1fr : 1.15fr — Altura 300px)
- [ ] **Visual 3:** % Absenteísmo por Mês (Vertical Columns)
  - Eixo X: `Calendario[Ano-Mês]`
  - Eixo Y: `[% Absenteísmo]` (formato %)
  - Destacar o menor mês (Junho)
  
- [ ] **Visual 4:** Absenteísmo por Causa (Ranked List)
  - Linhas: `dEvento[Descrição]` (Doença, Atestado, Atraso, Falta Abonada, etc.)
  - Valores lado-a-lado: `[Absenteísmo]` (horas) | `[R$ Absenteísmo]` (valor)
  - Top 8 causas

#### Task 4.3: Linha 3 — Equidade e Qualificação (Grid 1.6fr : 1fr)
- [ ] **Visual 5 (Esquerda 1.6fr):** Leque Salarial
  - Card Hero destacado: **"8.4×"** (múltiplo de dispersão)
  - Texto: "Diferença entre o salário máximo e mínimo"
  - **Visual 5b (Abaixo):** Matriz Cargo × Escolaridade com `[Leque Salarial]` em heatmap
  
- [ ] **Visual 6 (Direita 1fr):** Índice de Tecnicidade (Donut Gauge)
  - Valor central: **"37%"**
  - Label: "% Colaboradores com Superior/Pós-Graduação"
  - Meta sugerida: 40% (mostrar gap de 3%)

#### Task 4.4: Slicers Superiores
- [ ] Slicer `Ano` (dropdown)
- [ ] Slicer `Escolaridade` (multi-select)
- [ ] Slicer `Cargo` (pesquisável)

---

### **FASE 5: Navegação & Refinamentos Globais (Dias 13–14)**

#### Task 5.1: Estruturar Navegação por Abas
- [ ] Criar botões de navegação entre as 4 páginas (style: Transparent com hover)
- [ ] Opção: usar bookmark buttons Power BI
- [ ] Breadcrumb visual (ex: "Home > 02. Contratações")

#### Task 5.2: Validações de Acessibilidade (WCAG AA)
- [ ] Razão de contraste mínima 4.5:1 em todos os textos
  - Violeta 500 (#7A60CA) sobre Branco (#FFFFFF): ✅ 5.23:1
  - Violeta 300 (#AF9FDF) sobre Branco: ⚠️ 2.8:1 (FALHA — usar Violeta 400+ para texto)
- [ ] Adicionar alt-text em todos os visuals
- [ ] Validar com Accessibility Checker do Power BI

#### Task 5.3: Tooltips e Microcópias Informativos
- [ ] Cada KPI: tooltip explicando a fórmula e contexto
  - Exemplo: "Headcount = Colaboradores ativos na data final do período"
- [ ] Alertas com microcópia: "ℹ️ Turnover acima da meta setorial (2.5%)"

#### Task 5.4: Testes de Performance
- [ ] Validar tempos de carregamento (< 3s por página)
- [ ] Verificar query folding em Power Query
- [ ] Se necessário, criar agregações em estrela

#### Task 5.5: Documentação Final
- [ ] Criar guia de uso (`README_Dashboard.md`)
- [ ] Listar todas as medidas com fórmulas
- [ ] Mapa visual: qual pergunta responde qual visual

---

## 3️⃣ DEPENDÊNCIAS E RISCOS

### 🔗 Dependências Entre Fases
```
Fase 1 (Página 1 Polish)
    ↓
Fase 2 (Página 2 — Análise Macro)
    ↓
Fase 3 (Página 3 — Retenção)
    ↓
Fase 4 (Página 4 — Folha & Equidade)
    ↓
Fase 5 (Navegação Global)
```

**Críticas:**
- Todas as medidas devem estar 100% funcionais antes de Fase 2 ✅ (já estão)
- Tema de cores precisa estar definido antes de começar layout (80% feito)

### ⚠️ Riscos Identificados
| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| **Dados inconsistentes** | Média | Alto | Validar volumes em comparação com relatório antigo |
| **Performance em Fase 4** | Baixa | Alto | Criar agregações se heatmap de equidade ficar lento |
| **Acessibilidade não atender WCAG** | Baixa | Médio | Testar contraste com Contrast Checker antes de publicar |
| **Slicers de alta cardinalidade travarem** | Média | Médio | Implementar barra de pesquisa desde Task 2.1 |

---

## 4️⃣ MÉTRICAS DE SUCESSO

✅ **Página 1 completa e funcional** (KPIs com deltas, layout correto, cores aplicadas)
✅ **Página 2 respondendo aos 5 casos macro** (Contratações, Demissões, Turnover segmentado, Má Contratação)
✅ **Página 3 mostrando drivers de retenção** (Grid 2×2 + Heatmap + Insights)
✅ **Página 4 apresentando equidade salarial** (Leque 8.4×, Tecnicidade 37%, Absenteísmo detalhado)
✅ **Navegação fluida** entre as 4 páginas
✅ **Performance < 3s** por página
✅ **WCAG AA** (contraste 4.5:1 mínimo)
✅ **100% rastreabilidade** (cada pergunta → visual correspondente)

---

## 5️⃣ PRÓXIMOS PASSOS IMEDIATOS

### ✋ HOJE (Dia 1 — Fase 1 Task 1.1)
1. [ ] Abrir `People_Analytics_Dashboard.Report` no Power BI Desktop
2. [ ] Criar medidas de delta para KPIs (Headcount, Turnover %, Massa Salarial, Absenteísmo)
3. [ ] Atualizar visual de KPI cards com formatação de seta (↑↓ com cor vermelha/verde)
4. [ ] Commit: "feat: add delta measures and KPI formatting for page 1"

### 🔜 PRÓXIMOS (Dia 2 — Fase 1 Task 1.2–1.4)
1. Ajustar layout grid (responsividade)
2. Adicionar AlertBanner + InsightTiles
3. Validar aplicação de tema + cores

---

**Documento Vivo:** Este plano será atualizado conforme progresso. Próxima revisão: após Fase 1.

