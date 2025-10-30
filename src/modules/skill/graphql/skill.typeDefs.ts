import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Skill {
    id: ID!
    name: String!
  }

  extend type Query {
    getCompetences: [Skill]
  }

  extend type Mutation {
    createCompetence(name: String!): Skill
    updateCompetence(id: ID!, name: String!): Skill
    deleteCompetence(id: ID!): Skill
  }
`;
