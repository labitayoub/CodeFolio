export declare const projectResolvers: {
    Query: {
        projects: () => any;
        project: (_: any, { id }: {
            id: string;
        }) => any;
    };
    Mutation: {
        createProject: (_: any, args: any) => any;
        updateProject: (_: any, { id, ...data }: any) => any;
        deleteProject: (_: any, { id }: {
            id: string;
        }) => any;
    };
};
//# sourceMappingURL=project.resolvers.d.ts.map