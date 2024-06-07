import { api } from '../lib/axios'
import { OrderIdParamsProps, OrderIdProps, OrderParamsProps, OrderProps } from '../types'

export const OrderApi = async ({ pageIndex, orderId, customerName, status }: OrderParamsProps) =>
  await api.get<OrderProps>('/orders', { params: { pageIndex, orderId, customerName, status } }).then((res) => res.data)

export const OrderIdApi = async ({ orderId }: OrderIdParamsProps) =>
  await api.get<OrderIdProps>(`/orders/${orderId}`).then((res) => res.data)

export const OrderCancelApi = async ({ orderId }: OrderIdParamsProps) =>
  await api.patch(`/orders/${orderId}/cancel`)