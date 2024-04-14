import { PaginationVariants } from "../styles/variants"
import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react"

const { pagingcontent, pagingwrapper, paginginfo, pagingnumb, paginggroup, pagingaction, pagingicon } = PaginationVariants()

type Props = {
  pageIndex: number
  totalCount: number
  peerPage: number
}

export const PaginationComponent = ({ pageIndex, totalCount, peerPage }: Props) => {
  const pages = Math.ceil(totalCount / peerPage) || 1

  return (
    <div className={pagingcontent()}>
      <p className={paginginfo()}>Total de <span className={pagingnumb()}>{totalCount}</span> itens</p>
      <div className={pagingwrapper()}>
        <p className={paginginfo()}>Página <span className={pagingnumb()}>{pageIndex + 1}</span> de <span className={pagingnumb()}>{pages}</span></p>
        <div className={paginggroup()}>
          <button className={pagingaction()}>
            <ChevronsLeftIcon className={pagingicon()} aria-hidden='true' />
          </button>
          <button className={pagingaction()}>
            <ChevronLeftIcon className={pagingicon()} aria-hidden='true' />
          </button>
          <button className={pagingaction()}>
            <ChevronRightIcon className={pagingicon()} aria-hidden='true' />
          </button>
          <button className={pagingaction()}>
            <ChevronsRightIcon className={pagingicon()} aria-hidden='true' />
          </button>
        </div>
      </div>
    </div>
  )
}