/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
export type Guard<T> = (x: any) => x is T;
export type Guarded<T extends Guard<any>> = T extends Guard<infer V>
  ? V
  : never;
const primitiveGuard = <T>(typeOf: string) => (x: any): x is T => typeof x === typeOf;
export const gString = primitiveGuard<string>('string');
export const gNumber = primitiveGuard<number>('number');
export const gBoolean = primitiveGuard<boolean>('boolean');
export const gNull = (x: any): x is null => x === null;
export const gObject = <T extends object>(propGuardObj: { [K in keyof T]: Guard<T[K]> }) => function (x: any): x is T {
  return typeof x === 'object'
    && x !== null
    && (Object.keys(propGuardObj) as Array<keyof T>).every(
      (k) => k in x && propGuardObj[k](x[k]),
    );
};
export const gArray = <T>(elemGuard: Guard<T>) => (x: any): x is Array<T> => Array.isArray(x) && x.every((el) => elemGuard(el));
export const gUnion = <T, U>(tGuard: Guard<T>, uGuard: Guard<U>) => (x: any): x is T | U => tGuard(x) || uGuard(x);
