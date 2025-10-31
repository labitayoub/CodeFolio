import { Formation } from './formation.model.js';
export class FormationService {
    static async getAll() {
        return Formation.find();
    }
    static async getById(id) {
        return Formation.findById(id);
    }
    static async create(data) {
        const formation = new Formation(data);
        return formation.save();
    }
    static async update(id, data) {
        return Formation.findByIdAndUpdate(id, data, { new: true });
    }
    static async delete(id) {
        return Formation.findByIdAndDelete(id);
    }
}
//# sourceMappingURL=formation.service.js.map