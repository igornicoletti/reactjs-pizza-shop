import { useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { CheckIcon, FileSearchIcon, XIcon } from 'lucide-react'

import { ModalComponent } from '../../components/modal'
import { PaginationComponent } from '../../components/pagination'
import { FormVariants, OrderVariants } from '../../styles/variants'

const { formcontent, formgroup, forminput, formlabel } = FormVariants()
const { ordercontent, orderwrapper, ordertitle, orderguide, orderfilter, orderoverflow, ordertable, orderthead, ordertbody, orderrow, ordericon, orderstatus, orderping, orderaction } = OrderVariants()

export type OrderProps = {
  id: number
  identifier: number
  min: string
  status: string
  name: string
  total: number
}

export const OrderPage = () => {
  const order = useLoaderData() as OrderProps[]

  const [currentOrder, setCurrentOrder] = useState<OrderProps>()
  const [currentModal, setCurrentModal] = useState<boolean>(false)

  const intlNumberFormat = new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' })

  const handleCloseModal = () => setCurrentModal(false)

  const handleOrderDetails = (data: OrderProps) => {
    setCurrentOrder(order.find((order) => order.id === data.id))
    setCurrentModal(true)
  }

  return (
    <div className={ordercontent()}>
      <div className={orderwrapper()}>
        <h1 className={ordertitle()}>Pedidos</h1>
        <div className={orderguide()}>
          <div className={orderfilter()}>
            <Form className={formcontent()}>
              <div className={formgroup()}>
                <input className={forminput()} type='filter' id='filter' placeholder=' ' />
                <label className={formlabel()} htmlFor='filter'>Filtrar por cliente</label>
              </div>
            </Form>
          </div>
          <div className={orderoverflow()}>
            <table className={ordertable()}>
              <thead className={orderthead()}>
                <tr className={orderrow()}>
                  <th scope='col'>Ver</th>
                  <th scope='col'>Identificador</th>
                  <th scope='col'>Realizado há</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Nome do cliente</th>
                  <th scope='col'>Total</th>
                  <th scope='col'>Ações</th>
                </tr>
              </thead>
              <tbody className={ordertbody()}>
                {order.map((data) => (
                  <tr className={orderrow()} key={data.id}>
                    <td>
                      <button className={orderaction()} onClick={() => handleOrderDetails(data)}>
                        <FileSearchIcon className={ordericon()} aria-hidden='true' />
                      </button>
                    </td>
                    <td>{data.identifier}</td>
                    <td>{data.min}</td>
                    <td>
                      <div className={orderstatus()}>
                        <span className={orderping({ color: 'finished' })} />
                        <span>{data.status}</span>
                      </div>
                    </td>
                    <td>{data.name}</td>
                    <td>{intlNumberFormat.format(data.total)}</td>
                    <td>
                      <button className={orderaction()}>
                        <CheckIcon className={ordericon({ color: 'finished' })} aria-hidden='true' />
                      </button>
                      <button className={orderaction()}>
                        <XIcon className={ordericon({ color: 'canceled' })} aria-hidden='true' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PaginationComponent pageIndex={0} totalCount={105} peerPage={10} />
        </div>
      </div>
      <ModalComponent currentModal={currentModal} currentOrder={currentOrder} handleCloseModal={handleCloseModal} />
    </div>
  )
}
