# Projeto People Analytics — Home Experience & HR Analytics Design System

[![Power BI](https://img.shields.io/badge/Power_BI-PBIP_%7C_PBIX-F2C811?logo=powerbi&logoColor=black)](https://powerbi.microsoft.com/)
[![Design System](https://img.shields.io/badge/Design_System-Google_Labs_%2F_Stitch-7A60CA)](file:///c:/Users/lucas/OneDrive/%C3%81rea%20de%20Trabalho/Analise_dados_google_MD/Projeto_People_Analytics/design-system/DESIGN.md)
[![Tokens](https://img.shields.io/badge/Tokens-CSS3_Variables-6A4FD8)](file:///c:/Users/lucas/OneDrive/%C3%81rea%20de%20Trabalho/Analise_dados_google_MD/Projeto_People_Analytics/design-system/styles.css)
[![React](https://img.shields.io/badge/Components-React_18_%7C_TypeScript-61DAFB?logo=react&logoColor=black)](file:///c:/Users/lucas/OneDrive/%C3%81rea%20de%20Trabalho/Analise_dados_google_MD/Projeto_People_Analytics/design-system/index.js)

Repositório unificado de inteligência de dados em Recursos Humanos para a **Home Experience**, combinando modelagem analítica avançada no **Power BI (PBIP/TMDL)** e o pacote completo do **HR Analytics Design System** estruturado no padrão Google Labs / Stitch.

---

## 🏢 Visão Geral do Projeto & Caso de Negócio

A **Home Experience** é uma empresa de médio porte no setor imobiliário (com sede em São Paulo e fábrica no distrito industrial paulista), contando com 249 colaboradores. 

O objetivo do projeto é monitorar e diagnosticar os indicadores de gestão de pessoas através de dados extraídos do ERP:
- **Headcount & Rotatividade:** Contratações, demissões (segmentadas em turnover ativo, passivo e espontâneo) e taxa de turnover demissional.
- **Retenção de Talentos & Má Contratação:** Mapeamento de retenção (< 60 dias, 60–365 dias, > 365 dias) e diagnóstico de turnover precoce.
- **Folha de Pagamento & Horas:** Análise da massa salarial, valor de horas normais e horas extras por escolaridade/departamento.
- **Absenteísmo:** Impacto financeiro e causal de faltas, atrasos e atestados médicos.
- **Equidade Salarial & Tecnicidade:** Cálculo de leque salarial e índice de qualificação superior do quadro.

---

## 📂 Estrutura do Repositório

```
Projeto_People_Analytics/
├── .oxlintrc.json                              # Regras de aderência e lint do Design System
├── README.md                                   # Documentação geral do repositório
│
├── BaseDados/                                  # Dados brutos extraídos do ERP
│   ├── Ficha Financeira 01.2020 a 06.2020.csv  # Folha de pagamento e eventos mensais
│   └── Funcionarios.xlsx                       # Cadastro de colaboradores, cargos e admissões
│
├── People_Analytics_Dashboard.pbip             # Power BI Project (Developer Mode)
├── People_Analytics_Dashboard.pbix             # Power BI Desktop Dashboard
├── People_Analytics_Dashboard.Report/          # Definições visuais e layout das páginas PBIP
├── People_Analytics_Dashboard.SemanticModel/   # Modelo semântico TMDL (medidas DAX e tabelas)
│
├── design-system/                              # HR Analytics Design System canônico
│   ├── DESIGN.md                               # Especificação canônica dos tokens (Stitch standard)
│   ├── README.md                               # Guia completo de uso do Design System
│   ├── SKILL.md                                # Metadados de skill do assistente
│   ├── styles.css                              # Ponto de entrada de todos os tokens CSS
│   ├── index.js                                # Export central de todos os 30 componentes React
│   ├── index.d.ts                              # Declarações e contratos de tipos TypeScript
│   ├── .oxlintrc.json                          # Configuração de lint de aderência
│   ├── tokens/                                 # Tokens CSS (cores, tipografia, grid, motion, etc.)
│   ├── assets/                                 # Logos vetorizados recoloridos e fotos do sistema
│   ├── components/                             # 30 componentes React organizados por domínio
│   ├── ui_kits/                                # Telas montadas (desktop web app e mobile)
│   ├── templates/                              # Template de dashboard analítico
│   └── reference/                              # Hub de referência visual navegável (HTMLs)
│       └── index.html                          # Abrir no navegador para inspeção interativa
│
├── People Analytics com Análises Avançadas/    # Material complementar de estudos e desafio
│   ├── Desafio/                                # Especificação do desafio e E-book
│   └── Solução/                                # Notebooks Python, scripts de Churn e PBIX
│
└── _Prompts/                                   # Prompts de engenharia e regras de negócio
    ├── BussinesCase.txt                        # Descritivo completo das regras e fórmulas
    └── Prompt_transormar designs system.txt    # Diretrizes de organização e triagem
```

---

## 🎨 HR Analytics Design System

O repositório inclui um Design System completo com identidade visual violeta (`--violet-500: #7A60CA`), superfícies nítidas, tipografia `Inter` e hierarquia visual **violet-on-violet** para visualização de dados (sem gráficos estilo arco-íris).

### Importação Rápida

#### CSS Tokens:
```css
@import './design-system/styles.css';
```

#### Componentes React:
```jsx
import {
  Button,
  Card,
  DonutGauge,
  StatTile,
  SidebarNav,
  TopBar,
  Icon
} from './design-system';
```

### Visual Reference Hub
Para visualizar e testar interativamente todos os 30 componentes, 21 espécimes de tokens e 4 aplicações sem necessidade de build:
- Abra [`design-system/reference/index.html`](file:///c:/Users/lucas/OneDrive/%C3%81rea%20de%20Trabalho/Analise_dados_google_MD/Projeto_People_Analytics/design-system/reference/index.html) diretamente em qualquer navegador.

---

## 📊 Modelo Semântico e Fórmulas de Negócio (Power BI)

O modelo analítico contido em `People_Analytics_Dashboard.SemanticModel` implementa as principais métricas de People Analytics:

- **Headcount:** $\text{Headcount Ativo} = \text{Contagem de funcionários com status ativo no período}$
- **Turnover Demissional:** $\text{Turnover} = \frac{\text{Demissões no Período}}{\text{Headcount do Período Anterior}}$
- **Segmentação do Turnover:**
  - *Ativo:* Códigos 3, 4 e 14
  - *Passivo:* Códigos 1, 2 e 13
  - *Espontâneo:* Demais códigos de demissão
- **Má Contratação (Early Turnover):** Demissões com tempo de casa $< 60\text{ dias}$.
- **% Horas Extras:** $\frac{\text{Valor Horas Extras}}{\text{Valor Horas Normais}}$
- **% Absenteísmo:** $\frac{\text{Faltas} + \text{Atrasos} + \text{Atestados}}{\text{Valor Horas Normais}}$
- **Leque Salarial:** $\frac{\text{Maior Salário}}{\text{Menor Salário}}$
- **Índice de Tecnicidade:** $\frac{\text{Colaboradores com Ensino Superior Completo}}{\text{Total de Colaboradores}}$
