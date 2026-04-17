
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VendorProfile
 * 
 */
export type VendorProfile = $Result.DefaultSelection<Prisma.$VendorProfilePayload>
/**
 * Model Produce
 * 
 */
export type Produce = $Result.DefaultSelection<Prisma.$ProducePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model RentalSpace
 * 
 */
export type RentalSpace = $Result.DefaultSelection<Prisma.$RentalSpacePayload>
/**
 * Model CommunityPost
 * 
 */
export type CommunityPost = $Result.DefaultSelection<Prisma.$CommunityPostPayload>
/**
 * Model SustainabilityCert
 * 
 */
export type SustainabilityCert = $Result.DefaultSelection<Prisma.$SustainabilityCertPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  VENDOR: 'VENDOR',
  CUSTOMER: 'CUSTOMER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CertificationStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type CertificationStatus = (typeof CertificationStatus)[keyof typeof CertificationStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CertificationStatus = $Enums.CertificationStatus

export const CertificationStatus: typeof $Enums.CertificationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendorProfile`: Exposes CRUD operations for the **VendorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VendorProfiles
    * const vendorProfiles = await prisma.vendorProfile.findMany()
    * ```
    */
  get vendorProfile(): Prisma.VendorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produce`: Exposes CRUD operations for the **Produce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produces
    * const produces = await prisma.produce.findMany()
    * ```
    */
  get produce(): Prisma.ProduceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentalSpace`: Exposes CRUD operations for the **RentalSpace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalSpaces
    * const rentalSpaces = await prisma.rentalSpace.findMany()
    * ```
    */
  get rentalSpace(): Prisma.RentalSpaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityPost`: Exposes CRUD operations for the **CommunityPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityPosts
    * const communityPosts = await prisma.communityPost.findMany()
    * ```
    */
  get communityPost(): Prisma.CommunityPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sustainabilityCert`: Exposes CRUD operations for the **SustainabilityCert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SustainabilityCerts
    * const sustainabilityCerts = await prisma.sustainabilityCert.findMany()
    * ```
    */
  get sustainabilityCert(): Prisma.SustainabilityCertDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    VendorProfile: 'VendorProfile',
    Produce: 'Produce',
    Order: 'Order',
    RentalSpace: 'RentalSpace',
    CommunityPost: 'CommunityPost',
    SustainabilityCert: 'SustainabilityCert'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vendorProfile" | "produce" | "order" | "rentalSpace" | "communityPost" | "sustainabilityCert"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VendorProfile: {
        payload: Prisma.$VendorProfilePayload<ExtArgs>
        fields: Prisma.VendorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          findFirst: {
            args: Prisma.VendorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          findMany: {
            args: Prisma.VendorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>[]
          }
          create: {
            args: Prisma.VendorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          createMany: {
            args: Prisma.VendorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>[]
          }
          delete: {
            args: Prisma.VendorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          update: {
            args: Prisma.VendorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          deleteMany: {
            args: Prisma.VendorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>[]
          }
          upsert: {
            args: Prisma.VendorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          aggregate: {
            args: Prisma.VendorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendorProfile>
          }
          groupBy: {
            args: Prisma.VendorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<VendorProfileCountAggregateOutputType> | number
          }
        }
      }
      Produce: {
        payload: Prisma.$ProducePayload<ExtArgs>
        fields: Prisma.ProduceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProduceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProduceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          findFirst: {
            args: Prisma.ProduceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProduceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          findMany: {
            args: Prisma.ProduceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>[]
          }
          create: {
            args: Prisma.ProduceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          createMany: {
            args: Prisma.ProduceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProduceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>[]
          }
          delete: {
            args: Prisma.ProduceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          update: {
            args: Prisma.ProduceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          deleteMany: {
            args: Prisma.ProduceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProduceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProduceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>[]
          }
          upsert: {
            args: Prisma.ProduceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          aggregate: {
            args: Prisma.ProduceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduce>
          }
          groupBy: {
            args: Prisma.ProduceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProduceCountArgs<ExtArgs>
            result: $Utils.Optional<ProduceCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      RentalSpace: {
        payload: Prisma.$RentalSpacePayload<ExtArgs>
        fields: Prisma.RentalSpaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalSpaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalSpaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          findFirst: {
            args: Prisma.RentalSpaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalSpaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          findMany: {
            args: Prisma.RentalSpaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>[]
          }
          create: {
            args: Prisma.RentalSpaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          createMany: {
            args: Prisma.RentalSpaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalSpaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>[]
          }
          delete: {
            args: Prisma.RentalSpaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          update: {
            args: Prisma.RentalSpaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          deleteMany: {
            args: Prisma.RentalSpaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalSpaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalSpaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>[]
          }
          upsert: {
            args: Prisma.RentalSpaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          aggregate: {
            args: Prisma.RentalSpaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalSpace>
          }
          groupBy: {
            args: Prisma.RentalSpaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalSpaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalSpaceCountArgs<ExtArgs>
            result: $Utils.Optional<RentalSpaceCountAggregateOutputType> | number
          }
        }
      }
      CommunityPost: {
        payload: Prisma.$CommunityPostPayload<ExtArgs>
        fields: Prisma.CommunityPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          findFirst: {
            args: Prisma.CommunityPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          findMany: {
            args: Prisma.CommunityPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          create: {
            args: Prisma.CommunityPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          createMany: {
            args: Prisma.CommunityPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          delete: {
            args: Prisma.CommunityPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          update: {
            args: Prisma.CommunityPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          deleteMany: {
            args: Prisma.CommunityPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          upsert: {
            args: Prisma.CommunityPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          aggregate: {
            args: Prisma.CommunityPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityPost>
          }
          groupBy: {
            args: Prisma.CommunityPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityPostCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityPostCountAggregateOutputType> | number
          }
        }
      }
      SustainabilityCert: {
        payload: Prisma.$SustainabilityCertPayload<ExtArgs>
        fields: Prisma.SustainabilityCertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SustainabilityCertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SustainabilityCertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>
          }
          findFirst: {
            args: Prisma.SustainabilityCertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SustainabilityCertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>
          }
          findMany: {
            args: Prisma.SustainabilityCertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>[]
          }
          create: {
            args: Prisma.SustainabilityCertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>
          }
          createMany: {
            args: Prisma.SustainabilityCertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SustainabilityCertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>[]
          }
          delete: {
            args: Prisma.SustainabilityCertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>
          }
          update: {
            args: Prisma.SustainabilityCertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>
          }
          deleteMany: {
            args: Prisma.SustainabilityCertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SustainabilityCertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SustainabilityCertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>[]
          }
          upsert: {
            args: Prisma.SustainabilityCertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>
          }
          aggregate: {
            args: Prisma.SustainabilityCertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSustainabilityCert>
          }
          groupBy: {
            args: Prisma.SustainabilityCertGroupByArgs<ExtArgs>
            result: $Utils.Optional<SustainabilityCertGroupByOutputType>[]
          }
          count: {
            args: Prisma.SustainabilityCertCountArgs<ExtArgs>
            result: $Utils.Optional<SustainabilityCertCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vendorProfile?: VendorProfileOmit
    produce?: ProduceOmit
    order?: OrderOmit
    rentalSpace?: RentalSpaceOmit
    communityPost?: CommunityPostOmit
    sustainabilityCert?: SustainabilityCertOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityPostWhereInput
  }


  /**
   * Count Type VendorProfileCountOutputType
   */

  export type VendorProfileCountOutputType = {
    produce: number
    orders: number
    rentalSpaces: number
    certifications: number
  }

  export type VendorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produce?: boolean | VendorProfileCountOutputTypeCountProduceArgs
    orders?: boolean | VendorProfileCountOutputTypeCountOrdersArgs
    rentalSpaces?: boolean | VendorProfileCountOutputTypeCountRentalSpacesArgs
    certifications?: boolean | VendorProfileCountOutputTypeCountCertificationsArgs
  }

  // Custom InputTypes
  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfileCountOutputType
     */
    select?: VendorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountProduceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduceWhereInput
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountRentalSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalSpaceWhereInput
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountCertificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SustainabilityCertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    vendorProfile?: boolean | User$vendorProfileArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "status" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorProfile?: boolean | User$vendorProfileArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vendorProfile: Prisma.$VendorProfilePayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
      posts: Prisma.$CommunityPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      status: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendorProfile<T extends User$vendorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$vendorProfileArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vendorProfile
   */
  export type User$vendorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    where?: VendorProfileWhereInput
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    where?: CommunityPostWhereInput
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    cursor?: CommunityPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VendorProfile
   */

  export type AggregateVendorProfile = {
    _count: VendorProfileCountAggregateOutputType | null
    _avg: VendorProfileAvgAggregateOutputType | null
    _sum: VendorProfileSumAggregateOutputType | null
    _min: VendorProfileMinAggregateOutputType | null
    _max: VendorProfileMaxAggregateOutputType | null
  }

  export type VendorProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VendorProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VendorProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    farmName: string | null
    certificationStatus: $Enums.CertificationStatus | null
    farmLocation: string | null
  }

  export type VendorProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    farmName: string | null
    certificationStatus: $Enums.CertificationStatus | null
    farmLocation: string | null
  }

  export type VendorProfileCountAggregateOutputType = {
    id: number
    userId: number
    farmName: number
    certificationStatus: number
    farmLocation: number
    _all: number
  }


  export type VendorProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VendorProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VendorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    farmName?: true
    certificationStatus?: true
    farmLocation?: true
  }

  export type VendorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    farmName?: true
    certificationStatus?: true
    farmLocation?: true
  }

  export type VendorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    farmName?: true
    certificationStatus?: true
    farmLocation?: true
    _all?: true
  }

  export type VendorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorProfile to aggregate.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VendorProfiles
    **/
    _count?: true | VendorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorProfileMaxAggregateInputType
  }

  export type GetVendorProfileAggregateType<T extends VendorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateVendorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendorProfile[P]>
      : GetScalarType<T[P], AggregateVendorProfile[P]>
  }




  export type VendorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorProfileWhereInput
    orderBy?: VendorProfileOrderByWithAggregationInput | VendorProfileOrderByWithAggregationInput[]
    by: VendorProfileScalarFieldEnum[] | VendorProfileScalarFieldEnum
    having?: VendorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorProfileCountAggregateInputType | true
    _avg?: VendorProfileAvgAggregateInputType
    _sum?: VendorProfileSumAggregateInputType
    _min?: VendorProfileMinAggregateInputType
    _max?: VendorProfileMaxAggregateInputType
  }

  export type VendorProfileGroupByOutputType = {
    id: number
    userId: number
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    _count: VendorProfileCountAggregateOutputType | null
    _avg: VendorProfileAvgAggregateOutputType | null
    _sum: VendorProfileSumAggregateOutputType | null
    _min: VendorProfileMinAggregateOutputType | null
    _max: VendorProfileMaxAggregateOutputType | null
  }

  type GetVendorProfileGroupByPayload<T extends VendorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], VendorProfileGroupByOutputType[P]>
        }
      >
    >


  export type VendorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    farmName?: boolean
    certificationStatus?: boolean
    farmLocation?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produce?: boolean | VendorProfile$produceArgs<ExtArgs>
    orders?: boolean | VendorProfile$ordersArgs<ExtArgs>
    rentalSpaces?: boolean | VendorProfile$rentalSpacesArgs<ExtArgs>
    certifications?: boolean | VendorProfile$certificationsArgs<ExtArgs>
    _count?: boolean | VendorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorProfile"]>

  export type VendorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    farmName?: boolean
    certificationStatus?: boolean
    farmLocation?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorProfile"]>

  export type VendorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    farmName?: boolean
    certificationStatus?: boolean
    farmLocation?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorProfile"]>

  export type VendorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    farmName?: boolean
    certificationStatus?: boolean
    farmLocation?: boolean
  }

  export type VendorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "farmName" | "certificationStatus" | "farmLocation", ExtArgs["result"]["vendorProfile"]>
  export type VendorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produce?: boolean | VendorProfile$produceArgs<ExtArgs>
    orders?: boolean | VendorProfile$ordersArgs<ExtArgs>
    rentalSpaces?: boolean | VendorProfile$rentalSpacesArgs<ExtArgs>
    certifications?: boolean | VendorProfile$certificationsArgs<ExtArgs>
    _count?: boolean | VendorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VendorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VendorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VendorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      produce: Prisma.$ProducePayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      rentalSpaces: Prisma.$RentalSpacePayload<ExtArgs>[]
      certifications: Prisma.$SustainabilityCertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      farmName: string
      certificationStatus: $Enums.CertificationStatus
      farmLocation: string
    }, ExtArgs["result"]["vendorProfile"]>
    composites: {}
  }

  type VendorProfileGetPayload<S extends boolean | null | undefined | VendorProfileDefaultArgs> = $Result.GetResult<Prisma.$VendorProfilePayload, S>

  type VendorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorProfileCountAggregateInputType | true
    }

  export interface VendorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VendorProfile'], meta: { name: 'VendorProfile' } }
    /**
     * Find zero or one VendorProfile that matches the filter.
     * @param {VendorProfileFindUniqueArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorProfileFindUniqueArgs>(args: SelectSubset<T, VendorProfileFindUniqueArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VendorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorProfileFindUniqueOrThrowArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileFindFirstArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorProfileFindFirstArgs>(args?: SelectSubset<T, VendorProfileFindFirstArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileFindFirstOrThrowArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VendorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VendorProfiles
     * const vendorProfiles = await prisma.vendorProfile.findMany()
     * 
     * // Get first 10 VendorProfiles
     * const vendorProfiles = await prisma.vendorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorProfileWithIdOnly = await prisma.vendorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorProfileFindManyArgs>(args?: SelectSubset<T, VendorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VendorProfile.
     * @param {VendorProfileCreateArgs} args - Arguments to create a VendorProfile.
     * @example
     * // Create one VendorProfile
     * const VendorProfile = await prisma.vendorProfile.create({
     *   data: {
     *     // ... data to create a VendorProfile
     *   }
     * })
     * 
     */
    create<T extends VendorProfileCreateArgs>(args: SelectSubset<T, VendorProfileCreateArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VendorProfiles.
     * @param {VendorProfileCreateManyArgs} args - Arguments to create many VendorProfiles.
     * @example
     * // Create many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorProfileCreateManyArgs>(args?: SelectSubset<T, VendorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VendorProfiles and returns the data saved in the database.
     * @param {VendorProfileCreateManyAndReturnArgs} args - Arguments to create many VendorProfiles.
     * @example
     * // Create many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VendorProfiles and only return the `id`
     * const vendorProfileWithIdOnly = await prisma.vendorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VendorProfile.
     * @param {VendorProfileDeleteArgs} args - Arguments to delete one VendorProfile.
     * @example
     * // Delete one VendorProfile
     * const VendorProfile = await prisma.vendorProfile.delete({
     *   where: {
     *     // ... filter to delete one VendorProfile
     *   }
     * })
     * 
     */
    delete<T extends VendorProfileDeleteArgs>(args: SelectSubset<T, VendorProfileDeleteArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VendorProfile.
     * @param {VendorProfileUpdateArgs} args - Arguments to update one VendorProfile.
     * @example
     * // Update one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorProfileUpdateArgs>(args: SelectSubset<T, VendorProfileUpdateArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VendorProfiles.
     * @param {VendorProfileDeleteManyArgs} args - Arguments to filter VendorProfiles to delete.
     * @example
     * // Delete a few VendorProfiles
     * const { count } = await prisma.vendorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorProfileDeleteManyArgs>(args?: SelectSubset<T, VendorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorProfileUpdateManyArgs>(args: SelectSubset<T, VendorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorProfiles and returns the data updated in the database.
     * @param {VendorProfileUpdateManyAndReturnArgs} args - Arguments to update many VendorProfiles.
     * @example
     * // Update many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VendorProfiles and only return the `id`
     * const vendorProfileWithIdOnly = await prisma.vendorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VendorProfile.
     * @param {VendorProfileUpsertArgs} args - Arguments to update or create a VendorProfile.
     * @example
     * // Update or create a VendorProfile
     * const vendorProfile = await prisma.vendorProfile.upsert({
     *   create: {
     *     // ... data to create a VendorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VendorProfile we want to update
     *   }
     * })
     */
    upsert<T extends VendorProfileUpsertArgs>(args: SelectSubset<T, VendorProfileUpsertArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VendorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileCountArgs} args - Arguments to filter VendorProfiles to count.
     * @example
     * // Count the number of VendorProfiles
     * const count = await prisma.vendorProfile.count({
     *   where: {
     *     // ... the filter for the VendorProfiles we want to count
     *   }
     * })
    **/
    count<T extends VendorProfileCountArgs>(
      args?: Subset<T, VendorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VendorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorProfileAggregateArgs>(args: Subset<T, VendorProfileAggregateArgs>): Prisma.PrismaPromise<GetVendorProfileAggregateType<T>>

    /**
     * Group by VendorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorProfileGroupByArgs['orderBy'] }
        : { orderBy?: VendorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VendorProfile model
   */
  readonly fields: VendorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VendorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produce<T extends VendorProfile$produceArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$produceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends VendorProfile$ordersArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rentalSpaces<T extends VendorProfile$rentalSpacesArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$rentalSpacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certifications<T extends VendorProfile$certificationsArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$certificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VendorProfile model
   */
  interface VendorProfileFieldRefs {
    readonly id: FieldRef<"VendorProfile", 'Int'>
    readonly userId: FieldRef<"VendorProfile", 'Int'>
    readonly farmName: FieldRef<"VendorProfile", 'String'>
    readonly certificationStatus: FieldRef<"VendorProfile", 'CertificationStatus'>
    readonly farmLocation: FieldRef<"VendorProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VendorProfile findUnique
   */
  export type VendorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile findUniqueOrThrow
   */
  export type VendorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile findFirst
   */
  export type VendorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorProfiles.
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorProfiles.
     */
    distinct?: VendorProfileScalarFieldEnum | VendorProfileScalarFieldEnum[]
  }

  /**
   * VendorProfile findFirstOrThrow
   */
  export type VendorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorProfiles.
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorProfiles.
     */
    distinct?: VendorProfileScalarFieldEnum | VendorProfileScalarFieldEnum[]
  }

  /**
   * VendorProfile findMany
   */
  export type VendorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfiles to fetch.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VendorProfiles.
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorProfiles.
     */
    distinct?: VendorProfileScalarFieldEnum | VendorProfileScalarFieldEnum[]
  }

  /**
   * VendorProfile create
   */
  export type VendorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a VendorProfile.
     */
    data: XOR<VendorProfileCreateInput, VendorProfileUncheckedCreateInput>
  }

  /**
   * VendorProfile createMany
   */
  export type VendorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VendorProfiles.
     */
    data: VendorProfileCreateManyInput | VendorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VendorProfile createManyAndReturn
   */
  export type VendorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many VendorProfiles.
     */
    data: VendorProfileCreateManyInput | VendorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorProfile update
   */
  export type VendorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a VendorProfile.
     */
    data: XOR<VendorProfileUpdateInput, VendorProfileUncheckedUpdateInput>
    /**
     * Choose, which VendorProfile to update.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile updateMany
   */
  export type VendorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VendorProfiles.
     */
    data: XOR<VendorProfileUpdateManyMutationInput, VendorProfileUncheckedUpdateManyInput>
    /**
     * Filter which VendorProfiles to update
     */
    where?: VendorProfileWhereInput
    /**
     * Limit how many VendorProfiles to update.
     */
    limit?: number
  }

  /**
   * VendorProfile updateManyAndReturn
   */
  export type VendorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * The data used to update VendorProfiles.
     */
    data: XOR<VendorProfileUpdateManyMutationInput, VendorProfileUncheckedUpdateManyInput>
    /**
     * Filter which VendorProfiles to update
     */
    where?: VendorProfileWhereInput
    /**
     * Limit how many VendorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorProfile upsert
   */
  export type VendorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the VendorProfile to update in case it exists.
     */
    where: VendorProfileWhereUniqueInput
    /**
     * In case the VendorProfile found by the `where` argument doesn't exist, create a new VendorProfile with this data.
     */
    create: XOR<VendorProfileCreateInput, VendorProfileUncheckedCreateInput>
    /**
     * In case the VendorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorProfileUpdateInput, VendorProfileUncheckedUpdateInput>
  }

  /**
   * VendorProfile delete
   */
  export type VendorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter which VendorProfile to delete.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile deleteMany
   */
  export type VendorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorProfiles to delete
     */
    where?: VendorProfileWhereInput
    /**
     * Limit how many VendorProfiles to delete.
     */
    limit?: number
  }

  /**
   * VendorProfile.produce
   */
  export type VendorProfile$produceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    where?: ProduceWhereInput
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    cursor?: ProduceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }

  /**
   * VendorProfile.orders
   */
  export type VendorProfile$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * VendorProfile.rentalSpaces
   */
  export type VendorProfile$rentalSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    where?: RentalSpaceWhereInput
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    cursor?: RentalSpaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalSpaceScalarFieldEnum | RentalSpaceScalarFieldEnum[]
  }

  /**
   * VendorProfile.certifications
   */
  export type VendorProfile$certificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    where?: SustainabilityCertWhereInput
    orderBy?: SustainabilityCertOrderByWithRelationInput | SustainabilityCertOrderByWithRelationInput[]
    cursor?: SustainabilityCertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SustainabilityCertScalarFieldEnum | SustainabilityCertScalarFieldEnum[]
  }

  /**
   * VendorProfile without action
   */
  export type VendorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorProfile
     */
    omit?: VendorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
  }


  /**
   * Model Produce
   */

  export type AggregateProduce = {
    _count: ProduceCountAggregateOutputType | null
    _avg: ProduceAvgAggregateOutputType | null
    _sum: ProduceSumAggregateOutputType | null
    _min: ProduceMinAggregateOutputType | null
    _max: ProduceMaxAggregateOutputType | null
  }

  export type ProduceAvgAggregateOutputType = {
    id: number | null
    vendorId: number | null
    price: number | null
    availableQuantity: number | null
  }

  export type ProduceSumAggregateOutputType = {
    id: number | null
    vendorId: number | null
    price: number | null
    availableQuantity: number | null
  }

  export type ProduceMinAggregateOutputType = {
    id: number | null
    vendorId: number | null
    name: string | null
    description: string | null
    price: number | null
    category: string | null
    certificationStatus: $Enums.CertificationStatus | null
    availableQuantity: number | null
  }

  export type ProduceMaxAggregateOutputType = {
    id: number | null
    vendorId: number | null
    name: string | null
    description: string | null
    price: number | null
    category: string | null
    certificationStatus: $Enums.CertificationStatus | null
    availableQuantity: number | null
  }

  export type ProduceCountAggregateOutputType = {
    id: number
    vendorId: number
    name: number
    description: number
    price: number
    category: number
    certificationStatus: number
    availableQuantity: number
    _all: number
  }


  export type ProduceAvgAggregateInputType = {
    id?: true
    vendorId?: true
    price?: true
    availableQuantity?: true
  }

  export type ProduceSumAggregateInputType = {
    id?: true
    vendorId?: true
    price?: true
    availableQuantity?: true
  }

  export type ProduceMinAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    price?: true
    category?: true
    certificationStatus?: true
    availableQuantity?: true
  }

  export type ProduceMaxAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    price?: true
    category?: true
    certificationStatus?: true
    availableQuantity?: true
  }

  export type ProduceCountAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    price?: true
    category?: true
    certificationStatus?: true
    availableQuantity?: true
    _all?: true
  }

  export type ProduceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produce to aggregate.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produces
    **/
    _count?: true | ProduceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduceMaxAggregateInputType
  }

  export type GetProduceAggregateType<T extends ProduceAggregateArgs> = {
        [P in keyof T & keyof AggregateProduce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduce[P]>
      : GetScalarType<T[P], AggregateProduce[P]>
  }




  export type ProduceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduceWhereInput
    orderBy?: ProduceOrderByWithAggregationInput | ProduceOrderByWithAggregationInput[]
    by: ProduceScalarFieldEnum[] | ProduceScalarFieldEnum
    having?: ProduceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduceCountAggregateInputType | true
    _avg?: ProduceAvgAggregateInputType
    _sum?: ProduceSumAggregateInputType
    _min?: ProduceMinAggregateInputType
    _max?: ProduceMaxAggregateInputType
  }

  export type ProduceGroupByOutputType = {
    id: number
    vendorId: number
    name: string
    description: string
    price: number
    category: string
    certificationStatus: $Enums.CertificationStatus
    availableQuantity: number
    _count: ProduceCountAggregateOutputType | null
    _avg: ProduceAvgAggregateOutputType | null
    _sum: ProduceSumAggregateOutputType | null
    _min: ProduceMinAggregateOutputType | null
    _max: ProduceMaxAggregateOutputType | null
  }

  type GetProduceGroupByPayload<T extends ProduceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduceGroupByOutputType[P]>
            : GetScalarType<T[P], ProduceGroupByOutputType[P]>
        }
      >
    >


  export type ProduceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    certificationStatus?: boolean
    availableQuantity?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produce"]>

  export type ProduceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    certificationStatus?: boolean
    availableQuantity?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produce"]>

  export type ProduceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    certificationStatus?: boolean
    availableQuantity?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produce"]>

  export type ProduceSelectScalar = {
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    certificationStatus?: boolean
    availableQuantity?: boolean
  }

  export type ProduceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "name" | "description" | "price" | "category" | "certificationStatus" | "availableQuantity", ExtArgs["result"]["produce"]>
  export type ProduceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type ProduceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type ProduceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $ProducePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produce"
    objects: {
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vendorId: number
      name: string
      description: string
      price: number
      category: string
      certificationStatus: $Enums.CertificationStatus
      availableQuantity: number
    }, ExtArgs["result"]["produce"]>
    composites: {}
  }

  type ProduceGetPayload<S extends boolean | null | undefined | ProduceDefaultArgs> = $Result.GetResult<Prisma.$ProducePayload, S>

  type ProduceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProduceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProduceCountAggregateInputType | true
    }

  export interface ProduceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produce'], meta: { name: 'Produce' } }
    /**
     * Find zero or one Produce that matches the filter.
     * @param {ProduceFindUniqueArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProduceFindUniqueArgs>(args: SelectSubset<T, ProduceFindUniqueArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProduceFindUniqueOrThrowArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProduceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProduceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceFindFirstArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProduceFindFirstArgs>(args?: SelectSubset<T, ProduceFindFirstArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceFindFirstOrThrowArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProduceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProduceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produces
     * const produces = await prisma.produce.findMany()
     * 
     * // Get first 10 Produces
     * const produces = await prisma.produce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produceWithIdOnly = await prisma.produce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProduceFindManyArgs>(args?: SelectSubset<T, ProduceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produce.
     * @param {ProduceCreateArgs} args - Arguments to create a Produce.
     * @example
     * // Create one Produce
     * const Produce = await prisma.produce.create({
     *   data: {
     *     // ... data to create a Produce
     *   }
     * })
     * 
     */
    create<T extends ProduceCreateArgs>(args: SelectSubset<T, ProduceCreateArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produces.
     * @param {ProduceCreateManyArgs} args - Arguments to create many Produces.
     * @example
     * // Create many Produces
     * const produce = await prisma.produce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProduceCreateManyArgs>(args?: SelectSubset<T, ProduceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produces and returns the data saved in the database.
     * @param {ProduceCreateManyAndReturnArgs} args - Arguments to create many Produces.
     * @example
     * // Create many Produces
     * const produce = await prisma.produce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produces and only return the `id`
     * const produceWithIdOnly = await prisma.produce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProduceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProduceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produce.
     * @param {ProduceDeleteArgs} args - Arguments to delete one Produce.
     * @example
     * // Delete one Produce
     * const Produce = await prisma.produce.delete({
     *   where: {
     *     // ... filter to delete one Produce
     *   }
     * })
     * 
     */
    delete<T extends ProduceDeleteArgs>(args: SelectSubset<T, ProduceDeleteArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produce.
     * @param {ProduceUpdateArgs} args - Arguments to update one Produce.
     * @example
     * // Update one Produce
     * const produce = await prisma.produce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProduceUpdateArgs>(args: SelectSubset<T, ProduceUpdateArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produces.
     * @param {ProduceDeleteManyArgs} args - Arguments to filter Produces to delete.
     * @example
     * // Delete a few Produces
     * const { count } = await prisma.produce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProduceDeleteManyArgs>(args?: SelectSubset<T, ProduceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produces
     * const produce = await prisma.produce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProduceUpdateManyArgs>(args: SelectSubset<T, ProduceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produces and returns the data updated in the database.
     * @param {ProduceUpdateManyAndReturnArgs} args - Arguments to update many Produces.
     * @example
     * // Update many Produces
     * const produce = await prisma.produce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produces and only return the `id`
     * const produceWithIdOnly = await prisma.produce.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProduceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProduceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produce.
     * @param {ProduceUpsertArgs} args - Arguments to update or create a Produce.
     * @example
     * // Update or create a Produce
     * const produce = await prisma.produce.upsert({
     *   create: {
     *     // ... data to create a Produce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produce we want to update
     *   }
     * })
     */
    upsert<T extends ProduceUpsertArgs>(args: SelectSubset<T, ProduceUpsertArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceCountArgs} args - Arguments to filter Produces to count.
     * @example
     * // Count the number of Produces
     * const count = await prisma.produce.count({
     *   where: {
     *     // ... the filter for the Produces we want to count
     *   }
     * })
    **/
    count<T extends ProduceCountArgs>(
      args?: Subset<T, ProduceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProduceAggregateArgs>(args: Subset<T, ProduceAggregateArgs>): Prisma.PrismaPromise<GetProduceAggregateType<T>>

    /**
     * Group by Produce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProduceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduceGroupByArgs['orderBy'] }
        : { orderBy?: ProduceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProduceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produce model
   */
  readonly fields: ProduceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProduceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produce model
   */
  interface ProduceFieldRefs {
    readonly id: FieldRef<"Produce", 'Int'>
    readonly vendorId: FieldRef<"Produce", 'Int'>
    readonly name: FieldRef<"Produce", 'String'>
    readonly description: FieldRef<"Produce", 'String'>
    readonly price: FieldRef<"Produce", 'Float'>
    readonly category: FieldRef<"Produce", 'String'>
    readonly certificationStatus: FieldRef<"Produce", 'CertificationStatus'>
    readonly availableQuantity: FieldRef<"Produce", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Produce findUnique
   */
  export type ProduceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where: ProduceWhereUniqueInput
  }

  /**
   * Produce findUniqueOrThrow
   */
  export type ProduceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where: ProduceWhereUniqueInput
  }

  /**
   * Produce findFirst
   */
  export type ProduceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produces.
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produces.
     */
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }

  /**
   * Produce findFirstOrThrow
   */
  export type ProduceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produces.
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produces.
     */
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }

  /**
   * Produce findMany
   */
  export type ProduceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produces to fetch.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produces.
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produces.
     */
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }

  /**
   * Produce create
   */
  export type ProduceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * The data needed to create a Produce.
     */
    data: XOR<ProduceCreateInput, ProduceUncheckedCreateInput>
  }

  /**
   * Produce createMany
   */
  export type ProduceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produces.
     */
    data: ProduceCreateManyInput | ProduceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produce createManyAndReturn
   */
  export type ProduceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * The data used to create many Produces.
     */
    data: ProduceCreateManyInput | ProduceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produce update
   */
  export type ProduceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * The data needed to update a Produce.
     */
    data: XOR<ProduceUpdateInput, ProduceUncheckedUpdateInput>
    /**
     * Choose, which Produce to update.
     */
    where: ProduceWhereUniqueInput
  }

  /**
   * Produce updateMany
   */
  export type ProduceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produces.
     */
    data: XOR<ProduceUpdateManyMutationInput, ProduceUncheckedUpdateManyInput>
    /**
     * Filter which Produces to update
     */
    where?: ProduceWhereInput
    /**
     * Limit how many Produces to update.
     */
    limit?: number
  }

  /**
   * Produce updateManyAndReturn
   */
  export type ProduceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * The data used to update Produces.
     */
    data: XOR<ProduceUpdateManyMutationInput, ProduceUncheckedUpdateManyInput>
    /**
     * Filter which Produces to update
     */
    where?: ProduceWhereInput
    /**
     * Limit how many Produces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produce upsert
   */
  export type ProduceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * The filter to search for the Produce to update in case it exists.
     */
    where: ProduceWhereUniqueInput
    /**
     * In case the Produce found by the `where` argument doesn't exist, create a new Produce with this data.
     */
    create: XOR<ProduceCreateInput, ProduceUncheckedCreateInput>
    /**
     * In case the Produce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProduceUpdateInput, ProduceUncheckedUpdateInput>
  }

  /**
   * Produce delete
   */
  export type ProduceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter which Produce to delete.
     */
    where: ProduceWhereUniqueInput
  }

  /**
   * Produce deleteMany
   */
  export type ProduceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produces to delete
     */
    where?: ProduceWhereInput
    /**
     * Limit how many Produces to delete.
     */
    limit?: number
  }

  /**
   * Produce without action
   */
  export type ProduceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produce
     */
    omit?: ProduceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    produceId: number | null
    vendorId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    produceId: number | null
    vendorId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    produceId: number | null
    vendorId: number | null
    status: string | null
    orderDate: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    produceId: number | null
    vendorId: number | null
    status: string | null
    orderDate: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    produceId: number
    vendorId: number
    status: number
    orderDate: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    userId?: true
    produceId?: true
    vendorId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    userId?: true
    produceId?: true
    vendorId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    produceId?: true
    vendorId?: true
    status?: true
    orderDate?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    produceId?: true
    vendorId?: true
    status?: true
    orderDate?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    produceId?: true
    vendorId?: true
    status?: true
    orderDate?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    userId: number
    produceId: number
    vendorId: number
    status: string
    orderDate: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produceId?: boolean
    vendorId?: boolean
    status?: boolean
    orderDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produceId?: boolean
    vendorId?: boolean
    status?: boolean
    orderDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produceId?: boolean
    vendorId?: boolean
    status?: boolean
    orderDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    produceId?: boolean
    vendorId?: boolean
    status?: boolean
    orderDate?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "produceId" | "vendorId" | "status" | "orderDate", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      produceId: number
      vendorId: number
      status: string
      orderDate: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly produceId: FieldRef<"Order", 'Int'>
    readonly vendorId: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'String'>
    readonly orderDate: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model RentalSpace
   */

  export type AggregateRentalSpace = {
    _count: RentalSpaceCountAggregateOutputType | null
    _avg: RentalSpaceAvgAggregateOutputType | null
    _sum: RentalSpaceSumAggregateOutputType | null
    _min: RentalSpaceMinAggregateOutputType | null
    _max: RentalSpaceMaxAggregateOutputType | null
  }

  export type RentalSpaceAvgAggregateOutputType = {
    id: number | null
    vendorId: number | null
    price: number | null
  }

  export type RentalSpaceSumAggregateOutputType = {
    id: number | null
    vendorId: number | null
    price: number | null
  }

  export type RentalSpaceMinAggregateOutputType = {
    id: number | null
    vendorId: number | null
    location: string | null
    size: string | null
    price: number | null
    availability: boolean | null
  }

  export type RentalSpaceMaxAggregateOutputType = {
    id: number | null
    vendorId: number | null
    location: string | null
    size: string | null
    price: number | null
    availability: boolean | null
  }

  export type RentalSpaceCountAggregateOutputType = {
    id: number
    vendorId: number
    location: number
    size: number
    price: number
    availability: number
    _all: number
  }


  export type RentalSpaceAvgAggregateInputType = {
    id?: true
    vendorId?: true
    price?: true
  }

  export type RentalSpaceSumAggregateInputType = {
    id?: true
    vendorId?: true
    price?: true
  }

  export type RentalSpaceMinAggregateInputType = {
    id?: true
    vendorId?: true
    location?: true
    size?: true
    price?: true
    availability?: true
  }

  export type RentalSpaceMaxAggregateInputType = {
    id?: true
    vendorId?: true
    location?: true
    size?: true
    price?: true
    availability?: true
  }

  export type RentalSpaceCountAggregateInputType = {
    id?: true
    vendorId?: true
    location?: true
    size?: true
    price?: true
    availability?: true
    _all?: true
  }

  export type RentalSpaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalSpace to aggregate.
     */
    where?: RentalSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSpaces to fetch.
     */
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalSpaces
    **/
    _count?: true | RentalSpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalSpaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalSpaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalSpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalSpaceMaxAggregateInputType
  }

  export type GetRentalSpaceAggregateType<T extends RentalSpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalSpace[P]>
      : GetScalarType<T[P], AggregateRentalSpace[P]>
  }




  export type RentalSpaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalSpaceWhereInput
    orderBy?: RentalSpaceOrderByWithAggregationInput | RentalSpaceOrderByWithAggregationInput[]
    by: RentalSpaceScalarFieldEnum[] | RentalSpaceScalarFieldEnum
    having?: RentalSpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalSpaceCountAggregateInputType | true
    _avg?: RentalSpaceAvgAggregateInputType
    _sum?: RentalSpaceSumAggregateInputType
    _min?: RentalSpaceMinAggregateInputType
    _max?: RentalSpaceMaxAggregateInputType
  }

  export type RentalSpaceGroupByOutputType = {
    id: number
    vendorId: number
    location: string
    size: string
    price: number
    availability: boolean
    _count: RentalSpaceCountAggregateOutputType | null
    _avg: RentalSpaceAvgAggregateOutputType | null
    _sum: RentalSpaceSumAggregateOutputType | null
    _min: RentalSpaceMinAggregateOutputType | null
    _max: RentalSpaceMaxAggregateOutputType | null
  }

  type GetRentalSpaceGroupByPayload<T extends RentalSpaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalSpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalSpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalSpaceGroupByOutputType[P]>
            : GetScalarType<T[P], RentalSpaceGroupByOutputType[P]>
        }
      >
    >


  export type RentalSpaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    location?: boolean
    size?: boolean
    price?: boolean
    availability?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalSpace"]>

  export type RentalSpaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    location?: boolean
    size?: boolean
    price?: boolean
    availability?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalSpace"]>

  export type RentalSpaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    location?: boolean
    size?: boolean
    price?: boolean
    availability?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalSpace"]>

  export type RentalSpaceSelectScalar = {
    id?: boolean
    vendorId?: boolean
    location?: boolean
    size?: boolean
    price?: boolean
    availability?: boolean
  }

  export type RentalSpaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "location" | "size" | "price" | "availability", ExtArgs["result"]["rentalSpace"]>
  export type RentalSpaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type RentalSpaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type RentalSpaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $RentalSpacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalSpace"
    objects: {
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vendorId: number
      location: string
      size: string
      price: number
      availability: boolean
    }, ExtArgs["result"]["rentalSpace"]>
    composites: {}
  }

  type RentalSpaceGetPayload<S extends boolean | null | undefined | RentalSpaceDefaultArgs> = $Result.GetResult<Prisma.$RentalSpacePayload, S>

  type RentalSpaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalSpaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalSpaceCountAggregateInputType | true
    }

  export interface RentalSpaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalSpace'], meta: { name: 'RentalSpace' } }
    /**
     * Find zero or one RentalSpace that matches the filter.
     * @param {RentalSpaceFindUniqueArgs} args - Arguments to find a RentalSpace
     * @example
     * // Get one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalSpaceFindUniqueArgs>(args: SelectSubset<T, RentalSpaceFindUniqueArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentalSpace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalSpaceFindUniqueOrThrowArgs} args - Arguments to find a RentalSpace
     * @example
     * // Get one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalSpaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalSpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalSpace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceFindFirstArgs} args - Arguments to find a RentalSpace
     * @example
     * // Get one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalSpaceFindFirstArgs>(args?: SelectSubset<T, RentalSpaceFindFirstArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalSpace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceFindFirstOrThrowArgs} args - Arguments to find a RentalSpace
     * @example
     * // Get one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalSpaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalSpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentalSpaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalSpaces
     * const rentalSpaces = await prisma.rentalSpace.findMany()
     * 
     * // Get first 10 RentalSpaces
     * const rentalSpaces = await prisma.rentalSpace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalSpaceWithIdOnly = await prisma.rentalSpace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalSpaceFindManyArgs>(args?: SelectSubset<T, RentalSpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentalSpace.
     * @param {RentalSpaceCreateArgs} args - Arguments to create a RentalSpace.
     * @example
     * // Create one RentalSpace
     * const RentalSpace = await prisma.rentalSpace.create({
     *   data: {
     *     // ... data to create a RentalSpace
     *   }
     * })
     * 
     */
    create<T extends RentalSpaceCreateArgs>(args: SelectSubset<T, RentalSpaceCreateArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentalSpaces.
     * @param {RentalSpaceCreateManyArgs} args - Arguments to create many RentalSpaces.
     * @example
     * // Create many RentalSpaces
     * const rentalSpace = await prisma.rentalSpace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalSpaceCreateManyArgs>(args?: SelectSubset<T, RentalSpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalSpaces and returns the data saved in the database.
     * @param {RentalSpaceCreateManyAndReturnArgs} args - Arguments to create many RentalSpaces.
     * @example
     * // Create many RentalSpaces
     * const rentalSpace = await prisma.rentalSpace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalSpaces and only return the `id`
     * const rentalSpaceWithIdOnly = await prisma.rentalSpace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalSpaceCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalSpaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentalSpace.
     * @param {RentalSpaceDeleteArgs} args - Arguments to delete one RentalSpace.
     * @example
     * // Delete one RentalSpace
     * const RentalSpace = await prisma.rentalSpace.delete({
     *   where: {
     *     // ... filter to delete one RentalSpace
     *   }
     * })
     * 
     */
    delete<T extends RentalSpaceDeleteArgs>(args: SelectSubset<T, RentalSpaceDeleteArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentalSpace.
     * @param {RentalSpaceUpdateArgs} args - Arguments to update one RentalSpace.
     * @example
     * // Update one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalSpaceUpdateArgs>(args: SelectSubset<T, RentalSpaceUpdateArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentalSpaces.
     * @param {RentalSpaceDeleteManyArgs} args - Arguments to filter RentalSpaces to delete.
     * @example
     * // Delete a few RentalSpaces
     * const { count } = await prisma.rentalSpace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalSpaceDeleteManyArgs>(args?: SelectSubset<T, RentalSpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalSpaces
     * const rentalSpace = await prisma.rentalSpace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalSpaceUpdateManyArgs>(args: SelectSubset<T, RentalSpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalSpaces and returns the data updated in the database.
     * @param {RentalSpaceUpdateManyAndReturnArgs} args - Arguments to update many RentalSpaces.
     * @example
     * // Update many RentalSpaces
     * const rentalSpace = await prisma.rentalSpace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentalSpaces and only return the `id`
     * const rentalSpaceWithIdOnly = await prisma.rentalSpace.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RentalSpaceUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalSpaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentalSpace.
     * @param {RentalSpaceUpsertArgs} args - Arguments to update or create a RentalSpace.
     * @example
     * // Update or create a RentalSpace
     * const rentalSpace = await prisma.rentalSpace.upsert({
     *   create: {
     *     // ... data to create a RentalSpace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalSpace we want to update
     *   }
     * })
     */
    upsert<T extends RentalSpaceUpsertArgs>(args: SelectSubset<T, RentalSpaceUpsertArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentalSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceCountArgs} args - Arguments to filter RentalSpaces to count.
     * @example
     * // Count the number of RentalSpaces
     * const count = await prisma.rentalSpace.count({
     *   where: {
     *     // ... the filter for the RentalSpaces we want to count
     *   }
     * })
    **/
    count<T extends RentalSpaceCountArgs>(
      args?: Subset<T, RentalSpaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalSpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalSpaceAggregateArgs>(args: Subset<T, RentalSpaceAggregateArgs>): Prisma.PrismaPromise<GetRentalSpaceAggregateType<T>>

    /**
     * Group by RentalSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalSpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalSpaceGroupByArgs['orderBy'] }
        : { orderBy?: RentalSpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalSpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalSpace model
   */
  readonly fields: RentalSpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalSpace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalSpaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RentalSpace model
   */
  interface RentalSpaceFieldRefs {
    readonly id: FieldRef<"RentalSpace", 'Int'>
    readonly vendorId: FieldRef<"RentalSpace", 'Int'>
    readonly location: FieldRef<"RentalSpace", 'String'>
    readonly size: FieldRef<"RentalSpace", 'String'>
    readonly price: FieldRef<"RentalSpace", 'Float'>
    readonly availability: FieldRef<"RentalSpace", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RentalSpace findUnique
   */
  export type RentalSpaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpace to fetch.
     */
    where: RentalSpaceWhereUniqueInput
  }

  /**
   * RentalSpace findUniqueOrThrow
   */
  export type RentalSpaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpace to fetch.
     */
    where: RentalSpaceWhereUniqueInput
  }

  /**
   * RentalSpace findFirst
   */
  export type RentalSpaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpace to fetch.
     */
    where?: RentalSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSpaces to fetch.
     */
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalSpaces.
     */
    cursor?: RentalSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalSpaces.
     */
    distinct?: RentalSpaceScalarFieldEnum | RentalSpaceScalarFieldEnum[]
  }

  /**
   * RentalSpace findFirstOrThrow
   */
  export type RentalSpaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpace to fetch.
     */
    where?: RentalSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSpaces to fetch.
     */
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalSpaces.
     */
    cursor?: RentalSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalSpaces.
     */
    distinct?: RentalSpaceScalarFieldEnum | RentalSpaceScalarFieldEnum[]
  }

  /**
   * RentalSpace findMany
   */
  export type RentalSpaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpaces to fetch.
     */
    where?: RentalSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSpaces to fetch.
     */
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalSpaces.
     */
    cursor?: RentalSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalSpaces.
     */
    distinct?: RentalSpaceScalarFieldEnum | RentalSpaceScalarFieldEnum[]
  }

  /**
   * RentalSpace create
   */
  export type RentalSpaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * The data needed to create a RentalSpace.
     */
    data: XOR<RentalSpaceCreateInput, RentalSpaceUncheckedCreateInput>
  }

  /**
   * RentalSpace createMany
   */
  export type RentalSpaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalSpaces.
     */
    data: RentalSpaceCreateManyInput | RentalSpaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalSpace createManyAndReturn
   */
  export type RentalSpaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * The data used to create many RentalSpaces.
     */
    data: RentalSpaceCreateManyInput | RentalSpaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalSpace update
   */
  export type RentalSpaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * The data needed to update a RentalSpace.
     */
    data: XOR<RentalSpaceUpdateInput, RentalSpaceUncheckedUpdateInput>
    /**
     * Choose, which RentalSpace to update.
     */
    where: RentalSpaceWhereUniqueInput
  }

  /**
   * RentalSpace updateMany
   */
  export type RentalSpaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalSpaces.
     */
    data: XOR<RentalSpaceUpdateManyMutationInput, RentalSpaceUncheckedUpdateManyInput>
    /**
     * Filter which RentalSpaces to update
     */
    where?: RentalSpaceWhereInput
    /**
     * Limit how many RentalSpaces to update.
     */
    limit?: number
  }

  /**
   * RentalSpace updateManyAndReturn
   */
  export type RentalSpaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * The data used to update RentalSpaces.
     */
    data: XOR<RentalSpaceUpdateManyMutationInput, RentalSpaceUncheckedUpdateManyInput>
    /**
     * Filter which RentalSpaces to update
     */
    where?: RentalSpaceWhereInput
    /**
     * Limit how many RentalSpaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalSpace upsert
   */
  export type RentalSpaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * The filter to search for the RentalSpace to update in case it exists.
     */
    where: RentalSpaceWhereUniqueInput
    /**
     * In case the RentalSpace found by the `where` argument doesn't exist, create a new RentalSpace with this data.
     */
    create: XOR<RentalSpaceCreateInput, RentalSpaceUncheckedCreateInput>
    /**
     * In case the RentalSpace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalSpaceUpdateInput, RentalSpaceUncheckedUpdateInput>
  }

  /**
   * RentalSpace delete
   */
  export type RentalSpaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter which RentalSpace to delete.
     */
    where: RentalSpaceWhereUniqueInput
  }

  /**
   * RentalSpace deleteMany
   */
  export type RentalSpaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalSpaces to delete
     */
    where?: RentalSpaceWhereInput
    /**
     * Limit how many RentalSpaces to delete.
     */
    limit?: number
  }

  /**
   * RentalSpace without action
   */
  export type RentalSpaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalSpace
     */
    omit?: RentalSpaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
  }


  /**
   * Model CommunityPost
   */

  export type AggregateCommunityPost = {
    _count: CommunityPostCountAggregateOutputType | null
    _avg: CommunityPostAvgAggregateOutputType | null
    _sum: CommunityPostSumAggregateOutputType | null
    _min: CommunityPostMinAggregateOutputType | null
    _max: CommunityPostMaxAggregateOutputType | null
  }

  export type CommunityPostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CommunityPostSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CommunityPostMinAggregateOutputType = {
    id: number | null
    userId: number | null
    postContent: string | null
    postDate: Date | null
  }

  export type CommunityPostMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    postContent: string | null
    postDate: Date | null
  }

  export type CommunityPostCountAggregateOutputType = {
    id: number
    userId: number
    postContent: number
    postDate: number
    _all: number
  }


  export type CommunityPostAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CommunityPostSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CommunityPostMinAggregateInputType = {
    id?: true
    userId?: true
    postContent?: true
    postDate?: true
  }

  export type CommunityPostMaxAggregateInputType = {
    id?: true
    userId?: true
    postContent?: true
    postDate?: true
  }

  export type CommunityPostCountAggregateInputType = {
    id?: true
    userId?: true
    postContent?: true
    postDate?: true
    _all?: true
  }

  export type CommunityPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityPost to aggregate.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityPosts
    **/
    _count?: true | CommunityPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunityPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityPostMaxAggregateInputType
  }

  export type GetCommunityPostAggregateType<T extends CommunityPostAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityPost[P]>
      : GetScalarType<T[P], AggregateCommunityPost[P]>
  }




  export type CommunityPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityPostWhereInput
    orderBy?: CommunityPostOrderByWithAggregationInput | CommunityPostOrderByWithAggregationInput[]
    by: CommunityPostScalarFieldEnum[] | CommunityPostScalarFieldEnum
    having?: CommunityPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityPostCountAggregateInputType | true
    _avg?: CommunityPostAvgAggregateInputType
    _sum?: CommunityPostSumAggregateInputType
    _min?: CommunityPostMinAggregateInputType
    _max?: CommunityPostMaxAggregateInputType
  }

  export type CommunityPostGroupByOutputType = {
    id: number
    userId: number
    postContent: string
    postDate: Date
    _count: CommunityPostCountAggregateOutputType | null
    _avg: CommunityPostAvgAggregateOutputType | null
    _sum: CommunityPostSumAggregateOutputType | null
    _min: CommunityPostMinAggregateOutputType | null
    _max: CommunityPostMaxAggregateOutputType | null
  }

  type GetCommunityPostGroupByPayload<T extends CommunityPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityPostGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityPostGroupByOutputType[P]>
        }
      >
    >


  export type CommunityPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postContent?: boolean
    postDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postContent?: boolean
    postDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postContent?: boolean
    postDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectScalar = {
    id?: boolean
    userId?: boolean
    postContent?: boolean
    postDate?: boolean
  }

  export type CommunityPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postContent" | "postDate", ExtArgs["result"]["communityPost"]>
  export type CommunityPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommunityPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      postContent: string
      postDate: Date
    }, ExtArgs["result"]["communityPost"]>
    composites: {}
  }

  type CommunityPostGetPayload<S extends boolean | null | undefined | CommunityPostDefaultArgs> = $Result.GetResult<Prisma.$CommunityPostPayload, S>

  type CommunityPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityPostCountAggregateInputType | true
    }

  export interface CommunityPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityPost'], meta: { name: 'CommunityPost' } }
    /**
     * Find zero or one CommunityPost that matches the filter.
     * @param {CommunityPostFindUniqueArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityPostFindUniqueArgs>(args: SelectSubset<T, CommunityPostFindUniqueArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityPostFindUniqueOrThrowArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityPostFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindFirstArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityPostFindFirstArgs>(args?: SelectSubset<T, CommunityPostFindFirstArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindFirstOrThrowArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityPostFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityPosts
     * const communityPosts = await prisma.communityPost.findMany()
     * 
     * // Get first 10 CommunityPosts
     * const communityPosts = await prisma.communityPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityPostFindManyArgs>(args?: SelectSubset<T, CommunityPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityPost.
     * @param {CommunityPostCreateArgs} args - Arguments to create a CommunityPost.
     * @example
     * // Create one CommunityPost
     * const CommunityPost = await prisma.communityPost.create({
     *   data: {
     *     // ... data to create a CommunityPost
     *   }
     * })
     * 
     */
    create<T extends CommunityPostCreateArgs>(args: SelectSubset<T, CommunityPostCreateArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityPosts.
     * @param {CommunityPostCreateManyArgs} args - Arguments to create many CommunityPosts.
     * @example
     * // Create many CommunityPosts
     * const communityPost = await prisma.communityPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityPostCreateManyArgs>(args?: SelectSubset<T, CommunityPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityPosts and returns the data saved in the database.
     * @param {CommunityPostCreateManyAndReturnArgs} args - Arguments to create many CommunityPosts.
     * @example
     * // Create many CommunityPosts
     * const communityPost = await prisma.communityPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityPosts and only return the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityPostCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityPost.
     * @param {CommunityPostDeleteArgs} args - Arguments to delete one CommunityPost.
     * @example
     * // Delete one CommunityPost
     * const CommunityPost = await prisma.communityPost.delete({
     *   where: {
     *     // ... filter to delete one CommunityPost
     *   }
     * })
     * 
     */
    delete<T extends CommunityPostDeleteArgs>(args: SelectSubset<T, CommunityPostDeleteArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityPost.
     * @param {CommunityPostUpdateArgs} args - Arguments to update one CommunityPost.
     * @example
     * // Update one CommunityPost
     * const communityPost = await prisma.communityPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityPostUpdateArgs>(args: SelectSubset<T, CommunityPostUpdateArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityPosts.
     * @param {CommunityPostDeleteManyArgs} args - Arguments to filter CommunityPosts to delete.
     * @example
     * // Delete a few CommunityPosts
     * const { count } = await prisma.communityPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityPostDeleteManyArgs>(args?: SelectSubset<T, CommunityPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityPosts
     * const communityPost = await prisma.communityPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityPostUpdateManyArgs>(args: SelectSubset<T, CommunityPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityPosts and returns the data updated in the database.
     * @param {CommunityPostUpdateManyAndReturnArgs} args - Arguments to update many CommunityPosts.
     * @example
     * // Update many CommunityPosts
     * const communityPost = await prisma.communityPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityPosts and only return the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunityPostUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityPost.
     * @param {CommunityPostUpsertArgs} args - Arguments to update or create a CommunityPost.
     * @example
     * // Update or create a CommunityPost
     * const communityPost = await prisma.communityPost.upsert({
     *   create: {
     *     // ... data to create a CommunityPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityPost we want to update
     *   }
     * })
     */
    upsert<T extends CommunityPostUpsertArgs>(args: SelectSubset<T, CommunityPostUpsertArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostCountArgs} args - Arguments to filter CommunityPosts to count.
     * @example
     * // Count the number of CommunityPosts
     * const count = await prisma.communityPost.count({
     *   where: {
     *     // ... the filter for the CommunityPosts we want to count
     *   }
     * })
    **/
    count<T extends CommunityPostCountArgs>(
      args?: Subset<T, CommunityPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityPostAggregateArgs>(args: Subset<T, CommunityPostAggregateArgs>): Prisma.PrismaPromise<GetCommunityPostAggregateType<T>>

    /**
     * Group by CommunityPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityPostGroupByArgs['orderBy'] }
        : { orderBy?: CommunityPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityPost model
   */
  readonly fields: CommunityPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommunityPost model
   */
  interface CommunityPostFieldRefs {
    readonly id: FieldRef<"CommunityPost", 'Int'>
    readonly userId: FieldRef<"CommunityPost", 'Int'>
    readonly postContent: FieldRef<"CommunityPost", 'String'>
    readonly postDate: FieldRef<"CommunityPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityPost findUnique
   */
  export type CommunityPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost findUniqueOrThrow
   */
  export type CommunityPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost findFirst
   */
  export type CommunityPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost findFirstOrThrow
   */
  export type CommunityPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost findMany
   */
  export type CommunityPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPosts to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost create
   */
  export type CommunityPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunityPost.
     */
    data: XOR<CommunityPostCreateInput, CommunityPostUncheckedCreateInput>
  }

  /**
   * CommunityPost createMany
   */
  export type CommunityPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityPosts.
     */
    data: CommunityPostCreateManyInput | CommunityPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityPost createManyAndReturn
   */
  export type CommunityPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityPosts.
     */
    data: CommunityPostCreateManyInput | CommunityPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityPost update
   */
  export type CommunityPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunityPost.
     */
    data: XOR<CommunityPostUpdateInput, CommunityPostUncheckedUpdateInput>
    /**
     * Choose, which CommunityPost to update.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost updateMany
   */
  export type CommunityPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityPosts.
     */
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyInput>
    /**
     * Filter which CommunityPosts to update
     */
    where?: CommunityPostWhereInput
    /**
     * Limit how many CommunityPosts to update.
     */
    limit?: number
  }

  /**
   * CommunityPost updateManyAndReturn
   */
  export type CommunityPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * The data used to update CommunityPosts.
     */
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyInput>
    /**
     * Filter which CommunityPosts to update
     */
    where?: CommunityPostWhereInput
    /**
     * Limit how many CommunityPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityPost upsert
   */
  export type CommunityPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunityPost to update in case it exists.
     */
    where: CommunityPostWhereUniqueInput
    /**
     * In case the CommunityPost found by the `where` argument doesn't exist, create a new CommunityPost with this data.
     */
    create: XOR<CommunityPostCreateInput, CommunityPostUncheckedCreateInput>
    /**
     * In case the CommunityPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityPostUpdateInput, CommunityPostUncheckedUpdateInput>
  }

  /**
   * CommunityPost delete
   */
  export type CommunityPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter which CommunityPost to delete.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost deleteMany
   */
  export type CommunityPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityPosts to delete
     */
    where?: CommunityPostWhereInput
    /**
     * Limit how many CommunityPosts to delete.
     */
    limit?: number
  }

  /**
   * CommunityPost without action
   */
  export type CommunityPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
  }


  /**
   * Model SustainabilityCert
   */

  export type AggregateSustainabilityCert = {
    _count: SustainabilityCertCountAggregateOutputType | null
    _avg: SustainabilityCertAvgAggregateOutputType | null
    _sum: SustainabilityCertSumAggregateOutputType | null
    _min: SustainabilityCertMinAggregateOutputType | null
    _max: SustainabilityCertMaxAggregateOutputType | null
  }

  export type SustainabilityCertAvgAggregateOutputType = {
    id: number | null
    vendorId: number | null
  }

  export type SustainabilityCertSumAggregateOutputType = {
    id: number | null
    vendorId: number | null
  }

  export type SustainabilityCertMinAggregateOutputType = {
    id: number | null
    vendorId: number | null
    certifyingAgency: string | null
    certificationDate: Date | null
  }

  export type SustainabilityCertMaxAggregateOutputType = {
    id: number | null
    vendorId: number | null
    certifyingAgency: string | null
    certificationDate: Date | null
  }

  export type SustainabilityCertCountAggregateOutputType = {
    id: number
    vendorId: number
    certifyingAgency: number
    certificationDate: number
    _all: number
  }


  export type SustainabilityCertAvgAggregateInputType = {
    id?: true
    vendorId?: true
  }

  export type SustainabilityCertSumAggregateInputType = {
    id?: true
    vendorId?: true
  }

  export type SustainabilityCertMinAggregateInputType = {
    id?: true
    vendorId?: true
    certifyingAgency?: true
    certificationDate?: true
  }

  export type SustainabilityCertMaxAggregateInputType = {
    id?: true
    vendorId?: true
    certifyingAgency?: true
    certificationDate?: true
  }

  export type SustainabilityCertCountAggregateInputType = {
    id?: true
    vendorId?: true
    certifyingAgency?: true
    certificationDate?: true
    _all?: true
  }

  export type SustainabilityCertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SustainabilityCert to aggregate.
     */
    where?: SustainabilityCertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SustainabilityCerts to fetch.
     */
    orderBy?: SustainabilityCertOrderByWithRelationInput | SustainabilityCertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SustainabilityCertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SustainabilityCerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SustainabilityCerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SustainabilityCerts
    **/
    _count?: true | SustainabilityCertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SustainabilityCertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SustainabilityCertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SustainabilityCertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SustainabilityCertMaxAggregateInputType
  }

  export type GetSustainabilityCertAggregateType<T extends SustainabilityCertAggregateArgs> = {
        [P in keyof T & keyof AggregateSustainabilityCert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSustainabilityCert[P]>
      : GetScalarType<T[P], AggregateSustainabilityCert[P]>
  }




  export type SustainabilityCertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SustainabilityCertWhereInput
    orderBy?: SustainabilityCertOrderByWithAggregationInput | SustainabilityCertOrderByWithAggregationInput[]
    by: SustainabilityCertScalarFieldEnum[] | SustainabilityCertScalarFieldEnum
    having?: SustainabilityCertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SustainabilityCertCountAggregateInputType | true
    _avg?: SustainabilityCertAvgAggregateInputType
    _sum?: SustainabilityCertSumAggregateInputType
    _min?: SustainabilityCertMinAggregateInputType
    _max?: SustainabilityCertMaxAggregateInputType
  }

  export type SustainabilityCertGroupByOutputType = {
    id: number
    vendorId: number
    certifyingAgency: string
    certificationDate: Date
    _count: SustainabilityCertCountAggregateOutputType | null
    _avg: SustainabilityCertAvgAggregateOutputType | null
    _sum: SustainabilityCertSumAggregateOutputType | null
    _min: SustainabilityCertMinAggregateOutputType | null
    _max: SustainabilityCertMaxAggregateOutputType | null
  }

  type GetSustainabilityCertGroupByPayload<T extends SustainabilityCertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SustainabilityCertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SustainabilityCertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SustainabilityCertGroupByOutputType[P]>
            : GetScalarType<T[P], SustainabilityCertGroupByOutputType[P]>
        }
      >
    >


  export type SustainabilityCertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    certifyingAgency?: boolean
    certificationDate?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sustainabilityCert"]>

  export type SustainabilityCertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    certifyingAgency?: boolean
    certificationDate?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sustainabilityCert"]>

  export type SustainabilityCertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    certifyingAgency?: boolean
    certificationDate?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sustainabilityCert"]>

  export type SustainabilityCertSelectScalar = {
    id?: boolean
    vendorId?: boolean
    certifyingAgency?: boolean
    certificationDate?: boolean
  }

  export type SustainabilityCertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "certifyingAgency" | "certificationDate", ExtArgs["result"]["sustainabilityCert"]>
  export type SustainabilityCertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type SustainabilityCertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type SustainabilityCertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $SustainabilityCertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SustainabilityCert"
    objects: {
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vendorId: number
      certifyingAgency: string
      certificationDate: Date
    }, ExtArgs["result"]["sustainabilityCert"]>
    composites: {}
  }

  type SustainabilityCertGetPayload<S extends boolean | null | undefined | SustainabilityCertDefaultArgs> = $Result.GetResult<Prisma.$SustainabilityCertPayload, S>

  type SustainabilityCertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SustainabilityCertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SustainabilityCertCountAggregateInputType | true
    }

  export interface SustainabilityCertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SustainabilityCert'], meta: { name: 'SustainabilityCert' } }
    /**
     * Find zero or one SustainabilityCert that matches the filter.
     * @param {SustainabilityCertFindUniqueArgs} args - Arguments to find a SustainabilityCert
     * @example
     * // Get one SustainabilityCert
     * const sustainabilityCert = await prisma.sustainabilityCert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SustainabilityCertFindUniqueArgs>(args: SelectSubset<T, SustainabilityCertFindUniqueArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SustainabilityCert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SustainabilityCertFindUniqueOrThrowArgs} args - Arguments to find a SustainabilityCert
     * @example
     * // Get one SustainabilityCert
     * const sustainabilityCert = await prisma.sustainabilityCert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SustainabilityCertFindUniqueOrThrowArgs>(args: SelectSubset<T, SustainabilityCertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SustainabilityCert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertFindFirstArgs} args - Arguments to find a SustainabilityCert
     * @example
     * // Get one SustainabilityCert
     * const sustainabilityCert = await prisma.sustainabilityCert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SustainabilityCertFindFirstArgs>(args?: SelectSubset<T, SustainabilityCertFindFirstArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SustainabilityCert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertFindFirstOrThrowArgs} args - Arguments to find a SustainabilityCert
     * @example
     * // Get one SustainabilityCert
     * const sustainabilityCert = await prisma.sustainabilityCert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SustainabilityCertFindFirstOrThrowArgs>(args?: SelectSubset<T, SustainabilityCertFindFirstOrThrowArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SustainabilityCerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SustainabilityCerts
     * const sustainabilityCerts = await prisma.sustainabilityCert.findMany()
     * 
     * // Get first 10 SustainabilityCerts
     * const sustainabilityCerts = await prisma.sustainabilityCert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sustainabilityCertWithIdOnly = await prisma.sustainabilityCert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SustainabilityCertFindManyArgs>(args?: SelectSubset<T, SustainabilityCertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SustainabilityCert.
     * @param {SustainabilityCertCreateArgs} args - Arguments to create a SustainabilityCert.
     * @example
     * // Create one SustainabilityCert
     * const SustainabilityCert = await prisma.sustainabilityCert.create({
     *   data: {
     *     // ... data to create a SustainabilityCert
     *   }
     * })
     * 
     */
    create<T extends SustainabilityCertCreateArgs>(args: SelectSubset<T, SustainabilityCertCreateArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SustainabilityCerts.
     * @param {SustainabilityCertCreateManyArgs} args - Arguments to create many SustainabilityCerts.
     * @example
     * // Create many SustainabilityCerts
     * const sustainabilityCert = await prisma.sustainabilityCert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SustainabilityCertCreateManyArgs>(args?: SelectSubset<T, SustainabilityCertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SustainabilityCerts and returns the data saved in the database.
     * @param {SustainabilityCertCreateManyAndReturnArgs} args - Arguments to create many SustainabilityCerts.
     * @example
     * // Create many SustainabilityCerts
     * const sustainabilityCert = await prisma.sustainabilityCert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SustainabilityCerts and only return the `id`
     * const sustainabilityCertWithIdOnly = await prisma.sustainabilityCert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SustainabilityCertCreateManyAndReturnArgs>(args?: SelectSubset<T, SustainabilityCertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SustainabilityCert.
     * @param {SustainabilityCertDeleteArgs} args - Arguments to delete one SustainabilityCert.
     * @example
     * // Delete one SustainabilityCert
     * const SustainabilityCert = await prisma.sustainabilityCert.delete({
     *   where: {
     *     // ... filter to delete one SustainabilityCert
     *   }
     * })
     * 
     */
    delete<T extends SustainabilityCertDeleteArgs>(args: SelectSubset<T, SustainabilityCertDeleteArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SustainabilityCert.
     * @param {SustainabilityCertUpdateArgs} args - Arguments to update one SustainabilityCert.
     * @example
     * // Update one SustainabilityCert
     * const sustainabilityCert = await prisma.sustainabilityCert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SustainabilityCertUpdateArgs>(args: SelectSubset<T, SustainabilityCertUpdateArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SustainabilityCerts.
     * @param {SustainabilityCertDeleteManyArgs} args - Arguments to filter SustainabilityCerts to delete.
     * @example
     * // Delete a few SustainabilityCerts
     * const { count } = await prisma.sustainabilityCert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SustainabilityCertDeleteManyArgs>(args?: SelectSubset<T, SustainabilityCertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SustainabilityCerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SustainabilityCerts
     * const sustainabilityCert = await prisma.sustainabilityCert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SustainabilityCertUpdateManyArgs>(args: SelectSubset<T, SustainabilityCertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SustainabilityCerts and returns the data updated in the database.
     * @param {SustainabilityCertUpdateManyAndReturnArgs} args - Arguments to update many SustainabilityCerts.
     * @example
     * // Update many SustainabilityCerts
     * const sustainabilityCert = await prisma.sustainabilityCert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SustainabilityCerts and only return the `id`
     * const sustainabilityCertWithIdOnly = await prisma.sustainabilityCert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SustainabilityCertUpdateManyAndReturnArgs>(args: SelectSubset<T, SustainabilityCertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SustainabilityCert.
     * @param {SustainabilityCertUpsertArgs} args - Arguments to update or create a SustainabilityCert.
     * @example
     * // Update or create a SustainabilityCert
     * const sustainabilityCert = await prisma.sustainabilityCert.upsert({
     *   create: {
     *     // ... data to create a SustainabilityCert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SustainabilityCert we want to update
     *   }
     * })
     */
    upsert<T extends SustainabilityCertUpsertArgs>(args: SelectSubset<T, SustainabilityCertUpsertArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SustainabilityCerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertCountArgs} args - Arguments to filter SustainabilityCerts to count.
     * @example
     * // Count the number of SustainabilityCerts
     * const count = await prisma.sustainabilityCert.count({
     *   where: {
     *     // ... the filter for the SustainabilityCerts we want to count
     *   }
     * })
    **/
    count<T extends SustainabilityCertCountArgs>(
      args?: Subset<T, SustainabilityCertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SustainabilityCertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SustainabilityCert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SustainabilityCertAggregateArgs>(args: Subset<T, SustainabilityCertAggregateArgs>): Prisma.PrismaPromise<GetSustainabilityCertAggregateType<T>>

    /**
     * Group by SustainabilityCert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SustainabilityCertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SustainabilityCertGroupByArgs['orderBy'] }
        : { orderBy?: SustainabilityCertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SustainabilityCertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSustainabilityCertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SustainabilityCert model
   */
  readonly fields: SustainabilityCertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SustainabilityCert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SustainabilityCertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SustainabilityCert model
   */
  interface SustainabilityCertFieldRefs {
    readonly id: FieldRef<"SustainabilityCert", 'Int'>
    readonly vendorId: FieldRef<"SustainabilityCert", 'Int'>
    readonly certifyingAgency: FieldRef<"SustainabilityCert", 'String'>
    readonly certificationDate: FieldRef<"SustainabilityCert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SustainabilityCert findUnique
   */
  export type SustainabilityCertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * Filter, which SustainabilityCert to fetch.
     */
    where: SustainabilityCertWhereUniqueInput
  }

  /**
   * SustainabilityCert findUniqueOrThrow
   */
  export type SustainabilityCertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * Filter, which SustainabilityCert to fetch.
     */
    where: SustainabilityCertWhereUniqueInput
  }

  /**
   * SustainabilityCert findFirst
   */
  export type SustainabilityCertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * Filter, which SustainabilityCert to fetch.
     */
    where?: SustainabilityCertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SustainabilityCerts to fetch.
     */
    orderBy?: SustainabilityCertOrderByWithRelationInput | SustainabilityCertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SustainabilityCerts.
     */
    cursor?: SustainabilityCertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SustainabilityCerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SustainabilityCerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SustainabilityCerts.
     */
    distinct?: SustainabilityCertScalarFieldEnum | SustainabilityCertScalarFieldEnum[]
  }

  /**
   * SustainabilityCert findFirstOrThrow
   */
  export type SustainabilityCertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * Filter, which SustainabilityCert to fetch.
     */
    where?: SustainabilityCertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SustainabilityCerts to fetch.
     */
    orderBy?: SustainabilityCertOrderByWithRelationInput | SustainabilityCertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SustainabilityCerts.
     */
    cursor?: SustainabilityCertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SustainabilityCerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SustainabilityCerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SustainabilityCerts.
     */
    distinct?: SustainabilityCertScalarFieldEnum | SustainabilityCertScalarFieldEnum[]
  }

  /**
   * SustainabilityCert findMany
   */
  export type SustainabilityCertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * Filter, which SustainabilityCerts to fetch.
     */
    where?: SustainabilityCertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SustainabilityCerts to fetch.
     */
    orderBy?: SustainabilityCertOrderByWithRelationInput | SustainabilityCertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SustainabilityCerts.
     */
    cursor?: SustainabilityCertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SustainabilityCerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SustainabilityCerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SustainabilityCerts.
     */
    distinct?: SustainabilityCertScalarFieldEnum | SustainabilityCertScalarFieldEnum[]
  }

  /**
   * SustainabilityCert create
   */
  export type SustainabilityCertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * The data needed to create a SustainabilityCert.
     */
    data: XOR<SustainabilityCertCreateInput, SustainabilityCertUncheckedCreateInput>
  }

  /**
   * SustainabilityCert createMany
   */
  export type SustainabilityCertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SustainabilityCerts.
     */
    data: SustainabilityCertCreateManyInput | SustainabilityCertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SustainabilityCert createManyAndReturn
   */
  export type SustainabilityCertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * The data used to create many SustainabilityCerts.
     */
    data: SustainabilityCertCreateManyInput | SustainabilityCertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SustainabilityCert update
   */
  export type SustainabilityCertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * The data needed to update a SustainabilityCert.
     */
    data: XOR<SustainabilityCertUpdateInput, SustainabilityCertUncheckedUpdateInput>
    /**
     * Choose, which SustainabilityCert to update.
     */
    where: SustainabilityCertWhereUniqueInput
  }

  /**
   * SustainabilityCert updateMany
   */
  export type SustainabilityCertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SustainabilityCerts.
     */
    data: XOR<SustainabilityCertUpdateManyMutationInput, SustainabilityCertUncheckedUpdateManyInput>
    /**
     * Filter which SustainabilityCerts to update
     */
    where?: SustainabilityCertWhereInput
    /**
     * Limit how many SustainabilityCerts to update.
     */
    limit?: number
  }

  /**
   * SustainabilityCert updateManyAndReturn
   */
  export type SustainabilityCertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * The data used to update SustainabilityCerts.
     */
    data: XOR<SustainabilityCertUpdateManyMutationInput, SustainabilityCertUncheckedUpdateManyInput>
    /**
     * Filter which SustainabilityCerts to update
     */
    where?: SustainabilityCertWhereInput
    /**
     * Limit how many SustainabilityCerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SustainabilityCert upsert
   */
  export type SustainabilityCertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * The filter to search for the SustainabilityCert to update in case it exists.
     */
    where: SustainabilityCertWhereUniqueInput
    /**
     * In case the SustainabilityCert found by the `where` argument doesn't exist, create a new SustainabilityCert with this data.
     */
    create: XOR<SustainabilityCertCreateInput, SustainabilityCertUncheckedCreateInput>
    /**
     * In case the SustainabilityCert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SustainabilityCertUpdateInput, SustainabilityCertUncheckedUpdateInput>
  }

  /**
   * SustainabilityCert delete
   */
  export type SustainabilityCertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * Filter which SustainabilityCert to delete.
     */
    where: SustainabilityCertWhereUniqueInput
  }

  /**
   * SustainabilityCert deleteMany
   */
  export type SustainabilityCertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SustainabilityCerts to delete
     */
    where?: SustainabilityCertWhereInput
    /**
     * Limit how many SustainabilityCerts to delete.
     */
    limit?: number
  }

  /**
   * SustainabilityCert without action
   */
  export type SustainabilityCertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SustainabilityCert
     */
    omit?: SustainabilityCertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VendorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    farmName: 'farmName',
    certificationStatus: 'certificationStatus',
    farmLocation: 'farmLocation'
  };

  export type VendorProfileScalarFieldEnum = (typeof VendorProfileScalarFieldEnum)[keyof typeof VendorProfileScalarFieldEnum]


  export const ProduceScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    name: 'name',
    description: 'description',
    price: 'price',
    category: 'category',
    certificationStatus: 'certificationStatus',
    availableQuantity: 'availableQuantity'
  };

  export type ProduceScalarFieldEnum = (typeof ProduceScalarFieldEnum)[keyof typeof ProduceScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    produceId: 'produceId',
    vendorId: 'vendorId',
    status: 'status',
    orderDate: 'orderDate'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const RentalSpaceScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    location: 'location',
    size: 'size',
    price: 'price',
    availability: 'availability'
  };

  export type RentalSpaceScalarFieldEnum = (typeof RentalSpaceScalarFieldEnum)[keyof typeof RentalSpaceScalarFieldEnum]


  export const CommunityPostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postContent: 'postContent',
    postDate: 'postDate'
  };

  export type CommunityPostScalarFieldEnum = (typeof CommunityPostScalarFieldEnum)[keyof typeof CommunityPostScalarFieldEnum]


  export const SustainabilityCertScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    certifyingAgency: 'certifyingAgency',
    certificationDate: 'certificationDate'
  };

  export type SustainabilityCertScalarFieldEnum = (typeof SustainabilityCertScalarFieldEnum)[keyof typeof SustainabilityCertScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CertificationStatus'
   */
  export type EnumCertificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CertificationStatus'>
    


  /**
   * Reference to a field of type 'CertificationStatus[]'
   */
  export type ListEnumCertificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CertificationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    vendorProfile?: XOR<VendorProfileNullableScalarRelationFilter, VendorProfileWhereInput> | null
    orders?: OrderListRelationFilter
    posts?: CommunityPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    vendorProfile?: VendorProfileOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    posts?: CommunityPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    vendorProfile?: XOR<VendorProfileNullableScalarRelationFilter, VendorProfileWhereInput> | null
    orders?: OrderListRelationFilter
    posts?: CommunityPostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VendorProfileWhereInput = {
    AND?: VendorProfileWhereInput | VendorProfileWhereInput[]
    OR?: VendorProfileWhereInput[]
    NOT?: VendorProfileWhereInput | VendorProfileWhereInput[]
    id?: IntFilter<"VendorProfile"> | number
    userId?: IntFilter<"VendorProfile"> | number
    farmName?: StringFilter<"VendorProfile"> | string
    certificationStatus?: EnumCertificationStatusFilter<"VendorProfile"> | $Enums.CertificationStatus
    farmLocation?: StringFilter<"VendorProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    produce?: ProduceListRelationFilter
    orders?: OrderListRelationFilter
    rentalSpaces?: RentalSpaceListRelationFilter
    certifications?: SustainabilityCertListRelationFilter
  }

  export type VendorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    certificationStatus?: SortOrder
    farmLocation?: SortOrder
    user?: UserOrderByWithRelationInput
    produce?: ProduceOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    rentalSpaces?: RentalSpaceOrderByRelationAggregateInput
    certifications?: SustainabilityCertOrderByRelationAggregateInput
  }

  export type VendorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: VendorProfileWhereInput | VendorProfileWhereInput[]
    OR?: VendorProfileWhereInput[]
    NOT?: VendorProfileWhereInput | VendorProfileWhereInput[]
    farmName?: StringFilter<"VendorProfile"> | string
    certificationStatus?: EnumCertificationStatusFilter<"VendorProfile"> | $Enums.CertificationStatus
    farmLocation?: StringFilter<"VendorProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    produce?: ProduceListRelationFilter
    orders?: OrderListRelationFilter
    rentalSpaces?: RentalSpaceListRelationFilter
    certifications?: SustainabilityCertListRelationFilter
  }, "id" | "userId">

  export type VendorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    certificationStatus?: SortOrder
    farmLocation?: SortOrder
    _count?: VendorProfileCountOrderByAggregateInput
    _avg?: VendorProfileAvgOrderByAggregateInput
    _max?: VendorProfileMaxOrderByAggregateInput
    _min?: VendorProfileMinOrderByAggregateInput
    _sum?: VendorProfileSumOrderByAggregateInput
  }

  export type VendorProfileScalarWhereWithAggregatesInput = {
    AND?: VendorProfileScalarWhereWithAggregatesInput | VendorProfileScalarWhereWithAggregatesInput[]
    OR?: VendorProfileScalarWhereWithAggregatesInput[]
    NOT?: VendorProfileScalarWhereWithAggregatesInput | VendorProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VendorProfile"> | number
    userId?: IntWithAggregatesFilter<"VendorProfile"> | number
    farmName?: StringWithAggregatesFilter<"VendorProfile"> | string
    certificationStatus?: EnumCertificationStatusWithAggregatesFilter<"VendorProfile"> | $Enums.CertificationStatus
    farmLocation?: StringWithAggregatesFilter<"VendorProfile"> | string
  }

  export type ProduceWhereInput = {
    AND?: ProduceWhereInput | ProduceWhereInput[]
    OR?: ProduceWhereInput[]
    NOT?: ProduceWhereInput | ProduceWhereInput[]
    id?: IntFilter<"Produce"> | number
    vendorId?: IntFilter<"Produce"> | number
    name?: StringFilter<"Produce"> | string
    description?: StringFilter<"Produce"> | string
    price?: FloatFilter<"Produce"> | number
    category?: StringFilter<"Produce"> | string
    certificationStatus?: EnumCertificationStatusFilter<"Produce"> | $Enums.CertificationStatus
    availableQuantity?: IntFilter<"Produce"> | number
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }

  export type ProduceOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    certificationStatus?: SortOrder
    availableQuantity?: SortOrder
    vendor?: VendorProfileOrderByWithRelationInput
  }

  export type ProduceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProduceWhereInput | ProduceWhereInput[]
    OR?: ProduceWhereInput[]
    NOT?: ProduceWhereInput | ProduceWhereInput[]
    vendorId?: IntFilter<"Produce"> | number
    name?: StringFilter<"Produce"> | string
    description?: StringFilter<"Produce"> | string
    price?: FloatFilter<"Produce"> | number
    category?: StringFilter<"Produce"> | string
    certificationStatus?: EnumCertificationStatusFilter<"Produce"> | $Enums.CertificationStatus
    availableQuantity?: IntFilter<"Produce"> | number
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }, "id">

  export type ProduceOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    certificationStatus?: SortOrder
    availableQuantity?: SortOrder
    _count?: ProduceCountOrderByAggregateInput
    _avg?: ProduceAvgOrderByAggregateInput
    _max?: ProduceMaxOrderByAggregateInput
    _min?: ProduceMinOrderByAggregateInput
    _sum?: ProduceSumOrderByAggregateInput
  }

  export type ProduceScalarWhereWithAggregatesInput = {
    AND?: ProduceScalarWhereWithAggregatesInput | ProduceScalarWhereWithAggregatesInput[]
    OR?: ProduceScalarWhereWithAggregatesInput[]
    NOT?: ProduceScalarWhereWithAggregatesInput | ProduceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produce"> | number
    vendorId?: IntWithAggregatesFilter<"Produce"> | number
    name?: StringWithAggregatesFilter<"Produce"> | string
    description?: StringWithAggregatesFilter<"Produce"> | string
    price?: FloatWithAggregatesFilter<"Produce"> | number
    category?: StringWithAggregatesFilter<"Produce"> | string
    certificationStatus?: EnumCertificationStatusWithAggregatesFilter<"Produce"> | $Enums.CertificationStatus
    availableQuantity?: IntWithAggregatesFilter<"Produce"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    produceId?: IntFilter<"Order"> | number
    vendorId?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    orderDate?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    user?: UserOrderByWithRelationInput
    vendor?: VendorProfileOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: IntFilter<"Order"> | number
    produceId?: IntFilter<"Order"> | number
    vendorId?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    orderDate?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    userId?: IntWithAggregatesFilter<"Order"> | number
    produceId?: IntWithAggregatesFilter<"Order"> | number
    vendorId?: IntWithAggregatesFilter<"Order"> | number
    status?: StringWithAggregatesFilter<"Order"> | string
    orderDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type RentalSpaceWhereInput = {
    AND?: RentalSpaceWhereInput | RentalSpaceWhereInput[]
    OR?: RentalSpaceWhereInput[]
    NOT?: RentalSpaceWhereInput | RentalSpaceWhereInput[]
    id?: IntFilter<"RentalSpace"> | number
    vendorId?: IntFilter<"RentalSpace"> | number
    location?: StringFilter<"RentalSpace"> | string
    size?: StringFilter<"RentalSpace"> | string
    price?: FloatFilter<"RentalSpace"> | number
    availability?: BoolFilter<"RentalSpace"> | boolean
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }

  export type RentalSpaceOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    location?: SortOrder
    size?: SortOrder
    price?: SortOrder
    availability?: SortOrder
    vendor?: VendorProfileOrderByWithRelationInput
  }

  export type RentalSpaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RentalSpaceWhereInput | RentalSpaceWhereInput[]
    OR?: RentalSpaceWhereInput[]
    NOT?: RentalSpaceWhereInput | RentalSpaceWhereInput[]
    vendorId?: IntFilter<"RentalSpace"> | number
    location?: StringFilter<"RentalSpace"> | string
    size?: StringFilter<"RentalSpace"> | string
    price?: FloatFilter<"RentalSpace"> | number
    availability?: BoolFilter<"RentalSpace"> | boolean
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }, "id">

  export type RentalSpaceOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    location?: SortOrder
    size?: SortOrder
    price?: SortOrder
    availability?: SortOrder
    _count?: RentalSpaceCountOrderByAggregateInput
    _avg?: RentalSpaceAvgOrderByAggregateInput
    _max?: RentalSpaceMaxOrderByAggregateInput
    _min?: RentalSpaceMinOrderByAggregateInput
    _sum?: RentalSpaceSumOrderByAggregateInput
  }

  export type RentalSpaceScalarWhereWithAggregatesInput = {
    AND?: RentalSpaceScalarWhereWithAggregatesInput | RentalSpaceScalarWhereWithAggregatesInput[]
    OR?: RentalSpaceScalarWhereWithAggregatesInput[]
    NOT?: RentalSpaceScalarWhereWithAggregatesInput | RentalSpaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RentalSpace"> | number
    vendorId?: IntWithAggregatesFilter<"RentalSpace"> | number
    location?: StringWithAggregatesFilter<"RentalSpace"> | string
    size?: StringWithAggregatesFilter<"RentalSpace"> | string
    price?: FloatWithAggregatesFilter<"RentalSpace"> | number
    availability?: BoolWithAggregatesFilter<"RentalSpace"> | boolean
  }

  export type CommunityPostWhereInput = {
    AND?: CommunityPostWhereInput | CommunityPostWhereInput[]
    OR?: CommunityPostWhereInput[]
    NOT?: CommunityPostWhereInput | CommunityPostWhereInput[]
    id?: IntFilter<"CommunityPost"> | number
    userId?: IntFilter<"CommunityPost"> | number
    postContent?: StringFilter<"CommunityPost"> | string
    postDate?: DateTimeFilter<"CommunityPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommunityPostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postContent?: SortOrder
    postDate?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CommunityPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommunityPostWhereInput | CommunityPostWhereInput[]
    OR?: CommunityPostWhereInput[]
    NOT?: CommunityPostWhereInput | CommunityPostWhereInput[]
    userId?: IntFilter<"CommunityPost"> | number
    postContent?: StringFilter<"CommunityPost"> | string
    postDate?: DateTimeFilter<"CommunityPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommunityPostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postContent?: SortOrder
    postDate?: SortOrder
    _count?: CommunityPostCountOrderByAggregateInput
    _avg?: CommunityPostAvgOrderByAggregateInput
    _max?: CommunityPostMaxOrderByAggregateInput
    _min?: CommunityPostMinOrderByAggregateInput
    _sum?: CommunityPostSumOrderByAggregateInput
  }

  export type CommunityPostScalarWhereWithAggregatesInput = {
    AND?: CommunityPostScalarWhereWithAggregatesInput | CommunityPostScalarWhereWithAggregatesInput[]
    OR?: CommunityPostScalarWhereWithAggregatesInput[]
    NOT?: CommunityPostScalarWhereWithAggregatesInput | CommunityPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommunityPost"> | number
    userId?: IntWithAggregatesFilter<"CommunityPost"> | number
    postContent?: StringWithAggregatesFilter<"CommunityPost"> | string
    postDate?: DateTimeWithAggregatesFilter<"CommunityPost"> | Date | string
  }

  export type SustainabilityCertWhereInput = {
    AND?: SustainabilityCertWhereInput | SustainabilityCertWhereInput[]
    OR?: SustainabilityCertWhereInput[]
    NOT?: SustainabilityCertWhereInput | SustainabilityCertWhereInput[]
    id?: IntFilter<"SustainabilityCert"> | number
    vendorId?: IntFilter<"SustainabilityCert"> | number
    certifyingAgency?: StringFilter<"SustainabilityCert"> | string
    certificationDate?: DateTimeFilter<"SustainabilityCert"> | Date | string
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }

  export type SustainabilityCertOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    certifyingAgency?: SortOrder
    certificationDate?: SortOrder
    vendor?: VendorProfileOrderByWithRelationInput
  }

  export type SustainabilityCertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SustainabilityCertWhereInput | SustainabilityCertWhereInput[]
    OR?: SustainabilityCertWhereInput[]
    NOT?: SustainabilityCertWhereInput | SustainabilityCertWhereInput[]
    vendorId?: IntFilter<"SustainabilityCert"> | number
    certifyingAgency?: StringFilter<"SustainabilityCert"> | string
    certificationDate?: DateTimeFilter<"SustainabilityCert"> | Date | string
    vendor?: XOR<VendorProfileScalarRelationFilter, VendorProfileWhereInput>
  }, "id">

  export type SustainabilityCertOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    certifyingAgency?: SortOrder
    certificationDate?: SortOrder
    _count?: SustainabilityCertCountOrderByAggregateInput
    _avg?: SustainabilityCertAvgOrderByAggregateInput
    _max?: SustainabilityCertMaxOrderByAggregateInput
    _min?: SustainabilityCertMinOrderByAggregateInput
    _sum?: SustainabilityCertSumOrderByAggregateInput
  }

  export type SustainabilityCertScalarWhereWithAggregatesInput = {
    AND?: SustainabilityCertScalarWhereWithAggregatesInput | SustainabilityCertScalarWhereWithAggregatesInput[]
    OR?: SustainabilityCertScalarWhereWithAggregatesInput[]
    NOT?: SustainabilityCertScalarWhereWithAggregatesInput | SustainabilityCertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SustainabilityCert"> | number
    vendorId?: IntWithAggregatesFilter<"SustainabilityCert"> | number
    certifyingAgency?: StringWithAggregatesFilter<"SustainabilityCert"> | string
    certificationDate?: DateTimeWithAggregatesFilter<"SustainabilityCert"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: string
    createdAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    posts?: CommunityPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: string
    createdAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    posts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    posts?: CommunityPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    posts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorProfileCreateInput = {
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    user: UserCreateNestedOneWithoutVendorProfileInput
    produce?: ProduceCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
    certifications?: SustainabilityCertCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateInput = {
    id?: number
    userId: number
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    produce?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
    certifications?: SustainabilityCertUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUpdateInput = {
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    produce?: ProduceUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
    certifications?: SustainabilityCertUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    produce?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
    certifications?: SustainabilityCertUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileCreateManyInput = {
    id?: number
    userId: number
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
  }

  export type VendorProfileUpdateManyMutationInput = {
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
  }

  export type VendorProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
  }

  export type ProduceCreateInput = {
    name: string
    description: string
    price: number
    category: string
    certificationStatus: $Enums.CertificationStatus
    availableQuantity: number
    vendor: VendorProfileCreateNestedOneWithoutProduceInput
  }

  export type ProduceUncheckedCreateInput = {
    id?: number
    vendorId: number
    name: string
    description: string
    price: number
    category: string
    certificationStatus: $Enums.CertificationStatus
    availableQuantity: number
  }

  export type ProduceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
    vendor?: VendorProfileUpdateOneRequiredWithoutProduceNestedInput
  }

  export type ProduceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProduceCreateManyInput = {
    id?: number
    vendorId: number
    name: string
    description: string
    price: number
    category: string
    certificationStatus: $Enums.CertificationStatus
    availableQuantity: number
  }

  export type ProduceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProduceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    produceId: number
    status: string
    orderDate?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    vendor: VendorProfileCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    userId: number
    produceId: number
    vendorId: number
    status: string
    orderDate?: Date | string
  }

  export type OrderUpdateInput = {
    produceId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    vendor?: VendorProfileUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    produceId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: number
    userId: number
    produceId: number
    vendorId: number
    status: string
    orderDate?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    produceId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    produceId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSpaceCreateInput = {
    location: string
    size: string
    price: number
    availability: boolean
    vendor: VendorProfileCreateNestedOneWithoutRentalSpacesInput
  }

  export type RentalSpaceUncheckedCreateInput = {
    id?: number
    vendorId: number
    location: string
    size: string
    price: number
    availability: boolean
  }

  export type RentalSpaceUpdateInput = {
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorProfileUpdateOneRequiredWithoutRentalSpacesNestedInput
  }

  export type RentalSpaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RentalSpaceCreateManyInput = {
    id?: number
    vendorId: number
    location: string
    size: string
    price: number
    availability: boolean
  }

  export type RentalSpaceUpdateManyMutationInput = {
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RentalSpaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommunityPostCreateInput = {
    postContent: string
    postDate?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type CommunityPostUncheckedCreateInput = {
    id?: number
    userId: number
    postContent: string
    postDate?: Date | string
  }

  export type CommunityPostUpdateInput = {
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type CommunityPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostCreateManyInput = {
    id?: number
    userId: number
    postContent: string
    postDate?: Date | string
  }

  export type CommunityPostUpdateManyMutationInput = {
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityCertCreateInput = {
    certifyingAgency: string
    certificationDate: Date | string
    vendor: VendorProfileCreateNestedOneWithoutCertificationsInput
  }

  export type SustainabilityCertUncheckedCreateInput = {
    id?: number
    vendorId: number
    certifyingAgency: string
    certificationDate: Date | string
  }

  export type SustainabilityCertUpdateInput = {
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutCertificationsNestedInput
  }

  export type SustainabilityCertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityCertCreateManyInput = {
    id?: number
    vendorId: number
    certifyingAgency: string
    certificationDate: Date | string
  }

  export type SustainabilityCertUpdateManyMutationInput = {
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityCertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VendorProfileNullableScalarRelationFilter = {
    is?: VendorProfileWhereInput | null
    isNot?: VendorProfileWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type CommunityPostListRelationFilter = {
    every?: CommunityPostWhereInput
    some?: CommunityPostWhereInput
    none?: CommunityPostWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCertificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificationStatus | EnumCertificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificationStatusFilter<$PrismaModel> | $Enums.CertificationStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProduceListRelationFilter = {
    every?: ProduceWhereInput
    some?: ProduceWhereInput
    none?: ProduceWhereInput
  }

  export type RentalSpaceListRelationFilter = {
    every?: RentalSpaceWhereInput
    some?: RentalSpaceWhereInput
    none?: RentalSpaceWhereInput
  }

  export type SustainabilityCertListRelationFilter = {
    every?: SustainabilityCertWhereInput
    some?: SustainabilityCertWhereInput
    none?: SustainabilityCertWhereInput
  }

  export type ProduceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalSpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SustainabilityCertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    certificationStatus?: SortOrder
    farmLocation?: SortOrder
  }

  export type VendorProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VendorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    certificationStatus?: SortOrder
    farmLocation?: SortOrder
  }

  export type VendorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    certificationStatus?: SortOrder
    farmLocation?: SortOrder
  }

  export type VendorProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumCertificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificationStatus | EnumCertificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CertificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCertificationStatusFilter<$PrismaModel>
    _max?: NestedEnumCertificationStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VendorProfileScalarRelationFilter = {
    is?: VendorProfileWhereInput
    isNot?: VendorProfileWhereInput
  }

  export type ProduceCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    certificationStatus?: SortOrder
    availableQuantity?: SortOrder
  }

  export type ProduceAvgOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    price?: SortOrder
    availableQuantity?: SortOrder
  }

  export type ProduceMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    certificationStatus?: SortOrder
    availableQuantity?: SortOrder
  }

  export type ProduceMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    certificationStatus?: SortOrder
    availableQuantity?: SortOrder
  }

  export type ProduceSumOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    price?: SortOrder
    availableQuantity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RentalSpaceCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    location?: SortOrder
    size?: SortOrder
    price?: SortOrder
    availability?: SortOrder
  }

  export type RentalSpaceAvgOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    price?: SortOrder
  }

  export type RentalSpaceMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    location?: SortOrder
    size?: SortOrder
    price?: SortOrder
    availability?: SortOrder
  }

  export type RentalSpaceMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    location?: SortOrder
    size?: SortOrder
    price?: SortOrder
    availability?: SortOrder
  }

  export type RentalSpaceSumOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    price?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CommunityPostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postContent?: SortOrder
    postDate?: SortOrder
  }

  export type CommunityPostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CommunityPostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postContent?: SortOrder
    postDate?: SortOrder
  }

  export type CommunityPostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postContent?: SortOrder
    postDate?: SortOrder
  }

  export type CommunityPostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SustainabilityCertCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    certifyingAgency?: SortOrder
    certificationDate?: SortOrder
  }

  export type SustainabilityCertAvgOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
  }

  export type SustainabilityCertMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    certifyingAgency?: SortOrder
    certificationDate?: SortOrder
  }

  export type SustainabilityCertMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    certifyingAgency?: SortOrder
    certificationDate?: SortOrder
  }

  export type SustainabilityCertSumOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
  }

  export type VendorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CommunityPostCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
  }

  export type VendorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CommunityPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VendorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    upsert?: VendorProfileUpsertWithoutUserInput
    disconnect?: VendorProfileWhereInput | boolean
    delete?: VendorProfileWhereInput | boolean
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutUserInput, VendorProfileUpdateWithoutUserInput>, VendorProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CommunityPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    upsert?: CommunityPostUpsertWithWhereUniqueWithoutUserInput | CommunityPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    set?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    disconnect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    delete?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    update?: CommunityPostUpdateWithWhereUniqueWithoutUserInput | CommunityPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityPostUpdateManyWithWhereWithoutUserInput | CommunityPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    upsert?: VendorProfileUpsertWithoutUserInput
    disconnect?: VendorProfileWhereInput | boolean
    delete?: VendorProfileWhereInput | boolean
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutUserInput, VendorProfileUpdateWithoutUserInput>, VendorProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CommunityPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    upsert?: CommunityPostUpsertWithWhereUniqueWithoutUserInput | CommunityPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    set?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    disconnect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    delete?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    update?: CommunityPostUpdateWithWhereUniqueWithoutUserInput | CommunityPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityPostUpdateManyWithWhereWithoutUserInput | CommunityPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVendorProfileInput = {
    create?: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ProduceCreateNestedManyWithoutVendorInput = {
    create?: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput> | ProduceCreateWithoutVendorInput[] | ProduceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutVendorInput | ProduceCreateOrConnectWithoutVendorInput[]
    createMany?: ProduceCreateManyVendorInputEnvelope
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutVendorInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RentalSpaceCreateNestedManyWithoutVendorInput = {
    create?: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput> | RentalSpaceCreateWithoutVendorInput[] | RentalSpaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutVendorInput | RentalSpaceCreateOrConnectWithoutVendorInput[]
    createMany?: RentalSpaceCreateManyVendorInputEnvelope
    connect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
  }

  export type SustainabilityCertCreateNestedManyWithoutVendorInput = {
    create?: XOR<SustainabilityCertCreateWithoutVendorInput, SustainabilityCertUncheckedCreateWithoutVendorInput> | SustainabilityCertCreateWithoutVendorInput[] | SustainabilityCertUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SustainabilityCertCreateOrConnectWithoutVendorInput | SustainabilityCertCreateOrConnectWithoutVendorInput[]
    createMany?: SustainabilityCertCreateManyVendorInputEnvelope
    connect?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
  }

  export type ProduceUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput> | ProduceCreateWithoutVendorInput[] | ProduceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutVendorInput | ProduceCreateOrConnectWithoutVendorInput[]
    createMany?: ProduceCreateManyVendorInputEnvelope
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RentalSpaceUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput> | RentalSpaceCreateWithoutVendorInput[] | RentalSpaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutVendorInput | RentalSpaceCreateOrConnectWithoutVendorInput[]
    createMany?: RentalSpaceCreateManyVendorInputEnvelope
    connect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
  }

  export type SustainabilityCertUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<SustainabilityCertCreateWithoutVendorInput, SustainabilityCertUncheckedCreateWithoutVendorInput> | SustainabilityCertCreateWithoutVendorInput[] | SustainabilityCertUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SustainabilityCertCreateOrConnectWithoutVendorInput | SustainabilityCertCreateOrConnectWithoutVendorInput[]
    createMany?: SustainabilityCertCreateManyVendorInputEnvelope
    connect?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
  }

  export type EnumCertificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.CertificationStatus
  }

  export type UserUpdateOneRequiredWithoutVendorProfileNestedInput = {
    create?: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorProfileInput
    upsert?: UserUpsertWithoutVendorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVendorProfileInput, UserUpdateWithoutVendorProfileInput>, UserUncheckedUpdateWithoutVendorProfileInput>
  }

  export type ProduceUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput> | ProduceCreateWithoutVendorInput[] | ProduceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutVendorInput | ProduceCreateOrConnectWithoutVendorInput[]
    upsert?: ProduceUpsertWithWhereUniqueWithoutVendorInput | ProduceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ProduceCreateManyVendorInputEnvelope
    set?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    disconnect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    delete?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    update?: ProduceUpdateWithWhereUniqueWithoutVendorInput | ProduceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ProduceUpdateManyWithWhereWithoutVendorInput | ProduceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutVendorNestedInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutVendorInput | OrderUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutVendorInput | OrderUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutVendorInput | OrderUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RentalSpaceUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput> | RentalSpaceCreateWithoutVendorInput[] | RentalSpaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutVendorInput | RentalSpaceCreateOrConnectWithoutVendorInput[]
    upsert?: RentalSpaceUpsertWithWhereUniqueWithoutVendorInput | RentalSpaceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RentalSpaceCreateManyVendorInputEnvelope
    set?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    disconnect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    delete?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    connect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    update?: RentalSpaceUpdateWithWhereUniqueWithoutVendorInput | RentalSpaceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RentalSpaceUpdateManyWithWhereWithoutVendorInput | RentalSpaceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RentalSpaceScalarWhereInput | RentalSpaceScalarWhereInput[]
  }

  export type SustainabilityCertUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SustainabilityCertCreateWithoutVendorInput, SustainabilityCertUncheckedCreateWithoutVendorInput> | SustainabilityCertCreateWithoutVendorInput[] | SustainabilityCertUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SustainabilityCertCreateOrConnectWithoutVendorInput | SustainabilityCertCreateOrConnectWithoutVendorInput[]
    upsert?: SustainabilityCertUpsertWithWhereUniqueWithoutVendorInput | SustainabilityCertUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SustainabilityCertCreateManyVendorInputEnvelope
    set?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    disconnect?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    delete?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    connect?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    update?: SustainabilityCertUpdateWithWhereUniqueWithoutVendorInput | SustainabilityCertUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SustainabilityCertUpdateManyWithWhereWithoutVendorInput | SustainabilityCertUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SustainabilityCertScalarWhereInput | SustainabilityCertScalarWhereInput[]
  }

  export type ProduceUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput> | ProduceCreateWithoutVendorInput[] | ProduceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutVendorInput | ProduceCreateOrConnectWithoutVendorInput[]
    upsert?: ProduceUpsertWithWhereUniqueWithoutVendorInput | ProduceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ProduceCreateManyVendorInputEnvelope
    set?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    disconnect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    delete?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    update?: ProduceUpdateWithWhereUniqueWithoutVendorInput | ProduceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ProduceUpdateManyWithWhereWithoutVendorInput | ProduceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutVendorInput | OrderUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutVendorInput | OrderUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutVendorInput | OrderUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput> | RentalSpaceCreateWithoutVendorInput[] | RentalSpaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutVendorInput | RentalSpaceCreateOrConnectWithoutVendorInput[]
    upsert?: RentalSpaceUpsertWithWhereUniqueWithoutVendorInput | RentalSpaceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RentalSpaceCreateManyVendorInputEnvelope
    set?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    disconnect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    delete?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    connect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    update?: RentalSpaceUpdateWithWhereUniqueWithoutVendorInput | RentalSpaceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RentalSpaceUpdateManyWithWhereWithoutVendorInput | RentalSpaceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RentalSpaceScalarWhereInput | RentalSpaceScalarWhereInput[]
  }

  export type SustainabilityCertUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SustainabilityCertCreateWithoutVendorInput, SustainabilityCertUncheckedCreateWithoutVendorInput> | SustainabilityCertCreateWithoutVendorInput[] | SustainabilityCertUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SustainabilityCertCreateOrConnectWithoutVendorInput | SustainabilityCertCreateOrConnectWithoutVendorInput[]
    upsert?: SustainabilityCertUpsertWithWhereUniqueWithoutVendorInput | SustainabilityCertUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SustainabilityCertCreateManyVendorInputEnvelope
    set?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    disconnect?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    delete?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    connect?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    update?: SustainabilityCertUpdateWithWhereUniqueWithoutVendorInput | SustainabilityCertUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SustainabilityCertUpdateManyWithWhereWithoutVendorInput | SustainabilityCertUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SustainabilityCertScalarWhereInput | SustainabilityCertScalarWhereInput[]
  }

  export type VendorProfileCreateNestedOneWithoutProduceInput = {
    create?: XOR<VendorProfileCreateWithoutProduceInput, VendorProfileUncheckedCreateWithoutProduceInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutProduceInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorProfileUpdateOneRequiredWithoutProduceNestedInput = {
    create?: XOR<VendorProfileCreateWithoutProduceInput, VendorProfileUncheckedCreateWithoutProduceInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutProduceInput
    upsert?: VendorProfileUpsertWithoutProduceInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutProduceInput, VendorProfileUpdateWithoutProduceInput>, VendorProfileUncheckedUpdateWithoutProduceInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type VendorProfileCreateNestedOneWithoutOrdersInput = {
    create?: XOR<VendorProfileCreateWithoutOrdersInput, VendorProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutOrdersInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type VendorProfileUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<VendorProfileCreateWithoutOrdersInput, VendorProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutOrdersInput
    upsert?: VendorProfileUpsertWithoutOrdersInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutOrdersInput, VendorProfileUpdateWithoutOrdersInput>, VendorProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type VendorProfileCreateNestedOneWithoutRentalSpacesInput = {
    create?: XOR<VendorProfileCreateWithoutRentalSpacesInput, VendorProfileUncheckedCreateWithoutRentalSpacesInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutRentalSpacesInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VendorProfileUpdateOneRequiredWithoutRentalSpacesNestedInput = {
    create?: XOR<VendorProfileCreateWithoutRentalSpacesInput, VendorProfileUncheckedCreateWithoutRentalSpacesInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutRentalSpacesInput
    upsert?: VendorProfileUpsertWithoutRentalSpacesInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutRentalSpacesInput, VendorProfileUpdateWithoutRentalSpacesInput>, VendorProfileUncheckedUpdateWithoutRentalSpacesInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type VendorProfileCreateNestedOneWithoutCertificationsInput = {
    create?: XOR<VendorProfileCreateWithoutCertificationsInput, VendorProfileUncheckedCreateWithoutCertificationsInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutCertificationsInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type VendorProfileUpdateOneRequiredWithoutCertificationsNestedInput = {
    create?: XOR<VendorProfileCreateWithoutCertificationsInput, VendorProfileUncheckedCreateWithoutCertificationsInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutCertificationsInput
    upsert?: VendorProfileUpsertWithoutCertificationsInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutCertificationsInput, VendorProfileUpdateWithoutCertificationsInput>, VendorProfileUncheckedUpdateWithoutCertificationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCertificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificationStatus | EnumCertificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificationStatusFilter<$PrismaModel> | $Enums.CertificationStatus
  }

  export type NestedEnumCertificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificationStatus | EnumCertificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificationStatus[] | ListEnumCertificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CertificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCertificationStatusFilter<$PrismaModel>
    _max?: NestedEnumCertificationStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VendorProfileCreateWithoutUserInput = {
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    produce?: ProduceCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
    certifications?: SustainabilityCertCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutUserInput = {
    id?: number
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    produce?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
    certifications?: SustainabilityCertUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutUserInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateWithoutUserInput = {
    produceId: number
    status: string
    orderDate?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    produceId: number
    vendorId: number
    status: string
    orderDate?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunityPostCreateWithoutUserInput = {
    postContent: string
    postDate?: Date | string
  }

  export type CommunityPostUncheckedCreateWithoutUserInput = {
    id?: number
    postContent: string
    postDate?: Date | string
  }

  export type CommunityPostCreateOrConnectWithoutUserInput = {
    where: CommunityPostWhereUniqueInput
    create: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput>
  }

  export type CommunityPostCreateManyUserInputEnvelope = {
    data: CommunityPostCreateManyUserInput | CommunityPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VendorProfileUpsertWithoutUserInput = {
    update: XOR<VendorProfileUpdateWithoutUserInput, VendorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutUserInput, VendorProfileUncheckedUpdateWithoutUserInput>
  }

  export type VendorProfileUpdateWithoutUserInput = {
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    produce?: ProduceUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
    certifications?: SustainabilityCertUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    produce?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
    certifications?: SustainabilityCertUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    produceId?: IntFilter<"Order"> | number
    vendorId?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    orderDate?: DateTimeFilter<"Order"> | Date | string
  }

  export type CommunityPostUpsertWithWhereUniqueWithoutUserInput = {
    where: CommunityPostWhereUniqueInput
    update: XOR<CommunityPostUpdateWithoutUserInput, CommunityPostUncheckedUpdateWithoutUserInput>
    create: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput>
  }

  export type CommunityPostUpdateWithWhereUniqueWithoutUserInput = {
    where: CommunityPostWhereUniqueInput
    data: XOR<CommunityPostUpdateWithoutUserInput, CommunityPostUncheckedUpdateWithoutUserInput>
  }

  export type CommunityPostUpdateManyWithWhereWithoutUserInput = {
    where: CommunityPostScalarWhereInput
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyWithoutUserInput>
  }

  export type CommunityPostScalarWhereInput = {
    AND?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
    OR?: CommunityPostScalarWhereInput[]
    NOT?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
    id?: IntFilter<"CommunityPost"> | number
    userId?: IntFilter<"CommunityPost"> | number
    postContent?: StringFilter<"CommunityPost"> | string
    postDate?: DateTimeFilter<"CommunityPost"> | Date | string
  }

  export type UserCreateWithoutVendorProfileInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: string
    createdAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    posts?: CommunityPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVendorProfileInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: string
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    posts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVendorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
  }

  export type ProduceCreateWithoutVendorInput = {
    name: string
    description: string
    price: number
    category: string
    certificationStatus: $Enums.CertificationStatus
    availableQuantity: number
  }

  export type ProduceUncheckedCreateWithoutVendorInput = {
    id?: number
    name: string
    description: string
    price: number
    category: string
    certificationStatus: $Enums.CertificationStatus
    availableQuantity: number
  }

  export type ProduceCreateOrConnectWithoutVendorInput = {
    where: ProduceWhereUniqueInput
    create: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput>
  }

  export type ProduceCreateManyVendorInputEnvelope = {
    data: ProduceCreateManyVendorInput | ProduceCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutVendorInput = {
    produceId: number
    status: string
    orderDate?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutVendorInput = {
    id?: number
    userId: number
    produceId: number
    status: string
    orderDate?: Date | string
  }

  export type OrderCreateOrConnectWithoutVendorInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput>
  }

  export type OrderCreateManyVendorInputEnvelope = {
    data: OrderCreateManyVendorInput | OrderCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type RentalSpaceCreateWithoutVendorInput = {
    location: string
    size: string
    price: number
    availability: boolean
  }

  export type RentalSpaceUncheckedCreateWithoutVendorInput = {
    id?: number
    location: string
    size: string
    price: number
    availability: boolean
  }

  export type RentalSpaceCreateOrConnectWithoutVendorInput = {
    where: RentalSpaceWhereUniqueInput
    create: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput>
  }

  export type RentalSpaceCreateManyVendorInputEnvelope = {
    data: RentalSpaceCreateManyVendorInput | RentalSpaceCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type SustainabilityCertCreateWithoutVendorInput = {
    certifyingAgency: string
    certificationDate: Date | string
  }

  export type SustainabilityCertUncheckedCreateWithoutVendorInput = {
    id?: number
    certifyingAgency: string
    certificationDate: Date | string
  }

  export type SustainabilityCertCreateOrConnectWithoutVendorInput = {
    where: SustainabilityCertWhereUniqueInput
    create: XOR<SustainabilityCertCreateWithoutVendorInput, SustainabilityCertUncheckedCreateWithoutVendorInput>
  }

  export type SustainabilityCertCreateManyVendorInputEnvelope = {
    data: SustainabilityCertCreateManyVendorInput | SustainabilityCertCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVendorProfileInput = {
    update: XOR<UserUpdateWithoutVendorProfileInput, UserUncheckedUpdateWithoutVendorProfileInput>
    create: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVendorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVendorProfileInput, UserUncheckedUpdateWithoutVendorProfileInput>
  }

  export type UserUpdateWithoutVendorProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    posts?: CommunityPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVendorProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    posts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProduceUpsertWithWhereUniqueWithoutVendorInput = {
    where: ProduceWhereUniqueInput
    update: XOR<ProduceUpdateWithoutVendorInput, ProduceUncheckedUpdateWithoutVendorInput>
    create: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput>
  }

  export type ProduceUpdateWithWhereUniqueWithoutVendorInput = {
    where: ProduceWhereUniqueInput
    data: XOR<ProduceUpdateWithoutVendorInput, ProduceUncheckedUpdateWithoutVendorInput>
  }

  export type ProduceUpdateManyWithWhereWithoutVendorInput = {
    where: ProduceScalarWhereInput
    data: XOR<ProduceUpdateManyMutationInput, ProduceUncheckedUpdateManyWithoutVendorInput>
  }

  export type ProduceScalarWhereInput = {
    AND?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
    OR?: ProduceScalarWhereInput[]
    NOT?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
    id?: IntFilter<"Produce"> | number
    vendorId?: IntFilter<"Produce"> | number
    name?: StringFilter<"Produce"> | string
    description?: StringFilter<"Produce"> | string
    price?: FloatFilter<"Produce"> | number
    category?: StringFilter<"Produce"> | string
    certificationStatus?: EnumCertificationStatusFilter<"Produce"> | $Enums.CertificationStatus
    availableQuantity?: IntFilter<"Produce"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutVendorInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutVendorInput, OrderUncheckedUpdateWithoutVendorInput>
    create: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutVendorInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutVendorInput, OrderUncheckedUpdateWithoutVendorInput>
  }

  export type OrderUpdateManyWithWhereWithoutVendorInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutVendorInput>
  }

  export type RentalSpaceUpsertWithWhereUniqueWithoutVendorInput = {
    where: RentalSpaceWhereUniqueInput
    update: XOR<RentalSpaceUpdateWithoutVendorInput, RentalSpaceUncheckedUpdateWithoutVendorInput>
    create: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput>
  }

  export type RentalSpaceUpdateWithWhereUniqueWithoutVendorInput = {
    where: RentalSpaceWhereUniqueInput
    data: XOR<RentalSpaceUpdateWithoutVendorInput, RentalSpaceUncheckedUpdateWithoutVendorInput>
  }

  export type RentalSpaceUpdateManyWithWhereWithoutVendorInput = {
    where: RentalSpaceScalarWhereInput
    data: XOR<RentalSpaceUpdateManyMutationInput, RentalSpaceUncheckedUpdateManyWithoutVendorInput>
  }

  export type RentalSpaceScalarWhereInput = {
    AND?: RentalSpaceScalarWhereInput | RentalSpaceScalarWhereInput[]
    OR?: RentalSpaceScalarWhereInput[]
    NOT?: RentalSpaceScalarWhereInput | RentalSpaceScalarWhereInput[]
    id?: IntFilter<"RentalSpace"> | number
    vendorId?: IntFilter<"RentalSpace"> | number
    location?: StringFilter<"RentalSpace"> | string
    size?: StringFilter<"RentalSpace"> | string
    price?: FloatFilter<"RentalSpace"> | number
    availability?: BoolFilter<"RentalSpace"> | boolean
  }

  export type SustainabilityCertUpsertWithWhereUniqueWithoutVendorInput = {
    where: SustainabilityCertWhereUniqueInput
    update: XOR<SustainabilityCertUpdateWithoutVendorInput, SustainabilityCertUncheckedUpdateWithoutVendorInput>
    create: XOR<SustainabilityCertCreateWithoutVendorInput, SustainabilityCertUncheckedCreateWithoutVendorInput>
  }

  export type SustainabilityCertUpdateWithWhereUniqueWithoutVendorInput = {
    where: SustainabilityCertWhereUniqueInput
    data: XOR<SustainabilityCertUpdateWithoutVendorInput, SustainabilityCertUncheckedUpdateWithoutVendorInput>
  }

  export type SustainabilityCertUpdateManyWithWhereWithoutVendorInput = {
    where: SustainabilityCertScalarWhereInput
    data: XOR<SustainabilityCertUpdateManyMutationInput, SustainabilityCertUncheckedUpdateManyWithoutVendorInput>
  }

  export type SustainabilityCertScalarWhereInput = {
    AND?: SustainabilityCertScalarWhereInput | SustainabilityCertScalarWhereInput[]
    OR?: SustainabilityCertScalarWhereInput[]
    NOT?: SustainabilityCertScalarWhereInput | SustainabilityCertScalarWhereInput[]
    id?: IntFilter<"SustainabilityCert"> | number
    vendorId?: IntFilter<"SustainabilityCert"> | number
    certifyingAgency?: StringFilter<"SustainabilityCert"> | string
    certificationDate?: DateTimeFilter<"SustainabilityCert"> | Date | string
  }

  export type VendorProfileCreateWithoutProduceInput = {
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    user: UserCreateNestedOneWithoutVendorProfileInput
    orders?: OrderCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
    certifications?: SustainabilityCertCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutProduceInput = {
    id?: number
    userId: number
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
    certifications?: SustainabilityCertUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutProduceInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutProduceInput, VendorProfileUncheckedCreateWithoutProduceInput>
  }

  export type VendorProfileUpsertWithoutProduceInput = {
    update: XOR<VendorProfileUpdateWithoutProduceInput, VendorProfileUncheckedUpdateWithoutProduceInput>
    create: XOR<VendorProfileCreateWithoutProduceInput, VendorProfileUncheckedCreateWithoutProduceInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutProduceInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutProduceInput, VendorProfileUncheckedUpdateWithoutProduceInput>
  }

  export type VendorProfileUpdateWithoutProduceInput = {
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
    certifications?: SustainabilityCertUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutProduceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
    certifications?: SustainabilityCertUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: string
    createdAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    posts?: CommunityPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: string
    createdAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type VendorProfileCreateWithoutOrdersInput = {
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    user: UserCreateNestedOneWithoutVendorProfileInput
    produce?: ProduceCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
    certifications?: SustainabilityCertCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutOrdersInput = {
    id?: number
    userId: number
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    produce?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
    certifications?: SustainabilityCertUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutOrdersInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutOrdersInput, VendorProfileUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    posts?: CommunityPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VendorProfileUpsertWithoutOrdersInput = {
    update: XOR<VendorProfileUpdateWithoutOrdersInput, VendorProfileUncheckedUpdateWithoutOrdersInput>
    create: XOR<VendorProfileCreateWithoutOrdersInput, VendorProfileUncheckedCreateWithoutOrdersInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutOrdersInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutOrdersInput, VendorProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type VendorProfileUpdateWithoutOrdersInput = {
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    produce?: ProduceUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
    certifications?: SustainabilityCertUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    produce?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
    certifications?: SustainabilityCertUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileCreateWithoutRentalSpacesInput = {
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    user: UserCreateNestedOneWithoutVendorProfileInput
    produce?: ProduceCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
    certifications?: SustainabilityCertCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutRentalSpacesInput = {
    id?: number
    userId: number
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    produce?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
    certifications?: SustainabilityCertUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutRentalSpacesInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutRentalSpacesInput, VendorProfileUncheckedCreateWithoutRentalSpacesInput>
  }

  export type VendorProfileUpsertWithoutRentalSpacesInput = {
    update: XOR<VendorProfileUpdateWithoutRentalSpacesInput, VendorProfileUncheckedUpdateWithoutRentalSpacesInput>
    create: XOR<VendorProfileCreateWithoutRentalSpacesInput, VendorProfileUncheckedCreateWithoutRentalSpacesInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutRentalSpacesInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutRentalSpacesInput, VendorProfileUncheckedUpdateWithoutRentalSpacesInput>
  }

  export type VendorProfileUpdateWithoutRentalSpacesInput = {
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    produce?: ProduceUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
    certifications?: SustainabilityCertUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutRentalSpacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    produce?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
    certifications?: SustainabilityCertUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: string
    createdAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: string
    createdAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VendorProfileCreateWithoutCertificationsInput = {
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    user: UserCreateNestedOneWithoutVendorProfileInput
    produce?: ProduceCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutCertificationsInput = {
    id?: number
    userId: number
    farmName: string
    certificationStatus: $Enums.CertificationStatus
    farmLocation: string
    produce?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutCertificationsInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutCertificationsInput, VendorProfileUncheckedCreateWithoutCertificationsInput>
  }

  export type VendorProfileUpsertWithoutCertificationsInput = {
    update: XOR<VendorProfileUpdateWithoutCertificationsInput, VendorProfileUncheckedUpdateWithoutCertificationsInput>
    create: XOR<VendorProfileCreateWithoutCertificationsInput, VendorProfileUncheckedCreateWithoutCertificationsInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutCertificationsInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutCertificationsInput, VendorProfileUncheckedUpdateWithoutCertificationsInput>
  }

  export type VendorProfileUpdateWithoutCertificationsInput = {
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    produce?: ProduceUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutCertificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    produce?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: number
    produceId: number
    vendorId: number
    status: string
    orderDate?: Date | string
  }

  export type CommunityPostCreateManyUserInput = {
    id?: number
    postContent: string
    postDate?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    produceId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    produceId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    produceId?: IntFieldUpdateOperationsInput | number
    vendorId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUpdateWithoutUserInput = {
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postContent?: StringFieldUpdateOperationsInput | string
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduceCreateManyVendorInput = {
    id?: number
    name: string
    description: string
    price: number
    category: string
    certificationStatus: $Enums.CertificationStatus
    availableQuantity: number
  }

  export type OrderCreateManyVendorInput = {
    id?: number
    userId: number
    produceId: number
    status: string
    orderDate?: Date | string
  }

  export type RentalSpaceCreateManyVendorInput = {
    id?: number
    location: string
    size: string
    price: number
    availability: boolean
  }

  export type SustainabilityCertCreateManyVendorInput = {
    id?: number
    certifyingAgency: string
    certificationDate: Date | string
  }

  export type ProduceUpdateWithoutVendorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProduceUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProduceUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutVendorInput = {
    produceId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    produceId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    produceId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSpaceUpdateWithoutVendorInput = {
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RentalSpaceUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RentalSpaceUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    availability?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SustainabilityCertUpdateWithoutVendorInput = {
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityCertUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityCertUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}