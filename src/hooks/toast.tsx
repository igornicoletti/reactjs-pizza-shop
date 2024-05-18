import { useContext } from 'react'
import { ToastContext, ToastProps } from '../contexts/toast'

export const UseToast = () => {
  const { toast, handleShowToast, handleHideToast } = useContext(ToastContext)

  const handleTypeToast = (type: ToastProps['type']) => {
    return (props: Pick<ToastProps, 'title' | 'description'>) => handleShowToast({ ...props, type })
  }

  return {
    toast,
    handleHideToast,
    default: handleTypeToast('default'),
    error: handleTypeToast('error'),
    info: handleTypeToast('info'),
    success: handleTypeToast('success'),
    warning: handleTypeToast('warning')
  }
}