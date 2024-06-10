import { ToastProps } from '../types'
import { ReactNode, createContext, useState } from 'react'

type ToastContextProps = {
  toast: ToastProps[]
  hideToast: (data: ToastProps['id']) => void
  showToast: (data: Omit<ToastProps, 'id' | 'showing'>) => void
}

export const ToastContext = createContext({} as ToastContextProps)

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastProps[]>([])

  const handleShowToast = ({ title, description, type }: Omit<ToastProps, 'id' | 'showing'>) => {
    const toastId = Date.now()
    setToast((state) => [...state, { id: toastId, showing: true, title, description, type }])
    setTimeout(() => handleHideToast(toastId), 2500)
  }

  const handleHideToast = (id: ToastProps['id']) => {
    setToast((state) =>
      state.map((item) => item.id === id
        ? { ...item, showing: item.showing = false }
        : item))
  }

  return (
    <ToastContext.Provider value={{ toast, showToast: handleShowToast, hideToast: handleHideToast }}>
      {children}
    </ToastContext.Provider>
  )
}