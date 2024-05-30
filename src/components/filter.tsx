import { Form } from 'react-router-dom'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronsUpDownIcon, FilterIcon, FilterXIcon } from 'lucide-react'

import { BtnVariants, FormVariants, OpacityVariants } from '../styles/variants'

const { btnaction } = BtnVariants()
const { formcontent, formgroup, forminput, formlabel, formlist, formoptions, formoption, formselected, formicon } = FormVariants()
const { opacityenter, opacityenterto, opacityfrom, opacityleave, opacityleavefrom, opacityleaveto } = OpacityVariants()

const people = [
  { name: 'Status' },
  { name: 'Pendente' },
  { name: 'Preparação' },
  { name: 'Entrega' },
  { name: 'Concluído' },
  { name: 'Cancelado' },
]

export const FilterComponent = () => {
  const [selected, setSelected] = useState(people[0])

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
            {selected.name !== 'Status' ? 'Status' : ''}
          </Listbox.Label>
          <Listbox.Button className={formlist()}>
            <span>{selected.name}</span>
            <ChevronsUpDownIcon className={formicon()} aria-hidden="true" />
          </Listbox.Button>
          <Transition as={Fragment}
            enter={opacityenter()} enterFrom={opacityfrom()} enterTo={opacityenterto()}
            leave={opacityleave()} leaveFrom={opacityleavefrom()} leaveTo={opacityleaveto()}>
            <Listbox.Options className={formoptions()}>
              {people.map((person, personIdx) => (
                <Listbox.Option key={personIdx} className={formoption()} value={person}>
                  <CheckIcon className={formselected()} />
                  <span>{person.name}</span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
      <button className={btnaction({ color: 'inherit' })} type="submit">
        <FilterIcon className={formicon()} />
        <span>Filtrar pedidos</span>
      </button>
      <button className={btnaction({ color: 'inherit' })} type="submit">
        <FilterXIcon className={formicon()} />
        <span>Limpar filtros</span>
      </button>
    </Form>
  )
}