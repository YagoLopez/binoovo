import '@material/button/dist/mdc.button.css'
import '@material/ripple/dist/mdc.ripple.css'
import '@material/list/dist/mdc.list.css'
import '@material/linear-progress/dist/mdc.linear-progress.css'
import '@material/typography/dist/mdc.typography.css'
import '@material/textfield/dist/mdc.textfield.css'
import '@material/floating-label/dist/mdc.floating-label.css'
import '@material/notched-outline/dist/mdc.notched-outline.css'
import '@material/line-ripple/dist/mdc.line-ripple.css'
import '@material/top-app-bar/dist/mdc.top-app-bar.css'
import '@material/icon-button/dist/mdc.icon-button.css'
import '@material/card/dist/mdc.card.css'
import '@material/theme/dist/mdc.theme.css'
import '@material/form-field/dist/mdc.form-field.css'
import '@rmwc/icon/icon.css'
import '@rmwc/theme/theme.css'
import '@rmwc/tooltip/tooltip.css'
import '@material/fab/dist/mdc.fab.css'
import '@material/dialog/dist/mdc.dialog.css'
import '../styles/responsive.css'

export function reportWebVitals(metric) {
  if (metric.label === 'custom') {
    console.log(metric);
  }
}
const App = ({ Component, pageProps }) => <Component {...pageProps} />

export default App