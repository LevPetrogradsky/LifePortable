# LiveOS Portable

LiveOS Portable brings tasks, a journal, and focus time together in a small web application. Its OS home also links to the growing family of Live services. This repository starts from the web preview source at commit `375dbdfb7fb25d56104873fb00eafa37c2aba5d6`, with the visible product name changed from LifeOS to LiveOS Portable.

## Ownership and permitted use

**Copyright 2026 LevPetrogradsky.** The original LiveOS Portable code and assets are provided under the [PolyForm Noncommercial License 1.0.0](LICENSE.md). You may use, change, and share them for personal or other noncommercial purposes under that license. Commercial use requires separate written permission. Third-party components retain their own licenses. A public repository does not transfer ownership.

**Русский:** LiveOS Portable принадлежит правообладателю LevPetrogradsky. Личное и иное некоммерческое использование разрешено на условиях [лицензии](LICENSE.md); коммерческое использование требует отдельного письменного разрешения.

## Run locally

Requires Node.js 22 or newer and npm.

```bash
npm ci
npm run dev
```

Run `npm test` for the data model checks and `npm run build` for a production build.

## Data and configuration

The app can keep data in the browser. Journal cloud sync and account sign-in require separately configured services and are disabled without their environment settings. See `.env.example` for the public configuration names. Keep database credentials and other secrets out of this repository and out of `VITE_` variables.

Some internal identifiers still use `lifeos` so existing browser data and backups remain readable after the visible rename. The existing Ko-fi address also retains its original handle.

This repository contains source code, not personal journal entries or production credentials. The existing Vercel preview is a separate deployment and is not automatically connected to this repository.
