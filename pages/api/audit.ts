import { CONST } from '../../constants'

export default (req, res) => {
  res.redirect(CONST.LIGHTHOUSE_AUDIT_URL)
}