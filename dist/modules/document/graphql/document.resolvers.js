import { DocumentService } from '../document.service';
export const documentResolvers = {
    Query: {
        documents: () => DocumentService.getAll(),
        document: (_, { id }) => DocumentService.getById(id),
    },
    Mutation: {
        createDocument: (_, args) => DocumentService.create(args),
        updateDocument: (_, { id, ...data }) => DocumentService.update(id, data),
        deleteDocument: (_, { id }) => DocumentService.delete(id),
    },
};
//# sourceMappingURL=document.resolvers.js.map