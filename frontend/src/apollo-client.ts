import { ApolloClient, InMemoryCache } from '@apollo/client/core'

export default new ApolloClient({
    uri: `http://${window.location.hostname}:1337/graphql`,
    cache: new InMemoryCache(),
    connectToDevTools: true
})
