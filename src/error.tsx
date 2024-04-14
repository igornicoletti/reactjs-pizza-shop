import { tv } from 'tailwind-variants'
import { useRouteError } from 'react-router-dom'

const errorVariants = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-center',
    container: 'w-full max-w-screen-xl mx-auto px-8',
    content: 'flex flex-col items-center text-center gap-8 py-16',
    title: 'font-medium text-3xl',
    status: 'max-w-2xl text-xl',
  }
})

const { base, container, content, title, status } = errorVariants()

export const ErrorPage = () => {
  const error = useRouteError() as Error

  return (
    <div className={base()}>
      <div className={container()}>
        <div className={content()}>
          <p className={title()}>Oops, something went terribly wrong!</p>
          <h1 className={status()}>{error.message || JSON.stringify(error)}</h1>
        </div>
      </div>
    </div>
  )
}