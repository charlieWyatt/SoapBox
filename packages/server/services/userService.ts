import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (user: { username: string, password: string, email: string }) => {
  return await prisma.user.create({
    data: user
  });
}

export const getUser = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id }
  });
}

export const updateUser = async (id: number, user: { username?: string, password?: string, email?: string }) => {
  return await prisma.user.update({
    where: { id },
    data: user
  });
}

export const deleteUser = async (id: number) => {
  return await prisma.user.delete({
    where: { id }
  });
}