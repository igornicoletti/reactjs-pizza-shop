import { api } from '../lib/axios'

export type RestaurantProps = {
  restaurant: string
  name: string
  email: string
}

export const SignUpApi = async ({ restaurant, name, email }: RestaurantProps) =>
  await api.post('/restaurants', { restaurant, name, email })