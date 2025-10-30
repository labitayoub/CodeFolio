export declare const formationResolvers: {
    Query: {
        formations: () => any;
        formation: (_: any, { id }: {
            id: string;
        }) => any;
    };
    Mutation: {
        createFormation: (_: any, args: any) => any;
        updateFormation: (_: any, { id, ...data }: any) => any;
        deleteFormation: (_: any, { id }: {
            id: string;
        }) => any;
    };
};
//# sourceMappingURL=formation.resolvers.d.ts.map