import { api } from '../lib/axios'

export type SignInProps = {
  email: string
}

export const SignInApi = async ({ email }: SignInProps) =>
  await api.post('/authenticate', { email })