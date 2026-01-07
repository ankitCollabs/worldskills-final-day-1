'use server'

import prisma from "@/lib/prisma";
import Jwt from "jsonwebtoken";
import { USER_ROLE } from "@prisma/client";

export const getUserId = async (req: Request)=>{
    const header = req.headers.get("AUTHORIZATION")
    const token = header?.split(" ")[1];
    if(!token) return null
    const userId = Jwt.verify(token, "A very Strong Secret") as string   

    return userId
}

export const checkAdmin = async(req:Request)=>{
    const userId = await getUserId(req);
    if(!userId) return {
        isAdmin: false,
        user: null
    }
    const user = await prisma.user.findUnique({where:{id:userId}})
    if(user?.role === USER_ROLE.ADMIN){
        return {
            isAdmin: true,
            user
        }
    }else{
        return {
            isAdmin: false,
            user: null
        }
    }
}