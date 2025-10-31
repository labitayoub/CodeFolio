#!/usr/bin/env node

/**
 * Script de test manuel GraphQL pour CodeFolio
 * Utilisez ce script pour tester rapidement les endpoints GraphQL
 */

import { GraphQLClient, gql } from 'graphql-request';
import readline from 'readline';

const endpoint = process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql';
const client = new GraphQLClient(endpoint);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function testUserRegistration() {
  console.log('\n🧪 Test d\'inscription utilisateur...\n');

  const nom = await question('Nom: ');
  const prenom = await question('Prénom: ');
  const email = await question('Email: ');
  const password = await question('Mot de passe: ');
  const bio = await question('Bio (optionnel): ');

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
      nom,
      prenom,
      email,
      password,
      bio: bio || undefined
    }
  };

  try {
    const data = await client.request(mutation, variables);
    console.log('✅ Inscription réussie:', JSON.stringify(data, null, 2));
    return data.register;
  } catch (error) {
    console.error('❌ Erreur d\'inscription:', error.response?.errors || error.message);
    return null;
  }
}

async function testUserLogin() {
  console.log('\n🔐 Test de connexion...\n');

  const email = await question('Email: ');
  const password = await question('Mot de passe: ');

  const mutation = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `;

  const variables = { email, password };

  try {
    const data = await client.request(mutation, variables);
    console.log('✅ Connexion réussie, token:', data.login.substring(0, 50) + '...');
    return data.login;
  } catch (error) {
    console.error('❌ Erreur de connexion:', error.response?.errors || error.message);
    return null;
  }
}

async function testProtectedQuery(token) {
  console.log('\n🔒 Test de requête protégée...\n');

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
    console.log('✅ Profil récupéré:', JSON.stringify(data, null, 2));
    return data.getProfil;
  } catch (error) {
    console.error('❌ Erreur de requête protégée:', error.response?.errors || error.message);
    return null;
  }
}

async function testGetUsers() {
  console.log('\n👥 Test de récupération des utilisateurs...\n');

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
    console.log('✅ Utilisateurs récupérés:', JSON.stringify(data, null, 2));
    return data.users;
  } catch (error) {
    console.error('❌ Erreur de récupération:', error.response?.errors || error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Testeur GraphQL CodeFolio');
  console.log('Endpoint:', endpoint);
  console.log('================================\n');

  let token = null;

  while (true) {
    console.log('\nOptions:');
    console.log('1. Tester l\'inscription');
    console.log('2. Tester la connexion');
    console.log('3. Tester une requête protégée');
    console.log('4. Tester la récupération des utilisateurs');
    console.log('5. Quitter');

    const choice = await question('\nChoix (1-5): ');

    switch (choice) {
      case '1':
        await testUserRegistration();
        break;
      case '2':
        token = await testUserLogin();
        break;
      case '3':
        if (!token) {
          console.log('❌ Connectez-vous d\'abord (option 2)');
        } else {
          await testProtectedQuery(token);
        }
        break;
      case '4':
        await testGetUsers();
        break;
      case '5':
        console.log('👋 Au revoir!');
        rl.close();
        return;
      default:
        console.log('❌ Choix invalide');
    }
  }
}

main().catch(console.error);