import { FormationService } from '../formation.service.js';
export const formationResolvers = {
    Query: {
        formations: () => FormationService.getAll(),
        formation: (_, { id }) => FormationService.getById(id),
    },
    Mutation: {
        createFormation: (_, args) => FormationService.create(args),
        updateFormation: (_, { id, ...data }) => FormationService.update(id, data),
        deleteFormation: (_, { id }) => FormationService.delete(id),
    },
};
//# sourceMappingURL=formation.resolvers.js.map