import { tv } from 'tailwind-variants'

export const MenuVariants = tv({
  slots: {
    menucontent: 'relative z-20',
    menuaction: 'group flex items-center gap-4 font-medium text-lg hover:text-in-cyan focus:outline-none transition ease-in-out duration-300',
    menudownicon: 'size-4 shrink-0 group-aria-[expanded=true]:-rotate-180 transform transition ease-in-out duration-300',
    menuitems: 'absolute right-0 w-72 flex flex-col p-2 mt-2 rounded shadow-lg bg-in-slate focus:outline-none',
    menuitem: 'group flex sm:[&:nth-child(1)]:hidden sm:[&:nth-child(2)]:hidden items-center gap-2 p-2 rounded hover:bg-in-cyan hover:text-in-dark aria-[current=page]:bg-in-cyan aria-[current=page]:text-in-dark focus:outline-none transition ease-in-out duration-300',
    menuicon: 'size-4 shrink-0 -mt-1 text-in-cyan group-hover:text-in-dark group-aria-[current=page]:text-in-dark',
  }
})