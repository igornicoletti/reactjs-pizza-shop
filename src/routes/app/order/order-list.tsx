import { useState } from 'react'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'
import { BanIcon, FileSearchIcon, PizzaIcon } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { OrderPageDetail } from './order-detail'

import { OrderVariants } from '../../../styles'
import { OrderProps, OrderStatusProps } from '../../../types'
import { ApproveApi, CancelApi, DeliverApi, DispatchApi } from '../../../api'

const { ordertooltip, orderoverflow, ordertable, ordercol, orderthead, ordertbody, ordertfoot, orderrow, ordericon, orderstatus, orderping, ordersteps, orderaction } = OrderVariants()

const statusData = { pending: 'Pendente', processing: 'Preparo', delivering: 'Entrega', delivered: 'Concluído', canceled: 'Cancelado' }

type Props = {
  order: OrderProps
}

export const OrderPageList = ({ order }: Props) => {
  const queryClient = useQueryClient()
  const [currentDetail, setCurrentDetail] = useState<boolean>(false)
  const [currentDetailId, setCurrentDetailId] = useState<string | null>(null)

  const handleDetail = (orderId: string) => {
    setCurrentDetail(!currentDetail)
    setCurrentDetailId(orderId)
  }

  const handleStatus = (orderId: string, status: OrderStatusProps) => {
    const onderListCache = queryClient.getQueriesData<OrderProps>({ queryKey: ['order'] })
    onderListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) return
      queryClient.setQueryData<OrderProps>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map((data) => data.orderId === orderId
          ? { ...data, status }
          : data)
      })
    })
  }

  const { mutateAsync: approve } = useMutation({
    mutationFn: ApproveApi,
    async onSuccess(_, { orderId }) { handleStatus(orderId, 'processing') }
  })

  const { mutateAsync: cancel } = useMutation({
    mutationFn: CancelApi,
    async onSuccess(_, { orderId }) { handleStatus(orderId, 'canceled') }
  })

  const { mutateAsync: deliver } = useMutation({
    mutationFn: DeliverApi,
    async onSuccess(_, { orderId }) { handleStatus(orderId, 'delivered') }
  })

  const { mutateAsync: dispatch } = useMutation({
    mutationFn: DispatchApi,
    async onSuccess(_, { orderId }) { handleStatus(orderId, 'delivering') }
  })

  return (
    <div className={orderoverflow()}>
      <table className={ordertable()}>
        <colgroup className={ordercol()}>
          {Array.from({ length: 7 }).map((_, i) => (<col key={i} />))}
        </colgroup>
        <thead className={orderthead()}>
          <tr className={orderrow()}>
            <th scope='col'>Dados</th>
            <th scope='col'>Identificador</th>
            <th scope='col'>Nome do cliente</th>
            <th scope='col'>Entrada</th>
            <th scope='col'>Status</th>
            <th scope='col'>Valor total</th>
            <th scope='col'>Ações</th>
          </tr>
        </thead>
        {order.orders.length > 0 ? (
          <tbody className={ordertbody()}>
            {order.orders.map((data) => (
              <tr className={orderrow()} key={data.orderId}>
                <td>
                  <button className={orderaction()} onClick={() => handleDetail(data.orderId)}>
                    <FileSearchIcon className={ordericon()} aria-hidden={true} />
                    <span className={ordertooltip()}>Detalhes</span>
                  </button>
                </td>
                <td>{data.orderId}</td>
                <td>{data.customerName}</td>
                <td>{formatDistanceToNow(data.createdAt, { locale: ptBR, addSuffix: true })}</td>
                <td>
                  <div className={orderstatus()}>
                    <div className={orderping({ color: data.status })}><div /></div>
                    <span>{statusData[data.status]}</span>
                  </div>
                </td>
                <td>{(data.total / 100).toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })}</td>
                <td>
                  <div className={ordersteps()}>
                    {data.status === 'pending' && (
                      <button className={orderaction({ color: 'processing' })}
                        onClick={() => approve({ orderId: data.orderId })}>
                        <PizzaIcon className={ordericon()} aria-hidden={true} />
                        <span className={ordertooltip({ color: 'processing' })}>Preparo</span>
                      </button>
                    )}
                    {data.status === 'processing' && (
                      <button className={orderaction({ color: 'delivering' })}
                        onClick={() => dispatch({ orderId: data.orderId })}>
                        <PizzaIcon className={ordericon()} aria-hidden={true} />
                        <span className={ordertooltip({ color: 'delivering' })}>Entrega</span>
                      </button>
                    )}
                    {data.status === 'delivering' && (
                      <button className={orderaction({ color: 'delivered' })}
                        onClick={() => deliver({ orderId: data.orderId })}>
                        <PizzaIcon className={ordericon()} aria-hidden={true} />
                        <span className={ordertooltip({ color: 'delivered' })}>Concluído</span>
                      </button>
                    )}
                    {data.status === 'delivered' && (
                      <button className={orderaction({ color: 'delivered' })} disabled={true}>
                        <PizzaIcon className={ordericon()} aria-hidden={true} />
                        <span className={ordertooltip({ color: 'delivered' })}>Concluído</span>
                      </button>
                    )}
                    <button className={orderaction({ color: 'canceled' })}
                      onClick={() => cancel({ orderId: data.orderId })}
                      disabled={!['pending', 'processing'].includes(data.status)}>
                      <BanIcon className={ordericon()} aria-hidden={true} />
                      <span className={ordertooltip({ color: 'canceled' })}>Cancelar</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tfoot>
            <tr>
              <th className={ordertfoot()} colSpan={7}>
                <PizzaIcon size={32} aria-hidden={true} />
                <p>Nenhum pedido foi encontrado</p>
              </th>
            </tr>
          </tfoot>
        )}
      </table>
      {currentDetailId && <OrderPageDetail currentDetail={currentDetail} currentDetailId={currentDetailId} handleDetail={handleDetail} />}
    </div>
  )
}