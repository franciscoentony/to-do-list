"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Input from './Input'

export default function FormLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
    
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: email,
                password: password 
            }),
        });
    
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('stark_token', data.access); 
            router.push('/home');
        } else {
            alert('Email ou senha inválidos.');
        }
    }

    return (
        <div className="w-full p-10 flex items-center justify-center">
            <form onSubmit={handleLogin} className='w-full lg:w-[35%] h-100 p-10 lg:p-15 shadow-2xl/10 rounded-3xl bg-white border-2 border-[#294D61] flex flex-col items-center justify-center gap-5'>
            <h1 className='text-2xl font-semibold'>Entrar</h1>
            <div className="w-full flex flex-col gap-3">
                <Input label='Email' onChange={(e) => setEmail(e.target.value)} type='Email' placeholder='Digite seu email'/>
                <Input label='Senha' onChange={(e) => setPassword(e.target.value)}  type='password' placeholder='Digite sua senha'/>
            </div>
                <button type="submit" className='w-full bg-[#294D61] hover:bg-[#0C7075] duration-150 ease-in-out px-3 py-2 rounded-md text-white cursor-pointer border'>Entrar</button>
            </form>
        </div>
    )
}
