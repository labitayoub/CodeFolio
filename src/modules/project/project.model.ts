import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }]
});

export const ProjectModel = model('Project', projectSchema);
