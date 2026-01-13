"use client"
import React from 'react';
import { useState } from 'react';

const Input = ({label, type, placeholder, onChange}:any) => {
  return (
    <div className="w-full flex flex-col">
      <span className="font-sans my-1">{label}</span>
      <input
      onChange={onChange}
      placeholder={placeholder} className="px-3 w-full bg-[#dfd1d1] p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500" name="text" type={type} />
    </div>
  );
}

export default Input;
