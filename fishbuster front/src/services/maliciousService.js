import api from "./api";

const checkMalicious = async (token,domain) => {
    try {
        const response = await api.post("/malicious", { 
            token: token,
            domain: domain
        });
        return response.data;
    } catch (error) {
        console.error("error in maliciousService.js", error);
        return { error: error };
    }
    }

export default checkMalicious;