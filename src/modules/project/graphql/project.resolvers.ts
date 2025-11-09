import { ProjectService } from '../project.service';

export const projectResolvers = {
  Query: {
    projects: (_: any, __: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return ProjectService.getByUserId(context.userId);
    },
    project: (_: any, { id }: { id: string }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return ProjectService.getById(id);
    },
  },
  Mutation: {
    createProject: (_: any, args: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return ProjectService.create({ ...args, userId: context.userId });
    },
    updateProject: (_: any, { id, ...data }: any, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return ProjectService.update(id, data);
    },
    deleteProject: (_: any, { id }: { id: string }, context: any) => {
      if (!context.userId) {
        throw new Error('Authentication required');
      }
      return ProjectService.delete(id);
    },
  },
};
