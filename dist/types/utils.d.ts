import { NestedValue } from './form';
export declare type Primitive = null | undefined | string | number | boolean | symbol | bigint;
export declare type EmptyObject = {
    [K in string | number]: never;
};
export declare type NonUndefined<T> = T extends undefined ? never : T;
export declare type LiteralToPrimitive<T extends any> = T extends string ? string : T extends number ? number : T extends boolean ? boolean : T;
export declare type LiteralUnion<T extends U, U extends Primitive> = T | (U & {
    _?: never;
});
export declare type Assign<T extends object, U extends object> = T & Omit<U, keyof T>;
export declare type DeepPartial<T> = T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {
    [key in keyof T]: T[key];
} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : T;
export declare type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false;
export declare type DeepMap<T, TValue> = {
    [K in keyof T]?: IsAny<T[K]> extends true ? any : NonUndefined<T[K]> extends NestedValue | Date | FileList ? TValue : NonUndefined<T[K]> extends object ? DeepMap<T[K], TValue> : NonUndefined<T[K]> extends Array<infer U> ? IsAny<U> extends true ? Array<any> : U extends NestedValue | Date | FileList ? Array<TValue> : U extends object ? Array<DeepMap<U, TValue>> : Array<TValue> : TValue;
};
export declare type IsFlatObject<T extends object> = Extract<Exclude<T[keyof T], NestedValue | Date | FileList>, any[] | object> extends never ? true : false;
