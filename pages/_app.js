import Layout from '../src/shared/components/Layout'
const App = ({ Component, pageProps }) => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default App
