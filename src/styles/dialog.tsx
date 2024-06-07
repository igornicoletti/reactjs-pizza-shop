import { tv } from 'tailwind-variants'

export const DialogVariants = tv({
  slots: {
    dialogcontent: 'relative z-10',
    dialogbackdrop: 'fixed inset-0 bg-black/25',
    dialogdialog: 'fixed inset-0 overflow-y-auto',
    dialogwrapper: 'flex min-h-full items-center justify-center p-4',
    dialogpanel: 'relative w-full max-w-5xl mx-auto p-4 rounded shadow-lg bg-in-slate',
    dialogguide: 'w-full flex flex-col gap-8',
    dialoghead: 'w-full flex flex-col gap-4',
    dialogtitle: 'text-xl md:text-2xl font-medium',
    dialogdescript: 'font-medium text-in-cyan',
    dialogoverflow: 'overflow-x-auto',
    dialogtable: 'min-w-full divide-y-2 divide-in-dark',
    dialogthead: 'text-right',
    dialogtbody: 'divide-y-2 divide-in-dark text-right',
    dialogtfoot: '*:whitespace-nowrap *:p-4 *:pt-6 uppercase text-right',
    dialogrow: '*:whitespace-nowrap *:px-4 *:py-3 first:*:text-left',
    dialogclose: 'absolute right-0 top-0 p-4 text-in-white hover:text-in-cyan focus:outline-none transition ease-in-out duration-300',
    dialogicon: 'size-4 shrink-0',
  }
})