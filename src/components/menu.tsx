import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, LogOutIcon, SettingsIcon } from 'lucide-react'
import { Fragment } from 'react'
import { TransitionVariants } from '../styles/variants'

const { jumpchildenter, jumpchildenterto, jumpchildfrom, jumpchildleave, jumpchildleavefrom, jumpchildleaveto } = TransitionVariants()

const links = [
  { id: 1, href: '/', icon: SettingsIcon, label: 'Configurações' },
  { id: 2, href: '/', icon: LogOutIcon, label: 'Sair' },
]

export const MenuComponent = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center gap-4 px-4 py-2 rounded-md uppercase
      bg-in-slate hover:bg-in-cyan hover:text-in-dark focus:outline-none transition ease-in-out duration-200">
        <span>Pizza Shop</span>
        <ChevronDownIcon className="size-4" />
      </Menu.Button>
      <Transition as={Fragment}
        enter={jumpchildenter()} enterFrom={jumpchildfrom()} enterTo={jumpchildenterto()}
        leave={jumpchildleave()} leaveFrom={jumpchildleavefrom()} leaveTo={jumpchildleaveto()}>
        <Menu.Items className="absolute origin-top-right right-0 w-64 flex flex-col gap-2 p-2 mt-2 rounded-md shadow-lg bg-in-slate focus:outline-none">
          {links.map((link) => (
            <Menu.Item as="a" key={link.id} href={link.href}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-in-cyan hover:text-in-dark group">
              <link.icon className='size-4 text-in-cyan group-hover:text-in-dark' />
              <span>{link.label}</span>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}