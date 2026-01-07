import prisma from "@/lib/prisma";
import { getUserId } from "@/middleware/get-userId";

export async function GET(req: Request){
    const userId = await getUserId(req)
    if(!userId) return Response.json({"message":"You are not authenticated", success: false})

    const requests = await prisma.request.findMany({where:{userId}})
    return Response.json({
        success: true,
        data: requests
    })

}

export async function POST(req: Request){
    const userId = await getUserId(req)
    if(!userId) return Response.json({"message":"You are not authenticated", success: false})
    
    const {category_id, title, description} = await req.json();

    const new_req = await prisma.request.create({
        data:{
            categoryId: category_id,
            title,
            description,
            userId
        }
    })

    return Response.json({
        success: true,
        request_id: new_req.id
    })
}