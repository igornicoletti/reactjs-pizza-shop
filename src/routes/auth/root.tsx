import { Outlet } from 'react-router-dom'
import { RootVariants } from '../../styles'

const { rootlayout, rootcontainer } = RootVariants()

export const AuthPage = () => {
  return (
    <div className={rootlayout()}>
      <div className={rootcontainer()}>
        <Outlet />
      </div>
    </div>
  )
}