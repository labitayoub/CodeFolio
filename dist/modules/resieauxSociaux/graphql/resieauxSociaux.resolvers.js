import { ResieauxSociauxService } from '../resieauxSociaux.service';
export const resieauxSociauxResolvers = {
    Query: {
        resieauxSociauxs: () => ResieauxSociauxService.getAll(),
        resieauxSociaux: (_, { id }) => ResieauxSociauxService.getById(id),
    },
    Mutation: {
        createResieauxSociaux: (_, args) => ResieauxSociauxService.create(args),
        updateResieauxSociaux: (_, { id, ...data }) => ResieauxSociauxService.update(id, data),
        deleteResieauxSociaux: (_, { id }) => ResieauxSociauxService.delete(id),
    },
};
//# sourceMappingURL=resieauxSociaux.resolvers.js.map