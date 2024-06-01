import { api } from '../lib/axios'
import { ProfileProps } from '../types'

export const ProfileApi = async () =>
  await api.get<ProfileProps>('/me').then((res) => res.data)