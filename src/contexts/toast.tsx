import { ReactNode, createContext, useState } from 'react'

export type ToastProps = {
  id: number
  showing: boolean
  title: string
  description: string
  type: 'default' | 'error' | 'info' | 'success' | 'warning'
}

export type ToastContextProps = {
  toast: ToastProps[]
  handleHideToast: (data: ToastProps['id']) => void
  handleShowToast: (data: Omit<ToastProps, 'id' | 'showing'>) => void
}

export const ToastContext = createContext({} as ToastContextProps)

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastProps[]>([])

  const handleShowToast = ({ title, description, type }: Omit<ToastProps, 'id' | 'showing'>) => {
    const toastId = Date.now()
    setToast((state) => [...state, { id: toastId, showing: true, title, description, type }])
    setTimeout(() => handleHideToast(toastId), 4000)
  }

  const handleHideToast = (id: ToastProps['id']) => {
    setToast((state) =>
      state.map((item) => item.id === id
        ? { ...item, showing: item.showing = false }
        : item))
  }

  return (
    <ToastContext.Provider value={{ toast, handleShowToast, handleHideToast }}>
      {children}
    </ToastContext.Provider>
  )
}