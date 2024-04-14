import { tv } from 'tailwind-variants'

export const RootVariants = tv({
  slots: {
    rootlayout: 'relative w-full overflow-x-hidden',
    rootcontainer: 'w-full h-full min-h-screen flex flex-col px-6',
  }
})

export const AuthVariants = tv({
  slots: {
    authcontent: 'flex grow items-center xl:items-start justify-center py-16',
    authwrapper: 'w-full max-w-md flex flex-col gap-12 xl:pt-48',
    authhead: 'flex flex-col items-center gap-2',
    authtitle: 'uppercase text-4xl',
    authdescript: 'md:text-lg',
    authlink: 'underline underline-offset-4 decoration-1 hover:decoration-2 decoration-in-cyan transition ease-in-out duration-200',
  }
})

export const HeaderVariants = tv({
  slots: {
    headercontent: 'flex py-8',
    headerwrapper: 'w-full flex items-center divide-x-2 divide-in-stone gap-8',
    headerlogo: 'size-6 shrink-0',
    headernav: 'flex items-center gap-8 px-8',
    headerlink: 'flex items-center gap-2 uppercase text-in-zinc aria-[current=page]:text-in-white',
    headeraction: 'size-4 shrink-0',
  }
})

export const DashboardVariants = tv({
  slots: {
    dashcontent: 'flex grow py-16',
    dashwrapper: 'w-full flex flex-col gap-8',
    dashtitle: 'text-3xl',
    dashguide: 'flex flex-col',
    dashhcards: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8',
    dashhcard: 'flex flex-col items-end p-6 pb-4 rounded-md border-b-2 border-in-stone bg-gradient-to-t from-in-slate',
    dashhinfo: 'text-in-cyan',
    dashvalue: 'text-3xl pt-6',
    dashdescript: 'text-sm',
  }
})

export const OrderVariants = tv({
  slots: {
    ordercontent: 'flex grow py-16',
    orderwrapper: 'w-full flex flex-col gap-8',
    ordertitle: 'text-3xl',
    orderguide: 'flex flex-col gap-2',
    orderfilter: 'w-full max-w-lg pb-2',
    orderoverflow: 'overflow-x-auto',
    ordertable: 'min-w-full text-left divide-y-4 divide-in-dark bg-in-slate',
    orderthead: 'border-x-2 border-in-cyan text-in-cyan',
    ordertbody: 'divide-y-4 divide-in-dark',
    orderrow: '*:whitespace-nowrap *:p-3 first:*:text-center last:*:text-center',
    orderstatus: 'flex items-center gap-2',
    ordersteps: 'flex items-center justify-center gap-6',
    orderping: 'w-2 h-2 rounded-full bg-in-stone',
    orderaction: 'relative focus:outline-none group',
    ordertooltip: 'absolute z-10 px-2 py-1 rounded-md shadow-lg text-xs left-2/4 -translate-x-2/4 -top-full -translate-y-2/4 group-hover:border-b-2 border-in-cyan bg-in-cyan/10 invisible group-hover:visible',
    ordericon: 'size-5 shrink-0 hover:text-in-cyan transition ease-in-out duration-200',
  },
  variants: {
    color: {
      finished: {
        orderping: 'bg-in-green',
        ordertooltip: 'border-in-green',
        ordericon: 'hover:text-in-green',
      },
      canceled: {
        orderping: 'bg-in-red',
        ordertooltip: 'border-in-red',
        ordericon: 'hover:text-in-red',
      },
    }
  }
})

export const PaginationVariants = tv({
  slots: {
    pagingcontent: 'flex flex-col sm:flex-row items-end sm:items-center justify-between gap-2',
    pagingwrapper: 'flex items-center gap-4',
    paginginfo: 'text-sm md:text-base',
    pagingnumb: 'font-semibold',
    paginggroup: 'flex items-center gap-2',
    pagingaction: 'relative p-2 rounded-md border border-in-stone hover:bg-in-slate hover:border-in-cyan hover:text-in-cyan focus:outline-none transition ease-in-out duration-200 group',
    pagingicon: 'size-5',
  }
})

export const FormVariants = tv({
  slots: {
    formcontent: 'flex flex-col gap-4',
    formgroup: 'relative h-12',
    forminput: 'w-full h-full px-4 rounded-md peer border border-in-stone hover:border-in-white focus:border-in-cyan bg-transparent focus:outline-none invalid:border-in-red hover:invalid:border-in-red focus:invalid:border-in-red transition ease-in-out duration-200',
    formlabel: 'absolute top-3 left-px px-4 bg-in-dark text-in-cyan peer-focus:text-in-cyan peer-placeholder-shown:text-in-white peer-invalid:text-in-red peer-focus:peer-invalid:text-in-red scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 transform -translate-y-5 peer-focus:-translate-y-5 peer-placeholder-shown:translate-y-0 transition ease-in-out duration-200',
    formerror: 'absolute -bottom-2 right-2 px-4 bg-in-dark text-in-white text-xs',
    formaction: 'flex items-center justify-center h-12 py-2 px-6 uppercase rounded-md border border-in-cyan bg-in-cyan text-in-dark disabled:cursor-not-allowed focus:outline-none transform transition ease-in-out duration-200',
  }
})

export const ModalVariants = tv({
  slots: {
    modalcontent: 'relative z-10',
    modalbackdrop: 'fixed inset-0 bg-black/25',
    modaldialog: 'fixed inset-0 overflow-y-auto',
    modalwrapper: 'flex min-h-full items-center justify-center p-4',
    modalpanel: 'relative w-full max-w-5xl mx-auto p-4 rounded-md shadow-lg bg-in-slate',
    modalguide: 'w-full flex flex-col gap-6',
    modalhead: 'w-full flex flex-col gap-2',
    modaltitle: 'text-2xl md:text-3xl font-semibold',
    modaldescript: 'md:text-lg text-in-cyan',
    modaloverflow: 'overflow-x-auto',
    modaltable: 'min-w-full divide-y-2 divide-in-dark',
    modalthead: 'text-right',
    modaltbody: 'divide-y-2 divide-in-dark text-right',
    modaltfoot: '*:whitespace-nowrap *:p-3 *:pt-6 uppercase text-right',
    modalrow: '*:whitespace-nowrap *:p-3 first:*:text-left',
    modalclose: 'absolute right-0 top-0 p-4 text-in-zinc hover:text-in-white focus:outline-none transition ease-in-out duration-200',
    modalicon: 'size-5 shrink-0',
  }
})

export const TransitionVariants = tv({
  slots: {
    jumpenter: 'ease-out duration-300',
    jumpfrom: 'opacity-0',
    jumpenterto: 'opacity-100',
    jumpleave: 'ease-in duration-200',
    jumpleavefrom: 'opacity-100',
    jumpleaveto: 'opacity-0',
    jumpchildenter: 'ease-out duration-300',
    jumpchildfrom: 'opacity-0 translate-y-8',
    jumpchildenterto: 'opacity-100 translate-y-0',
    jumpchildleave: 'ease-in duration-200',
    jumpchildleavefrom: 'opacity-100 scale-100',
    jumpchildleaveto: 'opacity-0 scale-95',
  }
})