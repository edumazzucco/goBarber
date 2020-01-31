import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Oi Edu!' }));

export default routes;
