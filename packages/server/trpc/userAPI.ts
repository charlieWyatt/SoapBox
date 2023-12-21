import { createRouter } from '@trpc/server';
import { prisma } from '../prisma';
import { userService } from '../services/userService';

export const userAPI = createRouter()
  .query('getUser', {
    input: z.string(),
    resolve: async ({ input }) => {
      const user = await userService.getUser(input);
      return user;
    },
  })
  .mutation('createUser', {
    input: z.object({
      username: z.string(),
      password: z.string(),
    }),
    resolve: async ({ input }) => {
      const newUser = await userService.createUser(input);
      return newUser;
    },
  })
  .mutation('deleteUser', {
    input: z.string(),
    resolve: async ({ input }) => {
      const deletedUser = await userService.deleteUser(input);
      return deletedUser;
    },
  });