import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, LogOutIcon, PanelsTopLeftIcon, SettingsIcon, SquareGanttChartIcon } from 'lucide-react'

import { MenuVariants, ScaleVariants } from '../styles/variants'

const { menucontent, menuaction, menudownicon, menuitems, menuitem, menuicon } = MenuVariants()
const { scaleenter, scaleenterto, scalefrom, scaleleave, scaleleavefrom, scaleleaveto } = ScaleVariants()

const menuData = [
  { id: 1, icon: PanelsTopLeftIcon, ancor: 'dashboard', title: 'Dashboard' },
  { id: 2, icon: SquareGanttChartIcon, ancor: 'order', title: 'Pedidos' },
  { id: 3, icon: SettingsIcon, ancor: '/', title: 'Configurações' },
  { id: 4, icon: LogOutIcon, ancor: '/', title: 'Sair' }
]

export const MenuComponent = () => {
  return (
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
  )
}