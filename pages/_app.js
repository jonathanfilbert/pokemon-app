import { ApolloProvider } from "@apollo/client";
import Layout from "../src/shared/components/Layout";
import client from "../src/shared/apollo/client";
import { PokemonProvider } from "../src/pokemon/provider";
import { ChakraProvider } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";

const App = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <ChakraProvider>
      <PokemonProvider>
        <NextNprogress color="#18a522" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PokemonProvider>
    </ChakraProvider>
  </ApolloProvider>
);

export default App;
