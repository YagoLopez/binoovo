// todo: master-detail
// todo: material design
// todo: add styles
// todo: add lazy loading of images
// todo: tests

import { useRouter } from 'next/router'
import withApollo from '../../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { NoResults } from '../../components/NoResults';
import Link from 'next/link';
import {CONST} from "../../constants";
import {Pagination} from "../../components/Pagination";
import {GET_MOVIES} from "../../schemas";

const Page = () => {

  const router = useRouter()
  const { searchterm, page } = router.query as {searchterm: string, page: string}
  const getPageNumber = (page: string): number => !page ? 1 : +page

  const isPageNumberInRange = (pageNumber: string, totalPages?: string): boolean => {
    if (pageNumber) {
      if (+pageNumber < 1) return false
      if (totalPages) return +pageNumber <= +totalPages
    }
    return true
  }

  if (!isPageNumberInRange(page)) return <NoResults message={CONST.PAGE_OUT_RANGE}/>

  const { loading, error, data, fetchMore } = useQuery(GET_MOVIES, {
    variables: {searchterm, page: getPageNumber(page)},
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <div>Loading...</div>
  if (error) return <NoResults message={error.message}/>
  if (data) {
    const { totalPages, page, results } = data.allMovies
    if (!isPageNumberInRange(page, totalPages)) return <NoResults message={CONST.PAGE_OUT_RANGE}/>
    if (totalPages === 0) return <NoResults message={CONST.NO_RESULTS}/>
    return (
      <div>
        {
          results.map((movie, index) => {
            return (
              <p key={index}>
                <code>{JSON.stringify(movie)}</code>
              </p>
            )
          })
        }

        <Pagination
          page={page}
          totalPages={totalPages}
          searchterm={searchterm}
          getPageNumber={getPageNumber}
        />

        <p>
          <Link href="/"><a>⇦ Back to Home Page</a></Link>
        </p>
      </div>
    )
  }
}

export default withApollo({ ssr: true })(Page)
