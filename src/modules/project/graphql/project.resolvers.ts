import { ProjectService } from '../project.service';

export const projectResolvers = {
  Query: {
    projects: () => ProjectService.getAll(),
    project: (_: any, { id }: { id: string }) => ProjectService.getById(id),
  },
  Mutation: {
    createProject: (_: any, args: any) => ProjectService.create(args),
    updateProject: (_: any, { id, ...data }: any) => ProjectService.update(id, data),
    deleteProject: (_: any, { id }: { id: string }) => ProjectService.delete(id),
  },
};
