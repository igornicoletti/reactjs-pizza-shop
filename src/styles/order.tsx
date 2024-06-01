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
    orderrow: '*:whitespace-nowrap *:px-6 *:py-3 first:*:text-center last:*:text-center',
    orderstatus: 'list-disc font-medium',
    ordersteps: 'flex items-center justify-center gap-4',
    orderaction: 'group relative px-2 focus:outline-none transition ease-in-out duration-300',
    ordericon: 'size-4 shrink-0',
    ordertooltip: 'absolute z-10 px-2 py-1 rounded shadow-lg text-xs md:text-sm font-medium left-2/4 -translate-x-2/4 -top-full -translate-y-2/3 group-hover:border-b-2 bg-in-cyan/10 border-in-cyan text-in-white invisible group-hover:visible',
  },
  variants: {
    color: {
      pending: {
        orderstatus: 'marker:text-in-cyan',
        orderaction: 'hover:text-in-cyan',
        ordertooltip: 'border-in-cyan',
      },
      processing: {
        orderstatus: 'marker:text-in-purple',
        orderaction: 'hover:text-in-purple',
        ordertooltip: 'border-in-purple',
      },
      delivering: {
        orderstatus: 'marker:text-in-orange',
        orderaction: 'hover:text-in-orange',
        ordertooltip: 'border-in-orange',
      },
      delivered: {
        orderstatus: 'marker:text-in-green',
        orderaction: 'hover:text-in-green',
        ordertooltip: 'border-in-green',
      },
      canceled: {
        orderstatus: 'marker:text-in-red',
        orderaction: 'hover:text-in-red',
        ordertooltip: 'border-in-red',
      },
    }
  }
})