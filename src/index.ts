import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import { typeDefs as userTypeDefs } from "./modules/user/graphql/user.typeDefs.js";
import { resolvers as UserResolvers } from "./modules/user/graphql/user.resolvers.js";
import { projectTypeDefs } from "./modules/project/graphql/project.typeDefs.js";
import { projectResolvers } from "./modules/project/graphql/project.resolvers.js";
import { skillTypeDefs } from "./modules/skill/graphql/skill.typeDefs.js";
import { skillResolvers } from "./modules/skill/graphql/skill.resolvers.js";
import { experienceTypeDefs } from "./modules/experience/graphql/experience.typeDefs.js";
import { experienceResolvers } from "./modules/experience/graphql/experience.resolvers.js";
import { formationTypeDefs } from "./modules/formation/graphql/formation.typeDefs.js";
import { formationResolvers } from "./modules/formation/graphql/formation.resolvers.js";
import { documentTypeDefs } from "./modules/document/graphql/document.typeDefs.js";
import { documentResolvers } from "./modules/document/graphql/document.resolvers.js";
import { visitorsTypeDefs } from "./modules/visitors/graphql/visitors.typeDefs.js";
import { visitorsResolvers } from "./modules/visitors/graphql/visitors.resolvers.js";
import { resieauxSociauxTypeDefs } from "./modules/resieauxSociaux/graphql/resieauxSociaux.typeDefs.js";
import { resieauxSociauxResolvers } from "./modules/resieauxSociaux/graphql/resieauxSociaux.resolvers.js";
import { connectDB } from "./config/db.js";

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
      skillResolvers,
      experienceResolvers,
      formationResolvers,
      documentResolvers,
      visitorsResolvers,
      resieauxSociauxResolvers
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


