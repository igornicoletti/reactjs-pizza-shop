import { tv } from 'tailwind-variants'

export const ToastVariants = tv({
  slots: {
    toastcontent: 'pointer-events-none fixed inset-0 flex items-end sm:items-start sm:px-6 sm:py-10 p-6 z-50',
    toastwrapper: 'w-full flex flex-col gap-4 items-center sm:items-end',
    toastpanel: 'pointer-events-auto relative min-w-96 max-w-md flex flex-col gap-1 p-4 pr-6 rounded shadow-md bg-in-slate border-b-4',
    toasttitle: 'font-medium',
    toastinfo: 'font-medium text-sm',
    toastaction: 'absolute top-0 right-0 p-2 group',
    toasticon: 'size-4 shrink-0 text-in-white/50 group-hover:text-in-white transition ease-in-out duration-300',
  },
  variants: {
    color: {
      info: {
        toastpanel: 'border-b-in-cyan'
      },
      danger: {
        toastpanel: 'border-b-in-red'
      },
      success: {
        toastpanel: 'border-b-in-green'
      },
      warning: {
        toastpanel: 'border-b-in-yellow'
      }
    }
  }
})