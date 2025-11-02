import type { IFormation, IFormationDocument } from './formation.model.js';
export declare class FormationService {
    static getAll(): Promise<IFormationDocument[]>;
    static getById(id: string): Promise<IFormationDocument | null>;
    static create(data: IFormation): Promise<IFormationDocument>;
    static update(id: string, data: Partial<IFormation>): Promise<IFormationDocument | null>;
    static delete(id: string): Promise<IFormationDocument | null>;
}
