import type { IReseauxSociaux, IReseauxSociauxDocument } from './resieauxSociaux.model.js';
export declare class ResieauxSociauxService {
    static getAll(): Promise<IReseauxSociauxDocument[]>;
    static getById(id: string): Promise<IReseauxSociauxDocument | null>;
    static create(data: Partial<IReseauxSociaux>): Promise<IReseauxSociauxDocument>;
    static update(id: string, data: Partial<IReseauxSociaux>): Promise<IReseauxSociauxDocument | null>;
    static delete(id: string): Promise<IReseauxSociauxDocument | null>;
}
