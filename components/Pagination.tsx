import { useRouter } from 'next/router'
import {Button} from '@rmwc/button'
import css from '../public/styles.module.css'
import { useState } from 'react'
import {LinearProgress} from '@rmwc/linear-progress'

export const Pagination = ({ page, totalPages, searchterm, getPageNumber }) => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const isFirstPage = (currentPage: string) => +currentPage <= 1 || currentPage === undefined
  const isLastPage = (currentPage: string, totalPages: string) => +currentPage >= +totalPages

  const goNextPage = (currentPage: string, totalPages: string) => {
    setIsLoading(true)
    if (!isLastPage(currentPage, totalPages)) {
      router.push(`/movies-search/${searchterm}?page=${getPageNumber(currentPage) + 1}`)
    }
  }

  const goPreviousPage = (currentPage: string) => {
    setIsLoading(true)
    if (!isFirstPage(currentPage)) {
      router.push(`/movies-search/${searchterm}?page=${getPageNumber(currentPage) - 1}`)
    }
  }

  return (
    <div className={css.paginationCentered}>
      <div>
        { isLoading && <LinearProgress progress={0} /> }
        <Button
          className={css.paginationBtn}
          raised
          label="Prev Page"
          icon="keyboard_arrow_left"
          onClick={() => goPreviousPage(page)}
          disabled={isFirstPage(page)}
          theme={['secondaryBg', 'onSecondary']}
        />
        <Button
          raised
          className={css.paginationBtn}
          label="Next Page"
          trailingIcon="keyboard_arrow_right"
          onClick={() => goNextPage(page, totalPages)}
          disabled={isLastPage(page, totalPages)}
          theme={['secondaryBg', 'onSecondary']}
        />
      </div>
      <div>
        <div className={css.paginationFooter}>Current page: {page}</div>
        <div className={css.paginationFooter}>Total pages: {totalPages}</div>
      </div>
    </div>
  )
}
