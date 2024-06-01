import { tv } from 'tailwind-variants'

export const AuthVariants = tv({
  slots: {
    authcontent: 'flex grow items-center justify-center py-16',
    authwrapper: 'w-full sm:max-w-sm flex flex-col gap-4',
    authtitle: 'text-2xl font-medium',
    authdescript: 'text-center pt-6',
    authlink: 'font-medium underline underline-offset-4 decoration-1 hover:decoration-2 decoration-in-cyan transition ease-in-out duration-300',
  }
})