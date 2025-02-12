import { PrismaClient, UserRole } from "@prisma/client";

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
    // const createUser = await prisma.user.createMany({
    //     data: [
    //         {
    //             username: 'user1',
    //             email: 'user1@gmail.com',
    //             role: UserRole.user
    //         },
    //         {
    //             username: 'user2',
    //             email: 'user2@gmail.com',
    //             role: UserRole.user
    //         },
    //         {
    //             username: 'user3',
    //             email: 'user3@gmail.com',
    //             role: UserRole.user
    //         },
    //     ]
    // });

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "This is bio for user 1",
    //         userId: 1
    //     }
    // });


    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: 'software engineering',
    //     }
    // });

    const createPost = await prisma.post.create({
        data: {
            title: 'Title 4',
            content: 'This is content for 4',
            authorId: 3,
            postCategory: {
                // create: {
                //     categoryId: 3
                //     // in case category field is used to create relation
                //     // category: {
                //     //     connect: {
                //     //         id: 1
                //     //     }
                //     // }
                // }

                // many to many relation
                create: [
                    {
                        categoryId: 1,
                    },
                    {
                        categoryId: 2,
                    },
                    {
                        categoryId: 4,
                    },
                ]
            }
        },
        // showing the relation
        include: {
            postCategory: true
        }
    });


    console.log(createPost);
};


main();