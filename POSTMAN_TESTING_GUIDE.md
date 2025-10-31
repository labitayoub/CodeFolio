# Guide de Test avec Postman - CodeFolio API

## 🚀 Configuration Initiale

### 1. Installation de l'extension Postman dans VS Code
1. Ouvrez VS Code
2. Allez dans Extensions (Ctrl+Shift+X)
3. Recherchez "Postman" et installez l'extension officielle
4. Redémarrez VS Code si nécessaire

### 2. Import de la Collection
1. Ouvrez l'extension Postman dans VS Code
2. Cliquez sur "Import"
3. Sélectionnez le fichier `CodeFolio-Postman-Collection.json`
4. La collection sera importée avec tous les tests

### 3. Configuration des Variables
La collection utilise des variables d'environnement :
- `baseUrl` : http://localhost:4000/graphql (URL de votre serveur GraphQL)
- `authToken` : Token JWT (sera automatiquement rempli après login)
- `userId` : ID de l'utilisateur (à remplir manuellement après registration)

## 📋 Ordre de Test Recommandé

### Phase 1 : Authentication
1. **Register User** - Créer un nouveau compte utilisateur
2. **Login User** - Se connecter et récupérer le token JWT
   - ⚠️ Le token sera automatiquement sauvegardé dans la variable `authToken`

### Phase 2 : Profile Management
3. **Get Profile** - Récupérer les informations du profil
4. **Update Profile** - Modifier les informations du profil

### Phase 3 : Projects Management
5. **Create Project** - Créer un nouveau projet
6. **Get All Projects** - Lister tous les projets
7. **Get Project by ID** - Récupérer un projet spécifique
8. **Update Project** - Modifier un projet
9. **Delete Project** - Supprimer un projet

### Phase 4 : Skills & Competences
10. **Create Skill** - Ajouter une compétence technique
11. **Create Competence** - Ajouter une compétence comportementale
12. **Get All Skills** - Lister toutes les compétences
13. **Get All Competences** - Lister toutes les compétences comportementales
14. **Update Skill** - Modifier une compétence
15. **Delete Skill** - Supprimer une compétence

### Phase 5 : Experience Management
16. **Create Experience** - Ajouter une expérience professionnelle
17. **Get All Experiences** - Lister toutes les expériences
18. **Update Experience** - Modifier une expérience
19. **Delete Experience** - Supprimer une expérience

### Phase 6 : Formation Management
20. **Create Formation** - Ajouter une formation
21. **Get All Formations** - Lister toutes les formations
22. **Get Formation by ID** - Récupérer une formation spécifique
23. **Update Formation** - Modifier une formation
24. **Delete Formation** - Supprimer une formation

### Phase 7 : Document Management
25. **Create Document** - Ajouter un document (CV, certificats, etc.)
26. **Get All Documents** - Lister tous les documents
27. **Get Document by ID** - Récupérer un document spécifique
28. **Update Document** - Modifier un document
29. **Delete Document** - Supprimer un document

### Phase 8 : Social Networks
30. **Create Réseau Social** - Ajouter un lien de réseau social
31. **Get All Réseaux Sociaux** - Lister tous les réseaux sociaux
32. **Get Réseau Social by ID** - Récupérer un réseau social spécifique
33. **Update Réseau Social** - Modifier un réseau social
34. **Delete Réseau Social** - Supprimer un réseau social

### Phase 9 : Analytics (Visitors)
35. **Create Visitor** - Enregistrer une visite
36. **Get All Visitors** - Lister toutes les visites
37. **Get Visitor by ID** - Récupérer une visite spécifique
38. **Update Visitor** - Modifier les données d'une visite
39. **Delete Visitor** - Supprimer une visite

## 🔧 Instructions Spéciales

### Récupération des IDs
Après chaque création (Create), copiez l'ID retourné dans la réponse pour l'utiliser dans les tests suivants :
- Remplacez `PROJECT_ID_HERE` par l'ID réel du projet
- Remplacez `SKILL_ID_HERE` par l'ID réel de la compétence
- Remplacez `EXPERIENCE_ID_HERE` par l'ID réel de l'expérience
- Etc.

### Configuration du userId
1. Après avoir créé un utilisateur avec "Register User"
2. Copiez l'ID de l'utilisateur depuis la réponse
3. Mettez à jour la variable `userId` dans les variables de collection
4. Ou remplacez manuellement `{{userId}}` dans les requêtes qui en ont besoin

### Headers d'Authentification
- Toutes les requêtes (sauf Register et Login) nécessitent le header `Authorization: Bearer {{authToken}}`
- Le token est automatiquement ajouté après un login réussi

## 🧪 Tests de Validation

### Scénarios de Test Complets

#### Scénario 1 : Création d'un Portfolio Complet
1. Register → Login → Create Project → Create Skills → Create Experience → Create Formation

#### Scénario 2 : Gestion des Documents
1. Login → Create Document → Get Documents → Update Document → Delete Document

#### Scénario 3 : Analytics des Visiteurs
1. Login → Create Visitor → Get Visitors → Update Visitor (session prolongée)

#### Scénario 4 : Gestion des Réseaux Sociaux
1. Login → Create LinkedIn → Create GitHub → Create Twitter → Get All → Update → Delete

## 🚨 Dépannage

### Erreurs Communes
- **401 Unauthorized** : Token expiré ou manquant → Refaire un login
- **404 Not Found** : ID incorrect → Vérifier l'ID utilisé
- **500 Internal Server Error** : Problème serveur → Vérifier les logs du serveur

### Vérification du Serveur
Assurez-vous que votre serveur GraphQL fonctionne :
```bash
npm run dev
```
Le serveur doit être accessible sur http://localhost:4000/graphql

### Variables d'Environnement
Vérifiez que votre fichier `.env` contient :
```
PORT=4000
MONGODB_URI=mongodb://localhost:27017/codefolio
JWT_SECRET=your_jwt_secret_key
```

## 📊 Résultats Attendus

Chaque test doit retourner :
- **Status 200** pour les requêtes réussies
- **Données JSON** avec la structure GraphQL attendue
- **Pas d'erreurs** dans le champ `errors` de la réponse

### Exemple de Réponse Réussie
```json
{
  "data": {
    "createProject": {
      "id": "60f7b3b3b3b3b3b3b3b3b3b3",
      "titre": "Portfolio React",
      "description": "Un portfolio moderne...",
      "urlGit": "https://github.com/ayoub/portfolio",
      "urlDemo": "https://ayoub-portfolio.netlify.app",
      "image": "https://example.com/portfolio-image.jpg",
      "userId": "60f7b3b3b3b3b3b3b3b3b3b2"
    }
  }
}
```

## 🎯 Objectifs des Tests

- ✅ Vérifier que toutes les mutations CRUD fonctionnent
- ✅ Tester l'authentification et l'autorisation
- ✅ Valider la structure des données retournées
- ✅ Confirmer la gestion des erreurs
- ✅ Tester les relations entre les entités
- ✅ Vérifier la performance des requêtes

Bonne chance avec vos tests ! 🚀