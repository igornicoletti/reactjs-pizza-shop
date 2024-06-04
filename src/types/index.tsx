export type OrderIdProps = {
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
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

export type OrderIdParamsProps = {
  orderId: string
}

export type OrderProps = {
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

export type OrderParamsProps = {
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