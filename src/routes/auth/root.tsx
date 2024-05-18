import { Outlet } from 'react-router-dom'

import { RootVariants } from '../../styles/variants'
import { ToastsComponent } from '../../components/toast'

const { rootlayout, rootcontainer } = RootVariants()

export const AuthPage = () => {
  return (
    <div className={rootlayout()}>
      <div className={rootcontainer()}>
        <Outlet />
        <ToastsComponent />
      </div>
    </div>
  )
}