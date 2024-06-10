import { Fragment } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Listbox, Transition } from '@headlessui/react'
import { Form, useSearchParams } from 'react-router-dom'
import { CheckIcon, ChevronsUpDownIcon, FilterIcon, FilterXIcon } from 'lucide-react'

import { FilterProps } from '../../../types'
import { FormVariants, OpacityVariants } from '../../../styles'

const { opacityenter, opacityenterto, opacityfrom, opacityleave, opacityleavefrom, opacityleaveto } = OpacityVariants()
const { formcontent, formgroup, forminput, formlabel, formlist, formoptions, formoption, formselected, formaction, formicon } = FormVariants()

const statusData = [{ id: 'all', name: 'Todos status' }, { id: 'pending', name: 'Pendente' }, { id: 'processing', name: 'Preparo' }, { id: 'delivering', name: 'Entrega' }, { id: 'delivered', name: 'Concluído' }, { id: 'canceled', name: 'Cancelado' }]

export const OrderPageFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const status = searchParams.get('status')
  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')

  const { register, handleSubmit, reset, control } = useForm<FilterProps>({
    defaultValues: { orderId: orderId ?? '', customerName: customerName ?? '', status: status ?? 'all' }
  })

  const handleSubmitFilter = ({ orderId, customerName, status }: FilterProps) => {
    setSearchParams((state) => {
      state.set('page', '1')
      orderId ? state.set('orderId', orderId) : state.delete('orderId')
      customerName ? state.set('customerName', customerName) : state.delete('customerName')
      status ? state.set('status', status) : state.delete('status')
      return state
    })
  }

  const handleClearFilter = () => {
    setSearchParams((state) => {
      state.delete('orderId')
      state.delete('customerName')
      state.delete('status')
      state.set('page', '1')
      return state
    })
    reset({ orderId: '', customerName: '', status: 'all' })
  }

  return (
    <Form className={formcontent({ display: 'row' })} onSubmit={handleSubmit(handleSubmitFilter)}>
      <div className={formgroup()}>
        <input className={forminput()} type={'text'} id={'orderId'} placeholder={' '} {...register('orderId')} />
        <label className={formlabel()} htmlFor={'orderId'}>Identificador</label>
      </div>
      <div className={formgroup()}>
        <input className={forminput()} type={'text'} id={'customerName'} placeholder={' '} {...register('customerName')} />
        <label className={formlabel()} htmlFor={'customerName'}>Nome do cliente</label>
      </div>
      <div className={formgroup()}>
        <Controller control={control} name={'status'} render={({ field: { name, value, onChange } }) => (
          <Listbox name={name} value={value} onChange={onChange}>
            {value !== 'all' && <Listbox.Label className={formlabel()} htmlFor={name}>Status</Listbox.Label>}
            <Listbox.Button className={formlist()} id={name}>
              <span>{statusData.find((data) => data.id === value)?.name}</span>
              <ChevronsUpDownIcon className={formicon()} aria-hidden='true' />
            </Listbox.Button>
            <Transition as={Fragment} enter={opacityenter()} enterFrom={opacityfrom()} enterTo={opacityenterto()} leave={opacityleave()} leaveFrom={opacityleavefrom()} leaveTo={opacityleaveto()}>
              <Listbox.Options className={formoptions()}>
                {statusData.map((data) => (
                  <Listbox.Option className={formoption()} key={data.id} value={data.id}>
                    <CheckIcon className={formselected()} />
                    <span>{data.name}</span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox>
        )} />
      </div>
      <button className={formaction({ color: 'default' })} type='submit'>
        <FilterIcon className={formicon()} />
        <span>Filtrar pedidos</span>
      </button>
      <button className={formaction({ color: 'default' })} type='submit' onClick={handleClearFilter}>
        <FilterXIcon className={formicon()} />
        <span>Limpar filtros</span>
      </button>
    </Form>
  )
}