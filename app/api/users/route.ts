import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:Request){
    const body:User = await req.json();
    if(!body.name || !body.email || !body.password || !body.mobile){
        return new Response("Please Provide all the details", {status: 501})
    }
    
    const user = await prisma.user.findUnique({
        where:{
            email: body.email
        }
    })
    
    if(user) {
        return new Response("User Already Registered", {status: 501})
    }
    
    if(body.password.length<6) { 
        return new Response("password must atleast be 6 digit", {status: 501})
    }
    
    if(body.mobile.length!==10){ 
        return new Response("mobile must be 10 digit", {status: 501})
    }

   await prisma.user.create({
        data:{
            name:body.name,
            email: body.email,
            mobile: body.mobile,
            password: bcrypt.hashSync(body.password, bcrypt.genSaltSync(10))
        }
    })
    

    return new Response("User Registered Successfully", {status: 200})
}