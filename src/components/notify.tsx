import { Fragment } from 'react'
import { XIcon } from 'lucide-react'
import { Transition } from '@headlessui/react'

import { UseNotify } from '../context/notify'
import { NotifyVariants, TranslateVariants } from '../styles/variants'

const { notifycontent, notifywrapper, notifypanel, notifytitle, notifyinfo, notifyaction, notifyicon } = NotifyVariants()
const { translateenter, translatefrom, translateenterto, translateleave, translateleavefrom, translateleaveto } = TranslateVariants()

export const NotifyComponent = () => {
  const { notify, handleRemoveNotify } = UseNotify()

  return (
    <>
      <div className={notifycontent()}>
        <div className={notifywrapper()}>
          {notify.map((notify) => (
            <Transition as={Fragment} show={true} key={notify.id}
              enter={translateenter()} enterFrom={translatefrom()} enterTo={translateenterto()}
              leave={translateleave()} leaveFrom={translateleavefrom()} leaveTo={translateleaveto()}>
              <div className={notifypanel({ color: notify.type })}>
                <p className={notifytitle()}>{notify.title}</p>
                <p className={notifyinfo()}>{notify.description}</p>
                <button className={notifyaction()} onClick={() => handleRemoveNotify(notify.id)}>
                  <XIcon className={notifyicon()} />
                </button>
              </div>
            </Transition>
          ))}
        </div>
      </div>
    </>
  )
}