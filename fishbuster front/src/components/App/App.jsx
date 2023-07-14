
import React from 'react';
import { useStore } from 'zustand/react';
import store from '../../store';
import './App.css';
import Warning from '../Warning/Warning';

function App() {
 const {domain, isMalicious, isLoading, error, setDomain,
   setIsMalicious, setIsLoading, setError} = useStore(store)
 


  return (
    <>
    
     <Warning />
      
    </>
  )
}

export default App
