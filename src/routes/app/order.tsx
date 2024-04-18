import { useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { CheckIcon, FileSearchIcon, XIcon } from 'lucide-react'

import { ModalComponent } from '../../components/modal'
import { PaginationComponent } from '../../components/pagination'
import { FormVariants, OrderVariants } from '../../styles/variants'

const { formcontent, formgroup, forminput, formlabel } = FormVariants()
const { ordercontent, orderwrapper, ordertitle, orderguide, orderfilter, ordertooltip, orderoverflow, ordertable, orderthead, ordertbody, orderrow, ordericon, orderstatus, ordersteps, orderaction } = OrderVariants()

export type OrderProps = {
  id: number
  statusId: string
  identifier: number
  min: string
  status: string
  name: string
  total: number
}

export const OrderPage = () => {
  const order = useLoaderData() as OrderProps[]

  const [ currentOrder, setCurrentOrder ] = useState<OrderProps>()
  const [ currentModal, setCurrentModal ] = useState<boolean>( false )

  const intlNumberFormat = new Intl.NumberFormat( 'pt-br', { currency: 'BRL', style: 'currency' } )

  const handleCloseModal = () => setCurrentModal( false )

  const handleOrderDetails = ( data: OrderProps ) => {
    setCurrentOrder( order.find( ( order ) => order.id === data.id ) )
    setCurrentModal( true )
  }

  return (
    <div className={ ordercontent() }>
      <div className={ orderwrapper() }>
        <h1 className={ ordertitle() }>Pedidos</h1>
        <div className={ orderguide() }>
          <div className={ orderfilter() }>
            <Form className={ formcontent() }>
              <div className={ formgroup() }>
                <input className={ forminput() } type='filter' id='filter' placeholder=' ' />
                <label className={ formlabel() } htmlFor='filter'>Filtrar cliente</label>
              </div>
            </Form>
          </div>
          <div className={ orderoverflow() }>
            <table className={ ordertable() }>
              <thead className={ orderthead() }>
                <tr className={ orderrow() }>
                  <th scope='col'>Ver</th>
                  <th scope='col'>Id do pedido</th>
                  <th scope='col'>Realizado há</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Nome do cliente</th>
                  <th scope='col'>Total</th>
                  <th scope='col'>Ações</th>
                </tr>
              </thead>
              <tbody className={ ordertbody() }>
                { order.map( ( data ) => (
                  <tr className={ orderrow() } key={ data.id }>
                    <td>
                      <button className={ orderaction() } onClick={ () => handleOrderDetails( data ) }>
                        <FileSearchIcon className={ ordericon() } aria-hidden={ true } />
                        <p className={ ordertooltip() }>Detalhes</p>
                      </button>
                    </td>
                    <td>{ data.identifier }</td>
                    <td>{ data.min }</td>
                    <td>
                      { data.status === 'Pendente' && <span className={ orderstatus() }>Pendente</span> }
                      { data.status === 'Concluído' && <span className={ orderstatus( { color: 'finished' } ) }>Concluído</span> }
                      { data.status === 'Cancelado' && <span className={ orderstatus( { color: 'canceled' } ) }>Cancelado</span> }
                    </td>
                    <td>{ data.name }</td>
                    <td>{ intlNumberFormat.format( data.total ) }</td>
                    <td>
                      <div className={ ordersteps() }>
                        <button className={ orderaction( { color: 'finished' } ) }>
                          <CheckIcon className={ ordericon() } aria-hidden={ true } />
                          <p className={ ordertooltip( { color: 'finished' } ) }>Concluir</p>
                        </button>
                        <button className={ orderaction( { color: 'canceled' } ) }>
                          <XIcon className={ ordericon() } aria-hidden={ true } />
                          <p className={ ordertooltip( { color: 'canceled' } ) }>Cancelar</p>
                        </button>
                      </div>
                    </td>
                  </tr>
                ) ) }
              </tbody>
            </table>
          </div>
          <PaginationComponent pageIndex={ 0 } totalCount={ 105 } peerPage={ 10 } />
        </div>
      </div>
      <ModalComponent currentModal={ currentModal } currentOrder={ currentOrder } handleCloseModal={ handleCloseModal } />
    </div>
  )
}
