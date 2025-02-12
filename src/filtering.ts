import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
    const andFiltering = await prisma.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: "Title"
                    }
                },
                {
                    published: true
                }
            ]
        }
    });
    const orFiltering = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: "Title"
                    },
                },
                {
                    published: true
                }
            ]
        }
    });

    const notFiltering = await prisma.post.findMany({
        where: {
            NOT: [
                {
                    title: {
                        contains: "Title"
                    }
                }
            ]
        }
    });

    const startsWithFiltering = await prisma.user.findMany({
        where: {
            email: {
                // contains: "user",
                // endsWith: "gmail.com"
                // equals: "user1@gmail.com"
                startsWith: "u"
            }
        }
    });


    const userNameArray = ['user1', 'user2', 'user3'];

    const userNameByArray = await prisma.user.findMany({
        where: {
            username: {
                in: userNameArray
            }
        }
    });


    // get relational data from one table to others related to it
    const inDepthData = await prisma.user.findUnique({
        where: {
            id: 3
        },
        include: {
            post: {
                include: {
                    postCategory: {
                        include: {
                            category: true
                        }
                    }
                }
            }
        }
    });

    // console.log('And filtering data:', andFiltering);
    // console.log('And filtering data:', orFiltering);
    // console.log('Not filtering data:', notFiltering);
    // console.log('Startswith filtering data:', startsWithFiltering);
    // console.log('User name by array', userNameByArray);
    // console.log('In depth data', inDepthData);
    console.dir(inDepthData, { depth: Infinity });
};

filtering();