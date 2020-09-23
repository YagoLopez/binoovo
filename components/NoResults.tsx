import { useRouter } from 'next/router'
import css from '../styles/styles.module.css'

export const NoResults = ({ message }) => {
  const router = useRouter()
  const onGoBack = () => router.back()

  return (
    <div className={css.centerHorVer}>
      <p data-cy="no-results-msg">{message}</p>
      <div><a href="#" onClick={onGoBack}>⇦ Go Back</a></div>
    </div>
  )
}
