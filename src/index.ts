import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import { userTypeDefs } from "./modules/user/graphql/user.typeDefs";
import { resolvers as UserResolvers } from "./modules/user/graphql/user.resolvers";
import { projectTypeDefs } from "./modules/project/graphql/project.typeDefs";
import { projectResolvers } from "./modules/project/graphql/project.resolvers";
import { skillTypeDefs } from "./modules/skill/graphql/skill.typeDefs";
// import { skillResolvers } from "./modules/skill/graphql/skill.resolvers"; // à créer si besoin
import { experienceTypeDefs } from "./modules/experience/graphql/experience.typeDefs";
// import { experienceResolvers } from "./modules/experience/graphql/experience.resolvers"; // à créer si besoin
import { formationTypeDefs } from "./modules/formation/graphql/formation.typeDefs";
import { formationResolvers } from "./modules/formation/graphql/formation.resolvers";
import { documentTypeDefs } from "./modules/document/graphql/document.typeDefs";
import { documentResolvers } from "./modules/document/graphql/document.resolvers";
import { visitorsTypeDefs } from "./modules/visitors/graphql/visitors.typeDefs";
import { visitorsResolvers } from "./modules/visitors/graphql/visitors.resolvers";
import { resieauxSociauxTypeDefs } from "./modules/resieauxSociaux/graphql/resieauxSociaux.typeDefs";
import { resieauxSociauxResolvers } from "./modules/resieauxSociaux/graphql/resieauxSociaux.resolvers";
import { connectDB } from "./config/db";

dotenv.config();

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs: [
      userTypeDefs,
      projectTypeDefs,
      skillTypeDefs,
      experienceTypeDefs,
      formationTypeDefs,
      documentTypeDefs,
      visitorsTypeDefs,
      resieauxSociauxTypeDefs
    ],
    resolvers: [
      UserResolvers,
      projectResolvers,
      formationResolvers,
      documentResolvers,
      visitorsResolvers,
      resieauxSociauxResolvers
      // Ajouter les resolvers manquants ici
    ],
  });

  await server.start();

  server.applyMiddleware({ app });

  await connectDB();

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();


