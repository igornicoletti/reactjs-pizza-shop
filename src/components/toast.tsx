import { XIcon } from 'lucide-react'
import { Transition } from '@headlessui/react'

import { UseToast } from '../hooks/toast'
import { ToastVariants, TranslateVariants } from '../styles/variants'

const { toastcontent, toastwrapper, toastpanel, toasttitle, toastinfo, toastaction, toasticon } = ToastVariants()
const { translateenter, translatefrom, translateenterto, translateleave, translateleavefrom, translateleaveto } = TranslateVariants()

export const ToastsComponent = () => {
  const { toast, handleHideToast } = UseToast()

  return (
    <div className={toastcontent()}>
      <div className={toastwrapper()}>
        {toast.map((toast) => (
          <Transition key={toast.id} appear={true} show={toast.showing}
            enter={translateenter()} enterFrom={translatefrom()} enterTo={translateenterto()}
            leave={translateleave()} leaveFrom={translateleavefrom()} leaveTo={translateleaveto()}>
            <div className={toastpanel({ color: toast.type })}>
              <p className={toasttitle()}>{toast.title}</p>
              <p className={toastinfo()}>{toast.description}</p>
              <button className={toastaction()} onClick={() => handleHideToast(toast.id)}>
                <XIcon className={toasticon()} />
              </button>
            </div>
          </Transition>
        ))}
      </div>
    </div>
  )
}