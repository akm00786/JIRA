import { PrismaClient } from "./generated/prisma"

// primsa clinet for quering the database
export const db = globalThis.prisma || new PrismaClient() // Prevent multiple instances of Prisma Client in development
 // on every  next js hot reload  -- use global.this.prisma GLOBAL VARIABLE
if ( process.env.NODE_ENV !== "production" )  {
  globalThis.prisma = db
}
;