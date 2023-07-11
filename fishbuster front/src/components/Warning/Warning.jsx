import React from 'react'
import { AlertTriangle } from   'react-feather';

export default function Warning() {
  return (
    <div className='w-full h-screen bg-red-800  '>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='font-bold text-4xl md:text-5xl mdtext-center my-px font-lobster'>Attention !!!</h1>
      
        <AlertTriangle 
        className='text-center'
        color='black'
        size={200}
        />
      
        <p className='text-center text-2xl md:text-3xl my-px font-lobster '>Ce site est certainement une tentative de phishing !!!</p>
        </div>
        </div>
  )
}
