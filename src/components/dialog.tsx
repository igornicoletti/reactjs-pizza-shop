import { Fragment } from 'react'
import { XIcon } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { Dialog, Transition } from '@headlessui/react'

import { OrderIdApi } from '../api'
import { DialogVariants, OpacityVariants, ScaleVariants } from '../styles'

const { scaleenter, scaleenterto, scalefrom, scaleleave, scaleleavefrom, scaleleaveto } = ScaleVariants()
const { opacityenter, opacityenterto, opacityfrom, opacityleave, opacityleavefrom, opacityleaveto } = OpacityVariants()
const { dialogcontent, dialogbackdrop, dialogdialog, dialogwrapper, dialogpanel, dialogguide, dialoghead, dialogclose, dialogicon, dialogtitle, dialogdescript, dialogoverflow, dialogtable, dialogthead, dialogtbody, dialogtfoot, dialogrow } = DialogVariants()

type Props = {
  dialog: boolean
  dialogOrderId: string
  handleDialog: (orderId: string) => void
}

export const DialogComponent = ({ dialog, dialogOrderId: orderId, handleDialog }: Props) => {
  const { data: order } = useQuery({
    enabled: dialog,
    queryKey: ['order', orderId],
    queryFn: () => OrderIdApi({ orderId })
  })

  if (!order) return null

  return (
    <Transition show={dialog} as={Fragment}>
      <Dialog className={dialogcontent()} onClose={() => handleDialog(order.id)}>
        <Transition.Child as={Fragment} enter={opacityenter()} enterFrom={opacityfrom()} enterTo={opacityenterto()} leave={opacityleave()} leaveFrom={opacityleavefrom()} leaveTo={opacityleaveto()}>
          <div className={dialogbackdrop()} />
        </Transition.Child>
        <div className={dialogdialog()}>
          <div className={dialogwrapper()}>
            <Transition.Child as={Fragment} enter={scaleenter()} enterFrom={scalefrom()} enterTo={scaleenterto()} leave={scaleleave()} leaveFrom={scaleleavefrom()} leaveTo={scaleleaveto()}>
              <Dialog.Panel className={dialogpanel()}>
                <div className={dialogguide()}>
                  <div className={dialoghead()}>
                    <Dialog.Title className={dialogtitle()}>Detalhes do pedido</Dialog.Title>
                    <div className={dialogdescript()}>
                      <p>Nome: {order.customer.name}</p>
                      <p>E-mail: {order.customer.email}</p>
                    </div>
                  </div>
                  <div className={dialogoverflow()}>
                    <table className={dialogtable()}>
                      <thead className={dialogthead()}>
                        <tr className={dialogrow()}>
                          <th scope='col'>Pedido</th>
                          <th scope='col'>Qtd</th>
                          <th scope='col'>Valor unit</th>
                          <th scope='col'>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody className={dialogtbody()}>
                        {order.orderItems.map((data) => (
                          <tr className={dialogrow()} key={data.id}>
                            <td>{data.product.name}</td>
                            <td>{data.quantity}</td>
                            <td>{(data.priceInCents / 100).toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })}</td>
                            <td>{(data.priceInCents * data.quantity / 100).toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className={dialogtfoot()}>
                          <th colSpan={3}>Total</th>
                          <th>{(order.totalInCents / 100).toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })}</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <button className={dialogclose()} onClick={() => handleDialog(order.id)}>
                  <XIcon className={dialogicon()} aria-hidden={true} />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
