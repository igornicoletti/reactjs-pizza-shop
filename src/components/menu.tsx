import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ChevronDownIcon, LogOutIcon, PanelsTopLeftIcon, SquareGanttChartIcon } from 'lucide-react'

import { MenuVariants, ScaleVariants } from '../styles'
import { ProfileApi, RestaurantApi, SignOutApi } from '../api'

const { menucontent, menuaction, menudownicon, menuitems, menuitem, menuicon } = MenuVariants()
const { scaleenter, scaleenterto, scalefrom, scaleleave, scaleleavefrom, scaleleaveto } = ScaleVariants()

const menuData = [
  { id: 1, icon: PanelsTopLeftIcon, ancor: '/dashboard', title: 'Dashboard' },
  { id: 2, icon: SquareGanttChartIcon, ancor: '/order', title: 'Pedidos' }
]

export const MenuComponent = () => {
  const navigate = useNavigate()

  const { data: user } = useQuery({
    queryKey: ['profile'], queryFn: ProfileApi
  })

  const { data: restaurant } = useQuery({
    queryKey: ['restaurant'], queryFn: RestaurantApi
  })

  const { mutateAsync: signout } = useMutation({
    mutationFn: SignOutApi,
    onSuccess: () => navigate('/signin', { replace: true })
  })

  return (
    <Menu className={menucontent()} as={'div'}>
      {restaurant && user && (
        <Menu.Button className={menuaction()}>
          <span>{restaurant.name || user.email}</span>
          <ChevronDownIcon className={menudownicon()} aria-hidden={true} />
        </Menu.Button>
      )}
      <Transition as={Fragment} enter={scaleenter()} enterFrom={scalefrom()} enterTo={scaleenterto()} leave={scaleleave()} leaveFrom={scaleleavefrom()} leaveTo={scaleleaveto()}>
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
  )
}