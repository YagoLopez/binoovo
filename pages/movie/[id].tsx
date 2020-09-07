import withApollo from '../../lib/apollo'
import { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { NoResults } from '../../components/NoResults'
import { GET_MOVIE } from '../../schemas'
import { LinearProgress } from '@rmwc/linear-progress'
import {
  Card,
  CardActionButtons,
  CardActionIcon,
  CardActionIcons,
  CardActions,
  CardPrimaryAction,
} from '@rmwc/card'
import { Typography } from '@rmwc/typography'
import { Tooltip } from '@rmwc/tooltip'
import { Button } from '@rmwc/button'
import { TopBar } from '../../components/TopBar'
import { getMovieDetailUrl, getVideoUrl, onAddFavorite, onClickMovieDetail } from "../../services/movie.service";
import { MovieImage } from '../../components/movie/MovieImage'
import { MovieRevenue } from '../../components/movie/MovieRevenue'
import { MovieDialog } from '../../components/movie/MovieDialog'
import { WatchYouTubeVideo } from '../../components/movie/WatchYouTubeVideo'
import { CONST } from '../../constants'
import css from '../../public/styles.module.css'

const MovieDetail = () => {
  const router = useRouter()
  const { id } = router.query as { id: string; asPath: string }
  const [ isDialogOpen, setDialogOpen ] = useState(false)

  // Executes qraphql query to get movie details by id
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id },
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <LinearProgress />
  if (error) return <NoResults message={error.message} />

  if (data) {
    const { baseUrl, posterSizes } = data.configuration.images
    const {
      overview,
      posterPath,
      releaseDate,
      title,
      videos,
      revenue,
      popularity,
    } = data.movie

    return (
      <>
        <TopBar
          title={CONST.MOVIE_DETAILS_TITLE}
          showBackBtn={true}
          showHomeBtn={true}
        />
        <div className={css.movieDetailPage}>
          <Card className="movieCard">
            <CardPrimaryAction>
              <MovieImage
                data={{ id, title, posterPath, baseUrl, posterSizes }}
              />
              <Tooltip content={CONST.TOOLTIP_DETAIL_INFO} align="topRight">
                <div
                  className={css.movieCardContent}
                  onClick={() => onClickMovieDetail(id, title)}>
                  <Typography use="headline6" tag="h2">
                    { title }
                  </Typography>
                  <Typography
                    use="subtitle2"
                    tag="h3"
                    theme="textSecondaryOnBackground"
                    className={css.movieCardSubtitle}>
                    Release date: { releaseDate }
                  </Typography>
                  <Typography
                    use="subtitle2"
                    tag="h3"
                    theme="textSecondaryOnBackground"
                    className={css.movieCardSubtitle}>
                    Popularity: { popularity } %
                  </Typography>
                  <MovieRevenue revenue={revenue} />
                  <Typography
                    use="body1"
                    tag="div"
                    theme="textSecondaryOnBackground">
                    { overview }
                    <div>is dialog open: {isDialogOpen.toString()}</div>
                    <div>youtube url: {JSON.stringify(videos[0], null, 2)}</div>
                  </Typography>
                </div>
              </Tooltip>
            </CardPrimaryAction>
            <CardActions>
              <CardActionButtons>
                {/*<WatchYouTubeVideo videoId={videos[0]?.key} />*/}
                <Button raised onClick={() => setDialogOpen(true)}>
                  Watch Video
                </Button>
                <Button raised onClick={() => setDialogOpen(true)}>
                  Open Detail Dialog
                </Button>
              </CardActionButtons>
              <CardActionButtons></CardActionButtons>
              <CardActionIcons>
                <CardActionIcon
                  onIcon="favorite"
                  icon="favorite_border"
                  onClick={onAddFavorite}
                />
              </CardActionIcons>
            </CardActions>
          </Card>
        </div>
        {
          (videos?.length > 0) &&
            <MovieDialog
              open={isDialogOpen}
              title={CONST.DIALOG.VIDEO}
              onSetDialogOpen={setDialogOpen}
              url={getVideoUrl(videos[0].key)}>
            </MovieDialog>
        }
      </>
    )
  }
}

export default withApollo({ ssr: true })(MovieDetail)
