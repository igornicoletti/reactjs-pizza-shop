import { api } from '../lib/axios'

type Props = {
  id: string
  name: string
  email: string
  createdAt: Date | null
  updatedAt: Date | null
  role: "manager" | "customer"
}

export const ProfileApi = async () => {
  const response = await api.get<Props>('/me')
  return response.data
}