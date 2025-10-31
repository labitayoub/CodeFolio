import type { IProject, IProjectDocument } from './project.model.js';
export declare class ProjectService {
    getProjets(): Promise<IProjectDocument[]>;
    createProjet(args: IProject): Promise<IProjectDocument>;
    updateProjet(id: string, args: Partial<IProject>): Promise<IProjectDocument | null>;
    deleteProjet(id: string): Promise<IProjectDocument | null>;
}
//# sourceMappingURL=project.service.d.ts.map