"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Task from "../components/Task";
import HeaderPrincipal from "../components/HeaderPrincipal";
import Footer from "../components/Footer";

export default function Home() {
  const [todos, setTodos] = useState<any[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const router = useRouter();

  async function carregarTarefas() {
    const token = localStorage.getItem("stark_token");
    const response = await fetch("https://to-do-list-api-wxwe.onrender.com/api/projetos/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
        router.push("/entrar");
      }
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const token = localStorage.getItem("stark_token");

    const response = await fetch("https://to-do-list-api-wxwe.onrender.com/api/projetos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ anotacao: novaTarefa }),
    });

    if (response.ok) {
      setNovaTarefa("");
      carregarTarefas();
    }
  }



  return (
    <div className="w-full min-h-screen flex flex-col items-center  justify-between">
      <HeaderPrincipal/>
      <div className="w-full flex flex-col mt-30 p-10 items-center justify-center gap-6">
        <form onSubmit={handleSubmit} className="w-full lg:w-[20%] lg:min-w-120 flex justify-center gap-2">
          <input
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            type="text"
            placeholder="Digite a tarefa"
            className="bg-stone-300 w-[75%] p-3 rounded-[.6rem] outline-[#0C7075] focus:outline-2"
          />
          <button
            type="submit"
            className="bg-[#0C7075] duration-150 hover:bg-[#26494a] text-white px-4 py-2 rounded-[.8rem] cursor-pointer"
          >
            Adicionar
          </button>
        </form>
        <div className="w-full lg:w-[30%] lg:min-w-140 h-auto bg-[#0C7075] p-5 rounded-3xl ">
          <Task carregarTarefas={carregarTarefas} todos={todos}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
