// todo: responsive layout
// todo: add styles
// todo: add lazy loading of images
// todo: tests

import withApollo from '../../lib/apollo'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { NoResults } from '../../components/NoResults'
import { Pagination } from '../../components/Pagination'
import { MovieList } from '../../components/MovieList'
import { TopBar } from "../../components/TopBar";
import { CONST } from '../../constants'
import { GET_MOVIES } from '../../schemas'
import { LinearProgress } from '@rmwc/linear-progress'
import { getPageNumber, isPageNumberInRange } from '../../services/search.service'

const Page = () => {

  const router = useRouter()
  const { searchterm, page } = router.query as { searchterm: string, page: string }

  if (!isPageNumberInRange(page)) return <NoResults message={CONST.PAGE_OUT_RANGE}/>

  // Execute graphql query to search movies
  const { loading, error, data } = useQuery(GET_MOVIES, {
    variables: {searchterm, page: getPageNumber(page)},
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <LinearProgress/>
  if (error) return <NoResults message={error.message}/>
  if (data) {
    console.log('data', data)
    const { totalPages, page, results } = data.allMovies
    const { images } = data.configuration
    if (!isPageNumberInRange(page, totalPages)) return <NoResults message={CONST.PAGE_OUT_RANGE}/>
    if (totalPages === 0) return <NoResults message={CONST.NO_RESULTS}/>
    return (
      <>
        <TopBar title={'Movies Search Results'} showBackBtn={true} showHomeBtn={true} />
        <MovieList listData={results} imageData={images}/>
        <Pagination
          page={page}
          totalPages={totalPages}
          searchterm={searchterm}
          getPageNumber={getPageNumber}
        />
      </>
    )
  }
}

export default withApollo({ ssr: true })(Page)
