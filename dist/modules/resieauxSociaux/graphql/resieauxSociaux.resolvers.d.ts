export declare const resieauxSociauxResolvers: {
    Query: {
        resieauxSociauxs: () => Promise<import("../resieauxSociaux.model.js").IReseauxSociauxDocument[]>;
        resieauxSociaux: (_: any, { id }: {
            id: string;
        }) => Promise<import("../resieauxSociaux.model.js").IReseauxSociauxDocument | null>;
    };
    Mutation: {
        createResieauxSociaux: (_: any, args: any) => Promise<import("../resieauxSociaux.model.js").IReseauxSociauxDocument>;
        updateResieauxSociaux: (_: any, { id, ...data }: any) => Promise<import("../resieauxSociaux.model.js").IReseauxSociauxDocument | null>;
        deleteResieauxSociaux: (_: any, { id }: {
            id: string;
        }) => Promise<import("../resieauxSociaux.model.js").IReseauxSociauxDocument | null>;
    };
};
//# sourceMappingURL=resieauxSociaux.resolvers.d.ts.map