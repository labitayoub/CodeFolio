import { Schema, model } from 'mongoose';
const projectSchema = new Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true },
    urlGit: { type: String, required: true },
    urlDemo: { type: String, required: true },
    image: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});
export const ProjectModel = model('Project', projectSchema);
//# sourceMappingURL=project.model.js.map