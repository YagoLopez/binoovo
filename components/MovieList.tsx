import {MovieItem} from "./MovieItem";

export const MovieList = ({ listData, imageData }) =>
  listData.map((movie, index) =>
    <MovieItem
      key={index}
      movieData={movie}
      baseUrl={imageData.baseUrl}
      imgSize={imageData.posterSizes[0]}
    />
  )
