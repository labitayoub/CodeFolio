import { Document } from './document.model';

export class DocumentService {
  static async getAll() {
    return Document.find();
  }
  static async getById(id: string) {
    return Document.findById(id);
  }
  static async create(data: any) {
    const doc = new Document(data);
    return doc.save();
  }
  static async update(id: string, data: any) {
    return Document.findByIdAndUpdate(id, data, { new: true });
  }
  static async delete(id: string) {
    return Document.findByIdAndDelete(id);
  }
}
