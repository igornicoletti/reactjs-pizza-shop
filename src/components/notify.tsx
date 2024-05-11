import { XIcon } from 'lucide-react'
import { Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

import { NotifyVariants, TranslateVariants } from '../styles/variants'

const { notifycontent, notifywrapper, notifypanel, notifytitle, notifyinfo, notifyaction, notifyicon } = NotifyVariants()
const { translateenter, translatefrom, translateenterto, translateleave, translateleavefrom, translateleaveto } = TranslateVariants()

type Props = {
  message: string
  description?: string
  status: '' | 'success' | 'error'
}

export const NotifyComponent = ({ message, description, status }: Props) => {
  const [currentNotify, setCurrentNotify] = useState<boolean>(false)

  useEffect(() => {
    if (status) {
      setCurrentNotify(true)
      setTimeout(() => setCurrentNotify(false), 5000)
    }
  }, [status])

  return (
    <>
      {currentNotify && (
        <div className={notifycontent()}>
          <div className={notifywrapper()}>
            <Transition as={Fragment} show={currentNotify}
              enter={translateenter()} enterFrom={translatefrom()} enterTo={translateenterto()}
              leave={translateleave()} leaveFrom={translateleavefrom()} leaveTo={translateleaveto()}>
              <div className={notifypanel(status === 'success' ? { color: 'success' } : { color: 'error' })}>
                <p className={notifytitle()}>{message}</p>
                {description && <p className={notifyinfo()}>{description}</p>}
                <button className={notifyaction()} onClick={() => setCurrentNotify(false)}>
                  <XIcon className={notifyicon()} />
                </button>
              </div>
            </Transition>
          </div>
        </div>
      )}
    </>
  )
}