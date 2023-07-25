
import React, { useEffect } from 'react';
import { useStore } from 'zustand/react';
import store from '../../store';
import './App.css';
import Warning from '../Warning/Warning';
import checkMalicious from '../../services/maliciousService';

function App() {
  const { domain, isMalicious, isLoading, error, setDomain,
    setIsMalicious, setIsLoading, setError } = useStore(store);

  useEffect(() => {
    // function to check if the domain is malicious when the domain changes

    async function checkDomain() {
      setIsLoading(true);
      const result = await checkMalicious(token, domain);
      if (result.error) {
        setError(result.error);

        return;
      } else {
        // if the result > 50, then the domain is malicious
        setIsMalicious(result.data.level > 50);

      }
      setIsLoading(false);
    }
    checkDomain();
  }, [domain]);


  return (
    <>

      <Warning />

    </>
  )
}

export default App
