export declare const skillResolvers: {
    Query: {
        getCompetences: () => Promise<import("../skill.model").ISkillDocument[]>;
    };
    Mutation: {
        createCompetence: (_: any, { name, categorie }: {
            name: string;
            categorie: string;
        }, context: any) => Promise<import("../skill.model").ISkillDocument>;
        updateCompetence: (_: any, { id, name, categorie }: {
            id: string;
            name: string;
            categorie: string;
        }) => Promise<import("../skill.model").ISkillDocument | null>;
        deleteCompetence: (_: any, { id }: {
            id: string;
        }) => Promise<import("../skill.model").ISkillDocument | null>;
    };
    Skill: {
        name: (skill: any) => any;
    };
};
