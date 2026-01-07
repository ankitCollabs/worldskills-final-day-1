'use client'
import { useState } from "react"
export default function Page(){
    const [start, setStart] = useState(400)
    const [end, setEnd] = useState(600)

    return(
        <div className="">
            <input type="range" name="some" id="slider" min={start} max={end} step={50}/>
        </div>
    )
}