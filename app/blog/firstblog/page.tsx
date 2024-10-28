import Link from "next/link"

export default function firstblog(){
    return <div>
         <h1>first Blog Post</h1>
        <Link href="/blog" className="bg-slate-600 text-white">
            go to block Page
        </Link>
    </div>
}