import { tv } from 'tailwind-variants'

export const ModalVariants = tv({
  slots: {
    modalcontent: 'relative z-10',
    modalbackdrop: 'fixed inset-0 bg-black/25',
    modaldialog: 'fixed inset-0 overflow-y-auto',
    modalwrapper: 'flex min-h-full items-center justify-center p-4',
    modalpanel: 'relative w-full max-w-5xl mx-auto p-4 rounded shadow-lg bg-in-slate',
    modalguide: 'w-full flex flex-col gap-6',
    modalhead: 'w-full flex flex-col gap-2',
    modaltitle: 'text-2xl md:text-3xl font-semibold',
    modaldescript: 'md:text-lg text-in-cyan',
    modaloverflow: 'overflow-x-auto',
    modaltable: 'min-w-full divide-y-2 divide-in-dark',
    modalthead: 'text-right',
    modaltbody: 'divide-y-2 divide-in-dark text-right',
    modaltfoot: '*:whitespace-nowrap *:p-4 *:pt-6 uppercase text-right',
    modalrow: '*:whitespace-nowrap *:px-4 *:py-3 first:*:text-left',
    modalclose: 'absolute right-0 top-0 p-4 text-in-white hover:text-in-cyan focus:outline-none transition ease-in-out duration-300',
    modalicon: 'size-4 shrink-0',
  }
})