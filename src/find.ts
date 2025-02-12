import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    console.log('Prisma client started');
    /* get all data from the database */
    const getAllFromDB = await prisma.post.findMany();


    /* get all data from the database first or throw*/

    const findFirst = await prisma.post.findFirstOrThrow({
        where: {
            published: false
        }
    });

    /* find unique or throw error*/
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            // only unique field can be here
            id: 1
        }
    });
    console.log({ findUnique });
};

main();