import React, { useEffect } from "react";
import { useStore } from "../../store.js";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
// import Warning from "../Warning/Warning";
// import Loading from "../Loading/Loading";
import Home from "../../Pages/Home.jsx";
import { useCheckDomain } from "../../services/checkDomain.js";
import ErrorPage from "../../Pages/ErrorPage.jsx";
import Fishbuster from "../../Pages/Fishbuster.jsx";
import About from "../../Pages/About.jsx";
import "./App.css";
import DomainInput from "../DomainInput/DomainInput.jsx";

function App() {
  // get the state from the store
  const 
    {
      domain,
      isLoading,
      error,
      isMalicious,
      setIsMalicious,
      setIsLoading,
      setError,
      token,
    }
    = useStore();
  const checkDomain = useCheckDomain();
  useEffect(() => {
    // function to check if the domain is malicious when the domain change

    // checkDomain();
  }, [domain, setIsMalicious, setIsLoading, setError, token]);

  return (
    <>
      {/* {isLoading ? (
        //if the request is loading, display a loading component
        <Loading />
      ) : error ? (
        // if there is an error, display the error
        <p>{error}</p>
      ) : isMalicious ? (
        // if the domain is malicious, display the warning component
        <Warning />
      ) : ( */}
  
        {/* <Home /> */}
      {/* )} */}

      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/domaininput" element={<DomainInput />} />
        <Route path="/fishbuster" element={<Fishbuster />} />
        <Route path="/apropos" element={<About />} />
        <Route path="*" element={<ErrorPage />} /> {/* Route d'erreur pour toutes les routes non définies */}
      </Routes>
    </BrowserRouter>
 
    </>
  );
}

export default App;
