import prisma from "@/lib/prisma";
import {faker} from "@faker-js/faker";

async function main() {
    console.log("Start seeding...");

    for (let i = 1; i < 10; i++) {
        await prisma.user.create({
            data: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
            },
        });
    }
    console.log('Seeding finished.');
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })