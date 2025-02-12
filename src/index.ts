import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    console.log('Prisma client started');
    // data creation through prisma
    // const result = await prisma.post.create({
    //     data: {
    //         title: 'This is title 2',
    //         content: 'This is content 2',
    //         author: 'Kazi Mehedi Hasan'
    //     }
    // });

    /* get all data from the database */
    const getAllFromDB = await prisma.post.findMany();
    console.log(getAllFromDB);
};

main();