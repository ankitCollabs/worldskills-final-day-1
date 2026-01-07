import Link from "next/link"

export default function Index(){
    const links = [
        {name: "A1", url:"/09_module_a/1"},
        {name: "A2", url:"/09_module_a/2"},
        {name: "A3", url:"/09_module_a/3"},
        {name: "A4", url:"/09_module_a/4"},
        {name: "A5", url:"/09_module_a/5"},
        {name: "A6", url:"/09_module_a/6"},
        {name: "A7", url:"/09_module_a/7"},
    ]
    return (
        <div className="min-h-screen container mx-auto bg-[whitesmoke] p-20">
            <div className="flex gap-10 flex-wrap justify-center">

                {links.map((l)=>(
                    <div key={l.url} className="w-40 h-40 shadow-lg transition-all white-white flex justify-center items-center border rounded-l cursor-pointer hover:shadow-2xl">
                        <Link href={l.url} >Task {l.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}