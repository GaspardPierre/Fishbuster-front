import React, { useState, useEffect } from "react";
import Warning from "./Warning";
import Home  from "./Home";


function App() {
  const [isMalicious, setIsMalicious] = useState(false);

  useEffect(() => {
    const handleMessage = (message, sender, sendResponse) => {
        if (message.type === "DOMAIN_CHECK_RESULT") {
            setIsMalicious(message.isMalicious);
        }
    };

    // Add an event listener
    chrome.runtime.onMessage.addListener(handleMessage);

    // remove element when it finish
    return () => {
        chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);

  return (
    isMalicious ? 
      <Warning /> 
    : 
      <Home />
  );
}

export default App;
