const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const email = 'admin@signalos.app';
    const password = 'signalos2026'; // Same as before
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log('🌱 Seeding initial SaaS user...');

    // 1. Create User
    const user = await prisma.user.upsert({
        where: { email },
        update: {},
        create: {
            name: 'Signal Admin',
            email,
            password: hashedPassword,
        },
    });

    // 2. Create Organization
    const org = await prisma.organization.upsert({
        where: { slug: 'default-org' },
        update: {},
        create: {
            name: 'SignalOS Beta Org',
            slug: 'default-org',
            plan: 'pro',
        },
    });

    // 3. Create Membership
    await prisma.membership.upsert({
        where: {
            userId_organizationId: {
                userId: user.id,
                organizationId: org.id,
            },
        },
        update: {},
        create: {
            userId: user.id,
            organizationId: org.id,
            role: 'OWNER',
        },
    });

    console.log('✅ SaaS Migration Seed Complete!');
    console.log('   User:', email);
    console.log('   Org:', org.name);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
