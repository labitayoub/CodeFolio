# Guide de Test GraphQL pour CodeFolio

## Méthodes de Test GraphQL

### 1. Tests d'Intégration avec Supertest (Recommandé)

Utilisez les tests existants dans `src/tests/integration.test.ts` qui testent l'API GraphQL complète avec Express et Apollo Server.

**Avantages :**
- Teste l'API complète (serveur + base de données)
- Simule les vraies requêtes HTTP
- Teste l'authentification et les middlewares

**Exemple d'exécution :**
```bash
npm test -- integration.test.ts
```

### 2. Tests Unitaires avec GraphQL-Request

Utilisez `graphql-request` pour tester les requêtes GraphQL de manière isolée (voir `src/tests/graphql-examples.test.ts`).

**Avantages :**
- Plus léger que les tests d'intégration
- Facile à utiliser pour tester des requêtes spécifiques
- Bon pour les tests unitaires des resolvers

**Exemple d'utilisation :**
```typescript
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient('http://localhost:4000/graphql');

// Test d'une requête simple
const query = gql`
  query GetUsers {
    users {
      _id
      nom
      prenom
      email
    }
  }
`;

const data = await client.request(query);
```

### 3. Tests avec Apollo Client (pour applications frontend)

Si vous testez depuis un client frontend, utilisez Apollo Client avec des mocks.

### 4. Tests manuels avec GraphQL Playground

**Démarrer le serveur :**
```bash
npm start
```

**Accéder à GraphQL Playground :**
- Ouvrez http://localhost:4000/graphql dans votre navigateur
- Interface interactive pour tester les requêtes

**Exemples de requêtes à tester :**

#### Mutation d'inscription :
```graphql
mutation Register($input: UserInput!) {
  register(input: $input) {
    _id
    nom
    prenom
    email
    bio
  }
}
```

Variables :
```json
{
  "input": {
    "nom": "Dupont",
    "prenom": "Jean",
    "email": "jean.dupont@example.com",
    "password": "password123",
    "bio": "Développeur passionné"
  }
}
```

#### Mutation de connexion :
```graphql
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
```

#### Requête protégée (avec token) :
```graphql
query GetProfil {
  getProfil {
    _id
    nom
    prenom
    email
    bio
  }
}
```

Headers :
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

## Structure des Tests

### Tests d'Intégration (`integration.test.ts`)
- Teste l'API complète
- Utilise une base de données de test en mémoire
- Vérifie les réponses HTTP et GraphQL

### Tests Unitaires (`*.service.test.ts`)
- Teste la logique métier isolée
- Mocke les dépendances (base de données, etc.)
- Plus rapides à exécuter

### Tests des Resolvers (`*.resolvers.test.ts`)
- Teste les resolvers GraphQL spécifiquement
- Vérifie la transformation des données

## Commandes Utiles

```bash
# Exécuter tous les tests
npm test

# Exécuter les tests en mode watch
npm run test:watch

# Exécuter les tests avec couverture
npm run test:coverage

# Compiler le projet (nécessaire avant les tests)
npm run build
```

## Bonnes Pratiques

1. **Isolation** : Chaque test doit être indépendant
2. **Nettoyage** : Utilisez `beforeEach` et `afterEach` pour nettoyer la DB de test
3. **Données de test** : Créez des données cohérentes pour chaque test
4. **Assertions** : Vérifiez à la fois le succès et les erreurs
5. **Authentification** : Testez les routes protégées et non-protégées

## Dépannage

### Erreur "Cannot use import statement outside a module"
- Vérifiez la configuration Jest dans `jest.config.json`
- Assurez-vous que `"type": "module"` est dans `package.json`

### Erreur de compilation TypeScript
- Exécutez `npm run build` pour vérifier les erreurs
- Corrigez les types manquants dans vos modèles et services

### Erreur de connexion à la base de données
- Vérifiez que MongoDB Memory Server est correctement configuré
- Assurez-vous que les variables d'environnement sont chargées