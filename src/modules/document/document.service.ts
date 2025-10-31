import { DocumentModel, type IDocument } from './document.model.js';

export class DocumentService {
  static async getAll() {
    return DocumentModel.find();
  }
  static async getById(id: string) {
    return DocumentModel.findById(id);
  }
  static async create(data: Partial<IDocument>) {
    const doc = new DocumentModel(data);
    return doc.save();
  }
  static async update(id: string, data: Partial<IDocument>) {
    return DocumentModel.findByIdAndUpdate(id, data, { new: true });
  }
  static async delete(id: string) {
    return DocumentModel.findByIdAndDelete(id);
  }
}
