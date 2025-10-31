import { ExperienceService } from '../experience.service.js';
export const experienceResolvers = {
    Query: {
        getExperiences: async () => {
            return await ExperienceService.getAll();
        },
    },
    Mutation: {
        createExperience: async (_, { company, role, startDate, endDate, description }) => {
            return await ExperienceService.create({ entreprise: company, poste: role, dateDebut: startDate, dateFinal: endDate, description });
        },
        updateExperience: async (_, { id, company, role, startDate, endDate, description }) => {
            return await ExperienceService.update(id, { entreprise: company, poste: role, dateDebut: startDate, dateFinal: endDate, description });
        },
        deleteExperience: async (_, { id }) => {
            return await ExperienceService.delete(id);
        },
    },
    Experience: {
        company: (experience) => experience.entreprise,
        role: (experience) => experience.poste,
        startDate: (experience) => experience.dateDebut.toISOString(),
        endDate: (experience) => experience.dateFinal ? experience.dateFinal.toISOString() : null,
    },
};
//# sourceMappingURL=experience.resolvers.js.map