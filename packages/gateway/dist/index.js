"use strict";
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var gateway_1 = require("@apollo/gateway");
var gateway = new gateway_1.ApolloGateway({
    supergraphSdl: new gateway_1.IntrospectAndCompose({
        subgraphs: [
            { name: 'users', url: 'http://localhost:4001' },
            // ...additional subgraphs...
        ]
    })
});
var url = "http://localhost:5002/";
var config = { gateway: gateway };
var server = new apollo_server_1.ApolloServer(config);
server.listen(5002).then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 Gateway ready at ".concat(url));
});
