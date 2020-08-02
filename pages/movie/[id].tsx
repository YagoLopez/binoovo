import withApollo from '../../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { NoResults } from "../../components/NoResults";
import { BackHome } from "../../components/BackHome";
import { BackMovieList } from "../../components/BackMovieList";
import { Loading } from "../../components/Loading";
import { GET_MOVIE } from "../../schemas";

const MovieDetail = () => {

  const router = useRouter()
  const { id } = router.query as { id: string }

  const { loading, error, data, fetchMore } = useQuery(GET_MOVIE, {
    variables: { id },
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <Loading/>
  if (error) return <NoResults message={error.message}/>

  if (data) {
    return (
      <div>
        <code>movie: {JSON.stringify(data.movie)}</code>
        <BackMovieList/>
        <BackHome/>
      </div>
    )
  }
}

export default withApollo({ ssr: true })(MovieDetail)
