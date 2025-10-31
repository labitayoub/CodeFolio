import { ProjectService } from '../project.service.js';
export const projectResolvers = {
    Query: {
        projects: () => ProjectService.getAll(),
        project: (_, { id }) => ProjectService.getById(id),
    },
    Mutation: {
        createProject: (_, args) => ProjectService.create(args),
        updateProject: (_, { id, ...data }) => ProjectService.update(id, data),
        deleteProject: (_, { id }) => ProjectService.delete(id),
    },
};
//# sourceMappingURL=project.resolvers.js.map