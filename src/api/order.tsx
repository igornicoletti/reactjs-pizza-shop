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

type OrderProps = {
  pageIndex: number
}

export const OrderApi = async ({ pageIndex }: OrderProps) =>
  await api.get<Props>('/orders', { params: { pageIndex } }).then((res) => res.data)
