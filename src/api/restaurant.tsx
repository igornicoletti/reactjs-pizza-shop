import { api } from '../lib/axios'

type Props = {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export const RestaurantApi = async () =>
  await api.get<Props>('/managed-restaurant').then((res) => res.data)
