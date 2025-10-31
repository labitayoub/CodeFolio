import { gql } from 'apollo-server-express';
export const skillTypeDefs = gql `
  type Skill {
    id: ID!
    name: String!
    categorie: String
  }

  extend type Query {
     getSkills: [Skill]
     getCompetences: [Skill]
  }

  extend type Mutation {
     createSkill(name: String!, categorie: String): Skill
     updateSkill(id: ID!, name: String, categorie: String): Skill
     deleteSkill(id: ID!): Skill

     createCompetence(name: String!, categorie: String): Skill
     updateCompetence(id: ID!, name: String, categorie: String): Skill
     deleteCompetence(id: ID!): Skill
  }
`;
//# sourceMappingURL=skill.typeDefs.js.map