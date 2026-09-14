# Regras de Negócio — People Analytics Dashboard (Home Experience)

> **Este arquivo é o Root do projeto.** Toda evolução do modelo semântico, das medidas DAX e
> dos relatórios deve partir das regras, definições e perguntas descritas aqui. Ao iniciar
> qualquer sessão de trabalho no Power BI (modelagem, otimização de DAX, troubleshooting de
> performance ou planejamento de relatório), leia este arquivo primeiro — ele é a fonte da
> verdade que substitui a leitura solta do Case que iremos passar.

## Como este arquivo é usado

O trabalho no modelo é conduzido com 4 skills de Power BI + MCP conectado ao Power BI Desktop:

| Skill | Quando usar | O que deve respeitar deste arquivo |
|---|---|---|
| `powerbi-report-planning` | Definir objetivo de negócio, escopo de páginas e specs do relatório antes de construir | Seção "Perguntas de Análise" (Macro + Extras) e "Objetivo de Negócio" |
| `power-bi-model-design-review` | Revisar arquitetura do modelo (relacionamentos, star schema, granularidade) | Seção "Fontes de Dados" e "Estado Atual do Modelo" |
| `power-bi-dax-optimization` | Escrever/otimizar medidas DAX | Seção "Glossário de Métricas" — fórmulas exatas, sem reinterpretação |
| `power-bi-performance-troubleshooting` | Diagnosticar lentidão de visuais, relatório ou refresh | Seção "Estado Atual do Modelo" |



---


## Referências

- Visão geral do repositório: `README.md`
- Modelo semântico: `People_Analytics_Dashboard.SemanticModel/definition/`
