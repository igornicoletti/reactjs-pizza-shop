import { api } from '../lib/axios'

type Props = {
  email: string
}

export const SignInApi = async ({ email }: Props) =>
  await api.post('/authenticate', { email })