import { Typography } from '@rmwc/typography'
import css from '../../public/styles/styles.module.css'

interface RevenueProps {
  revenue: string | number
}

export const MovieRevenue = ({ revenue }: RevenueProps) => (
  (revenue > 0) &&
    <Typography
      use="subtitle2"
      tag="h3"
      theme="textSecondaryOnBackground"
      className={css.movieCardSubtitle}>Revenue: { revenue } $</Typography>
)
