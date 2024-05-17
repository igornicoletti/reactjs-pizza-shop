import { ReactNode, createContext, useContext, useState } from 'react'

type NotifyProps = {
  id: number
  title: string
  description: string
  type: 'success' | 'error' | 'warning' | 'info'
}

type NotifyContextProps = {
  notify: NotifyProps[]
  handleAddNotify: (data: Omit<NotifyProps, 'id'>) => void
  handleRemoveNotify: (data: NotifyProps['id']) => void
}

const NotifyContext = createContext({} as NotifyContextProps)

export const NotifyContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentNotify, setCurrentNotify] = useState<NotifyProps[]>([])

  const handleAddNotify = ({ title, description, type }: Omit<NotifyProps, 'id'>) => {
    setCurrentNotify((state) => [...state, { id: Date.now(), title, description, type }])
  }

  const handleRemoveNotify = (id: NotifyProps['id']) => {
    setCurrentNotify((state) => state.filter((item) => item.id !== id))
  }

  return (
    <NotifyContext.Provider value={{ notify: currentNotify, handleAddNotify, handleRemoveNotify }}>
      {children}
    </NotifyContext.Provider>
  )
}

export const UseNotify = () => useContext(NotifyContext)