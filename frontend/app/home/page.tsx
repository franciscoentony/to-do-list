'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ButtonLogOut from "../components/ButtonLogOut"

export default function Home() {
  const [todos, setTodos] = useState<any[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("")

  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [textoEditado, setTextoEditado] = useState("")

  const router = useRouter()
  
  async function carregarTarefas() {
    const token = localStorage.getItem('stark_token');
    const response = await fetch('http://127.0.0.1:8000/api/projetos/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
            setTodos(data);
        } else {
            console.error("Dados recebidos não são uma lista:", data);
            setTodos([]);
        }
    } else {
        if (response.status === 401) {
            router.push('/entrar');
        }
    }
}

  useEffect(() => {
    carregarTarefas();
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const token = localStorage.getItem('stark_token');

    const response = await fetch('http://127.0.0.1:8000/api/projetos/', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ anotacao: novaTarefa }),
    })

    if(response.ok) {
      setNovaTarefa("")
      carregarTarefas()
    }
  }

  async function handleDelete(id: number) {
    const token = localStorage.getItem('stark_token');
    const response = await fetch(`http://127.0.0.1:8000/api/projetos/${id}/`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    if (response.ok) {
      carregarTarefas();
    }
  }

  async function handleSalvar(id: number) {
    const token = localStorage.getItem('stark_token');
    const response = await fetch(`http://127.0.0.1:8000/api/projetos/${id}/`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ anotacao: textoEditado }),
    });
  
    if (response.ok) {
      setEditandoId(null);
      carregarTarefas();
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input 
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          type="text"
          placeholder="Digite a tarefa"
          className="bg-stone-200 p-2 rounded-sm"/>
          <button type="submit" className="bg-violet-500 duration-150 hover:bg-violet-700 text-white p-2 rounded-sm cursor-pointer">Adicionar</button>
        </form>
        <div className="bg-purple-600 p-5 rounded-2xl ">
          <ul className="flex flex-col gap-2">
            {todos.map((todo: any) => (
              <li key={todo.id} className="bg-white rounded-sm p-1 flex items-center gap-5">
                <div className="flex p-2 gap-2">
                  {editandoId === todo.id ? (
                    <input
                    className="bg-stone-200 p-2 rounded-sm"
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                    autoFocus
                    type="text" />
                  ) : (
                  <p>{todo.anotacao}</p>
                  )}
                </div>
                <div className="flex gap-1">
                {editandoId === todo.id ? (
                 <button 
                 onClick={() => handleSalvar(todo.id)}
                 className="bg-green-600 text-white p-2 rounded-sm cursor-pointer"
               >
                 Salvar
               </button>
                ) : (
                <button onClick={() => {
                      setEditandoId(todo.id);
                      setTextoEditado(todo.anotacao);
                    }} type="button" className="bg-indigo-600 text-white p-2 rounded-sm cursor-pointer">Editar</button>
                )}
                  <button onClick={() => handleDelete(todo.id)} type="button" className="bg-red-600 text-white p-2 rounded-sm cursor-pointer">Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      <ButtonLogOut/>
      </div>
    </div>
  );
}