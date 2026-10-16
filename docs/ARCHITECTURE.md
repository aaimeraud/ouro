# Architecture du site

Guide de maintenance pour reprendre le projet après une longue pause.

## Vue d'ensemble

Portfolio one-page en Next.js (App Router), disponible en deux langues :

- `/` → anglais (langue par défaut)
- `/fr` → français

Chaque langue a son propre layout racine (`app/(en)/` et `app/(fr)/fr/`) parce que l'attribut `lang` vit sur `<html>`, que seul un layout racine peut rendre. Changer de langue recharge donc la page entièrement — c'est voulu.

## Structure

```
app/
  (en)/layout.tsx, page.tsx     → racine anglaise ("/")
  (fr)/fr/layout.tsx, page.tsx  → racine française ("/fr")
  sitemap.ts, robots.ts         → SEO technique (basés sur lib/site.ts)
views/
  homepage/homepage.view.tsx    → assemble les sections + injecte le JSON-LD
  homepage/sections/            → une section = un fichier (profile, about, projects, footer)
  homepage/sections/about-actions/  → les 3 boutons d'action (CV, Ask AI, langue)
lib/
  i18n/config.ts                → liste des langues et leurs chemins publics
  i18n/dictionaries/en.ts       → textes anglais (source de vérité du typage)
  i18n/dictionaries/fr.ts       → traduction française (typée sur en.ts)
  i18n/index.ts                 → getDictionary(locale) + getMetadata(locale)
  data/aaimeraud.data.ts        → données non traduites : projets, réseaux, identité
  seo/json-ld.ts                → données structurées schema.org (WebSite + Person)
  site.ts                       → SITE_URL, origine canonique du site
components/
  ui/                           → primitives shadcn/base-ui (ne pas modifier à la main)
  custom/                       → composants maison (LinkCustom, ProjectCard, Tag…)
public/
  llms/home.md, home.txt        → fichiers destinés aux IA (synchronisation MANUELLE)
```

## Modifier un texte

Tous les textes visibles sont dans les dictionnaires, jamais en dur dans les composants.

1. Ajouter/modifier la clé dans `lib/i18n/dictionaries/en.ts`.
2. Ajouter la traduction dans `lib/i18n/dictionaries/fr.ts` — TypeScript refuse de
   compiler tant que la clé manque, donc aucune traduction ne peut être oubliée.

## Ajouter un projet ou un réseau social

**Projet** (`lib/data/aaimeraud.data.ts`) :

1. Ajouter l'entrée dans `projects` avec un `slug` unique.
2. Ajouter ses textes dans les deux dictionnaires, sous `projects.items[slug]`
   (`description`, `tooltip`). Le slug est typé : une faute de frappe casse le build.

**Réseau social** :

1. Ajouter le lien dans `socials` avec un `label` unique.
2. Ajouter son tooltip dans les deux dictionnaires, sous `socials[label]`.
   Le label est typé de la même façon.

## Les fichiers `public/llms/`

`home.md` et `home.txt` sont écrits pour être lus par des IA (ils alimentent les
prompts « Ask AI »). Ils contiennent plus d'infos que le site.

⚠️ **Ils ne sont pas générés.** Après avoir modifié `home.md`, copier son contenu
dans `home.txt` à la main. ChatGPT ne lit que le `.txt`, Claude lit les deux.

## SEO

- `lib/site.ts` → `SITE_URL` est l'origine canonique. Sitemap, robots, metadata
  et JSON-LD en dépendent : la changer une fois suffit.
- `metadataBase` rend les `hreflang`/`canonical` absolus ; `x-default` pointe
  vers l'anglais.
- Le JSON-LD (`WebSite` + `Person`, localisation Paris) est construit dans
  `lib/seo/json-ld.ts` et injecté par `views/homepage/homepage.view.tsx`.
  Valider avec https://validator.schema.org après modification.

## Commandes

```bash
bun install
bun dev      # développement
bun run build  # vérifie aussi les types et les traductions manquantes
bun run lint
```

## Conventions

- Commentaires de code en anglais, courts, uniquement là où le comportement
  n'est pas évident.
- Commits au format `type(scope): summary` via GitButler (`but`).
- Les styles passent par Tailwind (`cn()` pour composer) ; les primitives UI
  viennent de shadcn/base-ui.
