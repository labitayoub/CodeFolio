import { VisitorsService } from '../visitors.service.js';

export const visitorsResolvers = {
  Query: {
    visitors: () => VisitorsService.getAll(),
    visitor: (_: any, { id }: { id: string }) => VisitorsService.getById(id),
  },
  Mutation: {
    createVisitor: (_: any, args: any) => VisitorsService.create(args),
    updateVisitor: (_: any, { id, ...data }: any) => VisitorsService.update(id, data),
    deleteVisitor: (_: any, { id }: { id: string }) => VisitorsService.delete(id),
  },
};
