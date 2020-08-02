import React from 'react'
import { useRouter } from 'next/router'

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
    <>
      <p>
        <button onClick={() => goPreviousPage(page)} disabled={isFirstPage(page)}>
          Previous
        </button>
        <button onClick={() => goNextPage(page, totalPages)} disabled={isLastPage(page, totalPages)}>
          Next
        </button>
      </p>
      <div>
        <div>Current page: {page}</div>
        <div>Total pages: {totalPages}</div>
      </div>
    </>
  )
}
