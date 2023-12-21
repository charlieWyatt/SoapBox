import { createRouter } from '@trpc/server';
import { tweetAPI } from './tweetAPI';
import { userAPI } from './userAPI';

export const router = createRouter()
  .merge('tweets/', tweetAPI)
  .merge('users/', userAPI);