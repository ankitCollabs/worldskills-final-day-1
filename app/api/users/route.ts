import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";

export async function POST(req:Request, res:Response){
    const body = await req.json();
    

    return new Response("User Registered Successfully", {status: 200})
}