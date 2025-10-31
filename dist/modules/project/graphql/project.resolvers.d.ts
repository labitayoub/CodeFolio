export declare const projectResolvers: {
    Query: {
        projects: () => Promise<import("../project.model.js").IProjectDocument[]>;
        project: (_: any, { id }: {
            id: string;
        }) => Promise<import("../project.model.js").IProjectDocument | null>;
    };
    Mutation: {
        createProject: (_: any, args: any) => Promise<import("../project.model.js").IProjectDocument>;
        updateProject: (_: any, { id, ...data }: any) => Promise<import("../project.model.js").IProjectDocument | null>;
        deleteProject: (_: any, { id }: {
            id: string;
        }) => Promise<import("../project.model.js").IProjectDocument | null>;
    };
};
//# sourceMappingURL=project.resolvers.d.ts.map