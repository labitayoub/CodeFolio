export declare const skillResolvers: {
    Query: {
        getCompetences: () => Promise<import("../skill.model.js").ISkillDocument[]>;
    };
    Mutation: {
        createCompetence: (_: any, { name, categorie }: {
            name: string;
            categorie: string;
        }) => Promise<import("../skill.model.js").ISkillDocument>;
        updateCompetence: (_: any, { id, name, categorie }: {
            id: string;
            name: string;
            categorie: string;
        }) => Promise<import("../skill.model.js").ISkillDocument | null>;
        deleteCompetence: (_: any, { id }: {
            id: string;
        }) => Promise<import("../skill.model.js").ISkillDocument | null>;
    };
    Skill: {
        name: (skill: any) => any;
    };
};
//# sourceMappingURL=skill.resolvers.d.ts.map