import { getUserId } from "@/middleware/get-userId"

export async function POST(req: Request){
    const userId = await getUserId(req)
    if(!userId) return Response.json({
        success: false,
        message: "Please login to log out"
    })
    return Response.json({
        success: true,
        "message": "Logged out Successfully"
    })
}