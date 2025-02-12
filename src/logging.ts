import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query",
        }
    ]
});

prisma.$on("query", (e) => {
    console.log("Query", e.query);
    console.log("Duration", e.duration);
    console.log("Date & Time", e.timestamp);
});

const main = async () => {
    const getAllPostFromDB = await prisma.post.findMany();
    // console.log(getAllPostFromDB);
};

main();