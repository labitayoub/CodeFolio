import { DocumentService } from '../document.service.js';

export const documentResolvers = {
  Query: {
    documents: () => DocumentService.getAll(),
    document: (_: any, { id }: { id: string }) => DocumentService.getById(id),
  },
  Mutation: {
    createDocument: (_: any, { input }: { input: any }) => DocumentService.create(input),
    updateDocument: (_: any, { id, input }: { id: string; input: any }) => DocumentService.update(id, input),
    deleteDocument: (_: any, { id }: { id: string }) => DocumentService.delete(id),
  },
};
