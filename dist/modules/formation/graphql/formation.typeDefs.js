import { gql } from 'apollo-server-express';
export const formationTypeDefs = gql `
  type Formation {
    id: ID!
    filiere: String
    ecole: String
    localisation: String
    dateDebut: String
    dateFinal: String
    description: String
    userId: ID
  }
  type Query {
    formations: [Formation]
    formation(id: ID!): Formation
  }
  type Mutation {
    createFormation(filiere: String!, ecole: String!, localisation: String!, dateDebut: String!, dateFinal: String!, description: String!, userId: ID!): Formation
    updateFormation(id: ID!, filiere: String, ecole: String, localisation: String, dateDebut: String, dateFinal: String, description: String): Formation
    deleteFormation(id: ID!): Formation
  }
`;
//# sourceMappingURL=formation.typeDefs.js.map