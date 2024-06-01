import { tv } from 'tailwind-variants'

export const PaginationVariants = tv({
  slots: {
    pagingcontent: 'flex flex-col-reverse sm:flex-row items-end sm:items-center justify-between gap-2 -mt-2',
    pagingwrapper: 'flex items-center gap-4',
    paginggroup: 'flex items-center gap-1',
    pagingaction: 'p-2 rounded border border-in-stone hover:border-in-cyan disabled:hover:border-in-stone disabled:cursor-not-allowed focus:outline-none transition ease-in-out duration-300',
    pagingicon: 'size-4 shrink-0',
  }
})