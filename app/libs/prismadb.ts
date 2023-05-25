/*
This line imports the PrismaClient from the @prisma/client package. The PrismaClient is an auto-generated client provided by Prisma that allows you to interact with your database using the Prisma ORM.
*/
import {PrismaClient} from "@prisma/client";

/*
This code declares a global variable prisma of type PrismaClient | undefined. The declare global syntax is used to augment the global namespace in TypeScript. By declaring prisma globally, you can access it from anywhere in your codebase.
*/
declare global {
  var prisma: PrismaClient | undefined;
}
/*
This line creates a constant client that checks if globalThis.prisma (the global prisma variable) is defined. If it is defined, client will be assigned the value of globalThis.prisma, which means that prisma has already been instantiated and can be reused. If globalThis.prisma is undefined, a new instance of PrismaClient is created and assigned to client.
*/
const client = globalThis.prisma || new PrismaClient();

/*
This condition checks if the environment variable NODE_ENV is not set to "production". If it's not in production mode, it sets globalThis.prisma (the global prisma variable) to the client instance. This ensures that there is only one instance of PrismaClient created and reused throughout your application in non-production environments. It helps with performance and resource management.
*/
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
