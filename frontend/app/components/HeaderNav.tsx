import React from 'react'
import Link from 'next/link'

export default function HeaderNav() {
  return (
    <header className='w-[80%] lg:w-[40%] lg:min-w-170 mt-5'>
        <div className='py-5 px-6 flex justify-between items-center bg-[#0C7075] shadow-2xl/20 text-white rounded-[1rem]'>
            <Link href={'/'} className="font-semibold flex flex-col items-center leading-none">
                <p>TO-DO</p>
                <p className='text-2xl'>List</p>
            </Link>
            <div className="h-full flex gap-5 items-center">
                <Link href={'/cadastro'} className='h-10 flex flex-col jusfity-center group'>
                <p className='flex items-center h-full'>Cadastre-se</p>
                <div className="w-0 h-1 bg-white absolute rounded-full top-19 group-hover:w-25 duration-300 ease-in-out"></div>
                </Link>
                <Link href={'/entrar'} className='h-full bg-white hover:bg-stone-300 duration-150 ease-in-out text-stone-800 py-2 px-5 rounded-[.4rem]'>Entrar</Link>
            </div>
        </div>
    </header>
  )
}
