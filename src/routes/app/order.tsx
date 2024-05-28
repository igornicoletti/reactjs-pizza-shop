import { ptBR } from 'date-fns/locale'
import { Form } from 'react-router-dom'
import { Fragment, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { useQuery } from '@tanstack/react-query'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronsUpDownIcon, FileSearchIcon, FilterIcon, FilterXIcon, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'

import { OrderApi } from '../../api/order'
import { PaginationComponent } from '../../components/pagination'
import { BtnVariants, FormVariants, OpacityVariants, OrderVariants } from '../../styles/variants'

const { btnaction } = BtnVariants()
const { formcontent, formgroup, forminput, formlabel, formicon } = FormVariants()
const { opacityenter, opacityenterto, opacityfrom, opacityleave, opacityleavefrom, opacityleaveto } = OpacityVariants()
const { ordercontent, orderwrapper, ordertitle, orderguide, orderfilter, ordertooltip, orderoverflow, ordertable, orderthead, ordertbody, orderrow, ordericon, orderstatus, ordersteps, orderaction } = OrderVariants()

const people = [
  { name: 'Todas categorias' },
  { name: 'Pendente' },
  { name: 'Preparação' },
  { name: 'Entrega' },
  { name: 'Concluído' },
  { name: 'Cancelado' },
]

const orderStatus = {
  pending: 'Pendente',
  processing: 'Processando',
  delivering: 'Entrega',
  delivered: 'Concluído',
  canceled: 'Cancelado',
}

export const OrderPage = () => {
  const { data: order } = useQuery({ queryKey: ['order'], queryFn: OrderApi })
  const [selected, setSelected] = useState(people[0])
  return (
    <div className={ordercontent()}>
      <div className={orderwrapper()}>
        <h1 className={ordertitle()}>Pedidos</h1>
        <div className={orderguide()}>
          <div className={orderfilter()}>
            <Form className={formcontent({ display: 'row' })}>
              <div className={formgroup()}>
                <input className={forminput()} type='text' id='id' placeholder=' ' />
                <label className={formlabel()} htmlFor='id'>Identificador</label>
              </div>
              <div className={formgroup()}>
                <input className={forminput()} type='text' id='client' placeholder=' ' />
                <label className={formlabel()} htmlFor='client'>Nome cliente</label>
              </div>
              <div className={formgroup()}>
                <Listbox value={selected} onChange={setSelected}>
                  <Listbox.Button className={'flex items-center justify-between w-full h-12 px-4 rounded-md border border-in-stone hover:border-in-white focus:border-in-cyan bg-transparent focus:outline-none transition ease-in-out duration-300'}>
                    <span>{selected.name}</span>
                    <ChevronsUpDownIcon className="size-4 shrink-0" aria-hidden="true" />
                  </Listbox.Button>
                  <Transition as={Fragment}
                    enter={opacityenter()} enterFrom={opacityfrom()} enterTo={opacityenterto()}
                    leave={opacityleave()} leaveFrom={opacityleavefrom()} leaveTo={opacityleaveto()}>
                    <Listbox.Options className="absolute right-0 w-full flex flex-col p-2 mt-2 rounded-md shadow-lg bg-in-slate focus:outline-none">
                      {people.map((person, personIdx) => (
                        <Listbox.Option key={personIdx} className="group flex items-center gap-2 p-2 rounded-md hover:bg-in-cyan hover:text-in-dark focus:outline-none transition ease-in-out duration-300" value={person}>
                          <CheckIcon className="size-4 shrink-0 invisible ui-selected:visible text-in-cyan group-hover:text-in-dark" />
                          <span>{person.name}</span>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </Listbox>
              </div>
              <button className={btnaction({ color: 'inherit' })} type="submit">
                <FilterIcon className={formicon()} />
                <span>Filtrar resultados</span>
              </button>
              <button className={btnaction({ color: 'inherit' })} type="submit">
                <FilterXIcon className={formicon()} />
                <span>Remover filtros</span>
              </button>
            </Form>
          </div>
          <div className={orderoverflow()}>
            <table className={ordertable()}>
              <thead className={orderthead()}>
                <tr className={orderrow()}>
                  <th scope='col'>Dados</th>
                  <th scope='col'>Identificador</th>
                  <th scope='col'>Nome do cliente</th>
                  <th scope='col'>Entrada</th>
                  <th scope='col'>Categoria</th>
                  <th scope='col'>Total</th>
                  <th scope='col'>Etapas</th>
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
                    <td>{data.customerName}</td>
                    <td>{formatDistanceToNow(data.createdAt, { locale: ptBR, addSuffix: true })}</td>
                    <td><span className={orderstatus({ color: data.status })}>{orderStatus[data.status]}</span></td>
                    <td>{data.total.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })}</td>
                    <td>
                      <div className={ordersteps()}>
                        <button className={orderaction({ color: 'delivered' })}>
                          <ThumbsUpIcon className={ordericon()} aria-hidden={true} />
                          <p className={ordertooltip({ color: 'delivered' })}>Aprovar</p>
                        </button>
                        <button className={orderaction({ color: 'canceled' })}>
                          <ThumbsDownIcon className={ordericon()} aria-hidden={true} />
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
