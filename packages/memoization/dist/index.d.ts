export interface Cache {
    get: <T>(key: string) => Promise<T | null | undefined>;
    set: <T>(key: string, value: T, config?: {
        ttlms?: number;
    }) => Promise<T | null | undefined>;
}
declare type Args<Tfunction> = Tfunction extends (...args: infer U) => any ? U : never;
interface Logger {
    error: (msg: string) => void;
}
export declare type MemoizationFunction = <Fn extends (...args: any[]) => any>(fn: Fn, getKey: (...args: Args<Fn>) => string, config?: {
    ttlms?: number;
}) => (...args: Args<Fn>) => Promise<ReturnType<Fn>>;
export declare function initMemoize(cache: Cache, { logger: loggerInstance, cacheType, }: {
    logger?: Logger;
    cacheType?: string;
}): MemoizationFunction;
export {};
