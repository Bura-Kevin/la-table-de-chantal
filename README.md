
# La table de Chantal

Site internet du restaurant **La table de Chantal**, réalisé avec React.

## Lancer le projet

Prérequis : avoir [Node.js](https://nodejs.org/) installé.

Dans un terminal, à la racine du projet :

```bash
npm install
npm start
```

Le site s'ouvre ensuite sur [http://localhost:3000](http://localhost:3000).

> ⚠️ `npm install` est obligatoire la première fois. Sans cette étape, `npm start` affiche l'erreur :
> `'react-scripts' is not recognized as an internal or external command`

## Pages

- **Accueil** : carrousel de 3 photos du restaurant, présentation du lieu et de la cheffe
- **La carte** : entrées, plats et desserts
- **Boissons** : la carte des boissons
- **Contact** : formulaire de contact, adresse, téléphone et Google Map

## Technologies

- React
- React Router (navigation entre les pages)
- React Context (partage des données des produits)
- uuid (génération des identifiants des produits)

## Structure du projet

```
src/
├── assets/       # images, icônes et données (data.js)
├── Components/   # composants réutilisables (Header, Footer, Carrousel...)
├── context/      # contexte React (CarteContext)
├── Pages/        # pages du site (Accueil, Carte, Boissons, Contact)
├── App.js        # routes de l'application
└── index.js      # point d'entrée
```
