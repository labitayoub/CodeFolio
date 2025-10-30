import { ResieauxSociaux } from './resieauxSociaux.model';
export class ResieauxSociauxService {
    static async getAll() {
        return ResieauxSociaux.find();
    }
    static async getById(id) {
        return ResieauxSociaux.findById(id);
    }
    static async create(data) {
        const rs = new ResieauxSociaux(data);
        return rs.save();
    }
    static async update(id, data) {
        return ResieauxSociaux.findByIdAndUpdate(id, data, { new: true });
    }
    static async delete(id) {
        return ResieauxSociaux.findByIdAndDelete(id);
    }
}
//# sourceMappingURL=resieauxSociaux.service.js.map