import { Outlet } from 'react-router-dom'

import { RootVariants } from '../../styles'
import { HeaderComponent } from '../../components'

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