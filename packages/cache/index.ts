import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { fromSSO } from '@aws-sdk/credential-provider-sso';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

type Depromisify<T> = T extends PromiseLike<infer U>? U : T;

type AWSCredentials = Depromisify<ReturnType<ReturnType<typeof fromSSO>>>;

let store: DynamoDBDocument | null = null;
export function createDynamoClient(credentials?: AWSCredentials){
    if (!store){
        const client = new DynamoDBClient({
            
        });
    }
}

// export const makeDynamoCache = (
//     tableName: string,
//     log: (message: string) => void,
// )