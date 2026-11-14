---
name: ask-before-assuming
description: Enforces zero-hallucination and mandatory clarification before guessing any unclear UI, business logic, data, or architectural requirement in this repository.
---

# Ask Before Assuming (Zero Hallucination Skill)

When working on `d:\myProjects\demos`:

1. **Never Guess Unspecified Requirements**:
   - If a requirement around UI layout, user flow, security behavior, copy, or architecture is ambiguous or has multiple valid interpretations, STOP before writing implementation code.
   - Use `ask_question` (for structured choices) or ask directly in concise prose so the user makes the final decision.
2. **Never Invent Business Terms or Facts**:
   - Do not fabricate agency commissions, partner percentages, internal commercial pricing, or unverified features.
   - Stick strictly to `AGENTS.md`, `ROADMAP.md`, and explicitly confirmed user answers.
3. **Verify Codebase Reality Before Designing**:
   - Always read the actual files and config (`tsconfig.json`, `package.json`, existing modules) before proposing or writing code.
4. **Confirm Before Irreversible or Scope-Expanding Changes**:
   - Never run `git commit` or `git push` automatically.
   - Never add unrequested dependencies or modify unrelated steps.
