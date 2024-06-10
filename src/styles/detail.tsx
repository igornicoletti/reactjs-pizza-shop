import { tv } from 'tailwind-variants'

export const DetailVariants = tv({
  slots: {
    detailcontent: 'relative z-10',
    detailbackdrop: 'fixed inset-0 bg-black/25',
    detaildialog: 'fixed inset-0 overflow-y-auto',
    detailwrapper: 'flex min-h-full items-center justify-center p-4',
    detailpanel: 'relative w-full max-w-5xl mx-auto p-4 rounded shadow-md bg-in-slate',
    detailguide: 'w-full flex flex-col gap-8',
    detailhead: 'w-full flex flex-col gap-4',
    detailtitle: 'text-xl md:text-2xl font-medium',
    detaildescript: 'font-medium text-in-cyan',
    detailoverflow: 'overflow-x-auto',
    detailtable: 'min-w-full divide-y-2 divide-in-dark',
    detailthead: 'text-right',
    detailtbody: 'divide-y-2 divide-in-dark text-right',
    detailtfoot: '*:whitespace-nowrap *:p-4 *:pt-6 uppercase text-right',
    detailrow: '*:whitespace-nowrap *:px-4 *:py-3 first:*:text-left',
    detailclose: 'absolute right-0 top-0 p-4 text-in-white hover:text-in-cyan focus:outline-none transition ease-in-out duration-300',
    detailicon: 'size-4 shrink-0',
  }
})