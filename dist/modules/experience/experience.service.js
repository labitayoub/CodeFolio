import { Experience } from './experience.model';
export class ExperienceService {
    static async getAll() {
        return Experience.find();
    }
    static async getById(id) {
        return Experience.findById(id);
    }
    static async create(data) {
        const exp = new Experience(data);
        return exp.save();
    }
    static async update(id, data) {
        return Experience.findByIdAndUpdate(id, data, { new: true });
    }
    static async delete(id) {
        return Experience.findByIdAndDelete(id);
    }
}
//# sourceMappingURL=experience.service.js.map