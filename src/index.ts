import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import { typeDefs as UserTypeDefs } from "./modules/user/graphql/user.typeDefs";
import { resolvers as UserResolvers } from "./modules/user/graphql/user.resolvers";
import { typeDefs as ProjectTypeDefs } from "./modules/project/graphql/project.typeDefs";
import { typeDefs as SkillTypeDefs } from "./modules/skill/graphql/skill.typeDefs";
import { typeDefs as ExperienceTypeDefs } from "./modules/experience/graphql/experience.typeDefs";
import { connectDB } from "./config/db";

dotenv.config();

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs: [UserTypeDefs, ProjectTypeDefs, SkillTypeDefs, ExperienceTypeDefs],
    resolvers: [UserResolvers],
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


