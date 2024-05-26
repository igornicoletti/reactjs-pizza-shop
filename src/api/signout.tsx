import { api } from '../lib/axios'

export const SignOutApi = async () =>
  await api.post('/sign-out')