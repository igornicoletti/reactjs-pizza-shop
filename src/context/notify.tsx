import { ReactNode, createContext, useContext, useState } from 'react'

export type NotifyProps = {
  expand: boolean
  status: string
  message: string
}

type NotifyContextType = {
  notify: NotifyProps
  handleNotify: (data: NotifyProps) => void
}

export const NotifyContext = createContext({} as NotifyContextType)

export const NotifyProvider = ({ children }: { children: ReactNode }) => {
  const [currentNotify, setCurrentNotify] = useState<NotifyProps>({ expand: false, status: '', message: '' })

  const handleNotify = ({ expand, status, message }: NotifyProps) => {
    setCurrentNotify({ expand, status, message })
  }

  return (
    <NotifyContext.Provider value={{ notify: currentNotify, handleNotify }}>
      {children}
    </NotifyContext.Provider>
  )
}

export const NotifyContextProvider = () => useContext(NotifyContext)