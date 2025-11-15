import { Elysia } from 'elysia';
import { usersRoute } from './users/users.route';

export const apiV1Route = new Elysia({ prefix: '/v1' })
    .get('/', () => 'Komunifi API v1 is running')
    .use(usersRoute);
