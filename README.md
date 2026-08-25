# necraidan.github.io

Liste des side projects de [necraidan](https://github.com/necraidan) exposés sur internet,
hébergés sur GitHub Pages ou Vercel.

**→ [necraidan.github.io](https://necraidan.github.io/)**

## Stack

- [Astro](https://astro.build) en sortie 100 % statique, zéro framework côté client
- CSS vanilla avec thème clair/sombre via `prefers-color-scheme`
- Un seul `<script>` inline pour le filtre par hébergeur
- Déploiement automatique sur GitHub Pages via GitHub Actions à chaque push sur `main`

## Ajouter ou modifier un projet

Tout est dans [`src/data/projects.ts`](src/data/projects.ts). Chaque entrée :

```ts
{
  name: 'Filigrane.me',
  description: 'Une phrase, en français.',
  url: 'https://necraidan.github.io/filigrane-me/',
  platform: 'github-pages', // ou 'vercel'
  repo: 'https://github.com/necraidan/filigrane-me', // omettre si le dépôt est privé
  kind: 'app', // 'app' | 'lib'
  year: 2026,
  tags: ['Angular 21', 'Canvas API'],
}
```

Le tri est fait par année décroissante puis par nom.

## Développement

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # génère dist/
npm run preview      # sert dist/
npm run check        # astro check (types)
npm run format       # prettier
```

Node ≥ 22 (voir `.nvmrc`).

## Historique

Ce dépôt a connu plusieurs vies : Angular (2018–2019, branches `feature/archive_1`,
`feature/2.0`, `gh-pages`), HTML statique (2021, branche `master`), Nuxt (`feature/nuxt`),
puis Docusaurus (2022, branche `dev`). La version actuelle repart de zéro sur `main`.
