import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Checkbox from '../../Checkbox'

export default function Presentation() {
  return (
    <section className='w-full h-auto p-10 flex justify-center items-center overflow-hidden'>
      <div className="w-[85%] h-auto bg-[#294D61] flex justify-between items-center text-white p-10 rounded-2xl overflow-visible shadow-xl/10">
      <div className="h-full flex flex-col gap-6 z-20">
        <h1 className='w-100 text-3xl font-semibold'>Já pensou em acessar suas tarefas de qualquer lugar?</h1>
        <div className="flex flex-col gap-2">
          <Checkbox anotacao='Arrumar a casa' id='anotacao1'/>
          <Checkbox anotacao='Estudar' id='anotacao2'/>
          <Checkbox anotacao='Fazer compras' id='anotacao3'/>
          <Checkbox anotacao='Banho no doguinho' id='anotacao4'/>
          <Checkbox anotacao='Ir a academia' id='anotacao5'/>
        </div>
        <Link href='/cadastro' className='bg-[#6DA5C0] hover:bg-[#072E33] ease-in-out duration-150 w-40 flex items-center justify-center p-2 rounded-[.5rem]'>Quero Conhecer!</Link>
      </div>
        <div className="relative w-150 h-90 left-10 top-16 scale-190">
            <Image src={'/todo-list.svg'} alt='image' width={800} height={800}/>
        </div>
      </div>
    </section>
  )
}
