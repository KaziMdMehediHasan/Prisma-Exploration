import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
    // getting the user data

    const result = await prisma.user.findUnique({
        where: {
            id: 3
        },
        // this will return user detail and post made by the user as postId is related to the user
        include: {
            post: true
        }
    });
    // fluent api
    //.post() // this will show only the post made by the user;

    // relational filters

    // this will show all the post each user has created
    const publishedPostUsers = await prisma.user.findMany({
        include: {
            // this will show all the posts created by each user of user model
            // post: true
            post: {
                // this filter will show only the post that are published by each user
                where: {
                    published: true
                }
            }
        }
    });
    // console.log(publishedPostUsers);
    console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();