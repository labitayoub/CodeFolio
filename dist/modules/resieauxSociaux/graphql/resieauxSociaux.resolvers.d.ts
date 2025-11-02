export declare const resieauxSociauxResolvers: {
    Query: {
        resieauxSociauxs: () => Promise<import("../resieauxSociaux.model").IReseauxSociauxDocument[]>;
        resieauxSociaux: (_: any, { id }: {
            id: string;
        }) => Promise<import("../resieauxSociaux.model").IReseauxSociauxDocument | null>;
    };
    Mutation: {
        createResieauxSociaux: (_: any, args: any) => Promise<import("../resieauxSociaux.model").IReseauxSociauxDocument>;
        updateResieauxSociaux: (_: any, { id, ...data }: any) => Promise<import("../resieauxSociaux.model").IReseauxSociauxDocument | null>;
        deleteResieauxSociaux: (_: any, { id }: {
            id: string;
        }) => Promise<import("../resieauxSociaux.model").IReseauxSociauxDocument | null>;
    };
};
