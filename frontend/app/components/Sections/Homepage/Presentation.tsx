import React from "react";
import Image from "next/image";
import Link from "next/link";

import Checkbox from "../../Checkbox";

export default function Presentation() {
  return (
    <section className="w-full h-auto lg:h-130 lg:p-10 flex justify-center items-center ">
      <div className="w-[90%] lg:min-w-200 p-10 lg:p-0 lg:w-[40%] h-full lg:h-full relative overflow-hidden lg:overflow-visible justify-center lg:justify-between items-center">
        <div className="w-full lg:w-[50%] h-full bg-[#294D61] flex lg:absolute justify-between items-center text-white p-10 rounded-3xl lg:overflow-visible shadow-xl/10">
          <div className="w-auto h-full flex flex-col gap-6 z-20">
            <h1 className="w-full lg:w-full text-3xl font-semibold">
              Já pensou em acessar suas tarefas de qualquer lugar?
            </h1>
            <div className="flex flex-col gap-2">
              <Checkbox anotacao="Arrumar a casa" id="anotacao1" />
              <Checkbox anotacao="Estudar" id="anotacao2" />
              <Checkbox anotacao="Fazer compras" id="anotacao3" />
              <Checkbox anotacao="Banho no doguinho" id="anotacao4" />
              <Checkbox anotacao="Ir a academia" id="anotacao5" />
            </div>
            <Link
              href="/cadastro"
              className="bg-[#6DA5C0] hover:bg-[#072E33] ease-in-out duration-150 w-40 flex items-center justify-center p-2 rounded-[.5rem]"
            >
              Quero Conhecer!
            </Link>
          </div>
        </div>
        <div className="w-full h-full bg-[#0C7075] flex justify-end rounded-3xl">
          <Image
            src={"/todo-list.svg"}
            alt="image"
            width={500}
            height={800}
            className="hidden lg:block  w-[50%]"
          />
        </div>
      </div>
    </section>
  );
}
