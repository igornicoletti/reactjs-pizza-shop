import { tv } from 'tailwind-variants'

export const FormVariants = tv({
  slots: {
    formcontent: 'w-full flex flex-col gap-4',
    formgroup: 'w-full relative z-10',
    forminput: 'w-full h-12 px-4 text-left rounded peer border border-in-stone hover:border-in-white focus:border-in-cyan bg-transparent focus:outline-none invalid:border-in-red hover:invalid:border-in-red focus:invalid:border-in-red transition ease-in-out duration-300',
    formlabel: 'absolute top-3 left-px px-4 font-medium bg-in-dark text-in-cyan peer-focus:text-in-cyan peer-placeholder-shown:text-in-white peer-invalid:text-in-red peer-focus:peer-invalid:text-in-red scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 transform -translate-y-5 peer-focus:-translate-y-5 peer-placeholder-shown:translate-y-0 transition ease-in-out duration-300',
    formlist: 'flex items-center justify-between w-full h-12 px-4 rounded border border-in-stone hover:border-in-white focus:border-in-cyan bg-transparent focus:outline-none transition ease-in-out duration-300',
    formoptions: 'absolute right-0 w-full flex flex-col p-2 mt-2 rounded shadow-lg bg-in-slate focus:outline-none',
    formoption: 'group flex items-center gap-2 p-2 rounded hover:bg-in-cyan hover:text-in-dark focus:outline-none transition ease-in-out duration-300',
    formselected: 'size-4 shrink-0 invisible ui-selected:visible text-in-cyan group-hover:text-in-dark',
    formerror: 'absolute -bottom-2 right-2 px-4 bg-in-dark text-in-white text-xs',
    formaction: 'flex items-center justify-center text-nowrap gap-2 h-12 py-2 px-6 font-medium rounded border border-in-cyan disabled:bg-inherit disabled:text-in-white disabled:cursor-not-allowed focus:outline-none transform disabled:scale-100 active:scale-90 transition ease-in-out duration-300',
    formicon: 'size-4 shrink-0 -mt-1',
  },
  variants: {
    display: {
      row: {
        formcontent: 'lg:flex-row'
      }
    },
    color: {
      default: {
        formaction: ' bg-inherit text-in-white hover:bg-in-cyan hover:text-in-dark'
      },
      primary: {
        formaction: ' bg-in-cyan text-in-dark'
      },
    }
  }
})