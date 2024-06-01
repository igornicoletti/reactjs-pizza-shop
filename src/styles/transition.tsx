import { tv } from 'tailwind-variants'

export const OpacityVariants = tv({
  slots: {
    opacityenter: 'transition ease-out duration-300',
    opacityfrom: 'transform opacity-0',
    opacityenterto: 'transform opacity-100',
    opacityleave: 'transition ease-in duration-200',
    opacityleavefrom: 'transform opacity-100',
    opacityleaveto: 'transform opacity-0',
  }
})

export const ScaleVariants = tv({
  slots: {
    scaleenter: 'transition ease-out duration-300',
    scalefrom: 'transform opacity-0 scale-95',
    scaleenterto: 'transform opacity-100 scale-100',
    scaleleave: 'transition ease-in duration-200',
    scaleleavefrom: 'transform opacity-100 scale-100',
    scaleleaveto: 'transform opacity-0 scale-95',
  }
})

export const TranslateVariants = tv({
  slots: {
    translateenter: 'transition ease-out duration-300',
    translatefrom: 'transform translate-y-16 sm:translate-y-0 sm:translate-x-16',
    translateenterto: 'transform translate-y-0 sm:translate-x-0',
    translateleave: 'transition ease-in duration-200',
    translateleavefrom: 'transform translate-y-0 sm:translate-x-0',
    translateleaveto: 'transform translate-y-16 sm:translate-y-0 sm:translate-x-16',
  }
})