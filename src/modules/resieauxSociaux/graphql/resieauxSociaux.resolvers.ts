import { ResieauxSociauxService } from '../resieauxSociaux.service';

export const resieauxSociauxResolvers = {
  Query: {
    resieauxSociauxs: (_: any, __: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return ResieauxSociauxService.getByUserId(context.userId);
    },
    resieauxSociaux: (_: any, { id }: { id: string }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return ResieauxSociauxService.getById(id);
    },
  },
  Mutation: {
    createResieauxSociaux: (_: any, args: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return ResieauxSociauxService.create({ ...args, userId: context.userId });
    },
    updateResieauxSociaux: (_: any, { id, ...data }: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return ResieauxSociauxService.update(id, data);
    },
    deleteResieauxSociaux: (_: any, { id }: { id: string }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return ResieauxSociauxService.delete(id);
    },
  },
};
