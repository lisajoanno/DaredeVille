# DaredeVille
Projet en Architecture Logicielle - SI5 2016/17

## Propriétés à défendre

Pour le moment on peut défendre une partie de la sécurité (variables d'environnement). 

Nous avons un code plus facile à tester (factorisation du code). Un code évolutif (factorisation du code + utilisation
d'objets driver et de variables d'environnement)


## TODOS

test ! test ! test ! test ! test ! test ! test ! test ! test ! test ! test ! test ! test ! test ! test ! test ! test ! test ! test ! 


Un driver coté client pour se connecter facilement à des dispositifs (bracelets par exemple). Dans notre cas
 on va se connecter à un ordinateur pour simuler les bracelets. Cependant il faut garantir que lorsque l'on voudra
 commercialiser notre produit, ce sera facile de le faire fonctionner avec des bracelets.

## Etapes à suivre pour l'installation locale

Il faut tout d'abord **installer mysql** sur votre machine :

`
    $ sudo apt-get install mysql
`

Vous avez dû choisir un login/mdp.

Maintenant, théoriquement, le **service est déjà activé**, mais au cas où :

`
    $ sudo service mysql start
`

Ouvrez un terminal mysql :

`
    $ mysql -u YourLogin -p
`

Vous arrivez ensuite dans un prompt du type :

`
    >mysql
`

**Créez une nouvelle base de données** pour notre projet :

`
    >mysql CREATE DATABASE dardeville
`

Vous pouvez ensuite quitter ce terminal : 

`
    >mysql quit
`

**Allez dans le répertoire du projet** puis **installez les packages nécessaires** :

`
    $ npm install
`

Ouvrez le fichier configurations/env/database.env et **changez les valeurs par les votres** (login / mdp)


**Allez dans le répertoire scripts puis executez le script pour charger les variables d'environnement** :

```shell
    $ cd scripts
    $ . environment_variables_script.sh
```

Enfin, allez exporter notre schema Bookshelf dans notre base de données en executant un script js :

```shell
    $ node ./model/migrate.js
```
