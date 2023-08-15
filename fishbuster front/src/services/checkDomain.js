
import { useStore } from "../store";
import  checkMalicious  from "./maliciousService.js";

export const useCheckDomain = () => {
  const { setIsLoading, setIsMalicious, setError } = useStore();

  const CheckDomain = async (token, domain) => {
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
  };
  return CheckDomain;
};
