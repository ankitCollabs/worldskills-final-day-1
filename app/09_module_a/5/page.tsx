'use client';

import { useState } from "react";


export default function Task5(){
    const [query, setQuery] = useState("")
    const [queries, setQueries] = useState<string[]>([])

    const onSearch = () =>{
        setQueries(p=>[...p, query])
        highlight(query)
        setQuery("")
    }

    const highlight = async (query:string) =>{
        const updatedQueries = [...queries, query]
        await updatedQueries.map(q=>{
            const text = document.getElementById("para")?.innerText;
            const ind = text?.split("")
            console.log(ind)

        })
    }
    return(
        <div className="container mx-auto">
            <h1 className="text-5xl font-bold">Contents</h1>
            <p id="para">This is Odisha Skills Competition. In this paper, you are expected to design a poster to welcome visitors to your country.</p>

            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} className="bg-white border text-black mt-10"/>
            <button onClick={onSearch}>Search</button>
        </div>
    )
}