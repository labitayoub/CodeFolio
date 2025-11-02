export declare const formationResolvers: {
    Query: {
        formations: () => Promise<import("../formation.model").IFormationDocument[]>;
        formation: (_: any, { id }: {
            id: string;
        }) => Promise<import("../formation.model").IFormationDocument | null>;
    };
    Mutation: {
        createFormation: (_: any, args: any) => Promise<import("../formation.model").IFormationDocument>;
        updateFormation: (_: any, { id, ...data }: any) => Promise<import("../formation.model").IFormationDocument | null>;
        deleteFormation: (_: any, { id }: {
            id: string;
        }) => Promise<import("../formation.model").IFormationDocument | null>;
    };
};
