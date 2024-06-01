import { NavLink } from 'react-router-dom'
import { PanelsTopLeftIcon, PizzaIcon, SquareGanttChartIcon } from 'lucide-react'

import { MenuComponent } from './menu'
import { HeaderVariants } from '../styles'

const { headercontent, headerwrapper, headerlf, headerlogo, headeritems, headeritem, headericon } = HeaderVariants()

const menuData = [
  { id: 1, icon: PanelsTopLeftIcon, ancor: '/dashboard', title: 'Dashboard' },
  { id: 2, icon: SquareGanttChartIcon, ancor: '/order', title: 'Pedidos' }
]

export const HeaderComponent = () => {
  return (
    <div className={headercontent()}>
      <div className={headerwrapper()}>
        <div className={headerlf()}>
          <PizzaIcon className={headerlogo()} aria-hidden={true} />
          <div className={headeritems()}>
            {menuData.map((data) => (
              <NavLink className={headeritem()} key={data.id} to={data.ancor}>
                <data.icon className={headericon()} aria-hidden={true} />
                <span>{data.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <MenuComponent />
      </div>
    </div>
  )
}