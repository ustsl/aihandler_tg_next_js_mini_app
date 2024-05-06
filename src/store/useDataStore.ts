import { create } from 'zustand'


export const useDataStore = create((set) => ({
    userToken: '',
    userBalance: 0,
    userCurrentPrompt: '',
    setUserToken: (data: string) => set({ userToken: data }),
    setUserBalance: (data: string) => set({ userBalance: data }),
    setUserCurrentPrompt: (data: string) => set({ userCurrentPrompt: data }),
}))
