import { Fragment } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Listbox, Transition } from '@headlessui/react'
import { Form, useSearchParams } from 'react-router-dom'
import { CheckIcon, ChevronsUpDownIcon, FilterIcon, FilterXIcon } from 'lucide-react'

import { OrderParamsProps } from '../types'
import { FormVariants, OpacityVariants } from '../styles'

const { opacityenter, opacityenterto, opacityfrom, opacityleave, opacityleavefrom, opacityleaveto } = OpacityVariants()
const { formcontent, formgroup, forminput, formlabel, formlist, formoptions, formoption, formselected, formaction, formicon } = FormVariants()

export const FilterComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const { register, handleSubmit, reset, control } = useForm<OrderParamsProps>({
    defaultValues: {
      orderId: orderId ?? '',
      customerName: customerName ?? '',
      status: status ?? 'all'
    }
  })

  const handleSearchFilter = ({ orderId, customerName, status }: OrderParamsProps) => {
    setSearchParams((state) => {
      orderId ? state.set('orderId', orderId) : state.delete('orderId')
      customerName ? state.set('customerName', customerName) : state.delete('customerName')
      status ? state.set('status', status) : state.delete('status')
      state.set('page', '1')
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
    <Form className={formcontent({ display: 'row' })} onSubmit={handleSubmit(handleSearchFilter)}>
      <div className={formgroup()}>
        <input className={forminput()} type='text' id='orderId' placeholder=' ' {...register('orderId')} />
        <label className={formlabel()} htmlFor='orderId'>Identificador</label>
      </div>
      <div className={formgroup()}>
        <input className={forminput()} type='text' id='customerName' placeholder=' ' {...register('customerName')} />
        <label className={formlabel()} htmlFor='customerName'>Nome do cliente</label>
      </div>
      <div className={formgroup()}>
        <Controller name={'status'} control={control} render={({ field: { name, value, onChange } }) => (
          <Listbox name={name} defaultValue={'all'} value={value} onChange={onChange}>
            <Listbox.Label className={formlabel()}>Status</Listbox.Label>
            <Listbox.Button className={formlist()}>
              <span>{value}</span>
              <ChevronsUpDownIcon className={formicon()} aria-hidden="true" />
            </Listbox.Button>
            <Transition as={Fragment} enter={opacityenter()} enterFrom={opacityfrom()} enterTo={opacityenterto()} leave={opacityleave()} leaveFrom={opacityleavefrom()} leaveTo={opacityleaveto()}>
              <Listbox.Options className={formoptions()}>
                <Listbox.Option className={formoption()} value={'all'}>
                  <CheckIcon className={formselected()} />
                  <span>Todos status</span>
                </Listbox.Option>
                <Listbox.Option className={formoption()} value={'pending'}>
                  <CheckIcon className={formselected()} />
                  <span>Pendente</span>
                </Listbox.Option>
                <Listbox.Option className={formoption()} value={'processing'}>
                  <CheckIcon className={formselected()} />
                  <span>Preparação</span>
                </Listbox.Option>
                <Listbox.Option className={formoption()} value={'delivering'}>
                  <CheckIcon className={formselected()} />
                  <span>Entrega</span>
                </Listbox.Option>
                <Listbox.Option className={formoption()} value={'delivered'}>
                  <CheckIcon className={formselected()} />
                  <span>Concluído</span>
                </Listbox.Option>
                <Listbox.Option className={formoption()} value={'canceled'}>
                  <CheckIcon className={formselected()} />
                  <span>Cancelado</span>
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </Listbox>
        )}>
        </Controller>
      </div>
      <button className={formaction()} type="submit">
        <FilterIcon className={formicon()} />
        <span>Filtrar pedidos</span>
      </button>
      <button className={formaction()} onClick={handleClearFilter}>
        <FilterXIcon className={formicon()} />
        <span>Limpar filtros</span>
      </button>
    </Form>
  )
}