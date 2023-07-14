import {create} from 'zustand';

export const useStore = create((set )=> ({
    domain: '',
    isMalicious: false,
    isLoading: false,
    error: null,
    setDomain: (domain) => set({ domain }),
    setIsMalicious: (isMalicious) => set({ isMalicious }),
    setIsLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),   
}));

