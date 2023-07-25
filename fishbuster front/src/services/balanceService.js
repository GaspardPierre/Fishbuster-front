import api from "./api";

const checkBalance = async (token) => {
    try {
        const response = await api.get("balance", { 
            token: token
        });
        return response.data;
    } catch (error) {
        console.error("error in balanceService.js", error);
        return { error: error };    

    }
}

export default checkBalance;