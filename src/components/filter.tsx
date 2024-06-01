import { Form } from 'react-router-dom'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronsUpDownIcon, FilterIcon, FilterXIcon } from 'lucide-react'

import { FormVariants, OpacityVariants } from '../styles'

const { opacityenter, opacityenterto, opacityfrom, opacityleave, opacityleavefrom, opacityleaveto } = OpacityVariants()
const { formcontent, formgroup, forminput, formlabel, formlist, formoptions, formoption, formselected, formaction, formicon } = FormVariants()

const states = [
  { state: 'Status' },
  { state: 'Pendente' },
  { state: 'Preparação' },
  { state: 'Entrega' },
  { state: 'Concluído' },
  { state: 'Cancelado' }
]

export const FilterComponent = () => {
  const [selected, setSelected] = useState(states[0])

  return (
    <Form className={formcontent({ display: 'row' })}>
      <div className={formgroup()}>
        <input className={forminput()} type='text' id='id' placeholder=' ' />
        <label className={formlabel()} htmlFor='id'>Identificador</label>
      </div>
      <div className={formgroup()}>
        <input className={forminput()} type='text' id='client' placeholder=' ' />
        <label className={formlabel()} htmlFor='client'>Nome do cliente</label>
      </div>
      <div className={formgroup()}>
        <Listbox value={selected} onChange={setSelected}>
          <Listbox.Label className={formlabel()}>
            {selected.state !== 'Status' ? 'Status' : ''}
          </Listbox.Label>
          <Listbox.Button className={formlist()}>
            <span>{selected.state}</span>
            <ChevronsUpDownIcon className={formicon()} aria-hidden="true" />
          </Listbox.Button>
          <Transition as={Fragment} enter={opacityenter()} enterFrom={opacityfrom()} enterTo={opacityenterto()} leave={opacityleave()} leaveFrom={opacityleavefrom()} leaveTo={opacityleaveto()}>
            <Listbox.Options className={formoptions()}>
              {states.map((person, personIdx) => (
                <Listbox.Option key={personIdx} className={formoption()} value={person}>
                  <CheckIcon className={formselected()} />
                  <span>{person.state}</span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
      <button className={formaction()} type="submit">
        <FilterIcon className={formicon()} />
        <span>Filtrar pedidos</span>
      </button>
      <button className={formaction()} type="submit">
        <FilterXIcon className={formicon()} />
        <span>Limpar filtros</span>
      </button>
    </Form>
  )
}