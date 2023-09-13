chrome.webNavigation.onCompleted.addListener(function(details) {
    // Vérifiez si c'est le frame principal pour éviter d'envoyer des requêtes pour chaque iframe ou sous-ressource
    if (details.frameId === 0) {
        checkDomain(details.url);
    }
});

function checkDomain(url) {
    // Extract domain of url
   /*let domain = new URL(url).hostname;

    // Send request to the backend
    fetch('https://fisbuster.org/api/v1/malicious', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: 'my_test_token', 
            domain: domain
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.level > 50) { 
        
            chrome.runtime.sendMessage({ type: "DOMAIN_CHECK_RESULT", isMalicious: true });
        } else {
            chrome.runtime.sendMessage({ type: "DOMAIN_CHECK_RESULT", isMalicious: false });
        }
    })
    .catch(error => {
        console.error('Erreur lors de la vérification du domaine:', error);
    });*/
    setTimeout(() => {
        console.log('Hey check Domain is called');
        chrome.runtime.sendMessage({ type: "DOMAIN_CHECK_RESULT", isMalicious: false });
      }, 1000); // Attendre 1 seconde
      
}
