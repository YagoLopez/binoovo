import {useRouter} from "next/router";

export const BackMovieList = () => {

  const router = useRouter()

  const goBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.back()
  }

  return <p><a href="#" onClick={(e) => goBack(e)}>⇦ Return to list</a></p>
}
