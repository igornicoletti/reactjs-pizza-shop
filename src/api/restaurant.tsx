import { api } from '../lib/axios'

type Props = {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export const RestaurantApi = async () => {
  const response = await api.get<Props>('/managed-restaurant')
  return response.data
}