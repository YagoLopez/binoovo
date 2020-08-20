import { CardActionButton } from '@rmwc/card'
import { getVideoUrl } from '../../../services/movie.service'

interface YouTubeBtnProp {
  videoId: string
}

export const WatchYouTubeVideo = ({ videoId }: YouTubeBtnProp) => (
  (videoId?.length > 0) &&
  <a href={getVideoUrl(videoId)} target='_blank' rel='noopener'>
    <CardActionButton raised>Watch Video</CardActionButton>
  </a>
)
