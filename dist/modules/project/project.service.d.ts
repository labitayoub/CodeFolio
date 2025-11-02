import type { IProject, IProjectDocument } from './project.model.js';
export declare class ProjectService {
    static getAll(): Promise<IProjectDocument[]>;
    static getById(id: string): Promise<IProjectDocument | null>;
    static create(data: IProject): Promise<IProjectDocument>;
    static update(id: string, data: Partial<IProject>): Promise<IProjectDocument | null>;
    static delete(id: string): Promise<IProjectDocument | null>;
}
