import { UserModel } from './user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export class UserService {
    async register(args) {
        const { nom, prenom, email, password, bio } = args;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({ nom, prenom, email, password: hashedPassword, bio });
        return await user.save();
    }
    async login(email, password) {
        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = user ? await bcrypt.compare(password, user.password) : false;
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }
        return jwt.sign({ userId: user.id, nom: user.nom, prenom: user.prenom, email: user.email }, process.env.JWT_SECRET, { expiresIn: "24h" });
    }
    async getProfil(userId) {
        return await UserModel.findById(userId).select('-password');
    }
    async updateProfil(userId, args) {
        return await UserModel.findByIdAndUpdate(userId, args, { new: true }).select('-password');
    }
}
//# sourceMappingURL=user.service.js.map