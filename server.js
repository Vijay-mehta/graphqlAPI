import {ApolloServer} from 'apollo-server';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import typeDefs  from './schemaGql.js';
import resolvers from './resolvers.js';

const server =new ApolloServer({
typeDefs,
resolvers,
plugins:[ApolloServerPluginLandingPageGraphQLPlayground()]
})

server.listen(1100).then(({url})=>{
    console.log(`${url}`)
})
