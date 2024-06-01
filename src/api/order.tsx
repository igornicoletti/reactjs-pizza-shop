import { api } from '../lib/axios'
import { OrderMetaProps, OrderProps } from '../types'

export const OrderApi = async ({ pageIndex }: OrderMetaProps) =>
  await api.get<OrderProps>('/orders', { params: { pageIndex } }).then((res) => res.data)