
const DEFAULT_LOCALE = 'en-us';

let dynamoCache: ReturnType<typeof makeDynamoCache> | null = null

export function getMemoizationFunctions(locale = DEFAULT_LOCALE){
    const ddbCache = initializeDynamoCache('table name');

    const memoizedDynamoCache = memoizeCache(ddbCache, 'dynamo', locale);

    return {
        dynamoCacheMemoization: memoizedDynamoCache,
    }
}

function memoizeCache(cache: Cache, cacheType: string, locale = DEFAULT_LOCALE){

}