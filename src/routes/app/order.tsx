import { Form } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { CheckIcon, FileSearchIcon, XIcon } from 'lucide-react'

import { OrderApi } from '../../api/order'
import { PaginationComponent } from '../../components/pagination'
import { FormVariants, OrderVariants } from '../../styles/variants'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const { formcontent, formgroup, forminput, formlabel } = FormVariants()
const { ordercontent, orderwrapper, ordertitle, orderguide, orderfilter, ordertooltip, orderoverflow, ordertable, orderthead, ordertbody, orderrow, ordericon, orderstatus, ordersteps, orderaction } = OrderVariants()

export const OrderPage = () => {
  const { data: order } = useQuery({ queryKey: ['order'], queryFn: OrderApi })

  const orderStatus = { canceled: 'Cancelado', delivered: 'Entregue', delivering: 'Em entrega', pending: 'Pendente', processing: 'Em preparo' }

  return (
    <div className={ordercontent()}>
      <div className={orderwrapper()}>
        <h1 className={ordertitle()}>Pedidos</h1>
        <div className={orderguide()}>
          <div className={orderfilter()}>
            <Form className={formcontent()}>
              <div className={formgroup()}>
                <input className={forminput()} type='filter' id='filter' placeholder=' ' />
                <label className={formlabel()} htmlFor='filter'>Filtrar cliente</label>
              </div>
            </Form>
          </div>
          <div className={orderoverflow()}>
            <table className={ordertable()}>
              <thead className={orderthead()}>
                <tr className={orderrow()}>
                  <th scope='col'>Ver</th>
                  <th scope='col'>Id do pedido</th>
                  <th scope='col'>Realizado</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Nome do cliente</th>
                  <th scope='col'>Total</th>
                  <th scope='col'>Ações</th>
                </tr>
              </thead>
              <tbody className={ordertbody()}>
                {order && order.orders.map((data) => (
                  <tr className={orderrow()} key={data.orderId}>
                    <td>
                      <button className={orderaction()}>
                        <FileSearchIcon className={ordericon()} aria-hidden={true} />
                        <p className={ordertooltip()}>Detalhes</p>
                      </button>
                    </td>
                    <td>{data.orderId}</td>
                    <td>{formatDistanceToNow(data.createdAt, { locale: ptBR, addSuffix: true })}</td>
                    <td><span className={orderstatus({ color: data.status })}>{orderStatus[data.status]}</span></td>
                    <td>{data.customerName}</td>
                    <td>{data.total.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })}</td>
                    <td>
                      <div className={ordersteps()}>
                        <button className={orderaction({ color: 'delivered' })}>
                          <CheckIcon className={ordericon()} aria-hidden={true} />
                          <p className={ordertooltip({ color: 'delivered' })}>Aprovar</p>
                        </button>
                        <button className={orderaction({ color: 'canceled' })}>
                          <XIcon className={ordericon()} aria-hidden={true} />
                          <p className={ordertooltip({ color: 'canceled' })}>Cancelar</p>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {order && <PaginationComponent pageIndex={order.meta.pageIndex} totalCount={order.meta.totalCount} peerPage={order.meta.perPage} />}
        </div>
      </div>
    </div>
  )
}
