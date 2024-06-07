import { tv } from 'tailwind-variants'

export const OrderVariants = tv({
  slots: {
    ordercontent: 'flex grow py-8 md:py-16',
    orderwrapper: 'w-full flex flex-col gap-4 md:gap-8',
    ordertitle: 'text-2xl',
    orderguide: 'flex flex-col gap-4',
    orderoverflow: 'overflow-x-auto',
    ordertable: 'w-full text-left divide-y-2 divide-in-dark bg-in-slate',
    orderthead: 'lg:border-x-2 border-in-cyan',
    ordertbody: 'divide-y-2 divide-in-dark',
    ordertfoot: 'px-6 py-8 text-center text-in-stone last:*:pt-2 *:mx-auto',
    ordercol: '*:w-2/12 first:*:w-1/12 last:*:w-1/12',
    orderrow: '*:whitespace-nowrap *:px-6 *:py-3 first:*:text-center last:*:text-center',
    orderstatus: 'flex items-center gap-2',
    orderping: 'rounded-full p-0.5 *:rounded-full *:h-1.5 *:w-1.5 -mt-0.5',
    ordersteps: 'flex items-center justify-center gap-4',
    orderaction: 'group relative px-2 disabled:hidden focus:outline-none transition ease-in-out duration-300',
    ordertooltip: 'absolute z-10 px-2 py-1 rounded shadow-lg text-xs md:text-sm font-medium left-2/4 -translate-x-2/4 -top-full -translate-y-2/3 group-hover:border-b-2 bg-in-cyan/10 border-in-cyan text-in-white invisible group-hover:visible',
    ordericon: 'size-4 shrink-0',
  },
  variants: {
    color: {
      pending: {
        orderping: 'bg-in-cyan/10 *:bg-in-cyan',
        orderaction: 'hover:text-in-cyan',
        ordertooltip: 'border-in-cyan',
        ordericon: 'text-in-cyan',
      },
      processing: {
        orderping: 'bg-in-purple/10 *:bg-in-purple',
        orderaction: 'hover:text-in-purple',
        ordertooltip: 'border-in-purple',
        ordericon: 'text-in-purple',
      },
      delivering: {
        orderping: 'bg-in-yellow/10 *:bg-in-yellow',
        orderaction: 'hover:text-in-yellow',
        ordertooltip: 'border-in-yellow',
        ordericon: 'text-in-yellow',
      },
      delivered: {
        orderping: 'bg-in-green/10 *:bg-in-green',
        orderaction: 'hover:text-in-green',
        ordertooltip: 'border-in-green',
        ordericon: 'text-in-green',
      },
      canceled: {
        orderping: 'bg-in-red/10 *:bg-in-red',
        orderaction: 'hover:text-in-red',
        ordertooltip: 'border-in-red',
        ordericon: 'text-in-red',
      },
    }
  }
})