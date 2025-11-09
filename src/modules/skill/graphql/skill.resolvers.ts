
import { SkillService } from '../skill.service';

export const skillResolvers = {
  Query: {
    getCompetences: async (_: any, __: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return await SkillService.getByUserId(context.userId);
    },
  },
  Mutation: {
    createCompetence: async (_: any, { name, categorie }: { name: string, categorie: string }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return await SkillService.create({ nom: name, categorie, userId: context.userId });
    },
    updateCompetence: async (_: any, { id, name, categorie }: { id: string, name: string, categorie: string }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return await SkillService.update(id, { nom: name, categorie });
    },
    deleteCompetence: async (_: any, { id }: { id: string }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return await SkillService.delete(id);
    },
  },
  Skill: {
    name: (skill: any) => skill.nom,
  },
};
