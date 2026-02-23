---
title: Quick Start
description: Get up and running with Minions Crm-pipeline in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-crm-pipeline/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_crm_pipeline import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
crm-pipeline info
```
