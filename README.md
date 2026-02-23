# minions-crm-pipeline

**Deal stages, transitions, revenue forecasts, and win/loss tracking**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-crm-pipeline/sdk minions-sdk

# Python
pip install minions-crm-pipeline

# CLI (global)
npm install -g @minions-crm-pipeline/cli
```

---

## CLI

```bash
# Show help
crm-pipeline --help
```

---

## Python SDK

```python
from minions_crm_pipeline import create_client

client = create_client()
```

---

## Project Structure

```
minions-crm-pipeline/
  packages/
    core/           # TypeScript core library (@minions-crm-pipeline/sdk on npm)
    python/         # Python SDK (minions-crm-pipeline on PyPI)
    cli/            # CLI tool (@minions-crm-pipeline/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [crm-pipeline.minions.help](https://crm-pipeline.minions.help)
- Blog: [crm-pipeline.minions.blog](https://crm-pipeline.minions.blog)
- App: [crm-pipeline.minions.wtf](https://crm-pipeline.minions.wtf)

---

## License

[MIT](LICENSE)
