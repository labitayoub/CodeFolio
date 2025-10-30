import {gql} from 'apollo-server-express';

export const typeDefs = gql`
    type User{
    id:ID!
    nom: String!
    prenom: String!
    }`