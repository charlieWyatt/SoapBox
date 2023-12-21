import { createRouter } from '@trpc/server';
import { prisma } from '../prisma';
import { z } from 'zod';

export const tweetAPI = createRouter()
  .query('get', {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ input }) => {
      const tweet = await prisma.tweet.findUnique({
        where: { id: input.id },
      });
      return tweet;
    },
  })
  .mutation('create', {
    input: z.object({
      content: z.string(),
      userId: z.string(),
    }),
    resolve: async ({ input }) => {
      const newTweet = await prisma.tweet.create({
        data: {
          content: input.content,
          userId: input.userId,
        },
      });
      return newTweet;
    },
  })
  .mutation('delete', {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ input }) => {
      const deletedTweet = await prisma.tweet.delete({
        where: { id: input.id },
      });
      return deletedTweet;
    },
  });