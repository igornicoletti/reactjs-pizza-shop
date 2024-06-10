import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

import { OrderPageList } from './order-list'
import { OrderPageFilter } from './order-filter'
import { OrderPagePagination } from './order-pagination'

import { OrderApi } from '../../../api'
import { OrderVariants } from '../../../styles'

const { ordercontent, orderwrapper, ordertitle, orderguide } = OrderVariants()

export const OrderPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const status = searchParams.get('status')
  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: order } = useQuery({
    queryKey: ['order', pageIndex, orderId, customerName, status],
    queryFn: () => OrderApi({ pageIndex, orderId, customerName, status: status === 'all' ? null : status })
  })

  const handlePagination = (pageIndex: number) => {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())
      return state
    })
  }

  return (
    <div className={ordercontent()}>
      <div className={orderwrapper()}>
        <h1 className={ordertitle()}>Lista de Pedidos</h1>
        {order &&
          <div className={orderguide()}>
            <OrderPageFilter />
            <OrderPageList order={order} />
            <OrderPagePagination handlePagination={handlePagination} pageIndex={order.meta.pageIndex} totalCount={order.meta.totalCount} peerPage={order.meta.perPage} />
          </div>
        }
      </div>
    </div>
  )
}