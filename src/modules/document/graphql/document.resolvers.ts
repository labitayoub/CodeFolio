import { DocumentService } from '../document.service';

export const documentResolvers = {
  Query: {
    documents: () => DocumentService.getAll(),
    document: (_: any, { id }: { id: string }) => DocumentService.getById(id),
  },
  Mutation: {
    createDocument: (_: any, args: any) => DocumentService.create(args),
    updateDocument: (_: any, { id, ...data }: any) => DocumentService.update(id, data),
    deleteDocument: (_: any, { id }: { id: string }) => DocumentService.delete(id),
  },
};
