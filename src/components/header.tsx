import { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, LogOutIcon, PanelsTopLeftIcon, PizzaIcon, SettingsIcon, SquareGanttChartIcon } from 'lucide-react'

import { HeaderVariants, MenuVariants, ScaleVariants } from '../styles/variants'

const { menucontent, menuaction, menudownicon, menuitems, menuitem, menuicon } = MenuVariants()
const { scaleenter, scaleenterto, scalefrom, scaleleave, scaleleavefrom, scaleleaveto } = ScaleVariants()
const { headercontent, headerwrapper, headerlf, headerlogo, headeritems, headeritem, headericon } = HeaderVariants()

const menuData = [
  { id: 1, icon: PanelsTopLeftIcon, ancor: 'dashboard', title: 'Dashboard' },
  { id: 2, icon: SquareGanttChartIcon, ancor: 'order', title: 'Pedidos' },
  { id: 3, icon: SettingsIcon, ancor: '/', title: 'Configurações' },
  { id: 4, icon: LogOutIcon, ancor: '/', title: 'Sair' }
]

export const HeaderComponent = () => {
  return (
    <div className={headercontent()}>
      <div className={headerwrapper()}>
        <div className={headerlf()}>
          <PizzaIcon className={headerlogo()} aria-hidden={true} />
          <div className={headeritems()}>
            {menuData.slice(0, 2).map((data) => (
              <NavLink className={headeritem()} key={data.id} to={data.ancor}>
                <data.icon className={headericon()} aria-hidden={true} />
                <span>{data.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <Menu className={menucontent()} as={'div'}>
          <Menu.Button className={menuaction()}>
            <span>Igor Nicoletti</span>
            <ChevronDownIcon className={menudownicon()} aria-hidden={true} />
          </Menu.Button>
          <Transition as={Fragment}
            enter={scaleenter()} enterFrom={scalefrom()} enterTo={scaleenterto()}
            leave={scaleleave()} leaveFrom={scaleleavefrom()} leaveTo={scaleleaveto()}>
            <Menu.Items className={menuitems()}>
              {menuData.map((data) => (
                <Menu.Item className={menuitem()} as={Link} to={data.ancor} key={data.id}>
                  <data.icon className={menuicon()} aria-hidden={true} />
                  <span>{data.title}</span>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}