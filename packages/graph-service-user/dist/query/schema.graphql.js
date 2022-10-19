"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.typeDefs = void 0;
var apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    extend type Query {\n        users: [User]\n    }\n\n    type User @key(fields: \"id\"){\n        id: ID!\n        firstName: String\n        lastName: String\n        email: String\n    }\n"], ["\n    extend type Query {\n        users: [User]\n    }\n\n    type User @key(fields: \"id\"){\n        id: ID!\n        firstName: String\n        lastName: String\n        email: String\n    }\n"])));
var templateObject_1;
