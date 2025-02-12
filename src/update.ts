import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    console.log('Prisma client started');
    // update data creation through prisma

    /* get all data from the database */
    // const singleUpdate = await prisma.post.update({
    //     where: {
    //         id: 3
    //     },
    //     data: {
    //         title: 'Title 3',
    //         content: 'Content 3',
    //         author: 'Begom Arman'
    //     }
    // });

    const manyUpdate = await prisma.post.updateMany(
        {
            where: {
                // id: [3,4],
                title: 'Title 3'
            },
            data: {
                published: true
            }
        }
    );
    console.log(manyUpdate);
};

main();