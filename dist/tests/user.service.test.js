import { UserService } from '../../modules/user/user.service.js';
import { UserModel } from '../../modules/user/user.model.js';
describe('UserService', () => {
    describe('register', () => {
        it('should create a new user successfully', async () => {
            const userData = {
                nom: 'Dupont',
                prenom: 'Jean',
                email: 'jean.dupont@test.com',
                password: 'password123',
                bio: 'Développeur fullstack'
            };
            const result = await UserService.register(userData);
            expect(result).toBeDefined();
            expect(result.nom).toBe(userData.nom);
            expect(result.prenom).toBe(userData.prenom);
            expect(result.email).toBe(userData.email);
            expect(result.bio).toBe(userData.bio);
            expect(result.password).not.toBe(userData.password); // Password should be hashed
        });
        it('should throw error for duplicate email', async () => {
            const userData = {
                nom: 'Dupont',
                prenom: 'Marie',
                email: 'jean.dupont@test.com', // Same email as previous test
                password: 'password123',
                bio: 'Designer'
            };
            await expect(UserService.register(userData)).rejects.toThrow();
        });
    });
    describe('login', () => {
        beforeEach(async () => {
            // Create a test user
            const userData = {
                nom: 'Martin',
                prenom: 'Alice',
                email: 'alice.martin@test.com',
                password: 'password123',
                bio: 'Test user'
            };
            await UserService.register(userData);
        });
        it('should login successfully with correct credentials', async () => {
            const token = await UserService.login('alice.martin@test.com', 'password123');
            expect(token).toBeDefined();
            expect(typeof token).toBe('string');
            // Verify token contains expected data
            const jwt = require('jsonwebtoken');
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'test-secret');
            expect(decoded.nom).toBe('Martin');
            expect(decoded.prenom).toBe('Alice');
            expect(decoded.email).toBe('alice.martin@test.com');
        });
        it('should throw error for non-existent user', async () => {
            await expect(UserService.login('nonexistent@test.com', 'password123')).rejects.toThrow('User not found');
        });
        it('should throw error for incorrect password', async () => {
            await expect(UserService.login('alice.martin@test.com', 'wrongpassword')).rejects.toThrow('Invalid password');
        });
    });
    describe('getProfil', () => {
        let userId;
        beforeEach(async () => {
            const userData = {
                nom: 'Dubois',
                prenom: 'Pierre',
                email: 'pierre.dubois@test.com',
                password: 'password123',
                bio: 'Ingénieur logiciel'
            };
            const user = await UserService.register(userData);
            userId = user._id.toString();
        });
        it('should return user profile', async () => {
            const profile = await UserService.getProfil(userId);
            expect(profile).toBeDefined();
            expect(profile?.nom).toBe('Dubois');
            expect(profile?.prenom).toBe('Pierre');
            expect(profile?.email).toBe('pierre.dubois@test.com');
            expect(profile?.bio).toBe('Ingénieur logiciel');
        });
        it('should return null for non-existent user', async () => {
            const profile = await UserService.getProfil('507f1f77bcf86cd799439011'); // Random ObjectId
            expect(profile).toBeNull();
        });
    });
    describe('updateProfil', () => {
        let userId;
        beforeEach(async () => {
            const userData = {
                nom: 'Leroy',
                prenom: 'Sophie',
                email: 'sophie.leroy@test.com',
                password: 'password123',
                bio: 'Chef de projet'
            };
            const user = await UserService.register(userData);
            userId = user._id.toString();
        });
        it('should update user profile', async () => {
            const updateData = {
                bio: 'Chef de projet senior',
                nom: 'Leroy-Dupont'
            };
            const updatedUser = await UserService.updateProfil(userId, updateData);
            expect(updatedUser).toBeDefined();
            expect(updatedUser?.nom).toBe('Leroy-Dupont');
            expect(updatedUser?.bio).toBe('Chef de projet senior');
            expect(updatedUser?.email).toBe('sophie.leroy@test.com'); // Unchanged
        });
        it('should return null for non-existent user', async () => {
            const updateData = { bio: 'New bio' };
            const result = await UserService.updateProfil('507f1f77bcf86cd799439011', updateData);
            expect(result).toBeNull();
        });
    });
});
//# sourceMappingURL=user.service.test.js.map