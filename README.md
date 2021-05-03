# Interrogation Javascript

- Répondez au question dans ce même fichier.
- Faite le rendu au format `.zip` (uniquement s'il vous plait, ça me permet d'aller plus vite si tout est pareil)
- Envoyez à l'adresse **ange.picard@pm.me**, pas à mon adresse gmail, ni ipilyon.net svp.

## Informations

Nom :  BRINES
Prénom : Antonin
  

## Questions

Prévoyez environ 30 minutes pour cette partie.

1. Dans quelle environnement Javascript est-il traditionellement exécuté ?
      Javascript est traditionellement utilisé coté client.
2. Pour exécuter du code Javascript, dans ce même contexte, dans quel fichier faut il l'inclure au préalable ?
      Dans un fichier .js
3. Toujours dans ce même contexte, où peut on voir les erreurs d'exécution Javascript ?
      Dans la console du navigateur utilisé
4. Javascript est-il un langage interprété ou compilé ?
      Javascript est un langage interprété
5. A quoi sert NodeJS ?
      NodeJs permet de change l'environnement en coté serveur et non côté client !
6. A quoi sert NPM ?
      npm est un outil de gestion de package comme composer...
7. Qu'est-ce-qu'une API REST ?
      Une API REST est un ensemble de règles permettant à différents programmes de communiquer entre eux.
8. A quoi servent les différentes méthodes HTTP ?
      Le protocole contrôle la façon dont le client formule ses demandes et la façon dont le serveur y répond. Il en existe plusieurs GET, PUT, DELETE, POST...
9. Quel est l'intérêt du JSON ?
      C'est un langage indépendant qui facilite l'échange de données, grâce à sa simplicité et sa légèreté.
      Le JSON permet de décrire l'information hiérarchiquement. Cette structure hiérarchique est composée d'objets et tableaux.il est simple de récupérer et d'envoyer des données structurées
10. A quoi sert l'API Fetch en Javascript ?
      Cette API est présentée comme étant plus flexible et plus puissante que l’ancien objet XMLHttpRequest.
      L’API Fetch fournit une définition pour trois interfaces Request, Response et Headers et implémente également le mixin Body qu’on va pouvoir utiliser avec nos requêtes.
11. Qu'est-ce-qu'une promesse ?
      Une promesse est un objet qui représente la complétion ou l'échec d'une opération asynchrone (reject, resolve).
      Elle permet "d'attendre" quelque chose et faire des traitements après que celle si arrive
12. A quoi servent les mots clefs `async/await`
      Une fonction définie avec le mot clé async renvoie systématiquement une promesse : si une erreur est levée pendant l’exécution de la fonction, la promesse est rejetée, et si une valeur est retournée, la promesse est résolue avec cette valeur. Si une promesse est retournée, elle est inchangée.
      Le mot clé await ne peut être utilisé que dans une fonction async. Il permet d’attendre la résolution d’une promesse et retourner sa valeur.
13. Qu'est-ce-que la transpilation ?
      C'est le fait de traduire du code d'un langage à un autre.
14. Qu'est-ce-que le bundling ?
      On prend tous nos fichiers JavaScript pour n’en former qu’un seul toujours pour éviter de trop nombreux appels sur le réseau (minification).
15. Quel est l'intérêt de Typescript ?
      Contrairement au JavaScript, le TypeScript utilise le Type Casting et le Type Hinting pour donner un certain nombre à une variable.
      Une fois qu’un nombre est attribué, TypeScript affiche alors l’erreur lors de l’écriture du codage afin que les développeurs puissent la résoudre avant de déployer le code final.

## Exercices

Prévoyez environ 1h30 pour cette partie.

Faites les exercices de la partie 1 dans le dossier `exercice_partie1`, et la partie 2 dans le dossier `exercice_partie2`.

### Partie 1

1. Ajouter un bouton dans l'HTML, au clique de ce bouton, afficher "bonjour" en console.
2. Au clique de ce même bouton, changer également le `h1` de la page par "bonjour".
3. Ajouter un `input` et un `span`, en utilisant l'évènement `keyup`, faire en sorte que le contenu de l'input et du span soit toujours les mêmes. (Modifier le contenu du span à chaque évènement pour le remplacer avec celui de l'input à ce moment là).

### Partie 2

La suite du sujet se fera avec l'API https://anapioficeandfire.com, dont voici la documentation https://anapioficeandfire.com/Documentation.

L'idée globale est de pouvoir naviguer sur les différents personnages du monde de Game Of Thrones.

1. Faire une requête vers https://anapioficeandfire.com/api/characters?page=59 et afficher les données reçues en console (**Attention à bien garder la partie avec ?page=59**)
2. Pour chaque personnage du tableau reçu à la question précédente, créer une div contenant :
   1. Un `span` avec le nom du personnage
   2. Un `i` avec le premier des titres dans le tableau `titles`
   3. Un `button` "VOIR BRUT" dont on se servira ensuite.
   4. Ex: `<div><span>John Snow</span><i>Lord Commander of the Night's Watch</i><button>VOIR BRUT</button></div>`
3. L'url contient un paramètre page, actuellement à 59. Créer deux boutons page suivante et page précédente permettant de réduire, ou d'augmenter le numéro de la page, et ensuite afficher les personnages de cette page en relançant la requête. (https://anapioficeandfire.com/Documentation#pagination)
4. Au clique du bouton "VOIR BRUT" de la question 2.4, mettre les données brutes correspondant au personnage dans une balise à part de la liste `<pre><code>{les données ici}</code></pre>`, on peut ainsi changer le contenu de cette balise, et voir les données bruts de chaque personnage en cliquant sur leur bouton respectif.