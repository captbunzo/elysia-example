import { Elysia, t } from 'elysia';
import type { Static } from '@sinclair/typebox';

// Define DTOs for Elysia validation
export const UserFieldsSchema = {
    id: t.String(),
    username: t.String(),
};

export const UserModelSchema = t.Object(
    {
        id: UserFieldsSchema.id,
        username: t.Optional(UserFieldsSchema.username),
        name: t.Optional(t.String()),
        firstName: t.Optional(t.String()),
        email: t.Optional(t.String()),
        createdAt: t.Date(),
        updatedAt: t.Date(),
    },
    {
        title: 'User',
        description: 'User object',
    }
);

export const UpdateUserRequestSchema = t.Object(
    {
        username: t.Optional(UserFieldsSchema.username),
        name: t.Optional(t.String()),
        firstName: t.Optional(t.String()),
        email: t.Optional(t.String()),
    },
    {
        title: 'User Update Request',
        description: 'Request object for updating an existing user.',
    }
);

// Export typescript types
export type UserModel = Static<typeof UserModelSchema>;
export type UpdateUserRequest = Static<typeof UpdateUserRequestSchema>;

// Export elysia model
export const usersModel = new Elysia().model({
    'users.User': UserModelSchema,
    'users.UpdateUserRequest': UpdateUserRequestSchema,
});
