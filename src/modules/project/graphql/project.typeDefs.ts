import { gql } from 'apollo-server-express';

export const projectTypeDefs = gql`
  type Project {
    id: ID!
    titre: String
    description: String
    urlGit: String
    urlDemo: String
    image: String
    userId: ID
  }
  type Query {
    projects: [Project]
    project(id: ID!): Project
  }
  type Mutation {
    createProject(titre: String!, description: String!, urlGit: String!, urlDemo: String!, image: String!, userId: ID!): Project
    updateProject(id: ID!, titre: String, description: String, urlGit: String, urlDemo: String, image: String): Project
    deleteProject(id: ID!): Project
  }
`;
