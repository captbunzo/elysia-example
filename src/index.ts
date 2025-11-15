import { Elysia } from 'elysia';

import { config } from '@/config';
import { errorHandler } from '@/plugins/error.handler';
import { apiRoute } from '@/routes/api/api.route';

console.log('Hello via Bun!');

export const app = new Elysia()
    .use(errorHandler)
    .use(apiRoute)
    .get('/', () => 'Hello World!')
    .listen(config.port);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
