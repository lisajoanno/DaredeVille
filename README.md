# DaredeVille
Projet en Architecture Logicielle - SI5 2016/17

## Etapes à suivre pour l'installation locale

Il faut tout d'abord **installer mysql** sur votre machine :

`
    $ sudo apt-get install mysql
`

Vous avez du choisir un login/mdp.

Maintenant, théoriquement, le **service est déjà activé**, mais au cas où :

`
    $ sudo service mysql start
`

Ouvrez un terminal mysql :

`
    $ mysql -u YourLogin -p
`

vous arrivez ensuite dans un prompt du type :

`
    >mysql
`

créez une nouvelle base de données pour notre projet :

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

Et puis voilà, on a donc : une base de données mySQL avec tout les packages nécessaires
installés.