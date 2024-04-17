import { NavLink } from 'react-router-dom'
import { PanelsTopLeftIcon, PizzaIcon, SquareGanttChartIcon } from 'lucide-react'

import { MenuComponent } from './menu'
import { HeaderVariants } from '../styles/variants'

const { headercontent, headerwrapper, headerlf, headerlogo, headernav, headerlink, headeraction } = HeaderVariants()

export const HeaderComponent = () => {
  return (
    <div className={headercontent()}>
      <div className={headerwrapper()}>
        <div className={headerlf()}>
          <NavLink to={'/'}>
            <PizzaIcon className={headerlogo()} aria-hidden={true} />
          </NavLink>
          <div className={headernav()}>
            <NavLink className={headerlink()} to={'dashboard'}>
              <PanelsTopLeftIcon className={headeraction()} aria-hidden={true} />
              <h1>Dashboard</h1>
            </NavLink>
            <NavLink className={headerlink()} to={'order'}>
              <SquareGanttChartIcon className={headeraction()} aria-hidden={true} />
              <h1>Pedidos</h1>
            </NavLink>
          </div>
        </div>
        <MenuComponent />
      </div>
    </div>
  )
}