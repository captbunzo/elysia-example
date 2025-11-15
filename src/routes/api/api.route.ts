import { Elysia } from 'elysia';

import { openapiRoutes } from '@/plugins/integrations/openapi';
import { apiV1Route } from './v1/api-v1.route';

export const apiRoute = new Elysia({ prefix: '/api' })
    .use(openapiRoutes)
    .use(apiV1Route)
    .get('/', () => 'Komunifi API v1 is running');
