"use strict";
exports.__esModule = true;
exports.createDynamoClient = void 0;
var client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
var store = null;
function createDynamoClient(credentials) {
    if (!store) {
        var client = new client_dynamodb_1.DynamoDBClient({});
    }
}
exports.createDynamoClient = createDynamoClient;
// export const makeDynamoCache = (
//     tableName: string,
//     log: (message: string) => void,
// )
