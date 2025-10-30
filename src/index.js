import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// 1. Définir le Schéma (TypeDefs)
// C'est la structure de votre API.
const typeDefs = gql`
  # Le point d'entrée pour toutes les lectures (queries)
  type Query {
    # On définit une query appelée "hello" qui retourne un String
    hello: String
  }
`;

// 2. Définir les Resolvers (La logique)
// C'est ce qui "résout" le schéma en données réelles.
const resolvers = {
  Query: {
    // Le nom de cette fonction doit correspondre au champ du schéma (hello)
    hello: () => {
      // Ce qu'on retourne ici doit correspondre au type du schéma (String)
      return 'Bonjour, CodeFolio !';
    },
  },
};

// 3. Démarrer le serveur
async function startServer() {
  // Initialiser l'application Express
  const app = express();
  const port = 4000; // Vous pouvez utiliser process.env.PORT

  // Créer l'instance d'Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Note : Le Playground est activé par défaut en développement
  });

  // Démarrer le serveur Apollo AVANT de l'appliquer à Express
  await server.start();

  // Appliquer Apollo Server comme middleware à Express
  // On définit le chemin pour notre API GraphQL
  server.applyMiddleware({ app, path: '/graphql' });

  // Démarrer le serveur Express
  app.listen(port, () => {
    console.log(`🚀 Serveur Express prêt !`);
    console.log(`🚀 API GraphQL prête sur http://localhost:${port}${server.graphqlPath}`);
  });
}

// Lancer l'application
startServer();