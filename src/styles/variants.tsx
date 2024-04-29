import { tv } from 'tailwind-variants'

export const RootVariants = tv({
  slots: {
    rootlayout: 'relative w-full overflow-x-hidden',
    rootcontainer: 'w-full h-full min-h-screen flex flex-col px-6',
  }
})

export const AuthVariants = tv({
  slots: {
    authcontent: 'flex grow items-center justify-center py-16',
    authwrapper: 'w-full sm:max-w-sm flex flex-col gap-4',
    authtitle: 'text-2xl font-medium',
    authdescript: 'text-center pt-6',
    authlink: 'font-medium underline underline-offset-4 decoration-1 hover:decoration-2 decoration-in-cyan transition ease-in-out duration-300',
  }
})

export const FormVariants = tv({
  slots: {
    formcontent: 'flex flex-col gap-4',
    formgroup: 'relative h-12',
    forminput: 'w-full h-full px-4 rounded-md peer border border-in-stone hover:border-in-white focus:border-in-cyan bg-transparent focus:outline-none invalid:border-in-red hover:invalid:border-in-red focus:invalid:border-in-red transition ease-in-out duration-300',
    formlabel: 'absolute top-3 left-px px-4 bg-in-dark text-in-cyan peer-focus:text-in-cyan peer-placeholder-shown:text-in-white peer-invalid:text-in-red peer-focus:peer-invalid:text-in-red scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 transform -translate-y-5 peer-focus:-translate-y-5 peer-placeholder-shown:translate-y-0 transition ease-in-out duration-300',
    formerror: 'absolute -bottom-2 right-2 px-4 bg-in-dark text-in-white text-xs',
    formaction: 'flex items-center justify-center h-12 py-2 px-6 font-semibold rounded-md border border-in-cyan bg-in-cyan text-in-dark disabled:cursor-not-allowed focus:outline-none transform disabled:scale-100 active:scale-90 transition ease-in-out duration-300',
  }
})

export const HeaderVariants = tv({
  slots: {
    headercontent: 'flex py-8',
    headerwrapper: 'w-full flex items-center justify-between gap-8 font-medium',
    headerlf: 'flex items-center divide-x-2 divide-in-stone gap-6',
    headerlogo: 'size-6 shrink-0',
    headeritems: 'hidden sm:flex items-center gap-6 px-6',
    headeritem: 'flex items-center gap-2 uppercase aria-[current=page]:underline underline-offset-4 aria-[current=page]:decoration-2 decoration-in-cyan focus:outline-none group',
    headericon: 'size-4 shrink-0 group-aria-[current=page]:text-in-cyan',
  }
})

export const MenuVariants = tv({
  slots: {
    menucontent: 'relative z-10',
    menuaction: 'flex items-center gap-2 hover:text-in-cyan focus:outline-none group transition ease-in-out duration-300',
    menudownicon: 'size-4 shrink-0 group-aria-[expanded=true]:-rotate-180 transform transition ease-in-out duration-300',
    menuitems: 'absolute origin-top-right right-0 w-60 flex flex-col gap-2 p-2 mt-2 rounded-md shadow-lg bg-in-slate focus:outline-none',
    menuitem: 'flex sm:[&:nth-child(1)]:hidden sm:[&:nth-child(2)]:hidden items-center gap-2 p-2 rounded-md hover:bg-in-cyan hover:text-in-dark focus:outline-none group transition ease-in-out duration-300',
    menuicon: 'size-4 shrink-0 text-in-cyan group-hover:text-in-dark',
  }
})

export const DashboardVariants = tv({
  slots: {
    dashcontent: 'flex grow py-8 md:py-16',
    dashwrapper: 'w-full flex flex-col gap-4 md:gap-8',
    dashtitle: 'text-3xl',
    dashguide: 'flex flex-col gap-6',
    dashhcards: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6',
    dashhcard: 'flex flex-col p-4 rounded-md shadow-lg border-b-2 border-in-cyan bg-gradient-to-br from-in-slate',
    dashhinfo: 'font-medium pb-2',
    dashvalue: 'text-3xl font-semibold',
    dashdescript: 'text-sm',
  }
})

export const OrderVariants = tv({
  slots: {
    ordercontent: 'flex grow py-8 md:py-16',
    orderwrapper: 'w-full flex flex-col gap-4 md:gap-8',
    ordertitle: 'text-3xl',
    orderguide: 'flex flex-col gap-2',
    orderfilter: 'w-full sm:max-w-sm pb-2',
    orderoverflow: 'overflow-x-auto',
    ordertable: 'min-w-full text-left divide-y-2 divide-in-dark bg-in-slate',
    orderthead: 'lg:border-x-2 border-in-cyan',
    ordertbody: 'divide-y-2 divide-in-dark',
    orderrow: '*:whitespace-nowrap *:px-4 *:py-3 first:*:text-center last:*:text-center',
    orderstatus: 'px-2 py-1 rounded-full text-xs md:text-sm font-medium bg-in-cyan/5 border border-in-cyan text-in-cyan',
    ordersteps: 'flex items-center justify-center gap-2',
    orderaction: 'relative px-2 group hover:text-in-cyan focus:outline-none transition ease-in-out duration-300',
    ordericon: 'size-4 shrink-0',
    ordertooltip: 'absolute z-10 px-2 py-1 rounded-md shadow-lg text-xs md:text-sm font-medium left-2/4 -translate-x-2/4 -top-full -translate-y-2/4 group-hover:border-b-2 border-in-cyan bg-in-cyan/10 text-in-white invisible group-hover:visible',
  },
  variants: {
    color: {
      finished: {
        orderstatus: 'bg-in-green/5 border border-in-green text-in-green',
        orderaction: 'hover:text-in-green',
        ordertooltip: 'border-in-green',
      },
      canceled: {
        orderstatus: 'bg-in-red/5 border border-in-red text-in-red',
        orderaction: 'hover:text-in-red',
        ordertooltip: 'border-in-red',
      },
    }
  }
})

export const PaginationVariants = tv({
  slots: {
    pagingcontent: 'flex flex-col-reverse sm:flex-row items-end sm:items-center justify-between gap-2',
    pagingwrapper: 'flex items-center gap-4',
    paginginfo: 'text-sm',
    pagingnumb: 'font-semibold',
    paginggroup: 'flex items-center gap-1',
    pagingaction: 'p-2 rounded-md border border-in-stone hover:bg-in-slate hover:border-in-cyan hover:text-in-cyan focus:outline-none group transition ease-in-out duration-300',
    pagingicon: 'size-4',
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
    modaltfoot: '*:whitespace-nowrap *:p-4 *:pt-6 uppercase text-right',
    modalrow: '*:whitespace-nowrap *:px-4 *:py-3 first:*:text-left',
    modalclose: 'absolute right-0 top-0 p-4 text-in-white hover:text-in-cyan focus:outline-none transition ease-in-out duration-300',
    modalicon: 'size-4 shrink-0',
  }
})

export const OpacityVariants = tv({
  slots: {
    opacityenter: 'transition ease-out duration-100',
    opacityfrom: 'transform opacity-0',
    opacityenterto: 'transform opacity-100',
    opacityleave: 'transition ease-in duration-75',
    opacityleavefrom: 'transform opacity-100',
    opacityleaveto: 'transform opacity-0',
  }
})

export const ScaleVariants = tv({
  slots: {
    scaleenter: 'transition ease-out duration-100',
    scalefrom: 'transform opacity-0 scale-95',
    scaleenterto: 'transform opacity-100 scale-100',
    scaleleave: 'transition ease-in duration-75',
    scaleleavefrom: 'transform opacity-100 scale-100',
    scaleleaveto: 'transform opacity-0 scale-95',
  }
})
