
export interface Cache{
    get: <T>(key: string) => Promise<T | null | undefined>;

    set: <T>(key: string, value: T,config?: {ttlms?: number}) => Promise<T | null | undefined>;
}

type Args<Tfunction> = Tfunction extends (...args: infer U) => any ? U: never;

interface Logger {
    error: (msg: string) => void;
}

export type MemoizationFunction = <Fn extends (...args: any[])=> any>(
    fn: Fn,
    getKey: (...args: Args<Fn>) => string,
    config?: {ttlms?: number}
) => (...args: Args<Fn>) => Promise<ReturnType<Fn>>

export function initMemoize(
    cache: Cache,
    {
        logger: loggerInstance,
        cacheType,
    }: {
        logger?: Logger;
        cacheType?: string;
    } 
): MemoizationFunction{
    const memoizedFn: MemoizationFunction = (fn,getKey,config) => {
        const logger = loggerInstance || console;

        return async (...args) => {
            let key: string | null = null;
            try{
                key = getKey(...args);
            } catch(error){
                logger.error(`Something went wrong when trying to obtain a cache key. ${error}`);
            }

            if (!key || key.trim() === ''){
                logger.error(
                    'A cache key was returned as either an empty string, null or undefined.'
                );
                return fn(...args);
            }

            let cacheKeyForMetrics = key.split('-')[0];

            // break down key to at most 13 charters
            if (cacheKeyForMetrics.length > 13) {
                cacheKeyForMetrics = cacheKeyForMetrics.substring(0, 13);
            }

            try{
                const cachedValue = await cache.get(key);
                if (cachedValue!==null && cachedValue!==undefined) {
                    return cachedValue
                }
            } catch(error){
                logger.error(
                    `Something went wrong when trying to get value from cache (key: ${key}). ${error}`
                );
            }
        }
    }

    return memoizedFn
}