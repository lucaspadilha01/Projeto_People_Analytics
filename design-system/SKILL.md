---
name: hr-analytics-design
description: Use this skill to generate well-branded interfaces and assets for HR Analytics, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# HR Analytics Design System Skill

When building or styling HR Analytics / People Analytics components, dashboards, or reports:

1. **Tokens & Specifications:** Always adhere to `design-system/DESIGN.md` (Google Labs / Stitch standard) and `design-system/styles.css`.
2. **Components:** Import canonical React components from `design-system/index.js` or `design-system/components/`.
3. **Colors:** Use the violet ramp (`--violet-500: #7A60CA`) and semantic aliases. Charts MUST follow violet-on-violet `--series-1...4`.
4. **Visual References:** Reference visual specimens located in `design-system/reference/index.html`.
5. **Linting:** Respect rules defined in `.oxlintrc.json`.
