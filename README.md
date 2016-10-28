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

`
    $ cd scripts
    $ . environment_variables_script.sh
`

Enfin, allez exporter notre schema Bookshelf dans notre base de données en executant un script js :

`
    $ node ./model/migrate.js
`