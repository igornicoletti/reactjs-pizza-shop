import { api } from '../lib/axios'

type Props = {
  restaurantName: string
  managerName: string
  email: string
}

export const SignUpApi = async ({ restaurantName, managerName, email }: Props) =>
  await api.post('/restaurants', { restaurantName, managerName, email })