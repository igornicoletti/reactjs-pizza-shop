import { NavLink } from 'react-router-dom'
import { PanelsTopLeftIcon, PizzaIcon, SquareGanttChartIcon } from 'lucide-react'

import { MenuComponent } from './menu'
import { HeaderVariants } from '../styles'

const { headercontent, headerwrapper, headerlf, headerlogo, headeritems, headeritem, headericon } = HeaderVariants()

export const HeaderComponent = () => {
  return (
    <div className={headercontent()}>
      <div className={headerwrapper()}>
        <div className={headerlf()}>
          <PizzaIcon className={headerlogo()} aria-hidden={true} />
          <div className={headeritems()}>
            <NavLink className={headeritem()} to={'/dashboard'}>
              <PanelsTopLeftIcon className={headericon()} aria-hidden={true} />
              <span>Dashboard</span>
            </NavLink>
            <NavLink className={headeritem()} to={'/order'}>
              <SquareGanttChartIcon className={headericon()} aria-hidden={true} />
              <span>Pedidos</span>
            </NavLink>
          </div>
        </div>
        <MenuComponent />
      </div>
    </div>
  )
}