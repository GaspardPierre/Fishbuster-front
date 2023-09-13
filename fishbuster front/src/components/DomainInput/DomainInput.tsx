import React from 'react'


export default function DomainInput() {
   
  return (
    <>
  
    <div className="flex justify-center mt-10">
        <input 
          type="text" 
          placeholder="Tapez le nom de domaine ici..." 
          className="p-2 border rounded w-1/2"
        />
        <button className="ml-4 p-6 bg-blue-500 text-white rounded">Vérifier</button>
      </div>
    
      </>
  )
}
