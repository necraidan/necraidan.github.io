---
slug: npx-npm
title: npx ou comment comprendre que ce n'est pas une faute d'orthographe de npm
authors: [necraidan]
tags: [javascript, frontend, npm, package]
---

Récemment, j'ai entrepris de voir d'autres frameworks/libs et j'ai vu l'apparition d'un **npx** dans les commandes à exécuter.

Pourquoi me demande-t-on de faire des commandes **npx** alors, que jusqu'à présent, ça fonctionnait très bien avec **npm** ?

Tout simplement parce que les outils évoluent et que npx doit être **utilisé** !

<!--truncate-->

## Npm en bref

Comme vous le savez sans doute, **npm** est un _package manager_ qui va vous aider à installer vos dépendances de projet en lisant votre _package.json_. Souvent, on l'utilise pour un `npm install` puis pour un `npm start` ou encore avec quelques commandes déjà présentes dans votre projet et c'est tout.

## Npx ou comment exécuter des packages Node.js

**Npx** est un outil inclus dans npm qui permet l'exécution de packages **Node.js**. Il est livré avec la version 5.2 de **npm**.

##Cas d'utilisation
Il m'est arrivé de vouloir utiliser un package installé en tant que dépendance d'un mes projets avec une commande npm.

```json
{
  "name": "super-projet-younup",
  "version": "1.0.0",
  "scripts": {
    "mon-package": "./node_modules/mon-package/bin/"
  }
}
```

Pour pouvoir ensuite utiliser la commande `npm run mon-package`

Mais avec **npx**, c'est plus simple et la résolution différente. Il suffit de taper `npx mon-package` et ... c'est tout !

**npx** va résoudre votre commande de la façon suivante :

- Il regarde si votre package existe dans votre projet (il regarde vos node_modules)
- Il existe ? Alors il l'exécute !
- Il n'existe pas mais il existe en global ? Alors il l'exécute !
- Il n'existe nulle part ? Alors il l'installe temporairement et il l'exécute !

Le dernier point est **important**.

Vous pouvez tester des packages à la volée sans installation durable ! Encore mieux. Plus besoin d'installation de façon globale ! (merci la différence des versions de angular-cli sur les projets et la version globale...).

Bien sûr, il existe quelques flags comme `--no-install` pouvant interdire l'installation du package s'il n'est pas présent dans les dépendances du projet. Vous l'aurez sans doute compris, lorsque vous aurez besoin d'exécuter un package **npm**, c'est **npx** qui doit être utilisé !

---

Merci d'avoir lu cet article !
Il a été posté initialement sur le [blog](https://www.younup.fr/blog/) de Younup : https://www.younup.fr/blog/npx-ou-comment-comprendre-que-ce-n-est-pas-une-faute-d-orthographe-de-npm

---

Cover par [Jiawei Zhao](https://unsplash.com/@jiaweizhao) sur [Unsplash](https://unsplash.com/photos/BsXeYX3efOI)
