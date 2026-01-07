import prisma from "@/lib/prisma";
import { getUserId } from "@/middleware/get-userId";
import { CONDITION } from "@prisma/client";

export async function GET(req: Request){
    const userId = await getUserId(req);

    if(!userId){
        return Response.json("User Not Authenticated")
    }

    const requests = await prisma.request.findMany({
        where:{
            userId
        }
    })

    let open_count = 0
    requests.map(r=>r.condition===CONDITION.OPEN?open_count+=1:open_count+=0)

    return Response.json({
        OPEN: open_count,
        RESOLVED: requests.length-open_count
    })
}