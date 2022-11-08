---
slug: decouverte-pipe-async-angular
title: A la découverte `| async` en Angular
authors: [necraidan]
tags: [javascript, frontend, angular, typescript]
---

Après être intervenu sur un projet reposant sur [ngrx](https://ngrx.io/), j'ai découvert l'utilisation du `| async`.

Ce `pipe` dit `impure` permet d'alléger grandement la gestion de flux asynchrones et de rendre, à mon sens, beaucoup plus simple la lecture du code et de sa séparation logique.

Nous allons voir ensemble pourquoi ce `pipe` est intéressant.

<!--truncate-->

## Utilisation d'un `observable` dans un composant

Dans notre exemple, nous allons vouloir récupérer une valeur issue d'un observable de deux façons différentes.

- La première est de `subscribe` l'`observable` pour ensuite récupérer une valeur.

```typescript
younupEmployees$.subscribe((employees: Array<YounupEmployee>) => {
  this.employees = employees;
});
```

```html
<div *ngFor="let employee of employees”>
  <span>{{ employee.firstName }}</span>
  <span>{{ employee.lastName }}</span>
</div>
```

- La seconde est de pouvoir `subscribe` à un `observable` directement dans la vue

```html
<div *ngFor="let employee of younupEmployees$ | async”>
  <span>{{ employee.firstName }}</span>
  <span>{{ employee.lastName }}</span>
</div>
```

Les deux façons de faire peuvent paraître semblables et pourtant, elles ne le sont pas.

En quoi sont-elles différentes ?

## Gestion de l'`observable` dans le composant

Quand vous faites un `subscribe` dans un composant pour récupérer une valeur, vous pouvez rendre accessible celle-ci dans l'ensemble de votre composant.

L'état de la variable est conservé dans celui-ci.

Si on s'amuse à utiliser la variable dans la vue, le `binding` se fera de façon automatique.

Mais quelle est le coût de cette "liberté" ?

Si par hasard vous faites les choses biens et que vous pensez à vos performances applicatives, vous allez vouloir faire en sorte que votre composant soit en `OnPush Change Detection`.

> Pour rappel, en changeant de stratégie de détection, le composant effectuera son `rendering` dans les cas suivants :
>
> - les références des `Inputs` changent ;
> - lors d'un événement provenant du composant ou de ses enfants ;
> - si vous lancez la détection de changement manuellement.
>
> Dans le cas contraire, c'est la stratégie par Default qui est appliquée.

Donc si l'on `subscribe` et que l'on attend une quelconque réactivité de la variable dans le template, nous serons obligés de le signaler à **Angular**.
Il faut également penser à `unsubscribe` de votre observable, sous peine d'avoir un très belle fuite mémoire silencieuse.

## Laissons le template travailler pour nous

En ce qui concerne le `| async`, c'est dans le template que notre `observable` est géré.
Le framework se charge de `subscribe` et d'`unsubscribe` pour nous !

Si notre composant est un mode `OnPush`, la réactivité se fera dans le template également.

```html
<div>{{ (younupInfo$ | async)?.babyfootName }}</div>
<div>{{ (younupInfo$ | async)?.babyfootColor }}</div>
```

Grace à cet exemple, nous voyons immédiatement l'inconvénient de cette façon de faire.
Nous devons multiplier les `| async` pour pouvoir accéder à nos différentes valeurs, et cela veut dire que l'on multiplie les `subscribe` sur un même observable...

```html
<ng-container *ngIf="younupBabyfoot$ | async as younupBabyfoot">
  <div>{{ younupBabyfoot.name }}</div>
  <div>{{ younupBabyfoot.color }}</div>
</ng-container>
```

En utilisant un **alias**, le `pipe` n'est utilisé qu'une seule fois grâce au `ngIf`.

## Que se passe t'il avec plusieurs `observables` ?

```html
<ng-container *ngIf="younupBabyfoot$ | async as younupBabyfoot">
  <div>{{ younupBabyfoot.name }}</div>
  <div>{{ younupBabyfoot.color }}</div>
</ng-container>

<ng-container *ngIf="younupFlipper$ | async as younupFlipper">
  <div>{{ younupFlipper.name }}</div>
  <div>{{ younupFlipper.color }}</div>
</ng-container>
```

Le système est le même mais nous ne pouvons pas regrouper les informations.

Dans notre cas, impossible de faire cohabiter les informations de `younupBabyfoot` et `younupFlipper` au même niveau, leur portée n'est qu'au `ngIf` où ils sont définis.

```html
<ng-container
  *ngIf="{ 
  babyfoot: younupbabyfoot$ | async, 
  flipper: younupFlipper$ | async 
} as younup"
>
  <div>{{ younup.babyfoot.name }}</div>
  <div>{{ younup.babyfoot.color }}</div>
  <div>{{ younup.flipper.name }}</div>
  <div>{{ younup.flipper.color }}</div>
</ng-container>
```

En englobant les `| async` dans un objet, on s'assure que le `ngIf` ne sert qu'à la définition de l'alias, la portée n'est plus un problème.

## Conclusion

Après avoir uniquement utilisé `subscribe`, je suis convaincu par cette nouvelle approche.
Comme nous l'avons vu plus haut, les inconvénients peuvent être compensés avec des alias dans le template et nous pouvons faire grossir cette gestion en englobant dans un objet qui regroupe les `| async`.

N'hésitez pas à l'essayer pour faire votre propre idée !

---

Merci d'avoir lu cet article !
Il a été posté initialement sur le [blog](https://www.younup.fr/blog) de Younup :
https://www.younup.fr/blog/decouverte-pipe-async-angular
