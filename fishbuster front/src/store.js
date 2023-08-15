import {create} from 'zustand';

export const useStore = create((set )=> ({
    domain: '',
    isMalicious: false,
    isLoading: false,
    error: null,
    token: null,
    setDomain: (domain) => set({ domain }),
    setIsLoading: (isLoading) => set({ isLoading }),
    setToken: (token) => set({ token }),
    setIsMalicious: (isMalicious) => set({ isMalicious }),
    setError: (error) => set({ error }),   
}));

