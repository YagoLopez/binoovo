import { MovieListItem } from './MovieListItem'
import { List, ListGroup } from '@rmwc/list'

export const MovieList = ({ listData, imageData }) =>
  listData.map((movie, index) => (
    <List twoLine avatarList key={index}>
      <ListGroup>
          <MovieListItem
            movieData={movie}
            baseUrl={imageData.baseUrl}
            imgSize={imageData.posterSizes[0]}
          />
      </ListGroup>
    </List>
  ))
