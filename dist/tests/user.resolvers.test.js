import { resolvers } from '../../modules/user/graphql/user.resolvers.js';
import { UserService } from '../../modules/user/user.service.js';
describe('User Resolvers', () => {
    describe('Mutation.register', () => {
        it('should register a new user', async () => {
            const userData = {
                nom: 'Test',
                prenom: 'User',
                email: 'test.user@example.com',
                password: 'password123',
                bio: 'Test bio'
            };
            const result = await resolvers.Mutation.register(null, userData, {});
            expect(result).toBeDefined();
            expect(result.nom).toBe(userData.nom);
            expect(result.prenom).toBe(userData.prenom);
            expect(result.email).toBe(userData.email);
            expect(result.bio).toBe(userData.bio);
        });
    });
    describe('Mutation.login', () => {
        beforeEach(async () => {
            const userData = {
                nom: 'Login',
                prenom: 'Test',
                email: 'login.test@example.com',
                password: 'password123',
                bio: 'Login test'
            };
            await resolvers.Mutation.register(null, userData, {});
        });
        it('should login successfully', async () => {
            const result = await resolvers.Mutation.login(null, {
                email: 'login.test@example.com',
                password: 'password123'
            }, {});
            expect(result).toBeDefined();
            expect(typeof result).toBe('string');
        });
        it('should throw error for invalid credentials', async () => {
            await expect(resolvers.Mutation.login(null, {
                email: 'login.test@example.com',
                password: 'wrongpassword'
            }, {})).rejects.toThrow('Invalid password');
        });
    });
    describe('Query.getProfil', () => {
        let userId;
        beforeEach(async () => {
            const userData = {
                nom: 'Profile',
                prenom: 'Test',
                email: 'profile.test@example.com',
                password: 'password123',
                bio: 'Profile test'
            };
            const user = await resolvers.Mutation.register(null, userData, {});
            userId = user._id.toString();
        });
        it('should return user profile when authenticated', async () => {
            const context = { userId };
            const result = await resolvers.Query.getProfil(null, {}, context);
            expect(result).toBeDefined();
            expect(result.nom).toBe('Profile');
            expect(result.prenom).toBe('Test');
            expect(result.email).toBe('profile.test@example.com');
        });
        it('should throw error when not authenticated', async () => {
            const context = {};
            await expect(resolvers.Query.getProfil(null, {}, context)).rejects.toThrow('Authentication required');
        });
    });
    describe('Mutation.updateProfil', () => {
        let userId;
        beforeEach(async () => {
            const userData = {
                nom: 'Update',
                prenom: 'Test',
                email: 'update.test@example.com',
                password: 'password123',
                bio: 'Update test'
            };
            const user = await resolvers.Mutation.register(null, userData, {});
            userId = user._id.toString();
        });
        it('should update user profile when authenticated', async () => {
            const context = { userId };
            const updateData = {
                bio: 'Updated bio',
                nom: 'Updated Name'
            };
            const result = await resolvers.Mutation.updateProfil(null, updateData, context);
            expect(result).toBeDefined();
            expect(result.nom).toBe('Updated Name');
            expect(result.bio).toBe('Updated bio');
        });
        it('should throw error when not authenticated', async () => {
            const context = {};
            const updateData = { bio: 'New bio' };
            await expect(resolvers.Mutation.updateProfil(null, updateData, context)).rejects.toThrow('Authentication required');
        });
    });
});
//# sourceMappingURL=user.resolvers.test.js.map