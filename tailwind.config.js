/** @type {import('tailwindcss').Config} */
import headlessuiPlugin from '@headlessui/tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'in-amber': '#fbbf24',
        'in-blue': '#60a5fa',
        'in-cyan': '#8be9fd',
        'in-dark': '#282a36',
        'in-emerald': '#34d399',
        'in-fuchsia': '#e879f9',
        'in-green': '#4ade80',
        'in-indigo': '#818cf8',
        'in-lime': '#bef264',
        'in-orange': '#fb923c',
        'in-pink': '#f472b6',
        'in-purple': '#c084fc',
        'in-red': '#f87171',
        'in-rose': '#fb7185',
        'in-sky': '#7dd3fc',
        'in-slate': '#2b2d39',
        'in-stone': '#44475a',
        'in-teal': '#5eead4',
        'in-violet': '#a78bfa',
        'in-white': '#f8f8f2',
        'in-yellow': '#fde047',
        'in-zinc': '#a1a1aa',
      }
    }
  },
  plugins: [
    headlessuiPlugin
  ],
}