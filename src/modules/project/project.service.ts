import { ProjectModel } from './project.model';

export class ProjectService {
  async getProjets() {
    return await ProjectModel.find().populate('skills');
  }

  async createProjet(args) {
    const newProject = new ProjectModel(args);
    return await newProject.save();
  }

  async updateProjet(id, args) {
    return await ProjectModel.findByIdAndUpdate(id, args, { new: true });
  }

  async deleteProjet(id) {
    return await ProjectModel.findByIdAndDelete(id);
  }
}
