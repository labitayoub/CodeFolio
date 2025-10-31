import { Skill } from './skill.model.js';
export class SkillService {
    static async getAll() {
        return Skill.find();
    }
    static async getById(id) {
        return Skill.findById(id);
    }
    static async create(data) {
        const skill = new Skill(data);
        return skill.save();
    }
    static async update(id, data) {
        return Skill.findByIdAndUpdate(id, data, { new: true });
    }
    static async delete(id) {
        return Skill.findByIdAndDelete(id);
    }
}
//# sourceMappingURL=skill.service.js.map