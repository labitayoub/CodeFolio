import type { ISkill, ISkillDocument } from './skill.model.js';
export declare class SkillService {
    static getAll(): Promise<ISkillDocument[]>;
    static getById(id: string): Promise<ISkillDocument | null>;
    static create(data: ISkill): Promise<ISkillDocument>;
    static update(id: string, data: Partial<ISkill>): Promise<ISkillDocument | null>;
    static delete(id: string): Promise<ISkillDocument | null>;
}
//# sourceMappingURL=skill.service.d.ts.map