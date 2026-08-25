export type Platform = 'github-pages' | 'vercel';
export type Kind = 'app' | 'lib';

export interface Project {
  /** Nom affiché */
  name: string;
  /** Une phrase, en français */
  description: string;
  /** URL publique du projet déployé */
  url: string;
  /** Hébergeur */
  platform: Platform;
  /** Dépôt GitHub — omis si le dépôt est privé */
  repo?: string;
  kind: Kind;
  /** Année du dernier commit significatif */
  year: number;
  tags: string[];
}

export const PLATFORM_LABEL: Record<Platform, string> = {
  'github-pages': 'GitHub Pages',
  vercel: 'Vercel',
};

export const KIND_LABEL: Record<Kind, string> = {
  app: 'Application',
  lib: 'Librairie',
};

const gh = (name: string) => `https://github.com/necraidan/${name}`;
const pages = (name: string) => `https://necraidan.github.io/${name}/`;

export const projects: Project[] = [
  {
    name: 'Filigrane.me',
    description:
      'Ajoute un filigrane diagonal sur vos images JPG et PNG, entièrement dans le navigateur : aucun envoi, aucun stockage.',
    url: pages('filigrane-me'),
    platform: 'github-pages',
    repo: gh('filigrane-me'),
    kind: 'app',
    year: 2026,
    tags: ['Angular 21', 'Canvas API'],
  },
  {
    name: 'Amiibros',
    description:
      'Galerie des figurines Amiibo de Nintendo : recherche par nom, filtre par série, thème clair/sombre et mode hors-ligne.',
    url: pages('amiibros'),
    platform: 'github-pages',
    repo: gh('amiibros'),
    kind: 'app',
    year: 2026,
    tags: ['Angular 22', 'PWA', 'NgRx Signals'],
  },
  {
    name: 'Bluraytek',
    description:
      'Médiathèque personnelle de Blu-ray et Blu-ray 4K, avec métadonnées TMDB générées hors-ligne et servie en PWA.',
    url: 'https://bluraytek.vercel.app',
    platform: 'vercel',
    kind: 'app',
    year: 2026,
    tags: ['Angular 22', 'Tailwind CSS 4', 'PWA'],
  },
  {
    name: 'iPod Classic',
    description:
      "Clone fidèle de l'iPod Classic : clic-wheel fonctionnelle, pile de menus, Now Playing et Cover Flow. Installable en PWA.",
    url: 'https://ipod-classic-kappa.vercel.app',
    platform: 'vercel',
    kind: 'app',
    year: 2026,
    tags: ['Angular', 'PWA', 'Skeuomorphisme'],
  },
  {
    name: 'ngx-lightbox',
    description:
      'Lightbox légère et accessible pour Angular 21+ : zoom, pan, pinch-to-zoom, navigation clavier, zéro dépendance. Publiée sur npm.',
    url: pages('ngx-lightbox'),
    platform: 'github-pages',
    repo: gh('ngx-lightbox'),
    kind: 'lib',
    year: 2026,
    tags: ['Angular 21', 'npm', 'Signals'],
  },
  {
    name: 'Ostips',
    description: 'Calculer un pourboire simplement, sans se prendre la tête.',
    url: 'https://ostips.vercel.app',
    platform: 'vercel',
    repo: gh('ostips'),
    kind: 'app',
    year: 2024,
    tags: ['Angular'],
  },
  {
    name: 'Questions pour un permis !',
    description: 'Réviser le code de la route façon jeu télévisé.',
    url: 'https://questions-pour-un-permis.vercel.app',
    platform: 'vercel',
    kind: 'app',
    year: 2023,
    tags: ['Angular', 'Quiz'],
  },
  {
    name: 'Funko Poop !',
    description: 'Visualiseur de collection de Funko Pop, compatible PWA.',
    url: pages('funkoPoop'),
    platform: 'github-pages',
    repo: gh('funkoPoop'),
    kind: 'app',
    year: 2023,
    tags: ['Angular', 'PWA'],
  },
  {
    name: 'Burger Quiz',
    description:
      'Tableau des scores avec vidéos pour animer un Burger Quiz maison — générique, nuggets, sel ou poivre, menus, addition, burger de la mort.',
    url: pages('burger-quiz'),
    platform: 'github-pages',
    repo: gh('burger-quiz'),
    kind: 'app',
    year: 2023,
    tags: ['Angular', 'Jeu'],
  },
  {
    name: 'Accul-tahc',
    description:
      'Chat mono-fenêtre en Angular sans aucun code serveur : lazy loading, HMR, compodoc et tests unitaires.',
    url: 'https://accul-tahc.vercel.app',
    platform: 'vercel',
    repo: gh('accul-tahc'),
    kind: 'app',
    year: 2022,
    tags: ['Angular 14'],
  },
  {
    name: 'TheMiamBox',
    description: 'What do you want to eat ? Trouver le plat parfait au moment parfait.',
    url: pages('theMiamBox'),
    platform: 'github-pages',
    repo: gh('theMiamBox'),
    kind: 'app',
    year: 2019,
    tags: ['Angular'],
  },
];
