import { globalStyles } from '../src/shared/styles'

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
)

export default App
