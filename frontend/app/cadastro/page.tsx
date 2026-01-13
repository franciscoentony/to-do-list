import React from 'react'

import HeaderNav from '../components/HeaderNav'
import FormCadastro from '../components/FormCadastro'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-between '>
        <HeaderNav/>
        <FormCadastro/>
        <Footer/>
    </div>
  )
}
