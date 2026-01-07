import prisma from "@/lib/prisma";
import { checkAdmin } from "@/middleware/get-userId";

export async function GET(req: Request){
    const {isAdmin, user} = await checkAdmin(req);

    if(!isAdmin){
        return Response.json({
            success: false,
            message: "You are not an admin"
        })
    }

    const users = await prisma.user.findMany({})
    return Response.json({
        success: true,
        data:users
    })
}