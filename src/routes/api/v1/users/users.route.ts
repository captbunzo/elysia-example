import { Elysia, t } from 'elysia';
import { usersModel, UserModelSchema } from './users.model';

export const usersRoute = new Elysia({ prefix: '/users', tags: ['User'] })
    .use(usersModel)

    .get(
        '/@me',
        () => {
            return {
                id: '123',
                username: 'user123',
                name: 'John Doe',
                firstName: 'John',
                email: 'user@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
        },
        {
            detail: {
                summary: 'Get Current User',
                description: 'Returns the currently authenticated user.',
            },
            response: t.Union([UserModelSchema, t.Undefined()]),
            auth: true,
        }
    );
