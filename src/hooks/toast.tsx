import { useContext } from 'react'
import { ToastContext, ToastProps } from '../contexts/toast'

export const UseToast = () => {
  const { toast, showToast, hideToast } = useContext(ToastContext)

  const handleTypeToast = (type: ToastProps['type']) => {
    return (props: Pick<ToastProps, 'title' | 'description'>) => showToast({ ...props, type })
  }

  return {
    toast,
    hideToast,
    danger: handleTypeToast('danger'),
    info: handleTypeToast('info'),
    success: handleTypeToast('success'),
    warning: handleTypeToast('warning')
  }
}