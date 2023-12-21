import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      username: "user1",
      email: "user1@example.com",
      password: "password1",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "user2",
      email: "user2@example.com",
      password: "password2",
    },
  });

  await prisma.tweet.create({
    data: {
      content: "Hello, world!",
      userId: user1.id,
    },
  });

  await prisma.tweet.create({
    data: {
      content: "Hello, Prisma!",
      userId: user2.id,
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });