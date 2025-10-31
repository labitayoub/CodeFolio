import { ReseauxSociaux } from './resieauxSociaux.model.js';
export class ResieauxSociauxService {
    static async getAll() {
        return ReseauxSociaux.find();
    }
    static async getById(id) {
        return ReseauxSociaux.findById(id);
    }
    static async create(data) {
        const rs = new ReseauxSociaux(data);
        return rs.save();
    }
    static async update(id, data) {
        return ReseauxSociaux.findByIdAndUpdate(id, data, { new: true });
    }
    static async delete(id) {
        return ReseauxSociaux.findByIdAndDelete(id);
    }
}
//# sourceMappingURL=resieauxSociaux.service.js.map