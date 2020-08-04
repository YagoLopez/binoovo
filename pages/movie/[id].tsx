import withApollo from '../../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { NoResults } from "../../components/NoResults";
import { GET_MOVIE } from "../../schemas";
import { LinearProgress } from '@rmwc/linear-progress'
import {
  Card,
  CardActionButtons, CardActionIcon,
  CardActionIcons,
  CardActions,
  CardPrimaryAction
} from '@rmwc/card'
import { Typography } from '@rmwc/typography'
import css from '../../public/styles.module.css'
import { TopBar } from '../../components/TopBar'
import { getCardMedia, getVideoBtn, onAddFavorite } from '../../services/movie.service'


const MovieDetail = () => {

  const router = useRouter()
  const { id } = router.query as { id: string, asPath: string }

  // Executes qraphql query to get movie details by id
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id },
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <LinearProgress/>
  if (error) return <NoResults message={error.message}/>

  if (data) {
    const { baseUrl, posterSizes } = data.configuration.images
    const { overview, posterPath, releaseDate, title, videos } = data.movie

    return (
      <>
        <TopBar title={'Movie Details'} showBackBtn={true} showHomeBtn={true}/>
        <div className={css.movieDetailPage}>
          <Card className="movieCard">
            <CardPrimaryAction>
              { getCardMedia(posterPath, baseUrl, posterSizes) }
              <div className={css.movieCardContent}>
                <Typography use="headline6" tag="h2">{ title }</Typography>
                <Typography
                  use="subtitle2"
                  tag="h3"
                  theme="textSecondaryOnBackground"
                  className={css.movieCardSubtitle}>Release date: { releaseDate }</Typography>
                <Typography
                  use="body1"
                  tag="div"
                  theme="textSecondaryOnBackground">{ overview }</Typography>
              </div>
            </CardPrimaryAction>
            <CardActions>
              <CardActionButtons>{ getVideoBtn(videos) }</CardActionButtons>
              <CardActionIcons>
                <CardActionIcon onIcon="favorite" icon="favorite_border" onClick={onAddFavorite} />
              </CardActionIcons>
            </CardActions>
          </Card>
        </div>
      </>
    )
  }
}

export default withApollo({ ssr: true })(MovieDetail)
