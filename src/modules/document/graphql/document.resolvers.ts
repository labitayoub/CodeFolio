import { DocumentService } from '../document.service';

export const documentResolvers = {
  Query: {
    documents: () => DocumentService.getAll(),
    document: (_: any, { id }: { id: string }) => DocumentService.getById(id),
  },
  Mutation: {
    createDocument: (_: any, { input }: { input: any }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return DocumentService.create({ ...input, userId: context.userId });
    },
    updateDocument: (_: any, { id, input }: { id: string; input: any }) => DocumentService.update(id, input),
    deleteDocument: (_: any, { id }: { id: string }) => DocumentService.delete(id),
  },
};
