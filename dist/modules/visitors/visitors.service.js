import { Visitors } from './visitors.model';
export class VisitorsService {
    static async getAll() {
        return Visitors.find();
    }
    static async getById(id) {
        return Visitors.findById(id);
    }
    static async create(data) {
        const visitor = new Visitors(data);
        return visitor.save();
    }
    static async update(id, data) {
        return Visitors.findByIdAndUpdate(id, data, { new: true });
    }
    static async delete(id) {
        return Visitors.findByIdAndDelete(id);
    }
}
//# sourceMappingURL=visitors.service.js.map