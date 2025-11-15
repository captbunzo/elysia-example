import { Elysia } from 'elysia';
import { openapi, fromTypes } from '@elysiajs/openapi';

const openapiPlugin = openapi({
    references: fromTypes(),
    documentation: {
        info: {
            title: 'Elysia Example API',
            description: 'API documentation for Elysia Example Project',
            version: '1.0.0',
        },
        tags: [{ name: 'User', description: 'User endpoints' }],
    },
    scalar: {
        hideClientButton: true,
        showToolbar: 'always',
    },
});

export const openapiRoutes = new Elysia().use(openapiPlugin);
