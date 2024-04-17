import { Fragment } from 'react'
import { XIcon } from 'lucide-react'
import { Dialog, Transition } from '@headlessui/react'

import { OrderProps } from '../routes/app/order'
import { ModalVariants, OpacityVariants, ScaleVariants } from '../styles/variants'

const { scaleenter, scaleenterto, scalefrom, scaleleave, scaleleavefrom, scaleleaveto } = ScaleVariants()
const { opacityenter, opacityenterto, opacityfrom, opacityleave, opacityleavefrom, opacityleaveto } = OpacityVariants()
const { modalcontent, modalbackdrop, modaldialog, modalwrapper, modalpanel, modalguide, modalhead, modalclose, modalicon, modaltitle, modaldescript, modaloverflow, modaltable, modalthead, modaltbody, modaltfoot, modalrow } = ModalVariants()

type Props = {
  currentModal: boolean
  currentOrder: OrderProps | undefined
  handleCloseModal: () => void
}

export const ModalComponent = ({ currentModal, currentOrder, handleCloseModal }: Props) => {
  const intlNumberFormat = new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' })

  return (
    <Transition appear show={currentModal} as={Fragment}>
      <Dialog className={modalcontent()} onClose={handleCloseModal}>
        <Transition.Child as={Fragment}
          enter={opacityenter()} enterFrom={opacityfrom()} enterTo={opacityenterto()}
          leave={opacityleave()} leaveFrom={opacityleavefrom()} leaveTo={opacityleaveto()}>
          <div className={modalbackdrop()} />
        </Transition.Child>
        <div className={modaldialog()}>
          <div className={modalwrapper()}>
            <Transition.Child as={Fragment}
              enter={scaleenter()} enterFrom={scalefrom()} enterTo={scaleenterto()}
              leave={scaleleave()} leaveFrom={scaleleavefrom()} leaveTo={scaleleaveto()}>
              <Dialog.Panel className={modalpanel()}>
                <div className={modalguide()}>
                  <div className={modalhead()}>
                    <Dialog.Title className={modaltitle()}>Detalhes do pedido</Dialog.Title>
                    <Dialog.Description className={modaldescript()}>Pedido: {currentOrder?.identifier}</Dialog.Description>
                  </div>
                  <div className={modaloverflow()}>
                    <table className={modaltable()}>
                      <thead className={modalthead()}>
                        <tr className={modalrow()}>
                          <th scope='col'>Nome do pedido</th>
                          <th scope='col'>Qtd</th>
                          <th scope='col'>Valor unit</th>
                          <th scope='col'>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody className={modaltbody()}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <tr className={modalrow()} key={i}>
                            <td>Pizza Tradicional Família</td>
                            <td>2</td>
                            <td>{intlNumberFormat.format(currentOrder ? currentOrder.total : 0)}</td>
                            <td>{intlNumberFormat.format(currentOrder ? currentOrder.total * 2 : 0)}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className={modaltfoot()}>
                          <th colSpan={3}>Total</th>
                          <th>{intlNumberFormat.format(currentOrder ? currentOrder.total * 2 : 0)}</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <button className={modalclose()} onClick={handleCloseModal}>
                  <XIcon className={modalicon()} aria-hidden={true} />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
