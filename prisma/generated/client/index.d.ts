
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model fulfillments
 * 
 */
export type fulfillments = $Result.DefaultSelection<Prisma.$fulfillmentsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model stores
 * 
 */
export type stores = $Result.DefaultSelection<Prisma.$storesPayload>
/**
 * Model tracking_events
 * 
 */
export type tracking_events = $Result.DefaultSelection<Prisma.$tracking_eventsPayload>
/**
 * Model webhook_events
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type webhook_events = $Result.DefaultSelection<Prisma.$webhook_eventsPayload>
/**
 * Model whatsapp_messages
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type whatsapp_messages = $Result.DefaultSelection<Prisma.$whatsapp_messagesPayload>
/**
 * Model whatsapp_sessions
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type whatsapp_sessions = $Result.DefaultSelection<Prisma.$whatsapp_sessionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fulfillments`: Exposes CRUD operations for the **fulfillments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fulfillments
    * const fulfillments = await prisma.fulfillments.findMany()
    * ```
    */
  get fulfillments(): Prisma.fulfillmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stores`: Exposes CRUD operations for the **stores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.stores.findMany()
    * ```
    */
  get stores(): Prisma.storesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tracking_events`: Exposes CRUD operations for the **tracking_events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracking_events
    * const tracking_events = await prisma.tracking_events.findMany()
    * ```
    */
  get tracking_events(): Prisma.tracking_eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhook_events`: Exposes CRUD operations for the **webhook_events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webhook_events
    * const webhook_events = await prisma.webhook_events.findMany()
    * ```
    */
  get webhook_events(): Prisma.webhook_eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsapp_messages`: Exposes CRUD operations for the **whatsapp_messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Whatsapp_messages
    * const whatsapp_messages = await prisma.whatsapp_messages.findMany()
    * ```
    */
  get whatsapp_messages(): Prisma.whatsapp_messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsapp_sessions`: Exposes CRUD operations for the **whatsapp_sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Whatsapp_sessions
    * const whatsapp_sessions = await prisma.whatsapp_sessions.findMany()
    * ```
    */
  get whatsapp_sessions(): Prisma.whatsapp_sessionsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Session: 'Session',
    fulfillments: 'fulfillments',
    orders: 'orders',
    stores: 'stores',
    tracking_events: 'tracking_events',
    webhook_events: 'webhook_events',
    whatsapp_messages: 'whatsapp_messages',
    whatsapp_sessions: 'whatsapp_sessions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "session" | "fulfillments" | "orders" | "stores" | "tracking_events" | "webhook_events" | "whatsapp_messages" | "whatsapp_sessions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      fulfillments: {
        payload: Prisma.$fulfillmentsPayload<ExtArgs>
        fields: Prisma.fulfillmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fulfillmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fulfillmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fulfillmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fulfillmentsPayload>
          }
          findFirst: {
            args: Prisma.fulfillmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fulfillmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fulfillmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fulfillmentsPayload>
          }
          findMany: {
            args: Prisma.fulfillmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fulfillmentsPayload>[]
          }
          create: {
            args: Prisma.fulfillmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fulfillmentsPayload>
          }
          createMany: {
            args: Prisma.fulfillmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fulfillmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fulfillmentsPayload>[]
          }
          delete: {
            args: Prisma.fulfillmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fulfillmentsPayload>
          }
          update: {
            args: Prisma.fulfillmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fulfillmentsPayload>
          }
          deleteMany: {
            args: Prisma.fulfillmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fulfillmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fulfillmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fulfillmentsPayload>[]
          }
          upsert: {
            args: Prisma.fulfillmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fulfillmentsPayload>
          }
          aggregate: {
            args: Prisma.FulfillmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFulfillments>
          }
          groupBy: {
            args: Prisma.fulfillmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FulfillmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.fulfillmentsCountArgs<ExtArgs>
            result: $Utils.Optional<FulfillmentsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      stores: {
        payload: Prisma.$storesPayload<ExtArgs>
        fields: Prisma.storesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          findFirst: {
            args: Prisma.storesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          findMany: {
            args: Prisma.storesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          create: {
            args: Prisma.storesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          createMany: {
            args: Prisma.storesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.storesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          delete: {
            args: Prisma.storesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          update: {
            args: Prisma.storesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          deleteMany: {
            args: Prisma.storesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.storesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          upsert: {
            args: Prisma.storesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          aggregate: {
            args: Prisma.StoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStores>
          }
          groupBy: {
            args: Prisma.storesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.storesCountArgs<ExtArgs>
            result: $Utils.Optional<StoresCountAggregateOutputType> | number
          }
        }
      }
      tracking_events: {
        payload: Prisma.$tracking_eventsPayload<ExtArgs>
        fields: Prisma.tracking_eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tracking_eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracking_eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tracking_eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracking_eventsPayload>
          }
          findFirst: {
            args: Prisma.tracking_eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracking_eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tracking_eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracking_eventsPayload>
          }
          findMany: {
            args: Prisma.tracking_eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracking_eventsPayload>[]
          }
          create: {
            args: Prisma.tracking_eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracking_eventsPayload>
          }
          createMany: {
            args: Prisma.tracking_eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tracking_eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracking_eventsPayload>[]
          }
          delete: {
            args: Prisma.tracking_eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracking_eventsPayload>
          }
          update: {
            args: Prisma.tracking_eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracking_eventsPayload>
          }
          deleteMany: {
            args: Prisma.tracking_eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tracking_eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tracking_eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracking_eventsPayload>[]
          }
          upsert: {
            args: Prisma.tracking_eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tracking_eventsPayload>
          }
          aggregate: {
            args: Prisma.Tracking_eventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTracking_events>
          }
          groupBy: {
            args: Prisma.tracking_eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tracking_eventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tracking_eventsCountArgs<ExtArgs>
            result: $Utils.Optional<Tracking_eventsCountAggregateOutputType> | number
          }
        }
      }
      webhook_events: {
        payload: Prisma.$webhook_eventsPayload<ExtArgs>
        fields: Prisma.webhook_eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.webhook_eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.webhook_eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventsPayload>
          }
          findFirst: {
            args: Prisma.webhook_eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.webhook_eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventsPayload>
          }
          findMany: {
            args: Prisma.webhook_eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventsPayload>[]
          }
          create: {
            args: Prisma.webhook_eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventsPayload>
          }
          createMany: {
            args: Prisma.webhook_eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.webhook_eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventsPayload>[]
          }
          delete: {
            args: Prisma.webhook_eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventsPayload>
          }
          update: {
            args: Prisma.webhook_eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventsPayload>
          }
          deleteMany: {
            args: Prisma.webhook_eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.webhook_eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.webhook_eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventsPayload>[]
          }
          upsert: {
            args: Prisma.webhook_eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webhook_eventsPayload>
          }
          aggregate: {
            args: Prisma.Webhook_eventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhook_events>
          }
          groupBy: {
            args: Prisma.webhook_eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Webhook_eventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.webhook_eventsCountArgs<ExtArgs>
            result: $Utils.Optional<Webhook_eventsCountAggregateOutputType> | number
          }
        }
      }
      whatsapp_messages: {
        payload: Prisma.$whatsapp_messagesPayload<ExtArgs>
        fields: Prisma.whatsapp_messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.whatsapp_messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.whatsapp_messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_messagesPayload>
          }
          findFirst: {
            args: Prisma.whatsapp_messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.whatsapp_messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_messagesPayload>
          }
          findMany: {
            args: Prisma.whatsapp_messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_messagesPayload>[]
          }
          create: {
            args: Prisma.whatsapp_messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_messagesPayload>
          }
          createMany: {
            args: Prisma.whatsapp_messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.whatsapp_messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_messagesPayload>[]
          }
          delete: {
            args: Prisma.whatsapp_messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_messagesPayload>
          }
          update: {
            args: Prisma.whatsapp_messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_messagesPayload>
          }
          deleteMany: {
            args: Prisma.whatsapp_messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.whatsapp_messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.whatsapp_messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_messagesPayload>[]
          }
          upsert: {
            args: Prisma.whatsapp_messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_messagesPayload>
          }
          aggregate: {
            args: Prisma.Whatsapp_messagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsapp_messages>
          }
          groupBy: {
            args: Prisma.whatsapp_messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Whatsapp_messagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.whatsapp_messagesCountArgs<ExtArgs>
            result: $Utils.Optional<Whatsapp_messagesCountAggregateOutputType> | number
          }
        }
      }
      whatsapp_sessions: {
        payload: Prisma.$whatsapp_sessionsPayload<ExtArgs>
        fields: Prisma.whatsapp_sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.whatsapp_sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.whatsapp_sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_sessionsPayload>
          }
          findFirst: {
            args: Prisma.whatsapp_sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.whatsapp_sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_sessionsPayload>
          }
          findMany: {
            args: Prisma.whatsapp_sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_sessionsPayload>[]
          }
          create: {
            args: Prisma.whatsapp_sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_sessionsPayload>
          }
          createMany: {
            args: Prisma.whatsapp_sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.whatsapp_sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_sessionsPayload>[]
          }
          delete: {
            args: Prisma.whatsapp_sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_sessionsPayload>
          }
          update: {
            args: Prisma.whatsapp_sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_sessionsPayload>
          }
          deleteMany: {
            args: Prisma.whatsapp_sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.whatsapp_sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.whatsapp_sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_sessionsPayload>[]
          }
          upsert: {
            args: Prisma.whatsapp_sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$whatsapp_sessionsPayload>
          }
          aggregate: {
            args: Prisma.Whatsapp_sessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsapp_sessions>
          }
          groupBy: {
            args: Prisma.whatsapp_sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Whatsapp_sessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.whatsapp_sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<Whatsapp_sessionsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    session?: SessionOmit
    fulfillments?: fulfillmentsOmit
    orders?: ordersOmit
    stores?: storesOmit
    tracking_events?: tracking_eventsOmit
    webhook_events?: webhook_eventsOmit
    whatsapp_messages?: whatsapp_messagesOmit
    whatsapp_sessions?: whatsapp_sessionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type FulfillmentsCountOutputType
   */

  export type FulfillmentsCountOutputType = {
    tracking_events: number
  }

  export type FulfillmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracking_events?: boolean | FulfillmentsCountOutputTypeCountTracking_eventsArgs
  }

  // Custom InputTypes
  /**
   * FulfillmentsCountOutputType without action
   */
  export type FulfillmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FulfillmentsCountOutputType
     */
    select?: FulfillmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FulfillmentsCountOutputType without action
   */
  export type FulfillmentsCountOutputTypeCountTracking_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tracking_eventsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    fulfillments: number
    whatsapp_messages: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fulfillments?: boolean | OrdersCountOutputTypeCountFulfillmentsArgs
    whatsapp_messages?: boolean | OrdersCountOutputTypeCountWhatsapp_messagesArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountFulfillmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fulfillmentsWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountWhatsapp_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: whatsapp_messagesWhereInput
  }


  /**
   * Count Type StoresCountOutputType
   */

  export type StoresCountOutputType = {
    orders: number
    webhook_events: number
    whatsapp_messages: number
    whatsapp_sessions: number
  }

  export type StoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | StoresCountOutputTypeCountOrdersArgs
    webhook_events?: boolean | StoresCountOutputTypeCountWebhook_eventsArgs
    whatsapp_messages?: boolean | StoresCountOutputTypeCountWhatsapp_messagesArgs
    whatsapp_sessions?: boolean | StoresCountOutputTypeCountWhatsapp_sessionsArgs
  }

  // Custom InputTypes
  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoresCountOutputType
     */
    select?: StoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountWebhook_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webhook_eventsWhereInput
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountWhatsapp_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: whatsapp_messagesWhereInput
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountWhatsapp_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: whatsapp_sessionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: bigint | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    shop: string | null
    state: string | null
    isOnline: boolean | null
    scope: string | null
    expires: Date | null
    accessToken: string | null
    userId: bigint | null
    firstName: string | null
    lastName: string | null
    email: string | null
    accountOwner: boolean | null
    locale: string | null
    collaborator: boolean | null
    emailVerified: boolean | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    shop: string | null
    state: string | null
    isOnline: boolean | null
    scope: string | null
    expires: Date | null
    accessToken: string | null
    userId: bigint | null
    firstName: string | null
    lastName: string | null
    email: string | null
    accountOwner: boolean | null
    locale: string | null
    collaborator: boolean | null
    emailVerified: boolean | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    shop: number
    state: number
    isOnline: number
    scope: number
    expires: number
    accessToken: number
    userId: number
    firstName: number
    lastName: number
    email: number
    accountOwner: number
    locale: number
    collaborator: number
    emailVerified: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    shop?: true
    state?: true
    isOnline?: true
    scope?: true
    expires?: true
    accessToken?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    accountOwner?: true
    locale?: true
    collaborator?: true
    emailVerified?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    shop?: true
    state?: true
    isOnline?: true
    scope?: true
    expires?: true
    accessToken?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    accountOwner?: true
    locale?: true
    collaborator?: true
    emailVerified?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    shop?: true
    state?: true
    isOnline?: true
    scope?: true
    expires?: true
    accessToken?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    accountOwner?: true
    locale?: true
    collaborator?: true
    emailVerified?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    shop: string
    state: string
    isOnline: boolean
    scope: string | null
    expires: Date | null
    accessToken: string
    userId: bigint | null
    firstName: string | null
    lastName: string | null
    email: string | null
    accountOwner: boolean
    locale: string | null
    collaborator: boolean | null
    emailVerified: boolean | null
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop?: boolean
    state?: boolean
    isOnline?: boolean
    scope?: boolean
    expires?: boolean
    accessToken?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    accountOwner?: boolean
    locale?: boolean
    collaborator?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop?: boolean
    state?: boolean
    isOnline?: boolean
    scope?: boolean
    expires?: boolean
    accessToken?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    accountOwner?: boolean
    locale?: boolean
    collaborator?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop?: boolean
    state?: boolean
    isOnline?: boolean
    scope?: boolean
    expires?: boolean
    accessToken?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    accountOwner?: boolean
    locale?: boolean
    collaborator?: boolean
    emailVerified?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    shop?: boolean
    state?: boolean
    isOnline?: boolean
    scope?: boolean
    expires?: boolean
    accessToken?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    accountOwner?: boolean
    locale?: boolean
    collaborator?: boolean
    emailVerified?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shop" | "state" | "isOnline" | "scope" | "expires" | "accessToken" | "userId" | "firstName" | "lastName" | "email" | "accountOwner" | "locale" | "collaborator" | "emailVerified", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shop: string
      state: string
      isOnline: boolean
      scope: string | null
      expires: Date | null
      accessToken: string
      userId: bigint | null
      firstName: string | null
      lastName: string | null
      email: string | null
      accountOwner: boolean
      locale: string | null
      collaborator: boolean | null
      emailVerified: boolean | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly shop: FieldRef<"Session", 'String'>
    readonly state: FieldRef<"Session", 'String'>
    readonly isOnline: FieldRef<"Session", 'Boolean'>
    readonly scope: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly accessToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'BigInt'>
    readonly firstName: FieldRef<"Session", 'String'>
    readonly lastName: FieldRef<"Session", 'String'>
    readonly email: FieldRef<"Session", 'String'>
    readonly accountOwner: FieldRef<"Session", 'Boolean'>
    readonly locale: FieldRef<"Session", 'String'>
    readonly collaborator: FieldRef<"Session", 'Boolean'>
    readonly emailVerified: FieldRef<"Session", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model fulfillments
   */

  export type AggregateFulfillments = {
    _count: FulfillmentsCountAggregateOutputType | null
    _avg: FulfillmentsAvgAggregateOutputType | null
    _sum: FulfillmentsSumAggregateOutputType | null
    _min: FulfillmentsMinAggregateOutputType | null
    _max: FulfillmentsMaxAggregateOutputType | null
  }

  export type FulfillmentsAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
  }

  export type FulfillmentsSumAggregateOutputType = {
    id: number | null
    order_id: number | null
  }

  export type FulfillmentsMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    tracking_number: string | null
    courier_name: string | null
    courier_code: string | null
    status: string | null
    delivered_at: Date | null
    estimated_delivery: Date | null
    last_checked_at: Date | null
    created_at: Date | null
  }

  export type FulfillmentsMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    tracking_number: string | null
    courier_name: string | null
    courier_code: string | null
    status: string | null
    delivered_at: Date | null
    estimated_delivery: Date | null
    last_checked_at: Date | null
    created_at: Date | null
  }

  export type FulfillmentsCountAggregateOutputType = {
    id: number
    order_id: number
    tracking_number: number
    courier_name: number
    courier_code: number
    status: number
    delivered_at: number
    estimated_delivery: number
    last_checked_at: number
    created_at: number
    meta_data: number
    _all: number
  }


  export type FulfillmentsAvgAggregateInputType = {
    id?: true
    order_id?: true
  }

  export type FulfillmentsSumAggregateInputType = {
    id?: true
    order_id?: true
  }

  export type FulfillmentsMinAggregateInputType = {
    id?: true
    order_id?: true
    tracking_number?: true
    courier_name?: true
    courier_code?: true
    status?: true
    delivered_at?: true
    estimated_delivery?: true
    last_checked_at?: true
    created_at?: true
  }

  export type FulfillmentsMaxAggregateInputType = {
    id?: true
    order_id?: true
    tracking_number?: true
    courier_name?: true
    courier_code?: true
    status?: true
    delivered_at?: true
    estimated_delivery?: true
    last_checked_at?: true
    created_at?: true
  }

  export type FulfillmentsCountAggregateInputType = {
    id?: true
    order_id?: true
    tracking_number?: true
    courier_name?: true
    courier_code?: true
    status?: true
    delivered_at?: true
    estimated_delivery?: true
    last_checked_at?: true
    created_at?: true
    meta_data?: true
    _all?: true
  }

  export type FulfillmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fulfillments to aggregate.
     */
    where?: fulfillmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fulfillments to fetch.
     */
    orderBy?: fulfillmentsOrderByWithRelationInput | fulfillmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fulfillmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fulfillments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fulfillments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fulfillments
    **/
    _count?: true | FulfillmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FulfillmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FulfillmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FulfillmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FulfillmentsMaxAggregateInputType
  }

  export type GetFulfillmentsAggregateType<T extends FulfillmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateFulfillments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFulfillments[P]>
      : GetScalarType<T[P], AggregateFulfillments[P]>
  }




  export type fulfillmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fulfillmentsWhereInput
    orderBy?: fulfillmentsOrderByWithAggregationInput | fulfillmentsOrderByWithAggregationInput[]
    by: FulfillmentsScalarFieldEnum[] | FulfillmentsScalarFieldEnum
    having?: fulfillmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FulfillmentsCountAggregateInputType | true
    _avg?: FulfillmentsAvgAggregateInputType
    _sum?: FulfillmentsSumAggregateInputType
    _min?: FulfillmentsMinAggregateInputType
    _max?: FulfillmentsMaxAggregateInputType
  }

  export type FulfillmentsGroupByOutputType = {
    id: number
    order_id: number | null
    tracking_number: string | null
    courier_name: string | null
    courier_code: string | null
    status: string | null
    delivered_at: Date | null
    estimated_delivery: Date | null
    last_checked_at: Date | null
    created_at: Date | null
    meta_data: JsonValue | null
    _count: FulfillmentsCountAggregateOutputType | null
    _avg: FulfillmentsAvgAggregateOutputType | null
    _sum: FulfillmentsSumAggregateOutputType | null
    _min: FulfillmentsMinAggregateOutputType | null
    _max: FulfillmentsMaxAggregateOutputType | null
  }

  type GetFulfillmentsGroupByPayload<T extends fulfillmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FulfillmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FulfillmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FulfillmentsGroupByOutputType[P]>
            : GetScalarType<T[P], FulfillmentsGroupByOutputType[P]>
        }
      >
    >


  export type fulfillmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    tracking_number?: boolean
    courier_name?: boolean
    courier_code?: boolean
    status?: boolean
    delivered_at?: boolean
    estimated_delivery?: boolean
    last_checked_at?: boolean
    created_at?: boolean
    meta_data?: boolean
    orders?: boolean | fulfillments$ordersArgs<ExtArgs>
    tracking_events?: boolean | fulfillments$tracking_eventsArgs<ExtArgs>
    _count?: boolean | FulfillmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fulfillments"]>

  export type fulfillmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    tracking_number?: boolean
    courier_name?: boolean
    courier_code?: boolean
    status?: boolean
    delivered_at?: boolean
    estimated_delivery?: boolean
    last_checked_at?: boolean
    created_at?: boolean
    meta_data?: boolean
    orders?: boolean | fulfillments$ordersArgs<ExtArgs>
  }, ExtArgs["result"]["fulfillments"]>

  export type fulfillmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    tracking_number?: boolean
    courier_name?: boolean
    courier_code?: boolean
    status?: boolean
    delivered_at?: boolean
    estimated_delivery?: boolean
    last_checked_at?: boolean
    created_at?: boolean
    meta_data?: boolean
    orders?: boolean | fulfillments$ordersArgs<ExtArgs>
  }, ExtArgs["result"]["fulfillments"]>

  export type fulfillmentsSelectScalar = {
    id?: boolean
    order_id?: boolean
    tracking_number?: boolean
    courier_name?: boolean
    courier_code?: boolean
    status?: boolean
    delivered_at?: boolean
    estimated_delivery?: boolean
    last_checked_at?: boolean
    created_at?: boolean
    meta_data?: boolean
  }

  export type fulfillmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "tracking_number" | "courier_name" | "courier_code" | "status" | "delivered_at" | "estimated_delivery" | "last_checked_at" | "created_at" | "meta_data", ExtArgs["result"]["fulfillments"]>
  export type fulfillmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | fulfillments$ordersArgs<ExtArgs>
    tracking_events?: boolean | fulfillments$tracking_eventsArgs<ExtArgs>
    _count?: boolean | FulfillmentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type fulfillmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | fulfillments$ordersArgs<ExtArgs>
  }
  export type fulfillmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | fulfillments$ordersArgs<ExtArgs>
  }

  export type $fulfillmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fulfillments"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs> | null
      tracking_events: Prisma.$tracking_eventsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number | null
      tracking_number: string | null
      courier_name: string | null
      courier_code: string | null
      status: string | null
      delivered_at: Date | null
      estimated_delivery: Date | null
      last_checked_at: Date | null
      created_at: Date | null
      meta_data: Prisma.JsonValue | null
    }, ExtArgs["result"]["fulfillments"]>
    composites: {}
  }

  type fulfillmentsGetPayload<S extends boolean | null | undefined | fulfillmentsDefaultArgs> = $Result.GetResult<Prisma.$fulfillmentsPayload, S>

  type fulfillmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fulfillmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FulfillmentsCountAggregateInputType | true
    }

  export interface fulfillmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fulfillments'], meta: { name: 'fulfillments' } }
    /**
     * Find zero or one Fulfillments that matches the filter.
     * @param {fulfillmentsFindUniqueArgs} args - Arguments to find a Fulfillments
     * @example
     * // Get one Fulfillments
     * const fulfillments = await prisma.fulfillments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fulfillmentsFindUniqueArgs>(args: SelectSubset<T, fulfillmentsFindUniqueArgs<ExtArgs>>): Prisma__fulfillmentsClient<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fulfillments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fulfillmentsFindUniqueOrThrowArgs} args - Arguments to find a Fulfillments
     * @example
     * // Get one Fulfillments
     * const fulfillments = await prisma.fulfillments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fulfillmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, fulfillmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fulfillmentsClient<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fulfillments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fulfillmentsFindFirstArgs} args - Arguments to find a Fulfillments
     * @example
     * // Get one Fulfillments
     * const fulfillments = await prisma.fulfillments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fulfillmentsFindFirstArgs>(args?: SelectSubset<T, fulfillmentsFindFirstArgs<ExtArgs>>): Prisma__fulfillmentsClient<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fulfillments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fulfillmentsFindFirstOrThrowArgs} args - Arguments to find a Fulfillments
     * @example
     * // Get one Fulfillments
     * const fulfillments = await prisma.fulfillments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fulfillmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, fulfillmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__fulfillmentsClient<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fulfillments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fulfillmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fulfillments
     * const fulfillments = await prisma.fulfillments.findMany()
     * 
     * // Get first 10 Fulfillments
     * const fulfillments = await prisma.fulfillments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fulfillmentsWithIdOnly = await prisma.fulfillments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fulfillmentsFindManyArgs>(args?: SelectSubset<T, fulfillmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fulfillments.
     * @param {fulfillmentsCreateArgs} args - Arguments to create a Fulfillments.
     * @example
     * // Create one Fulfillments
     * const Fulfillments = await prisma.fulfillments.create({
     *   data: {
     *     // ... data to create a Fulfillments
     *   }
     * })
     * 
     */
    create<T extends fulfillmentsCreateArgs>(args: SelectSubset<T, fulfillmentsCreateArgs<ExtArgs>>): Prisma__fulfillmentsClient<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fulfillments.
     * @param {fulfillmentsCreateManyArgs} args - Arguments to create many Fulfillments.
     * @example
     * // Create many Fulfillments
     * const fulfillments = await prisma.fulfillments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fulfillmentsCreateManyArgs>(args?: SelectSubset<T, fulfillmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fulfillments and returns the data saved in the database.
     * @param {fulfillmentsCreateManyAndReturnArgs} args - Arguments to create many Fulfillments.
     * @example
     * // Create many Fulfillments
     * const fulfillments = await prisma.fulfillments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fulfillments and only return the `id`
     * const fulfillmentsWithIdOnly = await prisma.fulfillments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fulfillmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, fulfillmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fulfillments.
     * @param {fulfillmentsDeleteArgs} args - Arguments to delete one Fulfillments.
     * @example
     * // Delete one Fulfillments
     * const Fulfillments = await prisma.fulfillments.delete({
     *   where: {
     *     // ... filter to delete one Fulfillments
     *   }
     * })
     * 
     */
    delete<T extends fulfillmentsDeleteArgs>(args: SelectSubset<T, fulfillmentsDeleteArgs<ExtArgs>>): Prisma__fulfillmentsClient<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fulfillments.
     * @param {fulfillmentsUpdateArgs} args - Arguments to update one Fulfillments.
     * @example
     * // Update one Fulfillments
     * const fulfillments = await prisma.fulfillments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fulfillmentsUpdateArgs>(args: SelectSubset<T, fulfillmentsUpdateArgs<ExtArgs>>): Prisma__fulfillmentsClient<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fulfillments.
     * @param {fulfillmentsDeleteManyArgs} args - Arguments to filter Fulfillments to delete.
     * @example
     * // Delete a few Fulfillments
     * const { count } = await prisma.fulfillments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fulfillmentsDeleteManyArgs>(args?: SelectSubset<T, fulfillmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fulfillments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fulfillmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fulfillments
     * const fulfillments = await prisma.fulfillments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fulfillmentsUpdateManyArgs>(args: SelectSubset<T, fulfillmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fulfillments and returns the data updated in the database.
     * @param {fulfillmentsUpdateManyAndReturnArgs} args - Arguments to update many Fulfillments.
     * @example
     * // Update many Fulfillments
     * const fulfillments = await prisma.fulfillments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fulfillments and only return the `id`
     * const fulfillmentsWithIdOnly = await prisma.fulfillments.updateManyAndReturn({
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
    updateManyAndReturn<T extends fulfillmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, fulfillmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fulfillments.
     * @param {fulfillmentsUpsertArgs} args - Arguments to update or create a Fulfillments.
     * @example
     * // Update or create a Fulfillments
     * const fulfillments = await prisma.fulfillments.upsert({
     *   create: {
     *     // ... data to create a Fulfillments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fulfillments we want to update
     *   }
     * })
     */
    upsert<T extends fulfillmentsUpsertArgs>(args: SelectSubset<T, fulfillmentsUpsertArgs<ExtArgs>>): Prisma__fulfillmentsClient<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fulfillments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fulfillmentsCountArgs} args - Arguments to filter Fulfillments to count.
     * @example
     * // Count the number of Fulfillments
     * const count = await prisma.fulfillments.count({
     *   where: {
     *     // ... the filter for the Fulfillments we want to count
     *   }
     * })
    **/
    count<T extends fulfillmentsCountArgs>(
      args?: Subset<T, fulfillmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FulfillmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fulfillments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FulfillmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FulfillmentsAggregateArgs>(args: Subset<T, FulfillmentsAggregateArgs>): Prisma.PrismaPromise<GetFulfillmentsAggregateType<T>>

    /**
     * Group by Fulfillments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fulfillmentsGroupByArgs} args - Group by arguments.
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
      T extends fulfillmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fulfillmentsGroupByArgs['orderBy'] }
        : { orderBy?: fulfillmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fulfillmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFulfillmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fulfillments model
   */
  readonly fields: fulfillmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fulfillments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fulfillmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends fulfillments$ordersArgs<ExtArgs> = {}>(args?: Subset<T, fulfillments$ordersArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tracking_events<T extends fulfillments$tracking_eventsArgs<ExtArgs> = {}>(args?: Subset<T, fulfillments$tracking_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tracking_eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the fulfillments model
   */
  interface fulfillmentsFieldRefs {
    readonly id: FieldRef<"fulfillments", 'Int'>
    readonly order_id: FieldRef<"fulfillments", 'Int'>
    readonly tracking_number: FieldRef<"fulfillments", 'String'>
    readonly courier_name: FieldRef<"fulfillments", 'String'>
    readonly courier_code: FieldRef<"fulfillments", 'String'>
    readonly status: FieldRef<"fulfillments", 'String'>
    readonly delivered_at: FieldRef<"fulfillments", 'DateTime'>
    readonly estimated_delivery: FieldRef<"fulfillments", 'DateTime'>
    readonly last_checked_at: FieldRef<"fulfillments", 'DateTime'>
    readonly created_at: FieldRef<"fulfillments", 'DateTime'>
    readonly meta_data: FieldRef<"fulfillments", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * fulfillments findUnique
   */
  export type fulfillmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsInclude<ExtArgs> | null
    /**
     * Filter, which fulfillments to fetch.
     */
    where: fulfillmentsWhereUniqueInput
  }

  /**
   * fulfillments findUniqueOrThrow
   */
  export type fulfillmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsInclude<ExtArgs> | null
    /**
     * Filter, which fulfillments to fetch.
     */
    where: fulfillmentsWhereUniqueInput
  }

  /**
   * fulfillments findFirst
   */
  export type fulfillmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsInclude<ExtArgs> | null
    /**
     * Filter, which fulfillments to fetch.
     */
    where?: fulfillmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fulfillments to fetch.
     */
    orderBy?: fulfillmentsOrderByWithRelationInput | fulfillmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fulfillments.
     */
    cursor?: fulfillmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fulfillments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fulfillments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fulfillments.
     */
    distinct?: FulfillmentsScalarFieldEnum | FulfillmentsScalarFieldEnum[]
  }

  /**
   * fulfillments findFirstOrThrow
   */
  export type fulfillmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsInclude<ExtArgs> | null
    /**
     * Filter, which fulfillments to fetch.
     */
    where?: fulfillmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fulfillments to fetch.
     */
    orderBy?: fulfillmentsOrderByWithRelationInput | fulfillmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fulfillments.
     */
    cursor?: fulfillmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fulfillments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fulfillments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fulfillments.
     */
    distinct?: FulfillmentsScalarFieldEnum | FulfillmentsScalarFieldEnum[]
  }

  /**
   * fulfillments findMany
   */
  export type fulfillmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsInclude<ExtArgs> | null
    /**
     * Filter, which fulfillments to fetch.
     */
    where?: fulfillmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fulfillments to fetch.
     */
    orderBy?: fulfillmentsOrderByWithRelationInput | fulfillmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fulfillments.
     */
    cursor?: fulfillmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fulfillments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fulfillments.
     */
    skip?: number
    distinct?: FulfillmentsScalarFieldEnum | FulfillmentsScalarFieldEnum[]
  }

  /**
   * fulfillments create
   */
  export type fulfillmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a fulfillments.
     */
    data?: XOR<fulfillmentsCreateInput, fulfillmentsUncheckedCreateInput>
  }

  /**
   * fulfillments createMany
   */
  export type fulfillmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fulfillments.
     */
    data: fulfillmentsCreateManyInput | fulfillmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fulfillments createManyAndReturn
   */
  export type fulfillmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * The data used to create many fulfillments.
     */
    data: fulfillmentsCreateManyInput | fulfillmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * fulfillments update
   */
  export type fulfillmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a fulfillments.
     */
    data: XOR<fulfillmentsUpdateInput, fulfillmentsUncheckedUpdateInput>
    /**
     * Choose, which fulfillments to update.
     */
    where: fulfillmentsWhereUniqueInput
  }

  /**
   * fulfillments updateMany
   */
  export type fulfillmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fulfillments.
     */
    data: XOR<fulfillmentsUpdateManyMutationInput, fulfillmentsUncheckedUpdateManyInput>
    /**
     * Filter which fulfillments to update
     */
    where?: fulfillmentsWhereInput
    /**
     * Limit how many fulfillments to update.
     */
    limit?: number
  }

  /**
   * fulfillments updateManyAndReturn
   */
  export type fulfillmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * The data used to update fulfillments.
     */
    data: XOR<fulfillmentsUpdateManyMutationInput, fulfillmentsUncheckedUpdateManyInput>
    /**
     * Filter which fulfillments to update
     */
    where?: fulfillmentsWhereInput
    /**
     * Limit how many fulfillments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * fulfillments upsert
   */
  export type fulfillmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the fulfillments to update in case it exists.
     */
    where: fulfillmentsWhereUniqueInput
    /**
     * In case the fulfillments found by the `where` argument doesn't exist, create a new fulfillments with this data.
     */
    create: XOR<fulfillmentsCreateInput, fulfillmentsUncheckedCreateInput>
    /**
     * In case the fulfillments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fulfillmentsUpdateInput, fulfillmentsUncheckedUpdateInput>
  }

  /**
   * fulfillments delete
   */
  export type fulfillmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsInclude<ExtArgs> | null
    /**
     * Filter which fulfillments to delete.
     */
    where: fulfillmentsWhereUniqueInput
  }

  /**
   * fulfillments deleteMany
   */
  export type fulfillmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fulfillments to delete
     */
    where?: fulfillmentsWhereInput
    /**
     * Limit how many fulfillments to delete.
     */
    limit?: number
  }

  /**
   * fulfillments.orders
   */
  export type fulfillments$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
  }

  /**
   * fulfillments.tracking_events
   */
  export type fulfillments$tracking_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsInclude<ExtArgs> | null
    where?: tracking_eventsWhereInput
    orderBy?: tracking_eventsOrderByWithRelationInput | tracking_eventsOrderByWithRelationInput[]
    cursor?: tracking_eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tracking_eventsScalarFieldEnum | Tracking_eventsScalarFieldEnum[]
  }

  /**
   * fulfillments without action
   */
  export type fulfillmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    shop_id: number | null
    shopify_order_id: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    shop_id: number | null
    shopify_order_id: bigint | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    shop_id: number | null
    shopify_order_id: bigint | null
    order_number: string | null
    customer_name: string | null
    customer_phone: string | null
    status: string | null
    placed_at: Date | null
    created_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    shop_id: number | null
    shopify_order_id: bigint | null
    order_number: string | null
    customer_name: string | null
    customer_phone: string | null
    status: string | null
    placed_at: Date | null
    created_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    shop_id: number
    shopify_order_id: number
    order_number: number
    customer_name: number
    customer_phone: number
    status: number
    placed_at: number
    created_at: number
    meta_data: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    shop_id?: true
    shopify_order_id?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    shop_id?: true
    shopify_order_id?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    shop_id?: true
    shopify_order_id?: true
    order_number?: true
    customer_name?: true
    customer_phone?: true
    status?: true
    placed_at?: true
    created_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    shop_id?: true
    shopify_order_id?: true
    order_number?: true
    customer_name?: true
    customer_phone?: true
    status?: true
    placed_at?: true
    created_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    shop_id?: true
    shopify_order_id?: true
    order_number?: true
    customer_name?: true
    customer_phone?: true
    status?: true
    placed_at?: true
    created_at?: true
    meta_data?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    shop_id: number | null
    shopify_order_id: bigint
    order_number: string | null
    customer_name: string | null
    customer_phone: string | null
    status: string | null
    placed_at: Date | null
    created_at: Date | null
    meta_data: JsonValue | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop_id?: boolean
    shopify_order_id?: boolean
    order_number?: boolean
    customer_name?: boolean
    customer_phone?: boolean
    status?: boolean
    placed_at?: boolean
    created_at?: boolean
    meta_data?: boolean
    fulfillments?: boolean | orders$fulfillmentsArgs<ExtArgs>
    stores?: boolean | orders$storesArgs<ExtArgs>
    whatsapp_messages?: boolean | orders$whatsapp_messagesArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop_id?: boolean
    shopify_order_id?: boolean
    order_number?: boolean
    customer_name?: boolean
    customer_phone?: boolean
    status?: boolean
    placed_at?: boolean
    created_at?: boolean
    meta_data?: boolean
    stores?: boolean | orders$storesArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shop_id?: boolean
    shopify_order_id?: boolean
    order_number?: boolean
    customer_name?: boolean
    customer_phone?: boolean
    status?: boolean
    placed_at?: boolean
    created_at?: boolean
    meta_data?: boolean
    stores?: boolean | orders$storesArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    shop_id?: boolean
    shopify_order_id?: boolean
    order_number?: boolean
    customer_name?: boolean
    customer_phone?: boolean
    status?: boolean
    placed_at?: boolean
    created_at?: boolean
    meta_data?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shop_id" | "shopify_order_id" | "order_number" | "customer_name" | "customer_phone" | "status" | "placed_at" | "created_at" | "meta_data", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fulfillments?: boolean | orders$fulfillmentsArgs<ExtArgs>
    stores?: boolean | orders$storesArgs<ExtArgs>
    whatsapp_messages?: boolean | orders$whatsapp_messagesArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | orders$storesArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | orders$storesArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      fulfillments: Prisma.$fulfillmentsPayload<ExtArgs>[]
      stores: Prisma.$storesPayload<ExtArgs> | null
      whatsapp_messages: Prisma.$whatsapp_messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shop_id: number | null
      shopify_order_id: bigint
      order_number: string | null
      customer_name: string | null
      customer_phone: string | null
      status: string | null
      placed_at: Date | null
      created_at: Date | null
      meta_data: Prisma.JsonValue | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
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
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fulfillments<T extends orders$fulfillmentsArgs<ExtArgs> = {}>(args?: Subset<T, orders$fulfillmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stores<T extends orders$storesArgs<ExtArgs> = {}>(args?: Subset<T, orders$storesArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    whatsapp_messages<T extends orders$whatsapp_messagesArgs<ExtArgs> = {}>(args?: Subset<T, orders$whatsapp_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly shop_id: FieldRef<"orders", 'Int'>
    readonly shopify_order_id: FieldRef<"orders", 'BigInt'>
    readonly order_number: FieldRef<"orders", 'String'>
    readonly customer_name: FieldRef<"orders", 'String'>
    readonly customer_phone: FieldRef<"orders", 'String'>
    readonly status: FieldRef<"orders", 'String'>
    readonly placed_at: FieldRef<"orders", 'DateTime'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
    readonly meta_data: FieldRef<"orders", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.fulfillments
   */
  export type orders$fulfillmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsInclude<ExtArgs> | null
    where?: fulfillmentsWhereInput
    orderBy?: fulfillmentsOrderByWithRelationInput | fulfillmentsOrderByWithRelationInput[]
    cursor?: fulfillmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FulfillmentsScalarFieldEnum | FulfillmentsScalarFieldEnum[]
  }

  /**
   * orders.stores
   */
  export type orders$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    where?: storesWhereInput
  }

  /**
   * orders.whatsapp_messages
   */
  export type orders$whatsapp_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesInclude<ExtArgs> | null
    where?: whatsapp_messagesWhereInput
    orderBy?: whatsapp_messagesOrderByWithRelationInput | whatsapp_messagesOrderByWithRelationInput[]
    cursor?: whatsapp_messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Whatsapp_messagesScalarFieldEnum | Whatsapp_messagesScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model stores
   */

  export type AggregateStores = {
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  export type StoresAvgAggregateOutputType = {
    id: number | null
  }

  export type StoresSumAggregateOutputType = {
    id: number | null
  }

  export type StoresMinAggregateOutputType = {
    id: number | null
    shopify_domain: string | null
    store_name: string | null
    email: string | null
    whatsapp_enabled: boolean | null
    qr_connected: boolean | null
    session_path: string | null
    created_at: Date | null
  }

  export type StoresMaxAggregateOutputType = {
    id: number | null
    shopify_domain: string | null
    store_name: string | null
    email: string | null
    whatsapp_enabled: boolean | null
    qr_connected: boolean | null
    session_path: string | null
    created_at: Date | null
  }

  export type StoresCountAggregateOutputType = {
    id: number
    shopify_domain: number
    store_name: number
    email: number
    whatsapp_enabled: number
    qr_connected: number
    session_path: number
    created_at: number
    meta_data: number
    _all: number
  }


  export type StoresAvgAggregateInputType = {
    id?: true
  }

  export type StoresSumAggregateInputType = {
    id?: true
  }

  export type StoresMinAggregateInputType = {
    id?: true
    shopify_domain?: true
    store_name?: true
    email?: true
    whatsapp_enabled?: true
    qr_connected?: true
    session_path?: true
    created_at?: true
  }

  export type StoresMaxAggregateInputType = {
    id?: true
    shopify_domain?: true
    store_name?: true
    email?: true
    whatsapp_enabled?: true
    qr_connected?: true
    session_path?: true
    created_at?: true
  }

  export type StoresCountAggregateInputType = {
    id?: true
    shopify_domain?: true
    store_name?: true
    email?: true
    whatsapp_enabled?: true
    qr_connected?: true
    session_path?: true
    created_at?: true
    meta_data?: true
    _all?: true
  }

  export type StoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to aggregate.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stores
    **/
    _count?: true | StoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoresMaxAggregateInputType
  }

  export type GetStoresAggregateType<T extends StoresAggregateArgs> = {
        [P in keyof T & keyof AggregateStores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStores[P]>
      : GetScalarType<T[P], AggregateStores[P]>
  }




  export type storesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storesWhereInput
    orderBy?: storesOrderByWithAggregationInput | storesOrderByWithAggregationInput[]
    by: StoresScalarFieldEnum[] | StoresScalarFieldEnum
    having?: storesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoresCountAggregateInputType | true
    _avg?: StoresAvgAggregateInputType
    _sum?: StoresSumAggregateInputType
    _min?: StoresMinAggregateInputType
    _max?: StoresMaxAggregateInputType
  }

  export type StoresGroupByOutputType = {
    id: number
    shopify_domain: string
    store_name: string | null
    email: string | null
    whatsapp_enabled: boolean | null
    qr_connected: boolean | null
    session_path: string | null
    created_at: Date | null
    meta_data: JsonValue | null
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  type GetStoresGroupByPayload<T extends storesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoresGroupByOutputType[P]>
            : GetScalarType<T[P], StoresGroupByOutputType[P]>
        }
      >
    >


  export type storesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopify_domain?: boolean
    store_name?: boolean
    email?: boolean
    whatsapp_enabled?: boolean
    qr_connected?: boolean
    session_path?: boolean
    created_at?: boolean
    meta_data?: boolean
    orders?: boolean | stores$ordersArgs<ExtArgs>
    webhook_events?: boolean | stores$webhook_eventsArgs<ExtArgs>
    whatsapp_messages?: boolean | stores$whatsapp_messagesArgs<ExtArgs>
    whatsapp_sessions?: boolean | stores$whatsapp_sessionsArgs<ExtArgs>
    _count?: boolean | StoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stores"]>

  export type storesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopify_domain?: boolean
    store_name?: boolean
    email?: boolean
    whatsapp_enabled?: boolean
    qr_connected?: boolean
    session_path?: boolean
    created_at?: boolean
    meta_data?: boolean
  }, ExtArgs["result"]["stores"]>

  export type storesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopify_domain?: boolean
    store_name?: boolean
    email?: boolean
    whatsapp_enabled?: boolean
    qr_connected?: boolean
    session_path?: boolean
    created_at?: boolean
    meta_data?: boolean
  }, ExtArgs["result"]["stores"]>

  export type storesSelectScalar = {
    id?: boolean
    shopify_domain?: boolean
    store_name?: boolean
    email?: boolean
    whatsapp_enabled?: boolean
    qr_connected?: boolean
    session_path?: boolean
    created_at?: boolean
    meta_data?: boolean
  }

  export type storesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopify_domain" | "store_name" | "email" | "whatsapp_enabled" | "qr_connected" | "session_path" | "created_at" | "meta_data", ExtArgs["result"]["stores"]>
  export type storesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | stores$ordersArgs<ExtArgs>
    webhook_events?: boolean | stores$webhook_eventsArgs<ExtArgs>
    whatsapp_messages?: boolean | stores$whatsapp_messagesArgs<ExtArgs>
    whatsapp_sessions?: boolean | stores$whatsapp_sessionsArgs<ExtArgs>
    _count?: boolean | StoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type storesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type storesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $storesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stores"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
      webhook_events: Prisma.$webhook_eventsPayload<ExtArgs>[]
      whatsapp_messages: Prisma.$whatsapp_messagesPayload<ExtArgs>[]
      whatsapp_sessions: Prisma.$whatsapp_sessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopify_domain: string
      store_name: string | null
      email: string | null
      whatsapp_enabled: boolean | null
      qr_connected: boolean | null
      session_path: string | null
      created_at: Date | null
      meta_data: Prisma.JsonValue | null
    }, ExtArgs["result"]["stores"]>
    composites: {}
  }

  type storesGetPayload<S extends boolean | null | undefined | storesDefaultArgs> = $Result.GetResult<Prisma.$storesPayload, S>

  type storesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoresCountAggregateInputType | true
    }

  export interface storesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stores'], meta: { name: 'stores' } }
    /**
     * Find zero or one Stores that matches the filter.
     * @param {storesFindUniqueArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storesFindUniqueArgs>(args: SelectSubset<T, storesFindUniqueArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storesFindUniqueOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storesFindUniqueOrThrowArgs>(args: SelectSubset<T, storesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storesFindFirstArgs>(args?: SelectSubset<T, storesFindFirstArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storesFindFirstOrThrowArgs>(args?: SelectSubset<T, storesFindFirstOrThrowArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.stores.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.stores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storesWithIdOnly = await prisma.stores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends storesFindManyArgs>(args?: SelectSubset<T, storesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stores.
     * @param {storesCreateArgs} args - Arguments to create a Stores.
     * @example
     * // Create one Stores
     * const Stores = await prisma.stores.create({
     *   data: {
     *     // ... data to create a Stores
     *   }
     * })
     * 
     */
    create<T extends storesCreateArgs>(args: SelectSubset<T, storesCreateArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {storesCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storesCreateManyArgs>(args?: SelectSubset<T, storesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {storesCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storesWithIdOnly = await prisma.stores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends storesCreateManyAndReturnArgs>(args?: SelectSubset<T, storesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stores.
     * @param {storesDeleteArgs} args - Arguments to delete one Stores.
     * @example
     * // Delete one Stores
     * const Stores = await prisma.stores.delete({
     *   where: {
     *     // ... filter to delete one Stores
     *   }
     * })
     * 
     */
    delete<T extends storesDeleteArgs>(args: SelectSubset<T, storesDeleteArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stores.
     * @param {storesUpdateArgs} args - Arguments to update one Stores.
     * @example
     * // Update one Stores
     * const stores = await prisma.stores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storesUpdateArgs>(args: SelectSubset<T, storesUpdateArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {storesDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.stores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storesDeleteManyArgs>(args?: SelectSubset<T, storesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storesUpdateManyArgs>(args: SelectSubset<T, storesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {storesUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `id`
     * const storesWithIdOnly = await prisma.stores.updateManyAndReturn({
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
    updateManyAndReturn<T extends storesUpdateManyAndReturnArgs>(args: SelectSubset<T, storesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stores.
     * @param {storesUpsertArgs} args - Arguments to update or create a Stores.
     * @example
     * // Update or create a Stores
     * const stores = await prisma.stores.upsert({
     *   create: {
     *     // ... data to create a Stores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stores we want to update
     *   }
     * })
     */
    upsert<T extends storesUpsertArgs>(args: SelectSubset<T, storesUpsertArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.stores.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storesCountArgs>(
      args?: Subset<T, storesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoresAggregateArgs>(args: Subset<T, StoresAggregateArgs>): Prisma.PrismaPromise<GetStoresAggregateType<T>>

    /**
     * Group by Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesGroupByArgs} args - Group by arguments.
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
      T extends storesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storesGroupByArgs['orderBy'] }
        : { orderBy?: storesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, storesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stores model
   */
  readonly fields: storesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends stores$ordersArgs<ExtArgs> = {}>(args?: Subset<T, stores$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    webhook_events<T extends stores$webhook_eventsArgs<ExtArgs> = {}>(args?: Subset<T, stores$webhook_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhook_eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    whatsapp_messages<T extends stores$whatsapp_messagesArgs<ExtArgs> = {}>(args?: Subset<T, stores$whatsapp_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    whatsapp_sessions<T extends stores$whatsapp_sessionsArgs<ExtArgs> = {}>(args?: Subset<T, stores$whatsapp_sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the stores model
   */
  interface storesFieldRefs {
    readonly id: FieldRef<"stores", 'Int'>
    readonly shopify_domain: FieldRef<"stores", 'String'>
    readonly store_name: FieldRef<"stores", 'String'>
    readonly email: FieldRef<"stores", 'String'>
    readonly whatsapp_enabled: FieldRef<"stores", 'Boolean'>
    readonly qr_connected: FieldRef<"stores", 'Boolean'>
    readonly session_path: FieldRef<"stores", 'String'>
    readonly created_at: FieldRef<"stores", 'DateTime'>
    readonly meta_data: FieldRef<"stores", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * stores findUnique
   */
  export type storesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores findUniqueOrThrow
   */
  export type storesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores findFirst
   */
  export type storesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores findFirstOrThrow
   */
  export type storesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores findMany
   */
  export type storesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores create
   */
  export type storesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The data needed to create a stores.
     */
    data: XOR<storesCreateInput, storesUncheckedCreateInput>
  }

  /**
   * stores createMany
   */
  export type storesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: storesCreateManyInput | storesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stores createManyAndReturn
   */
  export type storesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * The data used to create many stores.
     */
    data: storesCreateManyInput | storesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stores update
   */
  export type storesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The data needed to update a stores.
     */
    data: XOR<storesUpdateInput, storesUncheckedUpdateInput>
    /**
     * Choose, which stores to update.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores updateMany
   */
  export type storesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: XOR<storesUpdateManyMutationInput, storesUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * stores updateManyAndReturn
   */
  export type storesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * The data used to update stores.
     */
    data: XOR<storesUpdateManyMutationInput, storesUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * stores upsert
   */
  export type storesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The filter to search for the stores to update in case it exists.
     */
    where: storesWhereUniqueInput
    /**
     * In case the stores found by the `where` argument doesn't exist, create a new stores with this data.
     */
    create: XOR<storesCreateInput, storesUncheckedCreateInput>
    /**
     * In case the stores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storesUpdateInput, storesUncheckedUpdateInput>
  }

  /**
   * stores delete
   */
  export type storesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter which stores to delete.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores deleteMany
   */
  export type storesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to delete.
     */
    limit?: number
  }

  /**
   * stores.orders
   */
  export type stores$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * stores.webhook_events
   */
  export type stores$webhook_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsInclude<ExtArgs> | null
    where?: webhook_eventsWhereInput
    orderBy?: webhook_eventsOrderByWithRelationInput | webhook_eventsOrderByWithRelationInput[]
    cursor?: webhook_eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Webhook_eventsScalarFieldEnum | Webhook_eventsScalarFieldEnum[]
  }

  /**
   * stores.whatsapp_messages
   */
  export type stores$whatsapp_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesInclude<ExtArgs> | null
    where?: whatsapp_messagesWhereInput
    orderBy?: whatsapp_messagesOrderByWithRelationInput | whatsapp_messagesOrderByWithRelationInput[]
    cursor?: whatsapp_messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Whatsapp_messagesScalarFieldEnum | Whatsapp_messagesScalarFieldEnum[]
  }

  /**
   * stores.whatsapp_sessions
   */
  export type stores$whatsapp_sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsInclude<ExtArgs> | null
    where?: whatsapp_sessionsWhereInput
    orderBy?: whatsapp_sessionsOrderByWithRelationInput | whatsapp_sessionsOrderByWithRelationInput[]
    cursor?: whatsapp_sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Whatsapp_sessionsScalarFieldEnum | Whatsapp_sessionsScalarFieldEnum[]
  }

  /**
   * stores without action
   */
  export type storesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
  }


  /**
   * Model tracking_events
   */

  export type AggregateTracking_events = {
    _count: Tracking_eventsCountAggregateOutputType | null
    _avg: Tracking_eventsAvgAggregateOutputType | null
    _sum: Tracking_eventsSumAggregateOutputType | null
    _min: Tracking_eventsMinAggregateOutputType | null
    _max: Tracking_eventsMaxAggregateOutputType | null
  }

  export type Tracking_eventsAvgAggregateOutputType = {
    id: number | null
    fulfillment_id: number | null
  }

  export type Tracking_eventsSumAggregateOutputType = {
    id: number | null
    fulfillment_id: number | null
  }

  export type Tracking_eventsMinAggregateOutputType = {
    id: number | null
    fulfillment_id: number | null
    status: string | null
    status_code: string | null
    location: string | null
    timestamp: Date | null
  }

  export type Tracking_eventsMaxAggregateOutputType = {
    id: number | null
    fulfillment_id: number | null
    status: string | null
    status_code: string | null
    location: string | null
    timestamp: Date | null
  }

  export type Tracking_eventsCountAggregateOutputType = {
    id: number
    fulfillment_id: number
    status: number
    status_code: number
    location: number
    timestamp: number
    meta_data: number
    _all: number
  }


  export type Tracking_eventsAvgAggregateInputType = {
    id?: true
    fulfillment_id?: true
  }

  export type Tracking_eventsSumAggregateInputType = {
    id?: true
    fulfillment_id?: true
  }

  export type Tracking_eventsMinAggregateInputType = {
    id?: true
    fulfillment_id?: true
    status?: true
    status_code?: true
    location?: true
    timestamp?: true
  }

  export type Tracking_eventsMaxAggregateInputType = {
    id?: true
    fulfillment_id?: true
    status?: true
    status_code?: true
    location?: true
    timestamp?: true
  }

  export type Tracking_eventsCountAggregateInputType = {
    id?: true
    fulfillment_id?: true
    status?: true
    status_code?: true
    location?: true
    timestamp?: true
    meta_data?: true
    _all?: true
  }

  export type Tracking_eventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tracking_events to aggregate.
     */
    where?: tracking_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tracking_events to fetch.
     */
    orderBy?: tracking_eventsOrderByWithRelationInput | tracking_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tracking_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tracking_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tracking_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tracking_events
    **/
    _count?: true | Tracking_eventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tracking_eventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tracking_eventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tracking_eventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tracking_eventsMaxAggregateInputType
  }

  export type GetTracking_eventsAggregateType<T extends Tracking_eventsAggregateArgs> = {
        [P in keyof T & keyof AggregateTracking_events]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracking_events[P]>
      : GetScalarType<T[P], AggregateTracking_events[P]>
  }




  export type tracking_eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tracking_eventsWhereInput
    orderBy?: tracking_eventsOrderByWithAggregationInput | tracking_eventsOrderByWithAggregationInput[]
    by: Tracking_eventsScalarFieldEnum[] | Tracking_eventsScalarFieldEnum
    having?: tracking_eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tracking_eventsCountAggregateInputType | true
    _avg?: Tracking_eventsAvgAggregateInputType
    _sum?: Tracking_eventsSumAggregateInputType
    _min?: Tracking_eventsMinAggregateInputType
    _max?: Tracking_eventsMaxAggregateInputType
  }

  export type Tracking_eventsGroupByOutputType = {
    id: number
    fulfillment_id: number | null
    status: string | null
    status_code: string | null
    location: string | null
    timestamp: Date | null
    meta_data: JsonValue | null
    _count: Tracking_eventsCountAggregateOutputType | null
    _avg: Tracking_eventsAvgAggregateOutputType | null
    _sum: Tracking_eventsSumAggregateOutputType | null
    _min: Tracking_eventsMinAggregateOutputType | null
    _max: Tracking_eventsMaxAggregateOutputType | null
  }

  type GetTracking_eventsGroupByPayload<T extends tracking_eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tracking_eventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tracking_eventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tracking_eventsGroupByOutputType[P]>
            : GetScalarType<T[P], Tracking_eventsGroupByOutputType[P]>
        }
      >
    >


  export type tracking_eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fulfillment_id?: boolean
    status?: boolean
    status_code?: boolean
    location?: boolean
    timestamp?: boolean
    meta_data?: boolean
    fulfillments?: boolean | tracking_events$fulfillmentsArgs<ExtArgs>
  }, ExtArgs["result"]["tracking_events"]>

  export type tracking_eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fulfillment_id?: boolean
    status?: boolean
    status_code?: boolean
    location?: boolean
    timestamp?: boolean
    meta_data?: boolean
    fulfillments?: boolean | tracking_events$fulfillmentsArgs<ExtArgs>
  }, ExtArgs["result"]["tracking_events"]>

  export type tracking_eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fulfillment_id?: boolean
    status?: boolean
    status_code?: boolean
    location?: boolean
    timestamp?: boolean
    meta_data?: boolean
    fulfillments?: boolean | tracking_events$fulfillmentsArgs<ExtArgs>
  }, ExtArgs["result"]["tracking_events"]>

  export type tracking_eventsSelectScalar = {
    id?: boolean
    fulfillment_id?: boolean
    status?: boolean
    status_code?: boolean
    location?: boolean
    timestamp?: boolean
    meta_data?: boolean
  }

  export type tracking_eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fulfillment_id" | "status" | "status_code" | "location" | "timestamp" | "meta_data", ExtArgs["result"]["tracking_events"]>
  export type tracking_eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fulfillments?: boolean | tracking_events$fulfillmentsArgs<ExtArgs>
  }
  export type tracking_eventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fulfillments?: boolean | tracking_events$fulfillmentsArgs<ExtArgs>
  }
  export type tracking_eventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fulfillments?: boolean | tracking_events$fulfillmentsArgs<ExtArgs>
  }

  export type $tracking_eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tracking_events"
    objects: {
      fulfillments: Prisma.$fulfillmentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fulfillment_id: number | null
      status: string | null
      status_code: string | null
      location: string | null
      timestamp: Date | null
      meta_data: Prisma.JsonValue | null
    }, ExtArgs["result"]["tracking_events"]>
    composites: {}
  }

  type tracking_eventsGetPayload<S extends boolean | null | undefined | tracking_eventsDefaultArgs> = $Result.GetResult<Prisma.$tracking_eventsPayload, S>

  type tracking_eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tracking_eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tracking_eventsCountAggregateInputType | true
    }

  export interface tracking_eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tracking_events'], meta: { name: 'tracking_events' } }
    /**
     * Find zero or one Tracking_events that matches the filter.
     * @param {tracking_eventsFindUniqueArgs} args - Arguments to find a Tracking_events
     * @example
     * // Get one Tracking_events
     * const tracking_events = await prisma.tracking_events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tracking_eventsFindUniqueArgs>(args: SelectSubset<T, tracking_eventsFindUniqueArgs<ExtArgs>>): Prisma__tracking_eventsClient<$Result.GetResult<Prisma.$tracking_eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tracking_events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tracking_eventsFindUniqueOrThrowArgs} args - Arguments to find a Tracking_events
     * @example
     * // Get one Tracking_events
     * const tracking_events = await prisma.tracking_events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tracking_eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, tracking_eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tracking_eventsClient<$Result.GetResult<Prisma.$tracking_eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tracking_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracking_eventsFindFirstArgs} args - Arguments to find a Tracking_events
     * @example
     * // Get one Tracking_events
     * const tracking_events = await prisma.tracking_events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tracking_eventsFindFirstArgs>(args?: SelectSubset<T, tracking_eventsFindFirstArgs<ExtArgs>>): Prisma__tracking_eventsClient<$Result.GetResult<Prisma.$tracking_eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tracking_events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracking_eventsFindFirstOrThrowArgs} args - Arguments to find a Tracking_events
     * @example
     * // Get one Tracking_events
     * const tracking_events = await prisma.tracking_events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tracking_eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, tracking_eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tracking_eventsClient<$Result.GetResult<Prisma.$tracking_eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tracking_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracking_eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracking_events
     * const tracking_events = await prisma.tracking_events.findMany()
     * 
     * // Get first 10 Tracking_events
     * const tracking_events = await prisma.tracking_events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tracking_eventsWithIdOnly = await prisma.tracking_events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tracking_eventsFindManyArgs>(args?: SelectSubset<T, tracking_eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tracking_eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tracking_events.
     * @param {tracking_eventsCreateArgs} args - Arguments to create a Tracking_events.
     * @example
     * // Create one Tracking_events
     * const Tracking_events = await prisma.tracking_events.create({
     *   data: {
     *     // ... data to create a Tracking_events
     *   }
     * })
     * 
     */
    create<T extends tracking_eventsCreateArgs>(args: SelectSubset<T, tracking_eventsCreateArgs<ExtArgs>>): Prisma__tracking_eventsClient<$Result.GetResult<Prisma.$tracking_eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tracking_events.
     * @param {tracking_eventsCreateManyArgs} args - Arguments to create many Tracking_events.
     * @example
     * // Create many Tracking_events
     * const tracking_events = await prisma.tracking_events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tracking_eventsCreateManyArgs>(args?: SelectSubset<T, tracking_eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tracking_events and returns the data saved in the database.
     * @param {tracking_eventsCreateManyAndReturnArgs} args - Arguments to create many Tracking_events.
     * @example
     * // Create many Tracking_events
     * const tracking_events = await prisma.tracking_events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tracking_events and only return the `id`
     * const tracking_eventsWithIdOnly = await prisma.tracking_events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tracking_eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, tracking_eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tracking_eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tracking_events.
     * @param {tracking_eventsDeleteArgs} args - Arguments to delete one Tracking_events.
     * @example
     * // Delete one Tracking_events
     * const Tracking_events = await prisma.tracking_events.delete({
     *   where: {
     *     // ... filter to delete one Tracking_events
     *   }
     * })
     * 
     */
    delete<T extends tracking_eventsDeleteArgs>(args: SelectSubset<T, tracking_eventsDeleteArgs<ExtArgs>>): Prisma__tracking_eventsClient<$Result.GetResult<Prisma.$tracking_eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tracking_events.
     * @param {tracking_eventsUpdateArgs} args - Arguments to update one Tracking_events.
     * @example
     * // Update one Tracking_events
     * const tracking_events = await prisma.tracking_events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tracking_eventsUpdateArgs>(args: SelectSubset<T, tracking_eventsUpdateArgs<ExtArgs>>): Prisma__tracking_eventsClient<$Result.GetResult<Prisma.$tracking_eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tracking_events.
     * @param {tracking_eventsDeleteManyArgs} args - Arguments to filter Tracking_events to delete.
     * @example
     * // Delete a few Tracking_events
     * const { count } = await prisma.tracking_events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tracking_eventsDeleteManyArgs>(args?: SelectSubset<T, tracking_eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracking_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracking_eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracking_events
     * const tracking_events = await prisma.tracking_events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tracking_eventsUpdateManyArgs>(args: SelectSubset<T, tracking_eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracking_events and returns the data updated in the database.
     * @param {tracking_eventsUpdateManyAndReturnArgs} args - Arguments to update many Tracking_events.
     * @example
     * // Update many Tracking_events
     * const tracking_events = await prisma.tracking_events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tracking_events and only return the `id`
     * const tracking_eventsWithIdOnly = await prisma.tracking_events.updateManyAndReturn({
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
    updateManyAndReturn<T extends tracking_eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, tracking_eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tracking_eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tracking_events.
     * @param {tracking_eventsUpsertArgs} args - Arguments to update or create a Tracking_events.
     * @example
     * // Update or create a Tracking_events
     * const tracking_events = await prisma.tracking_events.upsert({
     *   create: {
     *     // ... data to create a Tracking_events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tracking_events we want to update
     *   }
     * })
     */
    upsert<T extends tracking_eventsUpsertArgs>(args: SelectSubset<T, tracking_eventsUpsertArgs<ExtArgs>>): Prisma__tracking_eventsClient<$Result.GetResult<Prisma.$tracking_eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tracking_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracking_eventsCountArgs} args - Arguments to filter Tracking_events to count.
     * @example
     * // Count the number of Tracking_events
     * const count = await prisma.tracking_events.count({
     *   where: {
     *     // ... the filter for the Tracking_events we want to count
     *   }
     * })
    **/
    count<T extends tracking_eventsCountArgs>(
      args?: Subset<T, tracking_eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tracking_eventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tracking_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tracking_eventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tracking_eventsAggregateArgs>(args: Subset<T, Tracking_eventsAggregateArgs>): Prisma.PrismaPromise<GetTracking_eventsAggregateType<T>>

    /**
     * Group by Tracking_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracking_eventsGroupByArgs} args - Group by arguments.
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
      T extends tracking_eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tracking_eventsGroupByArgs['orderBy'] }
        : { orderBy?: tracking_eventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tracking_eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTracking_eventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tracking_events model
   */
  readonly fields: tracking_eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tracking_events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tracking_eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fulfillments<T extends tracking_events$fulfillmentsArgs<ExtArgs> = {}>(args?: Subset<T, tracking_events$fulfillmentsArgs<ExtArgs>>): Prisma__fulfillmentsClient<$Result.GetResult<Prisma.$fulfillmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tracking_events model
   */
  interface tracking_eventsFieldRefs {
    readonly id: FieldRef<"tracking_events", 'Int'>
    readonly fulfillment_id: FieldRef<"tracking_events", 'Int'>
    readonly status: FieldRef<"tracking_events", 'String'>
    readonly status_code: FieldRef<"tracking_events", 'String'>
    readonly location: FieldRef<"tracking_events", 'String'>
    readonly timestamp: FieldRef<"tracking_events", 'DateTime'>
    readonly meta_data: FieldRef<"tracking_events", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * tracking_events findUnique
   */
  export type tracking_eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsInclude<ExtArgs> | null
    /**
     * Filter, which tracking_events to fetch.
     */
    where: tracking_eventsWhereUniqueInput
  }

  /**
   * tracking_events findUniqueOrThrow
   */
  export type tracking_eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsInclude<ExtArgs> | null
    /**
     * Filter, which tracking_events to fetch.
     */
    where: tracking_eventsWhereUniqueInput
  }

  /**
   * tracking_events findFirst
   */
  export type tracking_eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsInclude<ExtArgs> | null
    /**
     * Filter, which tracking_events to fetch.
     */
    where?: tracking_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tracking_events to fetch.
     */
    orderBy?: tracking_eventsOrderByWithRelationInput | tracking_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tracking_events.
     */
    cursor?: tracking_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tracking_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tracking_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tracking_events.
     */
    distinct?: Tracking_eventsScalarFieldEnum | Tracking_eventsScalarFieldEnum[]
  }

  /**
   * tracking_events findFirstOrThrow
   */
  export type tracking_eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsInclude<ExtArgs> | null
    /**
     * Filter, which tracking_events to fetch.
     */
    where?: tracking_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tracking_events to fetch.
     */
    orderBy?: tracking_eventsOrderByWithRelationInput | tracking_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tracking_events.
     */
    cursor?: tracking_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tracking_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tracking_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tracking_events.
     */
    distinct?: Tracking_eventsScalarFieldEnum | Tracking_eventsScalarFieldEnum[]
  }

  /**
   * tracking_events findMany
   */
  export type tracking_eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsInclude<ExtArgs> | null
    /**
     * Filter, which tracking_events to fetch.
     */
    where?: tracking_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tracking_events to fetch.
     */
    orderBy?: tracking_eventsOrderByWithRelationInput | tracking_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tracking_events.
     */
    cursor?: tracking_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tracking_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tracking_events.
     */
    skip?: number
    distinct?: Tracking_eventsScalarFieldEnum | Tracking_eventsScalarFieldEnum[]
  }

  /**
   * tracking_events create
   */
  export type tracking_eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a tracking_events.
     */
    data?: XOR<tracking_eventsCreateInput, tracking_eventsUncheckedCreateInput>
  }

  /**
   * tracking_events createMany
   */
  export type tracking_eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tracking_events.
     */
    data: tracking_eventsCreateManyInput | tracking_eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tracking_events createManyAndReturn
   */
  export type tracking_eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * The data used to create many tracking_events.
     */
    data: tracking_eventsCreateManyInput | tracking_eventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tracking_events update
   */
  export type tracking_eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a tracking_events.
     */
    data: XOR<tracking_eventsUpdateInput, tracking_eventsUncheckedUpdateInput>
    /**
     * Choose, which tracking_events to update.
     */
    where: tracking_eventsWhereUniqueInput
  }

  /**
   * tracking_events updateMany
   */
  export type tracking_eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tracking_events.
     */
    data: XOR<tracking_eventsUpdateManyMutationInput, tracking_eventsUncheckedUpdateManyInput>
    /**
     * Filter which tracking_events to update
     */
    where?: tracking_eventsWhereInput
    /**
     * Limit how many tracking_events to update.
     */
    limit?: number
  }

  /**
   * tracking_events updateManyAndReturn
   */
  export type tracking_eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * The data used to update tracking_events.
     */
    data: XOR<tracking_eventsUpdateManyMutationInput, tracking_eventsUncheckedUpdateManyInput>
    /**
     * Filter which tracking_events to update
     */
    where?: tracking_eventsWhereInput
    /**
     * Limit how many tracking_events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tracking_events upsert
   */
  export type tracking_eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the tracking_events to update in case it exists.
     */
    where: tracking_eventsWhereUniqueInput
    /**
     * In case the tracking_events found by the `where` argument doesn't exist, create a new tracking_events with this data.
     */
    create: XOR<tracking_eventsCreateInput, tracking_eventsUncheckedCreateInput>
    /**
     * In case the tracking_events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tracking_eventsUpdateInput, tracking_eventsUncheckedUpdateInput>
  }

  /**
   * tracking_events delete
   */
  export type tracking_eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsInclude<ExtArgs> | null
    /**
     * Filter which tracking_events to delete.
     */
    where: tracking_eventsWhereUniqueInput
  }

  /**
   * tracking_events deleteMany
   */
  export type tracking_eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tracking_events to delete
     */
    where?: tracking_eventsWhereInput
    /**
     * Limit how many tracking_events to delete.
     */
    limit?: number
  }

  /**
   * tracking_events.fulfillments
   */
  export type tracking_events$fulfillmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fulfillments
     */
    select?: fulfillmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fulfillments
     */
    omit?: fulfillmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fulfillmentsInclude<ExtArgs> | null
    where?: fulfillmentsWhereInput
  }

  /**
   * tracking_events without action
   */
  export type tracking_eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking_events
     */
    select?: tracking_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tracking_events
     */
    omit?: tracking_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tracking_eventsInclude<ExtArgs> | null
  }


  /**
   * Model webhook_events
   */

  export type AggregateWebhook_events = {
    _count: Webhook_eventsCountAggregateOutputType | null
    _avg: Webhook_eventsAvgAggregateOutputType | null
    _sum: Webhook_eventsSumAggregateOutputType | null
    _min: Webhook_eventsMinAggregateOutputType | null
    _max: Webhook_eventsMaxAggregateOutputType | null
  }

  export type Webhook_eventsAvgAggregateOutputType = {
    id: number | null
    store_id: number | null
  }

  export type Webhook_eventsSumAggregateOutputType = {
    id: number | null
    store_id: number | null
  }

  export type Webhook_eventsMinAggregateOutputType = {
    id: number | null
    store_id: number | null
    event_type: string | null
    order_id: string | null
    tracking_number: string | null
    tracking_url: string | null
    timestamp: Date | null
    status: string | null
  }

  export type Webhook_eventsMaxAggregateOutputType = {
    id: number | null
    store_id: number | null
    event_type: string | null
    order_id: string | null
    tracking_number: string | null
    tracking_url: string | null
    timestamp: Date | null
    status: string | null
  }

  export type Webhook_eventsCountAggregateOutputType = {
    id: number
    store_id: number
    event_type: number
    order_id: number
    tracking_number: number
    tracking_url: number
    payload: number
    timestamp: number
    status: number
    meta_data: number
    _all: number
  }


  export type Webhook_eventsAvgAggregateInputType = {
    id?: true
    store_id?: true
  }

  export type Webhook_eventsSumAggregateInputType = {
    id?: true
    store_id?: true
  }

  export type Webhook_eventsMinAggregateInputType = {
    id?: true
    store_id?: true
    event_type?: true
    order_id?: true
    tracking_number?: true
    tracking_url?: true
    timestamp?: true
    status?: true
  }

  export type Webhook_eventsMaxAggregateInputType = {
    id?: true
    store_id?: true
    event_type?: true
    order_id?: true
    tracking_number?: true
    tracking_url?: true
    timestamp?: true
    status?: true
  }

  export type Webhook_eventsCountAggregateInputType = {
    id?: true
    store_id?: true
    event_type?: true
    order_id?: true
    tracking_number?: true
    tracking_url?: true
    payload?: true
    timestamp?: true
    status?: true
    meta_data?: true
    _all?: true
  }

  export type Webhook_eventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webhook_events to aggregate.
     */
    where?: webhook_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhook_events to fetch.
     */
    orderBy?: webhook_eventsOrderByWithRelationInput | webhook_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: webhook_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhook_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhook_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned webhook_events
    **/
    _count?: true | Webhook_eventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Webhook_eventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Webhook_eventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Webhook_eventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Webhook_eventsMaxAggregateInputType
  }

  export type GetWebhook_eventsAggregateType<T extends Webhook_eventsAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhook_events]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhook_events[P]>
      : GetScalarType<T[P], AggregateWebhook_events[P]>
  }




  export type webhook_eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webhook_eventsWhereInput
    orderBy?: webhook_eventsOrderByWithAggregationInput | webhook_eventsOrderByWithAggregationInput[]
    by: Webhook_eventsScalarFieldEnum[] | Webhook_eventsScalarFieldEnum
    having?: webhook_eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Webhook_eventsCountAggregateInputType | true
    _avg?: Webhook_eventsAvgAggregateInputType
    _sum?: Webhook_eventsSumAggregateInputType
    _min?: Webhook_eventsMinAggregateInputType
    _max?: Webhook_eventsMaxAggregateInputType
  }

  export type Webhook_eventsGroupByOutputType = {
    id: number
    store_id: number | null
    event_type: string | null
    order_id: string | null
    tracking_number: string | null
    tracking_url: string | null
    payload: JsonValue | null
    timestamp: Date | null
    status: string | null
    meta_data: JsonValue | null
    _count: Webhook_eventsCountAggregateOutputType | null
    _avg: Webhook_eventsAvgAggregateOutputType | null
    _sum: Webhook_eventsSumAggregateOutputType | null
    _min: Webhook_eventsMinAggregateOutputType | null
    _max: Webhook_eventsMaxAggregateOutputType | null
  }

  type GetWebhook_eventsGroupByPayload<T extends webhook_eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Webhook_eventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Webhook_eventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Webhook_eventsGroupByOutputType[P]>
            : GetScalarType<T[P], Webhook_eventsGroupByOutputType[P]>
        }
      >
    >


  export type webhook_eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    event_type?: boolean
    order_id?: boolean
    tracking_number?: boolean
    tracking_url?: boolean
    payload?: boolean
    timestamp?: boolean
    status?: boolean
    meta_data?: boolean
    stores?: boolean | webhook_events$storesArgs<ExtArgs>
  }, ExtArgs["result"]["webhook_events"]>

  export type webhook_eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    event_type?: boolean
    order_id?: boolean
    tracking_number?: boolean
    tracking_url?: boolean
    payload?: boolean
    timestamp?: boolean
    status?: boolean
    meta_data?: boolean
    stores?: boolean | webhook_events$storesArgs<ExtArgs>
  }, ExtArgs["result"]["webhook_events"]>

  export type webhook_eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    event_type?: boolean
    order_id?: boolean
    tracking_number?: boolean
    tracking_url?: boolean
    payload?: boolean
    timestamp?: boolean
    status?: boolean
    meta_data?: boolean
    stores?: boolean | webhook_events$storesArgs<ExtArgs>
  }, ExtArgs["result"]["webhook_events"]>

  export type webhook_eventsSelectScalar = {
    id?: boolean
    store_id?: boolean
    event_type?: boolean
    order_id?: boolean
    tracking_number?: boolean
    tracking_url?: boolean
    payload?: boolean
    timestamp?: boolean
    status?: boolean
    meta_data?: boolean
  }

  export type webhook_eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "store_id" | "event_type" | "order_id" | "tracking_number" | "tracking_url" | "payload" | "timestamp" | "status" | "meta_data", ExtArgs["result"]["webhook_events"]>
  export type webhook_eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | webhook_events$storesArgs<ExtArgs>
  }
  export type webhook_eventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | webhook_events$storesArgs<ExtArgs>
  }
  export type webhook_eventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | webhook_events$storesArgs<ExtArgs>
  }

  export type $webhook_eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "webhook_events"
    objects: {
      stores: Prisma.$storesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      store_id: number | null
      event_type: string | null
      order_id: string | null
      tracking_number: string | null
      tracking_url: string | null
      payload: Prisma.JsonValue | null
      timestamp: Date | null
      status: string | null
      meta_data: Prisma.JsonValue | null
    }, ExtArgs["result"]["webhook_events"]>
    composites: {}
  }

  type webhook_eventsGetPayload<S extends boolean | null | undefined | webhook_eventsDefaultArgs> = $Result.GetResult<Prisma.$webhook_eventsPayload, S>

  type webhook_eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<webhook_eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Webhook_eventsCountAggregateInputType | true
    }

  export interface webhook_eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['webhook_events'], meta: { name: 'webhook_events' } }
    /**
     * Find zero or one Webhook_events that matches the filter.
     * @param {webhook_eventsFindUniqueArgs} args - Arguments to find a Webhook_events
     * @example
     * // Get one Webhook_events
     * const webhook_events = await prisma.webhook_events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends webhook_eventsFindUniqueArgs>(args: SelectSubset<T, webhook_eventsFindUniqueArgs<ExtArgs>>): Prisma__webhook_eventsClient<$Result.GetResult<Prisma.$webhook_eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Webhook_events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {webhook_eventsFindUniqueOrThrowArgs} args - Arguments to find a Webhook_events
     * @example
     * // Get one Webhook_events
     * const webhook_events = await prisma.webhook_events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends webhook_eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, webhook_eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__webhook_eventsClient<$Result.GetResult<Prisma.$webhook_eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webhook_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhook_eventsFindFirstArgs} args - Arguments to find a Webhook_events
     * @example
     * // Get one Webhook_events
     * const webhook_events = await prisma.webhook_events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends webhook_eventsFindFirstArgs>(args?: SelectSubset<T, webhook_eventsFindFirstArgs<ExtArgs>>): Prisma__webhook_eventsClient<$Result.GetResult<Prisma.$webhook_eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webhook_events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhook_eventsFindFirstOrThrowArgs} args - Arguments to find a Webhook_events
     * @example
     * // Get one Webhook_events
     * const webhook_events = await prisma.webhook_events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends webhook_eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, webhook_eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__webhook_eventsClient<$Result.GetResult<Prisma.$webhook_eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Webhook_events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhook_eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webhook_events
     * const webhook_events = await prisma.webhook_events.findMany()
     * 
     * // Get first 10 Webhook_events
     * const webhook_events = await prisma.webhook_events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhook_eventsWithIdOnly = await prisma.webhook_events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends webhook_eventsFindManyArgs>(args?: SelectSubset<T, webhook_eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhook_eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Webhook_events.
     * @param {webhook_eventsCreateArgs} args - Arguments to create a Webhook_events.
     * @example
     * // Create one Webhook_events
     * const Webhook_events = await prisma.webhook_events.create({
     *   data: {
     *     // ... data to create a Webhook_events
     *   }
     * })
     * 
     */
    create<T extends webhook_eventsCreateArgs>(args: SelectSubset<T, webhook_eventsCreateArgs<ExtArgs>>): Prisma__webhook_eventsClient<$Result.GetResult<Prisma.$webhook_eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Webhook_events.
     * @param {webhook_eventsCreateManyArgs} args - Arguments to create many Webhook_events.
     * @example
     * // Create many Webhook_events
     * const webhook_events = await prisma.webhook_events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends webhook_eventsCreateManyArgs>(args?: SelectSubset<T, webhook_eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Webhook_events and returns the data saved in the database.
     * @param {webhook_eventsCreateManyAndReturnArgs} args - Arguments to create many Webhook_events.
     * @example
     * // Create many Webhook_events
     * const webhook_events = await prisma.webhook_events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Webhook_events and only return the `id`
     * const webhook_eventsWithIdOnly = await prisma.webhook_events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends webhook_eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, webhook_eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhook_eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Webhook_events.
     * @param {webhook_eventsDeleteArgs} args - Arguments to delete one Webhook_events.
     * @example
     * // Delete one Webhook_events
     * const Webhook_events = await prisma.webhook_events.delete({
     *   where: {
     *     // ... filter to delete one Webhook_events
     *   }
     * })
     * 
     */
    delete<T extends webhook_eventsDeleteArgs>(args: SelectSubset<T, webhook_eventsDeleteArgs<ExtArgs>>): Prisma__webhook_eventsClient<$Result.GetResult<Prisma.$webhook_eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Webhook_events.
     * @param {webhook_eventsUpdateArgs} args - Arguments to update one Webhook_events.
     * @example
     * // Update one Webhook_events
     * const webhook_events = await prisma.webhook_events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends webhook_eventsUpdateArgs>(args: SelectSubset<T, webhook_eventsUpdateArgs<ExtArgs>>): Prisma__webhook_eventsClient<$Result.GetResult<Prisma.$webhook_eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Webhook_events.
     * @param {webhook_eventsDeleteManyArgs} args - Arguments to filter Webhook_events to delete.
     * @example
     * // Delete a few Webhook_events
     * const { count } = await prisma.webhook_events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends webhook_eventsDeleteManyArgs>(args?: SelectSubset<T, webhook_eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webhook_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhook_eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webhook_events
     * const webhook_events = await prisma.webhook_events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends webhook_eventsUpdateManyArgs>(args: SelectSubset<T, webhook_eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webhook_events and returns the data updated in the database.
     * @param {webhook_eventsUpdateManyAndReturnArgs} args - Arguments to update many Webhook_events.
     * @example
     * // Update many Webhook_events
     * const webhook_events = await prisma.webhook_events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Webhook_events and only return the `id`
     * const webhook_eventsWithIdOnly = await prisma.webhook_events.updateManyAndReturn({
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
    updateManyAndReturn<T extends webhook_eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, webhook_eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webhook_eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Webhook_events.
     * @param {webhook_eventsUpsertArgs} args - Arguments to update or create a Webhook_events.
     * @example
     * // Update or create a Webhook_events
     * const webhook_events = await prisma.webhook_events.upsert({
     *   create: {
     *     // ... data to create a Webhook_events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webhook_events we want to update
     *   }
     * })
     */
    upsert<T extends webhook_eventsUpsertArgs>(args: SelectSubset<T, webhook_eventsUpsertArgs<ExtArgs>>): Prisma__webhook_eventsClient<$Result.GetResult<Prisma.$webhook_eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Webhook_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhook_eventsCountArgs} args - Arguments to filter Webhook_events to count.
     * @example
     * // Count the number of Webhook_events
     * const count = await prisma.webhook_events.count({
     *   where: {
     *     // ... the filter for the Webhook_events we want to count
     *   }
     * })
    **/
    count<T extends webhook_eventsCountArgs>(
      args?: Subset<T, webhook_eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Webhook_eventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webhook_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Webhook_eventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Webhook_eventsAggregateArgs>(args: Subset<T, Webhook_eventsAggregateArgs>): Prisma.PrismaPromise<GetWebhook_eventsAggregateType<T>>

    /**
     * Group by Webhook_events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webhook_eventsGroupByArgs} args - Group by arguments.
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
      T extends webhook_eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: webhook_eventsGroupByArgs['orderBy'] }
        : { orderBy?: webhook_eventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, webhook_eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhook_eventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the webhook_events model
   */
  readonly fields: webhook_eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for webhook_events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__webhook_eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stores<T extends webhook_events$storesArgs<ExtArgs> = {}>(args?: Subset<T, webhook_events$storesArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the webhook_events model
   */
  interface webhook_eventsFieldRefs {
    readonly id: FieldRef<"webhook_events", 'Int'>
    readonly store_id: FieldRef<"webhook_events", 'Int'>
    readonly event_type: FieldRef<"webhook_events", 'String'>
    readonly order_id: FieldRef<"webhook_events", 'String'>
    readonly tracking_number: FieldRef<"webhook_events", 'String'>
    readonly tracking_url: FieldRef<"webhook_events", 'String'>
    readonly payload: FieldRef<"webhook_events", 'Json'>
    readonly timestamp: FieldRef<"webhook_events", 'DateTime'>
    readonly status: FieldRef<"webhook_events", 'String'>
    readonly meta_data: FieldRef<"webhook_events", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * webhook_events findUnique
   */
  export type webhook_eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsInclude<ExtArgs> | null
    /**
     * Filter, which webhook_events to fetch.
     */
    where: webhook_eventsWhereUniqueInput
  }

  /**
   * webhook_events findUniqueOrThrow
   */
  export type webhook_eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsInclude<ExtArgs> | null
    /**
     * Filter, which webhook_events to fetch.
     */
    where: webhook_eventsWhereUniqueInput
  }

  /**
   * webhook_events findFirst
   */
  export type webhook_eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsInclude<ExtArgs> | null
    /**
     * Filter, which webhook_events to fetch.
     */
    where?: webhook_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhook_events to fetch.
     */
    orderBy?: webhook_eventsOrderByWithRelationInput | webhook_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webhook_events.
     */
    cursor?: webhook_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhook_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhook_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webhook_events.
     */
    distinct?: Webhook_eventsScalarFieldEnum | Webhook_eventsScalarFieldEnum[]
  }

  /**
   * webhook_events findFirstOrThrow
   */
  export type webhook_eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsInclude<ExtArgs> | null
    /**
     * Filter, which webhook_events to fetch.
     */
    where?: webhook_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhook_events to fetch.
     */
    orderBy?: webhook_eventsOrderByWithRelationInput | webhook_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webhook_events.
     */
    cursor?: webhook_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhook_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhook_events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webhook_events.
     */
    distinct?: Webhook_eventsScalarFieldEnum | Webhook_eventsScalarFieldEnum[]
  }

  /**
   * webhook_events findMany
   */
  export type webhook_eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsInclude<ExtArgs> | null
    /**
     * Filter, which webhook_events to fetch.
     */
    where?: webhook_eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webhook_events to fetch.
     */
    orderBy?: webhook_eventsOrderByWithRelationInput | webhook_eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing webhook_events.
     */
    cursor?: webhook_eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webhook_events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webhook_events.
     */
    skip?: number
    distinct?: Webhook_eventsScalarFieldEnum | Webhook_eventsScalarFieldEnum[]
  }

  /**
   * webhook_events create
   */
  export type webhook_eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a webhook_events.
     */
    data?: XOR<webhook_eventsCreateInput, webhook_eventsUncheckedCreateInput>
  }

  /**
   * webhook_events createMany
   */
  export type webhook_eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many webhook_events.
     */
    data: webhook_eventsCreateManyInput | webhook_eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * webhook_events createManyAndReturn
   */
  export type webhook_eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * The data used to create many webhook_events.
     */
    data: webhook_eventsCreateManyInput | webhook_eventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * webhook_events update
   */
  export type webhook_eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a webhook_events.
     */
    data: XOR<webhook_eventsUpdateInput, webhook_eventsUncheckedUpdateInput>
    /**
     * Choose, which webhook_events to update.
     */
    where: webhook_eventsWhereUniqueInput
  }

  /**
   * webhook_events updateMany
   */
  export type webhook_eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update webhook_events.
     */
    data: XOR<webhook_eventsUpdateManyMutationInput, webhook_eventsUncheckedUpdateManyInput>
    /**
     * Filter which webhook_events to update
     */
    where?: webhook_eventsWhereInput
    /**
     * Limit how many webhook_events to update.
     */
    limit?: number
  }

  /**
   * webhook_events updateManyAndReturn
   */
  export type webhook_eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * The data used to update webhook_events.
     */
    data: XOR<webhook_eventsUpdateManyMutationInput, webhook_eventsUncheckedUpdateManyInput>
    /**
     * Filter which webhook_events to update
     */
    where?: webhook_eventsWhereInput
    /**
     * Limit how many webhook_events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * webhook_events upsert
   */
  export type webhook_eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the webhook_events to update in case it exists.
     */
    where: webhook_eventsWhereUniqueInput
    /**
     * In case the webhook_events found by the `where` argument doesn't exist, create a new webhook_events with this data.
     */
    create: XOR<webhook_eventsCreateInput, webhook_eventsUncheckedCreateInput>
    /**
     * In case the webhook_events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<webhook_eventsUpdateInput, webhook_eventsUncheckedUpdateInput>
  }

  /**
   * webhook_events delete
   */
  export type webhook_eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsInclude<ExtArgs> | null
    /**
     * Filter which webhook_events to delete.
     */
    where: webhook_eventsWhereUniqueInput
  }

  /**
   * webhook_events deleteMany
   */
  export type webhook_eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webhook_events to delete
     */
    where?: webhook_eventsWhereInput
    /**
     * Limit how many webhook_events to delete.
     */
    limit?: number
  }

  /**
   * webhook_events.stores
   */
  export type webhook_events$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    where?: storesWhereInput
  }

  /**
   * webhook_events without action
   */
  export type webhook_eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webhook_events
     */
    select?: webhook_eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the webhook_events
     */
    omit?: webhook_eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webhook_eventsInclude<ExtArgs> | null
  }


  /**
   * Model whatsapp_messages
   */

  export type AggregateWhatsapp_messages = {
    _count: Whatsapp_messagesCountAggregateOutputType | null
    _avg: Whatsapp_messagesAvgAggregateOutputType | null
    _sum: Whatsapp_messagesSumAggregateOutputType | null
    _min: Whatsapp_messagesMinAggregateOutputType | null
    _max: Whatsapp_messagesMaxAggregateOutputType | null
  }

  export type Whatsapp_messagesAvgAggregateOutputType = {
    id: number | null
    store_id: number | null
    order_id: number | null
    attempt_count: number | null
  }

  export type Whatsapp_messagesSumAggregateOutputType = {
    id: number | null
    store_id: number | null
    order_id: number | null
    attempt_count: number | null
  }

  export type Whatsapp_messagesMinAggregateOutputType = {
    id: number | null
    store_id: number | null
    order_id: number | null
    customer_phone: string | null
    message: string | null
    status: string | null
    attempt_count: number | null
    error_log: string | null
    timestamp: Date | null
  }

  export type Whatsapp_messagesMaxAggregateOutputType = {
    id: number | null
    store_id: number | null
    order_id: number | null
    customer_phone: string | null
    message: string | null
    status: string | null
    attempt_count: number | null
    error_log: string | null
    timestamp: Date | null
  }

  export type Whatsapp_messagesCountAggregateOutputType = {
    id: number
    store_id: number
    order_id: number
    customer_phone: number
    message: number
    status: number
    attempt_count: number
    error_log: number
    timestamp: number
    meta_data: number
    _all: number
  }


  export type Whatsapp_messagesAvgAggregateInputType = {
    id?: true
    store_id?: true
    order_id?: true
    attempt_count?: true
  }

  export type Whatsapp_messagesSumAggregateInputType = {
    id?: true
    store_id?: true
    order_id?: true
    attempt_count?: true
  }

  export type Whatsapp_messagesMinAggregateInputType = {
    id?: true
    store_id?: true
    order_id?: true
    customer_phone?: true
    message?: true
    status?: true
    attempt_count?: true
    error_log?: true
    timestamp?: true
  }

  export type Whatsapp_messagesMaxAggregateInputType = {
    id?: true
    store_id?: true
    order_id?: true
    customer_phone?: true
    message?: true
    status?: true
    attempt_count?: true
    error_log?: true
    timestamp?: true
  }

  export type Whatsapp_messagesCountAggregateInputType = {
    id?: true
    store_id?: true
    order_id?: true
    customer_phone?: true
    message?: true
    status?: true
    attempt_count?: true
    error_log?: true
    timestamp?: true
    meta_data?: true
    _all?: true
  }

  export type Whatsapp_messagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which whatsapp_messages to aggregate.
     */
    where?: whatsapp_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_messages to fetch.
     */
    orderBy?: whatsapp_messagesOrderByWithRelationInput | whatsapp_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: whatsapp_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned whatsapp_messages
    **/
    _count?: true | Whatsapp_messagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Whatsapp_messagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Whatsapp_messagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Whatsapp_messagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Whatsapp_messagesMaxAggregateInputType
  }

  export type GetWhatsapp_messagesAggregateType<T extends Whatsapp_messagesAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsapp_messages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsapp_messages[P]>
      : GetScalarType<T[P], AggregateWhatsapp_messages[P]>
  }




  export type whatsapp_messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: whatsapp_messagesWhereInput
    orderBy?: whatsapp_messagesOrderByWithAggregationInput | whatsapp_messagesOrderByWithAggregationInput[]
    by: Whatsapp_messagesScalarFieldEnum[] | Whatsapp_messagesScalarFieldEnum
    having?: whatsapp_messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Whatsapp_messagesCountAggregateInputType | true
    _avg?: Whatsapp_messagesAvgAggregateInputType
    _sum?: Whatsapp_messagesSumAggregateInputType
    _min?: Whatsapp_messagesMinAggregateInputType
    _max?: Whatsapp_messagesMaxAggregateInputType
  }

  export type Whatsapp_messagesGroupByOutputType = {
    id: number
    store_id: number | null
    order_id: number | null
    customer_phone: string | null
    message: string | null
    status: string | null
    attempt_count: number | null
    error_log: string | null
    timestamp: Date | null
    meta_data: JsonValue | null
    _count: Whatsapp_messagesCountAggregateOutputType | null
    _avg: Whatsapp_messagesAvgAggregateOutputType | null
    _sum: Whatsapp_messagesSumAggregateOutputType | null
    _min: Whatsapp_messagesMinAggregateOutputType | null
    _max: Whatsapp_messagesMaxAggregateOutputType | null
  }

  type GetWhatsapp_messagesGroupByPayload<T extends whatsapp_messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Whatsapp_messagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Whatsapp_messagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Whatsapp_messagesGroupByOutputType[P]>
            : GetScalarType<T[P], Whatsapp_messagesGroupByOutputType[P]>
        }
      >
    >


  export type whatsapp_messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    order_id?: boolean
    customer_phone?: boolean
    message?: boolean
    status?: boolean
    attempt_count?: boolean
    error_log?: boolean
    timestamp?: boolean
    meta_data?: boolean
    orders?: boolean | whatsapp_messages$ordersArgs<ExtArgs>
    stores?: boolean | whatsapp_messages$storesArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp_messages"]>

  export type whatsapp_messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    order_id?: boolean
    customer_phone?: boolean
    message?: boolean
    status?: boolean
    attempt_count?: boolean
    error_log?: boolean
    timestamp?: boolean
    meta_data?: boolean
    orders?: boolean | whatsapp_messages$ordersArgs<ExtArgs>
    stores?: boolean | whatsapp_messages$storesArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp_messages"]>

  export type whatsapp_messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    order_id?: boolean
    customer_phone?: boolean
    message?: boolean
    status?: boolean
    attempt_count?: boolean
    error_log?: boolean
    timestamp?: boolean
    meta_data?: boolean
    orders?: boolean | whatsapp_messages$ordersArgs<ExtArgs>
    stores?: boolean | whatsapp_messages$storesArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp_messages"]>

  export type whatsapp_messagesSelectScalar = {
    id?: boolean
    store_id?: boolean
    order_id?: boolean
    customer_phone?: boolean
    message?: boolean
    status?: boolean
    attempt_count?: boolean
    error_log?: boolean
    timestamp?: boolean
    meta_data?: boolean
  }

  export type whatsapp_messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "store_id" | "order_id" | "customer_phone" | "message" | "status" | "attempt_count" | "error_log" | "timestamp" | "meta_data", ExtArgs["result"]["whatsapp_messages"]>
  export type whatsapp_messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | whatsapp_messages$ordersArgs<ExtArgs>
    stores?: boolean | whatsapp_messages$storesArgs<ExtArgs>
  }
  export type whatsapp_messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | whatsapp_messages$ordersArgs<ExtArgs>
    stores?: boolean | whatsapp_messages$storesArgs<ExtArgs>
  }
  export type whatsapp_messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | whatsapp_messages$ordersArgs<ExtArgs>
    stores?: boolean | whatsapp_messages$storesArgs<ExtArgs>
  }

  export type $whatsapp_messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "whatsapp_messages"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs> | null
      stores: Prisma.$storesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      store_id: number | null
      order_id: number | null
      customer_phone: string | null
      message: string | null
      status: string | null
      attempt_count: number | null
      error_log: string | null
      timestamp: Date | null
      meta_data: Prisma.JsonValue | null
    }, ExtArgs["result"]["whatsapp_messages"]>
    composites: {}
  }

  type whatsapp_messagesGetPayload<S extends boolean | null | undefined | whatsapp_messagesDefaultArgs> = $Result.GetResult<Prisma.$whatsapp_messagesPayload, S>

  type whatsapp_messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<whatsapp_messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Whatsapp_messagesCountAggregateInputType | true
    }

  export interface whatsapp_messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['whatsapp_messages'], meta: { name: 'whatsapp_messages' } }
    /**
     * Find zero or one Whatsapp_messages that matches the filter.
     * @param {whatsapp_messagesFindUniqueArgs} args - Arguments to find a Whatsapp_messages
     * @example
     * // Get one Whatsapp_messages
     * const whatsapp_messages = await prisma.whatsapp_messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends whatsapp_messagesFindUniqueArgs>(args: SelectSubset<T, whatsapp_messagesFindUniqueArgs<ExtArgs>>): Prisma__whatsapp_messagesClient<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Whatsapp_messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {whatsapp_messagesFindUniqueOrThrowArgs} args - Arguments to find a Whatsapp_messages
     * @example
     * // Get one Whatsapp_messages
     * const whatsapp_messages = await prisma.whatsapp_messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends whatsapp_messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, whatsapp_messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__whatsapp_messagesClient<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whatsapp_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_messagesFindFirstArgs} args - Arguments to find a Whatsapp_messages
     * @example
     * // Get one Whatsapp_messages
     * const whatsapp_messages = await prisma.whatsapp_messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends whatsapp_messagesFindFirstArgs>(args?: SelectSubset<T, whatsapp_messagesFindFirstArgs<ExtArgs>>): Prisma__whatsapp_messagesClient<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whatsapp_messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_messagesFindFirstOrThrowArgs} args - Arguments to find a Whatsapp_messages
     * @example
     * // Get one Whatsapp_messages
     * const whatsapp_messages = await prisma.whatsapp_messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends whatsapp_messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, whatsapp_messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__whatsapp_messagesClient<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Whatsapp_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Whatsapp_messages
     * const whatsapp_messages = await prisma.whatsapp_messages.findMany()
     * 
     * // Get first 10 Whatsapp_messages
     * const whatsapp_messages = await prisma.whatsapp_messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsapp_messagesWithIdOnly = await prisma.whatsapp_messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends whatsapp_messagesFindManyArgs>(args?: SelectSubset<T, whatsapp_messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Whatsapp_messages.
     * @param {whatsapp_messagesCreateArgs} args - Arguments to create a Whatsapp_messages.
     * @example
     * // Create one Whatsapp_messages
     * const Whatsapp_messages = await prisma.whatsapp_messages.create({
     *   data: {
     *     // ... data to create a Whatsapp_messages
     *   }
     * })
     * 
     */
    create<T extends whatsapp_messagesCreateArgs>(args: SelectSubset<T, whatsapp_messagesCreateArgs<ExtArgs>>): Prisma__whatsapp_messagesClient<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Whatsapp_messages.
     * @param {whatsapp_messagesCreateManyArgs} args - Arguments to create many Whatsapp_messages.
     * @example
     * // Create many Whatsapp_messages
     * const whatsapp_messages = await prisma.whatsapp_messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends whatsapp_messagesCreateManyArgs>(args?: SelectSubset<T, whatsapp_messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Whatsapp_messages and returns the data saved in the database.
     * @param {whatsapp_messagesCreateManyAndReturnArgs} args - Arguments to create many Whatsapp_messages.
     * @example
     * // Create many Whatsapp_messages
     * const whatsapp_messages = await prisma.whatsapp_messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Whatsapp_messages and only return the `id`
     * const whatsapp_messagesWithIdOnly = await prisma.whatsapp_messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends whatsapp_messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, whatsapp_messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Whatsapp_messages.
     * @param {whatsapp_messagesDeleteArgs} args - Arguments to delete one Whatsapp_messages.
     * @example
     * // Delete one Whatsapp_messages
     * const Whatsapp_messages = await prisma.whatsapp_messages.delete({
     *   where: {
     *     // ... filter to delete one Whatsapp_messages
     *   }
     * })
     * 
     */
    delete<T extends whatsapp_messagesDeleteArgs>(args: SelectSubset<T, whatsapp_messagesDeleteArgs<ExtArgs>>): Prisma__whatsapp_messagesClient<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Whatsapp_messages.
     * @param {whatsapp_messagesUpdateArgs} args - Arguments to update one Whatsapp_messages.
     * @example
     * // Update one Whatsapp_messages
     * const whatsapp_messages = await prisma.whatsapp_messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends whatsapp_messagesUpdateArgs>(args: SelectSubset<T, whatsapp_messagesUpdateArgs<ExtArgs>>): Prisma__whatsapp_messagesClient<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Whatsapp_messages.
     * @param {whatsapp_messagesDeleteManyArgs} args - Arguments to filter Whatsapp_messages to delete.
     * @example
     * // Delete a few Whatsapp_messages
     * const { count } = await prisma.whatsapp_messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends whatsapp_messagesDeleteManyArgs>(args?: SelectSubset<T, whatsapp_messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whatsapp_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Whatsapp_messages
     * const whatsapp_messages = await prisma.whatsapp_messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends whatsapp_messagesUpdateManyArgs>(args: SelectSubset<T, whatsapp_messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whatsapp_messages and returns the data updated in the database.
     * @param {whatsapp_messagesUpdateManyAndReturnArgs} args - Arguments to update many Whatsapp_messages.
     * @example
     * // Update many Whatsapp_messages
     * const whatsapp_messages = await prisma.whatsapp_messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Whatsapp_messages and only return the `id`
     * const whatsapp_messagesWithIdOnly = await prisma.whatsapp_messages.updateManyAndReturn({
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
    updateManyAndReturn<T extends whatsapp_messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, whatsapp_messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Whatsapp_messages.
     * @param {whatsapp_messagesUpsertArgs} args - Arguments to update or create a Whatsapp_messages.
     * @example
     * // Update or create a Whatsapp_messages
     * const whatsapp_messages = await prisma.whatsapp_messages.upsert({
     *   create: {
     *     // ... data to create a Whatsapp_messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Whatsapp_messages we want to update
     *   }
     * })
     */
    upsert<T extends whatsapp_messagesUpsertArgs>(args: SelectSubset<T, whatsapp_messagesUpsertArgs<ExtArgs>>): Prisma__whatsapp_messagesClient<$Result.GetResult<Prisma.$whatsapp_messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Whatsapp_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_messagesCountArgs} args - Arguments to filter Whatsapp_messages to count.
     * @example
     * // Count the number of Whatsapp_messages
     * const count = await prisma.whatsapp_messages.count({
     *   where: {
     *     // ... the filter for the Whatsapp_messages we want to count
     *   }
     * })
    **/
    count<T extends whatsapp_messagesCountArgs>(
      args?: Subset<T, whatsapp_messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Whatsapp_messagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Whatsapp_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Whatsapp_messagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Whatsapp_messagesAggregateArgs>(args: Subset<T, Whatsapp_messagesAggregateArgs>): Prisma.PrismaPromise<GetWhatsapp_messagesAggregateType<T>>

    /**
     * Group by Whatsapp_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_messagesGroupByArgs} args - Group by arguments.
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
      T extends whatsapp_messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: whatsapp_messagesGroupByArgs['orderBy'] }
        : { orderBy?: whatsapp_messagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, whatsapp_messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsapp_messagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the whatsapp_messages model
   */
  readonly fields: whatsapp_messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for whatsapp_messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__whatsapp_messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends whatsapp_messages$ordersArgs<ExtArgs> = {}>(args?: Subset<T, whatsapp_messages$ordersArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stores<T extends whatsapp_messages$storesArgs<ExtArgs> = {}>(args?: Subset<T, whatsapp_messages$storesArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the whatsapp_messages model
   */
  interface whatsapp_messagesFieldRefs {
    readonly id: FieldRef<"whatsapp_messages", 'Int'>
    readonly store_id: FieldRef<"whatsapp_messages", 'Int'>
    readonly order_id: FieldRef<"whatsapp_messages", 'Int'>
    readonly customer_phone: FieldRef<"whatsapp_messages", 'String'>
    readonly message: FieldRef<"whatsapp_messages", 'String'>
    readonly status: FieldRef<"whatsapp_messages", 'String'>
    readonly attempt_count: FieldRef<"whatsapp_messages", 'Int'>
    readonly error_log: FieldRef<"whatsapp_messages", 'String'>
    readonly timestamp: FieldRef<"whatsapp_messages", 'DateTime'>
    readonly meta_data: FieldRef<"whatsapp_messages", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * whatsapp_messages findUnique
   */
  export type whatsapp_messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_messages to fetch.
     */
    where: whatsapp_messagesWhereUniqueInput
  }

  /**
   * whatsapp_messages findUniqueOrThrow
   */
  export type whatsapp_messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_messages to fetch.
     */
    where: whatsapp_messagesWhereUniqueInput
  }

  /**
   * whatsapp_messages findFirst
   */
  export type whatsapp_messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_messages to fetch.
     */
    where?: whatsapp_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_messages to fetch.
     */
    orderBy?: whatsapp_messagesOrderByWithRelationInput | whatsapp_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for whatsapp_messages.
     */
    cursor?: whatsapp_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of whatsapp_messages.
     */
    distinct?: Whatsapp_messagesScalarFieldEnum | Whatsapp_messagesScalarFieldEnum[]
  }

  /**
   * whatsapp_messages findFirstOrThrow
   */
  export type whatsapp_messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_messages to fetch.
     */
    where?: whatsapp_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_messages to fetch.
     */
    orderBy?: whatsapp_messagesOrderByWithRelationInput | whatsapp_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for whatsapp_messages.
     */
    cursor?: whatsapp_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of whatsapp_messages.
     */
    distinct?: Whatsapp_messagesScalarFieldEnum | Whatsapp_messagesScalarFieldEnum[]
  }

  /**
   * whatsapp_messages findMany
   */
  export type whatsapp_messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_messages to fetch.
     */
    where?: whatsapp_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_messages to fetch.
     */
    orderBy?: whatsapp_messagesOrderByWithRelationInput | whatsapp_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing whatsapp_messages.
     */
    cursor?: whatsapp_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_messages.
     */
    skip?: number
    distinct?: Whatsapp_messagesScalarFieldEnum | Whatsapp_messagesScalarFieldEnum[]
  }

  /**
   * whatsapp_messages create
   */
  export type whatsapp_messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a whatsapp_messages.
     */
    data?: XOR<whatsapp_messagesCreateInput, whatsapp_messagesUncheckedCreateInput>
  }

  /**
   * whatsapp_messages createMany
   */
  export type whatsapp_messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many whatsapp_messages.
     */
    data: whatsapp_messagesCreateManyInput | whatsapp_messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * whatsapp_messages createManyAndReturn
   */
  export type whatsapp_messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * The data used to create many whatsapp_messages.
     */
    data: whatsapp_messagesCreateManyInput | whatsapp_messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * whatsapp_messages update
   */
  export type whatsapp_messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a whatsapp_messages.
     */
    data: XOR<whatsapp_messagesUpdateInput, whatsapp_messagesUncheckedUpdateInput>
    /**
     * Choose, which whatsapp_messages to update.
     */
    where: whatsapp_messagesWhereUniqueInput
  }

  /**
   * whatsapp_messages updateMany
   */
  export type whatsapp_messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update whatsapp_messages.
     */
    data: XOR<whatsapp_messagesUpdateManyMutationInput, whatsapp_messagesUncheckedUpdateManyInput>
    /**
     * Filter which whatsapp_messages to update
     */
    where?: whatsapp_messagesWhereInput
    /**
     * Limit how many whatsapp_messages to update.
     */
    limit?: number
  }

  /**
   * whatsapp_messages updateManyAndReturn
   */
  export type whatsapp_messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * The data used to update whatsapp_messages.
     */
    data: XOR<whatsapp_messagesUpdateManyMutationInput, whatsapp_messagesUncheckedUpdateManyInput>
    /**
     * Filter which whatsapp_messages to update
     */
    where?: whatsapp_messagesWhereInput
    /**
     * Limit how many whatsapp_messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * whatsapp_messages upsert
   */
  export type whatsapp_messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the whatsapp_messages to update in case it exists.
     */
    where: whatsapp_messagesWhereUniqueInput
    /**
     * In case the whatsapp_messages found by the `where` argument doesn't exist, create a new whatsapp_messages with this data.
     */
    create: XOR<whatsapp_messagesCreateInput, whatsapp_messagesUncheckedCreateInput>
    /**
     * In case the whatsapp_messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<whatsapp_messagesUpdateInput, whatsapp_messagesUncheckedUpdateInput>
  }

  /**
   * whatsapp_messages delete
   */
  export type whatsapp_messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesInclude<ExtArgs> | null
    /**
     * Filter which whatsapp_messages to delete.
     */
    where: whatsapp_messagesWhereUniqueInput
  }

  /**
   * whatsapp_messages deleteMany
   */
  export type whatsapp_messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which whatsapp_messages to delete
     */
    where?: whatsapp_messagesWhereInput
    /**
     * Limit how many whatsapp_messages to delete.
     */
    limit?: number
  }

  /**
   * whatsapp_messages.orders
   */
  export type whatsapp_messages$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
  }

  /**
   * whatsapp_messages.stores
   */
  export type whatsapp_messages$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    where?: storesWhereInput
  }

  /**
   * whatsapp_messages without action
   */
  export type whatsapp_messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_messages
     */
    select?: whatsapp_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_messages
     */
    omit?: whatsapp_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_messagesInclude<ExtArgs> | null
  }


  /**
   * Model whatsapp_sessions
   */

  export type AggregateWhatsapp_sessions = {
    _count: Whatsapp_sessionsCountAggregateOutputType | null
    _avg: Whatsapp_sessionsAvgAggregateOutputType | null
    _sum: Whatsapp_sessionsSumAggregateOutputType | null
    _min: Whatsapp_sessionsMinAggregateOutputType | null
    _max: Whatsapp_sessionsMaxAggregateOutputType | null
  }

  export type Whatsapp_sessionsAvgAggregateOutputType = {
    id: number | null
    store_id: number | null
  }

  export type Whatsapp_sessionsSumAggregateOutputType = {
    id: number | null
    store_id: number | null
  }

  export type Whatsapp_sessionsMinAggregateOutputType = {
    id: number | null
    store_id: number | null
    client_id: string | null
    status: string | null
    session_path: string | null
    last_seen: Date | null
    created_at: Date | null
  }

  export type Whatsapp_sessionsMaxAggregateOutputType = {
    id: number | null
    store_id: number | null
    client_id: string | null
    status: string | null
    session_path: string | null
    last_seen: Date | null
    created_at: Date | null
  }

  export type Whatsapp_sessionsCountAggregateOutputType = {
    id: number
    store_id: number
    client_id: number
    status: number
    session_path: number
    last_seen: number
    created_at: number
    meta_data: number
    _all: number
  }


  export type Whatsapp_sessionsAvgAggregateInputType = {
    id?: true
    store_id?: true
  }

  export type Whatsapp_sessionsSumAggregateInputType = {
    id?: true
    store_id?: true
  }

  export type Whatsapp_sessionsMinAggregateInputType = {
    id?: true
    store_id?: true
    client_id?: true
    status?: true
    session_path?: true
    last_seen?: true
    created_at?: true
  }

  export type Whatsapp_sessionsMaxAggregateInputType = {
    id?: true
    store_id?: true
    client_id?: true
    status?: true
    session_path?: true
    last_seen?: true
    created_at?: true
  }

  export type Whatsapp_sessionsCountAggregateInputType = {
    id?: true
    store_id?: true
    client_id?: true
    status?: true
    session_path?: true
    last_seen?: true
    created_at?: true
    meta_data?: true
    _all?: true
  }

  export type Whatsapp_sessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which whatsapp_sessions to aggregate.
     */
    where?: whatsapp_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_sessions to fetch.
     */
    orderBy?: whatsapp_sessionsOrderByWithRelationInput | whatsapp_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: whatsapp_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned whatsapp_sessions
    **/
    _count?: true | Whatsapp_sessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Whatsapp_sessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Whatsapp_sessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Whatsapp_sessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Whatsapp_sessionsMaxAggregateInputType
  }

  export type GetWhatsapp_sessionsAggregateType<T extends Whatsapp_sessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsapp_sessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsapp_sessions[P]>
      : GetScalarType<T[P], AggregateWhatsapp_sessions[P]>
  }




  export type whatsapp_sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: whatsapp_sessionsWhereInput
    orderBy?: whatsapp_sessionsOrderByWithAggregationInput | whatsapp_sessionsOrderByWithAggregationInput[]
    by: Whatsapp_sessionsScalarFieldEnum[] | Whatsapp_sessionsScalarFieldEnum
    having?: whatsapp_sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Whatsapp_sessionsCountAggregateInputType | true
    _avg?: Whatsapp_sessionsAvgAggregateInputType
    _sum?: Whatsapp_sessionsSumAggregateInputType
    _min?: Whatsapp_sessionsMinAggregateInputType
    _max?: Whatsapp_sessionsMaxAggregateInputType
  }

  export type Whatsapp_sessionsGroupByOutputType = {
    id: number
    store_id: number | null
    client_id: string
    status: string | null
    session_path: string | null
    last_seen: Date | null
    created_at: Date | null
    meta_data: JsonValue | null
    _count: Whatsapp_sessionsCountAggregateOutputType | null
    _avg: Whatsapp_sessionsAvgAggregateOutputType | null
    _sum: Whatsapp_sessionsSumAggregateOutputType | null
    _min: Whatsapp_sessionsMinAggregateOutputType | null
    _max: Whatsapp_sessionsMaxAggregateOutputType | null
  }

  type GetWhatsapp_sessionsGroupByPayload<T extends whatsapp_sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Whatsapp_sessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Whatsapp_sessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Whatsapp_sessionsGroupByOutputType[P]>
            : GetScalarType<T[P], Whatsapp_sessionsGroupByOutputType[P]>
        }
      >
    >


  export type whatsapp_sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    client_id?: boolean
    status?: boolean
    session_path?: boolean
    last_seen?: boolean
    created_at?: boolean
    meta_data?: boolean
    stores?: boolean | whatsapp_sessions$storesArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp_sessions"]>

  export type whatsapp_sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    client_id?: boolean
    status?: boolean
    session_path?: boolean
    last_seen?: boolean
    created_at?: boolean
    meta_data?: boolean
    stores?: boolean | whatsapp_sessions$storesArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp_sessions"]>

  export type whatsapp_sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    store_id?: boolean
    client_id?: boolean
    status?: boolean
    session_path?: boolean
    last_seen?: boolean
    created_at?: boolean
    meta_data?: boolean
    stores?: boolean | whatsapp_sessions$storesArgs<ExtArgs>
  }, ExtArgs["result"]["whatsapp_sessions"]>

  export type whatsapp_sessionsSelectScalar = {
    id?: boolean
    store_id?: boolean
    client_id?: boolean
    status?: boolean
    session_path?: boolean
    last_seen?: boolean
    created_at?: boolean
    meta_data?: boolean
  }

  export type whatsapp_sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "store_id" | "client_id" | "status" | "session_path" | "last_seen" | "created_at" | "meta_data", ExtArgs["result"]["whatsapp_sessions"]>
  export type whatsapp_sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | whatsapp_sessions$storesArgs<ExtArgs>
  }
  export type whatsapp_sessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | whatsapp_sessions$storesArgs<ExtArgs>
  }
  export type whatsapp_sessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | whatsapp_sessions$storesArgs<ExtArgs>
  }

  export type $whatsapp_sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "whatsapp_sessions"
    objects: {
      stores: Prisma.$storesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      store_id: number | null
      client_id: string
      status: string | null
      session_path: string | null
      last_seen: Date | null
      created_at: Date | null
      meta_data: Prisma.JsonValue | null
    }, ExtArgs["result"]["whatsapp_sessions"]>
    composites: {}
  }

  type whatsapp_sessionsGetPayload<S extends boolean | null | undefined | whatsapp_sessionsDefaultArgs> = $Result.GetResult<Prisma.$whatsapp_sessionsPayload, S>

  type whatsapp_sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<whatsapp_sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Whatsapp_sessionsCountAggregateInputType | true
    }

  export interface whatsapp_sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['whatsapp_sessions'], meta: { name: 'whatsapp_sessions' } }
    /**
     * Find zero or one Whatsapp_sessions that matches the filter.
     * @param {whatsapp_sessionsFindUniqueArgs} args - Arguments to find a Whatsapp_sessions
     * @example
     * // Get one Whatsapp_sessions
     * const whatsapp_sessions = await prisma.whatsapp_sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends whatsapp_sessionsFindUniqueArgs>(args: SelectSubset<T, whatsapp_sessionsFindUniqueArgs<ExtArgs>>): Prisma__whatsapp_sessionsClient<$Result.GetResult<Prisma.$whatsapp_sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Whatsapp_sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {whatsapp_sessionsFindUniqueOrThrowArgs} args - Arguments to find a Whatsapp_sessions
     * @example
     * // Get one Whatsapp_sessions
     * const whatsapp_sessions = await prisma.whatsapp_sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends whatsapp_sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, whatsapp_sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__whatsapp_sessionsClient<$Result.GetResult<Prisma.$whatsapp_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whatsapp_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_sessionsFindFirstArgs} args - Arguments to find a Whatsapp_sessions
     * @example
     * // Get one Whatsapp_sessions
     * const whatsapp_sessions = await prisma.whatsapp_sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends whatsapp_sessionsFindFirstArgs>(args?: SelectSubset<T, whatsapp_sessionsFindFirstArgs<ExtArgs>>): Prisma__whatsapp_sessionsClient<$Result.GetResult<Prisma.$whatsapp_sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whatsapp_sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_sessionsFindFirstOrThrowArgs} args - Arguments to find a Whatsapp_sessions
     * @example
     * // Get one Whatsapp_sessions
     * const whatsapp_sessions = await prisma.whatsapp_sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends whatsapp_sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, whatsapp_sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__whatsapp_sessionsClient<$Result.GetResult<Prisma.$whatsapp_sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Whatsapp_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Whatsapp_sessions
     * const whatsapp_sessions = await prisma.whatsapp_sessions.findMany()
     * 
     * // Get first 10 Whatsapp_sessions
     * const whatsapp_sessions = await prisma.whatsapp_sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsapp_sessionsWithIdOnly = await prisma.whatsapp_sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends whatsapp_sessionsFindManyArgs>(args?: SelectSubset<T, whatsapp_sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Whatsapp_sessions.
     * @param {whatsapp_sessionsCreateArgs} args - Arguments to create a Whatsapp_sessions.
     * @example
     * // Create one Whatsapp_sessions
     * const Whatsapp_sessions = await prisma.whatsapp_sessions.create({
     *   data: {
     *     // ... data to create a Whatsapp_sessions
     *   }
     * })
     * 
     */
    create<T extends whatsapp_sessionsCreateArgs>(args: SelectSubset<T, whatsapp_sessionsCreateArgs<ExtArgs>>): Prisma__whatsapp_sessionsClient<$Result.GetResult<Prisma.$whatsapp_sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Whatsapp_sessions.
     * @param {whatsapp_sessionsCreateManyArgs} args - Arguments to create many Whatsapp_sessions.
     * @example
     * // Create many Whatsapp_sessions
     * const whatsapp_sessions = await prisma.whatsapp_sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends whatsapp_sessionsCreateManyArgs>(args?: SelectSubset<T, whatsapp_sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Whatsapp_sessions and returns the data saved in the database.
     * @param {whatsapp_sessionsCreateManyAndReturnArgs} args - Arguments to create many Whatsapp_sessions.
     * @example
     * // Create many Whatsapp_sessions
     * const whatsapp_sessions = await prisma.whatsapp_sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Whatsapp_sessions and only return the `id`
     * const whatsapp_sessionsWithIdOnly = await prisma.whatsapp_sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends whatsapp_sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, whatsapp_sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Whatsapp_sessions.
     * @param {whatsapp_sessionsDeleteArgs} args - Arguments to delete one Whatsapp_sessions.
     * @example
     * // Delete one Whatsapp_sessions
     * const Whatsapp_sessions = await prisma.whatsapp_sessions.delete({
     *   where: {
     *     // ... filter to delete one Whatsapp_sessions
     *   }
     * })
     * 
     */
    delete<T extends whatsapp_sessionsDeleteArgs>(args: SelectSubset<T, whatsapp_sessionsDeleteArgs<ExtArgs>>): Prisma__whatsapp_sessionsClient<$Result.GetResult<Prisma.$whatsapp_sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Whatsapp_sessions.
     * @param {whatsapp_sessionsUpdateArgs} args - Arguments to update one Whatsapp_sessions.
     * @example
     * // Update one Whatsapp_sessions
     * const whatsapp_sessions = await prisma.whatsapp_sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends whatsapp_sessionsUpdateArgs>(args: SelectSubset<T, whatsapp_sessionsUpdateArgs<ExtArgs>>): Prisma__whatsapp_sessionsClient<$Result.GetResult<Prisma.$whatsapp_sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Whatsapp_sessions.
     * @param {whatsapp_sessionsDeleteManyArgs} args - Arguments to filter Whatsapp_sessions to delete.
     * @example
     * // Delete a few Whatsapp_sessions
     * const { count } = await prisma.whatsapp_sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends whatsapp_sessionsDeleteManyArgs>(args?: SelectSubset<T, whatsapp_sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whatsapp_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Whatsapp_sessions
     * const whatsapp_sessions = await prisma.whatsapp_sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends whatsapp_sessionsUpdateManyArgs>(args: SelectSubset<T, whatsapp_sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whatsapp_sessions and returns the data updated in the database.
     * @param {whatsapp_sessionsUpdateManyAndReturnArgs} args - Arguments to update many Whatsapp_sessions.
     * @example
     * // Update many Whatsapp_sessions
     * const whatsapp_sessions = await prisma.whatsapp_sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Whatsapp_sessions and only return the `id`
     * const whatsapp_sessionsWithIdOnly = await prisma.whatsapp_sessions.updateManyAndReturn({
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
    updateManyAndReturn<T extends whatsapp_sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, whatsapp_sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$whatsapp_sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Whatsapp_sessions.
     * @param {whatsapp_sessionsUpsertArgs} args - Arguments to update or create a Whatsapp_sessions.
     * @example
     * // Update or create a Whatsapp_sessions
     * const whatsapp_sessions = await prisma.whatsapp_sessions.upsert({
     *   create: {
     *     // ... data to create a Whatsapp_sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Whatsapp_sessions we want to update
     *   }
     * })
     */
    upsert<T extends whatsapp_sessionsUpsertArgs>(args: SelectSubset<T, whatsapp_sessionsUpsertArgs<ExtArgs>>): Prisma__whatsapp_sessionsClient<$Result.GetResult<Prisma.$whatsapp_sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Whatsapp_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_sessionsCountArgs} args - Arguments to filter Whatsapp_sessions to count.
     * @example
     * // Count the number of Whatsapp_sessions
     * const count = await prisma.whatsapp_sessions.count({
     *   where: {
     *     // ... the filter for the Whatsapp_sessions we want to count
     *   }
     * })
    **/
    count<T extends whatsapp_sessionsCountArgs>(
      args?: Subset<T, whatsapp_sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Whatsapp_sessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Whatsapp_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Whatsapp_sessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Whatsapp_sessionsAggregateArgs>(args: Subset<T, Whatsapp_sessionsAggregateArgs>): Prisma.PrismaPromise<GetWhatsapp_sessionsAggregateType<T>>

    /**
     * Group by Whatsapp_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {whatsapp_sessionsGroupByArgs} args - Group by arguments.
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
      T extends whatsapp_sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: whatsapp_sessionsGroupByArgs['orderBy'] }
        : { orderBy?: whatsapp_sessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, whatsapp_sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsapp_sessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the whatsapp_sessions model
   */
  readonly fields: whatsapp_sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for whatsapp_sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__whatsapp_sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stores<T extends whatsapp_sessions$storesArgs<ExtArgs> = {}>(args?: Subset<T, whatsapp_sessions$storesArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the whatsapp_sessions model
   */
  interface whatsapp_sessionsFieldRefs {
    readonly id: FieldRef<"whatsapp_sessions", 'Int'>
    readonly store_id: FieldRef<"whatsapp_sessions", 'Int'>
    readonly client_id: FieldRef<"whatsapp_sessions", 'String'>
    readonly status: FieldRef<"whatsapp_sessions", 'String'>
    readonly session_path: FieldRef<"whatsapp_sessions", 'String'>
    readonly last_seen: FieldRef<"whatsapp_sessions", 'DateTime'>
    readonly created_at: FieldRef<"whatsapp_sessions", 'DateTime'>
    readonly meta_data: FieldRef<"whatsapp_sessions", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * whatsapp_sessions findUnique
   */
  export type whatsapp_sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_sessions to fetch.
     */
    where: whatsapp_sessionsWhereUniqueInput
  }

  /**
   * whatsapp_sessions findUniqueOrThrow
   */
  export type whatsapp_sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_sessions to fetch.
     */
    where: whatsapp_sessionsWhereUniqueInput
  }

  /**
   * whatsapp_sessions findFirst
   */
  export type whatsapp_sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_sessions to fetch.
     */
    where?: whatsapp_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_sessions to fetch.
     */
    orderBy?: whatsapp_sessionsOrderByWithRelationInput | whatsapp_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for whatsapp_sessions.
     */
    cursor?: whatsapp_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of whatsapp_sessions.
     */
    distinct?: Whatsapp_sessionsScalarFieldEnum | Whatsapp_sessionsScalarFieldEnum[]
  }

  /**
   * whatsapp_sessions findFirstOrThrow
   */
  export type whatsapp_sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_sessions to fetch.
     */
    where?: whatsapp_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_sessions to fetch.
     */
    orderBy?: whatsapp_sessionsOrderByWithRelationInput | whatsapp_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for whatsapp_sessions.
     */
    cursor?: whatsapp_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of whatsapp_sessions.
     */
    distinct?: Whatsapp_sessionsScalarFieldEnum | Whatsapp_sessionsScalarFieldEnum[]
  }

  /**
   * whatsapp_sessions findMany
   */
  export type whatsapp_sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which whatsapp_sessions to fetch.
     */
    where?: whatsapp_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of whatsapp_sessions to fetch.
     */
    orderBy?: whatsapp_sessionsOrderByWithRelationInput | whatsapp_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing whatsapp_sessions.
     */
    cursor?: whatsapp_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` whatsapp_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` whatsapp_sessions.
     */
    skip?: number
    distinct?: Whatsapp_sessionsScalarFieldEnum | Whatsapp_sessionsScalarFieldEnum[]
  }

  /**
   * whatsapp_sessions create
   */
  export type whatsapp_sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a whatsapp_sessions.
     */
    data: XOR<whatsapp_sessionsCreateInput, whatsapp_sessionsUncheckedCreateInput>
  }

  /**
   * whatsapp_sessions createMany
   */
  export type whatsapp_sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many whatsapp_sessions.
     */
    data: whatsapp_sessionsCreateManyInput | whatsapp_sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * whatsapp_sessions createManyAndReturn
   */
  export type whatsapp_sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many whatsapp_sessions.
     */
    data: whatsapp_sessionsCreateManyInput | whatsapp_sessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * whatsapp_sessions update
   */
  export type whatsapp_sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a whatsapp_sessions.
     */
    data: XOR<whatsapp_sessionsUpdateInput, whatsapp_sessionsUncheckedUpdateInput>
    /**
     * Choose, which whatsapp_sessions to update.
     */
    where: whatsapp_sessionsWhereUniqueInput
  }

  /**
   * whatsapp_sessions updateMany
   */
  export type whatsapp_sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update whatsapp_sessions.
     */
    data: XOR<whatsapp_sessionsUpdateManyMutationInput, whatsapp_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which whatsapp_sessions to update
     */
    where?: whatsapp_sessionsWhereInput
    /**
     * Limit how many whatsapp_sessions to update.
     */
    limit?: number
  }

  /**
   * whatsapp_sessions updateManyAndReturn
   */
  export type whatsapp_sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * The data used to update whatsapp_sessions.
     */
    data: XOR<whatsapp_sessionsUpdateManyMutationInput, whatsapp_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which whatsapp_sessions to update
     */
    where?: whatsapp_sessionsWhereInput
    /**
     * Limit how many whatsapp_sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * whatsapp_sessions upsert
   */
  export type whatsapp_sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the whatsapp_sessions to update in case it exists.
     */
    where: whatsapp_sessionsWhereUniqueInput
    /**
     * In case the whatsapp_sessions found by the `where` argument doesn't exist, create a new whatsapp_sessions with this data.
     */
    create: XOR<whatsapp_sessionsCreateInput, whatsapp_sessionsUncheckedCreateInput>
    /**
     * In case the whatsapp_sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<whatsapp_sessionsUpdateInput, whatsapp_sessionsUncheckedUpdateInput>
  }

  /**
   * whatsapp_sessions delete
   */
  export type whatsapp_sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsInclude<ExtArgs> | null
    /**
     * Filter which whatsapp_sessions to delete.
     */
    where: whatsapp_sessionsWhereUniqueInput
  }

  /**
   * whatsapp_sessions deleteMany
   */
  export type whatsapp_sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which whatsapp_sessions to delete
     */
    where?: whatsapp_sessionsWhereInput
    /**
     * Limit how many whatsapp_sessions to delete.
     */
    limit?: number
  }

  /**
   * whatsapp_sessions.stores
   */
  export type whatsapp_sessions$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    where?: storesWhereInput
  }

  /**
   * whatsapp_sessions without action
   */
  export type whatsapp_sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the whatsapp_sessions
     */
    select?: whatsapp_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the whatsapp_sessions
     */
    omit?: whatsapp_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: whatsapp_sessionsInclude<ExtArgs> | null
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


  export const SessionScalarFieldEnum: {
    id: 'id',
    shop: 'shop',
    state: 'state',
    isOnline: 'isOnline',
    scope: 'scope',
    expires: 'expires',
    accessToken: 'accessToken',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    accountOwner: 'accountOwner',
    locale: 'locale',
    collaborator: 'collaborator',
    emailVerified: 'emailVerified'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const FulfillmentsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    tracking_number: 'tracking_number',
    courier_name: 'courier_name',
    courier_code: 'courier_code',
    status: 'status',
    delivered_at: 'delivered_at',
    estimated_delivery: 'estimated_delivery',
    last_checked_at: 'last_checked_at',
    created_at: 'created_at',
    meta_data: 'meta_data'
  };

  export type FulfillmentsScalarFieldEnum = (typeof FulfillmentsScalarFieldEnum)[keyof typeof FulfillmentsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    shop_id: 'shop_id',
    shopify_order_id: 'shopify_order_id',
    order_number: 'order_number',
    customer_name: 'customer_name',
    customer_phone: 'customer_phone',
    status: 'status',
    placed_at: 'placed_at',
    created_at: 'created_at',
    meta_data: 'meta_data'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const StoresScalarFieldEnum: {
    id: 'id',
    shopify_domain: 'shopify_domain',
    store_name: 'store_name',
    email: 'email',
    whatsapp_enabled: 'whatsapp_enabled',
    qr_connected: 'qr_connected',
    session_path: 'session_path',
    created_at: 'created_at',
    meta_data: 'meta_data'
  };

  export type StoresScalarFieldEnum = (typeof StoresScalarFieldEnum)[keyof typeof StoresScalarFieldEnum]


  export const Tracking_eventsScalarFieldEnum: {
    id: 'id',
    fulfillment_id: 'fulfillment_id',
    status: 'status',
    status_code: 'status_code',
    location: 'location',
    timestamp: 'timestamp',
    meta_data: 'meta_data'
  };

  export type Tracking_eventsScalarFieldEnum = (typeof Tracking_eventsScalarFieldEnum)[keyof typeof Tracking_eventsScalarFieldEnum]


  export const Webhook_eventsScalarFieldEnum: {
    id: 'id',
    store_id: 'store_id',
    event_type: 'event_type',
    order_id: 'order_id',
    tracking_number: 'tracking_number',
    tracking_url: 'tracking_url',
    payload: 'payload',
    timestamp: 'timestamp',
    status: 'status',
    meta_data: 'meta_data'
  };

  export type Webhook_eventsScalarFieldEnum = (typeof Webhook_eventsScalarFieldEnum)[keyof typeof Webhook_eventsScalarFieldEnum]


  export const Whatsapp_messagesScalarFieldEnum: {
    id: 'id',
    store_id: 'store_id',
    order_id: 'order_id',
    customer_phone: 'customer_phone',
    message: 'message',
    status: 'status',
    attempt_count: 'attempt_count',
    error_log: 'error_log',
    timestamp: 'timestamp',
    meta_data: 'meta_data'
  };

  export type Whatsapp_messagesScalarFieldEnum = (typeof Whatsapp_messagesScalarFieldEnum)[keyof typeof Whatsapp_messagesScalarFieldEnum]


  export const Whatsapp_sessionsScalarFieldEnum: {
    id: 'id',
    store_id: 'store_id',
    client_id: 'client_id',
    status: 'status',
    session_path: 'session_path',
    last_seen: 'last_seen',
    created_at: 'created_at',
    meta_data: 'meta_data'
  };

  export type Whatsapp_sessionsScalarFieldEnum = (typeof Whatsapp_sessionsScalarFieldEnum)[keyof typeof Whatsapp_sessionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    shop?: StringFilter<"Session"> | string
    state?: StringFilter<"Session"> | string
    isOnline?: BoolFilter<"Session"> | boolean
    scope?: StringNullableFilter<"Session"> | string | null
    expires?: DateTimeNullableFilter<"Session"> | Date | string | null
    accessToken?: StringFilter<"Session"> | string
    userId?: BigIntNullableFilter<"Session"> | bigint | number | null
    firstName?: StringNullableFilter<"Session"> | string | null
    lastName?: StringNullableFilter<"Session"> | string | null
    email?: StringNullableFilter<"Session"> | string | null
    accountOwner?: BoolFilter<"Session"> | boolean
    locale?: StringNullableFilter<"Session"> | string | null
    collaborator?: BoolNullableFilter<"Session"> | boolean | null
    emailVerified?: BoolNullableFilter<"Session"> | boolean | null
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrderInput | SortOrder
    expires?: SortOrderInput | SortOrder
    accessToken?: SortOrder
    userId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    accountOwner?: SortOrder
    locale?: SortOrderInput | SortOrder
    collaborator?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    shop?: StringFilter<"Session"> | string
    state?: StringFilter<"Session"> | string
    isOnline?: BoolFilter<"Session"> | boolean
    scope?: StringNullableFilter<"Session"> | string | null
    expires?: DateTimeNullableFilter<"Session"> | Date | string | null
    accessToken?: StringFilter<"Session"> | string
    userId?: BigIntNullableFilter<"Session"> | bigint | number | null
    firstName?: StringNullableFilter<"Session"> | string | null
    lastName?: StringNullableFilter<"Session"> | string | null
    email?: StringNullableFilter<"Session"> | string | null
    accountOwner?: BoolFilter<"Session"> | boolean
    locale?: StringNullableFilter<"Session"> | string | null
    collaborator?: BoolNullableFilter<"Session"> | boolean | null
    emailVerified?: BoolNullableFilter<"Session"> | boolean | null
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrderInput | SortOrder
    expires?: SortOrderInput | SortOrder
    accessToken?: SortOrder
    userId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    accountOwner?: SortOrder
    locale?: SortOrderInput | SortOrder
    collaborator?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    shop?: StringWithAggregatesFilter<"Session"> | string
    state?: StringWithAggregatesFilter<"Session"> | string
    isOnline?: BoolWithAggregatesFilter<"Session"> | boolean
    scope?: StringNullableWithAggregatesFilter<"Session"> | string | null
    expires?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    accessToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: BigIntNullableWithAggregatesFilter<"Session"> | bigint | number | null
    firstName?: StringNullableWithAggregatesFilter<"Session"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Session"> | string | null
    email?: StringNullableWithAggregatesFilter<"Session"> | string | null
    accountOwner?: BoolWithAggregatesFilter<"Session"> | boolean
    locale?: StringNullableWithAggregatesFilter<"Session"> | string | null
    collaborator?: BoolNullableWithAggregatesFilter<"Session"> | boolean | null
    emailVerified?: BoolNullableWithAggregatesFilter<"Session"> | boolean | null
  }

  export type fulfillmentsWhereInput = {
    AND?: fulfillmentsWhereInput | fulfillmentsWhereInput[]
    OR?: fulfillmentsWhereInput[]
    NOT?: fulfillmentsWhereInput | fulfillmentsWhereInput[]
    id?: IntFilter<"fulfillments"> | number
    order_id?: IntNullableFilter<"fulfillments"> | number | null
    tracking_number?: StringNullableFilter<"fulfillments"> | string | null
    courier_name?: StringNullableFilter<"fulfillments"> | string | null
    courier_code?: StringNullableFilter<"fulfillments"> | string | null
    status?: StringNullableFilter<"fulfillments"> | string | null
    delivered_at?: DateTimeNullableFilter<"fulfillments"> | Date | string | null
    estimated_delivery?: DateTimeNullableFilter<"fulfillments"> | Date | string | null
    last_checked_at?: DateTimeNullableFilter<"fulfillments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"fulfillments"> | Date | string | null
    meta_data?: JsonNullableFilter<"fulfillments">
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    tracking_events?: Tracking_eventsListRelationFilter
  }

  export type fulfillmentsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    tracking_number?: SortOrderInput | SortOrder
    courier_name?: SortOrderInput | SortOrder
    courier_code?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    delivered_at?: SortOrderInput | SortOrder
    estimated_delivery?: SortOrderInput | SortOrder
    last_checked_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    orders?: ordersOrderByWithRelationInput
    tracking_events?: tracking_eventsOrderByRelationAggregateInput
  }

  export type fulfillmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: fulfillmentsWhereInput | fulfillmentsWhereInput[]
    OR?: fulfillmentsWhereInput[]
    NOT?: fulfillmentsWhereInput | fulfillmentsWhereInput[]
    order_id?: IntNullableFilter<"fulfillments"> | number | null
    tracking_number?: StringNullableFilter<"fulfillments"> | string | null
    courier_name?: StringNullableFilter<"fulfillments"> | string | null
    courier_code?: StringNullableFilter<"fulfillments"> | string | null
    status?: StringNullableFilter<"fulfillments"> | string | null
    delivered_at?: DateTimeNullableFilter<"fulfillments"> | Date | string | null
    estimated_delivery?: DateTimeNullableFilter<"fulfillments"> | Date | string | null
    last_checked_at?: DateTimeNullableFilter<"fulfillments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"fulfillments"> | Date | string | null
    meta_data?: JsonNullableFilter<"fulfillments">
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    tracking_events?: Tracking_eventsListRelationFilter
  }, "id">

  export type fulfillmentsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    tracking_number?: SortOrderInput | SortOrder
    courier_name?: SortOrderInput | SortOrder
    courier_code?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    delivered_at?: SortOrderInput | SortOrder
    estimated_delivery?: SortOrderInput | SortOrder
    last_checked_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    _count?: fulfillmentsCountOrderByAggregateInput
    _avg?: fulfillmentsAvgOrderByAggregateInput
    _max?: fulfillmentsMaxOrderByAggregateInput
    _min?: fulfillmentsMinOrderByAggregateInput
    _sum?: fulfillmentsSumOrderByAggregateInput
  }

  export type fulfillmentsScalarWhereWithAggregatesInput = {
    AND?: fulfillmentsScalarWhereWithAggregatesInput | fulfillmentsScalarWhereWithAggregatesInput[]
    OR?: fulfillmentsScalarWhereWithAggregatesInput[]
    NOT?: fulfillmentsScalarWhereWithAggregatesInput | fulfillmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"fulfillments"> | number
    order_id?: IntNullableWithAggregatesFilter<"fulfillments"> | number | null
    tracking_number?: StringNullableWithAggregatesFilter<"fulfillments"> | string | null
    courier_name?: StringNullableWithAggregatesFilter<"fulfillments"> | string | null
    courier_code?: StringNullableWithAggregatesFilter<"fulfillments"> | string | null
    status?: StringNullableWithAggregatesFilter<"fulfillments"> | string | null
    delivered_at?: DateTimeNullableWithAggregatesFilter<"fulfillments"> | Date | string | null
    estimated_delivery?: DateTimeNullableWithAggregatesFilter<"fulfillments"> | Date | string | null
    last_checked_at?: DateTimeNullableWithAggregatesFilter<"fulfillments"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"fulfillments"> | Date | string | null
    meta_data?: JsonNullableWithAggregatesFilter<"fulfillments">
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    shop_id?: IntNullableFilter<"orders"> | number | null
    shopify_order_id?: BigIntFilter<"orders"> | bigint | number
    order_number?: StringNullableFilter<"orders"> | string | null
    customer_name?: StringNullableFilter<"orders"> | string | null
    customer_phone?: StringNullableFilter<"orders"> | string | null
    status?: StringNullableFilter<"orders"> | string | null
    placed_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    meta_data?: JsonNullableFilter<"orders">
    fulfillments?: FulfillmentsListRelationFilter
    stores?: XOR<StoresNullableScalarRelationFilter, storesWhereInput> | null
    whatsapp_messages?: Whatsapp_messagesListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    shop_id?: SortOrderInput | SortOrder
    shopify_order_id?: SortOrder
    order_number?: SortOrderInput | SortOrder
    customer_name?: SortOrderInput | SortOrder
    customer_phone?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    placed_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    fulfillments?: fulfillmentsOrderByRelationAggregateInput
    stores?: storesOrderByWithRelationInput
    whatsapp_messages?: whatsapp_messagesOrderByRelationAggregateInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    shop_id?: IntNullableFilter<"orders"> | number | null
    shopify_order_id?: BigIntFilter<"orders"> | bigint | number
    order_number?: StringNullableFilter<"orders"> | string | null
    customer_name?: StringNullableFilter<"orders"> | string | null
    customer_phone?: StringNullableFilter<"orders"> | string | null
    status?: StringNullableFilter<"orders"> | string | null
    placed_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    meta_data?: JsonNullableFilter<"orders">
    fulfillments?: FulfillmentsListRelationFilter
    stores?: XOR<StoresNullableScalarRelationFilter, storesWhereInput> | null
    whatsapp_messages?: Whatsapp_messagesListRelationFilter
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    shop_id?: SortOrderInput | SortOrder
    shopify_order_id?: SortOrder
    order_number?: SortOrderInput | SortOrder
    customer_name?: SortOrderInput | SortOrder
    customer_phone?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    placed_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    shop_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    shopify_order_id?: BigIntWithAggregatesFilter<"orders"> | bigint | number
    order_number?: StringNullableWithAggregatesFilter<"orders"> | string | null
    customer_name?: StringNullableWithAggregatesFilter<"orders"> | string | null
    customer_phone?: StringNullableWithAggregatesFilter<"orders"> | string | null
    status?: StringNullableWithAggregatesFilter<"orders"> | string | null
    placed_at?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
    meta_data?: JsonNullableWithAggregatesFilter<"orders">
  }

  export type storesWhereInput = {
    AND?: storesWhereInput | storesWhereInput[]
    OR?: storesWhereInput[]
    NOT?: storesWhereInput | storesWhereInput[]
    id?: IntFilter<"stores"> | number
    shopify_domain?: StringFilter<"stores"> | string
    store_name?: StringNullableFilter<"stores"> | string | null
    email?: StringNullableFilter<"stores"> | string | null
    whatsapp_enabled?: BoolNullableFilter<"stores"> | boolean | null
    qr_connected?: BoolNullableFilter<"stores"> | boolean | null
    session_path?: StringNullableFilter<"stores"> | string | null
    created_at?: DateTimeNullableFilter<"stores"> | Date | string | null
    meta_data?: JsonNullableFilter<"stores">
    orders?: OrdersListRelationFilter
    webhook_events?: Webhook_eventsListRelationFilter
    whatsapp_messages?: Whatsapp_messagesListRelationFilter
    whatsapp_sessions?: Whatsapp_sessionsListRelationFilter
  }

  export type storesOrderByWithRelationInput = {
    id?: SortOrder
    shopify_domain?: SortOrder
    store_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    whatsapp_enabled?: SortOrderInput | SortOrder
    qr_connected?: SortOrderInput | SortOrder
    session_path?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
    webhook_events?: webhook_eventsOrderByRelationAggregateInput
    whatsapp_messages?: whatsapp_messagesOrderByRelationAggregateInput
    whatsapp_sessions?: whatsapp_sessionsOrderByRelationAggregateInput
  }

  export type storesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    shopify_domain?: string
    AND?: storesWhereInput | storesWhereInput[]
    OR?: storesWhereInput[]
    NOT?: storesWhereInput | storesWhereInput[]
    store_name?: StringNullableFilter<"stores"> | string | null
    email?: StringNullableFilter<"stores"> | string | null
    whatsapp_enabled?: BoolNullableFilter<"stores"> | boolean | null
    qr_connected?: BoolNullableFilter<"stores"> | boolean | null
    session_path?: StringNullableFilter<"stores"> | string | null
    created_at?: DateTimeNullableFilter<"stores"> | Date | string | null
    meta_data?: JsonNullableFilter<"stores">
    orders?: OrdersListRelationFilter
    webhook_events?: Webhook_eventsListRelationFilter
    whatsapp_messages?: Whatsapp_messagesListRelationFilter
    whatsapp_sessions?: Whatsapp_sessionsListRelationFilter
  }, "id" | "shopify_domain">

  export type storesOrderByWithAggregationInput = {
    id?: SortOrder
    shopify_domain?: SortOrder
    store_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    whatsapp_enabled?: SortOrderInput | SortOrder
    qr_connected?: SortOrderInput | SortOrder
    session_path?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    _count?: storesCountOrderByAggregateInput
    _avg?: storesAvgOrderByAggregateInput
    _max?: storesMaxOrderByAggregateInput
    _min?: storesMinOrderByAggregateInput
    _sum?: storesSumOrderByAggregateInput
  }

  export type storesScalarWhereWithAggregatesInput = {
    AND?: storesScalarWhereWithAggregatesInput | storesScalarWhereWithAggregatesInput[]
    OR?: storesScalarWhereWithAggregatesInput[]
    NOT?: storesScalarWhereWithAggregatesInput | storesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stores"> | number
    shopify_domain?: StringWithAggregatesFilter<"stores"> | string
    store_name?: StringNullableWithAggregatesFilter<"stores"> | string | null
    email?: StringNullableWithAggregatesFilter<"stores"> | string | null
    whatsapp_enabled?: BoolNullableWithAggregatesFilter<"stores"> | boolean | null
    qr_connected?: BoolNullableWithAggregatesFilter<"stores"> | boolean | null
    session_path?: StringNullableWithAggregatesFilter<"stores"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"stores"> | Date | string | null
    meta_data?: JsonNullableWithAggregatesFilter<"stores">
  }

  export type tracking_eventsWhereInput = {
    AND?: tracking_eventsWhereInput | tracking_eventsWhereInput[]
    OR?: tracking_eventsWhereInput[]
    NOT?: tracking_eventsWhereInput | tracking_eventsWhereInput[]
    id?: IntFilter<"tracking_events"> | number
    fulfillment_id?: IntNullableFilter<"tracking_events"> | number | null
    status?: StringNullableFilter<"tracking_events"> | string | null
    status_code?: StringNullableFilter<"tracking_events"> | string | null
    location?: StringNullableFilter<"tracking_events"> | string | null
    timestamp?: DateTimeNullableFilter<"tracking_events"> | Date | string | null
    meta_data?: JsonNullableFilter<"tracking_events">
    fulfillments?: XOR<FulfillmentsNullableScalarRelationFilter, fulfillmentsWhereInput> | null
  }

  export type tracking_eventsOrderByWithRelationInput = {
    id?: SortOrder
    fulfillment_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    status_code?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    fulfillments?: fulfillmentsOrderByWithRelationInput
  }

  export type tracking_eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tracking_eventsWhereInput | tracking_eventsWhereInput[]
    OR?: tracking_eventsWhereInput[]
    NOT?: tracking_eventsWhereInput | tracking_eventsWhereInput[]
    fulfillment_id?: IntNullableFilter<"tracking_events"> | number | null
    status?: StringNullableFilter<"tracking_events"> | string | null
    status_code?: StringNullableFilter<"tracking_events"> | string | null
    location?: StringNullableFilter<"tracking_events"> | string | null
    timestamp?: DateTimeNullableFilter<"tracking_events"> | Date | string | null
    meta_data?: JsonNullableFilter<"tracking_events">
    fulfillments?: XOR<FulfillmentsNullableScalarRelationFilter, fulfillmentsWhereInput> | null
  }, "id">

  export type tracking_eventsOrderByWithAggregationInput = {
    id?: SortOrder
    fulfillment_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    status_code?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    _count?: tracking_eventsCountOrderByAggregateInput
    _avg?: tracking_eventsAvgOrderByAggregateInput
    _max?: tracking_eventsMaxOrderByAggregateInput
    _min?: tracking_eventsMinOrderByAggregateInput
    _sum?: tracking_eventsSumOrderByAggregateInput
  }

  export type tracking_eventsScalarWhereWithAggregatesInput = {
    AND?: tracking_eventsScalarWhereWithAggregatesInput | tracking_eventsScalarWhereWithAggregatesInput[]
    OR?: tracking_eventsScalarWhereWithAggregatesInput[]
    NOT?: tracking_eventsScalarWhereWithAggregatesInput | tracking_eventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tracking_events"> | number
    fulfillment_id?: IntNullableWithAggregatesFilter<"tracking_events"> | number | null
    status?: StringNullableWithAggregatesFilter<"tracking_events"> | string | null
    status_code?: StringNullableWithAggregatesFilter<"tracking_events"> | string | null
    location?: StringNullableWithAggregatesFilter<"tracking_events"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"tracking_events"> | Date | string | null
    meta_data?: JsonNullableWithAggregatesFilter<"tracking_events">
  }

  export type webhook_eventsWhereInput = {
    AND?: webhook_eventsWhereInput | webhook_eventsWhereInput[]
    OR?: webhook_eventsWhereInput[]
    NOT?: webhook_eventsWhereInput | webhook_eventsWhereInput[]
    id?: IntFilter<"webhook_events"> | number
    store_id?: IntNullableFilter<"webhook_events"> | number | null
    event_type?: StringNullableFilter<"webhook_events"> | string | null
    order_id?: StringNullableFilter<"webhook_events"> | string | null
    tracking_number?: StringNullableFilter<"webhook_events"> | string | null
    tracking_url?: StringNullableFilter<"webhook_events"> | string | null
    payload?: JsonNullableFilter<"webhook_events">
    timestamp?: DateTimeNullableFilter<"webhook_events"> | Date | string | null
    status?: StringNullableFilter<"webhook_events"> | string | null
    meta_data?: JsonNullableFilter<"webhook_events">
    stores?: XOR<StoresNullableScalarRelationFilter, storesWhereInput> | null
  }

  export type webhook_eventsOrderByWithRelationInput = {
    id?: SortOrder
    store_id?: SortOrderInput | SortOrder
    event_type?: SortOrderInput | SortOrder
    order_id?: SortOrderInput | SortOrder
    tracking_number?: SortOrderInput | SortOrder
    tracking_url?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    stores?: storesOrderByWithRelationInput
  }

  export type webhook_eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: webhook_eventsWhereInput | webhook_eventsWhereInput[]
    OR?: webhook_eventsWhereInput[]
    NOT?: webhook_eventsWhereInput | webhook_eventsWhereInput[]
    store_id?: IntNullableFilter<"webhook_events"> | number | null
    event_type?: StringNullableFilter<"webhook_events"> | string | null
    order_id?: StringNullableFilter<"webhook_events"> | string | null
    tracking_number?: StringNullableFilter<"webhook_events"> | string | null
    tracking_url?: StringNullableFilter<"webhook_events"> | string | null
    payload?: JsonNullableFilter<"webhook_events">
    timestamp?: DateTimeNullableFilter<"webhook_events"> | Date | string | null
    status?: StringNullableFilter<"webhook_events"> | string | null
    meta_data?: JsonNullableFilter<"webhook_events">
    stores?: XOR<StoresNullableScalarRelationFilter, storesWhereInput> | null
  }, "id">

  export type webhook_eventsOrderByWithAggregationInput = {
    id?: SortOrder
    store_id?: SortOrderInput | SortOrder
    event_type?: SortOrderInput | SortOrder
    order_id?: SortOrderInput | SortOrder
    tracking_number?: SortOrderInput | SortOrder
    tracking_url?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    _count?: webhook_eventsCountOrderByAggregateInput
    _avg?: webhook_eventsAvgOrderByAggregateInput
    _max?: webhook_eventsMaxOrderByAggregateInput
    _min?: webhook_eventsMinOrderByAggregateInput
    _sum?: webhook_eventsSumOrderByAggregateInput
  }

  export type webhook_eventsScalarWhereWithAggregatesInput = {
    AND?: webhook_eventsScalarWhereWithAggregatesInput | webhook_eventsScalarWhereWithAggregatesInput[]
    OR?: webhook_eventsScalarWhereWithAggregatesInput[]
    NOT?: webhook_eventsScalarWhereWithAggregatesInput | webhook_eventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"webhook_events"> | number
    store_id?: IntNullableWithAggregatesFilter<"webhook_events"> | number | null
    event_type?: StringNullableWithAggregatesFilter<"webhook_events"> | string | null
    order_id?: StringNullableWithAggregatesFilter<"webhook_events"> | string | null
    tracking_number?: StringNullableWithAggregatesFilter<"webhook_events"> | string | null
    tracking_url?: StringNullableWithAggregatesFilter<"webhook_events"> | string | null
    payload?: JsonNullableWithAggregatesFilter<"webhook_events">
    timestamp?: DateTimeNullableWithAggregatesFilter<"webhook_events"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"webhook_events"> | string | null
    meta_data?: JsonNullableWithAggregatesFilter<"webhook_events">
  }

  export type whatsapp_messagesWhereInput = {
    AND?: whatsapp_messagesWhereInput | whatsapp_messagesWhereInput[]
    OR?: whatsapp_messagesWhereInput[]
    NOT?: whatsapp_messagesWhereInput | whatsapp_messagesWhereInput[]
    id?: IntFilter<"whatsapp_messages"> | number
    store_id?: IntNullableFilter<"whatsapp_messages"> | number | null
    order_id?: IntNullableFilter<"whatsapp_messages"> | number | null
    customer_phone?: StringNullableFilter<"whatsapp_messages"> | string | null
    message?: StringNullableFilter<"whatsapp_messages"> | string | null
    status?: StringNullableFilter<"whatsapp_messages"> | string | null
    attempt_count?: IntNullableFilter<"whatsapp_messages"> | number | null
    error_log?: StringNullableFilter<"whatsapp_messages"> | string | null
    timestamp?: DateTimeNullableFilter<"whatsapp_messages"> | Date | string | null
    meta_data?: JsonNullableFilter<"whatsapp_messages">
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    stores?: XOR<StoresNullableScalarRelationFilter, storesWhereInput> | null
  }

  export type whatsapp_messagesOrderByWithRelationInput = {
    id?: SortOrder
    store_id?: SortOrderInput | SortOrder
    order_id?: SortOrderInput | SortOrder
    customer_phone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    attempt_count?: SortOrderInput | SortOrder
    error_log?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    orders?: ordersOrderByWithRelationInput
    stores?: storesOrderByWithRelationInput
  }

  export type whatsapp_messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: whatsapp_messagesWhereInput | whatsapp_messagesWhereInput[]
    OR?: whatsapp_messagesWhereInput[]
    NOT?: whatsapp_messagesWhereInput | whatsapp_messagesWhereInput[]
    store_id?: IntNullableFilter<"whatsapp_messages"> | number | null
    order_id?: IntNullableFilter<"whatsapp_messages"> | number | null
    customer_phone?: StringNullableFilter<"whatsapp_messages"> | string | null
    message?: StringNullableFilter<"whatsapp_messages"> | string | null
    status?: StringNullableFilter<"whatsapp_messages"> | string | null
    attempt_count?: IntNullableFilter<"whatsapp_messages"> | number | null
    error_log?: StringNullableFilter<"whatsapp_messages"> | string | null
    timestamp?: DateTimeNullableFilter<"whatsapp_messages"> | Date | string | null
    meta_data?: JsonNullableFilter<"whatsapp_messages">
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    stores?: XOR<StoresNullableScalarRelationFilter, storesWhereInput> | null
  }, "id">

  export type whatsapp_messagesOrderByWithAggregationInput = {
    id?: SortOrder
    store_id?: SortOrderInput | SortOrder
    order_id?: SortOrderInput | SortOrder
    customer_phone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    attempt_count?: SortOrderInput | SortOrder
    error_log?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    _count?: whatsapp_messagesCountOrderByAggregateInput
    _avg?: whatsapp_messagesAvgOrderByAggregateInput
    _max?: whatsapp_messagesMaxOrderByAggregateInput
    _min?: whatsapp_messagesMinOrderByAggregateInput
    _sum?: whatsapp_messagesSumOrderByAggregateInput
  }

  export type whatsapp_messagesScalarWhereWithAggregatesInput = {
    AND?: whatsapp_messagesScalarWhereWithAggregatesInput | whatsapp_messagesScalarWhereWithAggregatesInput[]
    OR?: whatsapp_messagesScalarWhereWithAggregatesInput[]
    NOT?: whatsapp_messagesScalarWhereWithAggregatesInput | whatsapp_messagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"whatsapp_messages"> | number
    store_id?: IntNullableWithAggregatesFilter<"whatsapp_messages"> | number | null
    order_id?: IntNullableWithAggregatesFilter<"whatsapp_messages"> | number | null
    customer_phone?: StringNullableWithAggregatesFilter<"whatsapp_messages"> | string | null
    message?: StringNullableWithAggregatesFilter<"whatsapp_messages"> | string | null
    status?: StringNullableWithAggregatesFilter<"whatsapp_messages"> | string | null
    attempt_count?: IntNullableWithAggregatesFilter<"whatsapp_messages"> | number | null
    error_log?: StringNullableWithAggregatesFilter<"whatsapp_messages"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"whatsapp_messages"> | Date | string | null
    meta_data?: JsonNullableWithAggregatesFilter<"whatsapp_messages">
  }

  export type whatsapp_sessionsWhereInput = {
    AND?: whatsapp_sessionsWhereInput | whatsapp_sessionsWhereInput[]
    OR?: whatsapp_sessionsWhereInput[]
    NOT?: whatsapp_sessionsWhereInput | whatsapp_sessionsWhereInput[]
    id?: IntFilter<"whatsapp_sessions"> | number
    store_id?: IntNullableFilter<"whatsapp_sessions"> | number | null
    client_id?: StringFilter<"whatsapp_sessions"> | string
    status?: StringNullableFilter<"whatsapp_sessions"> | string | null
    session_path?: StringNullableFilter<"whatsapp_sessions"> | string | null
    last_seen?: DateTimeNullableFilter<"whatsapp_sessions"> | Date | string | null
    created_at?: DateTimeNullableFilter<"whatsapp_sessions"> | Date | string | null
    meta_data?: JsonNullableFilter<"whatsapp_sessions">
    stores?: XOR<StoresNullableScalarRelationFilter, storesWhereInput> | null
  }

  export type whatsapp_sessionsOrderByWithRelationInput = {
    id?: SortOrder
    store_id?: SortOrderInput | SortOrder
    client_id?: SortOrder
    status?: SortOrderInput | SortOrder
    session_path?: SortOrderInput | SortOrder
    last_seen?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    stores?: storesOrderByWithRelationInput
  }

  export type whatsapp_sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    client_id?: string
    AND?: whatsapp_sessionsWhereInput | whatsapp_sessionsWhereInput[]
    OR?: whatsapp_sessionsWhereInput[]
    NOT?: whatsapp_sessionsWhereInput | whatsapp_sessionsWhereInput[]
    store_id?: IntNullableFilter<"whatsapp_sessions"> | number | null
    status?: StringNullableFilter<"whatsapp_sessions"> | string | null
    session_path?: StringNullableFilter<"whatsapp_sessions"> | string | null
    last_seen?: DateTimeNullableFilter<"whatsapp_sessions"> | Date | string | null
    created_at?: DateTimeNullableFilter<"whatsapp_sessions"> | Date | string | null
    meta_data?: JsonNullableFilter<"whatsapp_sessions">
    stores?: XOR<StoresNullableScalarRelationFilter, storesWhereInput> | null
  }, "id" | "client_id">

  export type whatsapp_sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    store_id?: SortOrderInput | SortOrder
    client_id?: SortOrder
    status?: SortOrderInput | SortOrder
    session_path?: SortOrderInput | SortOrder
    last_seen?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    meta_data?: SortOrderInput | SortOrder
    _count?: whatsapp_sessionsCountOrderByAggregateInput
    _avg?: whatsapp_sessionsAvgOrderByAggregateInput
    _max?: whatsapp_sessionsMaxOrderByAggregateInput
    _min?: whatsapp_sessionsMinOrderByAggregateInput
    _sum?: whatsapp_sessionsSumOrderByAggregateInput
  }

  export type whatsapp_sessionsScalarWhereWithAggregatesInput = {
    AND?: whatsapp_sessionsScalarWhereWithAggregatesInput | whatsapp_sessionsScalarWhereWithAggregatesInput[]
    OR?: whatsapp_sessionsScalarWhereWithAggregatesInput[]
    NOT?: whatsapp_sessionsScalarWhereWithAggregatesInput | whatsapp_sessionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"whatsapp_sessions"> | number
    store_id?: IntNullableWithAggregatesFilter<"whatsapp_sessions"> | number | null
    client_id?: StringWithAggregatesFilter<"whatsapp_sessions"> | string
    status?: StringNullableWithAggregatesFilter<"whatsapp_sessions"> | string | null
    session_path?: StringNullableWithAggregatesFilter<"whatsapp_sessions"> | string | null
    last_seen?: DateTimeNullableWithAggregatesFilter<"whatsapp_sessions"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"whatsapp_sessions"> | Date | string | null
    meta_data?: JsonNullableWithAggregatesFilter<"whatsapp_sessions">
  }

  export type SessionCreateInput = {
    id: string
    shop: string
    state: string
    isOnline?: boolean
    scope?: string | null
    expires?: Date | string | null
    accessToken: string
    userId?: bigint | number | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    accountOwner?: boolean
    locale?: string | null
    collaborator?: boolean | null
    emailVerified?: boolean | null
  }

  export type SessionUncheckedCreateInput = {
    id: string
    shop: string
    state: string
    isOnline?: boolean
    scope?: string | null
    expires?: Date | string | null
    accessToken: string
    userId?: bigint | number | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    accountOwner?: boolean
    locale?: string | null
    collaborator?: boolean | null
    emailVerified?: boolean | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountOwner?: BoolFieldUpdateOperationsInput | boolean
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    collaborator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountOwner?: BoolFieldUpdateOperationsInput | boolean
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    collaborator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionCreateManyInput = {
    id: string
    shop: string
    state: string
    isOnline?: boolean
    scope?: string | null
    expires?: Date | string | null
    accessToken: string
    userId?: bigint | number | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    accountOwner?: boolean
    locale?: string | null
    collaborator?: boolean | null
    emailVerified?: boolean | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountOwner?: BoolFieldUpdateOperationsInput | boolean
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    collaborator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shop?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accountOwner?: BoolFieldUpdateOperationsInput | boolean
    locale?: NullableStringFieldUpdateOperationsInput | string | null
    collaborator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type fulfillmentsCreateInput = {
    tracking_number?: string | null
    courier_name?: string | null
    courier_code?: string | null
    status?: string | null
    delivered_at?: Date | string | null
    estimated_delivery?: Date | string | null
    last_checked_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersCreateNestedOneWithoutFulfillmentsInput
    tracking_events?: tracking_eventsCreateNestedManyWithoutFulfillmentsInput
  }

  export type fulfillmentsUncheckedCreateInput = {
    id?: number
    order_id?: number | null
    tracking_number?: string | null
    courier_name?: string | null
    courier_code?: string | null
    status?: string | null
    delivered_at?: Date | string | null
    estimated_delivery?: Date | string | null
    last_checked_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    tracking_events?: tracking_eventsUncheckedCreateNestedManyWithoutFulfillmentsInput
  }

  export type fulfillmentsUpdateInput = {
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    courier_name?: NullableStringFieldUpdateOperationsInput | string | null
    courier_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUpdateOneWithoutFulfillmentsNestedInput
    tracking_events?: tracking_eventsUpdateManyWithoutFulfillmentsNestedInput
  }

  export type fulfillmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    courier_name?: NullableStringFieldUpdateOperationsInput | string | null
    courier_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    tracking_events?: tracking_eventsUncheckedUpdateManyWithoutFulfillmentsNestedInput
  }

  export type fulfillmentsCreateManyInput = {
    id?: number
    order_id?: number | null
    tracking_number?: string | null
    courier_name?: string | null
    courier_code?: string | null
    status?: string | null
    delivered_at?: Date | string | null
    estimated_delivery?: Date | string | null
    last_checked_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type fulfillmentsUpdateManyMutationInput = {
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    courier_name?: NullableStringFieldUpdateOperationsInput | string | null
    courier_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type fulfillmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    courier_name?: NullableStringFieldUpdateOperationsInput | string | null
    courier_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ordersCreateInput = {
    shopify_order_id: bigint | number
    order_number?: string | null
    customer_name?: string | null
    customer_phone?: string | null
    status?: string | null
    placed_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsCreateNestedManyWithoutOrdersInput
    stores?: storesCreateNestedOneWithoutOrdersInput
    whatsapp_messages?: whatsapp_messagesCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    shop_id?: number | null
    shopify_order_id: bigint | number
    order_number?: string | null
    customer_name?: string | null
    customer_phone?: string | null
    status?: string | null
    placed_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsUncheckedCreateNestedManyWithoutOrdersInput
    whatsapp_messages?: whatsapp_messagesUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    shopify_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    placed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsUpdateManyWithoutOrdersNestedInput
    stores?: storesUpdateOneWithoutOrdersNestedInput
    whatsapp_messages?: whatsapp_messagesUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: NullableIntFieldUpdateOperationsInput | number | null
    shopify_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    placed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsUncheckedUpdateManyWithoutOrdersNestedInput
    whatsapp_messages?: whatsapp_messagesUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id?: number
    shop_id?: number | null
    shopify_order_id: bigint | number
    order_number?: string | null
    customer_name?: string | null
    customer_phone?: string | null
    status?: string | null
    placed_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ordersUpdateManyMutationInput = {
    shopify_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    placed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: NullableIntFieldUpdateOperationsInput | number | null
    shopify_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    placed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type storesCreateInput = {
    shopify_domain: string
    store_name?: string | null
    email?: string | null
    whatsapp_enabled?: boolean | null
    qr_connected?: boolean | null
    session_path?: string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersCreateNestedManyWithoutStoresInput
    webhook_events?: webhook_eventsCreateNestedManyWithoutStoresInput
    whatsapp_messages?: whatsapp_messagesCreateNestedManyWithoutStoresInput
    whatsapp_sessions?: whatsapp_sessionsCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateInput = {
    id?: number
    shopify_domain: string
    store_name?: string | null
    email?: string | null
    whatsapp_enabled?: boolean | null
    qr_connected?: boolean | null
    session_path?: string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUncheckedCreateNestedManyWithoutStoresInput
    webhook_events?: webhook_eventsUncheckedCreateNestedManyWithoutStoresInput
    whatsapp_messages?: whatsapp_messagesUncheckedCreateNestedManyWithoutStoresInput
    whatsapp_sessions?: whatsapp_sessionsUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesUpdateInput = {
    shopify_domain?: StringFieldUpdateOperationsInput | string
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qr_connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUpdateManyWithoutStoresNestedInput
    webhook_events?: webhook_eventsUpdateManyWithoutStoresNestedInput
    whatsapp_messages?: whatsapp_messagesUpdateManyWithoutStoresNestedInput
    whatsapp_sessions?: whatsapp_sessionsUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopify_domain?: StringFieldUpdateOperationsInput | string
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qr_connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUncheckedUpdateManyWithoutStoresNestedInput
    webhook_events?: webhook_eventsUncheckedUpdateManyWithoutStoresNestedInput
    whatsapp_messages?: whatsapp_messagesUncheckedUpdateManyWithoutStoresNestedInput
    whatsapp_sessions?: whatsapp_sessionsUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type storesCreateManyInput = {
    id?: number
    shopify_domain: string
    store_name?: string | null
    email?: string | null
    whatsapp_enabled?: boolean | null
    qr_connected?: boolean | null
    session_path?: string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type storesUpdateManyMutationInput = {
    shopify_domain?: StringFieldUpdateOperationsInput | string
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qr_connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type storesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopify_domain?: StringFieldUpdateOperationsInput | string
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qr_connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tracking_eventsCreateInput = {
    status?: string | null
    status_code?: string | null
    location?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsCreateNestedOneWithoutTracking_eventsInput
  }

  export type tracking_eventsUncheckedCreateInput = {
    id?: number
    fulfillment_id?: number | null
    status?: string | null
    status_code?: string | null
    location?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tracking_eventsUpdateInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsUpdateOneWithoutTracking_eventsNestedInput
  }

  export type tracking_eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fulfillment_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tracking_eventsCreateManyInput = {
    id?: number
    fulfillment_id?: number | null
    status?: string | null
    status_code?: string | null
    location?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tracking_eventsUpdateManyMutationInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tracking_eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fulfillment_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type webhook_eventsCreateInput = {
    event_type?: string | null
    order_id?: string | null
    tracking_number?: string | null
    tracking_url?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
    status?: string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    stores?: storesCreateNestedOneWithoutWebhook_eventsInput
  }

  export type webhook_eventsUncheckedCreateInput = {
    id?: number
    store_id?: number | null
    event_type?: string | null
    order_id?: string | null
    tracking_number?: string | null
    tracking_url?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
    status?: string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type webhook_eventsUpdateInput = {
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_url?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    stores?: storesUpdateOneWithoutWebhook_eventsNestedInput
  }

  export type webhook_eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_url?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type webhook_eventsCreateManyInput = {
    id?: number
    store_id?: number | null
    event_type?: string | null
    order_id?: string | null
    tracking_number?: string | null
    tracking_url?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
    status?: string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type webhook_eventsUpdateManyMutationInput = {
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_url?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type webhook_eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_url?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesCreateInput = {
    customer_phone?: string | null
    message?: string | null
    status?: string | null
    attempt_count?: number | null
    error_log?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersCreateNestedOneWithoutWhatsapp_messagesInput
    stores?: storesCreateNestedOneWithoutWhatsapp_messagesInput
  }

  export type whatsapp_messagesUncheckedCreateInput = {
    id?: number
    store_id?: number | null
    order_id?: number | null
    customer_phone?: string | null
    message?: string | null
    status?: string | null
    attempt_count?: number | null
    error_log?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesUpdateInput = {
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempt_count?: NullableIntFieldUpdateOperationsInput | number | null
    error_log?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUpdateOneWithoutWhatsapp_messagesNestedInput
    stores?: storesUpdateOneWithoutWhatsapp_messagesNestedInput
  }

  export type whatsapp_messagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempt_count?: NullableIntFieldUpdateOperationsInput | number | null
    error_log?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesCreateManyInput = {
    id?: number
    store_id?: number | null
    order_id?: number | null
    customer_phone?: string | null
    message?: string | null
    status?: string | null
    attempt_count?: number | null
    error_log?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesUpdateManyMutationInput = {
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempt_count?: NullableIntFieldUpdateOperationsInput | number | null
    error_log?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempt_count?: NullableIntFieldUpdateOperationsInput | number | null
    error_log?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_sessionsCreateInput = {
    client_id: string
    status?: string | null
    session_path?: string | null
    last_seen?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    stores?: storesCreateNestedOneWithoutWhatsapp_sessionsInput
  }

  export type whatsapp_sessionsUncheckedCreateInput = {
    id?: number
    store_id?: number | null
    client_id: string
    status?: string | null
    session_path?: string | null
    last_seen?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_sessionsUpdateInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    stores?: storesUpdateOneWithoutWhatsapp_sessionsNestedInput
  }

  export type whatsapp_sessionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    client_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_sessionsCreateManyInput = {
    id?: number
    store_id?: number | null
    client_id: string
    status?: string | null
    session_path?: string | null
    last_seen?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_sessionsUpdateManyMutationInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_sessionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    client_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrder
    expires?: SortOrder
    accessToken?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    accountOwner?: SortOrder
    locale?: SortOrder
    collaborator?: SortOrder
    emailVerified?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrder
    expires?: SortOrder
    accessToken?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    accountOwner?: SortOrder
    locale?: SortOrder
    collaborator?: SortOrder
    emailVerified?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    shop?: SortOrder
    state?: SortOrder
    isOnline?: SortOrder
    scope?: SortOrder
    expires?: SortOrder
    accessToken?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    accountOwner?: SortOrder
    locale?: SortOrder
    collaborator?: SortOrder
    emailVerified?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OrdersNullableScalarRelationFilter = {
    is?: ordersWhereInput | null
    isNot?: ordersWhereInput | null
  }

  export type Tracking_eventsListRelationFilter = {
    every?: tracking_eventsWhereInput
    some?: tracking_eventsWhereInput
    none?: tracking_eventsWhereInput
  }

  export type tracking_eventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fulfillmentsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    tracking_number?: SortOrder
    courier_name?: SortOrder
    courier_code?: SortOrder
    status?: SortOrder
    delivered_at?: SortOrder
    estimated_delivery?: SortOrder
    last_checked_at?: SortOrder
    created_at?: SortOrder
    meta_data?: SortOrder
  }

  export type fulfillmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
  }

  export type fulfillmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    tracking_number?: SortOrder
    courier_name?: SortOrder
    courier_code?: SortOrder
    status?: SortOrder
    delivered_at?: SortOrder
    estimated_delivery?: SortOrder
    last_checked_at?: SortOrder
    created_at?: SortOrder
  }

  export type fulfillmentsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    tracking_number?: SortOrder
    courier_name?: SortOrder
    courier_code?: SortOrder
    status?: SortOrder
    delivered_at?: SortOrder
    estimated_delivery?: SortOrder
    last_checked_at?: SortOrder
    created_at?: SortOrder
  }

  export type fulfillmentsSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type FulfillmentsListRelationFilter = {
    every?: fulfillmentsWhereInput
    some?: fulfillmentsWhereInput
    none?: fulfillmentsWhereInput
  }

  export type StoresNullableScalarRelationFilter = {
    is?: storesWhereInput | null
    isNot?: storesWhereInput | null
  }

  export type Whatsapp_messagesListRelationFilter = {
    every?: whatsapp_messagesWhereInput
    some?: whatsapp_messagesWhereInput
    none?: whatsapp_messagesWhereInput
  }

  export type fulfillmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type whatsapp_messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    shopify_order_id?: SortOrder
    order_number?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    status?: SortOrder
    placed_at?: SortOrder
    created_at?: SortOrder
    meta_data?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    shopify_order_id?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    shopify_order_id?: SortOrder
    order_number?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    status?: SortOrder
    placed_at?: SortOrder
    created_at?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    shopify_order_id?: SortOrder
    order_number?: SortOrder
    customer_name?: SortOrder
    customer_phone?: SortOrder
    status?: SortOrder
    placed_at?: SortOrder
    created_at?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    shop_id?: SortOrder
    shopify_order_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type Webhook_eventsListRelationFilter = {
    every?: webhook_eventsWhereInput
    some?: webhook_eventsWhereInput
    none?: webhook_eventsWhereInput
  }

  export type Whatsapp_sessionsListRelationFilter = {
    every?: whatsapp_sessionsWhereInput
    some?: whatsapp_sessionsWhereInput
    none?: whatsapp_sessionsWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type webhook_eventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type whatsapp_sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type storesCountOrderByAggregateInput = {
    id?: SortOrder
    shopify_domain?: SortOrder
    store_name?: SortOrder
    email?: SortOrder
    whatsapp_enabled?: SortOrder
    qr_connected?: SortOrder
    session_path?: SortOrder
    created_at?: SortOrder
    meta_data?: SortOrder
  }

  export type storesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type storesMaxOrderByAggregateInput = {
    id?: SortOrder
    shopify_domain?: SortOrder
    store_name?: SortOrder
    email?: SortOrder
    whatsapp_enabled?: SortOrder
    qr_connected?: SortOrder
    session_path?: SortOrder
    created_at?: SortOrder
  }

  export type storesMinOrderByAggregateInput = {
    id?: SortOrder
    shopify_domain?: SortOrder
    store_name?: SortOrder
    email?: SortOrder
    whatsapp_enabled?: SortOrder
    qr_connected?: SortOrder
    session_path?: SortOrder
    created_at?: SortOrder
  }

  export type storesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FulfillmentsNullableScalarRelationFilter = {
    is?: fulfillmentsWhereInput | null
    isNot?: fulfillmentsWhereInput | null
  }

  export type tracking_eventsCountOrderByAggregateInput = {
    id?: SortOrder
    fulfillment_id?: SortOrder
    status?: SortOrder
    status_code?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
    meta_data?: SortOrder
  }

  export type tracking_eventsAvgOrderByAggregateInput = {
    id?: SortOrder
    fulfillment_id?: SortOrder
  }

  export type tracking_eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    fulfillment_id?: SortOrder
    status?: SortOrder
    status_code?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
  }

  export type tracking_eventsMinOrderByAggregateInput = {
    id?: SortOrder
    fulfillment_id?: SortOrder
    status?: SortOrder
    status_code?: SortOrder
    location?: SortOrder
    timestamp?: SortOrder
  }

  export type tracking_eventsSumOrderByAggregateInput = {
    id?: SortOrder
    fulfillment_id?: SortOrder
  }

  export type webhook_eventsCountOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    event_type?: SortOrder
    order_id?: SortOrder
    tracking_number?: SortOrder
    tracking_url?: SortOrder
    payload?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    meta_data?: SortOrder
  }

  export type webhook_eventsAvgOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
  }

  export type webhook_eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    event_type?: SortOrder
    order_id?: SortOrder
    tracking_number?: SortOrder
    tracking_url?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
  }

  export type webhook_eventsMinOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    event_type?: SortOrder
    order_id?: SortOrder
    tracking_number?: SortOrder
    tracking_url?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
  }

  export type webhook_eventsSumOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
  }

  export type whatsapp_messagesCountOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    order_id?: SortOrder
    customer_phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    attempt_count?: SortOrder
    error_log?: SortOrder
    timestamp?: SortOrder
    meta_data?: SortOrder
  }

  export type whatsapp_messagesAvgOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    order_id?: SortOrder
    attempt_count?: SortOrder
  }

  export type whatsapp_messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    order_id?: SortOrder
    customer_phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    attempt_count?: SortOrder
    error_log?: SortOrder
    timestamp?: SortOrder
  }

  export type whatsapp_messagesMinOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    order_id?: SortOrder
    customer_phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    attempt_count?: SortOrder
    error_log?: SortOrder
    timestamp?: SortOrder
  }

  export type whatsapp_messagesSumOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    order_id?: SortOrder
    attempt_count?: SortOrder
  }

  export type whatsapp_sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    session_path?: SortOrder
    last_seen?: SortOrder
    created_at?: SortOrder
    meta_data?: SortOrder
  }

  export type whatsapp_sessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
  }

  export type whatsapp_sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    session_path?: SortOrder
    last_seen?: SortOrder
    created_at?: SortOrder
  }

  export type whatsapp_sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
    client_id?: SortOrder
    status?: SortOrder
    session_path?: SortOrder
    last_seen?: SortOrder
    created_at?: SortOrder
  }

  export type whatsapp_sessionsSumOrderByAggregateInput = {
    id?: SortOrder
    store_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ordersCreateNestedOneWithoutFulfillmentsInput = {
    create?: XOR<ordersCreateWithoutFulfillmentsInput, ordersUncheckedCreateWithoutFulfillmentsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutFulfillmentsInput
    connect?: ordersWhereUniqueInput
  }

  export type tracking_eventsCreateNestedManyWithoutFulfillmentsInput = {
    create?: XOR<tracking_eventsCreateWithoutFulfillmentsInput, tracking_eventsUncheckedCreateWithoutFulfillmentsInput> | tracking_eventsCreateWithoutFulfillmentsInput[] | tracking_eventsUncheckedCreateWithoutFulfillmentsInput[]
    connectOrCreate?: tracking_eventsCreateOrConnectWithoutFulfillmentsInput | tracking_eventsCreateOrConnectWithoutFulfillmentsInput[]
    createMany?: tracking_eventsCreateManyFulfillmentsInputEnvelope
    connect?: tracking_eventsWhereUniqueInput | tracking_eventsWhereUniqueInput[]
  }

  export type tracking_eventsUncheckedCreateNestedManyWithoutFulfillmentsInput = {
    create?: XOR<tracking_eventsCreateWithoutFulfillmentsInput, tracking_eventsUncheckedCreateWithoutFulfillmentsInput> | tracking_eventsCreateWithoutFulfillmentsInput[] | tracking_eventsUncheckedCreateWithoutFulfillmentsInput[]
    connectOrCreate?: tracking_eventsCreateOrConnectWithoutFulfillmentsInput | tracking_eventsCreateOrConnectWithoutFulfillmentsInput[]
    createMany?: tracking_eventsCreateManyFulfillmentsInputEnvelope
    connect?: tracking_eventsWhereUniqueInput | tracking_eventsWhereUniqueInput[]
  }

  export type ordersUpdateOneWithoutFulfillmentsNestedInput = {
    create?: XOR<ordersCreateWithoutFulfillmentsInput, ordersUncheckedCreateWithoutFulfillmentsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutFulfillmentsInput
    upsert?: ordersUpsertWithoutFulfillmentsInput
    disconnect?: ordersWhereInput | boolean
    delete?: ordersWhereInput | boolean
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutFulfillmentsInput, ordersUpdateWithoutFulfillmentsInput>, ordersUncheckedUpdateWithoutFulfillmentsInput>
  }

  export type tracking_eventsUpdateManyWithoutFulfillmentsNestedInput = {
    create?: XOR<tracking_eventsCreateWithoutFulfillmentsInput, tracking_eventsUncheckedCreateWithoutFulfillmentsInput> | tracking_eventsCreateWithoutFulfillmentsInput[] | tracking_eventsUncheckedCreateWithoutFulfillmentsInput[]
    connectOrCreate?: tracking_eventsCreateOrConnectWithoutFulfillmentsInput | tracking_eventsCreateOrConnectWithoutFulfillmentsInput[]
    upsert?: tracking_eventsUpsertWithWhereUniqueWithoutFulfillmentsInput | tracking_eventsUpsertWithWhereUniqueWithoutFulfillmentsInput[]
    createMany?: tracking_eventsCreateManyFulfillmentsInputEnvelope
    set?: tracking_eventsWhereUniqueInput | tracking_eventsWhereUniqueInput[]
    disconnect?: tracking_eventsWhereUniqueInput | tracking_eventsWhereUniqueInput[]
    delete?: tracking_eventsWhereUniqueInput | tracking_eventsWhereUniqueInput[]
    connect?: tracking_eventsWhereUniqueInput | tracking_eventsWhereUniqueInput[]
    update?: tracking_eventsUpdateWithWhereUniqueWithoutFulfillmentsInput | tracking_eventsUpdateWithWhereUniqueWithoutFulfillmentsInput[]
    updateMany?: tracking_eventsUpdateManyWithWhereWithoutFulfillmentsInput | tracking_eventsUpdateManyWithWhereWithoutFulfillmentsInput[]
    deleteMany?: tracking_eventsScalarWhereInput | tracking_eventsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tracking_eventsUncheckedUpdateManyWithoutFulfillmentsNestedInput = {
    create?: XOR<tracking_eventsCreateWithoutFulfillmentsInput, tracking_eventsUncheckedCreateWithoutFulfillmentsInput> | tracking_eventsCreateWithoutFulfillmentsInput[] | tracking_eventsUncheckedCreateWithoutFulfillmentsInput[]
    connectOrCreate?: tracking_eventsCreateOrConnectWithoutFulfillmentsInput | tracking_eventsCreateOrConnectWithoutFulfillmentsInput[]
    upsert?: tracking_eventsUpsertWithWhereUniqueWithoutFulfillmentsInput | tracking_eventsUpsertWithWhereUniqueWithoutFulfillmentsInput[]
    createMany?: tracking_eventsCreateManyFulfillmentsInputEnvelope
    set?: tracking_eventsWhereUniqueInput | tracking_eventsWhereUniqueInput[]
    disconnect?: tracking_eventsWhereUniqueInput | tracking_eventsWhereUniqueInput[]
    delete?: tracking_eventsWhereUniqueInput | tracking_eventsWhereUniqueInput[]
    connect?: tracking_eventsWhereUniqueInput | tracking_eventsWhereUniqueInput[]
    update?: tracking_eventsUpdateWithWhereUniqueWithoutFulfillmentsInput | tracking_eventsUpdateWithWhereUniqueWithoutFulfillmentsInput[]
    updateMany?: tracking_eventsUpdateManyWithWhereWithoutFulfillmentsInput | tracking_eventsUpdateManyWithWhereWithoutFulfillmentsInput[]
    deleteMany?: tracking_eventsScalarWhereInput | tracking_eventsScalarWhereInput[]
  }

  export type fulfillmentsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<fulfillmentsCreateWithoutOrdersInput, fulfillmentsUncheckedCreateWithoutOrdersInput> | fulfillmentsCreateWithoutOrdersInput[] | fulfillmentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: fulfillmentsCreateOrConnectWithoutOrdersInput | fulfillmentsCreateOrConnectWithoutOrdersInput[]
    createMany?: fulfillmentsCreateManyOrdersInputEnvelope
    connect?: fulfillmentsWhereUniqueInput | fulfillmentsWhereUniqueInput[]
  }

  export type storesCreateNestedOneWithoutOrdersInput = {
    create?: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: storesCreateOrConnectWithoutOrdersInput
    connect?: storesWhereUniqueInput
  }

  export type whatsapp_messagesCreateNestedManyWithoutOrdersInput = {
    create?: XOR<whatsapp_messagesCreateWithoutOrdersInput, whatsapp_messagesUncheckedCreateWithoutOrdersInput> | whatsapp_messagesCreateWithoutOrdersInput[] | whatsapp_messagesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: whatsapp_messagesCreateOrConnectWithoutOrdersInput | whatsapp_messagesCreateOrConnectWithoutOrdersInput[]
    createMany?: whatsapp_messagesCreateManyOrdersInputEnvelope
    connect?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
  }

  export type fulfillmentsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<fulfillmentsCreateWithoutOrdersInput, fulfillmentsUncheckedCreateWithoutOrdersInput> | fulfillmentsCreateWithoutOrdersInput[] | fulfillmentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: fulfillmentsCreateOrConnectWithoutOrdersInput | fulfillmentsCreateOrConnectWithoutOrdersInput[]
    createMany?: fulfillmentsCreateManyOrdersInputEnvelope
    connect?: fulfillmentsWhereUniqueInput | fulfillmentsWhereUniqueInput[]
  }

  export type whatsapp_messagesUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<whatsapp_messagesCreateWithoutOrdersInput, whatsapp_messagesUncheckedCreateWithoutOrdersInput> | whatsapp_messagesCreateWithoutOrdersInput[] | whatsapp_messagesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: whatsapp_messagesCreateOrConnectWithoutOrdersInput | whatsapp_messagesCreateOrConnectWithoutOrdersInput[]
    createMany?: whatsapp_messagesCreateManyOrdersInputEnvelope
    connect?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type fulfillmentsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<fulfillmentsCreateWithoutOrdersInput, fulfillmentsUncheckedCreateWithoutOrdersInput> | fulfillmentsCreateWithoutOrdersInput[] | fulfillmentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: fulfillmentsCreateOrConnectWithoutOrdersInput | fulfillmentsCreateOrConnectWithoutOrdersInput[]
    upsert?: fulfillmentsUpsertWithWhereUniqueWithoutOrdersInput | fulfillmentsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: fulfillmentsCreateManyOrdersInputEnvelope
    set?: fulfillmentsWhereUniqueInput | fulfillmentsWhereUniqueInput[]
    disconnect?: fulfillmentsWhereUniqueInput | fulfillmentsWhereUniqueInput[]
    delete?: fulfillmentsWhereUniqueInput | fulfillmentsWhereUniqueInput[]
    connect?: fulfillmentsWhereUniqueInput | fulfillmentsWhereUniqueInput[]
    update?: fulfillmentsUpdateWithWhereUniqueWithoutOrdersInput | fulfillmentsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: fulfillmentsUpdateManyWithWhereWithoutOrdersInput | fulfillmentsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: fulfillmentsScalarWhereInput | fulfillmentsScalarWhereInput[]
  }

  export type storesUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: storesCreateOrConnectWithoutOrdersInput
    upsert?: storesUpsertWithoutOrdersInput
    disconnect?: storesWhereInput | boolean
    delete?: storesWhereInput | boolean
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutOrdersInput, storesUpdateWithoutOrdersInput>, storesUncheckedUpdateWithoutOrdersInput>
  }

  export type whatsapp_messagesUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<whatsapp_messagesCreateWithoutOrdersInput, whatsapp_messagesUncheckedCreateWithoutOrdersInput> | whatsapp_messagesCreateWithoutOrdersInput[] | whatsapp_messagesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: whatsapp_messagesCreateOrConnectWithoutOrdersInput | whatsapp_messagesCreateOrConnectWithoutOrdersInput[]
    upsert?: whatsapp_messagesUpsertWithWhereUniqueWithoutOrdersInput | whatsapp_messagesUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: whatsapp_messagesCreateManyOrdersInputEnvelope
    set?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    disconnect?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    delete?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    connect?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    update?: whatsapp_messagesUpdateWithWhereUniqueWithoutOrdersInput | whatsapp_messagesUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: whatsapp_messagesUpdateManyWithWhereWithoutOrdersInput | whatsapp_messagesUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: whatsapp_messagesScalarWhereInput | whatsapp_messagesScalarWhereInput[]
  }

  export type fulfillmentsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<fulfillmentsCreateWithoutOrdersInput, fulfillmentsUncheckedCreateWithoutOrdersInput> | fulfillmentsCreateWithoutOrdersInput[] | fulfillmentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: fulfillmentsCreateOrConnectWithoutOrdersInput | fulfillmentsCreateOrConnectWithoutOrdersInput[]
    upsert?: fulfillmentsUpsertWithWhereUniqueWithoutOrdersInput | fulfillmentsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: fulfillmentsCreateManyOrdersInputEnvelope
    set?: fulfillmentsWhereUniqueInput | fulfillmentsWhereUniqueInput[]
    disconnect?: fulfillmentsWhereUniqueInput | fulfillmentsWhereUniqueInput[]
    delete?: fulfillmentsWhereUniqueInput | fulfillmentsWhereUniqueInput[]
    connect?: fulfillmentsWhereUniqueInput | fulfillmentsWhereUniqueInput[]
    update?: fulfillmentsUpdateWithWhereUniqueWithoutOrdersInput | fulfillmentsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: fulfillmentsUpdateManyWithWhereWithoutOrdersInput | fulfillmentsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: fulfillmentsScalarWhereInput | fulfillmentsScalarWhereInput[]
  }

  export type whatsapp_messagesUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<whatsapp_messagesCreateWithoutOrdersInput, whatsapp_messagesUncheckedCreateWithoutOrdersInput> | whatsapp_messagesCreateWithoutOrdersInput[] | whatsapp_messagesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: whatsapp_messagesCreateOrConnectWithoutOrdersInput | whatsapp_messagesCreateOrConnectWithoutOrdersInput[]
    upsert?: whatsapp_messagesUpsertWithWhereUniqueWithoutOrdersInput | whatsapp_messagesUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: whatsapp_messagesCreateManyOrdersInputEnvelope
    set?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    disconnect?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    delete?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    connect?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    update?: whatsapp_messagesUpdateWithWhereUniqueWithoutOrdersInput | whatsapp_messagesUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: whatsapp_messagesUpdateManyWithWhereWithoutOrdersInput | whatsapp_messagesUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: whatsapp_messagesScalarWhereInput | whatsapp_messagesScalarWhereInput[]
  }

  export type ordersCreateNestedManyWithoutStoresInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type webhook_eventsCreateNestedManyWithoutStoresInput = {
    create?: XOR<webhook_eventsCreateWithoutStoresInput, webhook_eventsUncheckedCreateWithoutStoresInput> | webhook_eventsCreateWithoutStoresInput[] | webhook_eventsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: webhook_eventsCreateOrConnectWithoutStoresInput | webhook_eventsCreateOrConnectWithoutStoresInput[]
    createMany?: webhook_eventsCreateManyStoresInputEnvelope
    connect?: webhook_eventsWhereUniqueInput | webhook_eventsWhereUniqueInput[]
  }

  export type whatsapp_messagesCreateNestedManyWithoutStoresInput = {
    create?: XOR<whatsapp_messagesCreateWithoutStoresInput, whatsapp_messagesUncheckedCreateWithoutStoresInput> | whatsapp_messagesCreateWithoutStoresInput[] | whatsapp_messagesUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: whatsapp_messagesCreateOrConnectWithoutStoresInput | whatsapp_messagesCreateOrConnectWithoutStoresInput[]
    createMany?: whatsapp_messagesCreateManyStoresInputEnvelope
    connect?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
  }

  export type whatsapp_sessionsCreateNestedManyWithoutStoresInput = {
    create?: XOR<whatsapp_sessionsCreateWithoutStoresInput, whatsapp_sessionsUncheckedCreateWithoutStoresInput> | whatsapp_sessionsCreateWithoutStoresInput[] | whatsapp_sessionsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: whatsapp_sessionsCreateOrConnectWithoutStoresInput | whatsapp_sessionsCreateOrConnectWithoutStoresInput[]
    createMany?: whatsapp_sessionsCreateManyStoresInputEnvelope
    connect?: whatsapp_sessionsWhereUniqueInput | whatsapp_sessionsWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type webhook_eventsUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<webhook_eventsCreateWithoutStoresInput, webhook_eventsUncheckedCreateWithoutStoresInput> | webhook_eventsCreateWithoutStoresInput[] | webhook_eventsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: webhook_eventsCreateOrConnectWithoutStoresInput | webhook_eventsCreateOrConnectWithoutStoresInput[]
    createMany?: webhook_eventsCreateManyStoresInputEnvelope
    connect?: webhook_eventsWhereUniqueInput | webhook_eventsWhereUniqueInput[]
  }

  export type whatsapp_messagesUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<whatsapp_messagesCreateWithoutStoresInput, whatsapp_messagesUncheckedCreateWithoutStoresInput> | whatsapp_messagesCreateWithoutStoresInput[] | whatsapp_messagesUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: whatsapp_messagesCreateOrConnectWithoutStoresInput | whatsapp_messagesCreateOrConnectWithoutStoresInput[]
    createMany?: whatsapp_messagesCreateManyStoresInputEnvelope
    connect?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
  }

  export type whatsapp_sessionsUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<whatsapp_sessionsCreateWithoutStoresInput, whatsapp_sessionsUncheckedCreateWithoutStoresInput> | whatsapp_sessionsCreateWithoutStoresInput[] | whatsapp_sessionsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: whatsapp_sessionsCreateOrConnectWithoutStoresInput | whatsapp_sessionsCreateOrConnectWithoutStoresInput[]
    createMany?: whatsapp_sessionsCreateManyStoresInputEnvelope
    connect?: whatsapp_sessionsWhereUniqueInput | whatsapp_sessionsWhereUniqueInput[]
  }

  export type ordersUpdateManyWithoutStoresNestedInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutStoresInput | ordersUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutStoresInput | ordersUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutStoresInput | ordersUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type webhook_eventsUpdateManyWithoutStoresNestedInput = {
    create?: XOR<webhook_eventsCreateWithoutStoresInput, webhook_eventsUncheckedCreateWithoutStoresInput> | webhook_eventsCreateWithoutStoresInput[] | webhook_eventsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: webhook_eventsCreateOrConnectWithoutStoresInput | webhook_eventsCreateOrConnectWithoutStoresInput[]
    upsert?: webhook_eventsUpsertWithWhereUniqueWithoutStoresInput | webhook_eventsUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: webhook_eventsCreateManyStoresInputEnvelope
    set?: webhook_eventsWhereUniqueInput | webhook_eventsWhereUniqueInput[]
    disconnect?: webhook_eventsWhereUniqueInput | webhook_eventsWhereUniqueInput[]
    delete?: webhook_eventsWhereUniqueInput | webhook_eventsWhereUniqueInput[]
    connect?: webhook_eventsWhereUniqueInput | webhook_eventsWhereUniqueInput[]
    update?: webhook_eventsUpdateWithWhereUniqueWithoutStoresInput | webhook_eventsUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: webhook_eventsUpdateManyWithWhereWithoutStoresInput | webhook_eventsUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: webhook_eventsScalarWhereInput | webhook_eventsScalarWhereInput[]
  }

  export type whatsapp_messagesUpdateManyWithoutStoresNestedInput = {
    create?: XOR<whatsapp_messagesCreateWithoutStoresInput, whatsapp_messagesUncheckedCreateWithoutStoresInput> | whatsapp_messagesCreateWithoutStoresInput[] | whatsapp_messagesUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: whatsapp_messagesCreateOrConnectWithoutStoresInput | whatsapp_messagesCreateOrConnectWithoutStoresInput[]
    upsert?: whatsapp_messagesUpsertWithWhereUniqueWithoutStoresInput | whatsapp_messagesUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: whatsapp_messagesCreateManyStoresInputEnvelope
    set?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    disconnect?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    delete?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    connect?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    update?: whatsapp_messagesUpdateWithWhereUniqueWithoutStoresInput | whatsapp_messagesUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: whatsapp_messagesUpdateManyWithWhereWithoutStoresInput | whatsapp_messagesUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: whatsapp_messagesScalarWhereInput | whatsapp_messagesScalarWhereInput[]
  }

  export type whatsapp_sessionsUpdateManyWithoutStoresNestedInput = {
    create?: XOR<whatsapp_sessionsCreateWithoutStoresInput, whatsapp_sessionsUncheckedCreateWithoutStoresInput> | whatsapp_sessionsCreateWithoutStoresInput[] | whatsapp_sessionsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: whatsapp_sessionsCreateOrConnectWithoutStoresInput | whatsapp_sessionsCreateOrConnectWithoutStoresInput[]
    upsert?: whatsapp_sessionsUpsertWithWhereUniqueWithoutStoresInput | whatsapp_sessionsUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: whatsapp_sessionsCreateManyStoresInputEnvelope
    set?: whatsapp_sessionsWhereUniqueInput | whatsapp_sessionsWhereUniqueInput[]
    disconnect?: whatsapp_sessionsWhereUniqueInput | whatsapp_sessionsWhereUniqueInput[]
    delete?: whatsapp_sessionsWhereUniqueInput | whatsapp_sessionsWhereUniqueInput[]
    connect?: whatsapp_sessionsWhereUniqueInput | whatsapp_sessionsWhereUniqueInput[]
    update?: whatsapp_sessionsUpdateWithWhereUniqueWithoutStoresInput | whatsapp_sessionsUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: whatsapp_sessionsUpdateManyWithWhereWithoutStoresInput | whatsapp_sessionsUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: whatsapp_sessionsScalarWhereInput | whatsapp_sessionsScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutStoresInput | ordersUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutStoresInput | ordersUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutStoresInput | ordersUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type webhook_eventsUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<webhook_eventsCreateWithoutStoresInput, webhook_eventsUncheckedCreateWithoutStoresInput> | webhook_eventsCreateWithoutStoresInput[] | webhook_eventsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: webhook_eventsCreateOrConnectWithoutStoresInput | webhook_eventsCreateOrConnectWithoutStoresInput[]
    upsert?: webhook_eventsUpsertWithWhereUniqueWithoutStoresInput | webhook_eventsUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: webhook_eventsCreateManyStoresInputEnvelope
    set?: webhook_eventsWhereUniqueInput | webhook_eventsWhereUniqueInput[]
    disconnect?: webhook_eventsWhereUniqueInput | webhook_eventsWhereUniqueInput[]
    delete?: webhook_eventsWhereUniqueInput | webhook_eventsWhereUniqueInput[]
    connect?: webhook_eventsWhereUniqueInput | webhook_eventsWhereUniqueInput[]
    update?: webhook_eventsUpdateWithWhereUniqueWithoutStoresInput | webhook_eventsUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: webhook_eventsUpdateManyWithWhereWithoutStoresInput | webhook_eventsUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: webhook_eventsScalarWhereInput | webhook_eventsScalarWhereInput[]
  }

  export type whatsapp_messagesUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<whatsapp_messagesCreateWithoutStoresInput, whatsapp_messagesUncheckedCreateWithoutStoresInput> | whatsapp_messagesCreateWithoutStoresInput[] | whatsapp_messagesUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: whatsapp_messagesCreateOrConnectWithoutStoresInput | whatsapp_messagesCreateOrConnectWithoutStoresInput[]
    upsert?: whatsapp_messagesUpsertWithWhereUniqueWithoutStoresInput | whatsapp_messagesUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: whatsapp_messagesCreateManyStoresInputEnvelope
    set?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    disconnect?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    delete?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    connect?: whatsapp_messagesWhereUniqueInput | whatsapp_messagesWhereUniqueInput[]
    update?: whatsapp_messagesUpdateWithWhereUniqueWithoutStoresInput | whatsapp_messagesUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: whatsapp_messagesUpdateManyWithWhereWithoutStoresInput | whatsapp_messagesUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: whatsapp_messagesScalarWhereInput | whatsapp_messagesScalarWhereInput[]
  }

  export type whatsapp_sessionsUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<whatsapp_sessionsCreateWithoutStoresInput, whatsapp_sessionsUncheckedCreateWithoutStoresInput> | whatsapp_sessionsCreateWithoutStoresInput[] | whatsapp_sessionsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: whatsapp_sessionsCreateOrConnectWithoutStoresInput | whatsapp_sessionsCreateOrConnectWithoutStoresInput[]
    upsert?: whatsapp_sessionsUpsertWithWhereUniqueWithoutStoresInput | whatsapp_sessionsUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: whatsapp_sessionsCreateManyStoresInputEnvelope
    set?: whatsapp_sessionsWhereUniqueInput | whatsapp_sessionsWhereUniqueInput[]
    disconnect?: whatsapp_sessionsWhereUniqueInput | whatsapp_sessionsWhereUniqueInput[]
    delete?: whatsapp_sessionsWhereUniqueInput | whatsapp_sessionsWhereUniqueInput[]
    connect?: whatsapp_sessionsWhereUniqueInput | whatsapp_sessionsWhereUniqueInput[]
    update?: whatsapp_sessionsUpdateWithWhereUniqueWithoutStoresInput | whatsapp_sessionsUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: whatsapp_sessionsUpdateManyWithWhereWithoutStoresInput | whatsapp_sessionsUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: whatsapp_sessionsScalarWhereInput | whatsapp_sessionsScalarWhereInput[]
  }

  export type fulfillmentsCreateNestedOneWithoutTracking_eventsInput = {
    create?: XOR<fulfillmentsCreateWithoutTracking_eventsInput, fulfillmentsUncheckedCreateWithoutTracking_eventsInput>
    connectOrCreate?: fulfillmentsCreateOrConnectWithoutTracking_eventsInput
    connect?: fulfillmentsWhereUniqueInput
  }

  export type fulfillmentsUpdateOneWithoutTracking_eventsNestedInput = {
    create?: XOR<fulfillmentsCreateWithoutTracking_eventsInput, fulfillmentsUncheckedCreateWithoutTracking_eventsInput>
    connectOrCreate?: fulfillmentsCreateOrConnectWithoutTracking_eventsInput
    upsert?: fulfillmentsUpsertWithoutTracking_eventsInput
    disconnect?: fulfillmentsWhereInput | boolean
    delete?: fulfillmentsWhereInput | boolean
    connect?: fulfillmentsWhereUniqueInput
    update?: XOR<XOR<fulfillmentsUpdateToOneWithWhereWithoutTracking_eventsInput, fulfillmentsUpdateWithoutTracking_eventsInput>, fulfillmentsUncheckedUpdateWithoutTracking_eventsInput>
  }

  export type storesCreateNestedOneWithoutWebhook_eventsInput = {
    create?: XOR<storesCreateWithoutWebhook_eventsInput, storesUncheckedCreateWithoutWebhook_eventsInput>
    connectOrCreate?: storesCreateOrConnectWithoutWebhook_eventsInput
    connect?: storesWhereUniqueInput
  }

  export type storesUpdateOneWithoutWebhook_eventsNestedInput = {
    create?: XOR<storesCreateWithoutWebhook_eventsInput, storesUncheckedCreateWithoutWebhook_eventsInput>
    connectOrCreate?: storesCreateOrConnectWithoutWebhook_eventsInput
    upsert?: storesUpsertWithoutWebhook_eventsInput
    disconnect?: storesWhereInput | boolean
    delete?: storesWhereInput | boolean
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutWebhook_eventsInput, storesUpdateWithoutWebhook_eventsInput>, storesUncheckedUpdateWithoutWebhook_eventsInput>
  }

  export type ordersCreateNestedOneWithoutWhatsapp_messagesInput = {
    create?: XOR<ordersCreateWithoutWhatsapp_messagesInput, ordersUncheckedCreateWithoutWhatsapp_messagesInput>
    connectOrCreate?: ordersCreateOrConnectWithoutWhatsapp_messagesInput
    connect?: ordersWhereUniqueInput
  }

  export type storesCreateNestedOneWithoutWhatsapp_messagesInput = {
    create?: XOR<storesCreateWithoutWhatsapp_messagesInput, storesUncheckedCreateWithoutWhatsapp_messagesInput>
    connectOrCreate?: storesCreateOrConnectWithoutWhatsapp_messagesInput
    connect?: storesWhereUniqueInput
  }

  export type ordersUpdateOneWithoutWhatsapp_messagesNestedInput = {
    create?: XOR<ordersCreateWithoutWhatsapp_messagesInput, ordersUncheckedCreateWithoutWhatsapp_messagesInput>
    connectOrCreate?: ordersCreateOrConnectWithoutWhatsapp_messagesInput
    upsert?: ordersUpsertWithoutWhatsapp_messagesInput
    disconnect?: ordersWhereInput | boolean
    delete?: ordersWhereInput | boolean
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutWhatsapp_messagesInput, ordersUpdateWithoutWhatsapp_messagesInput>, ordersUncheckedUpdateWithoutWhatsapp_messagesInput>
  }

  export type storesUpdateOneWithoutWhatsapp_messagesNestedInput = {
    create?: XOR<storesCreateWithoutWhatsapp_messagesInput, storesUncheckedCreateWithoutWhatsapp_messagesInput>
    connectOrCreate?: storesCreateOrConnectWithoutWhatsapp_messagesInput
    upsert?: storesUpsertWithoutWhatsapp_messagesInput
    disconnect?: storesWhereInput | boolean
    delete?: storesWhereInput | boolean
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutWhatsapp_messagesInput, storesUpdateWithoutWhatsapp_messagesInput>, storesUncheckedUpdateWithoutWhatsapp_messagesInput>
  }

  export type storesCreateNestedOneWithoutWhatsapp_sessionsInput = {
    create?: XOR<storesCreateWithoutWhatsapp_sessionsInput, storesUncheckedCreateWithoutWhatsapp_sessionsInput>
    connectOrCreate?: storesCreateOrConnectWithoutWhatsapp_sessionsInput
    connect?: storesWhereUniqueInput
  }

  export type storesUpdateOneWithoutWhatsapp_sessionsNestedInput = {
    create?: XOR<storesCreateWithoutWhatsapp_sessionsInput, storesUncheckedCreateWithoutWhatsapp_sessionsInput>
    connectOrCreate?: storesCreateOrConnectWithoutWhatsapp_sessionsInput
    upsert?: storesUpsertWithoutWhatsapp_sessionsInput
    disconnect?: storesWhereInput | boolean
    delete?: storesWhereInput | boolean
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutWhatsapp_sessionsInput, storesUpdateWithoutWhatsapp_sessionsInput>, storesUncheckedUpdateWithoutWhatsapp_sessionsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type ordersCreateWithoutFulfillmentsInput = {
    shopify_order_id: bigint | number
    order_number?: string | null
    customer_name?: string | null
    customer_phone?: string | null
    status?: string | null
    placed_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    stores?: storesCreateNestedOneWithoutOrdersInput
    whatsapp_messages?: whatsapp_messagesCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutFulfillmentsInput = {
    id?: number
    shop_id?: number | null
    shopify_order_id: bigint | number
    order_number?: string | null
    customer_name?: string | null
    customer_phone?: string | null
    status?: string | null
    placed_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    whatsapp_messages?: whatsapp_messagesUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutFulfillmentsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutFulfillmentsInput, ordersUncheckedCreateWithoutFulfillmentsInput>
  }

  export type tracking_eventsCreateWithoutFulfillmentsInput = {
    status?: string | null
    status_code?: string | null
    location?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tracking_eventsUncheckedCreateWithoutFulfillmentsInput = {
    id?: number
    status?: string | null
    status_code?: string | null
    location?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tracking_eventsCreateOrConnectWithoutFulfillmentsInput = {
    where: tracking_eventsWhereUniqueInput
    create: XOR<tracking_eventsCreateWithoutFulfillmentsInput, tracking_eventsUncheckedCreateWithoutFulfillmentsInput>
  }

  export type tracking_eventsCreateManyFulfillmentsInputEnvelope = {
    data: tracking_eventsCreateManyFulfillmentsInput | tracking_eventsCreateManyFulfillmentsInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithoutFulfillmentsInput = {
    update: XOR<ordersUpdateWithoutFulfillmentsInput, ordersUncheckedUpdateWithoutFulfillmentsInput>
    create: XOR<ordersCreateWithoutFulfillmentsInput, ordersUncheckedCreateWithoutFulfillmentsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutFulfillmentsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutFulfillmentsInput, ordersUncheckedUpdateWithoutFulfillmentsInput>
  }

  export type ordersUpdateWithoutFulfillmentsInput = {
    shopify_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    placed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    stores?: storesUpdateOneWithoutOrdersNestedInput
    whatsapp_messages?: whatsapp_messagesUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutFulfillmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: NullableIntFieldUpdateOperationsInput | number | null
    shopify_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    placed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    whatsapp_messages?: whatsapp_messagesUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type tracking_eventsUpsertWithWhereUniqueWithoutFulfillmentsInput = {
    where: tracking_eventsWhereUniqueInput
    update: XOR<tracking_eventsUpdateWithoutFulfillmentsInput, tracking_eventsUncheckedUpdateWithoutFulfillmentsInput>
    create: XOR<tracking_eventsCreateWithoutFulfillmentsInput, tracking_eventsUncheckedCreateWithoutFulfillmentsInput>
  }

  export type tracking_eventsUpdateWithWhereUniqueWithoutFulfillmentsInput = {
    where: tracking_eventsWhereUniqueInput
    data: XOR<tracking_eventsUpdateWithoutFulfillmentsInput, tracking_eventsUncheckedUpdateWithoutFulfillmentsInput>
  }

  export type tracking_eventsUpdateManyWithWhereWithoutFulfillmentsInput = {
    where: tracking_eventsScalarWhereInput
    data: XOR<tracking_eventsUpdateManyMutationInput, tracking_eventsUncheckedUpdateManyWithoutFulfillmentsInput>
  }

  export type tracking_eventsScalarWhereInput = {
    AND?: tracking_eventsScalarWhereInput | tracking_eventsScalarWhereInput[]
    OR?: tracking_eventsScalarWhereInput[]
    NOT?: tracking_eventsScalarWhereInput | tracking_eventsScalarWhereInput[]
    id?: IntFilter<"tracking_events"> | number
    fulfillment_id?: IntNullableFilter<"tracking_events"> | number | null
    status?: StringNullableFilter<"tracking_events"> | string | null
    status_code?: StringNullableFilter<"tracking_events"> | string | null
    location?: StringNullableFilter<"tracking_events"> | string | null
    timestamp?: DateTimeNullableFilter<"tracking_events"> | Date | string | null
    meta_data?: JsonNullableFilter<"tracking_events">
  }

  export type fulfillmentsCreateWithoutOrdersInput = {
    tracking_number?: string | null
    courier_name?: string | null
    courier_code?: string | null
    status?: string | null
    delivered_at?: Date | string | null
    estimated_delivery?: Date | string | null
    last_checked_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    tracking_events?: tracking_eventsCreateNestedManyWithoutFulfillmentsInput
  }

  export type fulfillmentsUncheckedCreateWithoutOrdersInput = {
    id?: number
    tracking_number?: string | null
    courier_name?: string | null
    courier_code?: string | null
    status?: string | null
    delivered_at?: Date | string | null
    estimated_delivery?: Date | string | null
    last_checked_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    tracking_events?: tracking_eventsUncheckedCreateNestedManyWithoutFulfillmentsInput
  }

  export type fulfillmentsCreateOrConnectWithoutOrdersInput = {
    where: fulfillmentsWhereUniqueInput
    create: XOR<fulfillmentsCreateWithoutOrdersInput, fulfillmentsUncheckedCreateWithoutOrdersInput>
  }

  export type fulfillmentsCreateManyOrdersInputEnvelope = {
    data: fulfillmentsCreateManyOrdersInput | fulfillmentsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type storesCreateWithoutOrdersInput = {
    shopify_domain: string
    store_name?: string | null
    email?: string | null
    whatsapp_enabled?: boolean | null
    qr_connected?: boolean | null
    session_path?: string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    webhook_events?: webhook_eventsCreateNestedManyWithoutStoresInput
    whatsapp_messages?: whatsapp_messagesCreateNestedManyWithoutStoresInput
    whatsapp_sessions?: whatsapp_sessionsCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateWithoutOrdersInput = {
    id?: number
    shopify_domain: string
    store_name?: string | null
    email?: string | null
    whatsapp_enabled?: boolean | null
    qr_connected?: boolean | null
    session_path?: string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    webhook_events?: webhook_eventsUncheckedCreateNestedManyWithoutStoresInput
    whatsapp_messages?: whatsapp_messagesUncheckedCreateNestedManyWithoutStoresInput
    whatsapp_sessions?: whatsapp_sessionsUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesCreateOrConnectWithoutOrdersInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
  }

  export type whatsapp_messagesCreateWithoutOrdersInput = {
    customer_phone?: string | null
    message?: string | null
    status?: string | null
    attempt_count?: number | null
    error_log?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    stores?: storesCreateNestedOneWithoutWhatsapp_messagesInput
  }

  export type whatsapp_messagesUncheckedCreateWithoutOrdersInput = {
    id?: number
    store_id?: number | null
    customer_phone?: string | null
    message?: string | null
    status?: string | null
    attempt_count?: number | null
    error_log?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesCreateOrConnectWithoutOrdersInput = {
    where: whatsapp_messagesWhereUniqueInput
    create: XOR<whatsapp_messagesCreateWithoutOrdersInput, whatsapp_messagesUncheckedCreateWithoutOrdersInput>
  }

  export type whatsapp_messagesCreateManyOrdersInputEnvelope = {
    data: whatsapp_messagesCreateManyOrdersInput | whatsapp_messagesCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type fulfillmentsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: fulfillmentsWhereUniqueInput
    update: XOR<fulfillmentsUpdateWithoutOrdersInput, fulfillmentsUncheckedUpdateWithoutOrdersInput>
    create: XOR<fulfillmentsCreateWithoutOrdersInput, fulfillmentsUncheckedCreateWithoutOrdersInput>
  }

  export type fulfillmentsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: fulfillmentsWhereUniqueInput
    data: XOR<fulfillmentsUpdateWithoutOrdersInput, fulfillmentsUncheckedUpdateWithoutOrdersInput>
  }

  export type fulfillmentsUpdateManyWithWhereWithoutOrdersInput = {
    where: fulfillmentsScalarWhereInput
    data: XOR<fulfillmentsUpdateManyMutationInput, fulfillmentsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type fulfillmentsScalarWhereInput = {
    AND?: fulfillmentsScalarWhereInput | fulfillmentsScalarWhereInput[]
    OR?: fulfillmentsScalarWhereInput[]
    NOT?: fulfillmentsScalarWhereInput | fulfillmentsScalarWhereInput[]
    id?: IntFilter<"fulfillments"> | number
    order_id?: IntNullableFilter<"fulfillments"> | number | null
    tracking_number?: StringNullableFilter<"fulfillments"> | string | null
    courier_name?: StringNullableFilter<"fulfillments"> | string | null
    courier_code?: StringNullableFilter<"fulfillments"> | string | null
    status?: StringNullableFilter<"fulfillments"> | string | null
    delivered_at?: DateTimeNullableFilter<"fulfillments"> | Date | string | null
    estimated_delivery?: DateTimeNullableFilter<"fulfillments"> | Date | string | null
    last_checked_at?: DateTimeNullableFilter<"fulfillments"> | Date | string | null
    created_at?: DateTimeNullableFilter<"fulfillments"> | Date | string | null
    meta_data?: JsonNullableFilter<"fulfillments">
  }

  export type storesUpsertWithoutOrdersInput = {
    update: XOR<storesUpdateWithoutOrdersInput, storesUncheckedUpdateWithoutOrdersInput>
    create: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutOrdersInput, storesUncheckedUpdateWithoutOrdersInput>
  }

  export type storesUpdateWithoutOrdersInput = {
    shopify_domain?: StringFieldUpdateOperationsInput | string
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qr_connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    webhook_events?: webhook_eventsUpdateManyWithoutStoresNestedInput
    whatsapp_messages?: whatsapp_messagesUpdateManyWithoutStoresNestedInput
    whatsapp_sessions?: whatsapp_sessionsUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopify_domain?: StringFieldUpdateOperationsInput | string
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qr_connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    webhook_events?: webhook_eventsUncheckedUpdateManyWithoutStoresNestedInput
    whatsapp_messages?: whatsapp_messagesUncheckedUpdateManyWithoutStoresNestedInput
    whatsapp_sessions?: whatsapp_sessionsUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type whatsapp_messagesUpsertWithWhereUniqueWithoutOrdersInput = {
    where: whatsapp_messagesWhereUniqueInput
    update: XOR<whatsapp_messagesUpdateWithoutOrdersInput, whatsapp_messagesUncheckedUpdateWithoutOrdersInput>
    create: XOR<whatsapp_messagesCreateWithoutOrdersInput, whatsapp_messagesUncheckedCreateWithoutOrdersInput>
  }

  export type whatsapp_messagesUpdateWithWhereUniqueWithoutOrdersInput = {
    where: whatsapp_messagesWhereUniqueInput
    data: XOR<whatsapp_messagesUpdateWithoutOrdersInput, whatsapp_messagesUncheckedUpdateWithoutOrdersInput>
  }

  export type whatsapp_messagesUpdateManyWithWhereWithoutOrdersInput = {
    where: whatsapp_messagesScalarWhereInput
    data: XOR<whatsapp_messagesUpdateManyMutationInput, whatsapp_messagesUncheckedUpdateManyWithoutOrdersInput>
  }

  export type whatsapp_messagesScalarWhereInput = {
    AND?: whatsapp_messagesScalarWhereInput | whatsapp_messagesScalarWhereInput[]
    OR?: whatsapp_messagesScalarWhereInput[]
    NOT?: whatsapp_messagesScalarWhereInput | whatsapp_messagesScalarWhereInput[]
    id?: IntFilter<"whatsapp_messages"> | number
    store_id?: IntNullableFilter<"whatsapp_messages"> | number | null
    order_id?: IntNullableFilter<"whatsapp_messages"> | number | null
    customer_phone?: StringNullableFilter<"whatsapp_messages"> | string | null
    message?: StringNullableFilter<"whatsapp_messages"> | string | null
    status?: StringNullableFilter<"whatsapp_messages"> | string | null
    attempt_count?: IntNullableFilter<"whatsapp_messages"> | number | null
    error_log?: StringNullableFilter<"whatsapp_messages"> | string | null
    timestamp?: DateTimeNullableFilter<"whatsapp_messages"> | Date | string | null
    meta_data?: JsonNullableFilter<"whatsapp_messages">
  }

  export type ordersCreateWithoutStoresInput = {
    shopify_order_id: bigint | number
    order_number?: string | null
    customer_name?: string | null
    customer_phone?: string | null
    status?: string | null
    placed_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsCreateNestedManyWithoutOrdersInput
    whatsapp_messages?: whatsapp_messagesCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutStoresInput = {
    id?: number
    shopify_order_id: bigint | number
    order_number?: string | null
    customer_name?: string | null
    customer_phone?: string | null
    status?: string | null
    placed_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsUncheckedCreateNestedManyWithoutOrdersInput
    whatsapp_messages?: whatsapp_messagesUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutStoresInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput>
  }

  export type ordersCreateManyStoresInputEnvelope = {
    data: ordersCreateManyStoresInput | ordersCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type webhook_eventsCreateWithoutStoresInput = {
    event_type?: string | null
    order_id?: string | null
    tracking_number?: string | null
    tracking_url?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
    status?: string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type webhook_eventsUncheckedCreateWithoutStoresInput = {
    id?: number
    event_type?: string | null
    order_id?: string | null
    tracking_number?: string | null
    tracking_url?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
    status?: string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type webhook_eventsCreateOrConnectWithoutStoresInput = {
    where: webhook_eventsWhereUniqueInput
    create: XOR<webhook_eventsCreateWithoutStoresInput, webhook_eventsUncheckedCreateWithoutStoresInput>
  }

  export type webhook_eventsCreateManyStoresInputEnvelope = {
    data: webhook_eventsCreateManyStoresInput | webhook_eventsCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type whatsapp_messagesCreateWithoutStoresInput = {
    customer_phone?: string | null
    message?: string | null
    status?: string | null
    attempt_count?: number | null
    error_log?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersCreateNestedOneWithoutWhatsapp_messagesInput
  }

  export type whatsapp_messagesUncheckedCreateWithoutStoresInput = {
    id?: number
    order_id?: number | null
    customer_phone?: string | null
    message?: string | null
    status?: string | null
    attempt_count?: number | null
    error_log?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesCreateOrConnectWithoutStoresInput = {
    where: whatsapp_messagesWhereUniqueInput
    create: XOR<whatsapp_messagesCreateWithoutStoresInput, whatsapp_messagesUncheckedCreateWithoutStoresInput>
  }

  export type whatsapp_messagesCreateManyStoresInputEnvelope = {
    data: whatsapp_messagesCreateManyStoresInput | whatsapp_messagesCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type whatsapp_sessionsCreateWithoutStoresInput = {
    client_id: string
    status?: string | null
    session_path?: string | null
    last_seen?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_sessionsUncheckedCreateWithoutStoresInput = {
    id?: number
    client_id: string
    status?: string | null
    session_path?: string | null
    last_seen?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_sessionsCreateOrConnectWithoutStoresInput = {
    where: whatsapp_sessionsWhereUniqueInput
    create: XOR<whatsapp_sessionsCreateWithoutStoresInput, whatsapp_sessionsUncheckedCreateWithoutStoresInput>
  }

  export type whatsapp_sessionsCreateManyStoresInputEnvelope = {
    data: whatsapp_sessionsCreateManyStoresInput | whatsapp_sessionsCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutStoresInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutStoresInput, ordersUncheckedUpdateWithoutStoresInput>
    create: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutStoresInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutStoresInput, ordersUncheckedUpdateWithoutStoresInput>
  }

  export type ordersUpdateManyWithWhereWithoutStoresInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutStoresInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    shop_id?: IntNullableFilter<"orders"> | number | null
    shopify_order_id?: BigIntFilter<"orders"> | bigint | number
    order_number?: StringNullableFilter<"orders"> | string | null
    customer_name?: StringNullableFilter<"orders"> | string | null
    customer_phone?: StringNullableFilter<"orders"> | string | null
    status?: StringNullableFilter<"orders"> | string | null
    placed_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    meta_data?: JsonNullableFilter<"orders">
  }

  export type webhook_eventsUpsertWithWhereUniqueWithoutStoresInput = {
    where: webhook_eventsWhereUniqueInput
    update: XOR<webhook_eventsUpdateWithoutStoresInput, webhook_eventsUncheckedUpdateWithoutStoresInput>
    create: XOR<webhook_eventsCreateWithoutStoresInput, webhook_eventsUncheckedCreateWithoutStoresInput>
  }

  export type webhook_eventsUpdateWithWhereUniqueWithoutStoresInput = {
    where: webhook_eventsWhereUniqueInput
    data: XOR<webhook_eventsUpdateWithoutStoresInput, webhook_eventsUncheckedUpdateWithoutStoresInput>
  }

  export type webhook_eventsUpdateManyWithWhereWithoutStoresInput = {
    where: webhook_eventsScalarWhereInput
    data: XOR<webhook_eventsUpdateManyMutationInput, webhook_eventsUncheckedUpdateManyWithoutStoresInput>
  }

  export type webhook_eventsScalarWhereInput = {
    AND?: webhook_eventsScalarWhereInput | webhook_eventsScalarWhereInput[]
    OR?: webhook_eventsScalarWhereInput[]
    NOT?: webhook_eventsScalarWhereInput | webhook_eventsScalarWhereInput[]
    id?: IntFilter<"webhook_events"> | number
    store_id?: IntNullableFilter<"webhook_events"> | number | null
    event_type?: StringNullableFilter<"webhook_events"> | string | null
    order_id?: StringNullableFilter<"webhook_events"> | string | null
    tracking_number?: StringNullableFilter<"webhook_events"> | string | null
    tracking_url?: StringNullableFilter<"webhook_events"> | string | null
    payload?: JsonNullableFilter<"webhook_events">
    timestamp?: DateTimeNullableFilter<"webhook_events"> | Date | string | null
    status?: StringNullableFilter<"webhook_events"> | string | null
    meta_data?: JsonNullableFilter<"webhook_events">
  }

  export type whatsapp_messagesUpsertWithWhereUniqueWithoutStoresInput = {
    where: whatsapp_messagesWhereUniqueInput
    update: XOR<whatsapp_messagesUpdateWithoutStoresInput, whatsapp_messagesUncheckedUpdateWithoutStoresInput>
    create: XOR<whatsapp_messagesCreateWithoutStoresInput, whatsapp_messagesUncheckedCreateWithoutStoresInput>
  }

  export type whatsapp_messagesUpdateWithWhereUniqueWithoutStoresInput = {
    where: whatsapp_messagesWhereUniqueInput
    data: XOR<whatsapp_messagesUpdateWithoutStoresInput, whatsapp_messagesUncheckedUpdateWithoutStoresInput>
  }

  export type whatsapp_messagesUpdateManyWithWhereWithoutStoresInput = {
    where: whatsapp_messagesScalarWhereInput
    data: XOR<whatsapp_messagesUpdateManyMutationInput, whatsapp_messagesUncheckedUpdateManyWithoutStoresInput>
  }

  export type whatsapp_sessionsUpsertWithWhereUniqueWithoutStoresInput = {
    where: whatsapp_sessionsWhereUniqueInput
    update: XOR<whatsapp_sessionsUpdateWithoutStoresInput, whatsapp_sessionsUncheckedUpdateWithoutStoresInput>
    create: XOR<whatsapp_sessionsCreateWithoutStoresInput, whatsapp_sessionsUncheckedCreateWithoutStoresInput>
  }

  export type whatsapp_sessionsUpdateWithWhereUniqueWithoutStoresInput = {
    where: whatsapp_sessionsWhereUniqueInput
    data: XOR<whatsapp_sessionsUpdateWithoutStoresInput, whatsapp_sessionsUncheckedUpdateWithoutStoresInput>
  }

  export type whatsapp_sessionsUpdateManyWithWhereWithoutStoresInput = {
    where: whatsapp_sessionsScalarWhereInput
    data: XOR<whatsapp_sessionsUpdateManyMutationInput, whatsapp_sessionsUncheckedUpdateManyWithoutStoresInput>
  }

  export type whatsapp_sessionsScalarWhereInput = {
    AND?: whatsapp_sessionsScalarWhereInput | whatsapp_sessionsScalarWhereInput[]
    OR?: whatsapp_sessionsScalarWhereInput[]
    NOT?: whatsapp_sessionsScalarWhereInput | whatsapp_sessionsScalarWhereInput[]
    id?: IntFilter<"whatsapp_sessions"> | number
    store_id?: IntNullableFilter<"whatsapp_sessions"> | number | null
    client_id?: StringFilter<"whatsapp_sessions"> | string
    status?: StringNullableFilter<"whatsapp_sessions"> | string | null
    session_path?: StringNullableFilter<"whatsapp_sessions"> | string | null
    last_seen?: DateTimeNullableFilter<"whatsapp_sessions"> | Date | string | null
    created_at?: DateTimeNullableFilter<"whatsapp_sessions"> | Date | string | null
    meta_data?: JsonNullableFilter<"whatsapp_sessions">
  }

  export type fulfillmentsCreateWithoutTracking_eventsInput = {
    tracking_number?: string | null
    courier_name?: string | null
    courier_code?: string | null
    status?: string | null
    delivered_at?: Date | string | null
    estimated_delivery?: Date | string | null
    last_checked_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersCreateNestedOneWithoutFulfillmentsInput
  }

  export type fulfillmentsUncheckedCreateWithoutTracking_eventsInput = {
    id?: number
    order_id?: number | null
    tracking_number?: string | null
    courier_name?: string | null
    courier_code?: string | null
    status?: string | null
    delivered_at?: Date | string | null
    estimated_delivery?: Date | string | null
    last_checked_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type fulfillmentsCreateOrConnectWithoutTracking_eventsInput = {
    where: fulfillmentsWhereUniqueInput
    create: XOR<fulfillmentsCreateWithoutTracking_eventsInput, fulfillmentsUncheckedCreateWithoutTracking_eventsInput>
  }

  export type fulfillmentsUpsertWithoutTracking_eventsInput = {
    update: XOR<fulfillmentsUpdateWithoutTracking_eventsInput, fulfillmentsUncheckedUpdateWithoutTracking_eventsInput>
    create: XOR<fulfillmentsCreateWithoutTracking_eventsInput, fulfillmentsUncheckedCreateWithoutTracking_eventsInput>
    where?: fulfillmentsWhereInput
  }

  export type fulfillmentsUpdateToOneWithWhereWithoutTracking_eventsInput = {
    where?: fulfillmentsWhereInput
    data: XOR<fulfillmentsUpdateWithoutTracking_eventsInput, fulfillmentsUncheckedUpdateWithoutTracking_eventsInput>
  }

  export type fulfillmentsUpdateWithoutTracking_eventsInput = {
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    courier_name?: NullableStringFieldUpdateOperationsInput | string | null
    courier_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUpdateOneWithoutFulfillmentsNestedInput
  }

  export type fulfillmentsUncheckedUpdateWithoutTracking_eventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    courier_name?: NullableStringFieldUpdateOperationsInput | string | null
    courier_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type storesCreateWithoutWebhook_eventsInput = {
    shopify_domain: string
    store_name?: string | null
    email?: string | null
    whatsapp_enabled?: boolean | null
    qr_connected?: boolean | null
    session_path?: string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersCreateNestedManyWithoutStoresInput
    whatsapp_messages?: whatsapp_messagesCreateNestedManyWithoutStoresInput
    whatsapp_sessions?: whatsapp_sessionsCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateWithoutWebhook_eventsInput = {
    id?: number
    shopify_domain: string
    store_name?: string | null
    email?: string | null
    whatsapp_enabled?: boolean | null
    qr_connected?: boolean | null
    session_path?: string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUncheckedCreateNestedManyWithoutStoresInput
    whatsapp_messages?: whatsapp_messagesUncheckedCreateNestedManyWithoutStoresInput
    whatsapp_sessions?: whatsapp_sessionsUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesCreateOrConnectWithoutWebhook_eventsInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutWebhook_eventsInput, storesUncheckedCreateWithoutWebhook_eventsInput>
  }

  export type storesUpsertWithoutWebhook_eventsInput = {
    update: XOR<storesUpdateWithoutWebhook_eventsInput, storesUncheckedUpdateWithoutWebhook_eventsInput>
    create: XOR<storesCreateWithoutWebhook_eventsInput, storesUncheckedCreateWithoutWebhook_eventsInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutWebhook_eventsInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutWebhook_eventsInput, storesUncheckedUpdateWithoutWebhook_eventsInput>
  }

  export type storesUpdateWithoutWebhook_eventsInput = {
    shopify_domain?: StringFieldUpdateOperationsInput | string
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qr_connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUpdateManyWithoutStoresNestedInput
    whatsapp_messages?: whatsapp_messagesUpdateManyWithoutStoresNestedInput
    whatsapp_sessions?: whatsapp_sessionsUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateWithoutWebhook_eventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopify_domain?: StringFieldUpdateOperationsInput | string
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qr_connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUncheckedUpdateManyWithoutStoresNestedInput
    whatsapp_messages?: whatsapp_messagesUncheckedUpdateManyWithoutStoresNestedInput
    whatsapp_sessions?: whatsapp_sessionsUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type ordersCreateWithoutWhatsapp_messagesInput = {
    shopify_order_id: bigint | number
    order_number?: string | null
    customer_name?: string | null
    customer_phone?: string | null
    status?: string | null
    placed_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsCreateNestedManyWithoutOrdersInput
    stores?: storesCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutWhatsapp_messagesInput = {
    id?: number
    shop_id?: number | null
    shopify_order_id: bigint | number
    order_number?: string | null
    customer_name?: string | null
    customer_phone?: string | null
    status?: string | null
    placed_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutWhatsapp_messagesInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutWhatsapp_messagesInput, ordersUncheckedCreateWithoutWhatsapp_messagesInput>
  }

  export type storesCreateWithoutWhatsapp_messagesInput = {
    shopify_domain: string
    store_name?: string | null
    email?: string | null
    whatsapp_enabled?: boolean | null
    qr_connected?: boolean | null
    session_path?: string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersCreateNestedManyWithoutStoresInput
    webhook_events?: webhook_eventsCreateNestedManyWithoutStoresInput
    whatsapp_sessions?: whatsapp_sessionsCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateWithoutWhatsapp_messagesInput = {
    id?: number
    shopify_domain: string
    store_name?: string | null
    email?: string | null
    whatsapp_enabled?: boolean | null
    qr_connected?: boolean | null
    session_path?: string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUncheckedCreateNestedManyWithoutStoresInput
    webhook_events?: webhook_eventsUncheckedCreateNestedManyWithoutStoresInput
    whatsapp_sessions?: whatsapp_sessionsUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesCreateOrConnectWithoutWhatsapp_messagesInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutWhatsapp_messagesInput, storesUncheckedCreateWithoutWhatsapp_messagesInput>
  }

  export type ordersUpsertWithoutWhatsapp_messagesInput = {
    update: XOR<ordersUpdateWithoutWhatsapp_messagesInput, ordersUncheckedUpdateWithoutWhatsapp_messagesInput>
    create: XOR<ordersCreateWithoutWhatsapp_messagesInput, ordersUncheckedCreateWithoutWhatsapp_messagesInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutWhatsapp_messagesInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutWhatsapp_messagesInput, ordersUncheckedUpdateWithoutWhatsapp_messagesInput>
  }

  export type ordersUpdateWithoutWhatsapp_messagesInput = {
    shopify_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    placed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsUpdateManyWithoutOrdersNestedInput
    stores?: storesUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutWhatsapp_messagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    shop_id?: NullableIntFieldUpdateOperationsInput | number | null
    shopify_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    placed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type storesUpsertWithoutWhatsapp_messagesInput = {
    update: XOR<storesUpdateWithoutWhatsapp_messagesInput, storesUncheckedUpdateWithoutWhatsapp_messagesInput>
    create: XOR<storesCreateWithoutWhatsapp_messagesInput, storesUncheckedCreateWithoutWhatsapp_messagesInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutWhatsapp_messagesInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutWhatsapp_messagesInput, storesUncheckedUpdateWithoutWhatsapp_messagesInput>
  }

  export type storesUpdateWithoutWhatsapp_messagesInput = {
    shopify_domain?: StringFieldUpdateOperationsInput | string
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qr_connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUpdateManyWithoutStoresNestedInput
    webhook_events?: webhook_eventsUpdateManyWithoutStoresNestedInput
    whatsapp_sessions?: whatsapp_sessionsUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateWithoutWhatsapp_messagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopify_domain?: StringFieldUpdateOperationsInput | string
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qr_connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUncheckedUpdateManyWithoutStoresNestedInput
    webhook_events?: webhook_eventsUncheckedUpdateManyWithoutStoresNestedInput
    whatsapp_sessions?: whatsapp_sessionsUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type storesCreateWithoutWhatsapp_sessionsInput = {
    shopify_domain: string
    store_name?: string | null
    email?: string | null
    whatsapp_enabled?: boolean | null
    qr_connected?: boolean | null
    session_path?: string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersCreateNestedManyWithoutStoresInput
    webhook_events?: webhook_eventsCreateNestedManyWithoutStoresInput
    whatsapp_messages?: whatsapp_messagesCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateWithoutWhatsapp_sessionsInput = {
    id?: number
    shopify_domain: string
    store_name?: string | null
    email?: string | null
    whatsapp_enabled?: boolean | null
    qr_connected?: boolean | null
    session_path?: string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUncheckedCreateNestedManyWithoutStoresInput
    webhook_events?: webhook_eventsUncheckedCreateNestedManyWithoutStoresInput
    whatsapp_messages?: whatsapp_messagesUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesCreateOrConnectWithoutWhatsapp_sessionsInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutWhatsapp_sessionsInput, storesUncheckedCreateWithoutWhatsapp_sessionsInput>
  }

  export type storesUpsertWithoutWhatsapp_sessionsInput = {
    update: XOR<storesUpdateWithoutWhatsapp_sessionsInput, storesUncheckedUpdateWithoutWhatsapp_sessionsInput>
    create: XOR<storesCreateWithoutWhatsapp_sessionsInput, storesUncheckedCreateWithoutWhatsapp_sessionsInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutWhatsapp_sessionsInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutWhatsapp_sessionsInput, storesUncheckedUpdateWithoutWhatsapp_sessionsInput>
  }

  export type storesUpdateWithoutWhatsapp_sessionsInput = {
    shopify_domain?: StringFieldUpdateOperationsInput | string
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qr_connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUpdateManyWithoutStoresNestedInput
    webhook_events?: webhook_eventsUpdateManyWithoutStoresNestedInput
    whatsapp_messages?: whatsapp_messagesUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateWithoutWhatsapp_sessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopify_domain?: StringFieldUpdateOperationsInput | string
    store_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    qr_connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUncheckedUpdateManyWithoutStoresNestedInput
    webhook_events?: webhook_eventsUncheckedUpdateManyWithoutStoresNestedInput
    whatsapp_messages?: whatsapp_messagesUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type tracking_eventsCreateManyFulfillmentsInput = {
    id?: number
    status?: string | null
    status_code?: string | null
    location?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tracking_eventsUpdateWithoutFulfillmentsInput = {
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tracking_eventsUncheckedUpdateWithoutFulfillmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tracking_eventsUncheckedUpdateManyWithoutFulfillmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_code?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type fulfillmentsCreateManyOrdersInput = {
    id?: number
    tracking_number?: string | null
    courier_name?: string | null
    courier_code?: string | null
    status?: string | null
    delivered_at?: Date | string | null
    estimated_delivery?: Date | string | null
    last_checked_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesCreateManyOrdersInput = {
    id?: number
    store_id?: number | null
    customer_phone?: string | null
    message?: string | null
    status?: string | null
    attempt_count?: number | null
    error_log?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type fulfillmentsUpdateWithoutOrdersInput = {
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    courier_name?: NullableStringFieldUpdateOperationsInput | string | null
    courier_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    tracking_events?: tracking_eventsUpdateManyWithoutFulfillmentsNestedInput
  }

  export type fulfillmentsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    courier_name?: NullableStringFieldUpdateOperationsInput | string | null
    courier_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    tracking_events?: tracking_eventsUncheckedUpdateManyWithoutFulfillmentsNestedInput
  }

  export type fulfillmentsUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    courier_name?: NullableStringFieldUpdateOperationsInput | string | null
    courier_code?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_checked_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesUpdateWithoutOrdersInput = {
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempt_count?: NullableIntFieldUpdateOperationsInput | number | null
    error_log?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    stores?: storesUpdateOneWithoutWhatsapp_messagesNestedInput
  }

  export type whatsapp_messagesUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempt_count?: NullableIntFieldUpdateOperationsInput | number | null
    error_log?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempt_count?: NullableIntFieldUpdateOperationsInput | number | null
    error_log?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ordersCreateManyStoresInput = {
    id?: number
    shopify_order_id: bigint | number
    order_number?: string | null
    customer_name?: string | null
    customer_phone?: string | null
    status?: string | null
    placed_at?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type webhook_eventsCreateManyStoresInput = {
    id?: number
    event_type?: string | null
    order_id?: string | null
    tracking_number?: string | null
    tracking_url?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
    status?: string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesCreateManyStoresInput = {
    id?: number
    order_id?: number | null
    customer_phone?: string | null
    message?: string | null
    status?: string | null
    attempt_count?: number | null
    error_log?: string | null
    timestamp?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_sessionsCreateManyStoresInput = {
    id?: number
    client_id: string
    status?: string | null
    session_path?: string | null
    last_seen?: Date | string | null
    created_at?: Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ordersUpdateWithoutStoresInput = {
    shopify_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    placed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsUpdateManyWithoutOrdersNestedInput
    whatsapp_messages?: whatsapp_messagesUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopify_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    placed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    fulfillments?: fulfillmentsUncheckedUpdateManyWithoutOrdersNestedInput
    whatsapp_messages?: whatsapp_messagesUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopify_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    order_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    placed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type webhook_eventsUpdateWithoutStoresInput = {
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_url?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type webhook_eventsUncheckedUpdateWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_url?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type webhook_eventsUncheckedUpdateManyWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_type?: NullableStringFieldUpdateOperationsInput | string | null
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_url?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesUpdateWithoutStoresInput = {
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempt_count?: NullableIntFieldUpdateOperationsInput | number | null
    error_log?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
    orders?: ordersUpdateOneWithoutWhatsapp_messagesNestedInput
  }

  export type whatsapp_messagesUncheckedUpdateWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempt_count?: NullableIntFieldUpdateOperationsInput | number | null
    error_log?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_messagesUncheckedUpdateManyWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    customer_phone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    attempt_count?: NullableIntFieldUpdateOperationsInput | number | null
    error_log?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_sessionsUpdateWithoutStoresInput = {
    client_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_sessionsUncheckedUpdateWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type whatsapp_sessionsUncheckedUpdateManyWithoutStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    session_path?: NullableStringFieldUpdateOperationsInput | string | null
    last_seen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meta_data?: NullableJsonNullValueInput | InputJsonValue
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