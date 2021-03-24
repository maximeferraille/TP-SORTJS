# M2202 - Séance 12 - Implémentation d'un tri à bulle (croissant ou décroissant)

Aujourd'hui, nous allons voir comment faire un algorithme de tri à bulle en javascript. Permettant ainsi d'ordonnées comme on le souhaite un tableau ( `Array` ) d'entiers ( `integers` ).

Ressource utile pour se rappeler de ce qu'est un tri à bulle : https://fr.wikipedia.org/wiki/Tri_%C3%A0_bulles 

Pour ce TP il n'y aura pas d'interaction direct avec des éléments html. Tout se passera dans la console de votre navigateur, je vous invite fortement d'utiliser la méthode `console.log()` que l'on a déjà pu utiliser dans les TP précédents. 

Pour les plus téméraires vous pouvez commencer à apprendre à utiliser le débogueur de votre navigateur en vous référant à la documentation suivante : https://developer.mozilla.org/fr/docs/Tools/Debugger 

## Préparation de notre fichier javascript

Q1) Dans votre fichier `app.js` déclarez dans une nouvelle variable un tableau d'entier allant de 1 à 10. Puis, affichez votre tableau dans la console de votre navigateur. 
Attention ! Les valeurs du tableau doivent êtres désordonnées (9, 2, 3, 8, 10...), le but étant de trier ce tableau par la suite.

Q2) A l'aide d'une boucle, affichez chaque valeur du tableau une par une dans la console de votre navigateur. 

## Tri à bulle

Nous avons désormais un tableau désordonné. Nous allons donc devoir réaliser un algorithme permettant d'avoir un tableau trié dans un ordre croissant/décroissant (au choix, la logique ne changera pas).

Q3) Grâce à la boucle réalisée précédemment, nous allons pouvoir faire la première étape : celle du tri. 
A chaque passage dans une case vous allez devoir vérifier si celle-ci est bien rangée. Le principe consiste donc à échanger les cases successives si elles sont mal rangées.

Q4) Après avoir réalisé un premier rangement, vous allez devoir créer une seconde boucle permettant de vérifier si l'entièreté du tableau est bien trié.

Q5) Nous avons désormais nos deux grandes étapes de réalisées. La première permettant d'effectuer un tri et la deuxième permettant de vérifier si tout est bien trié.
L'objectif de cette question est de répéter les deux étapes tant que le tableau n'est pas entièrement trié.

## Question bonus pour les plus rapides

Q6) Remplacer l'étape de vérification (Q4) par une vérification à l'intérieur de la boucle de l'étape du tri (Q3). Ceci est réalisable grâce à un boolean (vrai/faux) stocker dans une variable qui changera d'état selon la progression du tri.
