import { VisitorsService } from '../visitors.service.js';
export const visitorsResolvers = {
    Query: {
        visitors: () => VisitorsService.getAll(),
        visitor: (_, { id }) => VisitorsService.getById(id),
    },
    Mutation: {
        createVisitor: (_, args) => VisitorsService.create(args),
        updateVisitor: (_, { id, ...data }) => VisitorsService.update(id, data),
        deleteVisitor: (_, { id }) => VisitorsService.delete(id),
    },
};
//# sourceMappingURL=visitors.resolvers.js.map