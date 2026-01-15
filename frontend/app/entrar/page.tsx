"use client"
import React from 'react'

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import HeaderNav from '../components/HeaderNav'
import FormLogin from '../components/FormLogin'
import Footer from '../components/Footer'

export default function Page() {

  const router = useRouter()

  useEffect(() => {
    const verificarSessao = async () => {
      const token = localStorage.getItem('stark_token')
      if (!token) return
  
      try {
        const response = await fetch('https://to-do-list-api-wxwe.onrender.com/api/token/verify/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token })
        })
  
        if (response.ok) {
          router.push('/home')
        } else {
          // Se o token for inválido, removemos para evitar loops
          localStorage.removeItem('stark_token')
        }
      } catch (error) {
        console.error("Erro ao verificar token", error)
      }
    }
  
    verificarSessao()
  }, [router])

  return (
    <div className='w-full h-screen flex flex-col items-center justify-between'>
        <HeaderNav />
        <FormLogin />
        <Footer />
    </div>
  )
}
