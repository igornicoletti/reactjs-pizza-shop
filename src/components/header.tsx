import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ChevronDownIcon, LogOutIcon, PanelsTopLeftIcon, PizzaIcon, SquareGanttChartIcon } from 'lucide-react'

import { SignOutApi } from '../api/signout'
import { RestaurantApi } from '../api/restaurant'
import { HeaderVariants, MenuVariants, ScaleVariants } from '../styles/variants'

const { menucontent, menuaction, menudownicon, menuitems, menuitem, menuicon } = MenuVariants()
const { scaleenter, scaleenterto, scalefrom, scaleleave, scaleleavefrom, scaleleaveto } = ScaleVariants()
const { headercontent, headerwrapper, headerlf, headerlogo, headeritems, headeritem, headericon } = HeaderVariants()

const menuData = [
  { id: 1, icon: PanelsTopLeftIcon, ancor: '/dashboard', title: 'Dashboard' },
  { id: 2, icon: SquareGanttChartIcon, ancor: '/order', title: 'Pedidos' }
]

export const HeaderComponent = () => {
  const navigate = useNavigate()

  const { data: restaurant } = useQuery({ queryKey: ['restaurant'], queryFn: RestaurantApi })

  const { mutateAsync: signout } = useMutation({
    mutationFn: SignOutApi,
    onSuccess: () => navigate('/signin', { replace: true })
  })

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
        <Menu className={menucontent()} as={'div'}>
          <Menu.Button className={menuaction()}>
            <span>{restaurant?.name}</span>
            <ChevronDownIcon className={menudownicon()} aria-hidden={true} />
          </Menu.Button>
          <Transition as={Fragment}
            enter={scaleenter()} enterFrom={scalefrom()} enterTo={scaleenterto()}
            leave={scaleleave()} leaveFrom={scaleleavefrom()} leaveTo={scaleleaveto()}>
            <Menu.Items className={menuitems()}>
              {menuData.map((data) => (
                <Menu.Item key={data.id}>
                  <NavLink className={menuitem()} to={data.ancor}>
                    <data.icon className={menuicon()} aria-hidden={true} />
                    <span>{data.title}</span>
                  </NavLink>
                </Menu.Item>
              ))}
              <Menu.Item>
                <button className={menuitem()} onClick={() => signout()}>
                  <LogOutIcon className={menuicon()} aria-hidden={true} />
                  <span>Sair</span>
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}