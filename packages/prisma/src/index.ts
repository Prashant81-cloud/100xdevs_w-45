import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from '@prisma/adapter-pg';
import dotenv from 'dotenv';
import pg from "pg";
dotenv.config();

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)

export const prismaClient = new PrismaClient({adapter});