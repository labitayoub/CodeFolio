import { UserService } from '../user.service.js';
import { ProjectService } from '../../project/project.service.js';
import { ExperienceService } from '../../experience/experience.service.js';
import { FormationService } from '../../formation/formation.service.js';
import { SkillService } from '../../skill/skill.service.js';
import { DocumentService } from '../../document/document.service.js';
import { ResieauxSociauxService } from '../../resieauxSociaux/resieauxSociaux.service.js';

export const resolvers = {
  Query: {
    getProfil: async (parent: any, args: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return await UserService.getProfil(context.userId);
    },
    getUserByUsername: async (parent: any, { username }: any) => {
      const user = await UserService.getUserByUsername(username);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    },
    getPortfolioByUsername: async (parent: any, { username }: any) => {
      const user = await UserService.getUserByUsername(username);
      if (!user) {
        throw new Error('User not found');
      }
      
      const [projects, experiences, formations, skills, documents, social] = await Promise.all([
        ProjectService.getByUserId(user.id),
        ExperienceService.getByUserId(user.id),
        FormationService.getByUserId(user.id),
        SkillService.getByUserId(user.id),
        DocumentService.getByUserId(user.id),
        ResieauxSociauxService.getByUserId(user.id)
      ]);

      return {
        user,
        projects,
        experiences,
        formations,
        skills,
        documents,
        social
      };
    }
  },
  Mutation: {
    register: async (parent: any, args: any) => {
      return await UserService.register(args);
    },
    login: async (parent: any, { email, password }: any) => {
      return await UserService.login(email, password);
    },
    updateProfil: async (parent: any, args: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return await UserService.updateProfil(context.userId, args);
    }
  }
};
