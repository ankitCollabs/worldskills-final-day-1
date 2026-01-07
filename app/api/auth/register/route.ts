import bcrypt from "bcryptjs"
import prisma from "@/lib/prisma"
import { User } from "@prisma/client"

export async function POST(req:Request){
    const body = await req.json()
    try{
        const user = await prisma.user.findUnique({where:{email:body.email}});
        if(user) return new Response("User Already Exists", {statusText:"false", status:501})
            
        await prisma.user.create({
            data:{
                name:body.name,
                email:body.email,
                password: bcrypt.hashSync(body.password, bcrypt.genSaltSync(10)),
                role: body.role
            }
        })
            
        return new Response("User Registered Successfully", {statusText:"true", status:200});
    }catch(err){
        console.log("Error Creating User", err)
        return new Response("Internal Server Error", {statusText:"false", status:500});
    }
    
}