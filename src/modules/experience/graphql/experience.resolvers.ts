
import { ExperienceService } from '../experience.service.js';

export const experienceResolvers = {
  Query: {
    getExperiences: async () => {
      return await ExperienceService.getAll();
    },
  },
  Mutation: {
    createExperience: async (_: any, { company, role, startDate, endDate, description }: { company: string, role: string, startDate: string, endDate: string, description: string }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return await ExperienceService.create({
        entreprise: company,
        poste: role,
        dateDebut: new Date(startDate),
        dateFinal: new Date(endDate),
        description,
        userId: context.userId
      });
    },
    updateExperience: async (_: any, { id, company, role, startDate, endDate, description }: { id: string, company: string, role: string, startDate: string, endDate: string, description: string }) => {
      return await ExperienceService.update(id, {
        entreprise: company,
        poste: role,
        dateDebut: new Date(startDate),
        dateFinal: new Date(endDate),
        description
      });
    },
    deleteExperience: async (_: any, { id }: { id: string }) => {
      return await ExperienceService.delete(id);
    },
  },
  Experience: {
    company: (experience: any) => experience.entreprise,
    role: (experience: any) => experience.poste,
    startDate: (experience: any) => experience.dateDebut.toISOString(),
    endDate: (experience: any) => experience.dateFinal ? experience.dateFinal.toISOString() : null,
  },
};
