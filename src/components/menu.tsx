import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, LogOutIcon, PanelsTopLeftIcon, SettingsIcon, SquareGanttChartIcon } from 'lucide-react'

import { MenuVariants, ScaleVariants } from '../styles/variants'

const { menucontent, menuaction, menudownicon, menuitems, menuitem, menuicon } = MenuVariants()
const { scaleenter, scaleenterto, scalefrom, scaleleave, scaleleavefrom, scaleleaveto } = ScaleVariants()

const links = [
  { id: 1, href: 'dashboard', icon: PanelsTopLeftIcon, label: 'Dashboard' },
  { id: 2, href: 'order', icon: SquareGanttChartIcon, label: 'Pedidos' },
  { id: 3, href: '/', icon: SettingsIcon, label: 'Configurações' },
  { id: 4, href: '/', icon: LogOutIcon, label: 'Sair' }
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
          {links.map((link) => (
            <Menu.Item className={menuitem()} as={Link} to={link.href} key={link.id}>
              <link.icon className={menuicon()} aria-hidden={true} />
              <span>{link.label}</span>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}