import {MovieListItem} from "./MovieListItem";

export const MovieList = ({ listData, imageData }) =>
  listData.map((movie, index) =>
    <MovieListItem
      key={index}
      movieData={movie}
      baseUrl={imageData.baseUrl}
      imgSize={imageData.posterSizes[0]}
    />
  )
