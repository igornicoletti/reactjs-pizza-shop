import { PaginationVariants } from "../styles/variants"
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react"

const { pagingcontent, pagingwrapper, paginginfo, pagingnumb, paginggroup, pagingaction, pagingicon } = PaginationVariants()

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
      <p className={paginginfo()}>
        Total de <span className={pagingnumb()}>{totalCount}</span> pedidos
      </p>
      <div className={pagingwrapper()}>
        <p className={paginginfo()}>
          Página <span className={pagingnumb()}>{pageIndex + 1}</span>
          de <span className={pagingnumb()}>{pages}</span>
        </p>
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