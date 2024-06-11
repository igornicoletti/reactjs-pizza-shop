import { tv } from 'tailwind-variants'

export const CardVariants = tv({
  slots: {
    cardcontent: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4',
    cardcard: 'flex flex-col p-4 rounded bg-in-slate',
    cardinfo: 'font-medium pb-4',
    cardvalue: 'text-xl font-medium',
    carddescript: 'text-sm',
    carddiff: 'font-medium text-in-cyan',
  },
  variants: {
    color: {
      positive: {
        carddiff: 'text-in-green',
      },
      negative: {
        carddiff: 'text-in-red',
      },
    }
  }
})