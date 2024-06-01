import { api } from '../lib/axios'

type Props = {
  id: string
  name: string
  email: string
  createdAt: Date | null
  updatedAt: Date | null
  role: 'manager' | 'customer'
}

export const ProfileApi = async () =>
  await api.get<Props>('/me').then((res) => res.data)