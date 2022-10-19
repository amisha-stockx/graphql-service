import { Resolvers } from "../generated";

const users = [
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
]

export const resolvers: Resolvers={
    Query: {
        users: () => {
            return users
        },
    },
    // User: {
    //     __resolveReference(user): { id: string; firstName: string; lastName: string; email: string; } | undefined{
    //         return users.find(c => c.id === user.id);
    //     },
    // },
}