import React from 'react';

const Checkbox = ({anotacao, id}: any) => {
  return (
    <label htmlFor={id} className=" flex flex-row items-center gap-2.5 text-white cursor-pointer">
      <input id={id} type="checkbox" className="peer hidden" />
      <div className="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#e8e8e8] peer-checked:bg-[#0c9096] transition">
        <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-[#e8e8e8]" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12.6111L8.92308 17.5L20 6.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {anotacao}
    </label>
  );
}

export default Checkbox;
