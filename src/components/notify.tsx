import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

import { NotifyProps } from '../context/notify'
import { NotifyVariants, TranslateVariants } from '../styles/variants'

const { notifycontent, notifywrapper, notifypanel, notifytitle } = NotifyVariants()
const { translateenter, translatefrom, translateenterto, translateleave, translateleavefrom, translateleaveto } = TranslateVariants()

type Props = {
  notify: NotifyProps
}

export const NotifyComponent = ({ notify }: Props) => {
  return (
    <div className={notifycontent()}>
      <div className={notifywrapper()}>
        <Transition as={Fragment} show={notify.expand}
          enter={translateenter()} enterFrom={translatefrom()} enterTo={translateenterto()}
          leave={translateleave()} leaveFrom={translateleavefrom()} leaveTo={translateleaveto()}>
          <div className={notifypanel(notify.status === 'success' ? { color: 'success' } : { color: 'error' })}>
            <p className={notifytitle()}>{notify.message}</p>
          </div>
        </Transition>
      </div>
    </div>
  )
}