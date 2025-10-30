import { gql } from 'apollo-server-express';

export const documentTypeDefs = gql`
  type Document {
    id: ID!
    nom: String
    urlStocket: String
    userId: ID
  }
  type Query {
    documents: [Document]
    document(id: ID!): Document
  }
  type Mutation {
    createDocument(nom: String!, urlStocket: String!, userId: ID!): Document
    updateDocument(id: ID!, nom: String, urlStocket: String): Document
    deleteDocument(id: ID!): Document
  }
`;
