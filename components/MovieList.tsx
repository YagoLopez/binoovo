import {MovieItem} from "./MovieItem";

export const MovieList = ({ listData }) => 
  listData.map((movie, index) => <MovieItem key={index} movieData={movie}/>)
