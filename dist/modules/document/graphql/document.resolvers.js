import { DocumentService } from '../document.service';
export const documentResolvers = {
    Query: {
        documents: () => DocumentService.getAll(),
        document: (_, { id }) => DocumentService.getById(id),
    },
    Mutation: {
        createDocument: (_, { input }) => DocumentService.create(input),
        updateDocument: (_, { id, input }) => DocumentService.update(id, input),
        deleteDocument: (_, { id }) => DocumentService.delete(id),
    },
};
//# sourceMappingURL=document.resolvers.js.map