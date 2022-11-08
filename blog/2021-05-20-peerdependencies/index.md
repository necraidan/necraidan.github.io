---
slug: peerdependencies-packagejson
title: A quoi servent les peerDependencies dans le package.json ?
authors: [necraidan]
tags: [javascript, frontend, npm]
---

Lors d'une installation `npm` ou bien de la lecture d'un `package.json`, vous avez sans doute remarqué qu'il y avait deux grands groupes de dépendances : les `dependencies` et les `devDependencies`.

Le premier représente les dépendances directs de votre projet (ce dont on a besoin pour que cela fonctionne).

Le second représente ce qui entoure votre projet dans sa phase de développement (les outils qui vont permettre à celui-ci de fonctionner/builder/deployer par exemple).

Il existe un troisième groupe à ne pas négliger : les `peerDependencies`

<!--truncate-->

Dans cet article, on va vous expliquez ce que peut apporter le champs `peerDependencies` dans votre `package.json`.

## Ça sert à quoi les `peerDependencies` ?

En ajoutant une `dependencie` dans cette section de votre package.json, vous indiquez :

- Que votre code est compatible avec la version de la `dependencie` indiquée
- Si la version de la `dependencie` n'existe pas dans les _node_modules_, on va lever un warning
- Si la version de la `dependencie` existe dans les _node_modules_, on ne fait rien

## Cas d'école

> Ce cas est valable pour une version `npm` > 3 et < 7 (on en parle à la fin de l'article).

Prenons un projet qui a pour dépendance `a` :

```json
// Extrait du package.json de notre projet
{
  //...
  "dependencies": {
    "a": "1.0.0"
  }
}
```

Si on se penche sur le package.json de la dépendance `a` nous avons :

```json
// Extrait du package.json de la dépendance a
{
  //...
  "peerDependencies": {
    "b": "^1.0.0"
  }
}
```

### Un warning assez commun

Il vous ait peut-être arrivé de tomber sur ce genre de message :

```bash
npm WARN react-datepicker@0.25.0 requires a peer of react@^0.14.0 but none was installed.
```

Comme indiqué plus haut, ce `warning` vous informe qu'un package possède une `dependencie` qui n'est pas installée (non présente dans vos `node_modules`).

Dans notre cas d'école, on va avoir :

```bash
npm WARN a@1.0.0 requires a peer of b@^1.0.0 but none was installed.
```

C'est donc à vous d'installer cette dépendance en l'ajoutant aux `dependencies` de votre projet

```json
// Extrait du package.json de notre projet
{
  //...
  "dependencies": {
    "a": "1.0.0",
    "b": "1.0.0"
  }
}
```

Les versions installées doivent être compatibles entres elles en suivant la gestion sémantique de version (le semver pour les initié·e·s 👌).

## Nouveauté de la version 7 de `npm`

Assez récente, cette nouvelle version vient changer cette façon de fonctionner.

Comme mentionné plus haut, en fonction de la version de `npm`, le comportement sera différent au niveau de l'installation des `dependencies` :

- Avant la version 3.0 : `npm` installait automatiquement les `peerDependencies` mais cela occasionnait de nombreux problèmes (de versions...)
- Entre 3 et 7 : `npm` lève un `warning` vous informant qu'il y a des `peerDependencies` à installer vous même
- 7 : `npm` réinstalle automatiquement les `peerDependencies`. Une grosse refactorisation du code interne a permit de résoudre les problèmes rencontrés avant la version 3

## Conclusion

La compréhension du concept est finalement assez simple à saisir, je vous encourage à aller jeter un œil à l'intérieur des packages que vous utilisez !

Quant à la montée en version vers `npm` 7, elle permet de nous facilité la vie sur la gestion de ces `dependencies` en nous évitant de nous faire des nœuds au cerveau.

---

Merci d'avoir lu cet article !
Il a été posté initialement sur le [blog](https://www.younup.fr/blog) de Younup :
https://www.younup.fr/blog/a-quoi-servent-les-peerdependencies-dans-le-package-json

---

Cover par [Jackie Zhao](https://unsplash.com/@jiaweizhao) sur [Unsplash](https://unsplash.com/photos/W-ypTC6R7_k)
