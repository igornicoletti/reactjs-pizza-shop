import { api } from '../lib/axios'
import { SignUpProps } from '../types'

export const SignUpApi = async ({ restaurant, name, email }: SignUpProps) =>
  await api.post('/restaurants', { restaurant, name, email })