import prisma from "@/lib/prisma";
import { checkAdmin } from "@/middleware/get-userId";

export async function POST(req: Request){
    const {isAdmin} = await checkAdmin(req)

    if(!isAdmin){
        return Response.json({
            success: false,
            message: "You are not an admin"
        })
    }

    const body = await req.json()

    await prisma.category.create({
        data:{
            name: body.name,
            priority: body.priority
        }
    })

    return Response.json({
        success: true,
        message: "Category Created"
    })
}

export async function GET(req: Request){
    const categories = await prisma.category.findMany({});

    return Response.json({
        success: true,
        data: categories
    })
}
