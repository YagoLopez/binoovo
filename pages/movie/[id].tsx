import withApollo from '../../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import {GET_MOVIE} from "../../schemas";
import {NoResults} from "../../components/NoResults";

const MovieDetail = () => {

  const router = useRouter()
  const { id } = router.query as { id: string }

  const { loading, error, data, fetchMore } = useQuery(GET_MOVIE, {
    variables: { id },
    notifyOnNetworkStatusChange: true
  });

  console.log('data', data)

  if (loading) return <div>Loading...</div>
  if (error) return <NoResults message={error.message}/>

  if (data) {
    return (
      <div>
        <code>movie: {JSON.stringify(data.movie)}</code>
      </div>
    )
  }
}

export default withApollo({ ssr: true })(MovieDetail)
