import { Outlet } from 'react-router-dom'

import { NotifyProvider } from './context/notify'
import { RootVariants } from '../../styles/variants'

const { rootlayout, rootcontainer } = RootVariants()

export const AuthPage = () => {
  return (
    <div className={rootlayout()}>
      <div className={rootcontainer()}>
<NotifyProvider>
        <Outlet />
</NotifyProvider>
      </div>
    </div>
  )
}