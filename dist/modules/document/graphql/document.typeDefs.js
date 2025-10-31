import { gql } from 'apollo-server-express';
export const documentTypeDefs = gql `
  type Document {
    _id: ID!
    nom: String!
    urlStocket: String!
    userId: ID!
  }

  input DocumentInput {
    nom: String!
    urlStocket: String!
  }

  type Query {
    documents: [Document!]!
    document(id: ID!): Document
  }

  type Mutation {
    createDocument(input: DocumentInput!): Document!
    updateDocument(id: ID!, input: DocumentInput!): Document!
    deleteDocument(id: ID!): Boolean!
  }
`;
//# sourceMappingURL=document.typeDefs.js.map