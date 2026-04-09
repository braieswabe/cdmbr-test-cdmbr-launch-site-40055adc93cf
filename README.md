# Dudex Projects Template

Baseline Next.js template used by OpenClaw deterministic executions.

## Purpose

This repository is the source template for GitHub `generate` calls configured in OpenClaw.
Generated projects are created from this repository and then updated with execution-specific code.

## Local Run

```bash
npm install
npm run dev
```

## Build Check

```bash
npm run build
```

## Notes

- Uses Next.js App Router + TypeScript.
- Includes minimal defaults to keep template-generated repositories runnable.
- OpenClaw may overwrite files during deterministic execution commits.
