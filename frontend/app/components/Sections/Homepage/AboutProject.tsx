import React from 'react'

export default function AboutProject() {
  return (
    <section className='h-auto flex justify-center items-start '>
        <div className='w-[80%] mb-40 flex flex-col items-center justify-center'>
          <div className="w-full">
              <h1 className='text-3xl font-bold my-10  w-full'>O que é o projeto?</h1>
              <div className="">
                <p>Trata-se de um <strong>projeto open-source</strong> criado por <strong>Francisco Entony</strong>, aluno de Sistemas para Internet no IFRN. É um sistema de gerenciamento de tarefas online e em tempo real, que oferece a liberdade de acesso em qualquer lugar do mundo com conexão à internet.</p>
              </div>
          </div>
          <div className="w-full">
            <h1 className='text-3xl font-bold my-10 w-full'>Qual o valor?</h1>
            <p><strong>É grátis!</strong> ste projeto é o resultado de meses de estudo e aprimoramento constante de conhecimentos.</p>
          </div>
        </div>
    </section>
  )
}
