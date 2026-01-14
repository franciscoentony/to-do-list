'use client'
import React, { useState, useEffect } from "react";
import CheckBoxPrincipal from "../components/CheckBoxPrincipal";

export default function Task({ carregarTarefas, todos }: any) {
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [textoEditado, setTextoEditado] = useState("");

  const [feito, setFeito] = useState(false)

  useEffect(() => {
    carregarTarefas();
  }, []);

  async function handleDelete(id: number) {
    const token = localStorage.getItem("stark_token");
    const response = await fetch(`http://127.0.0.1:8000/api/projetos/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      carregarTarefas();
    }
  }

  
  async function handleSalvar(id: number) {
    const token = localStorage.getItem("stark_token");
    const response = await fetch(`http://127.0.0.1:8000/api/projetos/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ anotacao: textoEditado }),
    });
    
    if (response.ok) {
      setEditandoId(null);
      carregarTarefas();
    }
  }

  async function TarefaFeita(id: number, statusAtual: boolean) {
    const token = localStorage.getItem('stark_token');
    
    const response = await fetch(`http://127.0.0.1:8000/api/projetos/${id}/`, {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ completado: !statusAtual }), // Inverte o status
    });

    if (response.ok) {
        carregarTarefas(); // Recarrega a lista para atualizar a tela
    }
}

  return (
    <div className="w-full">
      <ul className="w-full h-auto flex flex-col gap-2">
        {todos.map((todo: any) => (
          <li
            key={todo.id}
            className="w-full h-auto flex-1 flex items-center bg-white rounded-xl p-2 gap-2"
          >
            <div className="flex items-center flex-1 min-w-0">
            <CheckBoxPrincipal 
              checked={todo.completado} 
              onClick={() => TarefaFeita(todo.id, todo.completado)} 
              />
              {editandoId === todo.id ? (
                <input
                  className="bg-stone-200 p-2 w-full rounded-[.4rem] outline-[#0C7075]"
                  value={textoEditado}
                  onChange={(e) => setTextoEditado(e.target.value)}
                  autoFocus
                  type="text"
                />
              ) : (
                <p className={`break-words whitespace-normal p-2 overflow-hidden transition-all ${
                  todo.completado ? "line-through text-gray-400 opacity-50" : "text-black"
                }`}>
                  {todo.anotacao}
                </p>
              )}
            </div>
            <div className="h-full flex gap-2">
              {editandoId === todo.id ? (
                <button
                  onClick={() => handleSalvar(todo.id)}
                  className="bg-[#294D61] rounded-xl text-white h-full p-2 cursor-pointer"
                >
                  Salvar
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditandoId(todo.id);
                    setTextoEditado(todo.anotacao);
                  }}
                  type="button"
                  className="w-10 h-10 bg-[#6DA5C0] text-white p-2 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="w-7 h-7 fill-current"
                  >
                    <path d="M535.6 85.7C513.7 63.8 478.3 63.8 456.4 85.7L432 110.1L529.9 208L554.3 183.6C576.2 161.7 576.2 126.3 554.3 104.4L535.6 85.7zM236.4 305.7C230.3 311.8 225.6 319.3 222.9 327.6L193.3 416.4C190.4 425 192.7 434.5 199.1 441C205.5 447.5 215 449.7 223.7 446.8L312.5 417.2C320.7 414.5 328.2 409.8 334.4 403.7L496 241.9L398.1 144L236.4 305.7zM160 128C107 128 64 171 64 224L64 480C64 533 107 576 160 576L416 576C469 576 512 533 512 480L512 384C512 366.3 497.7 352 480 352C462.3 352 448 366.3 448 384L448 480C448 497.7 433.7 512 416 512L160 512C142.3 512 128 497.7 128 480L128 224C128 206.3 142.3 192 160 192L256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128L160 128z" />
                  </svg>
                </button>
              )}
              <button
                onClick={() => handleDelete(todo.id)}
                type="button"
                className={`w-10 h-10 group hover:bg-red-600 duration-200 ease-in-out text-white p-2 rounded-full ${
                  editandoId === todo.id ? "hidden" : "flex"
                } items-center justify-center cursor-pointer`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 group-hover:fill-current fill-red-600 duration-200 ease-in-out"
                >
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
