import { ApolloProvider } from '@apollo/client'
import Layout from '../src/shared/components/Layout'
import client from '../src/shared/apollo/client'
import {PokemonProvider} from '../src/pokemon/provider'
const App = ({ Component, pageProps }) => (
      <ApolloProvider client={client} >
        <PokemonProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </PokemonProvider>
      </ApolloProvider>
)

export default App
