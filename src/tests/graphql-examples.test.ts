import { GraphQLClient, gql } from 'graphql-request';

// Configuration du client GraphQL pour les tests
const endpoint = 'http://localhost:4000/graphql'; // Adapter selon votre configuration
const client = new GraphQLClient(endpoint);

// Exemple de test pour une requête simple
export async function testUserQuery() {
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

  try {
    const data = await client.request(query);
    console.log('✅ Test réussi - Utilisateurs récupérés:', data.users);
    return data;
  } catch (error) {
    console.error('❌ Test échoué:', error instanceof Error ? error.message : String(error));
    throw error;
  }
}

// Exemple de test pour une mutation
export async function testUserRegistration() {
  const mutation = gql`
    mutation Register($input: UserInput!) {
      register(input: $input) {
        _id
        nom
        prenom
        email
        bio
      }
    }
  `;

  const variables = {
    input: {
      nom: 'Test',
      prenom: 'GraphQL',
      email: 'test.graphql@example.com',
      password: 'password123',
      bio: 'Utilisateur de test GraphQL'
    }
  };

  try {
    const data = await client.request(mutation, variables);
    console.log('✅ Test réussi - Utilisateur enregistré:', data.register);
    return data;
  } catch (error) {
    console.error('❌ Test échoué:', error instanceof Error ? error.message : String(error));
    throw error;
  }
}

// Exemple de test avec authentification
export async function testProtectedQuery(token: string) {
  const clientWithAuth = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const query = gql`
    query GetProfil {
      getProfil {
        _id
        nom
        prenom
        email
        bio
      }
    }
  `;

  try {
    const data = await clientWithAuth.request(query);
    console.log('✅ Test réussi - Profil récupéré:', data.getProfil);
    return data;
  } catch (error) {
    console.error('❌ Test échoué:', error instanceof Error ? error.message : String(error));
    throw error;
  }
}

// Exemple d'utilisation dans un test Jest
describe('GraphQL API Tests', () => {
  let authToken: string;

  beforeAll(async () => {
    // Obtenir un token d'authentification pour les tests
    const loginMutation = gql`
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password)
      }
    `;

    const loginVars = {
      email: 'test@example.com',
      password: 'password123'
    };

    try {
      const loginData = await client.request(loginMutation, loginVars);
      authToken = loginData.login;
    } catch (error) {
      console.warn('Utilisateur de test non trouvé, création en cours...');
      // Créer un utilisateur de test si nécessaire
      await testUserRegistration();
      const loginData = await client.request(loginMutation, loginVars);
      authToken = loginData.login;
    }
  });

  test('devrait récupérer la liste des utilisateurs', async () => {
    const data = await testUserQuery();
    expect(data.users).toBeDefined();
    expect(Array.isArray(data.users)).toBe(true);
  });

  test('devrait enregistrer un nouvel utilisateur', async () => {
    const data = await testUserRegistration();
    expect(data.register).toBeDefined();
    expect(data.register.nom).toBe('Test');
    expect(data.register.email).toBe('test.graphql@example.com');
  });

  test('devrait accéder à une requête protégée avec un token valide', async () => {
    const data = await testProtectedQuery(authToken);
    expect(data.getProfil).toBeDefined();
    expect(data.getProfil.nom).toBeDefined();
  });
});