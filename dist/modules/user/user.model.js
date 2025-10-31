import { Document, Schema, model } from 'mongoose';
const userSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String }
});
export const UserModel = model('User', userSchema);
//# sourceMappingURL=user.model.js.map