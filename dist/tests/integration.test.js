import request from 'supertest';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs as userTypeDefs } from '../../modules/user/graphql/user.typeDefs.js';
import { resolvers as userResolvers } from '../../modules/user/graphql/user.resolvers.js';
import { connectDB } from '../../config/db.js';
describe('GraphQL API Integration Tests', () => {
    let app;
    let server;
    beforeAll(async () => {
        // Create Express app
        app = express();
        // Create Apollo Server
        server = new ApolloServer({
            typeDefs: [userTypeDefs],
            resolvers: [userResolvers],
            context: ({ req }) => {
                // Mock authentication context for testing
                const token = req.headers.authorization?.replace('Bearer ', '');
                if (token) {
                    try {
                        const jwt = require('jsonwebtoken');
                        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'test-jwt-secret');
                        return { userId: decoded.userId };
                    }
                    catch (error) {
                        return {};
                    }
                }
                return {};
            }
        });
        await server.start();
        server.applyMiddleware({ app });
        // Connect to test database
        await connectDB();
    });
    afterAll(async () => {
        await server.stop();
    });
    describe('User Registration', () => {
        it('should register a new user', async () => {
            const mutation = `
        mutation Register($input: UserInput!) {
          register(input: $input) {
            _id
            nom
            prenom
            email
            bio
          }
        }
      `;
            const variables = {
                input: {
                    nom: 'Integration',
                    prenom: 'Test',
                    email: 'integration.test@example.com',
                    password: 'password123',
                    bio: 'Integration test user'
                }
            };
            const response = await request(app)
                .post('/graphql')
                .send({ query: mutation, variables })
                .expect(200);
            expect(response.body.data.register).toBeDefined();
            expect(response.body.data.register.nom).toBe('Integration');
            expect(response.body.data.register.email).toBe('integration.test@example.com');
        });
        it('should return validation errors for invalid input', async () => {
            const mutation = `
        mutation Register($input: UserInput!) {
          register(input: $input) {
            _id
            nom
            prenom
            email
          }
        }
      `;
            const variables = {
                input: {
                    nom: '',
                    prenom: 'Test',
                    email: 'invalid-email',
                    password: '123',
                    bio: 'Test user'
                }
            };
            const response = await request(app)
                .post('/graphql')
                .send({ query: mutation, variables })
                .expect(200);
            expect(response.body.errors).toBeDefined();
        });
    });
    describe('User Login', () => {
        beforeAll(async () => {
            // Register a test user for login tests
            const mutation = `
        mutation Register($input: UserInput!) {
          register(input: $input) {
            _id
          }
        }
      `;
            const variables = {
                input: {
                    nom: 'Login',
                    prenom: 'Integration',
                    email: 'login.integration@example.com',
                    password: 'password123',
                    bio: 'Login test user'
                }
            };
            await request(app)
                .post('/graphql')
                .send({ query: mutation, variables });
        });
        it('should login successfully with correct credentials', async () => {
            const mutation = `
        mutation Login($email: String!, $password: String!) {
          login(email: $email, password: $password)
        }
      `;
            const variables = {
                email: 'login.integration@example.com',
                password: 'password123'
            };
            const response = await request(app)
                .post('/graphql')
                .send({ query: mutation, variables })
                .expect(200);
            expect(response.body.data.login).toBeDefined();
            expect(typeof response.body.data.login).toBe('string');
        });
        it('should return error for invalid credentials', async () => {
            const mutation = `
        mutation Login($email: String!, $password: String!) {
          login(email: $email, password: $password)
        }
      `;
            const variables = {
                email: 'login.integration@example.com',
                password: 'wrongpassword'
            };
            const response = await request(app)
                .post('/graphql')
                .send({ query: mutation, variables })
                .expect(200);
            expect(response.body.errors).toBeDefined();
            expect(response.body.errors[0].message).toContain('Invalid password');
        });
    });
    describe('Protected Queries', () => {
        let authToken;
        let userId;
        beforeAll(async () => {
            // Register and login to get auth token
            const registerMutation = `
        mutation Register($input: UserInput!) {
          register(input: $input) {
            _id
          }
        }
      `;
            const registerVars = {
                input: {
                    nom: 'Protected',
                    prenom: 'Test',
                    email: 'protected.test@example.com',
                    password: 'password123'
                }
            };
            const registerResponse = await request(app)
                .post('/graphql')
                .send({ query: registerMutation, variables: registerVars });
            userId = registerResponse.body.data.register._id;
            const loginMutation = `
        mutation Login($email: String!, $password: String!) {
          login(email: $email, password: $password)
        }
      `;
            const loginVars = {
                email: 'protected.test@example.com',
                password: 'password123'
            };
            const loginResponse = await request(app)
                .post('/graphql')
                .send({ query: loginMutation, variables: loginVars });
            authToken = loginResponse.body.data.login;
        });
        it('should access protected query with valid token', async () => {
            const query = `
        query GetProfil {
          getProfil {
            _id
            nom
            prenom
            email
          }
        }
      `;
            const response = await request(app)
                .post('/graphql')
                .set('Authorization', `Bearer ${authToken}`)
                .send({ query })
                .expect(200);
            expect(response.body.data.getProfil).toBeDefined();
            expect(response.body.data.getProfil.nom).toBe('Protected');
            expect(response.body.data.getProfil.prenom).toBe('Test');
        });
        it('should deny access to protected query without token', async () => {
            const query = `
        query GetProfil {
          getProfil {
            _id
            nom
            prenom
            email
          }
        }
      `;
            const response = await request(app)
                .post('/graphql')
                .send({ query })
                .expect(200);
            expect(response.body.errors).toBeDefined();
            expect(response.body.errors[0].message).toBe('Authentication required');
        });
    });
});
//# sourceMappingURL=integration.test.js.map