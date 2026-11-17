# LiveOS

LiveOS brings tasks, a journal, and focus time together in a small web application. The OS home also links to the growing family of LifeDevelop services. This repository starts from the web preview source at commit `375dbdfb7fb25d56104873fb00eafa37c2aba5d6`, with the visible product name changed from LifeOS to LiveOS.

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
