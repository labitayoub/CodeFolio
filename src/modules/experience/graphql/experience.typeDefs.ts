import { gql } from 'apollo-server-express';

export const experienceTypeDefs = gql`
  type Experience {
    id: ID!
    company: String!
    role: String!
    startDate: String!
    endDate: String
    description: String
  }

  extend type Query {
    getExperiences: [Experience]
  }

  extend type Mutation {
    createExperience(company: String!, role: String!, startDate: String!, endDate: String, description: String): Experience
    updateExperience(id: ID!, company: String, role: String, startDate: String, endDate: String, description: String): Experience
    deleteExperience(id: ID!): Experience
  }
`;
