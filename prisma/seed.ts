import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
     await prisma.movie.create({
      data: {
        title: "Batman",
        duration: 45455,
        release_date: "2022-09-01T22:12:24.486Z"
      }
    })
  }

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

  export default prisma;
  