import { api } from '../lib/axios'
import { SignInProps } from '../types'

export const SignInApi = async ({ email }: SignInProps) =>
  await api.post('/authenticate', { email })