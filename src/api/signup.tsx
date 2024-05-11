import { api } from '../lib/axios'

type Props = {
  name: string
  email: string
}

export const SignUpApi = async ({ name, email }: Props) =>
  await api.post('/restaurants', { name, email })