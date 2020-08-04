import withApollo from '../../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { NoResults } from "../../components/NoResults";
import { GET_MOVIE } from "../../schemas";
import { LinearProgress } from '@rmwc/linear-progress'
import {
  Card,
  CardActionButton,
  CardActionButtons, CardActionIcon,
  CardActionIcons,
  CardActions,
  CardMedia,
  CardPrimaryAction
} from '@rmwc/card'
import { Typography } from '@rmwc/typography'
import styles from '../../public/styles.module.css'
import { TopBar } from '../../components/TopBar'


const MovieDetail = () => {

  const router = useRouter()
  const { id } = router.query as { id: string, asPath: string }

  const getImageUrl = (baseUrl: string, imgSize: string, posterPath: string): string => {
    if (!posterPath) return ''
    return baseUrl + imgSize + posterPath
  }

  // Executes qraphql query to get movie details by id
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id },
    notifyOnNetworkStatusChange: true
  });

  if (loading) return <LinearProgress/>
  if (error) return <NoResults message={error.message}/>

  if (data) {
    const { baseUrl, posterSizes } = data.configuration.images
    const { genres, overview, posterPath, releaseDate, title, videos } = data.movie

    return (
      <>
        <TopBar title={'Movie Details'} showBackBtn={true} showHomeBtn={true}/>
        <div className={styles.movieDetailPage}>
          <Card style={{ width: '25rem' }}>
            <CardPrimaryAction>
              <CardMedia
                square
                style={{backgroundImage: `url(${getImageUrl(baseUrl, posterSizes[2], posterPath)})`}}
              />
              <div style={{ padding: '0 1rem 1rem 1rem' }}>
                <Typography use="headline6" tag="h2">{ title }</Typography>
                <Typography
                  use="subtitle2"
                  tag="h3"
                  theme="textSecondaryOnBackground"
                  style={{ marginTop: '-1rem' }}
                >
                  Release date: { releaseDate }
                </Typography>
                <Typography
                  use="body1"
                  tag="div"
                  theme="textSecondaryOnBackground"
                >
                  { overview }
                </Typography>
              </div>
            </CardPrimaryAction>
            <CardActions>
              <CardActionButtons>
                <CardActionButton>Read</CardActionButton>
                <CardActionButton>Bookmark</CardActionButton>
              </CardActionButtons>
              <CardActionIcons>
                <CardActionIcon onIcon="favorite" icon="favorite_border" />
                <CardActionIcon icon="share" />
                <CardActionIcon icon="more_vert" />
              </CardActionIcons>
            </CardActions>
          </Card>
        </div>
      </>
    )
  }
}

export default withApollo({ ssr: true })(MovieDetail)
