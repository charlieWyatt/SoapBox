import { createHttpServer } from '@trpc/server/adapters/http';
import { router } from './trpc';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const server = createHttpServer({
  router,
  createContext: () => null,
});

app.use('/api', server.middleware);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/api');
});