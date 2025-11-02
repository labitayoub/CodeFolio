# Guide d'Utilisation - Collection Postman CodeFolio

## 📦 Fichier de Collection
**Fichier:** `CodeFolio-Postman-Collection.json`

Cette collection contient **49 requêtes** organisées en **9 catégories** pour tester toutes les fonctionnalités de votre API GraphQL CodeFolio.

## 🚀 Installation et Import

### Méthode 1: Via l'Extension VS Code Postman
1. Installez l'extension **Postman** dans VS Code
2. Ouvrez la vue Postman (icône dans la barre latérale)
3. Cliquez sur **Import**
4. Sélectionnez le fichier `CodeFolio-Postman-Collection.json`
5. La collection sera importée avec toutes ses requêtes

### Méthode 2: Via l'Application Postman Desktop
1. Ouvrez Postman Desktop
2. Cliquez sur **Import** (en haut à gauche)
3. Glissez-déposez le fichier `CodeFolio-Postman-Collection.json`
4. Ou cliquez sur **Upload Files** et sélectionnez le fichier
5. Cliquez sur **Import**

## 📋 Structure de la Collection

### 1. **Authentication** (2 requêtes)
- ✅ Register User - Créer un nouveau compte
- ✅ Login User - Se connecter et obtenir un token JWT

### 2. **User Profile** (2 requêtes)
- ✅ Get Profile - Récupérer le profil utilisateur
- ✅ Update Profile - Modifier le profil

### 3. **Projects** (5 requêtes)
- ✅ Create Project
- ✅ Get All Projects
- ✅ Get Project by ID
- ✅ Update Project
- ✅ Delete Project

### 4. **Skills & Competences** (8 requêtes)
- ✅ Create Skill (Compétence technique)
- ✅ Create Competence (Compétence comportementale)
- ✅ Get All Skills
- ✅ Get All Competences
- ✅ Update Skill
- ✅ Update Competence
- ✅ Delete Skill
- ✅ Delete Competence

### 5. **Experiences** (4 requêtes)
- ✅ Create Experience
- ✅ Get All Experiences
- ✅ Update Experience
- ✅ Delete Experience

### 6. **Formations** (5 requêtes)
- ✅ Create Formation
- ✅ Get All Formations
- ✅ Get Formation by ID
- ✅ Update Formation
- ✅ Delete Formation

### 7. **Documents** (5 requêtes)
- ✅ Create Document
- ✅ Get All Documents
- ✅ Get Document by ID
- ✅ Update Document
- ✅ Delete Document

### 8. **Réseaux Sociaux** (5 requêtes)
- ✅ Create Réseau Social
- ✅ Get All Réseaux Sociaux
- ✅ Get Réseau Social by ID
- ✅ Update Réseau Social
- ✅ Delete Réseau Social

### 9. **Visitors Analytics** (5 requêtes)
- ✅ Create Visitor
- ✅ Get All Visitors
- ✅ Get Visitor by ID
- ✅ Update Visitor
- ✅ Delete Visitor

## 🔧 Configuration des Variables

La collection utilise des **variables automatiques** qui sont remplies au fur et à mesure de vos tests:

| Variable | Description | Rempli automatiquement |
|----------|-------------|------------------------|
| `baseUrl` | URL de l'API GraphQL | ❌ (défaut: `http://localhost:4000/graphql`) |
| `authToken` | Token JWT d'authentification | ✅ (après Login) |
| `userId` | ID de l'utilisateur | ✅ (après Register) |
| `projectId` | ID du dernier projet créé | ✅ (après Create Project) |
| `skillId` | ID de la dernière compétence créée | ✅ (après Create Skill) |
| `competenceId` | ID de la dernière compétence comportementale | ✅ (après Create Competence) |
| `experienceId` | ID de la dernière expérience créée | ✅ (après Create Experience) |
| `formationId` | ID de la dernière formation créée | ✅ (après Create Formation) |
| `documentId` | ID du dernier document créé | ✅ (après Create Document) |
| `reseauSocialId` | ID du dernier réseau social créé | ✅ (après Create Réseau Social) |
| `visitorId` | ID du dernier visiteur créé | ✅ (après Create Visitor) |

### Modifier les Variables
1. Dans Postman, cliquez sur la collection **CodeFolio API**
2. Allez dans l'onglet **Variables**
3. Modifiez la valeur de `baseUrl` si nécessaire
4. Les autres variables seront automatiquement remplies

## 📖 Guide d'Utilisation Étape par Étape

### Étape 1: Démarrer le Serveur
```bash
npm run dev
```
Votre serveur doit être accessible sur `http://localhost:4000/graphql`

### Étape 2: Authentication
1. **Register User** - Exécutez cette requête pour créer un compte
   - Le `userId` sera automatiquement sauvegardé
   
2. **Login User** - Connectez-vous
   - Le `authToken` sera automatiquement sauvegardé
   - Ce token sera utilisé dans toutes les requêtes suivantes

### Étape 3: Tester le Profile
3. **Get Profile** - Vérifiez vos informations
4. **Update Profile** - Modifiez votre bio

### Étape 4: Créer du Contenu
5. **Create Project** - Ajoutez un projet
6. **Create Skill** - Ajoutez une compétence technique
7. **Create Experience** - Ajoutez une expérience professionnelle
8. **Create Formation** - Ajoutez une formation
9. **Create Document** - Téléchargez un CV
10. **Create Réseau Social** - Ajoutez LinkedIn, GitHub, etc.

### Étape 5: Consulter les Données
- Utilisez les requêtes **Get All...** pour voir toutes vos données
- Utilisez les requêtes **Get ... by ID** pour des éléments spécifiques

### Étape 6: Modifier et Supprimer
- Testez les requêtes **Update...** pour modifier
- Testez les requêtes **Delete...** pour supprimer

## 🎯 Tests Automatiques

La collection inclut des **scripts de test automatiques** pour:
- ✅ Vérifier que les requêtes retournent un statut 200
- ✅ Valider la structure des données retournées
- ✅ Sauvegarder automatiquement les IDs dans les variables
- ✅ Vérifier que l'authentification fonctionne

### Exécuter les Tests
1. Cliquez sur la collection **CodeFolio API**
2. Cliquez sur **Run** (ou **Runner**)
3. Sélectionnez toutes les requêtes ou un sous-ensemble
4. Cliquez sur **Run CodeFolio API**
5. Les tests s'exécuteront automatiquement

## 🔐 Authentification

### Token JWT
- Après un **Login** réussi, le token est automatiquement ajouté au header `Authorization`
- Format: `Bearer <token>`
- Toutes les requêtes (sauf Register et Login) nécessitent ce token

### Si le Token Expire
1. Réexécutez la requête **Login User**
2. Le nouveau token sera automatiquement sauvegardé

## 📊 Exemples de Données

### Données de Test Fournies
La collection inclut des données d'exemple pour:
- ✅ Utilisateur avec nom, prénom, email, bio
- ✅ Projets avec titre, description, URLs Git/Demo
- ✅ Compétences techniques (React, Node.js, etc.)
- ✅ Compétences comportementales (Leadership, etc.)
- ✅ Expériences professionnelles avec entreprise, rôle, dates
- ✅ Formations avec filière, école, localisation
- ✅ Documents (CV, certificats)
- ✅ Réseaux sociaux (LinkedIn, GitHub, Twitter)
- ✅ Analytics de visiteurs avec géolocalisation

### Personnaliser les Données
Vous pouvez modifier les variables dans chaque requête:
1. Cliquez sur une requête
2. Allez dans l'onglet **Body** → **GraphQL**
3. Modifiez les valeurs dans **GraphQL Variables**

## 🚨 Dépannage

### Erreur 401 Unauthorized
- **Cause:** Token expiré ou manquant
- **Solution:** Exécutez **Login User** à nouveau

### Erreur 404 Not Found
- **Cause:** ID incorrect dans la requête
- **Solution:** Vérifiez la variable utilisée (ex: `{{projectId}}`)

### Erreur 500 Internal Server Error
- **Cause:** Problème serveur ou données invalides
- **Solution:** Vérifiez les logs du serveur avec `npm run dev`

### Variables Non Remplies
- **Cause:** Script de test n'a pas capturé l'ID
- **Solution:** 
  1. Vérifiez que la requête a réussi
  2. Copiez manuellement l'ID depuis la réponse
  3. Collez-le dans **Variables** de la collection

### Serveur Non Accessible
- **Cause:** Serveur non démarré ou URL incorrecte
- **Solution:**
  ```bash
  npm run dev
  ```
  Vérifiez que le serveur écoute sur `http://localhost:4000`

## 📈 Scénarios de Test Complets

### Scénario 1: Portfolio Complet
```
1. Register User
2. Login User
3. Update Profile
4. Create Project (x3)
5. Create Skill (x5)
6. Create Experience (x2)
7. Create Formation (x1)
8. Create Document (CV)
9. Create Réseau Social (LinkedIn, GitHub)
10. Get All Projects
11. Get Profile
```

### Scénario 2: Gestion CRUD Complète
```
Pour chaque module:
1. Create → Get All → Get by ID → Update → Get by ID → Delete
```

### Scénario 3: Analytics Visiteurs
```
1. Login User
2. Create Visitor (session initiale)
3. Update Visitor (prolonger session, ajouter pages)
4. Get All Visitors
5. Analyser les données
```

## 🎓 Conseils Pro

1. **Ordre d'Exécution:** Suivez l'ordre des dossiers pour éviter les erreurs
2. **Variables:** Laissez les scripts automatiques remplir les variables
3. **Tests en Masse:** Utilisez le Runner pour exécuter toute la collection
4. **Documentation:** Chaque requête a une description détaillée
5. **Environnements:** Créez des environnements Postman pour dev/staging/prod

## 📝 Variables d'Environnement du Serveur

Assurez-vous que votre fichier `.env` contient:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/codefolio
JWT_SECRET=your_secure_jwt_secret_key_here
JWT_EXPIRES_IN=7d
```

## 🎉 Résultat Attendu

Après avoir exécuté toute la collection avec succès:
- ✅ 1 utilisateur créé et authentifié
- ✅ Plusieurs projets dans la base de données
- ✅ Liste de compétences techniques et comportementales
- ✅ Expériences professionnelles enregistrées
- ✅ Formations académiques sauvegardées
- ✅ Documents associés au profil
- ✅ Liens vers réseaux sociaux configurés
- ✅ Analytics de visiteurs fonctionnelles

## 📞 Support

En cas de problème:
1. Vérifiez que le serveur est démarré
2. Consultez les logs du serveur
3. Vérifiez la console Postman pour les erreurs
4. Relisez le fichier `POSTMAN_TESTING_GUIDE.md`

---

**Bonne chance avec vos tests! 🚀**

Développé avec ❤️ par Ayoub Labit
