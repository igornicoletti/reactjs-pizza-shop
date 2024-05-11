import { ReactNode, createContext, useContext, useState } from 'react'
import { NotifyComponent } from '../components/notify'

type NotifyProps = {
  message: string
  description?: string
  status: '' | 'success' | 'error'
}

type NotifyContextType = {
  notify: (data: NotifyProps) => void
}

export const NotifyContext = createContext({} as NotifyContextType)

export const NotifyProvider = ({ children }: { children: ReactNode }) => {
  const [currentNotify, setCurrentNotify] = useState<NotifyProps>({ message: '', description: '', status: '' })

  const notify = ({ message, description, status }: NotifyProps) => {
    setCurrentNotify({ message, description, status })
  }

  return (
    <NotifyContext.Provider value={{ notify }}>
      {children}
      <NotifyComponent {...currentNotify} />
    </NotifyContext.Provider>
  )
}

export const NotifyContextProvider = () => useContext(NotifyContext)