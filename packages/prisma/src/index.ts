import dotenv from 'dotenv';
// Use the path you just confirmed via `cat`
dotenv.config();
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from '@prisma/adapter-pg';
import pg from "pg";

console.log(process.env.DATABASE_URL);

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)

export const prismaClient = new PrismaClient({adapter});

const x = 5;
const p = 7;