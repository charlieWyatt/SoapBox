import { createRouter } from '@trpc/server';
import { z } from 'zod';
import { userService } from '../services/userService';

export const userRouter = createRouter()
  .query('getUser', {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ input }) => {
      return await userService.getUser(input.id);
    },
  })
  .mutation('createUser', {
    input: z.object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
    }),
    resolve: async ({ input }) => {
      return await userService.createUser(input);
    },
  })
  .mutation('updateUser', {
    input: z.object({
      id: z.string(),
      name: z.string().optional(),
      email: z.string().optional(),
      password: z.string().optional(),
    }),
    resolve: async ({ input }) => {
      return await userService.updateUser(input);
    },
  })
  .mutation('deleteUser', {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ input }) => {
      return await userService.deleteUser(input.id);
    },
  });