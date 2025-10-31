import { SkillService } from '../skill.service.js';
export const skillResolvers = {
    Query: {
        getCompetences: async () => {
            return await SkillService.getAll();
        },
    },
    Mutation: {
        createCompetence: async (_, { name, categorie }) => {
            return await SkillService.create({ nom: name, categorie });
        },
        updateCompetence: async (_, { id, name, categorie }) => {
            return await SkillService.update(id, { nom: name, categorie });
        },
        deleteCompetence: async (_, { id }) => {
            return await SkillService.delete(id);
        },
    },
    Skill: {
        name: (skill) => skill.nom,
    },
};
//# sourceMappingURL=skill.resolvers.js.map