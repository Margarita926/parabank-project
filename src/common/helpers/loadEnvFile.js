import fs from 'fs';
import path from 'path';

const DEFAULT_BASE_URL = 'https://parabank.parasoft.com';

function parseEnvFile(content) {
  const values = {};
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    const unquotedValue = rawValue.replace(/^['\"]|['\"]$/g, '');

    values[key] = unquotedValue;
  }

  return values;
}

export function throwMissinEnvTypeError() {
  throw new Error('ENV_TYPE is required. Example: ENV_TYPE=local npx playwright test --ui');
}

export function loadEnvFile(envType) {
  const rootDir = process.cwd();
  const normalizedEnvType = (envType || '').trim();

  if (!normalizedEnvType) {
    throwMissinEnvTypeError();
  }

  const candidates = [
    `.env.${normalizedEnvType}`,
    '.env',
  ];

  for (const candidate of candidates) {
    const fullPath = path.join(rootDir, candidate);

    if (!fs.existsSync(fullPath)) {
      continue;
    }

    const parsed = parseEnvFile(fs.readFileSync(fullPath, 'utf8'));

    for (const [key, value] of Object.entries(parsed)) {
      if (process.env[key] === undefined) {
        process.env[key] = value;
      }
    }

    break;
  }

  if (!process.env.BASE_URL) {
    process.env.BASE_URL = DEFAULT_BASE_URL;
  }
}
