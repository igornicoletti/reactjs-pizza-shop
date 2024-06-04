import { PaginationVariants } from '../styles'
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from 'lucide-react'

const { pagingcontent, pagingwrapper, paginggroup, pagingaction, pagingicon } = PaginationVariants()

type Props = {
  pageIndex: number
  totalCount: number
  peerPage: number
  handlePagination: (pageIndex: number) => Promise<void> | void
}

export const PaginationComponent = ({ pageIndex, totalCount, peerPage, handlePagination }: Props) => {
  const pages = Math.ceil(totalCount / peerPage) || 1

  return (
    <div className={pagingcontent()}>
      <p><small>Total de <b>{totalCount}</b> pedidos</small></p>
      <div className={pagingwrapper()}>
        <p><small>Página <b>{pageIndex + 1}</b> de <b>{pages}</b></small></p>
        <div className={paginggroup()}>
          <button className={pagingaction()} disabled={pageIndex === 0} onClick={() => handlePagination(0)}>
            <ChevronsLeftIcon className={pagingicon()} aria-hidden={true} />
          </button>
          <button className={pagingaction()} disabled={pageIndex === 0} onClick={() => handlePagination(pageIndex - 1)}>
            <ChevronLeftIcon className={pagingicon()} aria-hidden={true} />
          </button>
          <button className={pagingaction()} disabled={pages <= pageIndex + 1} onClick={() => handlePagination(pageIndex + 1)}>
            <ChevronRightIcon className={pagingicon()} aria-hidden={true} />
          </button>
          <button className={pagingaction()} disabled={pages <= pageIndex + 1} onClick={() => handlePagination(pages - 1)}>
            <ChevronsRightIcon className={pagingicon()} aria-hidden={true} />
          </button>
        </div>
      </div>
    </div>
  )
}