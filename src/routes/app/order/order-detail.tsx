import { Fragment } from 'react'
import { XIcon } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { Dialog, Transition } from '@headlessui/react'

import { DetailApi } from '../../../api'
import { DetailVariants, OpacityVariants, ScaleVariants } from '../../../styles'

const { scaleenter, scaleenterto, scalefrom, scaleleave, scaleleavefrom, scaleleaveto } = ScaleVariants()
const { opacityenter, opacityenterto, opacityfrom, opacityleave, opacityleavefrom, opacityleaveto } = OpacityVariants()
const { detailcontent, detailbackdrop, detaildialog, detailwrapper, detailpanel, detailguide, detailhead, detailclose, detailicon, detailtitle, detaildescript, detailoverflow, detailtable, detailthead, detailtbody, detailtfoot, detailrow } = DetailVariants()

type Props = {
  currentDetail: boolean
  currentDetailId: string
  handleDetail: (orderId: string) => void
}

export const OrderPageDetail = ({ currentDetail, currentDetailId: orderId, handleDetail }: Props) => {
  const { data: order } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => DetailApi({ orderId })
  })

  if (!order) return null

  return (
    <Transition show={currentDetail} as={Fragment}>
      <Dialog className={detailcontent()} onClose={() => handleDetail(order.id)}>
        <Transition.Child as={Fragment} enter={opacityenter()} enterFrom={opacityfrom()} enterTo={opacityenterto()} leave={opacityleave()} leaveFrom={opacityleavefrom()} leaveTo={opacityleaveto()}>
          <div className={detailbackdrop()} />
        </Transition.Child>
        <div className={detaildialog()}>
          <div className={detailwrapper()}>
            <Transition.Child as={Fragment} enter={scaleenter()} enterFrom={scalefrom()} enterTo={scaleenterto()} leave={scaleleave()} leaveFrom={scaleleavefrom()} leaveTo={scaleleaveto()}>
              <Dialog.Panel className={detailpanel()}>
                <div className={detailguide()}>
                  <div className={detailhead()}>
                    <Dialog.Title className={detailtitle()}>Detalhes do pedido</Dialog.Title>
                    <div className={detaildescript()}>
                      <p>Nome: {order.customer.name}</p>
                      <p>E-mail: {order.customer.email}</p>
                    </div>
                  </div>
                  <div className={detailoverflow()}>
                    <table className={detailtable()}>
                      <thead className={detailthead()}>
                        <tr className={detailrow()}>
                          <th scope='col'>Pedido</th>
                          <th scope='col'>Qtd</th>
                          <th scope='col'>Valor unit</th>
                          <th scope='col'>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody className={detailtbody()}>
                        {order.orderItems.map((data) => (
                          <tr className={detailrow()} key={data.id}>
                            <td>{data.product.name}</td>
                            <td>{data.quantity}</td>
                            <td>{(data.priceInCents / 100).toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })}</td>
                            <td>{(data.priceInCents * data.quantity / 100).toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className={detailtfoot()}>
                          <th colSpan={3}>Total</th>
                          <th>{(order.totalInCents / 100).toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })}</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <button className={detailclose()} onClick={() => handleDetail(order.id)}>
                  <XIcon className={detailicon()} aria-hidden={true} />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}