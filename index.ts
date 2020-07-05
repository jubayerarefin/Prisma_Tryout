import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Create User
    // await prisma.user.create({
    //     data: {
    //         name: "James",
    //         email: "james@prisma.io",
    //         active: true,
    //         profile: {
    //             create: {
    //                 bio: "prodigal son"
    //             }
    //         }
    //     }
    // })

    //Query User
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.disconnect()
    })
