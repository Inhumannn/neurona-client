# Client Neurona - documentation collaborative

![Version](https://img.shields.io/badge/Version-1-0-0-blue.svg)
![Statut CI](https://img.shields.io/badge/CI-Passing-brightgreen.svg)

## Table des matières

- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Déploiement en production](#déploiement-en-production)
- [Aperçu](#aperçu)
- [Licence](#licence)
- [Auteurs](#auteurs)
- [FAQ / Dépannage](#faq---dépannages)

## Description

Neurona est une application web pensée pour les développeurs qui cherchent à apprendre, progresser et partager leurs connaissances dans un environnement collaboratif. Son rôle est de centraliser en un seul endroit ce qui est souvent dispersé : la documentation, les tutoriels, les actualités techniques et les discussions communautaires.

## Fonctionnalités

- Interface **responsive** (mobile, tablette, desktop)
- Navigation fluide avec **React Router**
- Gestion des utilisateurs avec création et connection de compte
- Accès à la documentation et aux tutoriels
- Actualités intégrées via une API externe.
- Espace communautaire pour échanger, poser des questions et partager.
- Gestion des styles avec **SASS** et **TailwindCSS**
- Documentation technique via **README**

## Technologies utilisées

- **@radix-ui/react-separator**: _v1.1.7_,
- **@tailwindcss/vite**: _v4.1.12_,
- **class-variance-authority**: _v0.7.1_,
- **clsx**: _v2.1.1_,
- **lucide-react**: _v0.542.0_,
- **react**: _v19.1.1_,
- **react-dom**: _v19.1.1_,
- **react-router-dom**: _v7.8.2_,
- **sass**: _v1.91.0_,
- **tailwind-merge**: _v3.3.1_,
- **tailwindcss**: _v4.1.12_

## Structure du projet

```bash
├── public/             # Logo, images
├── src/
│ ├── components/       # Composant réutilisable
│ ├── hooks/            # Hooks personnalisés
│ ├── lib/              # Librairies
│ ├── pages/            # Pages
│ ├── styles/           # Fichiers CSS/SASS
│ ├── App.tsx
│ ├── main.tsx
│ └── vite-env.d.ts
├── index.html
├── LICENSE.md
└── README.md
```

## Installation

### Prérequis

- npm >= v10.9.2
- Nodes.js >= v22.14.0

### Lancer le projet localement

**1. Cloner le repo**

```bash
git clone https://github.com/Inhumannn/neurona-client
cd neurona-client
```

**2. Installer les dépendances**

```bash
npm install
```

**3. Lancer le front-end**

```bash
npm run dev
```

### Scripts disponibles

```bash
npm run dev          # Lance le serveur de développement
npm run build        # Construit l'application pour la production
npm run preview      # Prévisualise la build de production
```

## Déploiement en production

### Déploiement avec Vercel

1. Créer une compte sur vercel
2. Ajouter un nouveau projet
3. Importer le repo GitHub "neurona-client"
4. Déployer le projet

## Aperçu

![Capture d'écran]()

## Licence

Ce projet est sous [licence propriétaire](LICENSE.md).

## Auteurs

N'hésitez pas à me contacter ou à me suivre sur [LinkedIn](https://www.linkedin.com/in/thomas-pena-bermond/) ou [GitHub](https://github.com/Inhumannn).

## Questions fréquentes (FAQ) / dépannages

### npm install échoue

- Vérifier que Node.js et npm sont à jour
- Supprimer node_modules et refaire npm install
