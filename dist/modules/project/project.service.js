import { ProjectModel } from './project.model.js';
export class ProjectService {
    static async getAll() {
        try {
            return await ProjectModel.find();
        }
        catch (error) {
            throw new Error('Failed to fetch projects');
        }
    }
    static async getById(id) {
        try {
            return await ProjectModel.findById(id);
        }
        catch (error) {
            throw new Error('Failed to fetch project');
        }
    }
    static async create(data) {
        try {
            const newProject = new ProjectModel(data);
            return await newProject.save();
        }
        catch (error) {
            throw new Error('Failed to create project');
        }
    }
    static async update(id, data) {
        try {
            return await ProjectModel.findByIdAndUpdate(id, data, { new: true });
        }
        catch (error) {
            throw new Error('Failed to update project');
        }
    }
    static async delete(id) {
        try {
            return await ProjectModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw new Error('Failed to delete project');
        }
    }
}
//# sourceMappingURL=project.service.js.map