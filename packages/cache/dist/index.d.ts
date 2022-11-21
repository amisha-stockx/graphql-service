import { fromSSO } from '@aws-sdk/credential-provider-sso';
declare type Depromisify<T> = T extends PromiseLike<infer U> ? U : T;
declare type AWSCredentials = Depromisify<ReturnType<ReturnType<typeof fromSSO>>>;
export declare function createDynamoClient(credentials?: AWSCredentials): void;
export {};
