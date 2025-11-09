# 🎨 Script Frontend React - Portfolio CodeFolio

## 📋 Vue d'ensemble

Application React permettant :
- **Visiteurs** : Voir le portfolio public via `http://localhost:5173/username` (READ ONLY)
- **Utilisateurs** : Register/Login + Dashboard privé pour gérer leur portfolio (CRUD)

---

## 🏗️ Structure du projet

```
codefolio-frontend/
├── src/
│   ├── apollo/
│   │   └── client.js
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx              # Navigation publique
│   │   │   ├── DashboardLayout.jsx     # Layout dashboard
│   │   │   ├── Sidebar.jsx             # Menu latéral
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── portfolio/                   # Vue publique READ ONLY
│   │   │   ├── PortfolioHeader.jsx     # Nom, prénom, bio
│   │   │   ├── ProjectsSection.jsx     # Grid de projets
│   │   │   ├── ExperienceTimeline.jsx  # Timeline expériences
│   │   │   ├── FormationsSection.jsx   # Liste formations
│   │   │   ├── SkillsSection.jsx       # Badges compétences
│   │   │   ├── DocumentsSection.jsx    # CV, certificats
│   │   │   └── SocialLinks.jsx         # Liens sociaux
│   │   │
│   │   ├── dashboard/                   # CRUD complet
│   │   │   ├── projects/
│   │   │   │   ├── ProjectList.jsx
│   │   │   │   ├── ProjectCard.jsx
│   │   │   │   └── ProjectModal.jsx
│   │   │   ├── experiences/
│   │   │   │   ├── ExperienceList.jsx
│   │   │   │   ├── ExperienceCard.jsx
│   │   │   │   └── ExperienceModal.jsx
│   │   │   ├── formations/
│   │   │   │   ├── FormationList.jsx
│   │   │   │   ├── FormationCard.jsx
│   │   │   │   └── FormationModal.jsx
│   │   │   ├── skills/
│   │   │   │   ├── SkillList.jsx
│   │   │   │   ├── SkillBadge.jsx
│   │   │   │   └── SkillModal.jsx
│   │   │   ├── documents/
│   │   │   │   ├── DocumentList.jsx
│   │   │   │   └── DocumentModal.jsx
│   │   │   ├── social/
│   │   │   │   ├── SocialList.jsx
│   │   │   │   └── SocialModal.jsx
│   │   │   └── profile/
│   │   │       └── ProfileEdit.jsx
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── Modal.jsx
│   │       ├── Card.jsx
│   │       └── Spinner.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx                    # Landing page
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Portfolio.jsx               # /:username (public)
│   │   ├── Dashboard.jsx
│   │   ├── DashboardProjects.jsx
│   │   ├── DashboardExperiences.jsx
│   │   ├── DashboardFormations.jsx
│   │   ├── DashboardSkills.jsx
│   │   ├── DashboardDocuments.jsx
│   │   ├── DashboardSocial.jsx
│   │   └── DashboardProfile.jsx
│   │
│   ├── graphql/
│   │   ├── queries.js
│   │   └── mutations.js
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── usePortfolio.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

---

## 🛣️ Routes de l'application

```javascript
// Routes publiques
/ → Home (landing page avec CTA "Créer mon portfolio")
/login → Page login
/register → Page register
/:username → Portfolio public READ ONLY (ex: /johndoe)

// Routes protégées (authentification requise)
/dashboard → Dashboard principal
/dashboard/projects → Gestion projets
/dashboard/experiences → Gestion expériences
/dashboard/formations → Gestion formations
/dashboard/skills → Gestion compétences
/dashboard/documents → Gestion documents
/dashboard/social → Gestion réseaux sociaux
/dashboard/profile → Modifier profil (nom, prenom, username, email, bio)
```

---

## 🔐 Flux d'authentification

```
1. Visiteur arrive sur / (Home)
2. Clique "Créer mon portfolio" → /register
3. Formulaire : nom, prenom, username, email, password, bio
4. Backend crée User avec username UNIQUE
5. Redirection vers /login
6. Login (email, password) → Backend retourne JWT token
7. Token stocké dans localStorage
8. Redirection vers /dashboard
9. User peut gérer son portfolio
10. Son portfolio est accessible publiquement via /:username
```

---

## 📊 Queries et Mutations GraphQL

### Queries

```javascript
// graphql/queries.js
import { gql } from '@apollo/client';

// Pour user connecté (dashboard)
export const GET_PROFIL = gql`
  query GetProfil {
    getProfil {
      id nom prenom username email bio
    }
  }
`;

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id titre description urlGit urlDemo image userId
    }
  }
`;

export const GET_EXPERIENCES = gql`
  query GetExperiences {
    getExperiences {
      id company role startDate endDate description
    }
  }
`;

export const GET_FORMATIONS = gql`
  query GetFormations {
    formations {
      id filiere ecole localisation dateDebut dateFinal description userId
    }
  }
`;

export const GET_SKILLS = gql`
  query GetSkills {
    getSkills {
      id name categorie
    }
  }
`;

export const GET_DOCUMENTS = gql`
  query GetDocuments {
    documents {
      _id nom urlStocket userId
    }
  }
`;

export const GET_SOCIAL = gql`
  query GetSocial {
    resieauxSociauxs {
      id nom liensSociaux icon userId
    }
  }
`;

// ⭐ NOUVELLE QUERY - Pour portfolio public (visiteur)
export const GET_PORTFOLIO_BY_USERNAME = gql`
  query GetPortfolioByUsername($username: String!) {
    getPortfolioByUsername(username: $username) {
      user {
        id nom prenom username bio
      }
      projects {
        id titre description urlGit urlDemo image
      }
      experiences {
        id company role startDate endDate description
      }
      formations {
        id filiere ecole localisation dateDebut dateFinal description
      }
      skills {
        id name categorie
      }
      documents {
        _id nom urlStocket
      }
      social {
        id nom liensSociaux icon
      }
    }
  }
`;
```

### Mutations

```javascript
// graphql/mutations.js
import { gql } from '@apollo/client';

// Auth
export const REGISTER = gql`
  mutation Register($nom: String!, $prenom: String!, $username: String!, $email: String!, $password: String!, $bio: String) {
    register(nom: $nom, prenom: $prenom, username: $username, email: $email, password: $password, bio: $bio) {
      id nom prenom username email bio
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const UPDATE_PROFIL = gql`
  mutation UpdateProfil($nom: String, $prenom: String, $username: String, $email: String, $bio: String) {
    updateProfil(nom: $nom, prenom: $prenom, username: $username, email: $email, bio: $bio) {
      id nom prenom username email bio
    }
  }
`;

// Projects
export const CREATE_PROJECT = gql`
  mutation CreateProject($titre: String!, $description: String!, $urlGit: String!, $urlDemo: String!, $image: String!, $userId: ID!) {
    createProject(titre: $titre, description: $description, urlGit: $urlGit, urlDemo: $urlDemo, image: $image, userId: $userId) {
      id titre description urlGit urlDemo image
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: ID!, $titre: String, $description: String, $urlGit: String, $urlDemo: String, $image: String) {
    updateProject(id: $id, titre: $titre, description: $description, urlGit: $urlGit, urlDemo: $urlDemo, image: $image) {
      id titre description urlGit urlDemo image
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

// Experiences
export const CREATE_EXPERIENCE = gql`
  mutation CreateExperience($company: String!, $role: String!, $startDate: String!, $endDate: String, $description: String) {
    createExperience(company: $company, role: $role, startDate: $startDate, endDate: $endDate, description: $description) {
      id company role startDate endDate description
    }
  }
`;

export const UPDATE_EXPERIENCE = gql`
  mutation UpdateExperience($id: ID!, $company: String, $role: String, $startDate: String, $endDate: String, $description: String) {
    updateExperience(id: $id, company: $company, role: $role, startDate: $startDate, endDate: $endDate, description: $description) {
      id company role startDate endDate description
    }
  }
`;

export const DELETE_EXPERIENCE = gql`
  mutation DeleteExperience($id: ID!) {
    deleteExperience(id: $id) {
      id
    }
  }
`;

// Formations
export const CREATE_FORMATION = gql`
  mutation CreateFormation($filiere: String!, $ecole: String!, $localisation: String!, $dateDebut: String!, $dateFinal: String!, $description: String!, $userId: ID!) {
    createFormation(filiere: $filiere, ecole: $ecole, localisation: $localisation, dateDebut: $dateDebut, dateFinal: $dateFinal, description: $description, userId: $userId) {
      id filiere ecole localisation dateDebut dateFinal description
    }
  }
`;

export const UPDATE_FORMATION = gql`
  mutation UpdateFormation($id: ID!, $filiere: String, $ecole: String, $localisation: String, $dateDebut: String, $dateFinal: String, $description: String) {
    updateFormation(id: $id, filiere: $filiere, ecole: $ecole, localisation: $localisation, dateDebut: $dateDebut, dateFinal: $dateFinal, description: $description) {
      id filiere ecole localisation dateDebut dateFinal description
    }
  }
`;

export const DELETE_FORMATION = gql`
  mutation DeleteFormation($id: ID!) {
    deleteFormation(id: $id) {
      id
    }
  }
`;

// Skills
export const CREATE_SKILL = gql`
  mutation CreateSkill($name: String!, $categorie: String) {
    createSkill(name: $name, categorie: $categorie) {
      id name categorie
    }
  }
`;

export const UPDATE_SKILL = gql`
  mutation UpdateSkill($id: ID!, $name: String, $categorie: String) {
    updateSkill(id: $id, name: $name, categorie: $categorie) {
      id name categorie
    }
  }
`;

export const DELETE_SKILL = gql`
  mutation DeleteSkill($id: ID!) {
    deleteSkill(id: $id) {
      id
    }
  }
`;

// Documents
export const CREATE_DOCUMENT = gql`
  mutation CreateDocument($input: DocumentInput!) {
    createDocument(input: $input) {
      _id nom urlStocket userId
    }
  }
`;

export const UPDATE_DOCUMENT = gql`
  mutation UpdateDocument($id: ID!, $input: DocumentInput!) {
    updateDocument(id: $id, input: $input) {
      _id nom urlStocket userId
    }
  }
`;

export const DELETE_DOCUMENT = gql`
  mutation DeleteDocument($id: ID!) {
    deleteDocument(id: $id)
  }
`;

// Réseaux Sociaux
export const CREATE_SOCIAL = gql`
  mutation CreateSocial($nom: String!, $liensSociaux: String!, $icon: String!, $userId: ID!) {
    createResieauxSociaux(nom: $nom, liensSociaux: $liensSociaux, icon: $icon, userId: $userId) {
      id nom liensSociaux icon
    }
  }
`;

export const UPDATE_SOCIAL = gql`
  mutation UpdateSocial($id: ID!, $nom: String, $liensSociaux: String, $icon: String) {
    updateResieauxSociaux(id: $id, nom: $nom, liensSociaux: $liensSociaux, icon: $icon) {
      id nom liensSociaux icon
    }
  }
`;

export const DELETE_SOCIAL = gql`
  mutation DeleteSocial($id: ID!) {
    deleteResieauxSociaux(id: $id) {
      id
    }
  }
`;
```

---

## ⚙️ Configuration Apollo Client

```javascript
// apollo/client.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token || '',
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
```

---

## 🎯 Composants clés

### 1. Portfolio.jsx (/:username) - VUE PUBLIQUE READ ONLY

```javascript
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PORTFOLIO_BY_USERNAME } from '../graphql/queries';

export default function Portfolio() {
  const { username } = useParams();
  const { loading, error, data } = useQuery(GET_PORTFOLIO_BY_USERNAME, {
    variables: { username }
  });

  if (loading) return <Spinner />;
  if (error) return <div>Portfolio non trouvé</div>;

  const { user, projects, experiences, formations, skills, documents, social } = data.getPortfolioByUsername;

  return (
    <div>
      <PortfolioHeader user={user} />
      <ProjectsSection projects={projects} />
      <ExperienceTimeline experiences={experiences} />
      <FormationsSection formations={formations} />
      <SkillsSection skills={skills} />
      <DocumentsSection documents={documents} />
      <SocialLinks social={social} />
    </div>
  );
}
```

### 2. DashboardProjects.jsx - CRUD COMPLET

```javascript
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROJECTS } from '../graphql/queries';
import { CREATE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from '../graphql/mutations';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function DashboardProjects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  
  const { loading, data, refetch } = useQuery(GET_PROJECTS);
  const [createProject] = useMutation(CREATE_PROJECT);
  const [updateProject] = useMutation(UPDATE_PROJECT);
  const [deleteProject] = useMutation(DELETE_PROJECT);

  const handleCreate = async (formData) => {
    try {
      await createProject({ variables: formData });
      toast.success('Projet créé !');
      refetch();
      setIsModalOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleUpdate = async (id, formData) => {
    try {
      await updateProject({ variables: { id, ...formData } });
      toast.success('Projet modifié !');
      refetch();
      setIsModalOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Supprimer ce projet ?')) {
      try {
        await deleteProject({ variables: { id } });
        toast.success('Projet supprimé !');
        refetch();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mes Projets</h1>
        <Button onClick={() => setIsModalOpen(true)}>+ Ajouter</Button>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={() => {
                setEditingProject(project);
                setIsModalOpen(true);
              }}
              onDelete={() => handleDelete(project.id)}
            />
          ))}
        </div>
      )}

      {isModalOpen && (
        <ProjectModal
          project={editingProject}
          onClose={() => {
            setIsModalOpen(false);
            setEditingProject(null);
          }}
          onSubmit={editingProject ? handleUpdate : handleCreate}
        />
      )}
    </div>
  );
}
```

### 3. AuthContext.jsx

```javascript
import { createContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROFIL } from '../graphql/queries';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  const { data } = useQuery(GET_PROFIL, {
    skip: !token,
    onCompleted: (data) => setUser(data.getProfil)
  });

  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, setUser, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}
```

---

## 🎨 Design et UX

### Page publique /:username (READ ONLY)
- Header avec nom, prénom, bio
- Section Projets (grid de cards avec images)
- Timeline Expériences (design vertical avec dates)
- Section Formations (cards avec écoles)
- Badges Skills (groupés par catégorie)
- Documents téléchargeables (CV, certificats)
- Liens réseaux sociaux (footer avec icônes)
- Bouton "Créer mon portfolio" → /register
- Design moderne, responsive, animations subtiles

### Dashboard /dashboard/* (CRUD)
- Sidebar gauche avec navigation
- Header avec nom user + bouton logout
- Liste des items en cards
- Bouton "+ Ajouter" en haut à droite
- Boutons Edit/Delete sur chaque card
- Modal pour create/edit
- Confirmation avant delete
- Toast notifications (success/error)
- Loading states (spinner/skeleton)

---

## 📦 Installation

```bash
# Créer le projet
npm create vite@latest codefolio-frontend -- --template react
cd codefolio-frontend

# Installer les dépendances
npm install @apollo/client graphql react-router-dom
npm install react-hook-form
npm install lucide-react react-hot-toast
npm install -D tailwindcss postcss autoprefixer

# Initialiser TailwindCSS
npx tailwindcss init -p
```

### Configuration TailwindCSS

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🚀 Instructions pour Amazon Q

Génère le code complet avec :

1. **Setup initial** :
   - Configuration Vite + React
   - Apollo Client avec authLink
   - React Router avec routes publiques et protégées
   - TailwindCSS configuré

2. **Authentification** :
   - AuthContext avec login/logout
   - ProtectedRoute component
   - Pages Login et Register avec formulaires
   - Stockage JWT dans localStorage

3. **Portfolio public** (/:username) :
   - Page Portfolio.jsx utilisant GET_PORTFOLIO_BY_USERNAME
   - Composants : PortfolioHeader, ProjectsSection, ExperienceTimeline, FormationsSection, SkillsSection, DocumentsSection, SocialLinks
   - Design moderne et responsive
   - READ ONLY (aucun bouton edit/delete)

4. **Dashboard privé** (/dashboard/*) :
   - DashboardLayout avec Sidebar
   - Pages CRUD pour : Projects, Experiences, Formations, Skills, Documents, Social, Profile
   - Chaque page avec : Liste, Modal create/edit, Delete avec confirmation
   - Toast notifications
   - Loading states

5. **Composants UI réutilisables** :
   - Button, Input, Modal, Card, Spinner

6. **Toutes les queries et mutations GraphQL**

Commence par :
1. Setup + Apollo + Router + TailwindCSS
2. AuthContext + Login + Register
3. Portfolio public (/:username)
4. Dashboard avec Projects (CRUD complet)
5. Puis les autres modules du dashboard

Utilise des composants fonctionnels avec hooks (useState, useEffect, useQuery, useMutation).
Design moderne avec TailwindCSS, responsive mobile-first.
