const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                { name: "Personnes célèbres"},
                { name: "Musiciens"},
                { name: "Développeurs"},
                { name: "Responsables"},
                { name: "Directeurs"},
                { name: "Professionnels de la santé"},
                { name: "Enseignants et éducateurs"},
                { name: "Ingénieurs"},
                { name: "Artisans"},
                { name: "Commerçants et entrepreneurs "},
                { name: "Avocats et juristes "},
                { name: "Finance et comptabilité "},
                { name: "Scientifique"},
            ]
        })
    } catch (error) {
        console.error("Error seeding default categories", error);
    } finally {
        await db.$disconnect();
    }
};

main(); 