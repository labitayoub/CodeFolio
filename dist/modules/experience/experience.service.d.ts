import type { IExperience, IExperienceDocument } from './experience.model.js';
export declare class ExperienceService {
    static getAll(): Promise<IExperienceDocument[]>;
    static getById(id: string): Promise<IExperienceDocument | null>;
    static create(data: IExperience): Promise<IExperienceDocument>;
    static update(id: string, data: Partial<IExperience>): Promise<IExperienceDocument | null>;
    static delete(id: string): Promise<IExperienceDocument | null>;
}
//# sourceMappingURL=experience.service.d.ts.map