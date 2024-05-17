import { Outlet } from 'react-router-dom'
import { RootVariants } from '../../styles/variants'
import { NotifyComponent } from '../../components/notify'

const { rootlayout, rootcontainer } = RootVariants()

export const AuthPage = () => {
  return (
    <div className={rootlayout()}>
      <div className={rootcontainer()}>
        <Outlet />
        <NotifyComponent />
      </div>
    </div>
  )
}