import Link from "next/link"

export default function Blog(){
    return <>
        <h1>Blog Page</h1>

        <Link href="/blog/firstblog" className="bg-slate-600 text-white">
            go to first block
        </Link>
    </>
}