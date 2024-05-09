import { create } from 'zustand'
import { INotification } from './notification.props'


export const useNotificationStore = create((set) => ({
    show: false,
    message: '',
    type: 'success',
    setNotification: (data: INotification) => set({ message: data.message, type: data.type, show: true }),
    removeNotification: () => set({
        show: false,
        message: ''
    }),

}))
