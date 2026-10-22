# Architecture du site

Guide de maintenance pour reprendre le projet après une longue pause.

## Vue d'ensemble

Portfolio one-page en Next.js (App Router), disponible en deux langues :

- `/` → anglais (langue par défaut)
- `/fr` → français

Chaque langue a son propre layout racine (`app/(en)/` et `app/(fr)/fr/`) parce que l'attribut `lang` vit sur `<html>`, que seul un layout racine peut rendre. Changer de langue recharge donc la page entièrement.

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
  home.txt        → fichiers destinés aux IA (synchronisation MANUELLE)
```

## Modifier un texte

Tous les textes visibles sont dans les dictionnaires.

1. Ajouter/modifier la clé dans `lib/i18n/dictionaries/en.ts`.
2. Ajouter la traduction dans `lib/i18n/dictionaries/fr.ts`
   (TypeScript refuse de compiler tant que la clé manque, donc aucune traduction ne peut être oubliée.)

## Ajouter un projet ou un réseau social

**Projet** (`lib/data/aaimeraud.data.ts`) :

1. Ajouter l'entrée dans `projects` avec un `slug` unique.
2. Ajouter ses textes dans les deux dictionnaires, sous `projects.items[slug]`
   (`description`, `tooltip`). Le slug est typé : une faute de frappe casse le build.

**Réseau social** :

1. Ajouter le lien dans `socials` avec un `label` unique.
2. Ajouter son tooltip dans les deux dictionnaires, sous `socials[label]`.
   Le label est typé de la même façon.

## Ajouter une page

Exemple avec une page « À propos » servie sur `/about` (EN) et `/fr/about` (FR).
Les layouts racines s'appliquent automatiquement : rien à y toucher.

**1. Créer la vue** - `views/about/about.view.tsx` (+ `sections/` si la page
grossit). Elle reçoit la langue en prop :

```tsx
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";

type AboutProps = {
  locale: Locale;
};

export default function AboutPage({ locale }: AboutProps) {
  const t = getDictionary(locale);
  return (
    <main className="m-auto flex max-w-lg flex-col gap-5 p-5 md:max-w-3xl">
      <h1>{t.aboutPage.title}</h1>
    </main>
  );
}
```

**2. Créer les deux routes** - un fichier par langue, seul `locale` change.
Le segment `fr` n'existe que dans le groupe `(fr)` : l'URL anglaise n'a pas de préfixe.

```tsx
// app/(en)/about/page.tsx
import { getMetadata } from "@/lib/i18n";
import AboutPage from "@/views/about/about.view";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("en", "/about");

export default function Page() {
  return <AboutPage locale="en" />;
}
```

```tsx
// app/(fr)/fr/about/page.tsx - identique avec "fr"
export const metadata: Metadata = getMetadata("fr", "/about");

export default function Page() {
  return <AboutPage locale="fr" />;
}
```

`getMetadata(locale, path)` produit le canonical et les `hreflang` de la sous-page
(`/about` ↔ `/fr/about`) tout seul.

**3. Ajouter les textes** - nouvelle clé `aboutPage` dans `en.ts`, puis sa
traduction dans `fr.ts` (obligatoire : le build échoue tant qu'elle manque).

**4. Référencer la page** - ajouter les deux URLs dans `app/sitemap.ts` :

```ts
{
  url: `${SITE_URL}${pagePath("en", "/about")}`,
  lastModified,
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${SITE_URL}${pagePath("fr", "/about")}`,
  lastModified,
  changeFrequency: "monthly",
  priority: 0.8,
},
```

**5. Vérifier** - `bun run build`, puis ouvrir `/about` et `/fr/about` : le bon
`<html lang>`, les textes traduits, et le sélecteur de langue qui pointe vers la
bonne URL.

> Le JSON-LD de la home ne concerne que la home; une page qui mérite ses propres
> données structurées peut injecter son propre `<script type="application/ld+json">`
> dans sa vue (voir `views/homepage/homepage.view.tsx` pour le pattern).

## Le fichier `public/home.txt`

`home.txt`est écrit pour être lus par des IA (il alimente les
prompts « Ask AI »). Ils contient plus d'infos que le site.

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
