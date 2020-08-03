import Link from 'next/link'
import styles from '../public/styles.module.css'

export const NoResults = ({ message }) => {
  return (
    <div className={styles.centerHorVer}>
      <p>{message}</p>
      <div><Link href="/"><a>⇦ Back to Home Page</a></Link></div>
    </div>
  )
}
