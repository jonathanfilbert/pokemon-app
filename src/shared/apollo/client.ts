import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'cross-fetch'

/**
 * Constructing the Apollo Client to be used across our application.
 *
 *
 * For older browsers, it may not be possible to support the `fetch` functionality,
 * So APollo advices to pass in a fetch object.
 * src: https://www.apollographql.com/docs/react/networking/advanced-http-networking/#providing-a-fetch-replacement-for-certain-environments
 *
*/
const client = new ApolloClient({
    // graphql endpoint for pokeapi
    // cc: https://github.com/mazipan/graphql-pokeapi
    link: new HttpLink({ uri: "https://graphql-pokeapi.vercel.app/api/graphql", fetch }),
    cache: new InMemoryCache(),
});

export default client;
