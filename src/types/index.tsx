export type OrderStatusProps = 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'

export type OrderProps = {
  orders: {
    orderId: string
    createdAt: string
    status: OrderStatusProps
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export type OrderIdProps = {
  orderId: string
}

export type DetailProps = {
  status: OrderStatusProps
  id: string
  createdAt: string
  totalInCents: number
  customer: {
    name: string
    email: string
  },
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export type FilterProps = {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export type ProfileProps = {
  id: string
  name: string
  email: string
  createdAt: Date | null
  updatedAt: Date | null
  role: 'manager' | 'customer'
}

export type RestaurantProps = {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export type SignInProps = {
  email: string
}

export type SignUpProps = {
  restaurant: string
  name: string
  email: string
}

export type ToastProps = {
  id: number
  showing: boolean
  title: string
  description: string
  type: 'info' | 'danger' | 'success' | 'warning'
}

export type RechartsProps = {
  cx: string
  cy: string
  midAngle: string
  innerRadius: number
  outerRadius: number
  value: string
  index: number
}