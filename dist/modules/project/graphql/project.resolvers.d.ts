export declare const projectResolvers: {
    Query: {
        projects: () => Promise<import("../project.model").IProjectDocument[]>;
        project: (_: any, { id }: {
            id: string;
        }) => Promise<import("../project.model").IProjectDocument | null>;
    };
    Mutation: {
        createProject: (_: any, args: any) => Promise<import("../project.model").IProjectDocument>;
        updateProject: (_: any, { id, ...data }: any) => Promise<import("../project.model").IProjectDocument | null>;
        deleteProject: (_: any, { id }: {
            id: string;
        }) => Promise<import("../project.model").IProjectDocument | null>;
    };
};
