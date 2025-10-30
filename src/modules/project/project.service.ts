import { ProjectModel } from './project.model';

export class ProjectService {
  async getProjets() {
    return await ProjectModel.find().populate('skills');
  }

  async createProjet(args: any) {
    const newProject = new ProjectModel(args);
    return await newProject.save();
  }

  async updateProjet(id: string, args: any) {
    return await ProjectModel.findByIdAndUpdate(id, args, { new: true });
  }

  async deleteProjet(id: string) {
    return await ProjectModel.findByIdAndDelete(id);
  }
}
