import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
async function seed() {
  // WisdomMan is a default user with the password   'twixrox'
  await db.user.create({
    data: {
      email: "admin@gmail.com",
      // this is a hashed version of "twixrox"
      password: "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    },
  });
}
seed();
