import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ChevronDownIcon, LogOutIcon, PanelsTopLeftIcon, SquareGanttChartIcon } from 'lucide-react'

import { MenuVariants, ScaleVariants } from '../styles'
import { ProfileApi, RestaurantApi, SignOutApi } from '../api'

const { menucontent, menuaction, menudownicon, menuitems, menuitem, menuicon } = MenuVariants()
const { scaleenter, scaleenterto, scalefrom, scaleleave, scaleleavefrom, scaleleaveto } = ScaleVariants()

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
          <Menu.Item>
            <NavLink className={menuitem()} to={'/dashboard'}>
              <PanelsTopLeftIcon className={menuicon()} aria-hidden={true} />
              <span>Dashboard</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink className={menuitem()} to={'/order'}>
              <SquareGanttChartIcon className={menuicon()} aria-hidden={true} />
              <span>Pedidos</span>
            </NavLink>
          </Menu.Item>
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