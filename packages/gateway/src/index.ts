import { ApolloServer } from "apollo-server";
import { ApolloServerExpressConfig } from 'apollo-server-express';
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
          { name: 'users', url: 'http://localhost:4001' },
          // ...additional subgraphs...
        ],
    }),
})

const url = "http://localhost:5002/"
let config : ApolloServerExpressConfig  =    { gateway: gateway}

const server = new ApolloServer(config);


server.listen(5002).then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
  });