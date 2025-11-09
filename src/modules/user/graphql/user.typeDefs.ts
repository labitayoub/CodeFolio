import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    nom: String!
    prenom: String!
    username: String!
    email: String!
    bio: String
  }

  type UserPortfolio {
    user: User!
    projects: [Project]
    experiences: [Experience]
    formations: [Formation]
    skills: [Skill]
    documents: [Document]
    social: [ResieauxSociaux]
  }

  type Query {
    getProfil: User
    getUserByUsername(username: String!): User
    getPortfolioByUsername(username: String!): UserPortfolio
  }

  type Mutation {
    register(nom: String!, prenom: String!, username: String!, email: String!, password: String!, bio: String): User
    login(email: String!, password: String!): String # Returns a JWT token
    updateProfil(nom: String, prenom: String, username: String, email: String, bio: String): User
  }
`;