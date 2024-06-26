import { tv } from 'tailwind-variants'

export const DashboardVariants = tv({
  slots: {
    dashcontent: 'flex grow py-8 md:py-16',
    dashwrapper: 'w-full flex flex-col gap-4 md:gap-8',
    dashtitle: 'text-2xl',
    dashguide: 'flex flex-col gap-4',
    dashchart: 'grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-6 gap-4',
    dashcardlt: '2xl:col-span-4 p-4 md:p-6 rounded bg-in-slate',
    dashcardrt: '2xl:col-span-2 p-4 md:p-6 rounded bg-in-slate',
    dashinfo: 'uppercase font-medium pb-4',
  }
})