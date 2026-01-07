import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";

export async function POST(req:Request){
    const body = await req.json();
    

    return new Response("Route Working perfectly!", {status: 200})
}