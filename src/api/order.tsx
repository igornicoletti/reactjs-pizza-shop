import { api } from '../lib/axios'

type Props = {
  orders: {
    orderId: string
    createdAt: string
    status: 'canceled' | 'delivered' | 'delivering' | 'pending' | 'processing'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export const OrderApi = async () =>
  await api.get<Props>('/orders', { params: { pageIndex: 0 } }).then((res) => res.data)
