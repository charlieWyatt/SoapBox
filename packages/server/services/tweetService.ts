import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTweet = async (content: string, userId: string) => {
  return await prisma.tweet.create({
    data: {
      content,
      userId,
    },
  });
};

export const deleteTweet = async (id: string) => {
  return await prisma.tweet.delete({
    where: {
      id,
    },
  });
};

export const getTweetById = async (id: string) => {
  return await prisma.tweet.findUnique({
    where: {
      id,
    },
  });
};

export const getTweetsByUserId = async (userId: string) => {
  return await prisma.tweet.findMany({
    where: {
      userId,
    },
  });
};