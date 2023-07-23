import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
// needed to avoid issue of next13 hot reload recreating PrismaClient
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}

export default client;
