import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregate = async () => {
    // aggregate only used on number fields
    const avgAge = await prisma.user.aggregate({
        _avg: {
            age: true
        }
    });

    const sumOfAge = await prisma.user.aggregate({
        _sum: {
            age: true
        }
    });

    // find count

    //applying to a field
    const countAge = await prisma.user.aggregate({
        _count: {
            // age: true,
            username: true
        },
    });

    // counting the whole table data or records
    const countData = await prisma.user.count();

    // find max-min age

    const maxAge = await prisma.user.aggregate({
        _max: {
            age: true
        }
    });
    const minAge = await prisma.user.aggregate({
        _min: {
            age: true
        }
    });
    console.log(countAge);
};

aggregate();