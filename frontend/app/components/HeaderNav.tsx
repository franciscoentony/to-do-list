"use client"
import React from 'react'
import Link from 'next/link'
import MenuBurguer from "./MenuBurguer";
import { useState } from 'react'

export default function HeaderNav() {
  const [mostrarMenu, setMostrarMenu] = useState(false)

  function AbrirMenu() {
    setMostrarMenu(!mostrarMenu)
  }

  return (
    <header className={`w-[80%] lg:w-[40%] lg:min-w-170 ${mostrarMenu === true ? 'h-120' : 'h-22' } absolute mt-5 z-100 lg:static duration-200 ease-in-out`}>
        <div className='py-5 px-6 h-full flex flex-col justify-between bg-[#0C7075] shadow-2xl/20 text-white rounded-2xl'>
        <div className="flex w-full h-13 justify-between items-center">
            <Link href={'/'} className="font-semibold flex flex-col items-center leading-none">
                <p>TO-DO</p>
                <p className='text-2xl'>List</p>
            </Link>
            <nav className="h-full lg:flex gap-5 hidden items-center">
                <Link href={'/cadastro'} className='h-10 flex flex-col jusfity-center group'>
                <p className='flex items-center h-full'>Cadastre-se</p>
                <div className="w-0 h-[.2rem] bg-white absolute rounded-full top-19 group-hover:w-25 duration-300 ease-in-out"></div>
                </Link>
                <Link href={'/entrar'} className=' bg-white hover:bg-stone-300 duration-150 ease-in-out text-stone-800 py-2 px-5 rounded-[.4rem]'>Entrar</Link>
            </nav>
            <div className="lg:hidden">
            <MenuBurguer onClick={AbrirMenu}/>
          </div>
        </div>
        {mostrarMenu === true ? (
            <nav className="h-full w-full py-10 flex flex-col items-center justify-center text-2xl text-center z-1">
            <ul className="w-full flex flex-col items-center gap-5">
                <li className="w-full rounded-2xl hover:bg-[#26494a] duration-150 ease-in-out">
                <Link
                    href={"/cadastro"}
                    className="flex w-full p-4 justify-center items-center"
                >
                    <p>Cadastre-se</p>
                </Link>
                </li>
                <li className="w-full rounded-2xl bg-white text-black duration-150 ease-in-out">
                  <Link
                      href={"/entrar"}
                      className="flex w-full p-4 justify-center items-center"
                  >
                    <p>Entrar</p>
                  </Link>
                </li>
            </ul>
            </nav>

        ): (
            <div></div>
        )}
        </div>
    </header>
  )
}
