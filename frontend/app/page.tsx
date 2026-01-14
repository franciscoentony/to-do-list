import React from 'react'

import HeaderNav from './components/HeaderNav'
import Presentation from './components/Sections/Homepage/Presentation'
import AboutProject from './components/Sections/Homepage/AboutProject'
import Footer from './components/Footer'

export default function page() {
  return (
    <div className='w-full h-auto lg:h-auto overflow-hidden flex flex-col items-center justify-between'>
        <HeaderNav/>
        <Presentation/>
        <AboutProject/>
        <Footer/>
    </div>
  )
}