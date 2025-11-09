import { FormationService } from '../formation.service';

export const formationResolvers = {
  Query: {
    formations: (_: any, __: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return FormationService.getByUserId(context.userId);
    },
    formation: (_: any, { id }: { id: string }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return FormationService.getById(id);
    },
  },
  Mutation: {
    createFormation: (_: any, args: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return FormationService.create({ ...args, userId: context.userId });
    },
    updateFormation: (_: any, { id, ...data }: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return FormationService.update(id, data);
    },
    deleteFormation: (_: any, { id }: { id: string }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return FormationService.delete(id);
    },
  },
};
