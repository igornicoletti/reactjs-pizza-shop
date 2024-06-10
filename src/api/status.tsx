import { api } from '../lib/axios'
import { OrderIdProps } from '../types'

export const ApproveApi = async ({ orderId }: OrderIdProps) =>
  await api.patch(`/orders/${orderId}/approve`)

export const CancelApi = async ({ orderId }: OrderIdProps) =>
  await api.patch(`/orders/${orderId}/cancel`)

export const DeliverApi = async ({ orderId }: OrderIdProps) =>
  await api.patch(`/orders/${orderId}/deliver`)

export const DispatchApi = async ({ orderId }: OrderIdProps) =>
  await api.patch(`/orders/${orderId}/dispatch`)