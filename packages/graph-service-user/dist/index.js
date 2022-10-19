"use strict";
exports.__esModule = true;
var buildSubgraphSchema_1 = require("@apollo/subgraph/dist/buildSubgraphSchema");
var apollo_server_1 = require("apollo-server");
var schema_graphql_1 = require("./query/schema.graphql");
var resolver_1 = require("./query/resolver");
var server = new apollo_server_1.ApolloServer({
    schema: (0, buildSubgraphSchema_1.buildFederatedSchema)([{ typeDefs: schema_graphql_1.typeDefs, resolvers: resolver_1.resolvers }])
});
server.listen(4001).then(function (_a) {
    var url = _a.url;
    console.log('`🚀 Content service ready at ${url}`');
});
