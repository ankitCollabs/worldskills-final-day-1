import prisma from "@/lib/prisma";
import { getUserId } from "@/middleware/get-userId";
import Jwt from "jsonwebtoken";

export async function GET(req: Request){
    const userId = await getUserId(req)
    if(!userId) return Response.json({success: false, message: "Please Login again to see profile"})
    const user = await prisma.user.findUnique({where:{id:userId}, select:{id: true, name: true, role: true}})
    return Response.json({success: "true", data:user})
}