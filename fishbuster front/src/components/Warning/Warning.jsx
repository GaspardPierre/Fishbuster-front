import React from 'react'
import { AlertTriangle } from   'react-feather';

export default function Warning() {
  return (
    <div className=' bg-red-800 '>
        <h1 className='font-bold text-2xl'>Attention !!!</h1>
        <AlertTriangle 
        color='black'
        size={200}
        />
        <p>Ce site est certainement une tentative de phishing !!!</p>
        </div>
  )
}
