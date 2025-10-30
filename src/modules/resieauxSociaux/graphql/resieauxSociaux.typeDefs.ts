import { gql } from 'apollo-server-express';

export const resieauxSociauxTypeDefs = gql`
  type ResieauxSociaux {
    id: ID!
    nom: String
    liensSociaux: String
    icon: String
    userId: ID
  }
  type Query {
    resieauxSociauxs: [ResieauxSociaux]
    resieauxSociaux(id: ID!): ResieauxSociaux
  }
  type Mutation {
    createResieauxSociaux(nom: String!, liensSociaux: String!, icon: String!, userId: ID!): ResieauxSociaux
    updateResieauxSociaux(id: ID!, nom: String, liensSociaux: String, icon: String): ResieauxSociaux
    deleteResieauxSociaux(id: ID!): ResieauxSociaux
  }
`;
