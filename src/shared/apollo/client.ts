import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'cross-fetch'

const client = new ApolloClient({
    // graphql endpoint for pokeapi
    // cc: https://github.com/mazipan/graphql-pokeapi
    link: new HttpLink({ uri: "https://graphql-pokeapi.vercel.app/api/graphql", fetch }),
    cache: new InMemoryCache(),
});

export default client;
