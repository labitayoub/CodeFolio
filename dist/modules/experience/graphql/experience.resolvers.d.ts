export declare const experienceResolvers: {
    Query: {
        getExperiences: () => Promise<import("../experience.model").IExperienceDocument[]>;
    };
    Mutation: {
        createExperience: (_: any, { company, role, startDate, endDate, description }: {
            company: string;
            role: string;
            startDate: string;
            endDate: string;
            description: string;
        }, context: any) => Promise<import("../experience.model").IExperienceDocument>;
        updateExperience: (_: any, { id, company, role, startDate, endDate, description }: {
            id: string;
            company: string;
            role: string;
            startDate: string;
            endDate: string;
            description: string;
        }) => Promise<import("../experience.model").IExperienceDocument | null>;
        deleteExperience: (_: any, { id }: {
            id: string;
        }) => Promise<import("../experience.model").IExperienceDocument | null>;
    };
    Experience: {
        company: (experience: any) => any;
        role: (experience: any) => any;
        startDate: (experience: any) => any;
        endDate: (experience: any) => any;
    };
};
