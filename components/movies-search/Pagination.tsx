import { useRouter } from 'next/router'
import { Button } from '@rmwc/button'
import css from '../../styles/styles.module.css'

export const Pagination = ({ page, totalPages, searchterm, getPageNumber }) => {

  const router = useRouter()
  const isFirstPage = (currentPage: string) => +currentPage <= 1 || currentPage === undefined
  const isLastPage = (currentPage: string, totalPages: string) => +currentPage >= +totalPages

  const goNextPage = (currentPage: string, totalPages: string) => {
    if (!isLastPage(currentPage, totalPages)) {
      router.push(`/movies-search/${searchterm}?page=${getPageNumber(currentPage) + 1}`)
    }
  }

  const goPreviousPage = (currentPage: string) => {
    if (!isFirstPage(currentPage)) {
      router.push(`/movies-search/${searchterm}?page=${getPageNumber(currentPage) - 1}`)
    }
  }

  return (
    <div className={css.paginationCentered}>
      <div>
        {
          !isFirstPage(page) &&
            <Button
              raised
              data-cy="prev-btn"
              className={css.paginationBtn}
              label="Prev Page"
              icon="keyboard_arrow_left"
              onClick={() => goPreviousPage(page)}
              disabled={isFirstPage(page)}
              theme={['secondaryBg', 'onSecondary']}
            />
        }
        {
          !isLastPage(page, totalPages) &&
            <Button
              raised
              data-cy="next-btn"
              className={css.paginationBtn}
              label="Next Page"
              trailingIcon="keyboard_arrow_right"
              onClick={() => goNextPage(page, totalPages)}
              disabled={isLastPage(page, totalPages)}
              theme={['secondaryBg', 'onSecondary']}
            />
        }
      </div>
      <div>
        <div data-cy="current-page" className={css.paginationFooter}>
          Current page: {page}
        </div>
        <div data-cy="total-pages" className={css.paginationFooter}>
          Total pages: {totalPages}
        </div>
      </div>
    </div>
  )
}
