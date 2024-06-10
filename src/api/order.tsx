import { api } from '../lib/axios'
import { FilterProps, OrderProps } from '../types'

export const OrderApi = async ({ pageIndex, orderId, customerName, status }: FilterProps) =>
  await api.get<OrderProps>('/orders', { params: { pageIndex, orderId, customerName, status } }).then((res) => res.data)