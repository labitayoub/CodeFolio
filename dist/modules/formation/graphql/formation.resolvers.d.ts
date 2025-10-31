export declare const formationResolvers: {
    Query: {
        formations: () => Promise<import("../formation.model.js").IFormationDocument[]>;
        formation: (_: any, { id }: {
            id: string;
        }) => Promise<import("../formation.model.js").IFormationDocument | null>;
    };
    Mutation: {
        createFormation: (_: any, args: any) => Promise<import("../formation.model.js").IFormationDocument>;
        updateFormation: (_: any, { id, ...data }: any) => Promise<import("../formation.model.js").IFormationDocument | null>;
        deleteFormation: (_: any, { id }: {
            id: string;
        }) => Promise<import("../formation.model.js").IFormationDocument | null>;
    };
};
//# sourceMappingURL=formation.resolvers.d.ts.map