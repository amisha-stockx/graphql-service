"use strict";
exports.__esModule = true;
exports.resolvers = void 0;
var users = [
    {
        id: '1',
        firstName: 'Amisha',
        lastName: 'Gupta',
        email: 'am@gmail.com'
    },
    {
        id: '2',
        firstName: 'Richa',
        lastName: 'Gupta',
        email: 'rg@gmail.com'
    }
];
exports.resolvers = {
    Query: {
        users: function () {
            return users;
        }
    }
};
