import { DocumentService } from '../document.service';

export const documentResolvers = {
  Query: {
    documents: (_: any, __: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return DocumentService.getByUserId(context.userId);
    },
    document: (_: any, { id }: { id: string }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return DocumentService.getById(id);
    },
  },
  Mutation: {
    createDocument: (_: any, { input }: { input: any }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return DocumentService.create({ ...input, userId: context.userId });
    },
    updateDocument: (_: any, { id, input }: { id: string; input: any }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return DocumentService.update(id, input);
    },
    deleteDocument: (_: any, { id }: { id: string }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return DocumentService.delete(id);
    },
  },
};
