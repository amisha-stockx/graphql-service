import { buildFederatedSchema } from "@apollo/subgraph/dist/buildSubgraphSchema";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./src/query/schema.graphql";
import { resolvers } from "./src/query/resolver"

const server = new ApolloServer({
    schema: buildFederatedSchema([{typeDefs,resolvers}])
})

server.listen(4001).then(({ url }) => {
    console.log('`🚀 Content service ready at ${url}`')
});