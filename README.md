# 📂 CodeFolio

> **API GraphQL Backend pour Portfolio Professionnel**

Application Node.js/TypeScript avec architecture modulaire exposant une API GraphQL complète pour gérer un portfolio professionnel (CV, projets, compétences, expériences).

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-16-E10098.svg)](https://graphql.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.0-47A248.svg)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg)](https://www.docker.com/)

---

## 📋 Table des Matières

- [Vue d'ensemble](#-vue-densemble)
- [Architecture](#-architecture)
- [Technologies](#-technologies)
- [Fonctionnalités](#-fonctionnalités)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [API GraphQL](#-api-graphql)
- [Structure du Projet](#-structure-du-projet)
- [Tests](#-tests)
- [Docker](#-docker)
- [Variables d'Environnement](#-variables-denvironnement)
- [Contribuer](#-contribuer)

---

## 🎯 Vue d'ensemble

**CodeFolio** est une API backend moderne permettant de gérer un portfolio professionnel complet. L'application suit une architecture modulaire basée sur les principes DDD (Domain-Driven Design) avec séparation claire des responsabilités.

### Points clés

- ✅ **API GraphQL** - Interface de requêtes flexible et performante
- ✅ **Architecture Modulaire** - 8 modules fonctionnels indépendants
- ✅ **TypeScript** - Code type-safe avec autocomplete
- ✅ **Authentification JWT** - Sécurité par tokens
- ✅ **MongoDB** - Base de données NoSQL avec Mongoose ODM
- ✅ **Docker Ready** - Conteneurisation complète
- ✅ **Tests unitaires** - Jest + Supertest
- ✅ **CORS configuré** - Prêt pour intégration frontend

---

## 🏗️ Architecture

### Pattern Modulaire

Chaque module suit la structure **MVC/Service Layer** :

```
module/
├── [entity].model.ts       # Modèle de données (Mongoose Schema)
├── [entity].service.ts     # Logique métier (Business Logic)
└── graphql/
    ├── [entity].typeDefs.ts   # Définitions de types GraphQL (Schéma)
    ├── [entity].resolvers.ts  # Resolvers GraphQL (Implémentation)
    └── index.ts               # Export du module
```

### Flux de Données

```
Client (Frontend)
    ↓
GraphQL Query/Mutation
    ↓
TypeDefs (Schéma/Contrat)
    ↓
Resolvers (Contrôleur)
    ↓
Service (Logique Métier)
    ↓
Model (Mongoose/MongoDB)
    ↓
Database Response
```

---

## 🛠️ Technologies

### Backend Core
| Technologie | Version | Rôle |
|------------|---------|------|
| **Node.js** | 18+ | Runtime JavaScript |
| **TypeScript** | 5.9.3 | Typage statique fort |
| **Express** | 4.21.2 | Framework HTTP |
| **Apollo Server** | 3.13.0 | Serveur GraphQL |
| **GraphQL** | 16.11.0 | Query Language |

### Base de Données
| Technologie | Version | Rôle |
|------------|---------|------|
| **MongoDB** | 8.19.2 | Base de données NoSQL |
| **Mongoose** | 8.19.2 | ODM (Object Data Modeling) |

### Authentification & Sécurité
| Technologie | Version | Rôle |
|------------|---------|------|
| **JWT** | 9.0.2 | JSON Web Tokens |
| **bcryptjs** | 3.0.2 | Hash de mots de passe |
| **dotenv** | 17.2.3 | Variables d'environnement |

### DevOps & Tests
| Technologie | Version | Rôle |
|------------|---------|------|
| **Docker** | - | Conteneurisation |
| **Jest** | 30.2.0 | Framework de tests |
| **Supertest** | 7.1.4 | Tests HTTP |
| **ts-jest** | 29.4.5 | Support TypeScript pour Jest |

---

## ⚡ Fonctionnalités

### 🔐 Authentification & Utilisateurs
- Inscription/Connexion avec JWT
- Gestion de profil utilisateur
- Middleware d'authentification
- Protection des routes

### 👤 Gestion de Portfolio
- **Projets** - CRUD complet des projets personnels
- **Expériences** - Parcours professionnel
- **Formations** - Éducation et certifications
- **Compétences** - Skills techniques avec niveaux
- **Documents** - Upload et gestion de fichiers (CV, images)
- **Réseaux Sociaux** - Liens vers profils externes
- **Visiteurs** - Tracking et analytics

### 📊 API GraphQL
- Queries pour lecture de données
- Mutations pour modifications
- Relations entre entités
- Filtrage et pagination
- Gestion d'erreurs typées

---

## 🚀 Installation

### Prérequis

- **Node.js** >= 18.0.0
- **MongoDB** >= 6.0 (ou Docker)
- **npm** ou **yarn**

### Installation locale

```bash
# 1. Cloner le repository
git clone https://github.com/labitayoub/CodeFolio.git
cd CodeFolio

# 2. Installer les dépendances
npm install

# 3. Créer le fichier .env
cp .env.example .env

# 4. Configurer les variables d'environnement
# Éditer le fichier .env avec vos valeurs

# 5. Démarrer MongoDB (si local)
mongod

# 6. Lancer en mode développement
npm run dev
```

Le serveur démarre sur **http://localhost:4000**

GraphQL Playground accessible sur **http://localhost:4000/graphql**

---

## 💻 Utilisation

### Scripts NPM

```bash
# Développement avec hot-reload
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Tests
npm test                  # Tous les tests
npm run test:watch       # Mode watch
npm run test:coverage    # Avec coverage
npm run test:graphql     # Tests GraphQL spécifiques

# Nettoyage
npm run clean            # Supprimer le dossier dist
```

### Développement

```bash
# Mode développement avec rechargement automatique
npm run dev
```

Le serveur se recharge automatiquement à chaque modification de fichier.

### Production

```bash
# 1. Build TypeScript → JavaScript
npm run build

# 2. Démarrer le serveur
npm start
```

---

## 📡 API GraphQL

### Endpoints

```
POST /graphql          # Endpoint GraphQL principal
GET  /graphql          # GraphQL Playground (dev only)
```

### Exemples de Requêtes

#### 1. **Inscription**

```graphql
mutation Register {
  register(
    nom: "Labit"
    prenom: "Ayoub"
    username: "ayoublabit"
    email: "ayoub@example.com"
    password: "SecurePass123!"
    bio: "Développeur Full Stack"
  ) {
    id
    username
    email
  }
}
```

#### 2. **Connexion**

```graphql
mutation Login {
  login(
    email: "ayoub@example.com"
    password: "SecurePass123!"
  )
  # Retourne un JWT token
}
```

#### 3. **Récupérer son Profil** (authentifié)

```graphql
query GetMyProfile {
  getProfil {
    id
    nom
    prenom
    username
    email
    bio
  }
}
```

**Headers requis:**
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

#### 4. **Portfolio Complet par Username**

```graphql
query GetPortfolio {
  getPortfolioByUsername(username: "ayoublabit") {
    user {
      nom
      prenom
      bio
    }
    projects {
      id
      title
      description
      technologies
    }
    experiences {
      id
      company
      position
      startDate
      endDate
    }
    formations {
      id
      institution
      degree
      field
    }
    skills {
      id
      name
      level
      category
    }
    social {
      platform
      url
    }
  }
}
```

#### 5. **Créer un Projet** (authentifié)

```graphql
mutation CreateProject {
  createProject(
    title: "Portfolio App"
    description: "Application de portfolio avec GraphQL"
    technologies: ["TypeScript", "Node.js", "MongoDB"]
    githubUrl: "https://github.com/labitayoub/CodeFolio"
    liveUrl: "https://codefolio.example.com"
  ) {
    id
    title
    createdAt
  }
}
```

#### 6. **Ajouter une Compétence**

```graphql
mutation AddSkill {
  createSkill(
    name: "TypeScript"
    category: "BACKEND"
    level: "ADVANCED"
  ) {
    id
    name
    level
  }
}
```

### Gestion d'Erreurs

L'API retourne des erreurs structurées :

```json
{
  "errors": [
    {
      "message": "User not found",
      "extensions": {
        "code": "USER_INPUT_ERROR"
      }
    }
  ]
}
```

**Codes d'erreur courants:**
- `UNAUTHENTICATED` - Token manquant ou invalide
- `FORBIDDEN` - Permissions insuffisantes
- `USER_INPUT_ERROR` - Données invalides
- `INTERNAL_SERVER_ERROR` - Erreur serveur

---

## 📁 Structure du Projet

```
CodeFolio/
├── src/
│   ├── index.ts                    # Point d'entrée de l'application
│   ├── config/
│   │   └── db.ts                   # Configuration MongoDB/Mongoose
│   ├── middleware/
│   │   └── auth.middleware.ts      # Middleware JWT authentification
│   └── modules/
│       ├── user/                   # Module Utilisateurs
│       │   ├── user.model.ts
│       │   ├── user.service.ts
│       │   └── graphql/
│       │       ├── user.typeDefs.ts
│       │       ├── user.resolvers.ts
│       │       └── index.ts
│       ├── project/                # Module Projets
│       │   ├── project.model.ts
│       │   ├── project.service.ts
│       │   └── graphql/
│       ├── experience/             # Module Expériences
│       ├── formation/              # Module Formations
│       ├── skill/                  # Module Compétences
│       ├── document/               # Module Documents
│       ├── visitors/               # Module Visiteurs/Analytics
│       └── resieauxSociaux/        # Module Réseaux Sociaux
├── tests/
│   ├── setup.js                    # Configuration Jest
│   ├── basic.test.ts               # Tests unitaires
│   └── basic.test.js
├── uml/
│   ├── diagramme.drawio            # Diagrammes d'architecture
│   └── useCase.drawio              # Cas d'utilisation
├── docker-compose.yml              # Orchestration Docker
├── Dockerfile                      # Image Docker
├── package.json                    # Dépendances npm
├── tsconfig.json                   # Configuration TypeScript
├── jest.config.json                # Configuration Jest
├── .env                            # Variables d'environnement
├── .gitignore
└── README.md
```

---

## 🧪 Tests

### Configuration Jest

Le projet utilise **Jest** avec support TypeScript via `ts-jest`.

```bash
# Lancer tous les tests
npm test

# Mode watch (rechargement auto)
npm run test:watch

# Avec coverage
npm run test:coverage

# Tests GraphQL spécifiques
npm run test:graphql
```

### Exemple de Test

```typescript
// tests/user.test.ts
import { userService } from '../src/modules/user/user.service';

describe('UserService', () => {
  it('should create a new user', async () => {
    const userData = {
      email: 'test@example.com',
      password: 'password123',
      username: 'testuser'
    };
    
    const user = await userService.createUser(userData);
    
    expect(user.email).toBe(userData.email);
    expect(user.id).toBeDefined();
  });
});
```

### Coverage

Le projet vise un taux de couverture de **80%** minimum :

```json
{
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
}
```

---

## 🐳 Docker

### Démarrage avec Docker Compose

```bash
# Démarrer tous les services (MongoDB + Backend)
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter les services
docker-compose down

# Arrêter et supprimer les volumes
docker-compose down -v
```

### Architecture Docker

Le fichier `docker-compose.yml` orchestre 2 services :

#### 1. **MongoDB**
```yaml
mongodb:
  image: mongo:latest
  ports:
    - "27017:27017"
  volumes:
    - mongodb_data:/data/db
```

#### 2. **Backend Node.js**
```yaml
backend:
  build: .
  ports:
    - "4000:4000"
  depends_on:
    - mongodb
  environment:
    - MONGO_URI=mongodb://mongodb:27017/codefolio
```

### Build Manuel

```bash
# Build de l'image
docker build -t codefolio-backend .

# Run du conteneur
docker run -p 4000:4000 \
  -e MONGO_URI=mongodb://localhost:27017/codefolio \
  -e JWT_SECRET=your_secret \
  codefolio-backend
```

### Dockerfile Multi-stage

Le `Dockerfile` utilise un build multi-stage pour optimiser la taille :

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["npm", "start"]
```

**Avantages:**
- Image légère (Alpine Linux)
- Dépendances de production uniquement
- Layer caching optimisé

---

## 🔐 Variables d'Environnement

Créer un fichier `.env` à la racine du projet :

```env
# ================================
# APPLICATION
# ================================
NODE_ENV=development
PORT=4000

# ================================
# DATABASE
# ================================
MONGO_URI=mongodb://localhost:27017/codefolio
# ou pour Docker: mongodb://mongodb:27017/codefolio

# ================================
# AUTHENTICATION
# ================================
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your-refresh-token-secret

# ================================
# CORS
# ================================
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000

# ================================
# FILE UPLOAD (optionnel)
# ================================
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=image/jpeg,image/png,application/pdf

# ================================
# RATE LIMITING (optionnel)
# ================================
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Variables Critiques

| Variable | Description | Exemple |
|----------|-------------|---------|
| `MONGO_URI` | URL de connexion MongoDB | `mongodb://localhost:27017/codefolio` |
| `JWT_SECRET` | Clé secrète pour signer les JWT | String aléatoire sécurisée |
| `PORT` | Port du serveur | `4000` |
| `NODE_ENV` | Environnement d'exécution | `development` ou `production` |

---

## 📚 Concepts GraphQL

### TypeDefs (Schema Definitions)

**Rôle:** Définir le **CONTRAT** de l'API (structure des données)

```typescript
// user.typeDefs.ts
export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }
  
  type Query {
    getUserByUsername(username: String!): User
  }
`;
```

### Resolvers (Implémentation)

**Rôle:** Définir **COMMENT** récupérer les données

```typescript
// user.resolvers.ts
export const resolvers = {
  Query: {
    getUserByUsername: async (_, { username }) => {
      return await User.findOne({ username });
    }
  }
};
```

### Architecture GraphQL dans CodeFolio

```
Client Query
    ↓
TypeDefs (Schéma)          → "Qu'est-ce qui est disponible ?"
    ↓
Resolvers (Contrôleur)     → "Comment l'obtenir ?"
    ↓
Service (Logique métier)   → "Validation & transformation"
    ↓
Model (MongoDB)            → "Accès aux données"
    ↓
Response
```

---

## 🎨 Modules Fonctionnels

### 1. **Module User** 👤
- Inscription/Connexion
- Gestion de profil
- Authentification JWT
- CRUD utilisateurs

### 2. **Module Project** 💼
- CRUD projets
- Technologies utilisées
- Liens GitHub/Live demo
- Images de projets

### 3. **Module Experience** 🏢
- Parcours professionnel
- Postes occupés
- Périodes d'emploi
- Descriptions

### 4. **Module Formation** 🎓
- Éducation académique
- Certifications
- Diplômes
- Institutions

### 5. **Module Skill** 🛠️
- Compétences techniques
- Niveaux de maîtrise
- Catégories (Frontend, Backend, etc.)
- Années d'expérience

### 6. **Module Document** 📄
- Upload de fichiers
- CV PDF
- Images de profil
- Galeries de projets

### 7. **Module Visitors** 📊
- Tracking de visites
- Analytics basiques
- Compteurs de vues
- Statistiques

### 8. **Module Réseaux Sociaux** 🌐
- GitHub, LinkedIn, Twitter
- Portfolio personnel
- Liens externes
- Métadonnées

---

## 🔒 Sécurité

### Mesures Implémentées

✅ **Hash de mots de passe** - bcryptjs avec salt rounds  
✅ **JWT tokens** - Authentification stateless  
✅ **Variables d'environnement** - Secrets protégés  
✅ **CORS configuré** - Origines autorisées uniquement  
✅ **Validation des inputs** - Protection injection  
✅ **Middleware d'authentification** - Routes protégées  

### Bonnes Pratiques

```typescript
// 1. Ne jamais exposer les mots de passe
password: { 
  type: String, 
  required: true,
  select: false  // ❌ Non retourné par défaut
}

// 2. Hash avant sauvegarde
const hashedPassword = await bcrypt.hash(password, 10);

// 3. Vérifier l'authentification dans les resolvers
if (!context.userId) {
  throw new AuthenticationError('Not authenticated');
}
```

---

## 🚀 Déploiement

### Déploiement sur VPS (Ubuntu)

```bash
# 1. Installer Node.js & MongoDB
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs mongodb

# 2. Cloner le projet
git clone https://github.com/labitayoub/CodeFolio.git
cd CodeFolio

# 3. Installer dépendances
npm ci --only=production

# 4. Build
npm run build

# 5. Configuration PM2 (process manager)
npm install -g pm2
pm2 start dist/index.js --name codefolio

# 6. Nginx reverse proxy
sudo nano /etc/nginx/sites-available/codefolio
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Déploiement sur Cloud

#### Heroku
```bash
# Déploiement Heroku
heroku create codefolio-api
heroku addons:create mongolab
git push heroku master
```

#### Vercel/Railway
- Support natif Node.js + MongoDB
- Configuration via fichier `vercel.json` ou `railway.json`

---

## 🤝 Contribuer

Les contributions sont les bienvenues !

### Processus

1. **Fork** le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une **Pull Request**

### Guidelines

- Code TypeScript strict
- Tests unitaires pour nouvelles features
- Documentation des nouvelles API
- Respect de l'architecture modulaire

---

## 📄 Licence

Ce projet est sous licence **ISC**.

---

## 👨‍💻 Auteur

**Ayoub Labit**

- GitHub: [@labitayoub](https://github.com/labitayoub)
- Repository: [CodeFolio](https://github.com/labitayoub/CodeFolio)

---

## 📞 Support

Pour toute question ou problème :

1. Ouvrir une [Issue](https://github.com/labitayoub/CodeFolio/issues)
2. Consulter la documentation GraphQL Playground
3. Vérifier les logs : `docker-compose logs -f backend`

---

## 🎉 Remerciements

- **Apollo Server** - Framework GraphQL
- **Mongoose** - ODM MongoDB élégant
- **TypeScript** - Typage statique puissant
- Communauté open-source

---

<div align="center">

**[⬆ Retour en haut](#-codefolio)**

Made with ❤️ by Ayoub Labit

</div>
