import { baseLanguages } from '@/types/baseTypes'
import { create } from 'zustand'


export const useDataStore = create((set) => ({
    userUUID: '',
    userToken: '',
    userBalance: 0,
    userCurrentPrompt: '',
    userLanguage: 'en',
    setUserUUID: (data: string) => set({ userUUID: data }),
    setUserToken: (data: string) => set({ userToken: data }),
    setUserBalance: (data: string) => set({ userBalance: data }),
    setUserCurrentPrompt: (data: string) => set({ userCurrentPrompt: data }),
    setUserLanguage: (data: baseLanguages) => set({ userLanguage: data }),
}))
