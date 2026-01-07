'use client';
import { useState } from "react";
import Image from "next/image";

export default function Page() {
    const [time, setTime] = useState<"Day"|"Night">("Day")

    return(
        <div className="h-screen w-screen relative bg-yellow-100 transition-all duration-1000" style={{backgroundColor:time==="Night"?"#162456":""}}>
            <Image src={"/A3/images/1.png"} alt="mountains" width={100} height={100} className="w-full h-full absolute bottom-0"/>
            <Image src={"/A3/images/2.png"} alt="mountains" width={200} height={200} className={`absolute tansition-all transition-transform duration-2000`} style={{transform:time==="Day"?"translateY(40px) translateX(500px)":"translateY(1000px) translateX(0px)"}}/>
            <Image src={"/A3/images/3.png"} alt="mountains" width={200} height={200} className={`absolute tansition-all transition-transform duration-2000 delay-200`} style={{transform:time==="Night"?"translateY(40px) translateX(500px)":"translateY(1000px) translateX(1500px)"}}/>
            <Image src={"/A3/images/4.png"} alt="mountains" width={100} height={100} className="absolute top-10 right-10 tansition-all"/>
            <Image src={"/A3/images/4.png"} alt="mountains" width={150} height={150} className="absolute top-36 right-0 -translate-x-[100px] cloud-travel ansition-all opacity-90"/>

            <div className="absolute w-screen bottom-0 flex justify-between items-center z-100 p-12">
                <button className="bg-yellow-100 px-3 rounded-lg cursor-pointer" onClick={()=>setTime("Day")}>Day</button>
                <button className="bg-blue-950 text-white px-3 rounded-lg cursor-pointer" onClick={()=> setTime("Night")}>Night</button>
            </div>
        </div>
    )
}