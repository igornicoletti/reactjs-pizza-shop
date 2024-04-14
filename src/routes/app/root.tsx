import { Outlet } from 'react-router-dom'

import { RootVariants } from '../../styles/variants'
import { HeaderComponent } from '../../components/header'

const { rootlayout, rootcontainer } = RootVariants()

export const AppPage = () => {
  return (
    <div className={rootlayout()}>
      <div className={rootcontainer()}>
        <HeaderComponent />
        <Outlet />
      </div>
    </div>
  )
}