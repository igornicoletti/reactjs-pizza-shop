import { tv } from 'tailwind-variants'

export const RootVariants = tv({
  slots: {
    rootlayout: 'relative w-full overflow-x-hidden',
    rootcontainer: 'w-full h-full min-h-screen flex flex-col px-6',
  }
})