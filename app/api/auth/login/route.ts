import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import Jwt  from "jsonwebtoken";
import "dotenv/config";

export async function POST(req: Request){
    const body:{email: string, password: string} = await req.json();

    if(!body.email || !body.password) return Response.json({"success": false, message:"Provide all data"})

    const user = await prisma.user.findUnique({where:{email:body.email}})
    if(!user) return new Response("User Does not Exists", {statusText:"false", status:501})

    if(!bcrypt.compareSync(body.password, user.password)) return new Response("Password Does Not Match", {statusText:"false", status:501})
    
    const token = Jwt.sign(user.id, "A very Strong Secret")

    return Response.json({
        "success": true,
        token
    })

}