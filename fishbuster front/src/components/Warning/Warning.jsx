import React from 'react'
import { AlertTriangle } from   'react-feather';

export default function Warning({domain}) {
  return (
<<<<<<< HEAD
    <div className=' bg-red-800 '>
        <h1 className='font-bold text-2xl'>Attention !!!</h1>
        <AlertTriangle 
        color='black'
        size={200}
        />
        <p>Ce site est certainement une tentative de phishing !!!</p>
=======
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
>>>>>>> 0c0cfcf06cec77cf7dbdb40f7924c12b8ec656d6
        </div>
  )
}
