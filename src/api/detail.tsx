import { api } from '../lib/axios'
import { DetailProps, OrderIdProps } from '../types'

export const DetailApi = async ({ orderId }: OrderIdProps) =>
  await api.get<DetailProps>(`/orders/${orderId}`).then((res) => res.data)