'use client'

import {inter,lusitana} from "@/ui/fonts"
import InvoiceStatus from "./components/InvoiceStatus"
import HomeImage from "@/app/components/HomeImg"
import Image from "next/image";
import clsx from 'clsx'; // to apply styles conditionally 

import { usePathname } from 'next/navigation' // to get the current path of the user


const names = ['mk',"manoj","mkmk",'manoj']

export default function Home() {

  const pathName = usePathname()
  
  return (
  <div className={`${inter.className} antialiased
`}>
    <div className= {`
      relative w-0 h-0 m-5 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black`}/>
    <InvoiceStatus status="paid"/>
    <p
      className={`${lusitana.className} font-bold text-xl text-gray-800 md:text-3xl md:leading-normal`}
    >
      Hi this is tech solutions{' '}
      <a href="https://nextjs.org/learn/" className="text-blue-500">
        now we solve ur problems
      </a>
      , brought to you new ideas.
    </p>
    <HomeImage />
    <Image
    //   loader={imageLoader}
      src="/photo-1.avif"
      alt="Picture of the author"
      className='hidden md:block'
      width={500}
      height={500}
    />

    {/* current path */}
    <p>Current pathname : {pathName}</p>

    {/* conditional styling */}
    {
      names.map((name) => (
        <p key={name} className={clsx(
          'bg-green-300 text-center py-4 hover:bg-yellow-200 cursor-pointer',
          {
            'bg-sky-200 text-black': name === 'manoj'
          }
        )}>
          {name}
        </p>
      ))
    }
  </div>
  );
}
