import { ApolloProvider } from '@apollo/client'
import Layout from '../src/shared/components/Layout'
import client from '../src/shared/apollo/client'
const App = ({ Component, pageProps }) => (
      <ApolloProvider client={client} >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
)

export default App
