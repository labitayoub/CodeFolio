import { gql } from 'apollo-server-express';
export const typeDefs = gql `
  type User {
    id: ID!
    nom: String!
    prenom: String!
    email: String!
    bio: String
  }

  type Query {
    getProfil: User
  }

  type Mutation {
    login(email: String!, password: String!): String # Returns a JWT token
    updateProfil(nom: String, prenom: String, email: String, bio: String): User
  }
`;
//# sourceMappingURL=user.typeDefs.js.map