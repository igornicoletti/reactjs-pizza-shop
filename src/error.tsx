import { tv } from 'tailwind-variants'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const errorVariants = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-center',
    container: 'w-full max-w-screen-xl mx-auto px-8',
    content: 'flex flex-col items-center text-center py-16',
    status: 'text-4xl capitalize pb-12',
    title: 'font-medium pb-4',
    info: 'text-sm lg:text-base',
  }
})

const { base, container, content, title, status, info } = errorVariants()

export const ErrorPage = () => {
  const error = useRouteError() as Error

  if (isRouteErrorResponse(error)) {
    return (
      <div className={base()}>
        <div className={container()}>
          <div className={content()}>
            <h1 className={status()}>{error.status} {error.statusText}</h1>
            <p className={title()}>Sorry, we couldn’t find the page you’re looking for.</p>
            <p className={info()}>The page may have been moved or deleted, please check the URL and try again.</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={base()}>
        <div className={container()}>
          <div className={content()}>
            <h1 className={status()}>{error.message || JSON.stringify(error)}</h1>
            <p className={title()}>The heck!</p>
          </div>
        </div>
      </div>
    )
  }
}