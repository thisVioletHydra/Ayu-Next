// @ts-nocheck — visual sample only
import { PrismaClient, type Prisma, type Role, type Token, type User } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma: PrismaClient = globalForPrisma.prisma ?? new PrismaClient({
  log: ['query', 'warn', 'error'],
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

type TokenCreate = Prisma.TokenCreateInput;

async function findEditor(email: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { email },
    include: { tokens: true },
  });
}

async function upsertAccent(userId: string, hex: string): Promise<Token> {
  const data: TokenCreate = {
    role: 'accent.default',
    hex,
    description: 'Primary accent',
    user: { connect: { id: userId } },
  };

  return prisma.token.upsert({
    where: {
      userId_role: { userId, role: 'accent.default' },
    },
    create: data,
    update: { hex, description: data.description },
  });
}

async function listByRole(role: Role): Promise<ReadonlyArray<User>> {
  return prisma.user.findMany({
    where: { role },
    orderBy: { createdAt: 'desc' },
    take: 50,
  });
}

export type { TokenCreate };
export { findEditor, upsertAccent, listByRole };
