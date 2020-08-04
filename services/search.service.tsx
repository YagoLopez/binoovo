export const getPageNumber = (page: string): number => !page ? 1 : +page

export const isPageNumberInRange = (pageNumber: string, totalPages?: string): boolean => {
  if (pageNumber) {
    if (+pageNumber < 1) return false
    if (totalPages) return +pageNumber <= +totalPages
  }
  return true
}
