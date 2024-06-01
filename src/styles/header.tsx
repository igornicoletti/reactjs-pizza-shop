import { tv } from 'tailwind-variants'

export const HeaderVariants = tv({
  slots: {
    headercontent: 'flex py-8',
    headerwrapper: 'w-full flex items-center justify-between gap-8 font-medium',
    headerlf: 'flex items-center divide-x-2 divide-in-stone gap-8',
    headerlogo: 'size-6 shrink-0',
    headeritems: 'hidden sm:flex items-center gap-8 px-6',
    headeritem: 'flex items-center gap-2 uppercase aria-[current=page]:text-in-cyan focus:outline-none group',
    headericon: 'size-4 shrink-0 group-aria-[current=page]:text-in-cyan -mt-1',
  }
})