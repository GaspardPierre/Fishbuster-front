import schema from "./schema";
import checkMalicious from "../services/maliciousService";

function validateDomain(domain)  {
// Verify if domain, is not empty
    if(schema.domain.presence.allowEmpty) {
        return "Le nom de domaine ne doit pas être vide!!"
    }

    // Verify if type of domain is a string
    if(schema.domain.type!==' string') {
        return "Le nom de domaine doit être une chaîne de caracteres!!"
    }
    // Verify if there is not special characters
    if(schema.pattern) {
        return "pas de caractères spéciaux!!"
    }
    return true
    }




