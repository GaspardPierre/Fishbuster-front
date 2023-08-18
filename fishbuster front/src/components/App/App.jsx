import React, { useState, useEffect } from "react";
import Warning from "./Warning/Warning";

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
      <div>
        <p>Le site est sûr !</p>
      </div>
  );
}

export default App;
