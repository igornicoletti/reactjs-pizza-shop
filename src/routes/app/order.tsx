import { z } from 'zod'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { FileSearchIcon, PizzaIcon, XIcon } from 'lucide-react'

import { OrderApi } from '../../api'
import { OrderVariants } from '../../styles'
import { DialogComponent, FilterComponent, PaginationComponent } from '../../components'
import { useState } from 'react'

const { ordercontent, orderwrapper, ordertitle, orderguide, ordertooltip, orderoverflow, ordertable, orderthead, ordertbody, ordertfoot, orderrow, ordericon, orderstatus, ordersteps, orderaction } = OrderVariants()

const statusData = { pending: 'Pendente', processing: 'Preparo', delivering: 'Entrega', delivered: 'Concluído', canceled: 'Cancelado' }

export const OrderPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [dialog, setDialog] = useState<boolean>(false)
  const [dialogOrderId, setDialogOrderId] = useState<string>('')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')
  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const { data: order } = useQuery({
    queryKey: ['order', pageIndex, orderId, customerName, status],
    queryFn: () => OrderApi({ pageIndex, orderId, customerName, status: status === 'all' ? null : status })
  })

  const handleDialog = (orderId: string) => {
    setDialog(!dialog)
    setDialogOrderId(orderId)
  }

  const handlePagination = (pageIndex: number) => {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())
      return state
    })
  }

  return (
    <div className={ordercontent()}>
      <div className={orderwrapper()}>
        <h1 className={ordertitle()}>Pedidos</h1>
        {order &&
          <div className={orderguide()}>
            <FilterComponent />
            <div className={orderoverflow()}>
              <table className={ordertable()}>
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
                          <button className={orderaction()} onClick={() => handleDialog(data.orderId)}>
                            <FileSearchIcon className={ordericon()} aria-hidden={true} />
                            <span className={ordertooltip()}>Detalhes</span>
                          </button>
                        </td>
                        <td>{data.orderId}</td>
                        <td>{data.customerName}</td>
                        <td>{formatDistanceToNow(data.createdAt, { locale: ptBR, addSuffix: true })}</td>
                        <td><li className={orderstatus({ color: data.status })}>{statusData[data.status]}</li></td>
                        <td>{(data.total / 100).toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })}</td>
                        <td>
                          <div className={ordersteps()}>
                            <button className={orderaction({ color: data.status })}>
                              <PizzaIcon className={ordericon()} aria-hidden={true} />
                              <span className={ordertooltip({ color: data.status })}>{statusData[data.status]}</span>
                            </button>
                            <button className={orderaction({ color: 'canceled' })}>
                              <XIcon className={ordericon()} aria-hidden={true} />
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
            </div>
            <PaginationComponent handlePagination={handlePagination} pageIndex={order.meta.pageIndex} totalCount={order.meta.totalCount} peerPage={order.meta.perPage} />
          </div>
        }
      </div>
      <DialogComponent dialog={dialog} dialogOrderId={dialogOrderId} handleDialog={handleDialog} />
    </div>
  )
}
