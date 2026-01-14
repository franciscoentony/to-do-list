import React from "react";
import { useState } from "react";
import Link from "next/link";
import MenuBurguer from "./MenuBurguer";
import ButtonLogOut from "./ButtonLogOut";

export default function HeaderPrincipal() {
    const [mostrarMenu, setMostrarMenu] = useState(false)

    function AbrirMenu() {
        setMostrarMenu(!mostrarMenu)
    }

  return (
    <header className={`w-[80%] lg:w-[30%] lg:min-w-150 lg:h-auto ${mostrarMenu === true ? 'h-120' : 'h-22' } duration-200 mt-5 fixed z-10 `}>
      <div className="w-full h-full py-5 px-6 lg:py-3 flex flex-col justify-between items-start bg-[#0C7075] shadow-2xl/20 text-white rounded-2xl">
        <div className="w-full flex justify-between items-center">
          <Link
            href={"/"}
            className="font-semibold flex flex-col items-center leading-none"
          >
            <p>TO-DO</p>
            <p className="text-2xl">List</p>
          </Link>
          <div className="lg:hidden">
            <MenuBurguer onClick={AbrirMenu}/>
          </div>
          <nav className="hidden lg:flex items-center">
          <ul className="w-full flex items-center gap-2">
                <li className="w-full rounded-2xl hover:bg-[#26494a] duration-150 ease-in-out">
                <Link
                    href={"/perfil"}
                    className="flex w-full p-4 justify-center items-center"
                >
                    <p>Perfil</p>
                </Link>
                </li>
                <li className="w-full rounded-2xl hover:bg-[#26494a] duration-150 ease-in-out">
                <Link
                    href={"/perfil"}
                    className="flex w-full p-4 justify-center items-center"
                >
                    <p>Tarefas</p>
                </Link>
                </li>
                <li className="w-full rounded-2xl hover:bg-[#26494a] duration-150 ease-in-out">
                <Link
                    href={"/perfil"}
                    className="flex w-full p-4 justify-center items-center"
                >
                    <p>Configurações</p>
                </Link>
                </li>
                <li>
                <ButtonLogOut />
                </li>
            </ul>
          </nav>
        </div>
        {mostrarMenu === true ? (
            <nav className="h-full w-full py-10 flex lg:hidden flex-col items-center justify-center text-2xl text-center">
            <ul className="w-full flex flex-col items-center gap-5">
                <li className="w-full rounded-2xl hover:bg-[#26494a] duration-150 ease-in-out">
                <Link
                    href={"/perfil"}
                    className="flex w-full p-4 justify-center items-center"
                >
                    <div className="w-13 h-13 absolute left-10 bg-[#26494a] flex items-center justify-center rounded-full">
                    <svg
                        className="w-7 h-7 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                    >
                        <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                    </svg>
                    </div>
                    <p>Perfil</p>
                </Link>
                </li>
                <li className="w-full rounded-2xl hover:bg-[#26494a] duration-150 ease-in-out">
                <Link
                    href={"/perfil"}
                    className="flex w-full p-4 justify-center items-center"
                >
                    <div className="w-13 h-13 absolute left-10 bg-[#26494a] flex items-center justify-center rounded-full">
                    <svg className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M197.8 100.3C208.7 107.9 211.3 122.9 203.7 133.7L147.7 213.7C143.6 219.5 137.2 223.2 130.1 223.8C123 224.4 116 222 111 217L71 177C61.7 167.6 61.7 152.4 71 143C80.3 133.6 95.6 133.7 105 143L124.8 162.8L164.4 106.2C172 95.3 187 92.7 197.8 100.3zM197.8 260.3C208.7 267.9 211.3 282.9 203.7 293.7L147.7 373.7C143.6 379.5 137.2 383.2 130.1 383.8C123 384.4 116 382 111 377L71 337C61.6 327.6 61.6 312.4 71 303.1C80.4 293.8 95.6 293.7 104.9 303.1L124.7 322.9L164.3 266.3C171.9 255.4 186.9 252.8 197.7 260.4zM288 160C288 142.3 302.3 128 320 128L544 128C561.7 128 576 142.3 576 160C576 177.7 561.7 192 544 192L320 192C302.3 192 288 177.7 288 160zM288 320C288 302.3 302.3 288 320 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L320 352C302.3 352 288 337.7 288 320zM224 480C224 462.3 238.3 448 256 448L544 448C561.7 448 576 462.3 576 480C576 497.7 561.7 512 544 512L256 512C238.3 512 224 497.7 224 480zM128 440C150.1 440 168 457.9 168 480C168 502.1 150.1 520 128 520C105.9 520 88 502.1 88 480C88 457.9 105.9 440 128 440z"/></svg>
                    </div>
                    <p>Tarefas</p>
                </Link>
                </li>
                <li className="w-full rounded-2xl hover:bg-[#26494a] duration-150 ease-in-out">
                <Link
                    href={"/perfil"}
                    className="flex w-full p-4 justify-center items-center"
                >
                    <div className="w-13 h-13 absolute left-10 bg-[#26494a] flex items-center justify-center rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7 fill-white"
                        viewBox="0 0 640 640"
                    >
                        <path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z" />
                    </svg>
                    </div>
                    <p>Configurações</p>
                </Link>
                </li>
                <li>
                <ButtonLogOut />
                </li>
            </ul>
            </nav>

        ): (
            <div></div>
        )}
      </div>
    </header>
  );
}
