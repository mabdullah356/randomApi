import { PrismaClient } from "@/app/generated/prisma/client";

const globalForPrisma = global as {
    prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();