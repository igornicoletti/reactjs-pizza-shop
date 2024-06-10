import { useEffect } from 'react'
import { isAxiosError } from 'axios'
import { Outlet, useNavigate } from 'react-router-dom'

import { api } from '../../lib/axios'
import { RootVariants } from '../../styles'
import { HeaderComponent } from '../../components'

const { rootlayout, rootcontainer } = RootVariants()

export const AppPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      response => response,
      error => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/signin', { replace: true })
          }
        }
      }
    )
    return () => api.interceptors.response.eject(interceptorId)
  }, [navigate])

  return (
    <div className={rootlayout()}>
      <div className={rootcontainer()}>
        <HeaderComponent />
        <Outlet />
      </div>
    </div>
  )
}