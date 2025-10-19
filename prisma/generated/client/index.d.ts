
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
 * Model admin
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model file
 * 
 */
export type file = $Result.DefaultSelection<Prisma.$filePayload>
/**
 * Model level_pendidikan
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type level_pendidikan = $Result.DefaultSelection<Prisma.$level_pendidikanPayload>
/**
 * Model peserta
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type peserta = $Result.DefaultSelection<Prisma.$pesertaPayload>
/**
 * Model t_kecamatan
 * 
 */
export type t_kecamatan = $Result.DefaultSelection<Prisma.$t_kecamatanPayload>
/**
 * Model t_kelurahan
 * 
 */
export type t_kelurahan = $Result.DefaultSelection<Prisma.$t_kelurahanPayload>
/**
 * Model t_kota
 * 
 */
export type t_kota = $Result.DefaultSelection<Prisma.$t_kotaPayload>
/**
 * Model t_provinsi
 * 
 */
export type t_provinsi = $Result.DefaultSelection<Prisma.$t_provinsiPayload>
/**
 * Model user
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_permission
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type user_permission = $Result.DefaultSelection<Prisma.$user_permissionPayload>
/**
 * Model user_role
 * 
 */
export type user_role = $Result.DefaultSelection<Prisma.$user_rolePayload>
/**
 * Model user_role_permission
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type user_role_permission = $Result.DefaultSelection<Prisma.$user_role_permissionPayload>
/**
 * Model user_token
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type user_token = $Result.DefaultSelection<Prisma.$user_tokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const peserta_kewarganegaraan: {
  WNI: 'WNI',
  WNA: 'WNA'
};

export type peserta_kewarganegaraan = (typeof peserta_kewarganegaraan)[keyof typeof peserta_kewarganegaraan]


export const peserta_jenis_kelamin: {
  L: 'L',
  P: 'P'
};

export type peserta_jenis_kelamin = (typeof peserta_jenis_kelamin)[keyof typeof peserta_jenis_kelamin]

}

export type peserta_kewarganegaraan = $Enums.peserta_kewarganegaraan

export const peserta_kewarganegaraan: typeof $Enums.peserta_kewarganegaraan

export type peserta_jenis_kelamin = $Enums.peserta_jenis_kelamin

export const peserta_jenis_kelamin: typeof $Enums.peserta_jenis_kelamin

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **file** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.fileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.level_pendidikan`: Exposes CRUD operations for the **level_pendidikan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Level_pendidikans
    * const level_pendidikans = await prisma.level_pendidikan.findMany()
    * ```
    */
  get level_pendidikan(): Prisma.level_pendidikanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peserta`: Exposes CRUD operations for the **peserta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pesertas
    * const pesertas = await prisma.peserta.findMany()
    * ```
    */
  get peserta(): Prisma.pesertaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_kecamatan`: Exposes CRUD operations for the **t_kecamatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_kecamatans
    * const t_kecamatans = await prisma.t_kecamatan.findMany()
    * ```
    */
  get t_kecamatan(): Prisma.t_kecamatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_kelurahan`: Exposes CRUD operations for the **t_kelurahan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_kelurahans
    * const t_kelurahans = await prisma.t_kelurahan.findMany()
    * ```
    */
  get t_kelurahan(): Prisma.t_kelurahanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_kota`: Exposes CRUD operations for the **t_kota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_kotas
    * const t_kotas = await prisma.t_kota.findMany()
    * ```
    */
  get t_kota(): Prisma.t_kotaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_provinsi`: Exposes CRUD operations for the **t_provinsi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_provinsis
    * const t_provinsis = await prisma.t_provinsi.findMany()
    * ```
    */
  get t_provinsi(): Prisma.t_provinsiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_permission`: Exposes CRUD operations for the **user_permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_permissions
    * const user_permissions = await prisma.user_permission.findMany()
    * ```
    */
  get user_permission(): Prisma.user_permissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_role`: Exposes CRUD operations for the **user_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_roles
    * const user_roles = await prisma.user_role.findMany()
    * ```
    */
  get user_role(): Prisma.user_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_role_permission`: Exposes CRUD operations for the **user_role_permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_role_permissions
    * const user_role_permissions = await prisma.user_role_permission.findMany()
    * ```
    */
  get user_role_permission(): Prisma.user_role_permissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_token`: Exposes CRUD operations for the **user_token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_tokens
    * const user_tokens = await prisma.user_token.findMany()
    * ```
    */
  get user_token(): Prisma.user_tokenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    admin: 'admin',
    file: 'file',
    level_pendidikan: 'level_pendidikan',
    peserta: 'peserta',
    t_kecamatan: 't_kecamatan',
    t_kelurahan: 't_kelurahan',
    t_kota: 't_kota',
    t_provinsi: 't_provinsi',
    user: 'user',
    user_permission: 'user_permission',
    user_role: 'user_role',
    user_role_permission: 'user_role_permission',
    user_token: 'user_token'
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
      modelProps: "admin" | "file" | "level_pendidikan" | "peserta" | "t_kecamatan" | "t_kelurahan" | "t_kota" | "t_provinsi" | "user" | "user_permission" | "user_role" | "user_role_permission" | "user_token"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      file: {
        payload: Prisma.$filePayload<ExtArgs>
        fields: Prisma.fileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          findFirst: {
            args: Prisma.fileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          findMany: {
            args: Prisma.fileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>[]
          }
          create: {
            args: Prisma.fileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          createMany: {
            args: Prisma.fileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.fileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          update: {
            args: Prisma.fileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          deleteMany: {
            args: Prisma.fileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.fileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.fileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.fileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      level_pendidikan: {
        payload: Prisma.$level_pendidikanPayload<ExtArgs>
        fields: Prisma.level_pendidikanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.level_pendidikanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$level_pendidikanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.level_pendidikanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$level_pendidikanPayload>
          }
          findFirst: {
            args: Prisma.level_pendidikanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$level_pendidikanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.level_pendidikanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$level_pendidikanPayload>
          }
          findMany: {
            args: Prisma.level_pendidikanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$level_pendidikanPayload>[]
          }
          create: {
            args: Prisma.level_pendidikanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$level_pendidikanPayload>
          }
          createMany: {
            args: Prisma.level_pendidikanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.level_pendidikanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$level_pendidikanPayload>
          }
          update: {
            args: Prisma.level_pendidikanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$level_pendidikanPayload>
          }
          deleteMany: {
            args: Prisma.level_pendidikanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.level_pendidikanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.level_pendidikanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$level_pendidikanPayload>
          }
          aggregate: {
            args: Prisma.Level_pendidikanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevel_pendidikan>
          }
          groupBy: {
            args: Prisma.level_pendidikanGroupByArgs<ExtArgs>
            result: $Utils.Optional<Level_pendidikanGroupByOutputType>[]
          }
          count: {
            args: Prisma.level_pendidikanCountArgs<ExtArgs>
            result: $Utils.Optional<Level_pendidikanCountAggregateOutputType> | number
          }
        }
      }
      peserta: {
        payload: Prisma.$pesertaPayload<ExtArgs>
        fields: Prisma.pesertaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pesertaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pesertaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>
          }
          findFirst: {
            args: Prisma.pesertaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pesertaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>
          }
          findMany: {
            args: Prisma.pesertaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>[]
          }
          create: {
            args: Prisma.pesertaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>
          }
          createMany: {
            args: Prisma.pesertaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pesertaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>
          }
          update: {
            args: Prisma.pesertaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>
          }
          deleteMany: {
            args: Prisma.pesertaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pesertaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pesertaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pesertaPayload>
          }
          aggregate: {
            args: Prisma.PesertaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeserta>
          }
          groupBy: {
            args: Prisma.pesertaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesertaGroupByOutputType>[]
          }
          count: {
            args: Prisma.pesertaCountArgs<ExtArgs>
            result: $Utils.Optional<PesertaCountAggregateOutputType> | number
          }
        }
      }
      t_kecamatan: {
        payload: Prisma.$t_kecamatanPayload<ExtArgs>
        fields: Prisma.t_kecamatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_kecamatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kecamatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_kecamatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kecamatanPayload>
          }
          findFirst: {
            args: Prisma.t_kecamatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kecamatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_kecamatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kecamatanPayload>
          }
          findMany: {
            args: Prisma.t_kecamatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kecamatanPayload>[]
          }
          create: {
            args: Prisma.t_kecamatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kecamatanPayload>
          }
          createMany: {
            args: Prisma.t_kecamatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_kecamatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kecamatanPayload>
          }
          update: {
            args: Prisma.t_kecamatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kecamatanPayload>
          }
          deleteMany: {
            args: Prisma.t_kecamatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_kecamatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_kecamatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kecamatanPayload>
          }
          aggregate: {
            args: Prisma.T_kecamatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_kecamatan>
          }
          groupBy: {
            args: Prisma.t_kecamatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_kecamatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_kecamatanCountArgs<ExtArgs>
            result: $Utils.Optional<T_kecamatanCountAggregateOutputType> | number
          }
        }
      }
      t_kelurahan: {
        payload: Prisma.$t_kelurahanPayload<ExtArgs>
        fields: Prisma.t_kelurahanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_kelurahanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kelurahanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_kelurahanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kelurahanPayload>
          }
          findFirst: {
            args: Prisma.t_kelurahanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kelurahanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_kelurahanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kelurahanPayload>
          }
          findMany: {
            args: Prisma.t_kelurahanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kelurahanPayload>[]
          }
          create: {
            args: Prisma.t_kelurahanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kelurahanPayload>
          }
          createMany: {
            args: Prisma.t_kelurahanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_kelurahanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kelurahanPayload>
          }
          update: {
            args: Prisma.t_kelurahanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kelurahanPayload>
          }
          deleteMany: {
            args: Prisma.t_kelurahanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_kelurahanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_kelurahanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kelurahanPayload>
          }
          aggregate: {
            args: Prisma.T_kelurahanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_kelurahan>
          }
          groupBy: {
            args: Prisma.t_kelurahanGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_kelurahanGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_kelurahanCountArgs<ExtArgs>
            result: $Utils.Optional<T_kelurahanCountAggregateOutputType> | number
          }
        }
      }
      t_kota: {
        payload: Prisma.$t_kotaPayload<ExtArgs>
        fields: Prisma.t_kotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_kotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_kotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kotaPayload>
          }
          findFirst: {
            args: Prisma.t_kotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_kotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kotaPayload>
          }
          findMany: {
            args: Prisma.t_kotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kotaPayload>[]
          }
          create: {
            args: Prisma.t_kotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kotaPayload>
          }
          createMany: {
            args: Prisma.t_kotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_kotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kotaPayload>
          }
          update: {
            args: Prisma.t_kotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kotaPayload>
          }
          deleteMany: {
            args: Prisma.t_kotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_kotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_kotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_kotaPayload>
          }
          aggregate: {
            args: Prisma.T_kotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_kota>
          }
          groupBy: {
            args: Prisma.t_kotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_kotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_kotaCountArgs<ExtArgs>
            result: $Utils.Optional<T_kotaCountAggregateOutputType> | number
          }
        }
      }
      t_provinsi: {
        payload: Prisma.$t_provinsiPayload<ExtArgs>
        fields: Prisma.t_provinsiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.t_provinsiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_provinsiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.t_provinsiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_provinsiPayload>
          }
          findFirst: {
            args: Prisma.t_provinsiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_provinsiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.t_provinsiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_provinsiPayload>
          }
          findMany: {
            args: Prisma.t_provinsiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_provinsiPayload>[]
          }
          create: {
            args: Prisma.t_provinsiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_provinsiPayload>
          }
          createMany: {
            args: Prisma.t_provinsiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.t_provinsiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_provinsiPayload>
          }
          update: {
            args: Prisma.t_provinsiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_provinsiPayload>
          }
          deleteMany: {
            args: Prisma.t_provinsiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.t_provinsiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.t_provinsiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$t_provinsiPayload>
          }
          aggregate: {
            args: Prisma.T_provinsiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_provinsi>
          }
          groupBy: {
            args: Prisma.t_provinsiGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_provinsiGroupByOutputType>[]
          }
          count: {
            args: Prisma.t_provinsiCountArgs<ExtArgs>
            result: $Utils.Optional<T_provinsiCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      user_permission: {
        payload: Prisma.$user_permissionPayload<ExtArgs>
        fields: Prisma.user_permissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_permissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_permissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionPayload>
          }
          findFirst: {
            args: Prisma.user_permissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_permissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionPayload>
          }
          findMany: {
            args: Prisma.user_permissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionPayload>[]
          }
          create: {
            args: Prisma.user_permissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionPayload>
          }
          createMany: {
            args: Prisma.user_permissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_permissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionPayload>
          }
          update: {
            args: Prisma.user_permissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionPayload>
          }
          deleteMany: {
            args: Prisma.user_permissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_permissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_permissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionPayload>
          }
          aggregate: {
            args: Prisma.User_permissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_permission>
          }
          groupBy: {
            args: Prisma.user_permissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_permissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_permissionCountArgs<ExtArgs>
            result: $Utils.Optional<User_permissionCountAggregateOutputType> | number
          }
        }
      }
      user_role: {
        payload: Prisma.$user_rolePayload<ExtArgs>
        fields: Prisma.user_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          findFirst: {
            args: Prisma.user_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          findMany: {
            args: Prisma.user_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[]
          }
          create: {
            args: Prisma.user_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          createMany: {
            args: Prisma.user_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          update: {
            args: Prisma.user_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          deleteMany: {
            args: Prisma.user_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>
          }
          aggregate: {
            args: Prisma.User_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_role>
          }
          groupBy: {
            args: Prisma.user_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_roleCountArgs<ExtArgs>
            result: $Utils.Optional<User_roleCountAggregateOutputType> | number
          }
        }
      }
      user_role_permission: {
        payload: Prisma.$user_role_permissionPayload<ExtArgs>
        fields: Prisma.user_role_permissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_role_permissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_role_permissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_role_permissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_role_permissionPayload>
          }
          findFirst: {
            args: Prisma.user_role_permissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_role_permissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_role_permissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_role_permissionPayload>
          }
          findMany: {
            args: Prisma.user_role_permissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_role_permissionPayload>[]
          }
          create: {
            args: Prisma.user_role_permissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_role_permissionPayload>
          }
          createMany: {
            args: Prisma.user_role_permissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_role_permissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_role_permissionPayload>
          }
          update: {
            args: Prisma.user_role_permissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_role_permissionPayload>
          }
          deleteMany: {
            args: Prisma.user_role_permissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_role_permissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_role_permissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_role_permissionPayload>
          }
          aggregate: {
            args: Prisma.User_role_permissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_role_permission>
          }
          groupBy: {
            args: Prisma.user_role_permissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_role_permissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_role_permissionCountArgs<ExtArgs>
            result: $Utils.Optional<User_role_permissionCountAggregateOutputType> | number
          }
        }
      }
      user_token: {
        payload: Prisma.$user_tokenPayload<ExtArgs>
        fields: Prisma.user_tokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_tokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_tokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokenPayload>
          }
          findFirst: {
            args: Prisma.user_tokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_tokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokenPayload>
          }
          findMany: {
            args: Prisma.user_tokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokenPayload>[]
          }
          create: {
            args: Prisma.user_tokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokenPayload>
          }
          createMany: {
            args: Prisma.user_tokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_tokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokenPayload>
          }
          update: {
            args: Prisma.user_tokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokenPayload>
          }
          deleteMany: {
            args: Prisma.user_tokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_tokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_tokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tokenPayload>
          }
          aggregate: {
            args: Prisma.User_tokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_token>
          }
          groupBy: {
            args: Prisma.user_tokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_tokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_tokenCountArgs<ExtArgs>
            result: $Utils.Optional<User_tokenCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    admin?: adminOmit
    file?: fileOmit
    level_pendidikan?: level_pendidikanOmit
    peserta?: pesertaOmit
    t_kecamatan?: t_kecamatanOmit
    t_kelurahan?: t_kelurahanOmit
    t_kota?: t_kotaOmit
    t_provinsi?: t_provinsiOmit
    user?: userOmit
    user_permission?: user_permissionOmit
    user_role?: user_roleOmit
    user_role_permission?: user_role_permissionOmit
    user_token?: user_tokenOmit
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
   * Count Type PesertaCountOutputType
   */

  export type PesertaCountOutputType = {
    user: number
  }

  export type PesertaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PesertaCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * PesertaCountOutputType without action
   */
  export type PesertaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesertaCountOutputType
     */
    select?: PesertaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PesertaCountOutputType without action
   */
  export type PesertaCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    user_token: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_token?: boolean | UserCountOutputTypeCountUser_tokenArgs
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
  export type UserCountOutputTypeCountUser_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tokenWhereInput
  }


  /**
   * Count Type User_permissionCountOutputType
   */

  export type User_permissionCountOutputType = {
    user_role_permission: number
  }

  export type User_permissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_role_permission?: boolean | User_permissionCountOutputTypeCountUser_role_permissionArgs
  }

  // Custom InputTypes
  /**
   * User_permissionCountOutputType without action
   */
  export type User_permissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_permissionCountOutputType
     */
    select?: User_permissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_permissionCountOutputType without action
   */
  export type User_permissionCountOutputTypeCountUser_role_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_role_permissionWhereInput
  }


  /**
   * Count Type User_roleCountOutputType
   */

  export type User_roleCountOutputType = {
    user_role_permission: number
  }

  export type User_roleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_role_permission?: boolean | User_roleCountOutputTypeCountUser_role_permissionArgs
  }

  // Custom InputTypes
  /**
   * User_roleCountOutputType without action
   */
  export type User_roleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_roleCountOutputType
     */
    select?: User_roleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_roleCountOutputType without action
   */
  export type User_roleCountOutputTypeCountUser_role_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_role_permissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    status: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    uuid: string | null
    name: string
    status: number
    created_at: Date
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
    user?: boolean | admin$userArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "status" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_at", ExtArgs["result"]["admin"]>
  export type adminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | admin$userArgs<ExtArgs>
  }

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string | null
      name: string
      status: number
      created_at: Date
      updated_at: Date | null
      created_by: string | null
      updated_by: string | null
      deleted_at: Date | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends admin$userArgs<ExtArgs> = {}>(args?: Subset<T, admin$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly uuid: FieldRef<"admin", 'String'>
    readonly name: FieldRef<"admin", 'String'>
    readonly status: FieldRef<"admin", 'Int'>
    readonly created_at: FieldRef<"admin", 'DateTime'>
    readonly updated_at: FieldRef<"admin", 'DateTime'>
    readonly created_by: FieldRef<"admin", 'String'>
    readonly updated_by: FieldRef<"admin", 'String'>
    readonly deleted_at: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin.user
   */
  export type admin$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
  }


  /**
   * Model file
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type FileSumAggregateOutputType = {
    id: bigint | null
    size: number | null
  }

  export type FileMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    path: string | null
    name: string | null
    size: number | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type FileMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    path: string | null
    name: string | null
    size: number | null
    type: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    uuid: number
    path: number
    name: number
    size: number
    type: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
    size?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
    size?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    uuid?: true
    path?: true
    name?: true
    size?: true
    type?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    uuid?: true
    path?: true
    name?: true
    size?: true
    type?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    uuid?: true
    path?: true
    name?: true
    size?: true
    type?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which file to aggregate.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type fileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fileWhereInput
    orderBy?: fileOrderByWithAggregationInput | fileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: fileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: bigint
    uuid: string
    path: string
    name: string
    size: number
    type: string
    created_at: Date
    updated_at: Date | null
    created_by: string
    updated_by: string
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends fileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type fileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    path?: boolean
    name?: boolean
    size?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }, ExtArgs["result"]["file"]>



  export type fileSelectScalar = {
    id?: boolean
    uuid?: boolean
    path?: boolean
    name?: boolean
    size?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
  }

  export type fileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "path" | "name" | "size" | "type" | "created_at" | "updated_at" | "created_by" | "updated_by", ExtArgs["result"]["file"]>

  export type $filePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "file"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      path: string
      name: string
      size: number
      type: string
      created_at: Date
      updated_at: Date | null
      created_by: string
      updated_by: string
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type fileGetPayload<S extends boolean | null | undefined | fileDefaultArgs> = $Result.GetResult<Prisma.$filePayload, S>

  type fileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface fileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['file'], meta: { name: 'file' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {fileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fileFindUniqueArgs>(args: SelectSubset<T, fileFindUniqueArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fileFindUniqueOrThrowArgs>(args: SelectSubset<T, fileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fileFindFirstArgs>(args?: SelectSubset<T, fileFindFirstArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fileFindFirstOrThrowArgs>(args?: SelectSubset<T, fileFindFirstOrThrowArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fileFindManyArgs>(args?: SelectSubset<T, fileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {fileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends fileCreateArgs>(args: SelectSubset<T, fileCreateArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {fileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fileCreateManyArgs>(args?: SelectSubset<T, fileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a File.
     * @param {fileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends fileDeleteArgs>(args: SelectSubset<T, fileDeleteArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {fileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fileUpdateArgs>(args: SelectSubset<T, fileUpdateArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {fileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fileDeleteManyArgs>(args?: SelectSubset<T, fileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fileUpdateManyArgs>(args: SelectSubset<T, fileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {fileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends fileUpsertArgs>(args: SelectSubset<T, fileUpsertArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends fileCountArgs>(
      args?: Subset<T, fileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileGroupByArgs} args - Group by arguments.
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
      T extends fileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fileGroupByArgs['orderBy'] }
        : { orderBy?: fileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the file model
   */
  readonly fields: fileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for file.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the file model
   */
  interface fileFieldRefs {
    readonly id: FieldRef<"file", 'BigInt'>
    readonly uuid: FieldRef<"file", 'String'>
    readonly path: FieldRef<"file", 'String'>
    readonly name: FieldRef<"file", 'String'>
    readonly size: FieldRef<"file", 'Int'>
    readonly type: FieldRef<"file", 'String'>
    readonly created_at: FieldRef<"file", 'DateTime'>
    readonly updated_at: FieldRef<"file", 'DateTime'>
    readonly created_by: FieldRef<"file", 'String'>
    readonly updated_by: FieldRef<"file", 'String'>
  }
    

  // Custom InputTypes
  /**
   * file findUnique
   */
  export type fileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file findUniqueOrThrow
   */
  export type fileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file findFirst
   */
  export type fileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * file findFirstOrThrow
   */
  export type fileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * file findMany
   */
  export type fileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing files.
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * file create
   */
  export type fileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * The data needed to create a file.
     */
    data: XOR<fileCreateInput, fileUncheckedCreateInput>
  }

  /**
   * file createMany
   */
  export type fileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many files.
     */
    data: fileCreateManyInput | fileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * file update
   */
  export type fileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * The data needed to update a file.
     */
    data: XOR<fileUpdateInput, fileUncheckedUpdateInput>
    /**
     * Choose, which file to update.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file updateMany
   */
  export type fileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update files.
     */
    data: XOR<fileUpdateManyMutationInput, fileUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: fileWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
  }

  /**
   * file upsert
   */
  export type fileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * The filter to search for the file to update in case it exists.
     */
    where: fileWhereUniqueInput
    /**
     * In case the file found by the `where` argument doesn't exist, create a new file with this data.
     */
    create: XOR<fileCreateInput, fileUncheckedCreateInput>
    /**
     * In case the file was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fileUpdateInput, fileUncheckedUpdateInput>
  }

  /**
   * file delete
   */
  export type fileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Filter which file to delete.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file deleteMany
   */
  export type fileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to delete
     */
    where?: fileWhereInput
    /**
     * Limit how many files to delete.
     */
    limit?: number
  }

  /**
   * file without action
   */
  export type fileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
  }


  /**
   * Model level_pendidikan
   */

  export type AggregateLevel_pendidikan = {
    _count: Level_pendidikanCountAggregateOutputType | null
    _avg: Level_pendidikanAvgAggregateOutputType | null
    _sum: Level_pendidikanSumAggregateOutputType | null
    _min: Level_pendidikanMinAggregateOutputType | null
    _max: Level_pendidikanMaxAggregateOutputType | null
  }

  export type Level_pendidikanAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type Level_pendidikanSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type Level_pendidikanMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    nama: string | null
    keterangan: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type Level_pendidikanMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    nama: string | null
    keterangan: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type Level_pendidikanCountAggregateOutputType = {
    id: number
    uuid: number
    nama: number
    keterangan: number
    status: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type Level_pendidikanAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type Level_pendidikanSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type Level_pendidikanMinAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    keterangan?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type Level_pendidikanMaxAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    keterangan?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type Level_pendidikanCountAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    keterangan?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type Level_pendidikanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which level_pendidikan to aggregate.
     */
    where?: level_pendidikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of level_pendidikans to fetch.
     */
    orderBy?: level_pendidikanOrderByWithRelationInput | level_pendidikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: level_pendidikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` level_pendidikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` level_pendidikans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned level_pendidikans
    **/
    _count?: true | Level_pendidikanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Level_pendidikanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Level_pendidikanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Level_pendidikanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Level_pendidikanMaxAggregateInputType
  }

  export type GetLevel_pendidikanAggregateType<T extends Level_pendidikanAggregateArgs> = {
        [P in keyof T & keyof AggregateLevel_pendidikan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevel_pendidikan[P]>
      : GetScalarType<T[P], AggregateLevel_pendidikan[P]>
  }




  export type level_pendidikanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: level_pendidikanWhereInput
    orderBy?: level_pendidikanOrderByWithAggregationInput | level_pendidikanOrderByWithAggregationInput[]
    by: Level_pendidikanScalarFieldEnum[] | Level_pendidikanScalarFieldEnum
    having?: level_pendidikanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Level_pendidikanCountAggregateInputType | true
    _avg?: Level_pendidikanAvgAggregateInputType
    _sum?: Level_pendidikanSumAggregateInputType
    _min?: Level_pendidikanMinAggregateInputType
    _max?: Level_pendidikanMaxAggregateInputType
  }

  export type Level_pendidikanGroupByOutputType = {
    id: number
    uuid: string
    nama: string
    keterangan: string | null
    status: number
    created_at: Date
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
    _count: Level_pendidikanCountAggregateOutputType | null
    _avg: Level_pendidikanAvgAggregateOutputType | null
    _sum: Level_pendidikanSumAggregateOutputType | null
    _min: Level_pendidikanMinAggregateOutputType | null
    _max: Level_pendidikanMaxAggregateOutputType | null
  }

  type GetLevel_pendidikanGroupByPayload<T extends level_pendidikanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Level_pendidikanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Level_pendidikanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Level_pendidikanGroupByOutputType[P]>
            : GetScalarType<T[P], Level_pendidikanGroupByOutputType[P]>
        }
      >
    >


  export type level_pendidikanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nama?: boolean
    keterangan?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["level_pendidikan"]>



  export type level_pendidikanSelectScalar = {
    id?: boolean
    uuid?: boolean
    nama?: boolean
    keterangan?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type level_pendidikanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "nama" | "keterangan" | "status" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_at", ExtArgs["result"]["level_pendidikan"]>

  export type $level_pendidikanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "level_pendidikan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      nama: string
      keterangan: string | null
      status: number
      created_at: Date
      updated_at: Date | null
      created_by: string | null
      updated_by: string | null
      deleted_at: Date | null
    }, ExtArgs["result"]["level_pendidikan"]>
    composites: {}
  }

  type level_pendidikanGetPayload<S extends boolean | null | undefined | level_pendidikanDefaultArgs> = $Result.GetResult<Prisma.$level_pendidikanPayload, S>

  type level_pendidikanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<level_pendidikanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Level_pendidikanCountAggregateInputType | true
    }

  export interface level_pendidikanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['level_pendidikan'], meta: { name: 'level_pendidikan' } }
    /**
     * Find zero or one Level_pendidikan that matches the filter.
     * @param {level_pendidikanFindUniqueArgs} args - Arguments to find a Level_pendidikan
     * @example
     * // Get one Level_pendidikan
     * const level_pendidikan = await prisma.level_pendidikan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends level_pendidikanFindUniqueArgs>(args: SelectSubset<T, level_pendidikanFindUniqueArgs<ExtArgs>>): Prisma__level_pendidikanClient<$Result.GetResult<Prisma.$level_pendidikanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Level_pendidikan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {level_pendidikanFindUniqueOrThrowArgs} args - Arguments to find a Level_pendidikan
     * @example
     * // Get one Level_pendidikan
     * const level_pendidikan = await prisma.level_pendidikan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends level_pendidikanFindUniqueOrThrowArgs>(args: SelectSubset<T, level_pendidikanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__level_pendidikanClient<$Result.GetResult<Prisma.$level_pendidikanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level_pendidikan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {level_pendidikanFindFirstArgs} args - Arguments to find a Level_pendidikan
     * @example
     * // Get one Level_pendidikan
     * const level_pendidikan = await prisma.level_pendidikan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends level_pendidikanFindFirstArgs>(args?: SelectSubset<T, level_pendidikanFindFirstArgs<ExtArgs>>): Prisma__level_pendidikanClient<$Result.GetResult<Prisma.$level_pendidikanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level_pendidikan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {level_pendidikanFindFirstOrThrowArgs} args - Arguments to find a Level_pendidikan
     * @example
     * // Get one Level_pendidikan
     * const level_pendidikan = await prisma.level_pendidikan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends level_pendidikanFindFirstOrThrowArgs>(args?: SelectSubset<T, level_pendidikanFindFirstOrThrowArgs<ExtArgs>>): Prisma__level_pendidikanClient<$Result.GetResult<Prisma.$level_pendidikanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Level_pendidikans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {level_pendidikanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Level_pendidikans
     * const level_pendidikans = await prisma.level_pendidikan.findMany()
     * 
     * // Get first 10 Level_pendidikans
     * const level_pendidikans = await prisma.level_pendidikan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const level_pendidikanWithIdOnly = await prisma.level_pendidikan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends level_pendidikanFindManyArgs>(args?: SelectSubset<T, level_pendidikanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$level_pendidikanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Level_pendidikan.
     * @param {level_pendidikanCreateArgs} args - Arguments to create a Level_pendidikan.
     * @example
     * // Create one Level_pendidikan
     * const Level_pendidikan = await prisma.level_pendidikan.create({
     *   data: {
     *     // ... data to create a Level_pendidikan
     *   }
     * })
     * 
     */
    create<T extends level_pendidikanCreateArgs>(args: SelectSubset<T, level_pendidikanCreateArgs<ExtArgs>>): Prisma__level_pendidikanClient<$Result.GetResult<Prisma.$level_pendidikanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Level_pendidikans.
     * @param {level_pendidikanCreateManyArgs} args - Arguments to create many Level_pendidikans.
     * @example
     * // Create many Level_pendidikans
     * const level_pendidikan = await prisma.level_pendidikan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends level_pendidikanCreateManyArgs>(args?: SelectSubset<T, level_pendidikanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Level_pendidikan.
     * @param {level_pendidikanDeleteArgs} args - Arguments to delete one Level_pendidikan.
     * @example
     * // Delete one Level_pendidikan
     * const Level_pendidikan = await prisma.level_pendidikan.delete({
     *   where: {
     *     // ... filter to delete one Level_pendidikan
     *   }
     * })
     * 
     */
    delete<T extends level_pendidikanDeleteArgs>(args: SelectSubset<T, level_pendidikanDeleteArgs<ExtArgs>>): Prisma__level_pendidikanClient<$Result.GetResult<Prisma.$level_pendidikanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Level_pendidikan.
     * @param {level_pendidikanUpdateArgs} args - Arguments to update one Level_pendidikan.
     * @example
     * // Update one Level_pendidikan
     * const level_pendidikan = await prisma.level_pendidikan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends level_pendidikanUpdateArgs>(args: SelectSubset<T, level_pendidikanUpdateArgs<ExtArgs>>): Prisma__level_pendidikanClient<$Result.GetResult<Prisma.$level_pendidikanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Level_pendidikans.
     * @param {level_pendidikanDeleteManyArgs} args - Arguments to filter Level_pendidikans to delete.
     * @example
     * // Delete a few Level_pendidikans
     * const { count } = await prisma.level_pendidikan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends level_pendidikanDeleteManyArgs>(args?: SelectSubset<T, level_pendidikanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Level_pendidikans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {level_pendidikanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Level_pendidikans
     * const level_pendidikan = await prisma.level_pendidikan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends level_pendidikanUpdateManyArgs>(args: SelectSubset<T, level_pendidikanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Level_pendidikan.
     * @param {level_pendidikanUpsertArgs} args - Arguments to update or create a Level_pendidikan.
     * @example
     * // Update or create a Level_pendidikan
     * const level_pendidikan = await prisma.level_pendidikan.upsert({
     *   create: {
     *     // ... data to create a Level_pendidikan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Level_pendidikan we want to update
     *   }
     * })
     */
    upsert<T extends level_pendidikanUpsertArgs>(args: SelectSubset<T, level_pendidikanUpsertArgs<ExtArgs>>): Prisma__level_pendidikanClient<$Result.GetResult<Prisma.$level_pendidikanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Level_pendidikans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {level_pendidikanCountArgs} args - Arguments to filter Level_pendidikans to count.
     * @example
     * // Count the number of Level_pendidikans
     * const count = await prisma.level_pendidikan.count({
     *   where: {
     *     // ... the filter for the Level_pendidikans we want to count
     *   }
     * })
    **/
    count<T extends level_pendidikanCountArgs>(
      args?: Subset<T, level_pendidikanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Level_pendidikanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Level_pendidikan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Level_pendidikanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Level_pendidikanAggregateArgs>(args: Subset<T, Level_pendidikanAggregateArgs>): Prisma.PrismaPromise<GetLevel_pendidikanAggregateType<T>>

    /**
     * Group by Level_pendidikan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {level_pendidikanGroupByArgs} args - Group by arguments.
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
      T extends level_pendidikanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: level_pendidikanGroupByArgs['orderBy'] }
        : { orderBy?: level_pendidikanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, level_pendidikanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevel_pendidikanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the level_pendidikan model
   */
  readonly fields: level_pendidikanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for level_pendidikan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__level_pendidikanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the level_pendidikan model
   */
  interface level_pendidikanFieldRefs {
    readonly id: FieldRef<"level_pendidikan", 'Int'>
    readonly uuid: FieldRef<"level_pendidikan", 'String'>
    readonly nama: FieldRef<"level_pendidikan", 'String'>
    readonly keterangan: FieldRef<"level_pendidikan", 'String'>
    readonly status: FieldRef<"level_pendidikan", 'Int'>
    readonly created_at: FieldRef<"level_pendidikan", 'DateTime'>
    readonly updated_at: FieldRef<"level_pendidikan", 'DateTime'>
    readonly created_by: FieldRef<"level_pendidikan", 'String'>
    readonly updated_by: FieldRef<"level_pendidikan", 'String'>
    readonly deleted_at: FieldRef<"level_pendidikan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * level_pendidikan findUnique
   */
  export type level_pendidikanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the level_pendidikan
     */
    select?: level_pendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the level_pendidikan
     */
    omit?: level_pendidikanOmit<ExtArgs> | null
    /**
     * Filter, which level_pendidikan to fetch.
     */
    where: level_pendidikanWhereUniqueInput
  }

  /**
   * level_pendidikan findUniqueOrThrow
   */
  export type level_pendidikanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the level_pendidikan
     */
    select?: level_pendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the level_pendidikan
     */
    omit?: level_pendidikanOmit<ExtArgs> | null
    /**
     * Filter, which level_pendidikan to fetch.
     */
    where: level_pendidikanWhereUniqueInput
  }

  /**
   * level_pendidikan findFirst
   */
  export type level_pendidikanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the level_pendidikan
     */
    select?: level_pendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the level_pendidikan
     */
    omit?: level_pendidikanOmit<ExtArgs> | null
    /**
     * Filter, which level_pendidikan to fetch.
     */
    where?: level_pendidikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of level_pendidikans to fetch.
     */
    orderBy?: level_pendidikanOrderByWithRelationInput | level_pendidikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for level_pendidikans.
     */
    cursor?: level_pendidikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` level_pendidikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` level_pendidikans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of level_pendidikans.
     */
    distinct?: Level_pendidikanScalarFieldEnum | Level_pendidikanScalarFieldEnum[]
  }

  /**
   * level_pendidikan findFirstOrThrow
   */
  export type level_pendidikanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the level_pendidikan
     */
    select?: level_pendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the level_pendidikan
     */
    omit?: level_pendidikanOmit<ExtArgs> | null
    /**
     * Filter, which level_pendidikan to fetch.
     */
    where?: level_pendidikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of level_pendidikans to fetch.
     */
    orderBy?: level_pendidikanOrderByWithRelationInput | level_pendidikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for level_pendidikans.
     */
    cursor?: level_pendidikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` level_pendidikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` level_pendidikans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of level_pendidikans.
     */
    distinct?: Level_pendidikanScalarFieldEnum | Level_pendidikanScalarFieldEnum[]
  }

  /**
   * level_pendidikan findMany
   */
  export type level_pendidikanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the level_pendidikan
     */
    select?: level_pendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the level_pendidikan
     */
    omit?: level_pendidikanOmit<ExtArgs> | null
    /**
     * Filter, which level_pendidikans to fetch.
     */
    where?: level_pendidikanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of level_pendidikans to fetch.
     */
    orderBy?: level_pendidikanOrderByWithRelationInput | level_pendidikanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing level_pendidikans.
     */
    cursor?: level_pendidikanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` level_pendidikans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` level_pendidikans.
     */
    skip?: number
    distinct?: Level_pendidikanScalarFieldEnum | Level_pendidikanScalarFieldEnum[]
  }

  /**
   * level_pendidikan create
   */
  export type level_pendidikanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the level_pendidikan
     */
    select?: level_pendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the level_pendidikan
     */
    omit?: level_pendidikanOmit<ExtArgs> | null
    /**
     * The data needed to create a level_pendidikan.
     */
    data: XOR<level_pendidikanCreateInput, level_pendidikanUncheckedCreateInput>
  }

  /**
   * level_pendidikan createMany
   */
  export type level_pendidikanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many level_pendidikans.
     */
    data: level_pendidikanCreateManyInput | level_pendidikanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * level_pendidikan update
   */
  export type level_pendidikanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the level_pendidikan
     */
    select?: level_pendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the level_pendidikan
     */
    omit?: level_pendidikanOmit<ExtArgs> | null
    /**
     * The data needed to update a level_pendidikan.
     */
    data: XOR<level_pendidikanUpdateInput, level_pendidikanUncheckedUpdateInput>
    /**
     * Choose, which level_pendidikan to update.
     */
    where: level_pendidikanWhereUniqueInput
  }

  /**
   * level_pendidikan updateMany
   */
  export type level_pendidikanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update level_pendidikans.
     */
    data: XOR<level_pendidikanUpdateManyMutationInput, level_pendidikanUncheckedUpdateManyInput>
    /**
     * Filter which level_pendidikans to update
     */
    where?: level_pendidikanWhereInput
    /**
     * Limit how many level_pendidikans to update.
     */
    limit?: number
  }

  /**
   * level_pendidikan upsert
   */
  export type level_pendidikanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the level_pendidikan
     */
    select?: level_pendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the level_pendidikan
     */
    omit?: level_pendidikanOmit<ExtArgs> | null
    /**
     * The filter to search for the level_pendidikan to update in case it exists.
     */
    where: level_pendidikanWhereUniqueInput
    /**
     * In case the level_pendidikan found by the `where` argument doesn't exist, create a new level_pendidikan with this data.
     */
    create: XOR<level_pendidikanCreateInput, level_pendidikanUncheckedCreateInput>
    /**
     * In case the level_pendidikan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<level_pendidikanUpdateInput, level_pendidikanUncheckedUpdateInput>
  }

  /**
   * level_pendidikan delete
   */
  export type level_pendidikanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the level_pendidikan
     */
    select?: level_pendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the level_pendidikan
     */
    omit?: level_pendidikanOmit<ExtArgs> | null
    /**
     * Filter which level_pendidikan to delete.
     */
    where: level_pendidikanWhereUniqueInput
  }

  /**
   * level_pendidikan deleteMany
   */
  export type level_pendidikanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which level_pendidikans to delete
     */
    where?: level_pendidikanWhereInput
    /**
     * Limit how many level_pendidikans to delete.
     */
    limit?: number
  }

  /**
   * level_pendidikan without action
   */
  export type level_pendidikanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the level_pendidikan
     */
    select?: level_pendidikanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the level_pendidikan
     */
    omit?: level_pendidikanOmit<ExtArgs> | null
  }


  /**
   * Model peserta
   */

  export type AggregatePeserta = {
    _count: PesertaCountAggregateOutputType | null
    _avg: PesertaAvgAggregateOutputType | null
    _sum: PesertaSumAggregateOutputType | null
    _min: PesertaMinAggregateOutputType | null
    _max: PesertaMaxAggregateOutputType | null
  }

  export type PesertaAvgAggregateOutputType = {
    id: number | null
    level_pendidikan_id: number | null
    lat: Decimal | null
    lng: Decimal | null
    status: number | null
  }

  export type PesertaSumAggregateOutputType = {
    id: bigint | null
    level_pendidikan_id: number | null
    lat: Decimal | null
    lng: Decimal | null
    status: number | null
  }

  export type PesertaMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    nama_lengkap: string | null
    kewarganegaraan: $Enums.peserta_kewarganegaraan | null
    nik: string | null
    nik_hash: string | null
    tanggal_lahir: Date | null
    jenis_kelamin: $Enums.peserta_jenis_kelamin | null
    no_hp: string | null
    email: string | null
    tempat_lahir: string | null
    level_pendidikan_id: number | null
    provinsi_id: string | null
    alamat: string | null
    lat: Decimal | null
    lng: Decimal | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type PesertaMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    nama_lengkap: string | null
    kewarganegaraan: $Enums.peserta_kewarganegaraan | null
    nik: string | null
    nik_hash: string | null
    tanggal_lahir: Date | null
    jenis_kelamin: $Enums.peserta_jenis_kelamin | null
    no_hp: string | null
    email: string | null
    tempat_lahir: string | null
    level_pendidikan_id: number | null
    provinsi_id: string | null
    alamat: string | null
    lat: Decimal | null
    lng: Decimal | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type PesertaCountAggregateOutputType = {
    id: number
    uuid: number
    nama_lengkap: number
    kewarganegaraan: number
    nik: number
    nik_hash: number
    tanggal_lahir: number
    jenis_kelamin: number
    no_hp: number
    email: number
    tempat_lahir: number
    level_pendidikan_id: number
    provinsi_id: number
    alamat: number
    lat: number
    lng: number
    status: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type PesertaAvgAggregateInputType = {
    id?: true
    level_pendidikan_id?: true
    lat?: true
    lng?: true
    status?: true
  }

  export type PesertaSumAggregateInputType = {
    id?: true
    level_pendidikan_id?: true
    lat?: true
    lng?: true
    status?: true
  }

  export type PesertaMinAggregateInputType = {
    id?: true
    uuid?: true
    nama_lengkap?: true
    kewarganegaraan?: true
    nik?: true
    nik_hash?: true
    tanggal_lahir?: true
    jenis_kelamin?: true
    no_hp?: true
    email?: true
    tempat_lahir?: true
    level_pendidikan_id?: true
    provinsi_id?: true
    alamat?: true
    lat?: true
    lng?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type PesertaMaxAggregateInputType = {
    id?: true
    uuid?: true
    nama_lengkap?: true
    kewarganegaraan?: true
    nik?: true
    nik_hash?: true
    tanggal_lahir?: true
    jenis_kelamin?: true
    no_hp?: true
    email?: true
    tempat_lahir?: true
    level_pendidikan_id?: true
    provinsi_id?: true
    alamat?: true
    lat?: true
    lng?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type PesertaCountAggregateInputType = {
    id?: true
    uuid?: true
    nama_lengkap?: true
    kewarganegaraan?: true
    nik?: true
    nik_hash?: true
    tanggal_lahir?: true
    jenis_kelamin?: true
    no_hp?: true
    email?: true
    tempat_lahir?: true
    level_pendidikan_id?: true
    provinsi_id?: true
    alamat?: true
    lat?: true
    lng?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type PesertaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peserta to aggregate.
     */
    where?: pesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesertas to fetch.
     */
    orderBy?: pesertaOrderByWithRelationInput | pesertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pesertas
    **/
    _count?: true | PesertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PesertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PesertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesertaMaxAggregateInputType
  }

  export type GetPesertaAggregateType<T extends PesertaAggregateArgs> = {
        [P in keyof T & keyof AggregatePeserta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeserta[P]>
      : GetScalarType<T[P], AggregatePeserta[P]>
  }




  export type pesertaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pesertaWhereInput
    orderBy?: pesertaOrderByWithAggregationInput | pesertaOrderByWithAggregationInput[]
    by: PesertaScalarFieldEnum[] | PesertaScalarFieldEnum
    having?: pesertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesertaCountAggregateInputType | true
    _avg?: PesertaAvgAggregateInputType
    _sum?: PesertaSumAggregateInputType
    _min?: PesertaMinAggregateInputType
    _max?: PesertaMaxAggregateInputType
  }

  export type PesertaGroupByOutputType = {
    id: bigint
    uuid: string
    nama_lengkap: string
    kewarganegaraan: $Enums.peserta_kewarganegaraan
    nik: string
    nik_hash: string
    tanggal_lahir: Date
    jenis_kelamin: $Enums.peserta_jenis_kelamin
    no_hp: string | null
    email: string
    tempat_lahir: string | null
    level_pendidikan_id: number | null
    provinsi_id: string | null
    alamat: string | null
    lat: Decimal | null
    lng: Decimal | null
    status: number
    created_at: Date
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
    _count: PesertaCountAggregateOutputType | null
    _avg: PesertaAvgAggregateOutputType | null
    _sum: PesertaSumAggregateOutputType | null
    _min: PesertaMinAggregateOutputType | null
    _max: PesertaMaxAggregateOutputType | null
  }

  type GetPesertaGroupByPayload<T extends pesertaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesertaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesertaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesertaGroupByOutputType[P]>
            : GetScalarType<T[P], PesertaGroupByOutputType[P]>
        }
      >
    >


  export type pesertaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nama_lengkap?: boolean
    kewarganegaraan?: boolean
    nik?: boolean
    nik_hash?: boolean
    tanggal_lahir?: boolean
    jenis_kelamin?: boolean
    no_hp?: boolean
    email?: boolean
    tempat_lahir?: boolean
    level_pendidikan_id?: boolean
    provinsi_id?: boolean
    alamat?: boolean
    lat?: boolean
    lng?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
    user?: boolean | peserta$userArgs<ExtArgs>
    _count?: boolean | PesertaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peserta"]>



  export type pesertaSelectScalar = {
    id?: boolean
    uuid?: boolean
    nama_lengkap?: boolean
    kewarganegaraan?: boolean
    nik?: boolean
    nik_hash?: boolean
    tanggal_lahir?: boolean
    jenis_kelamin?: boolean
    no_hp?: boolean
    email?: boolean
    tempat_lahir?: boolean
    level_pendidikan_id?: boolean
    provinsi_id?: boolean
    alamat?: boolean
    lat?: boolean
    lng?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type pesertaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "nama_lengkap" | "kewarganegaraan" | "nik" | "nik_hash" | "tanggal_lahir" | "jenis_kelamin" | "no_hp" | "email" | "tempat_lahir" | "level_pendidikan_id" | "provinsi_id" | "alamat" | "lat" | "lng" | "status" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_at", ExtArgs["result"]["peserta"]>
  export type pesertaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | peserta$userArgs<ExtArgs>
    _count?: boolean | PesertaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pesertaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "peserta"
    objects: {
      user: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      nama_lengkap: string
      kewarganegaraan: $Enums.peserta_kewarganegaraan
      nik: string
      nik_hash: string
      tanggal_lahir: Date
      jenis_kelamin: $Enums.peserta_jenis_kelamin
      no_hp: string | null
      email: string
      tempat_lahir: string | null
      level_pendidikan_id: number | null
      provinsi_id: string | null
      alamat: string | null
      lat: Prisma.Decimal | null
      lng: Prisma.Decimal | null
      status: number
      created_at: Date
      updated_at: Date | null
      created_by: string | null
      updated_by: string | null
      deleted_at: Date | null
    }, ExtArgs["result"]["peserta"]>
    composites: {}
  }

  type pesertaGetPayload<S extends boolean | null | undefined | pesertaDefaultArgs> = $Result.GetResult<Prisma.$pesertaPayload, S>

  type pesertaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pesertaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesertaCountAggregateInputType | true
    }

  export interface pesertaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['peserta'], meta: { name: 'peserta' } }
    /**
     * Find zero or one Peserta that matches the filter.
     * @param {pesertaFindUniqueArgs} args - Arguments to find a Peserta
     * @example
     * // Get one Peserta
     * const peserta = await prisma.peserta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pesertaFindUniqueArgs>(args: SelectSubset<T, pesertaFindUniqueArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peserta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pesertaFindUniqueOrThrowArgs} args - Arguments to find a Peserta
     * @example
     * // Get one Peserta
     * const peserta = await prisma.peserta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pesertaFindUniqueOrThrowArgs>(args: SelectSubset<T, pesertaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peserta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertaFindFirstArgs} args - Arguments to find a Peserta
     * @example
     * // Get one Peserta
     * const peserta = await prisma.peserta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pesertaFindFirstArgs>(args?: SelectSubset<T, pesertaFindFirstArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peserta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertaFindFirstOrThrowArgs} args - Arguments to find a Peserta
     * @example
     * // Get one Peserta
     * const peserta = await prisma.peserta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pesertaFindFirstOrThrowArgs>(args?: SelectSubset<T, pesertaFindFirstOrThrowArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pesertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pesertas
     * const pesertas = await prisma.peserta.findMany()
     * 
     * // Get first 10 Pesertas
     * const pesertas = await prisma.peserta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pesertaWithIdOnly = await prisma.peserta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pesertaFindManyArgs>(args?: SelectSubset<T, pesertaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peserta.
     * @param {pesertaCreateArgs} args - Arguments to create a Peserta.
     * @example
     * // Create one Peserta
     * const Peserta = await prisma.peserta.create({
     *   data: {
     *     // ... data to create a Peserta
     *   }
     * })
     * 
     */
    create<T extends pesertaCreateArgs>(args: SelectSubset<T, pesertaCreateArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pesertas.
     * @param {pesertaCreateManyArgs} args - Arguments to create many Pesertas.
     * @example
     * // Create many Pesertas
     * const peserta = await prisma.peserta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pesertaCreateManyArgs>(args?: SelectSubset<T, pesertaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Peserta.
     * @param {pesertaDeleteArgs} args - Arguments to delete one Peserta.
     * @example
     * // Delete one Peserta
     * const Peserta = await prisma.peserta.delete({
     *   where: {
     *     // ... filter to delete one Peserta
     *   }
     * })
     * 
     */
    delete<T extends pesertaDeleteArgs>(args: SelectSubset<T, pesertaDeleteArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peserta.
     * @param {pesertaUpdateArgs} args - Arguments to update one Peserta.
     * @example
     * // Update one Peserta
     * const peserta = await prisma.peserta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pesertaUpdateArgs>(args: SelectSubset<T, pesertaUpdateArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pesertas.
     * @param {pesertaDeleteManyArgs} args - Arguments to filter Pesertas to delete.
     * @example
     * // Delete a few Pesertas
     * const { count } = await prisma.peserta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pesertaDeleteManyArgs>(args?: SelectSubset<T, pesertaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pesertas
     * const peserta = await prisma.peserta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pesertaUpdateManyArgs>(args: SelectSubset<T, pesertaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Peserta.
     * @param {pesertaUpsertArgs} args - Arguments to update or create a Peserta.
     * @example
     * // Update or create a Peserta
     * const peserta = await prisma.peserta.upsert({
     *   create: {
     *     // ... data to create a Peserta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peserta we want to update
     *   }
     * })
     */
    upsert<T extends pesertaUpsertArgs>(args: SelectSubset<T, pesertaUpsertArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pesertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertaCountArgs} args - Arguments to filter Pesertas to count.
     * @example
     * // Count the number of Pesertas
     * const count = await prisma.peserta.count({
     *   where: {
     *     // ... the filter for the Pesertas we want to count
     *   }
     * })
    **/
    count<T extends pesertaCountArgs>(
      args?: Subset<T, pesertaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peserta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PesertaAggregateArgs>(args: Subset<T, PesertaAggregateArgs>): Prisma.PrismaPromise<GetPesertaAggregateType<T>>

    /**
     * Group by Peserta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pesertaGroupByArgs} args - Group by arguments.
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
      T extends pesertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pesertaGroupByArgs['orderBy'] }
        : { orderBy?: pesertaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pesertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesertaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the peserta model
   */
  readonly fields: pesertaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for peserta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pesertaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends peserta$userArgs<ExtArgs> = {}>(args?: Subset<T, peserta$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the peserta model
   */
  interface pesertaFieldRefs {
    readonly id: FieldRef<"peserta", 'BigInt'>
    readonly uuid: FieldRef<"peserta", 'String'>
    readonly nama_lengkap: FieldRef<"peserta", 'String'>
    readonly kewarganegaraan: FieldRef<"peserta", 'peserta_kewarganegaraan'>
    readonly nik: FieldRef<"peserta", 'String'>
    readonly nik_hash: FieldRef<"peserta", 'String'>
    readonly tanggal_lahir: FieldRef<"peserta", 'DateTime'>
    readonly jenis_kelamin: FieldRef<"peserta", 'peserta_jenis_kelamin'>
    readonly no_hp: FieldRef<"peserta", 'String'>
    readonly email: FieldRef<"peserta", 'String'>
    readonly tempat_lahir: FieldRef<"peserta", 'String'>
    readonly level_pendidikan_id: FieldRef<"peserta", 'Int'>
    readonly provinsi_id: FieldRef<"peserta", 'String'>
    readonly alamat: FieldRef<"peserta", 'String'>
    readonly lat: FieldRef<"peserta", 'Decimal'>
    readonly lng: FieldRef<"peserta", 'Decimal'>
    readonly status: FieldRef<"peserta", 'Int'>
    readonly created_at: FieldRef<"peserta", 'DateTime'>
    readonly updated_at: FieldRef<"peserta", 'DateTime'>
    readonly created_by: FieldRef<"peserta", 'String'>
    readonly updated_by: FieldRef<"peserta", 'String'>
    readonly deleted_at: FieldRef<"peserta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * peserta findUnique
   */
  export type pesertaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * Filter, which peserta to fetch.
     */
    where: pesertaWhereUniqueInput
  }

  /**
   * peserta findUniqueOrThrow
   */
  export type pesertaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * Filter, which peserta to fetch.
     */
    where: pesertaWhereUniqueInput
  }

  /**
   * peserta findFirst
   */
  export type pesertaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * Filter, which peserta to fetch.
     */
    where?: pesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesertas to fetch.
     */
    orderBy?: pesertaOrderByWithRelationInput | pesertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pesertas.
     */
    cursor?: pesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pesertas.
     */
    distinct?: PesertaScalarFieldEnum | PesertaScalarFieldEnum[]
  }

  /**
   * peserta findFirstOrThrow
   */
  export type pesertaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * Filter, which peserta to fetch.
     */
    where?: pesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesertas to fetch.
     */
    orderBy?: pesertaOrderByWithRelationInput | pesertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pesertas.
     */
    cursor?: pesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesertas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pesertas.
     */
    distinct?: PesertaScalarFieldEnum | PesertaScalarFieldEnum[]
  }

  /**
   * peserta findMany
   */
  export type pesertaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * Filter, which pesertas to fetch.
     */
    where?: pesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pesertas to fetch.
     */
    orderBy?: pesertaOrderByWithRelationInput | pesertaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pesertas.
     */
    cursor?: pesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pesertas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pesertas.
     */
    skip?: number
    distinct?: PesertaScalarFieldEnum | PesertaScalarFieldEnum[]
  }

  /**
   * peserta create
   */
  export type pesertaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * The data needed to create a peserta.
     */
    data: XOR<pesertaCreateInput, pesertaUncheckedCreateInput>
  }

  /**
   * peserta createMany
   */
  export type pesertaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pesertas.
     */
    data: pesertaCreateManyInput | pesertaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * peserta update
   */
  export type pesertaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * The data needed to update a peserta.
     */
    data: XOR<pesertaUpdateInput, pesertaUncheckedUpdateInput>
    /**
     * Choose, which peserta to update.
     */
    where: pesertaWhereUniqueInput
  }

  /**
   * peserta updateMany
   */
  export type pesertaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pesertas.
     */
    data: XOR<pesertaUpdateManyMutationInput, pesertaUncheckedUpdateManyInput>
    /**
     * Filter which pesertas to update
     */
    where?: pesertaWhereInput
    /**
     * Limit how many pesertas to update.
     */
    limit?: number
  }

  /**
   * peserta upsert
   */
  export type pesertaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * The filter to search for the peserta to update in case it exists.
     */
    where: pesertaWhereUniqueInput
    /**
     * In case the peserta found by the `where` argument doesn't exist, create a new peserta with this data.
     */
    create: XOR<pesertaCreateInput, pesertaUncheckedCreateInput>
    /**
     * In case the peserta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pesertaUpdateInput, pesertaUncheckedUpdateInput>
  }

  /**
   * peserta delete
   */
  export type pesertaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    /**
     * Filter which peserta to delete.
     */
    where: pesertaWhereUniqueInput
  }

  /**
   * peserta deleteMany
   */
  export type pesertaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pesertas to delete
     */
    where?: pesertaWhereInput
    /**
     * Limit how many pesertas to delete.
     */
    limit?: number
  }

  /**
   * peserta.user
   */
  export type peserta$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * peserta without action
   */
  export type pesertaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
  }


  /**
   * Model t_kecamatan
   */

  export type AggregateT_kecamatan = {
    _count: T_kecamatanCountAggregateOutputType | null
    _avg: T_kecamatanAvgAggregateOutputType | null
    _sum: T_kecamatanSumAggregateOutputType | null
    _min: T_kecamatanMinAggregateOutputType | null
    _max: T_kecamatanMaxAggregateOutputType | null
  }

  export type T_kecamatanAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type T_kecamatanSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type T_kecamatanMinAggregateOutputType = {
    id: string | null
    uuid: string | null
    nama: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type T_kecamatanMaxAggregateOutputType = {
    id: string | null
    uuid: string | null
    nama: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type T_kecamatanCountAggregateOutputType = {
    id: number
    uuid: number
    nama: number
    latitude: number
    longitude: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type T_kecamatanAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type T_kecamatanSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type T_kecamatanMinAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type T_kecamatanMaxAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type T_kecamatanCountAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type T_kecamatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_kecamatan to aggregate.
     */
    where?: t_kecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_kecamatans to fetch.
     */
    orderBy?: t_kecamatanOrderByWithRelationInput | t_kecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_kecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_kecamatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_kecamatans
    **/
    _count?: true | T_kecamatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_kecamatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_kecamatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_kecamatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_kecamatanMaxAggregateInputType
  }

  export type GetT_kecamatanAggregateType<T extends T_kecamatanAggregateArgs> = {
        [P in keyof T & keyof AggregateT_kecamatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_kecamatan[P]>
      : GetScalarType<T[P], AggregateT_kecamatan[P]>
  }




  export type t_kecamatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_kecamatanWhereInput
    orderBy?: t_kecamatanOrderByWithAggregationInput | t_kecamatanOrderByWithAggregationInput[]
    by: T_kecamatanScalarFieldEnum[] | T_kecamatanScalarFieldEnum
    having?: t_kecamatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_kecamatanCountAggregateInputType | true
    _avg?: T_kecamatanAvgAggregateInputType
    _sum?: T_kecamatanSumAggregateInputType
    _min?: T_kecamatanMinAggregateInputType
    _max?: T_kecamatanMaxAggregateInputType
  }

  export type T_kecamatanGroupByOutputType = {
    id: string
    uuid: string
    nama: string
    latitude: number
    longitude: number
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
    _count: T_kecamatanCountAggregateOutputType | null
    _avg: T_kecamatanAvgAggregateOutputType | null
    _sum: T_kecamatanSumAggregateOutputType | null
    _min: T_kecamatanMinAggregateOutputType | null
    _max: T_kecamatanMaxAggregateOutputType | null
  }

  type GetT_kecamatanGroupByPayload<T extends t_kecamatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_kecamatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_kecamatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_kecamatanGroupByOutputType[P]>
            : GetScalarType<T[P], T_kecamatanGroupByOutputType[P]>
        }
      >
    >


  export type t_kecamatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nama?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["t_kecamatan"]>



  export type t_kecamatanSelectScalar = {
    id?: boolean
    uuid?: boolean
    nama?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type t_kecamatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "nama" | "latitude" | "longitude" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_at", ExtArgs["result"]["t_kecamatan"]>

  export type $t_kecamatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_kecamatan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uuid: string
      nama: string
      latitude: number
      longitude: number
      created_at: Date | null
      updated_at: Date | null
      created_by: string | null
      updated_by: string | null
      deleted_at: Date | null
    }, ExtArgs["result"]["t_kecamatan"]>
    composites: {}
  }

  type t_kecamatanGetPayload<S extends boolean | null | undefined | t_kecamatanDefaultArgs> = $Result.GetResult<Prisma.$t_kecamatanPayload, S>

  type t_kecamatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_kecamatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_kecamatanCountAggregateInputType | true
    }

  export interface t_kecamatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_kecamatan'], meta: { name: 't_kecamatan' } }
    /**
     * Find zero or one T_kecamatan that matches the filter.
     * @param {t_kecamatanFindUniqueArgs} args - Arguments to find a T_kecamatan
     * @example
     * // Get one T_kecamatan
     * const t_kecamatan = await prisma.t_kecamatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_kecamatanFindUniqueArgs>(args: SelectSubset<T, t_kecamatanFindUniqueArgs<ExtArgs>>): Prisma__t_kecamatanClient<$Result.GetResult<Prisma.$t_kecamatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_kecamatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_kecamatanFindUniqueOrThrowArgs} args - Arguments to find a T_kecamatan
     * @example
     * // Get one T_kecamatan
     * const t_kecamatan = await prisma.t_kecamatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_kecamatanFindUniqueOrThrowArgs>(args: SelectSubset<T, t_kecamatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_kecamatanClient<$Result.GetResult<Prisma.$t_kecamatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_kecamatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kecamatanFindFirstArgs} args - Arguments to find a T_kecamatan
     * @example
     * // Get one T_kecamatan
     * const t_kecamatan = await prisma.t_kecamatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_kecamatanFindFirstArgs>(args?: SelectSubset<T, t_kecamatanFindFirstArgs<ExtArgs>>): Prisma__t_kecamatanClient<$Result.GetResult<Prisma.$t_kecamatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_kecamatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kecamatanFindFirstOrThrowArgs} args - Arguments to find a T_kecamatan
     * @example
     * // Get one T_kecamatan
     * const t_kecamatan = await prisma.t_kecamatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_kecamatanFindFirstOrThrowArgs>(args?: SelectSubset<T, t_kecamatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_kecamatanClient<$Result.GetResult<Prisma.$t_kecamatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_kecamatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kecamatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_kecamatans
     * const t_kecamatans = await prisma.t_kecamatan.findMany()
     * 
     * // Get first 10 T_kecamatans
     * const t_kecamatans = await prisma.t_kecamatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_kecamatanWithIdOnly = await prisma.t_kecamatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends t_kecamatanFindManyArgs>(args?: SelectSubset<T, t_kecamatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_kecamatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_kecamatan.
     * @param {t_kecamatanCreateArgs} args - Arguments to create a T_kecamatan.
     * @example
     * // Create one T_kecamatan
     * const T_kecamatan = await prisma.t_kecamatan.create({
     *   data: {
     *     // ... data to create a T_kecamatan
     *   }
     * })
     * 
     */
    create<T extends t_kecamatanCreateArgs>(args: SelectSubset<T, t_kecamatanCreateArgs<ExtArgs>>): Prisma__t_kecamatanClient<$Result.GetResult<Prisma.$t_kecamatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_kecamatans.
     * @param {t_kecamatanCreateManyArgs} args - Arguments to create many T_kecamatans.
     * @example
     * // Create many T_kecamatans
     * const t_kecamatan = await prisma.t_kecamatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_kecamatanCreateManyArgs>(args?: SelectSubset<T, t_kecamatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_kecamatan.
     * @param {t_kecamatanDeleteArgs} args - Arguments to delete one T_kecamatan.
     * @example
     * // Delete one T_kecamatan
     * const T_kecamatan = await prisma.t_kecamatan.delete({
     *   where: {
     *     // ... filter to delete one T_kecamatan
     *   }
     * })
     * 
     */
    delete<T extends t_kecamatanDeleteArgs>(args: SelectSubset<T, t_kecamatanDeleteArgs<ExtArgs>>): Prisma__t_kecamatanClient<$Result.GetResult<Prisma.$t_kecamatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_kecamatan.
     * @param {t_kecamatanUpdateArgs} args - Arguments to update one T_kecamatan.
     * @example
     * // Update one T_kecamatan
     * const t_kecamatan = await prisma.t_kecamatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_kecamatanUpdateArgs>(args: SelectSubset<T, t_kecamatanUpdateArgs<ExtArgs>>): Prisma__t_kecamatanClient<$Result.GetResult<Prisma.$t_kecamatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_kecamatans.
     * @param {t_kecamatanDeleteManyArgs} args - Arguments to filter T_kecamatans to delete.
     * @example
     * // Delete a few T_kecamatans
     * const { count } = await prisma.t_kecamatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_kecamatanDeleteManyArgs>(args?: SelectSubset<T, t_kecamatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_kecamatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kecamatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_kecamatans
     * const t_kecamatan = await prisma.t_kecamatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_kecamatanUpdateManyArgs>(args: SelectSubset<T, t_kecamatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_kecamatan.
     * @param {t_kecamatanUpsertArgs} args - Arguments to update or create a T_kecamatan.
     * @example
     * // Update or create a T_kecamatan
     * const t_kecamatan = await prisma.t_kecamatan.upsert({
     *   create: {
     *     // ... data to create a T_kecamatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_kecamatan we want to update
     *   }
     * })
     */
    upsert<T extends t_kecamatanUpsertArgs>(args: SelectSubset<T, t_kecamatanUpsertArgs<ExtArgs>>): Prisma__t_kecamatanClient<$Result.GetResult<Prisma.$t_kecamatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_kecamatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kecamatanCountArgs} args - Arguments to filter T_kecamatans to count.
     * @example
     * // Count the number of T_kecamatans
     * const count = await prisma.t_kecamatan.count({
     *   where: {
     *     // ... the filter for the T_kecamatans we want to count
     *   }
     * })
    **/
    count<T extends t_kecamatanCountArgs>(
      args?: Subset<T, t_kecamatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_kecamatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_kecamatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_kecamatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_kecamatanAggregateArgs>(args: Subset<T, T_kecamatanAggregateArgs>): Prisma.PrismaPromise<GetT_kecamatanAggregateType<T>>

    /**
     * Group by T_kecamatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kecamatanGroupByArgs} args - Group by arguments.
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
      T extends t_kecamatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_kecamatanGroupByArgs['orderBy'] }
        : { orderBy?: t_kecamatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_kecamatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_kecamatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_kecamatan model
   */
  readonly fields: t_kecamatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_kecamatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_kecamatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_kecamatan model
   */
  interface t_kecamatanFieldRefs {
    readonly id: FieldRef<"t_kecamatan", 'String'>
    readonly uuid: FieldRef<"t_kecamatan", 'String'>
    readonly nama: FieldRef<"t_kecamatan", 'String'>
    readonly latitude: FieldRef<"t_kecamatan", 'Float'>
    readonly longitude: FieldRef<"t_kecamatan", 'Float'>
    readonly created_at: FieldRef<"t_kecamatan", 'DateTime'>
    readonly updated_at: FieldRef<"t_kecamatan", 'DateTime'>
    readonly created_by: FieldRef<"t_kecamatan", 'String'>
    readonly updated_by: FieldRef<"t_kecamatan", 'String'>
    readonly deleted_at: FieldRef<"t_kecamatan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * t_kecamatan findUnique
   */
  export type t_kecamatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kecamatan
     */
    select?: t_kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kecamatan
     */
    omit?: t_kecamatanOmit<ExtArgs> | null
    /**
     * Filter, which t_kecamatan to fetch.
     */
    where: t_kecamatanWhereUniqueInput
  }

  /**
   * t_kecamatan findUniqueOrThrow
   */
  export type t_kecamatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kecamatan
     */
    select?: t_kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kecamatan
     */
    omit?: t_kecamatanOmit<ExtArgs> | null
    /**
     * Filter, which t_kecamatan to fetch.
     */
    where: t_kecamatanWhereUniqueInput
  }

  /**
   * t_kecamatan findFirst
   */
  export type t_kecamatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kecamatan
     */
    select?: t_kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kecamatan
     */
    omit?: t_kecamatanOmit<ExtArgs> | null
    /**
     * Filter, which t_kecamatan to fetch.
     */
    where?: t_kecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_kecamatans to fetch.
     */
    orderBy?: t_kecamatanOrderByWithRelationInput | t_kecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_kecamatans.
     */
    cursor?: t_kecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_kecamatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_kecamatans.
     */
    distinct?: T_kecamatanScalarFieldEnum | T_kecamatanScalarFieldEnum[]
  }

  /**
   * t_kecamatan findFirstOrThrow
   */
  export type t_kecamatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kecamatan
     */
    select?: t_kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kecamatan
     */
    omit?: t_kecamatanOmit<ExtArgs> | null
    /**
     * Filter, which t_kecamatan to fetch.
     */
    where?: t_kecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_kecamatans to fetch.
     */
    orderBy?: t_kecamatanOrderByWithRelationInput | t_kecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_kecamatans.
     */
    cursor?: t_kecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_kecamatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_kecamatans.
     */
    distinct?: T_kecamatanScalarFieldEnum | T_kecamatanScalarFieldEnum[]
  }

  /**
   * t_kecamatan findMany
   */
  export type t_kecamatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kecamatan
     */
    select?: t_kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kecamatan
     */
    omit?: t_kecamatanOmit<ExtArgs> | null
    /**
     * Filter, which t_kecamatans to fetch.
     */
    where?: t_kecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_kecamatans to fetch.
     */
    orderBy?: t_kecamatanOrderByWithRelationInput | t_kecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_kecamatans.
     */
    cursor?: t_kecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_kecamatans.
     */
    skip?: number
    distinct?: T_kecamatanScalarFieldEnum | T_kecamatanScalarFieldEnum[]
  }

  /**
   * t_kecamatan create
   */
  export type t_kecamatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kecamatan
     */
    select?: t_kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kecamatan
     */
    omit?: t_kecamatanOmit<ExtArgs> | null
    /**
     * The data needed to create a t_kecamatan.
     */
    data: XOR<t_kecamatanCreateInput, t_kecamatanUncheckedCreateInput>
  }

  /**
   * t_kecamatan createMany
   */
  export type t_kecamatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_kecamatans.
     */
    data: t_kecamatanCreateManyInput | t_kecamatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_kecamatan update
   */
  export type t_kecamatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kecamatan
     */
    select?: t_kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kecamatan
     */
    omit?: t_kecamatanOmit<ExtArgs> | null
    /**
     * The data needed to update a t_kecamatan.
     */
    data: XOR<t_kecamatanUpdateInput, t_kecamatanUncheckedUpdateInput>
    /**
     * Choose, which t_kecamatan to update.
     */
    where: t_kecamatanWhereUniqueInput
  }

  /**
   * t_kecamatan updateMany
   */
  export type t_kecamatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_kecamatans.
     */
    data: XOR<t_kecamatanUpdateManyMutationInput, t_kecamatanUncheckedUpdateManyInput>
    /**
     * Filter which t_kecamatans to update
     */
    where?: t_kecamatanWhereInput
    /**
     * Limit how many t_kecamatans to update.
     */
    limit?: number
  }

  /**
   * t_kecamatan upsert
   */
  export type t_kecamatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kecamatan
     */
    select?: t_kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kecamatan
     */
    omit?: t_kecamatanOmit<ExtArgs> | null
    /**
     * The filter to search for the t_kecamatan to update in case it exists.
     */
    where: t_kecamatanWhereUniqueInput
    /**
     * In case the t_kecamatan found by the `where` argument doesn't exist, create a new t_kecamatan with this data.
     */
    create: XOR<t_kecamatanCreateInput, t_kecamatanUncheckedCreateInput>
    /**
     * In case the t_kecamatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_kecamatanUpdateInput, t_kecamatanUncheckedUpdateInput>
  }

  /**
   * t_kecamatan delete
   */
  export type t_kecamatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kecamatan
     */
    select?: t_kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kecamatan
     */
    omit?: t_kecamatanOmit<ExtArgs> | null
    /**
     * Filter which t_kecamatan to delete.
     */
    where: t_kecamatanWhereUniqueInput
  }

  /**
   * t_kecamatan deleteMany
   */
  export type t_kecamatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_kecamatans to delete
     */
    where?: t_kecamatanWhereInput
    /**
     * Limit how many t_kecamatans to delete.
     */
    limit?: number
  }

  /**
   * t_kecamatan without action
   */
  export type t_kecamatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kecamatan
     */
    select?: t_kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kecamatan
     */
    omit?: t_kecamatanOmit<ExtArgs> | null
  }


  /**
   * Model t_kelurahan
   */

  export type AggregateT_kelurahan = {
    _count: T_kelurahanCountAggregateOutputType | null
    _avg: T_kelurahanAvgAggregateOutputType | null
    _sum: T_kelurahanSumAggregateOutputType | null
    _min: T_kelurahanMinAggregateOutputType | null
    _max: T_kelurahanMaxAggregateOutputType | null
  }

  export type T_kelurahanAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type T_kelurahanSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type T_kelurahanMinAggregateOutputType = {
    id: string | null
    uuid: string | null
    nama: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type T_kelurahanMaxAggregateOutputType = {
    id: string | null
    uuid: string | null
    nama: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type T_kelurahanCountAggregateOutputType = {
    id: number
    uuid: number
    nama: number
    latitude: number
    longitude: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type T_kelurahanAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type T_kelurahanSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type T_kelurahanMinAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type T_kelurahanMaxAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type T_kelurahanCountAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type T_kelurahanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_kelurahan to aggregate.
     */
    where?: t_kelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_kelurahans to fetch.
     */
    orderBy?: t_kelurahanOrderByWithRelationInput | t_kelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_kelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_kelurahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_kelurahans
    **/
    _count?: true | T_kelurahanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_kelurahanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_kelurahanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_kelurahanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_kelurahanMaxAggregateInputType
  }

  export type GetT_kelurahanAggregateType<T extends T_kelurahanAggregateArgs> = {
        [P in keyof T & keyof AggregateT_kelurahan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_kelurahan[P]>
      : GetScalarType<T[P], AggregateT_kelurahan[P]>
  }




  export type t_kelurahanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_kelurahanWhereInput
    orderBy?: t_kelurahanOrderByWithAggregationInput | t_kelurahanOrderByWithAggregationInput[]
    by: T_kelurahanScalarFieldEnum[] | T_kelurahanScalarFieldEnum
    having?: t_kelurahanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_kelurahanCountAggregateInputType | true
    _avg?: T_kelurahanAvgAggregateInputType
    _sum?: T_kelurahanSumAggregateInputType
    _min?: T_kelurahanMinAggregateInputType
    _max?: T_kelurahanMaxAggregateInputType
  }

  export type T_kelurahanGroupByOutputType = {
    id: string
    uuid: string
    nama: string
    latitude: number
    longitude: number
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
    _count: T_kelurahanCountAggregateOutputType | null
    _avg: T_kelurahanAvgAggregateOutputType | null
    _sum: T_kelurahanSumAggregateOutputType | null
    _min: T_kelurahanMinAggregateOutputType | null
    _max: T_kelurahanMaxAggregateOutputType | null
  }

  type GetT_kelurahanGroupByPayload<T extends t_kelurahanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_kelurahanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_kelurahanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_kelurahanGroupByOutputType[P]>
            : GetScalarType<T[P], T_kelurahanGroupByOutputType[P]>
        }
      >
    >


  export type t_kelurahanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nama?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["t_kelurahan"]>



  export type t_kelurahanSelectScalar = {
    id?: boolean
    uuid?: boolean
    nama?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type t_kelurahanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "nama" | "latitude" | "longitude" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_at", ExtArgs["result"]["t_kelurahan"]>

  export type $t_kelurahanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_kelurahan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uuid: string
      nama: string
      latitude: number
      longitude: number
      created_at: Date | null
      updated_at: Date | null
      created_by: string | null
      updated_by: string | null
      deleted_at: Date | null
    }, ExtArgs["result"]["t_kelurahan"]>
    composites: {}
  }

  type t_kelurahanGetPayload<S extends boolean | null | undefined | t_kelurahanDefaultArgs> = $Result.GetResult<Prisma.$t_kelurahanPayload, S>

  type t_kelurahanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_kelurahanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_kelurahanCountAggregateInputType | true
    }

  export interface t_kelurahanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_kelurahan'], meta: { name: 't_kelurahan' } }
    /**
     * Find zero or one T_kelurahan that matches the filter.
     * @param {t_kelurahanFindUniqueArgs} args - Arguments to find a T_kelurahan
     * @example
     * // Get one T_kelurahan
     * const t_kelurahan = await prisma.t_kelurahan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_kelurahanFindUniqueArgs>(args: SelectSubset<T, t_kelurahanFindUniqueArgs<ExtArgs>>): Prisma__t_kelurahanClient<$Result.GetResult<Prisma.$t_kelurahanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_kelurahan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_kelurahanFindUniqueOrThrowArgs} args - Arguments to find a T_kelurahan
     * @example
     * // Get one T_kelurahan
     * const t_kelurahan = await prisma.t_kelurahan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_kelurahanFindUniqueOrThrowArgs>(args: SelectSubset<T, t_kelurahanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_kelurahanClient<$Result.GetResult<Prisma.$t_kelurahanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_kelurahan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kelurahanFindFirstArgs} args - Arguments to find a T_kelurahan
     * @example
     * // Get one T_kelurahan
     * const t_kelurahan = await prisma.t_kelurahan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_kelurahanFindFirstArgs>(args?: SelectSubset<T, t_kelurahanFindFirstArgs<ExtArgs>>): Prisma__t_kelurahanClient<$Result.GetResult<Prisma.$t_kelurahanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_kelurahan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kelurahanFindFirstOrThrowArgs} args - Arguments to find a T_kelurahan
     * @example
     * // Get one T_kelurahan
     * const t_kelurahan = await prisma.t_kelurahan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_kelurahanFindFirstOrThrowArgs>(args?: SelectSubset<T, t_kelurahanFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_kelurahanClient<$Result.GetResult<Prisma.$t_kelurahanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_kelurahans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kelurahanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_kelurahans
     * const t_kelurahans = await prisma.t_kelurahan.findMany()
     * 
     * // Get first 10 T_kelurahans
     * const t_kelurahans = await prisma.t_kelurahan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_kelurahanWithIdOnly = await prisma.t_kelurahan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends t_kelurahanFindManyArgs>(args?: SelectSubset<T, t_kelurahanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_kelurahanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_kelurahan.
     * @param {t_kelurahanCreateArgs} args - Arguments to create a T_kelurahan.
     * @example
     * // Create one T_kelurahan
     * const T_kelurahan = await prisma.t_kelurahan.create({
     *   data: {
     *     // ... data to create a T_kelurahan
     *   }
     * })
     * 
     */
    create<T extends t_kelurahanCreateArgs>(args: SelectSubset<T, t_kelurahanCreateArgs<ExtArgs>>): Prisma__t_kelurahanClient<$Result.GetResult<Prisma.$t_kelurahanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_kelurahans.
     * @param {t_kelurahanCreateManyArgs} args - Arguments to create many T_kelurahans.
     * @example
     * // Create many T_kelurahans
     * const t_kelurahan = await prisma.t_kelurahan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_kelurahanCreateManyArgs>(args?: SelectSubset<T, t_kelurahanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_kelurahan.
     * @param {t_kelurahanDeleteArgs} args - Arguments to delete one T_kelurahan.
     * @example
     * // Delete one T_kelurahan
     * const T_kelurahan = await prisma.t_kelurahan.delete({
     *   where: {
     *     // ... filter to delete one T_kelurahan
     *   }
     * })
     * 
     */
    delete<T extends t_kelurahanDeleteArgs>(args: SelectSubset<T, t_kelurahanDeleteArgs<ExtArgs>>): Prisma__t_kelurahanClient<$Result.GetResult<Prisma.$t_kelurahanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_kelurahan.
     * @param {t_kelurahanUpdateArgs} args - Arguments to update one T_kelurahan.
     * @example
     * // Update one T_kelurahan
     * const t_kelurahan = await prisma.t_kelurahan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_kelurahanUpdateArgs>(args: SelectSubset<T, t_kelurahanUpdateArgs<ExtArgs>>): Prisma__t_kelurahanClient<$Result.GetResult<Prisma.$t_kelurahanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_kelurahans.
     * @param {t_kelurahanDeleteManyArgs} args - Arguments to filter T_kelurahans to delete.
     * @example
     * // Delete a few T_kelurahans
     * const { count } = await prisma.t_kelurahan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_kelurahanDeleteManyArgs>(args?: SelectSubset<T, t_kelurahanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_kelurahans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kelurahanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_kelurahans
     * const t_kelurahan = await prisma.t_kelurahan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_kelurahanUpdateManyArgs>(args: SelectSubset<T, t_kelurahanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_kelurahan.
     * @param {t_kelurahanUpsertArgs} args - Arguments to update or create a T_kelurahan.
     * @example
     * // Update or create a T_kelurahan
     * const t_kelurahan = await prisma.t_kelurahan.upsert({
     *   create: {
     *     // ... data to create a T_kelurahan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_kelurahan we want to update
     *   }
     * })
     */
    upsert<T extends t_kelurahanUpsertArgs>(args: SelectSubset<T, t_kelurahanUpsertArgs<ExtArgs>>): Prisma__t_kelurahanClient<$Result.GetResult<Prisma.$t_kelurahanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_kelurahans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kelurahanCountArgs} args - Arguments to filter T_kelurahans to count.
     * @example
     * // Count the number of T_kelurahans
     * const count = await prisma.t_kelurahan.count({
     *   where: {
     *     // ... the filter for the T_kelurahans we want to count
     *   }
     * })
    **/
    count<T extends t_kelurahanCountArgs>(
      args?: Subset<T, t_kelurahanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_kelurahanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_kelurahan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_kelurahanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_kelurahanAggregateArgs>(args: Subset<T, T_kelurahanAggregateArgs>): Prisma.PrismaPromise<GetT_kelurahanAggregateType<T>>

    /**
     * Group by T_kelurahan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kelurahanGroupByArgs} args - Group by arguments.
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
      T extends t_kelurahanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_kelurahanGroupByArgs['orderBy'] }
        : { orderBy?: t_kelurahanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_kelurahanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_kelurahanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_kelurahan model
   */
  readonly fields: t_kelurahanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_kelurahan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_kelurahanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_kelurahan model
   */
  interface t_kelurahanFieldRefs {
    readonly id: FieldRef<"t_kelurahan", 'String'>
    readonly uuid: FieldRef<"t_kelurahan", 'String'>
    readonly nama: FieldRef<"t_kelurahan", 'String'>
    readonly latitude: FieldRef<"t_kelurahan", 'Float'>
    readonly longitude: FieldRef<"t_kelurahan", 'Float'>
    readonly created_at: FieldRef<"t_kelurahan", 'DateTime'>
    readonly updated_at: FieldRef<"t_kelurahan", 'DateTime'>
    readonly created_by: FieldRef<"t_kelurahan", 'String'>
    readonly updated_by: FieldRef<"t_kelurahan", 'String'>
    readonly deleted_at: FieldRef<"t_kelurahan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * t_kelurahan findUnique
   */
  export type t_kelurahanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kelurahan
     */
    select?: t_kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kelurahan
     */
    omit?: t_kelurahanOmit<ExtArgs> | null
    /**
     * Filter, which t_kelurahan to fetch.
     */
    where: t_kelurahanWhereUniqueInput
  }

  /**
   * t_kelurahan findUniqueOrThrow
   */
  export type t_kelurahanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kelurahan
     */
    select?: t_kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kelurahan
     */
    omit?: t_kelurahanOmit<ExtArgs> | null
    /**
     * Filter, which t_kelurahan to fetch.
     */
    where: t_kelurahanWhereUniqueInput
  }

  /**
   * t_kelurahan findFirst
   */
  export type t_kelurahanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kelurahan
     */
    select?: t_kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kelurahan
     */
    omit?: t_kelurahanOmit<ExtArgs> | null
    /**
     * Filter, which t_kelurahan to fetch.
     */
    where?: t_kelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_kelurahans to fetch.
     */
    orderBy?: t_kelurahanOrderByWithRelationInput | t_kelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_kelurahans.
     */
    cursor?: t_kelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_kelurahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_kelurahans.
     */
    distinct?: T_kelurahanScalarFieldEnum | T_kelurahanScalarFieldEnum[]
  }

  /**
   * t_kelurahan findFirstOrThrow
   */
  export type t_kelurahanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kelurahan
     */
    select?: t_kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kelurahan
     */
    omit?: t_kelurahanOmit<ExtArgs> | null
    /**
     * Filter, which t_kelurahan to fetch.
     */
    where?: t_kelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_kelurahans to fetch.
     */
    orderBy?: t_kelurahanOrderByWithRelationInput | t_kelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_kelurahans.
     */
    cursor?: t_kelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_kelurahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_kelurahans.
     */
    distinct?: T_kelurahanScalarFieldEnum | T_kelurahanScalarFieldEnum[]
  }

  /**
   * t_kelurahan findMany
   */
  export type t_kelurahanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kelurahan
     */
    select?: t_kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kelurahan
     */
    omit?: t_kelurahanOmit<ExtArgs> | null
    /**
     * Filter, which t_kelurahans to fetch.
     */
    where?: t_kelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_kelurahans to fetch.
     */
    orderBy?: t_kelurahanOrderByWithRelationInput | t_kelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_kelurahans.
     */
    cursor?: t_kelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_kelurahans.
     */
    skip?: number
    distinct?: T_kelurahanScalarFieldEnum | T_kelurahanScalarFieldEnum[]
  }

  /**
   * t_kelurahan create
   */
  export type t_kelurahanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kelurahan
     */
    select?: t_kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kelurahan
     */
    omit?: t_kelurahanOmit<ExtArgs> | null
    /**
     * The data needed to create a t_kelurahan.
     */
    data: XOR<t_kelurahanCreateInput, t_kelurahanUncheckedCreateInput>
  }

  /**
   * t_kelurahan createMany
   */
  export type t_kelurahanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_kelurahans.
     */
    data: t_kelurahanCreateManyInput | t_kelurahanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_kelurahan update
   */
  export type t_kelurahanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kelurahan
     */
    select?: t_kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kelurahan
     */
    omit?: t_kelurahanOmit<ExtArgs> | null
    /**
     * The data needed to update a t_kelurahan.
     */
    data: XOR<t_kelurahanUpdateInput, t_kelurahanUncheckedUpdateInput>
    /**
     * Choose, which t_kelurahan to update.
     */
    where: t_kelurahanWhereUniqueInput
  }

  /**
   * t_kelurahan updateMany
   */
  export type t_kelurahanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_kelurahans.
     */
    data: XOR<t_kelurahanUpdateManyMutationInput, t_kelurahanUncheckedUpdateManyInput>
    /**
     * Filter which t_kelurahans to update
     */
    where?: t_kelurahanWhereInput
    /**
     * Limit how many t_kelurahans to update.
     */
    limit?: number
  }

  /**
   * t_kelurahan upsert
   */
  export type t_kelurahanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kelurahan
     */
    select?: t_kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kelurahan
     */
    omit?: t_kelurahanOmit<ExtArgs> | null
    /**
     * The filter to search for the t_kelurahan to update in case it exists.
     */
    where: t_kelurahanWhereUniqueInput
    /**
     * In case the t_kelurahan found by the `where` argument doesn't exist, create a new t_kelurahan with this data.
     */
    create: XOR<t_kelurahanCreateInput, t_kelurahanUncheckedCreateInput>
    /**
     * In case the t_kelurahan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_kelurahanUpdateInput, t_kelurahanUncheckedUpdateInput>
  }

  /**
   * t_kelurahan delete
   */
  export type t_kelurahanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kelurahan
     */
    select?: t_kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kelurahan
     */
    omit?: t_kelurahanOmit<ExtArgs> | null
    /**
     * Filter which t_kelurahan to delete.
     */
    where: t_kelurahanWhereUniqueInput
  }

  /**
   * t_kelurahan deleteMany
   */
  export type t_kelurahanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_kelurahans to delete
     */
    where?: t_kelurahanWhereInput
    /**
     * Limit how many t_kelurahans to delete.
     */
    limit?: number
  }

  /**
   * t_kelurahan without action
   */
  export type t_kelurahanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kelurahan
     */
    select?: t_kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kelurahan
     */
    omit?: t_kelurahanOmit<ExtArgs> | null
  }


  /**
   * Model t_kota
   */

  export type AggregateT_kota = {
    _count: T_kotaCountAggregateOutputType | null
    _avg: T_kotaAvgAggregateOutputType | null
    _sum: T_kotaSumAggregateOutputType | null
    _min: T_kotaMinAggregateOutputType | null
    _max: T_kotaMaxAggregateOutputType | null
  }

  export type T_kotaAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type T_kotaSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type T_kotaMinAggregateOutputType = {
    id: string | null
    uuid: string | null
    nama: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type T_kotaMaxAggregateOutputType = {
    id: string | null
    uuid: string | null
    nama: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type T_kotaCountAggregateOutputType = {
    id: number
    uuid: number
    nama: number
    latitude: number
    longitude: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type T_kotaAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type T_kotaSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type T_kotaMinAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type T_kotaMaxAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type T_kotaCountAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type T_kotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_kota to aggregate.
     */
    where?: t_kotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_kotas to fetch.
     */
    orderBy?: t_kotaOrderByWithRelationInput | t_kotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_kotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_kotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_kotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_kotas
    **/
    _count?: true | T_kotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_kotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_kotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_kotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_kotaMaxAggregateInputType
  }

  export type GetT_kotaAggregateType<T extends T_kotaAggregateArgs> = {
        [P in keyof T & keyof AggregateT_kota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_kota[P]>
      : GetScalarType<T[P], AggregateT_kota[P]>
  }




  export type t_kotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_kotaWhereInput
    orderBy?: t_kotaOrderByWithAggregationInput | t_kotaOrderByWithAggregationInput[]
    by: T_kotaScalarFieldEnum[] | T_kotaScalarFieldEnum
    having?: t_kotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_kotaCountAggregateInputType | true
    _avg?: T_kotaAvgAggregateInputType
    _sum?: T_kotaSumAggregateInputType
    _min?: T_kotaMinAggregateInputType
    _max?: T_kotaMaxAggregateInputType
  }

  export type T_kotaGroupByOutputType = {
    id: string
    uuid: string
    nama: string
    latitude: number
    longitude: number
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
    _count: T_kotaCountAggregateOutputType | null
    _avg: T_kotaAvgAggregateOutputType | null
    _sum: T_kotaSumAggregateOutputType | null
    _min: T_kotaMinAggregateOutputType | null
    _max: T_kotaMaxAggregateOutputType | null
  }

  type GetT_kotaGroupByPayload<T extends t_kotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_kotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_kotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_kotaGroupByOutputType[P]>
            : GetScalarType<T[P], T_kotaGroupByOutputType[P]>
        }
      >
    >


  export type t_kotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nama?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["t_kota"]>



  export type t_kotaSelectScalar = {
    id?: boolean
    uuid?: boolean
    nama?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type t_kotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "nama" | "latitude" | "longitude" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_at", ExtArgs["result"]["t_kota"]>

  export type $t_kotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_kota"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uuid: string
      nama: string
      latitude: number
      longitude: number
      created_at: Date | null
      updated_at: Date | null
      created_by: string | null
      updated_by: string | null
      deleted_at: Date | null
    }, ExtArgs["result"]["t_kota"]>
    composites: {}
  }

  type t_kotaGetPayload<S extends boolean | null | undefined | t_kotaDefaultArgs> = $Result.GetResult<Prisma.$t_kotaPayload, S>

  type t_kotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_kotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_kotaCountAggregateInputType | true
    }

  export interface t_kotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_kota'], meta: { name: 't_kota' } }
    /**
     * Find zero or one T_kota that matches the filter.
     * @param {t_kotaFindUniqueArgs} args - Arguments to find a T_kota
     * @example
     * // Get one T_kota
     * const t_kota = await prisma.t_kota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_kotaFindUniqueArgs>(args: SelectSubset<T, t_kotaFindUniqueArgs<ExtArgs>>): Prisma__t_kotaClient<$Result.GetResult<Prisma.$t_kotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_kota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_kotaFindUniqueOrThrowArgs} args - Arguments to find a T_kota
     * @example
     * // Get one T_kota
     * const t_kota = await prisma.t_kota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_kotaFindUniqueOrThrowArgs>(args: SelectSubset<T, t_kotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_kotaClient<$Result.GetResult<Prisma.$t_kotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_kota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kotaFindFirstArgs} args - Arguments to find a T_kota
     * @example
     * // Get one T_kota
     * const t_kota = await prisma.t_kota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_kotaFindFirstArgs>(args?: SelectSubset<T, t_kotaFindFirstArgs<ExtArgs>>): Prisma__t_kotaClient<$Result.GetResult<Prisma.$t_kotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_kota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kotaFindFirstOrThrowArgs} args - Arguments to find a T_kota
     * @example
     * // Get one T_kota
     * const t_kota = await prisma.t_kota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_kotaFindFirstOrThrowArgs>(args?: SelectSubset<T, t_kotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_kotaClient<$Result.GetResult<Prisma.$t_kotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_kotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_kotas
     * const t_kotas = await prisma.t_kota.findMany()
     * 
     * // Get first 10 T_kotas
     * const t_kotas = await prisma.t_kota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_kotaWithIdOnly = await prisma.t_kota.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends t_kotaFindManyArgs>(args?: SelectSubset<T, t_kotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_kotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_kota.
     * @param {t_kotaCreateArgs} args - Arguments to create a T_kota.
     * @example
     * // Create one T_kota
     * const T_kota = await prisma.t_kota.create({
     *   data: {
     *     // ... data to create a T_kota
     *   }
     * })
     * 
     */
    create<T extends t_kotaCreateArgs>(args: SelectSubset<T, t_kotaCreateArgs<ExtArgs>>): Prisma__t_kotaClient<$Result.GetResult<Prisma.$t_kotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_kotas.
     * @param {t_kotaCreateManyArgs} args - Arguments to create many T_kotas.
     * @example
     * // Create many T_kotas
     * const t_kota = await prisma.t_kota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_kotaCreateManyArgs>(args?: SelectSubset<T, t_kotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_kota.
     * @param {t_kotaDeleteArgs} args - Arguments to delete one T_kota.
     * @example
     * // Delete one T_kota
     * const T_kota = await prisma.t_kota.delete({
     *   where: {
     *     // ... filter to delete one T_kota
     *   }
     * })
     * 
     */
    delete<T extends t_kotaDeleteArgs>(args: SelectSubset<T, t_kotaDeleteArgs<ExtArgs>>): Prisma__t_kotaClient<$Result.GetResult<Prisma.$t_kotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_kota.
     * @param {t_kotaUpdateArgs} args - Arguments to update one T_kota.
     * @example
     * // Update one T_kota
     * const t_kota = await prisma.t_kota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_kotaUpdateArgs>(args: SelectSubset<T, t_kotaUpdateArgs<ExtArgs>>): Prisma__t_kotaClient<$Result.GetResult<Prisma.$t_kotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_kotas.
     * @param {t_kotaDeleteManyArgs} args - Arguments to filter T_kotas to delete.
     * @example
     * // Delete a few T_kotas
     * const { count } = await prisma.t_kota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_kotaDeleteManyArgs>(args?: SelectSubset<T, t_kotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_kotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_kotas
     * const t_kota = await prisma.t_kota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_kotaUpdateManyArgs>(args: SelectSubset<T, t_kotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_kota.
     * @param {t_kotaUpsertArgs} args - Arguments to update or create a T_kota.
     * @example
     * // Update or create a T_kota
     * const t_kota = await prisma.t_kota.upsert({
     *   create: {
     *     // ... data to create a T_kota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_kota we want to update
     *   }
     * })
     */
    upsert<T extends t_kotaUpsertArgs>(args: SelectSubset<T, t_kotaUpsertArgs<ExtArgs>>): Prisma__t_kotaClient<$Result.GetResult<Prisma.$t_kotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_kotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kotaCountArgs} args - Arguments to filter T_kotas to count.
     * @example
     * // Count the number of T_kotas
     * const count = await prisma.t_kota.count({
     *   where: {
     *     // ... the filter for the T_kotas we want to count
     *   }
     * })
    **/
    count<T extends t_kotaCountArgs>(
      args?: Subset<T, t_kotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_kotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_kota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_kotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_kotaAggregateArgs>(args: Subset<T, T_kotaAggregateArgs>): Prisma.PrismaPromise<GetT_kotaAggregateType<T>>

    /**
     * Group by T_kota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_kotaGroupByArgs} args - Group by arguments.
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
      T extends t_kotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_kotaGroupByArgs['orderBy'] }
        : { orderBy?: t_kotaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_kotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_kotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_kota model
   */
  readonly fields: t_kotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_kota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_kotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_kota model
   */
  interface t_kotaFieldRefs {
    readonly id: FieldRef<"t_kota", 'String'>
    readonly uuid: FieldRef<"t_kota", 'String'>
    readonly nama: FieldRef<"t_kota", 'String'>
    readonly latitude: FieldRef<"t_kota", 'Float'>
    readonly longitude: FieldRef<"t_kota", 'Float'>
    readonly created_at: FieldRef<"t_kota", 'DateTime'>
    readonly updated_at: FieldRef<"t_kota", 'DateTime'>
    readonly created_by: FieldRef<"t_kota", 'String'>
    readonly updated_by: FieldRef<"t_kota", 'String'>
    readonly deleted_at: FieldRef<"t_kota", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * t_kota findUnique
   */
  export type t_kotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kota
     */
    select?: t_kotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kota
     */
    omit?: t_kotaOmit<ExtArgs> | null
    /**
     * Filter, which t_kota to fetch.
     */
    where: t_kotaWhereUniqueInput
  }

  /**
   * t_kota findUniqueOrThrow
   */
  export type t_kotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kota
     */
    select?: t_kotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kota
     */
    omit?: t_kotaOmit<ExtArgs> | null
    /**
     * Filter, which t_kota to fetch.
     */
    where: t_kotaWhereUniqueInput
  }

  /**
   * t_kota findFirst
   */
  export type t_kotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kota
     */
    select?: t_kotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kota
     */
    omit?: t_kotaOmit<ExtArgs> | null
    /**
     * Filter, which t_kota to fetch.
     */
    where?: t_kotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_kotas to fetch.
     */
    orderBy?: t_kotaOrderByWithRelationInput | t_kotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_kotas.
     */
    cursor?: t_kotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_kotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_kotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_kotas.
     */
    distinct?: T_kotaScalarFieldEnum | T_kotaScalarFieldEnum[]
  }

  /**
   * t_kota findFirstOrThrow
   */
  export type t_kotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kota
     */
    select?: t_kotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kota
     */
    omit?: t_kotaOmit<ExtArgs> | null
    /**
     * Filter, which t_kota to fetch.
     */
    where?: t_kotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_kotas to fetch.
     */
    orderBy?: t_kotaOrderByWithRelationInput | t_kotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_kotas.
     */
    cursor?: t_kotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_kotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_kotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_kotas.
     */
    distinct?: T_kotaScalarFieldEnum | T_kotaScalarFieldEnum[]
  }

  /**
   * t_kota findMany
   */
  export type t_kotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kota
     */
    select?: t_kotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kota
     */
    omit?: t_kotaOmit<ExtArgs> | null
    /**
     * Filter, which t_kotas to fetch.
     */
    where?: t_kotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_kotas to fetch.
     */
    orderBy?: t_kotaOrderByWithRelationInput | t_kotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_kotas.
     */
    cursor?: t_kotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_kotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_kotas.
     */
    skip?: number
    distinct?: T_kotaScalarFieldEnum | T_kotaScalarFieldEnum[]
  }

  /**
   * t_kota create
   */
  export type t_kotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kota
     */
    select?: t_kotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kota
     */
    omit?: t_kotaOmit<ExtArgs> | null
    /**
     * The data needed to create a t_kota.
     */
    data: XOR<t_kotaCreateInput, t_kotaUncheckedCreateInput>
  }

  /**
   * t_kota createMany
   */
  export type t_kotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_kotas.
     */
    data: t_kotaCreateManyInput | t_kotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_kota update
   */
  export type t_kotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kota
     */
    select?: t_kotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kota
     */
    omit?: t_kotaOmit<ExtArgs> | null
    /**
     * The data needed to update a t_kota.
     */
    data: XOR<t_kotaUpdateInput, t_kotaUncheckedUpdateInput>
    /**
     * Choose, which t_kota to update.
     */
    where: t_kotaWhereUniqueInput
  }

  /**
   * t_kota updateMany
   */
  export type t_kotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_kotas.
     */
    data: XOR<t_kotaUpdateManyMutationInput, t_kotaUncheckedUpdateManyInput>
    /**
     * Filter which t_kotas to update
     */
    where?: t_kotaWhereInput
    /**
     * Limit how many t_kotas to update.
     */
    limit?: number
  }

  /**
   * t_kota upsert
   */
  export type t_kotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kota
     */
    select?: t_kotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kota
     */
    omit?: t_kotaOmit<ExtArgs> | null
    /**
     * The filter to search for the t_kota to update in case it exists.
     */
    where: t_kotaWhereUniqueInput
    /**
     * In case the t_kota found by the `where` argument doesn't exist, create a new t_kota with this data.
     */
    create: XOR<t_kotaCreateInput, t_kotaUncheckedCreateInput>
    /**
     * In case the t_kota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_kotaUpdateInput, t_kotaUncheckedUpdateInput>
  }

  /**
   * t_kota delete
   */
  export type t_kotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kota
     */
    select?: t_kotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kota
     */
    omit?: t_kotaOmit<ExtArgs> | null
    /**
     * Filter which t_kota to delete.
     */
    where: t_kotaWhereUniqueInput
  }

  /**
   * t_kota deleteMany
   */
  export type t_kotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_kotas to delete
     */
    where?: t_kotaWhereInput
    /**
     * Limit how many t_kotas to delete.
     */
    limit?: number
  }

  /**
   * t_kota without action
   */
  export type t_kotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_kota
     */
    select?: t_kotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_kota
     */
    omit?: t_kotaOmit<ExtArgs> | null
  }


  /**
   * Model t_provinsi
   */

  export type AggregateT_provinsi = {
    _count: T_provinsiCountAggregateOutputType | null
    _avg: T_provinsiAvgAggregateOutputType | null
    _sum: T_provinsiSumAggregateOutputType | null
    _min: T_provinsiMinAggregateOutputType | null
    _max: T_provinsiMaxAggregateOutputType | null
  }

  export type T_provinsiAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type T_provinsiSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type T_provinsiMinAggregateOutputType = {
    id: string | null
    uuid: string | null
    nama: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type T_provinsiMaxAggregateOutputType = {
    id: string | null
    uuid: string | null
    nama: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type T_provinsiCountAggregateOutputType = {
    id: number
    uuid: number
    nama: number
    latitude: number
    longitude: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type T_provinsiAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type T_provinsiSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type T_provinsiMinAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type T_provinsiMaxAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type T_provinsiCountAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    latitude?: true
    longitude?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type T_provinsiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_provinsi to aggregate.
     */
    where?: t_provinsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_provinsis to fetch.
     */
    orderBy?: t_provinsiOrderByWithRelationInput | t_provinsiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: t_provinsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_provinsis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_provinsis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned t_provinsis
    **/
    _count?: true | T_provinsiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_provinsiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_provinsiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_provinsiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_provinsiMaxAggregateInputType
  }

  export type GetT_provinsiAggregateType<T extends T_provinsiAggregateArgs> = {
        [P in keyof T & keyof AggregateT_provinsi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_provinsi[P]>
      : GetScalarType<T[P], AggregateT_provinsi[P]>
  }




  export type t_provinsiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: t_provinsiWhereInput
    orderBy?: t_provinsiOrderByWithAggregationInput | t_provinsiOrderByWithAggregationInput[]
    by: T_provinsiScalarFieldEnum[] | T_provinsiScalarFieldEnum
    having?: t_provinsiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_provinsiCountAggregateInputType | true
    _avg?: T_provinsiAvgAggregateInputType
    _sum?: T_provinsiSumAggregateInputType
    _min?: T_provinsiMinAggregateInputType
    _max?: T_provinsiMaxAggregateInputType
  }

  export type T_provinsiGroupByOutputType = {
    id: string
    uuid: string
    nama: string
    latitude: number
    longitude: number
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
    _count: T_provinsiCountAggregateOutputType | null
    _avg: T_provinsiAvgAggregateOutputType | null
    _sum: T_provinsiSumAggregateOutputType | null
    _min: T_provinsiMinAggregateOutputType | null
    _max: T_provinsiMaxAggregateOutputType | null
  }

  type GetT_provinsiGroupByPayload<T extends t_provinsiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_provinsiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_provinsiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_provinsiGroupByOutputType[P]>
            : GetScalarType<T[P], T_provinsiGroupByOutputType[P]>
        }
      >
    >


  export type t_provinsiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nama?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["t_provinsi"]>



  export type t_provinsiSelectScalar = {
    id?: boolean
    uuid?: boolean
    nama?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type t_provinsiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "nama" | "latitude" | "longitude" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_at", ExtArgs["result"]["t_provinsi"]>

  export type $t_provinsiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "t_provinsi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uuid: string
      nama: string
      latitude: number
      longitude: number
      created_at: Date | null
      updated_at: Date | null
      created_by: string | null
      updated_by: string | null
      deleted_at: Date | null
    }, ExtArgs["result"]["t_provinsi"]>
    composites: {}
  }

  type t_provinsiGetPayload<S extends boolean | null | undefined | t_provinsiDefaultArgs> = $Result.GetResult<Prisma.$t_provinsiPayload, S>

  type t_provinsiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<t_provinsiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_provinsiCountAggregateInputType | true
    }

  export interface t_provinsiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['t_provinsi'], meta: { name: 't_provinsi' } }
    /**
     * Find zero or one T_provinsi that matches the filter.
     * @param {t_provinsiFindUniqueArgs} args - Arguments to find a T_provinsi
     * @example
     * // Get one T_provinsi
     * const t_provinsi = await prisma.t_provinsi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends t_provinsiFindUniqueArgs>(args: SelectSubset<T, t_provinsiFindUniqueArgs<ExtArgs>>): Prisma__t_provinsiClient<$Result.GetResult<Prisma.$t_provinsiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_provinsi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {t_provinsiFindUniqueOrThrowArgs} args - Arguments to find a T_provinsi
     * @example
     * // Get one T_provinsi
     * const t_provinsi = await prisma.t_provinsi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends t_provinsiFindUniqueOrThrowArgs>(args: SelectSubset<T, t_provinsiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__t_provinsiClient<$Result.GetResult<Prisma.$t_provinsiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_provinsi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_provinsiFindFirstArgs} args - Arguments to find a T_provinsi
     * @example
     * // Get one T_provinsi
     * const t_provinsi = await prisma.t_provinsi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends t_provinsiFindFirstArgs>(args?: SelectSubset<T, t_provinsiFindFirstArgs<ExtArgs>>): Prisma__t_provinsiClient<$Result.GetResult<Prisma.$t_provinsiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_provinsi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_provinsiFindFirstOrThrowArgs} args - Arguments to find a T_provinsi
     * @example
     * // Get one T_provinsi
     * const t_provinsi = await prisma.t_provinsi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends t_provinsiFindFirstOrThrowArgs>(args?: SelectSubset<T, t_provinsiFindFirstOrThrowArgs<ExtArgs>>): Prisma__t_provinsiClient<$Result.GetResult<Prisma.$t_provinsiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_provinsis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_provinsiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_provinsis
     * const t_provinsis = await prisma.t_provinsi.findMany()
     * 
     * // Get first 10 T_provinsis
     * const t_provinsis = await prisma.t_provinsi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const t_provinsiWithIdOnly = await prisma.t_provinsi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends t_provinsiFindManyArgs>(args?: SelectSubset<T, t_provinsiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$t_provinsiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_provinsi.
     * @param {t_provinsiCreateArgs} args - Arguments to create a T_provinsi.
     * @example
     * // Create one T_provinsi
     * const T_provinsi = await prisma.t_provinsi.create({
     *   data: {
     *     // ... data to create a T_provinsi
     *   }
     * })
     * 
     */
    create<T extends t_provinsiCreateArgs>(args: SelectSubset<T, t_provinsiCreateArgs<ExtArgs>>): Prisma__t_provinsiClient<$Result.GetResult<Prisma.$t_provinsiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_provinsis.
     * @param {t_provinsiCreateManyArgs} args - Arguments to create many T_provinsis.
     * @example
     * // Create many T_provinsis
     * const t_provinsi = await prisma.t_provinsi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends t_provinsiCreateManyArgs>(args?: SelectSubset<T, t_provinsiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a T_provinsi.
     * @param {t_provinsiDeleteArgs} args - Arguments to delete one T_provinsi.
     * @example
     * // Delete one T_provinsi
     * const T_provinsi = await prisma.t_provinsi.delete({
     *   where: {
     *     // ... filter to delete one T_provinsi
     *   }
     * })
     * 
     */
    delete<T extends t_provinsiDeleteArgs>(args: SelectSubset<T, t_provinsiDeleteArgs<ExtArgs>>): Prisma__t_provinsiClient<$Result.GetResult<Prisma.$t_provinsiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_provinsi.
     * @param {t_provinsiUpdateArgs} args - Arguments to update one T_provinsi.
     * @example
     * // Update one T_provinsi
     * const t_provinsi = await prisma.t_provinsi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends t_provinsiUpdateArgs>(args: SelectSubset<T, t_provinsiUpdateArgs<ExtArgs>>): Prisma__t_provinsiClient<$Result.GetResult<Prisma.$t_provinsiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_provinsis.
     * @param {t_provinsiDeleteManyArgs} args - Arguments to filter T_provinsis to delete.
     * @example
     * // Delete a few T_provinsis
     * const { count } = await prisma.t_provinsi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends t_provinsiDeleteManyArgs>(args?: SelectSubset<T, t_provinsiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_provinsis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_provinsiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_provinsis
     * const t_provinsi = await prisma.t_provinsi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends t_provinsiUpdateManyArgs>(args: SelectSubset<T, t_provinsiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one T_provinsi.
     * @param {t_provinsiUpsertArgs} args - Arguments to update or create a T_provinsi.
     * @example
     * // Update or create a T_provinsi
     * const t_provinsi = await prisma.t_provinsi.upsert({
     *   create: {
     *     // ... data to create a T_provinsi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_provinsi we want to update
     *   }
     * })
     */
    upsert<T extends t_provinsiUpsertArgs>(args: SelectSubset<T, t_provinsiUpsertArgs<ExtArgs>>): Prisma__t_provinsiClient<$Result.GetResult<Prisma.$t_provinsiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_provinsis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_provinsiCountArgs} args - Arguments to filter T_provinsis to count.
     * @example
     * // Count the number of T_provinsis
     * const count = await prisma.t_provinsi.count({
     *   where: {
     *     // ... the filter for the T_provinsis we want to count
     *   }
     * })
    **/
    count<T extends t_provinsiCountArgs>(
      args?: Subset<T, t_provinsiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_provinsiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_provinsi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_provinsiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends T_provinsiAggregateArgs>(args: Subset<T, T_provinsiAggregateArgs>): Prisma.PrismaPromise<GetT_provinsiAggregateType<T>>

    /**
     * Group by T_provinsi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {t_provinsiGroupByArgs} args - Group by arguments.
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
      T extends t_provinsiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: t_provinsiGroupByArgs['orderBy'] }
        : { orderBy?: t_provinsiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, t_provinsiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_provinsiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the t_provinsi model
   */
  readonly fields: t_provinsiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for t_provinsi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__t_provinsiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the t_provinsi model
   */
  interface t_provinsiFieldRefs {
    readonly id: FieldRef<"t_provinsi", 'String'>
    readonly uuid: FieldRef<"t_provinsi", 'String'>
    readonly nama: FieldRef<"t_provinsi", 'String'>
    readonly latitude: FieldRef<"t_provinsi", 'Float'>
    readonly longitude: FieldRef<"t_provinsi", 'Float'>
    readonly created_at: FieldRef<"t_provinsi", 'DateTime'>
    readonly updated_at: FieldRef<"t_provinsi", 'DateTime'>
    readonly created_by: FieldRef<"t_provinsi", 'String'>
    readonly updated_by: FieldRef<"t_provinsi", 'String'>
    readonly deleted_at: FieldRef<"t_provinsi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * t_provinsi findUnique
   */
  export type t_provinsiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_provinsi
     */
    select?: t_provinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_provinsi
     */
    omit?: t_provinsiOmit<ExtArgs> | null
    /**
     * Filter, which t_provinsi to fetch.
     */
    where: t_provinsiWhereUniqueInput
  }

  /**
   * t_provinsi findUniqueOrThrow
   */
  export type t_provinsiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_provinsi
     */
    select?: t_provinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_provinsi
     */
    omit?: t_provinsiOmit<ExtArgs> | null
    /**
     * Filter, which t_provinsi to fetch.
     */
    where: t_provinsiWhereUniqueInput
  }

  /**
   * t_provinsi findFirst
   */
  export type t_provinsiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_provinsi
     */
    select?: t_provinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_provinsi
     */
    omit?: t_provinsiOmit<ExtArgs> | null
    /**
     * Filter, which t_provinsi to fetch.
     */
    where?: t_provinsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_provinsis to fetch.
     */
    orderBy?: t_provinsiOrderByWithRelationInput | t_provinsiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_provinsis.
     */
    cursor?: t_provinsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_provinsis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_provinsis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_provinsis.
     */
    distinct?: T_provinsiScalarFieldEnum | T_provinsiScalarFieldEnum[]
  }

  /**
   * t_provinsi findFirstOrThrow
   */
  export type t_provinsiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_provinsi
     */
    select?: t_provinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_provinsi
     */
    omit?: t_provinsiOmit<ExtArgs> | null
    /**
     * Filter, which t_provinsi to fetch.
     */
    where?: t_provinsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_provinsis to fetch.
     */
    orderBy?: t_provinsiOrderByWithRelationInput | t_provinsiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for t_provinsis.
     */
    cursor?: t_provinsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_provinsis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_provinsis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of t_provinsis.
     */
    distinct?: T_provinsiScalarFieldEnum | T_provinsiScalarFieldEnum[]
  }

  /**
   * t_provinsi findMany
   */
  export type t_provinsiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_provinsi
     */
    select?: t_provinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_provinsi
     */
    omit?: t_provinsiOmit<ExtArgs> | null
    /**
     * Filter, which t_provinsis to fetch.
     */
    where?: t_provinsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of t_provinsis to fetch.
     */
    orderBy?: t_provinsiOrderByWithRelationInput | t_provinsiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing t_provinsis.
     */
    cursor?: t_provinsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` t_provinsis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` t_provinsis.
     */
    skip?: number
    distinct?: T_provinsiScalarFieldEnum | T_provinsiScalarFieldEnum[]
  }

  /**
   * t_provinsi create
   */
  export type t_provinsiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_provinsi
     */
    select?: t_provinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_provinsi
     */
    omit?: t_provinsiOmit<ExtArgs> | null
    /**
     * The data needed to create a t_provinsi.
     */
    data: XOR<t_provinsiCreateInput, t_provinsiUncheckedCreateInput>
  }

  /**
   * t_provinsi createMany
   */
  export type t_provinsiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many t_provinsis.
     */
    data: t_provinsiCreateManyInput | t_provinsiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * t_provinsi update
   */
  export type t_provinsiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_provinsi
     */
    select?: t_provinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_provinsi
     */
    omit?: t_provinsiOmit<ExtArgs> | null
    /**
     * The data needed to update a t_provinsi.
     */
    data: XOR<t_provinsiUpdateInput, t_provinsiUncheckedUpdateInput>
    /**
     * Choose, which t_provinsi to update.
     */
    where: t_provinsiWhereUniqueInput
  }

  /**
   * t_provinsi updateMany
   */
  export type t_provinsiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update t_provinsis.
     */
    data: XOR<t_provinsiUpdateManyMutationInput, t_provinsiUncheckedUpdateManyInput>
    /**
     * Filter which t_provinsis to update
     */
    where?: t_provinsiWhereInput
    /**
     * Limit how many t_provinsis to update.
     */
    limit?: number
  }

  /**
   * t_provinsi upsert
   */
  export type t_provinsiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_provinsi
     */
    select?: t_provinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_provinsi
     */
    omit?: t_provinsiOmit<ExtArgs> | null
    /**
     * The filter to search for the t_provinsi to update in case it exists.
     */
    where: t_provinsiWhereUniqueInput
    /**
     * In case the t_provinsi found by the `where` argument doesn't exist, create a new t_provinsi with this data.
     */
    create: XOR<t_provinsiCreateInput, t_provinsiUncheckedCreateInput>
    /**
     * In case the t_provinsi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<t_provinsiUpdateInput, t_provinsiUncheckedUpdateInput>
  }

  /**
   * t_provinsi delete
   */
  export type t_provinsiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_provinsi
     */
    select?: t_provinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_provinsi
     */
    omit?: t_provinsiOmit<ExtArgs> | null
    /**
     * Filter which t_provinsi to delete.
     */
    where: t_provinsiWhereUniqueInput
  }

  /**
   * t_provinsi deleteMany
   */
  export type t_provinsiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which t_provinsis to delete
     */
    where?: t_provinsiWhereInput
    /**
     * Limit how many t_provinsis to delete.
     */
    limit?: number
  }

  /**
   * t_provinsi without action
   */
  export type t_provinsiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the t_provinsi
     */
    select?: t_provinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the t_provinsi
     */
    omit?: t_provinsiOmit<ExtArgs> | null
  }


  /**
   * Model user
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
    admin_id: number | null
    peserta_id: number | null
    user_role_id: number | null
    verified: number | null
    status: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
    admin_id: number | null
    peserta_id: bigint | null
    user_role_id: number | null
    verified: number | null
    status: number | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    username: string | null
    admin_id: number | null
    peserta_id: bigint | null
    user_role_id: number | null
    otp: string | null
    otp_expired: Date | null
    complete_onboarding: boolean | null
    token: string | null
    refresh_token: string | null
    verified: number | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    username: string | null
    admin_id: number | null
    peserta_id: bigint | null
    user_role_id: number | null
    otp: string | null
    otp_expired: Date | null
    complete_onboarding: boolean | null
    token: string | null
    refresh_token: string | null
    verified: number | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    uuid: number
    username: number
    admin_id: number
    peserta_id: number
    user_role_id: number
    otp: number
    otp_expired: number
    complete_onboarding: number
    token: number
    refresh_token: number
    verified: number
    status: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    admin_id?: true
    peserta_id?: true
    user_role_id?: true
    verified?: true
    status?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    admin_id?: true
    peserta_id?: true
    user_role_id?: true
    verified?: true
    status?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    uuid?: true
    username?: true
    admin_id?: true
    peserta_id?: true
    user_role_id?: true
    otp?: true
    otp_expired?: true
    complete_onboarding?: true
    token?: true
    refresh_token?: true
    verified?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    uuid?: true
    username?: true
    admin_id?: true
    peserta_id?: true
    user_role_id?: true
    otp?: true
    otp_expired?: true
    complete_onboarding?: true
    token?: true
    refresh_token?: true
    verified?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    uuid?: true
    username?: true
    admin_id?: true
    peserta_id?: true
    user_role_id?: true
    otp?: true
    otp_expired?: true
    complete_onboarding?: true
    token?: true
    refresh_token?: true
    verified?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    uuid: string
    username: string
    admin_id: number | null
    peserta_id: bigint | null
    user_role_id: number | null
    otp: string | null
    otp_expired: Date | null
    complete_onboarding: boolean | null
    token: string | null
    refresh_token: string | null
    verified: number | null
    status: number
    created_at: Date
    updated_at: Date | null
    created_by: string
    updated_by: string | null
    deleted_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    username?: boolean
    admin_id?: boolean
    peserta_id?: boolean
    user_role_id?: boolean
    otp?: boolean
    otp_expired?: boolean
    complete_onboarding?: boolean
    token?: boolean
    refresh_token?: boolean
    verified?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
    admin?: boolean | user$adminArgs<ExtArgs>
    peserta?: boolean | user$pesertaArgs<ExtArgs>
    user_role?: boolean | user$user_roleArgs<ExtArgs>
    user_token?: boolean | user$user_tokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    uuid?: boolean
    username?: boolean
    admin_id?: boolean
    peserta_id?: boolean
    user_role_id?: boolean
    otp?: boolean
    otp_expired?: boolean
    complete_onboarding?: boolean
    token?: boolean
    refresh_token?: boolean
    verified?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "username" | "admin_id" | "peserta_id" | "user_role_id" | "otp" | "otp_expired" | "complete_onboarding" | "token" | "refresh_token" | "verified" | "status" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | user$adminArgs<ExtArgs>
    peserta?: boolean | user$pesertaArgs<ExtArgs>
    user_role?: boolean | user$user_roleArgs<ExtArgs>
    user_token?: boolean | user$user_tokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      admin: Prisma.$adminPayload<ExtArgs> | null
      peserta: Prisma.$pesertaPayload<ExtArgs> | null
      user_role: Prisma.$user_rolePayload<ExtArgs> | null
      user_token: Prisma.$user_tokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      uuid: string
      username: string
      admin_id: number | null
      peserta_id: bigint | null
      user_role_id: number | null
      otp: string | null
      otp_expired: Date | null
      complete_onboarding: boolean | null
      token: string | null
      refresh_token: string | null
      verified: number | null
      status: number
      created_at: Date
      updated_at: Date | null
      created_by: string
      updated_by: string | null
      deleted_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends user$adminArgs<ExtArgs> = {}>(args?: Subset<T, user$adminArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    peserta<T extends user$pesertaArgs<ExtArgs> = {}>(args?: Subset<T, user$pesertaArgs<ExtArgs>>): Prisma__pesertaClient<$Result.GetResult<Prisma.$pesertaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_role<T extends user$user_roleArgs<ExtArgs> = {}>(args?: Subset<T, user$user_roleArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_token<T extends user$user_tokenArgs<ExtArgs> = {}>(args?: Subset<T, user$user_tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'BigInt'>
    readonly uuid: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly admin_id: FieldRef<"user", 'Int'>
    readonly peserta_id: FieldRef<"user", 'BigInt'>
    readonly user_role_id: FieldRef<"user", 'Int'>
    readonly otp: FieldRef<"user", 'String'>
    readonly otp_expired: FieldRef<"user", 'DateTime'>
    readonly complete_onboarding: FieldRef<"user", 'Boolean'>
    readonly token: FieldRef<"user", 'String'>
    readonly refresh_token: FieldRef<"user", 'String'>
    readonly verified: FieldRef<"user", 'Int'>
    readonly status: FieldRef<"user", 'Int'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
    readonly created_by: FieldRef<"user", 'String'>
    readonly updated_by: FieldRef<"user", 'String'>
    readonly deleted_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.admin
   */
  export type user$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    where?: adminWhereInput
  }

  /**
   * user.peserta
   */
  export type user$pesertaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peserta
     */
    select?: pesertaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peserta
     */
    omit?: pesertaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pesertaInclude<ExtArgs> | null
    where?: pesertaWhereInput
  }

  /**
   * user.user_role
   */
  export type user$user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    where?: user_roleWhereInput
  }

  /**
   * user.user_token
   */
  export type user$user_tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_token
     */
    select?: user_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_token
     */
    omit?: user_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokenInclude<ExtArgs> | null
    where?: user_tokenWhereInput
    orderBy?: user_tokenOrderByWithRelationInput | user_tokenOrderByWithRelationInput[]
    cursor?: user_tokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_tokenScalarFieldEnum | User_tokenScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model user_permission
   */

  export type AggregateUser_permission = {
    _count: User_permissionCountAggregateOutputType | null
    _avg: User_permissionAvgAggregateOutputType | null
    _sum: User_permissionSumAggregateOutputType | null
    _min: User_permissionMinAggregateOutputType | null
    _max: User_permissionMaxAggregateOutputType | null
  }

  export type User_permissionAvgAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type User_permissionSumAggregateOutputType = {
    id: number | null
    status: number | null
  }

  export type User_permissionMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    description: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type User_permissionMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    description: string | null
    status: number | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type User_permissionCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    description: number
    status: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type User_permissionAvgAggregateInputType = {
    id?: true
    status?: true
  }

  export type User_permissionSumAggregateInputType = {
    id?: true
    status?: true
  }

  export type User_permissionMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type User_permissionMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type User_permissionCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type User_permissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_permission to aggregate.
     */
    where?: user_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_permissions to fetch.
     */
    orderBy?: user_permissionOrderByWithRelationInput | user_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_permissions
    **/
    _count?: true | User_permissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_permissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_permissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_permissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_permissionMaxAggregateInputType
  }

  export type GetUser_permissionAggregateType<T extends User_permissionAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_permission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_permission[P]>
      : GetScalarType<T[P], AggregateUser_permission[P]>
  }




  export type user_permissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_permissionWhereInput
    orderBy?: user_permissionOrderByWithAggregationInput | user_permissionOrderByWithAggregationInput[]
    by: User_permissionScalarFieldEnum[] | User_permissionScalarFieldEnum
    having?: user_permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_permissionCountAggregateInputType | true
    _avg?: User_permissionAvgAggregateInputType
    _sum?: User_permissionSumAggregateInputType
    _min?: User_permissionMinAggregateInputType
    _max?: User_permissionMaxAggregateInputType
  }

  export type User_permissionGroupByOutputType = {
    id: number
    uuid: string | null
    name: string
    description: string | null
    status: number
    created_at: Date
    updated_at: Date | null
    created_by: string
    updated_by: string | null
    deleted_at: Date | null
    _count: User_permissionCountAggregateOutputType | null
    _avg: User_permissionAvgAggregateOutputType | null
    _sum: User_permissionSumAggregateOutputType | null
    _min: User_permissionMinAggregateOutputType | null
    _max: User_permissionMaxAggregateOutputType | null
  }

  type GetUser_permissionGroupByPayload<T extends user_permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_permissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_permissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_permissionGroupByOutputType[P]>
            : GetScalarType<T[P], User_permissionGroupByOutputType[P]>
        }
      >
    >


  export type user_permissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
    user_role_permission?: boolean | user_permission$user_role_permissionArgs<ExtArgs>
    _count?: boolean | User_permissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_permission"]>



  export type user_permissionSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type user_permissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "description" | "status" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_at", ExtArgs["result"]["user_permission"]>
  export type user_permissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_role_permission?: boolean | user_permission$user_role_permissionArgs<ExtArgs>
    _count?: boolean | User_permissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $user_permissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_permission"
    objects: {
      user_role_permission: Prisma.$user_role_permissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string | null
      name: string
      description: string | null
      status: number
      created_at: Date
      updated_at: Date | null
      created_by: string
      updated_by: string | null
      deleted_at: Date | null
    }, ExtArgs["result"]["user_permission"]>
    composites: {}
  }

  type user_permissionGetPayload<S extends boolean | null | undefined | user_permissionDefaultArgs> = $Result.GetResult<Prisma.$user_permissionPayload, S>

  type user_permissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_permissionCountAggregateInputType | true
    }

  export interface user_permissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_permission'], meta: { name: 'user_permission' } }
    /**
     * Find zero or one User_permission that matches the filter.
     * @param {user_permissionFindUniqueArgs} args - Arguments to find a User_permission
     * @example
     * // Get one User_permission
     * const user_permission = await prisma.user_permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_permissionFindUniqueArgs>(args: SelectSubset<T, user_permissionFindUniqueArgs<ExtArgs>>): Prisma__user_permissionClient<$Result.GetResult<Prisma.$user_permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_permissionFindUniqueOrThrowArgs} args - Arguments to find a User_permission
     * @example
     * // Get one User_permission
     * const user_permission = await prisma.user_permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_permissionFindUniqueOrThrowArgs>(args: SelectSubset<T, user_permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_permissionClient<$Result.GetResult<Prisma.$user_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_permissionFindFirstArgs} args - Arguments to find a User_permission
     * @example
     * // Get one User_permission
     * const user_permission = await prisma.user_permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_permissionFindFirstArgs>(args?: SelectSubset<T, user_permissionFindFirstArgs<ExtArgs>>): Prisma__user_permissionClient<$Result.GetResult<Prisma.$user_permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_permissionFindFirstOrThrowArgs} args - Arguments to find a User_permission
     * @example
     * // Get one User_permission
     * const user_permission = await prisma.user_permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_permissionFindFirstOrThrowArgs>(args?: SelectSubset<T, user_permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_permissionClient<$Result.GetResult<Prisma.$user_permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_permissions
     * const user_permissions = await prisma.user_permission.findMany()
     * 
     * // Get first 10 User_permissions
     * const user_permissions = await prisma.user_permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_permissionWithIdOnly = await prisma.user_permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_permissionFindManyArgs>(args?: SelectSubset<T, user_permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_permission.
     * @param {user_permissionCreateArgs} args - Arguments to create a User_permission.
     * @example
     * // Create one User_permission
     * const User_permission = await prisma.user_permission.create({
     *   data: {
     *     // ... data to create a User_permission
     *   }
     * })
     * 
     */
    create<T extends user_permissionCreateArgs>(args: SelectSubset<T, user_permissionCreateArgs<ExtArgs>>): Prisma__user_permissionClient<$Result.GetResult<Prisma.$user_permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_permissions.
     * @param {user_permissionCreateManyArgs} args - Arguments to create many User_permissions.
     * @example
     * // Create many User_permissions
     * const user_permission = await prisma.user_permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_permissionCreateManyArgs>(args?: SelectSubset<T, user_permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_permission.
     * @param {user_permissionDeleteArgs} args - Arguments to delete one User_permission.
     * @example
     * // Delete one User_permission
     * const User_permission = await prisma.user_permission.delete({
     *   where: {
     *     // ... filter to delete one User_permission
     *   }
     * })
     * 
     */
    delete<T extends user_permissionDeleteArgs>(args: SelectSubset<T, user_permissionDeleteArgs<ExtArgs>>): Prisma__user_permissionClient<$Result.GetResult<Prisma.$user_permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_permission.
     * @param {user_permissionUpdateArgs} args - Arguments to update one User_permission.
     * @example
     * // Update one User_permission
     * const user_permission = await prisma.user_permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_permissionUpdateArgs>(args: SelectSubset<T, user_permissionUpdateArgs<ExtArgs>>): Prisma__user_permissionClient<$Result.GetResult<Prisma.$user_permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_permissions.
     * @param {user_permissionDeleteManyArgs} args - Arguments to filter User_permissions to delete.
     * @example
     * // Delete a few User_permissions
     * const { count } = await prisma.user_permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_permissionDeleteManyArgs>(args?: SelectSubset<T, user_permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_permissions
     * const user_permission = await prisma.user_permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_permissionUpdateManyArgs>(args: SelectSubset<T, user_permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_permission.
     * @param {user_permissionUpsertArgs} args - Arguments to update or create a User_permission.
     * @example
     * // Update or create a User_permission
     * const user_permission = await prisma.user_permission.upsert({
     *   create: {
     *     // ... data to create a User_permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_permission we want to update
     *   }
     * })
     */
    upsert<T extends user_permissionUpsertArgs>(args: SelectSubset<T, user_permissionUpsertArgs<ExtArgs>>): Prisma__user_permissionClient<$Result.GetResult<Prisma.$user_permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_permissionCountArgs} args - Arguments to filter User_permissions to count.
     * @example
     * // Count the number of User_permissions
     * const count = await prisma.user_permission.count({
     *   where: {
     *     // ... the filter for the User_permissions we want to count
     *   }
     * })
    **/
    count<T extends user_permissionCountArgs>(
      args?: Subset<T, user_permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_permissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_permissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_permissionAggregateArgs>(args: Subset<T, User_permissionAggregateArgs>): Prisma.PrismaPromise<GetUser_permissionAggregateType<T>>

    /**
     * Group by User_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_permissionGroupByArgs} args - Group by arguments.
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
      T extends user_permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_permissionGroupByArgs['orderBy'] }
        : { orderBy?: user_permissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_permissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_permission model
   */
  readonly fields: user_permissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_permissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_role_permission<T extends user_permission$user_role_permissionArgs<ExtArgs> = {}>(args?: Subset<T, user_permission$user_role_permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_role_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user_permission model
   */
  interface user_permissionFieldRefs {
    readonly id: FieldRef<"user_permission", 'Int'>
    readonly uuid: FieldRef<"user_permission", 'String'>
    readonly name: FieldRef<"user_permission", 'String'>
    readonly description: FieldRef<"user_permission", 'String'>
    readonly status: FieldRef<"user_permission", 'Int'>
    readonly created_at: FieldRef<"user_permission", 'DateTime'>
    readonly updated_at: FieldRef<"user_permission", 'DateTime'>
    readonly created_by: FieldRef<"user_permission", 'String'>
    readonly updated_by: FieldRef<"user_permission", 'String'>
    readonly deleted_at: FieldRef<"user_permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_permission findUnique
   */
  export type user_permissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permission
     */
    select?: user_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permission
     */
    omit?: user_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionInclude<ExtArgs> | null
    /**
     * Filter, which user_permission to fetch.
     */
    where: user_permissionWhereUniqueInput
  }

  /**
   * user_permission findUniqueOrThrow
   */
  export type user_permissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permission
     */
    select?: user_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permission
     */
    omit?: user_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionInclude<ExtArgs> | null
    /**
     * Filter, which user_permission to fetch.
     */
    where: user_permissionWhereUniqueInput
  }

  /**
   * user_permission findFirst
   */
  export type user_permissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permission
     */
    select?: user_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permission
     */
    omit?: user_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionInclude<ExtArgs> | null
    /**
     * Filter, which user_permission to fetch.
     */
    where?: user_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_permissions to fetch.
     */
    orderBy?: user_permissionOrderByWithRelationInput | user_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_permissions.
     */
    cursor?: user_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_permissions.
     */
    distinct?: User_permissionScalarFieldEnum | User_permissionScalarFieldEnum[]
  }

  /**
   * user_permission findFirstOrThrow
   */
  export type user_permissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permission
     */
    select?: user_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permission
     */
    omit?: user_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionInclude<ExtArgs> | null
    /**
     * Filter, which user_permission to fetch.
     */
    where?: user_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_permissions to fetch.
     */
    orderBy?: user_permissionOrderByWithRelationInput | user_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_permissions.
     */
    cursor?: user_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_permissions.
     */
    distinct?: User_permissionScalarFieldEnum | User_permissionScalarFieldEnum[]
  }

  /**
   * user_permission findMany
   */
  export type user_permissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permission
     */
    select?: user_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permission
     */
    omit?: user_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionInclude<ExtArgs> | null
    /**
     * Filter, which user_permissions to fetch.
     */
    where?: user_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_permissions to fetch.
     */
    orderBy?: user_permissionOrderByWithRelationInput | user_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_permissions.
     */
    cursor?: user_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_permissions.
     */
    skip?: number
    distinct?: User_permissionScalarFieldEnum | User_permissionScalarFieldEnum[]
  }

  /**
   * user_permission create
   */
  export type user_permissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permission
     */
    select?: user_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permission
     */
    omit?: user_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionInclude<ExtArgs> | null
    /**
     * The data needed to create a user_permission.
     */
    data: XOR<user_permissionCreateInput, user_permissionUncheckedCreateInput>
  }

  /**
   * user_permission createMany
   */
  export type user_permissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_permissions.
     */
    data: user_permissionCreateManyInput | user_permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_permission update
   */
  export type user_permissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permission
     */
    select?: user_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permission
     */
    omit?: user_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionInclude<ExtArgs> | null
    /**
     * The data needed to update a user_permission.
     */
    data: XOR<user_permissionUpdateInput, user_permissionUncheckedUpdateInput>
    /**
     * Choose, which user_permission to update.
     */
    where: user_permissionWhereUniqueInput
  }

  /**
   * user_permission updateMany
   */
  export type user_permissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_permissions.
     */
    data: XOR<user_permissionUpdateManyMutationInput, user_permissionUncheckedUpdateManyInput>
    /**
     * Filter which user_permissions to update
     */
    where?: user_permissionWhereInput
    /**
     * Limit how many user_permissions to update.
     */
    limit?: number
  }

  /**
   * user_permission upsert
   */
  export type user_permissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permission
     */
    select?: user_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permission
     */
    omit?: user_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionInclude<ExtArgs> | null
    /**
     * The filter to search for the user_permission to update in case it exists.
     */
    where: user_permissionWhereUniqueInput
    /**
     * In case the user_permission found by the `where` argument doesn't exist, create a new user_permission with this data.
     */
    create: XOR<user_permissionCreateInput, user_permissionUncheckedCreateInput>
    /**
     * In case the user_permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_permissionUpdateInput, user_permissionUncheckedUpdateInput>
  }

  /**
   * user_permission delete
   */
  export type user_permissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permission
     */
    select?: user_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permission
     */
    omit?: user_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionInclude<ExtArgs> | null
    /**
     * Filter which user_permission to delete.
     */
    where: user_permissionWhereUniqueInput
  }

  /**
   * user_permission deleteMany
   */
  export type user_permissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_permissions to delete
     */
    where?: user_permissionWhereInput
    /**
     * Limit how many user_permissions to delete.
     */
    limit?: number
  }

  /**
   * user_permission.user_role_permission
   */
  export type user_permission$user_role_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role_permission
     */
    select?: user_role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role_permission
     */
    omit?: user_role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_role_permissionInclude<ExtArgs> | null
    where?: user_role_permissionWhereInput
    orderBy?: user_role_permissionOrderByWithRelationInput | user_role_permissionOrderByWithRelationInput[]
    cursor?: user_role_permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_role_permissionScalarFieldEnum | User_role_permissionScalarFieldEnum[]
  }

  /**
   * user_permission without action
   */
  export type user_permissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permission
     */
    select?: user_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permission
     */
    omit?: user_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionInclude<ExtArgs> | null
  }


  /**
   * Model user_role
   */

  export type AggregateUser_role = {
    _count: User_roleCountAggregateOutputType | null
    _avg: User_roleAvgAggregateOutputType | null
    _sum: User_roleSumAggregateOutputType | null
    _min: User_roleMinAggregateOutputType | null
    _max: User_roleMaxAggregateOutputType | null
  }

  export type User_roleAvgAggregateOutputType = {
    id: number | null
  }

  export type User_roleSumAggregateOutputType = {
    id: number | null
  }

  export type User_roleMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type User_roleMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type User_roleCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type User_roleAvgAggregateInputType = {
    id?: true
  }

  export type User_roleSumAggregateInputType = {
    id?: true
  }

  export type User_roleMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type User_roleMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type User_roleCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type User_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_role to aggregate.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_roles
    **/
    _count?: true | User_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_roleMaxAggregateInputType
  }

  export type GetUser_roleAggregateType<T extends User_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_role[P]>
      : GetScalarType<T[P], AggregateUser_role[P]>
  }




  export type user_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput
    orderBy?: user_roleOrderByWithAggregationInput | user_roleOrderByWithAggregationInput[]
    by: User_roleScalarFieldEnum[] | User_roleScalarFieldEnum
    having?: user_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_roleCountAggregateInputType | true
    _avg?: User_roleAvgAggregateInputType
    _sum?: User_roleSumAggregateInputType
    _min?: User_roleMinAggregateInputType
    _max?: User_roleMaxAggregateInputType
  }

  export type User_roleGroupByOutputType = {
    id: number
    uuid: string | null
    name: string
    created_at: Date
    updated_at: Date | null
    created_by: string
    updated_by: string | null
    deleted_at: Date | null
    _count: User_roleCountAggregateOutputType | null
    _avg: User_roleAvgAggregateOutputType | null
    _sum: User_roleSumAggregateOutputType | null
    _min: User_roleMinAggregateOutputType | null
    _max: User_roleMaxAggregateOutputType | null
  }

  type GetUser_roleGroupByPayload<T extends user_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_roleGroupByOutputType[P]>
            : GetScalarType<T[P], User_roleGroupByOutputType[P]>
        }
      >
    >


  export type user_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
    user?: boolean | user_role$userArgs<ExtArgs>
    user_role_permission?: boolean | user_role$user_role_permissionArgs<ExtArgs>
    _count?: boolean | User_roleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_role"]>



  export type user_roleSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type user_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_at", ExtArgs["result"]["user_role"]>
  export type user_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user_role$userArgs<ExtArgs>
    user_role_permission?: boolean | user_role$user_role_permissionArgs<ExtArgs>
    _count?: boolean | User_roleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $user_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_role"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      user_role_permission: Prisma.$user_role_permissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string | null
      name: string
      created_at: Date
      updated_at: Date | null
      created_by: string
      updated_by: string | null
      deleted_at: Date | null
    }, ExtArgs["result"]["user_role"]>
    composites: {}
  }

  type user_roleGetPayload<S extends boolean | null | undefined | user_roleDefaultArgs> = $Result.GetResult<Prisma.$user_rolePayload, S>

  type user_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_roleCountAggregateInputType | true
    }

  export interface user_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_role'], meta: { name: 'user_role' } }
    /**
     * Find zero or one User_role that matches the filter.
     * @param {user_roleFindUniqueArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_roleFindUniqueArgs>(args: SelectSubset<T, user_roleFindUniqueArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_roleFindUniqueOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, user_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_roleFindFirstArgs>(args?: SelectSubset<T, user_roleFindFirstArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, user_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_role.findMany()
     * 
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_roleWithIdOnly = await prisma.user_role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_roleFindManyArgs>(args?: SelectSubset<T, user_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_role.
     * @param {user_roleCreateArgs} args - Arguments to create a User_role.
     * @example
     * // Create one User_role
     * const User_role = await prisma.user_role.create({
     *   data: {
     *     // ... data to create a User_role
     *   }
     * })
     * 
     */
    create<T extends user_roleCreateArgs>(args: SelectSubset<T, user_roleCreateArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_roles.
     * @param {user_roleCreateManyArgs} args - Arguments to create many User_roles.
     * @example
     * // Create many User_roles
     * const user_role = await prisma.user_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_roleCreateManyArgs>(args?: SelectSubset<T, user_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_role.
     * @param {user_roleDeleteArgs} args - Arguments to delete one User_role.
     * @example
     * // Delete one User_role
     * const User_role = await prisma.user_role.delete({
     *   where: {
     *     // ... filter to delete one User_role
     *   }
     * })
     * 
     */
    delete<T extends user_roleDeleteArgs>(args: SelectSubset<T, user_roleDeleteArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_role.
     * @param {user_roleUpdateArgs} args - Arguments to update one User_role.
     * @example
     * // Update one User_role
     * const user_role = await prisma.user_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_roleUpdateArgs>(args: SelectSubset<T, user_roleUpdateArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_roles.
     * @param {user_roleDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_roleDeleteManyArgs>(args?: SelectSubset<T, user_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_role = await prisma.user_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_roleUpdateManyArgs>(args: SelectSubset<T, user_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_role.
     * @param {user_roleUpsertArgs} args - Arguments to update or create a User_role.
     * @example
     * // Update or create a User_role
     * const user_role = await prisma.user_role.upsert({
     *   create: {
     *     // ... data to create a User_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_role we want to update
     *   }
     * })
     */
    upsert<T extends user_roleUpsertArgs>(args: SelectSubset<T, user_roleUpsertArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_role.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
    **/
    count<T extends user_roleCountArgs>(
      args?: Subset<T, user_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_roleAggregateArgs>(args: Subset<T, User_roleAggregateArgs>): Prisma.PrismaPromise<GetUser_roleAggregateType<T>>

    /**
     * Group by User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleGroupByArgs} args - Group by arguments.
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
      T extends user_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_roleGroupByArgs['orderBy'] }
        : { orderBy?: user_roleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_role model
   */
  readonly fields: user_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends user_role$userArgs<ExtArgs> = {}>(args?: Subset<T, user_role$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_role_permission<T extends user_role$user_role_permissionArgs<ExtArgs> = {}>(args?: Subset<T, user_role$user_role_permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_role_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user_role model
   */
  interface user_roleFieldRefs {
    readonly id: FieldRef<"user_role", 'Int'>
    readonly uuid: FieldRef<"user_role", 'String'>
    readonly name: FieldRef<"user_role", 'String'>
    readonly created_at: FieldRef<"user_role", 'DateTime'>
    readonly updated_at: FieldRef<"user_role", 'DateTime'>
    readonly created_by: FieldRef<"user_role", 'String'>
    readonly updated_by: FieldRef<"user_role", 'String'>
    readonly deleted_at: FieldRef<"user_role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_role findUnique
   */
  export type user_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role findUniqueOrThrow
   */
  export type user_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role findFirst
   */
  export type user_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role findFirstOrThrow
   */
  export type user_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role findMany
   */
  export type user_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_roles.
     */
    cursor?: user_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_roles.
     */
    skip?: number
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[]
  }

  /**
   * user_role create
   */
  export type user_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a user_role.
     */
    data: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>
  }

  /**
   * user_role createMany
   */
  export type user_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_roleCreateManyInput | user_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_role update
   */
  export type user_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a user_role.
     */
    data: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>
    /**
     * Choose, which user_role to update.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role updateMany
   */
  export type user_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyInput>
    /**
     * Filter which user_roles to update
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to update.
     */
    limit?: number
  }

  /**
   * user_role upsert
   */
  export type user_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the user_role to update in case it exists.
     */
    where: user_roleWhereUniqueInput
    /**
     * In case the user_role found by the `where` argument doesn't exist, create a new user_role with this data.
     */
    create: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>
    /**
     * In case the user_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>
  }

  /**
   * user_role delete
   */
  export type user_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
    /**
     * Filter which user_role to delete.
     */
    where: user_roleWhereUniqueInput
  }

  /**
   * user_role deleteMany
   */
  export type user_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_roleWhereInput
    /**
     * Limit how many user_roles to delete.
     */
    limit?: number
  }

  /**
   * user_role.user
   */
  export type user_role$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * user_role.user_role_permission
   */
  export type user_role$user_role_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role_permission
     */
    select?: user_role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role_permission
     */
    omit?: user_role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_role_permissionInclude<ExtArgs> | null
    where?: user_role_permissionWhereInput
    orderBy?: user_role_permissionOrderByWithRelationInput | user_role_permissionOrderByWithRelationInput[]
    cursor?: user_role_permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_role_permissionScalarFieldEnum | User_role_permissionScalarFieldEnum[]
  }

  /**
   * user_role without action
   */
  export type user_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role
     */
    omit?: user_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_roleInclude<ExtArgs> | null
  }


  /**
   * Model user_role_permission
   */

  export type AggregateUser_role_permission = {
    _count: User_role_permissionCountAggregateOutputType | null
    _avg: User_role_permissionAvgAggregateOutputType | null
    _sum: User_role_permissionSumAggregateOutputType | null
    _min: User_role_permissionMinAggregateOutputType | null
    _max: User_role_permissionMaxAggregateOutputType | null
  }

  export type User_role_permissionAvgAggregateOutputType = {
    id: number | null
    user_role_id: number | null
    user_permission_id: number | null
    status: number | null
  }

  export type User_role_permissionSumAggregateOutputType = {
    id: number | null
    user_role_id: number | null
    user_permission_id: number | null
    status: number | null
  }

  export type User_role_permissionMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    user_role_id: number | null
    user_permission_id: number | null
    status: number | null
    created_at: Date | null
    created_by: string | null
    updated_at: Date | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type User_role_permissionMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    user_role_id: number | null
    user_permission_id: number | null
    status: number | null
    created_at: Date | null
    created_by: string | null
    updated_at: Date | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type User_role_permissionCountAggregateOutputType = {
    id: number
    uuid: number
    user_role_id: number
    user_permission_id: number
    status: number
    created_at: number
    created_by: number
    updated_at: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type User_role_permissionAvgAggregateInputType = {
    id?: true
    user_role_id?: true
    user_permission_id?: true
    status?: true
  }

  export type User_role_permissionSumAggregateInputType = {
    id?: true
    user_role_id?: true
    user_permission_id?: true
    status?: true
  }

  export type User_role_permissionMinAggregateInputType = {
    id?: true
    uuid?: true
    user_role_id?: true
    user_permission_id?: true
    status?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    deleted_at?: true
  }

  export type User_role_permissionMaxAggregateInputType = {
    id?: true
    uuid?: true
    user_role_id?: true
    user_permission_id?: true
    status?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    deleted_at?: true
  }

  export type User_role_permissionCountAggregateInputType = {
    id?: true
    uuid?: true
    user_role_id?: true
    user_permission_id?: true
    status?: true
    created_at?: true
    created_by?: true
    updated_at?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type User_role_permissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_role_permission to aggregate.
     */
    where?: user_role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_role_permissions to fetch.
     */
    orderBy?: user_role_permissionOrderByWithRelationInput | user_role_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_role_permissions
    **/
    _count?: true | User_role_permissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_role_permissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_role_permissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_role_permissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_role_permissionMaxAggregateInputType
  }

  export type GetUser_role_permissionAggregateType<T extends User_role_permissionAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_role_permission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_role_permission[P]>
      : GetScalarType<T[P], AggregateUser_role_permission[P]>
  }




  export type user_role_permissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_role_permissionWhereInput
    orderBy?: user_role_permissionOrderByWithAggregationInput | user_role_permissionOrderByWithAggregationInput[]
    by: User_role_permissionScalarFieldEnum[] | User_role_permissionScalarFieldEnum
    having?: user_role_permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_role_permissionCountAggregateInputType | true
    _avg?: User_role_permissionAvgAggregateInputType
    _sum?: User_role_permissionSumAggregateInputType
    _min?: User_role_permissionMinAggregateInputType
    _max?: User_role_permissionMaxAggregateInputType
  }

  export type User_role_permissionGroupByOutputType = {
    id: number
    uuid: string | null
    user_role_id: number
    user_permission_id: number
    status: number
    created_at: Date
    created_by: string
    updated_at: Date | null
    updated_by: string | null
    deleted_at: Date | null
    _count: User_role_permissionCountAggregateOutputType | null
    _avg: User_role_permissionAvgAggregateOutputType | null
    _sum: User_role_permissionSumAggregateOutputType | null
    _min: User_role_permissionMinAggregateOutputType | null
    _max: User_role_permissionMaxAggregateOutputType | null
  }

  type GetUser_role_permissionGroupByPayload<T extends user_role_permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_role_permissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_role_permissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_role_permissionGroupByOutputType[P]>
            : GetScalarType<T[P], User_role_permissionGroupByOutputType[P]>
        }
      >
    >


  export type user_role_permissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    user_role_id?: boolean
    user_permission_id?: boolean
    status?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    deleted_at?: boolean
    user_permission?: boolean | user_permissionDefaultArgs<ExtArgs>
    user_role?: boolean | user_roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_role_permission"]>



  export type user_role_permissionSelectScalar = {
    id?: boolean
    uuid?: boolean
    user_role_id?: boolean
    user_permission_id?: boolean
    status?: boolean
    created_at?: boolean
    created_by?: boolean
    updated_at?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type user_role_permissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "user_role_id" | "user_permission_id" | "status" | "created_at" | "created_by" | "updated_at" | "updated_by" | "deleted_at", ExtArgs["result"]["user_role_permission"]>
  export type user_role_permissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_permission?: boolean | user_permissionDefaultArgs<ExtArgs>
    user_role?: boolean | user_roleDefaultArgs<ExtArgs>
  }

  export type $user_role_permissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_role_permission"
    objects: {
      user_permission: Prisma.$user_permissionPayload<ExtArgs>
      user_role: Prisma.$user_rolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string | null
      user_role_id: number
      user_permission_id: number
      status: number
      created_at: Date
      created_by: string
      updated_at: Date | null
      updated_by: string | null
      deleted_at: Date | null
    }, ExtArgs["result"]["user_role_permission"]>
    composites: {}
  }

  type user_role_permissionGetPayload<S extends boolean | null | undefined | user_role_permissionDefaultArgs> = $Result.GetResult<Prisma.$user_role_permissionPayload, S>

  type user_role_permissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_role_permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_role_permissionCountAggregateInputType | true
    }

  export interface user_role_permissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_role_permission'], meta: { name: 'user_role_permission' } }
    /**
     * Find zero or one User_role_permission that matches the filter.
     * @param {user_role_permissionFindUniqueArgs} args - Arguments to find a User_role_permission
     * @example
     * // Get one User_role_permission
     * const user_role_permission = await prisma.user_role_permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_role_permissionFindUniqueArgs>(args: SelectSubset<T, user_role_permissionFindUniqueArgs<ExtArgs>>): Prisma__user_role_permissionClient<$Result.GetResult<Prisma.$user_role_permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_role_permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_role_permissionFindUniqueOrThrowArgs} args - Arguments to find a User_role_permission
     * @example
     * // Get one User_role_permission
     * const user_role_permission = await prisma.user_role_permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_role_permissionFindUniqueOrThrowArgs>(args: SelectSubset<T, user_role_permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_role_permissionClient<$Result.GetResult<Prisma.$user_role_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_role_permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_role_permissionFindFirstArgs} args - Arguments to find a User_role_permission
     * @example
     * // Get one User_role_permission
     * const user_role_permission = await prisma.user_role_permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_role_permissionFindFirstArgs>(args?: SelectSubset<T, user_role_permissionFindFirstArgs<ExtArgs>>): Prisma__user_role_permissionClient<$Result.GetResult<Prisma.$user_role_permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_role_permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_role_permissionFindFirstOrThrowArgs} args - Arguments to find a User_role_permission
     * @example
     * // Get one User_role_permission
     * const user_role_permission = await prisma.user_role_permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_role_permissionFindFirstOrThrowArgs>(args?: SelectSubset<T, user_role_permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_role_permissionClient<$Result.GetResult<Prisma.$user_role_permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_role_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_role_permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_role_permissions
     * const user_role_permissions = await prisma.user_role_permission.findMany()
     * 
     * // Get first 10 User_role_permissions
     * const user_role_permissions = await prisma.user_role_permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_role_permissionWithIdOnly = await prisma.user_role_permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_role_permissionFindManyArgs>(args?: SelectSubset<T, user_role_permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_role_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_role_permission.
     * @param {user_role_permissionCreateArgs} args - Arguments to create a User_role_permission.
     * @example
     * // Create one User_role_permission
     * const User_role_permission = await prisma.user_role_permission.create({
     *   data: {
     *     // ... data to create a User_role_permission
     *   }
     * })
     * 
     */
    create<T extends user_role_permissionCreateArgs>(args: SelectSubset<T, user_role_permissionCreateArgs<ExtArgs>>): Prisma__user_role_permissionClient<$Result.GetResult<Prisma.$user_role_permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_role_permissions.
     * @param {user_role_permissionCreateManyArgs} args - Arguments to create many User_role_permissions.
     * @example
     * // Create many User_role_permissions
     * const user_role_permission = await prisma.user_role_permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_role_permissionCreateManyArgs>(args?: SelectSubset<T, user_role_permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_role_permission.
     * @param {user_role_permissionDeleteArgs} args - Arguments to delete one User_role_permission.
     * @example
     * // Delete one User_role_permission
     * const User_role_permission = await prisma.user_role_permission.delete({
     *   where: {
     *     // ... filter to delete one User_role_permission
     *   }
     * })
     * 
     */
    delete<T extends user_role_permissionDeleteArgs>(args: SelectSubset<T, user_role_permissionDeleteArgs<ExtArgs>>): Prisma__user_role_permissionClient<$Result.GetResult<Prisma.$user_role_permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_role_permission.
     * @param {user_role_permissionUpdateArgs} args - Arguments to update one User_role_permission.
     * @example
     * // Update one User_role_permission
     * const user_role_permission = await prisma.user_role_permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_role_permissionUpdateArgs>(args: SelectSubset<T, user_role_permissionUpdateArgs<ExtArgs>>): Prisma__user_role_permissionClient<$Result.GetResult<Prisma.$user_role_permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_role_permissions.
     * @param {user_role_permissionDeleteManyArgs} args - Arguments to filter User_role_permissions to delete.
     * @example
     * // Delete a few User_role_permissions
     * const { count } = await prisma.user_role_permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_role_permissionDeleteManyArgs>(args?: SelectSubset<T, user_role_permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_role_permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_role_permissions
     * const user_role_permission = await prisma.user_role_permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_role_permissionUpdateManyArgs>(args: SelectSubset<T, user_role_permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_role_permission.
     * @param {user_role_permissionUpsertArgs} args - Arguments to update or create a User_role_permission.
     * @example
     * // Update or create a User_role_permission
     * const user_role_permission = await prisma.user_role_permission.upsert({
     *   create: {
     *     // ... data to create a User_role_permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_role_permission we want to update
     *   }
     * })
     */
    upsert<T extends user_role_permissionUpsertArgs>(args: SelectSubset<T, user_role_permissionUpsertArgs<ExtArgs>>): Prisma__user_role_permissionClient<$Result.GetResult<Prisma.$user_role_permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_role_permissionCountArgs} args - Arguments to filter User_role_permissions to count.
     * @example
     * // Count the number of User_role_permissions
     * const count = await prisma.user_role_permission.count({
     *   where: {
     *     // ... the filter for the User_role_permissions we want to count
     *   }
     * })
    **/
    count<T extends user_role_permissionCountArgs>(
      args?: Subset<T, user_role_permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_role_permissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_role_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_role_permissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_role_permissionAggregateArgs>(args: Subset<T, User_role_permissionAggregateArgs>): Prisma.PrismaPromise<GetUser_role_permissionAggregateType<T>>

    /**
     * Group by User_role_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_role_permissionGroupByArgs} args - Group by arguments.
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
      T extends user_role_permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_role_permissionGroupByArgs['orderBy'] }
        : { orderBy?: user_role_permissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_role_permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_role_permissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_role_permission model
   */
  readonly fields: user_role_permissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_role_permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_role_permissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_permission<T extends user_permissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_permissionDefaultArgs<ExtArgs>>): Prisma__user_permissionClient<$Result.GetResult<Prisma.$user_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_role<T extends user_roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_roleDefaultArgs<ExtArgs>>): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_role_permission model
   */
  interface user_role_permissionFieldRefs {
    readonly id: FieldRef<"user_role_permission", 'Int'>
    readonly uuid: FieldRef<"user_role_permission", 'String'>
    readonly user_role_id: FieldRef<"user_role_permission", 'Int'>
    readonly user_permission_id: FieldRef<"user_role_permission", 'Int'>
    readonly status: FieldRef<"user_role_permission", 'Int'>
    readonly created_at: FieldRef<"user_role_permission", 'DateTime'>
    readonly created_by: FieldRef<"user_role_permission", 'String'>
    readonly updated_at: FieldRef<"user_role_permission", 'DateTime'>
    readonly updated_by: FieldRef<"user_role_permission", 'String'>
    readonly deleted_at: FieldRef<"user_role_permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_role_permission findUnique
   */
  export type user_role_permissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role_permission
     */
    select?: user_role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role_permission
     */
    omit?: user_role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which user_role_permission to fetch.
     */
    where: user_role_permissionWhereUniqueInput
  }

  /**
   * user_role_permission findUniqueOrThrow
   */
  export type user_role_permissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role_permission
     */
    select?: user_role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role_permission
     */
    omit?: user_role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which user_role_permission to fetch.
     */
    where: user_role_permissionWhereUniqueInput
  }

  /**
   * user_role_permission findFirst
   */
  export type user_role_permissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role_permission
     */
    select?: user_role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role_permission
     */
    omit?: user_role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which user_role_permission to fetch.
     */
    where?: user_role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_role_permissions to fetch.
     */
    orderBy?: user_role_permissionOrderByWithRelationInput | user_role_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_role_permissions.
     */
    cursor?: user_role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_role_permissions.
     */
    distinct?: User_role_permissionScalarFieldEnum | User_role_permissionScalarFieldEnum[]
  }

  /**
   * user_role_permission findFirstOrThrow
   */
  export type user_role_permissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role_permission
     */
    select?: user_role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role_permission
     */
    omit?: user_role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which user_role_permission to fetch.
     */
    where?: user_role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_role_permissions to fetch.
     */
    orderBy?: user_role_permissionOrderByWithRelationInput | user_role_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_role_permissions.
     */
    cursor?: user_role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_role_permissions.
     */
    distinct?: User_role_permissionScalarFieldEnum | User_role_permissionScalarFieldEnum[]
  }

  /**
   * user_role_permission findMany
   */
  export type user_role_permissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role_permission
     */
    select?: user_role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role_permission
     */
    omit?: user_role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which user_role_permissions to fetch.
     */
    where?: user_role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_role_permissions to fetch.
     */
    orderBy?: user_role_permissionOrderByWithRelationInput | user_role_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_role_permissions.
     */
    cursor?: user_role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_role_permissions.
     */
    skip?: number
    distinct?: User_role_permissionScalarFieldEnum | User_role_permissionScalarFieldEnum[]
  }

  /**
   * user_role_permission create
   */
  export type user_role_permissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role_permission
     */
    select?: user_role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role_permission
     */
    omit?: user_role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_role_permissionInclude<ExtArgs> | null
    /**
     * The data needed to create a user_role_permission.
     */
    data: XOR<user_role_permissionCreateInput, user_role_permissionUncheckedCreateInput>
  }

  /**
   * user_role_permission createMany
   */
  export type user_role_permissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_role_permissions.
     */
    data: user_role_permissionCreateManyInput | user_role_permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_role_permission update
   */
  export type user_role_permissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role_permission
     */
    select?: user_role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role_permission
     */
    omit?: user_role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_role_permissionInclude<ExtArgs> | null
    /**
     * The data needed to update a user_role_permission.
     */
    data: XOR<user_role_permissionUpdateInput, user_role_permissionUncheckedUpdateInput>
    /**
     * Choose, which user_role_permission to update.
     */
    where: user_role_permissionWhereUniqueInput
  }

  /**
   * user_role_permission updateMany
   */
  export type user_role_permissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_role_permissions.
     */
    data: XOR<user_role_permissionUpdateManyMutationInput, user_role_permissionUncheckedUpdateManyInput>
    /**
     * Filter which user_role_permissions to update
     */
    where?: user_role_permissionWhereInput
    /**
     * Limit how many user_role_permissions to update.
     */
    limit?: number
  }

  /**
   * user_role_permission upsert
   */
  export type user_role_permissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role_permission
     */
    select?: user_role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role_permission
     */
    omit?: user_role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_role_permissionInclude<ExtArgs> | null
    /**
     * The filter to search for the user_role_permission to update in case it exists.
     */
    where: user_role_permissionWhereUniqueInput
    /**
     * In case the user_role_permission found by the `where` argument doesn't exist, create a new user_role_permission with this data.
     */
    create: XOR<user_role_permissionCreateInput, user_role_permissionUncheckedCreateInput>
    /**
     * In case the user_role_permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_role_permissionUpdateInput, user_role_permissionUncheckedUpdateInput>
  }

  /**
   * user_role_permission delete
   */
  export type user_role_permissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role_permission
     */
    select?: user_role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role_permission
     */
    omit?: user_role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_role_permissionInclude<ExtArgs> | null
    /**
     * Filter which user_role_permission to delete.
     */
    where: user_role_permissionWhereUniqueInput
  }

  /**
   * user_role_permission deleteMany
   */
  export type user_role_permissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_role_permissions to delete
     */
    where?: user_role_permissionWhereInput
    /**
     * Limit how many user_role_permissions to delete.
     */
    limit?: number
  }

  /**
   * user_role_permission without action
   */
  export type user_role_permissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role_permission
     */
    select?: user_role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_role_permission
     */
    omit?: user_role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_role_permissionInclude<ExtArgs> | null
  }


  /**
   * Model user_token
   */

  export type AggregateUser_token = {
    _count: User_tokenCountAggregateOutputType | null
    _avg: User_tokenAvgAggregateOutputType | null
    _sum: User_tokenSumAggregateOutputType | null
    _min: User_tokenMinAggregateOutputType | null
    _max: User_tokenMaxAggregateOutputType | null
  }

  export type User_tokenAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    status: number | null
  }

  export type User_tokenSumAggregateOutputType = {
    id: number | null
    user_id: bigint | null
    status: number | null
  }

  export type User_tokenMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    user_id: bigint | null
    name: string | null
    secret: string | null
    private_key: string | null
    public_key: string | null
    status: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type User_tokenMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    user_id: bigint | null
    name: string | null
    secret: string | null
    private_key: string | null
    public_key: string | null
    status: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
  }

  export type User_tokenCountAggregateOutputType = {
    id: number
    uuid: number
    user_id: number
    name: number
    secret: number
    private_key: number
    public_key: number
    status: number
    description: number
    created_at: number
    updated_at: number
    created_by: number
    updated_by: number
    deleted_at: number
    _all: number
  }


  export type User_tokenAvgAggregateInputType = {
    id?: true
    user_id?: true
    status?: true
  }

  export type User_tokenSumAggregateInputType = {
    id?: true
    user_id?: true
    status?: true
  }

  export type User_tokenMinAggregateInputType = {
    id?: true
    uuid?: true
    user_id?: true
    name?: true
    secret?: true
    private_key?: true
    public_key?: true
    status?: true
    description?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type User_tokenMaxAggregateInputType = {
    id?: true
    uuid?: true
    user_id?: true
    name?: true
    secret?: true
    private_key?: true
    public_key?: true
    status?: true
    description?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
  }

  export type User_tokenCountAggregateInputType = {
    id?: true
    uuid?: true
    user_id?: true
    name?: true
    secret?: true
    private_key?: true
    public_key?: true
    status?: true
    description?: true
    created_at?: true
    updated_at?: true
    created_by?: true
    updated_by?: true
    deleted_at?: true
    _all?: true
  }

  export type User_tokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_token to aggregate.
     */
    where?: user_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tokens to fetch.
     */
    orderBy?: user_tokenOrderByWithRelationInput | user_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_tokens
    **/
    _count?: true | User_tokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_tokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_tokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_tokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_tokenMaxAggregateInputType
  }

  export type GetUser_tokenAggregateType<T extends User_tokenAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_token[P]>
      : GetScalarType<T[P], AggregateUser_token[P]>
  }




  export type user_tokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tokenWhereInput
    orderBy?: user_tokenOrderByWithAggregationInput | user_tokenOrderByWithAggregationInput[]
    by: User_tokenScalarFieldEnum[] | User_tokenScalarFieldEnum
    having?: user_tokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_tokenCountAggregateInputType | true
    _avg?: User_tokenAvgAggregateInputType
    _sum?: User_tokenSumAggregateInputType
    _min?: User_tokenMinAggregateInputType
    _max?: User_tokenMaxAggregateInputType
  }

  export type User_tokenGroupByOutputType = {
    id: number
    uuid: string
    user_id: bigint | null
    name: string | null
    secret: string
    private_key: string
    public_key: string
    status: number
    description: string | null
    created_at: Date
    updated_at: Date | null
    created_by: string | null
    updated_by: string | null
    deleted_at: Date | null
    _count: User_tokenCountAggregateOutputType | null
    _avg: User_tokenAvgAggregateOutputType | null
    _sum: User_tokenSumAggregateOutputType | null
    _min: User_tokenMinAggregateOutputType | null
    _max: User_tokenMaxAggregateOutputType | null
  }

  type GetUser_tokenGroupByPayload<T extends user_tokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_tokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_tokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_tokenGroupByOutputType[P]>
            : GetScalarType<T[P], User_tokenGroupByOutputType[P]>
        }
      >
    >


  export type user_tokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    user_id?: boolean
    name?: boolean
    secret?: boolean
    private_key?: boolean
    public_key?: boolean
    status?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
    user?: boolean | user_token$userArgs<ExtArgs>
  }, ExtArgs["result"]["user_token"]>



  export type user_tokenSelectScalar = {
    id?: boolean
    uuid?: boolean
    user_id?: boolean
    name?: boolean
    secret?: boolean
    private_key?: boolean
    public_key?: boolean
    status?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    created_by?: boolean
    updated_by?: boolean
    deleted_at?: boolean
  }

  export type user_tokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "user_id" | "name" | "secret" | "private_key" | "public_key" | "status" | "description" | "created_at" | "updated_at" | "created_by" | "updated_by" | "deleted_at", ExtArgs["result"]["user_token"]>
  export type user_tokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | user_token$userArgs<ExtArgs>
  }

  export type $user_tokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_token"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      user_id: bigint | null
      name: string | null
      secret: string
      private_key: string
      public_key: string
      status: number
      description: string | null
      created_at: Date
      updated_at: Date | null
      created_by: string | null
      updated_by: string | null
      deleted_at: Date | null
    }, ExtArgs["result"]["user_token"]>
    composites: {}
  }

  type user_tokenGetPayload<S extends boolean | null | undefined | user_tokenDefaultArgs> = $Result.GetResult<Prisma.$user_tokenPayload, S>

  type user_tokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_tokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_tokenCountAggregateInputType | true
    }

  export interface user_tokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_token'], meta: { name: 'user_token' } }
    /**
     * Find zero or one User_token that matches the filter.
     * @param {user_tokenFindUniqueArgs} args - Arguments to find a User_token
     * @example
     * // Get one User_token
     * const user_token = await prisma.user_token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_tokenFindUniqueArgs>(args: SelectSubset<T, user_tokenFindUniqueArgs<ExtArgs>>): Prisma__user_tokenClient<$Result.GetResult<Prisma.$user_tokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_tokenFindUniqueOrThrowArgs} args - Arguments to find a User_token
     * @example
     * // Get one User_token
     * const user_token = await prisma.user_token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_tokenFindUniqueOrThrowArgs>(args: SelectSubset<T, user_tokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_tokenClient<$Result.GetResult<Prisma.$user_tokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tokenFindFirstArgs} args - Arguments to find a User_token
     * @example
     * // Get one User_token
     * const user_token = await prisma.user_token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_tokenFindFirstArgs>(args?: SelectSubset<T, user_tokenFindFirstArgs<ExtArgs>>): Prisma__user_tokenClient<$Result.GetResult<Prisma.$user_tokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tokenFindFirstOrThrowArgs} args - Arguments to find a User_token
     * @example
     * // Get one User_token
     * const user_token = await prisma.user_token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_tokenFindFirstOrThrowArgs>(args?: SelectSubset<T, user_tokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_tokenClient<$Result.GetResult<Prisma.$user_tokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_tokens
     * const user_tokens = await prisma.user_token.findMany()
     * 
     * // Get first 10 User_tokens
     * const user_tokens = await prisma.user_token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_tokenWithIdOnly = await prisma.user_token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_tokenFindManyArgs>(args?: SelectSubset<T, user_tokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_token.
     * @param {user_tokenCreateArgs} args - Arguments to create a User_token.
     * @example
     * // Create one User_token
     * const User_token = await prisma.user_token.create({
     *   data: {
     *     // ... data to create a User_token
     *   }
     * })
     * 
     */
    create<T extends user_tokenCreateArgs>(args: SelectSubset<T, user_tokenCreateArgs<ExtArgs>>): Prisma__user_tokenClient<$Result.GetResult<Prisma.$user_tokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_tokens.
     * @param {user_tokenCreateManyArgs} args - Arguments to create many User_tokens.
     * @example
     * // Create many User_tokens
     * const user_token = await prisma.user_token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_tokenCreateManyArgs>(args?: SelectSubset<T, user_tokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_token.
     * @param {user_tokenDeleteArgs} args - Arguments to delete one User_token.
     * @example
     * // Delete one User_token
     * const User_token = await prisma.user_token.delete({
     *   where: {
     *     // ... filter to delete one User_token
     *   }
     * })
     * 
     */
    delete<T extends user_tokenDeleteArgs>(args: SelectSubset<T, user_tokenDeleteArgs<ExtArgs>>): Prisma__user_tokenClient<$Result.GetResult<Prisma.$user_tokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_token.
     * @param {user_tokenUpdateArgs} args - Arguments to update one User_token.
     * @example
     * // Update one User_token
     * const user_token = await prisma.user_token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_tokenUpdateArgs>(args: SelectSubset<T, user_tokenUpdateArgs<ExtArgs>>): Prisma__user_tokenClient<$Result.GetResult<Prisma.$user_tokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_tokens.
     * @param {user_tokenDeleteManyArgs} args - Arguments to filter User_tokens to delete.
     * @example
     * // Delete a few User_tokens
     * const { count } = await prisma.user_token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_tokenDeleteManyArgs>(args?: SelectSubset<T, user_tokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_tokens
     * const user_token = await prisma.user_token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_tokenUpdateManyArgs>(args: SelectSubset<T, user_tokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_token.
     * @param {user_tokenUpsertArgs} args - Arguments to update or create a User_token.
     * @example
     * // Update or create a User_token
     * const user_token = await prisma.user_token.upsert({
     *   create: {
     *     // ... data to create a User_token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_token we want to update
     *   }
     * })
     */
    upsert<T extends user_tokenUpsertArgs>(args: SelectSubset<T, user_tokenUpsertArgs<ExtArgs>>): Prisma__user_tokenClient<$Result.GetResult<Prisma.$user_tokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tokenCountArgs} args - Arguments to filter User_tokens to count.
     * @example
     * // Count the number of User_tokens
     * const count = await prisma.user_token.count({
     *   where: {
     *     // ... the filter for the User_tokens we want to count
     *   }
     * })
    **/
    count<T extends user_tokenCountArgs>(
      args?: Subset<T, user_tokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_tokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_tokenAggregateArgs>(args: Subset<T, User_tokenAggregateArgs>): Prisma.PrismaPromise<GetUser_tokenAggregateType<T>>

    /**
     * Group by User_token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tokenGroupByArgs} args - Group by arguments.
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
      T extends user_tokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_tokenGroupByArgs['orderBy'] }
        : { orderBy?: user_tokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_tokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_tokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_token model
   */
  readonly fields: user_tokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_tokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends user_token$userArgs<ExtArgs> = {}>(args?: Subset<T, user_token$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_token model
   */
  interface user_tokenFieldRefs {
    readonly id: FieldRef<"user_token", 'Int'>
    readonly uuid: FieldRef<"user_token", 'String'>
    readonly user_id: FieldRef<"user_token", 'BigInt'>
    readonly name: FieldRef<"user_token", 'String'>
    readonly secret: FieldRef<"user_token", 'String'>
    readonly private_key: FieldRef<"user_token", 'String'>
    readonly public_key: FieldRef<"user_token", 'String'>
    readonly status: FieldRef<"user_token", 'Int'>
    readonly description: FieldRef<"user_token", 'String'>
    readonly created_at: FieldRef<"user_token", 'DateTime'>
    readonly updated_at: FieldRef<"user_token", 'DateTime'>
    readonly created_by: FieldRef<"user_token", 'String'>
    readonly updated_by: FieldRef<"user_token", 'String'>
    readonly deleted_at: FieldRef<"user_token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_token findUnique
   */
  export type user_tokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_token
     */
    select?: user_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_token
     */
    omit?: user_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokenInclude<ExtArgs> | null
    /**
     * Filter, which user_token to fetch.
     */
    where: user_tokenWhereUniqueInput
  }

  /**
   * user_token findUniqueOrThrow
   */
  export type user_tokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_token
     */
    select?: user_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_token
     */
    omit?: user_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokenInclude<ExtArgs> | null
    /**
     * Filter, which user_token to fetch.
     */
    where: user_tokenWhereUniqueInput
  }

  /**
   * user_token findFirst
   */
  export type user_tokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_token
     */
    select?: user_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_token
     */
    omit?: user_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokenInclude<ExtArgs> | null
    /**
     * Filter, which user_token to fetch.
     */
    where?: user_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tokens to fetch.
     */
    orderBy?: user_tokenOrderByWithRelationInput | user_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tokens.
     */
    cursor?: user_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tokens.
     */
    distinct?: User_tokenScalarFieldEnum | User_tokenScalarFieldEnum[]
  }

  /**
   * user_token findFirstOrThrow
   */
  export type user_tokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_token
     */
    select?: user_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_token
     */
    omit?: user_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokenInclude<ExtArgs> | null
    /**
     * Filter, which user_token to fetch.
     */
    where?: user_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tokens to fetch.
     */
    orderBy?: user_tokenOrderByWithRelationInput | user_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tokens.
     */
    cursor?: user_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tokens.
     */
    distinct?: User_tokenScalarFieldEnum | User_tokenScalarFieldEnum[]
  }

  /**
   * user_token findMany
   */
  export type user_tokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_token
     */
    select?: user_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_token
     */
    omit?: user_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokenInclude<ExtArgs> | null
    /**
     * Filter, which user_tokens to fetch.
     */
    where?: user_tokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tokens to fetch.
     */
    orderBy?: user_tokenOrderByWithRelationInput | user_tokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_tokens.
     */
    cursor?: user_tokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tokens.
     */
    skip?: number
    distinct?: User_tokenScalarFieldEnum | User_tokenScalarFieldEnum[]
  }

  /**
   * user_token create
   */
  export type user_tokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_token
     */
    select?: user_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_token
     */
    omit?: user_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokenInclude<ExtArgs> | null
    /**
     * The data needed to create a user_token.
     */
    data: XOR<user_tokenCreateInput, user_tokenUncheckedCreateInput>
  }

  /**
   * user_token createMany
   */
  export type user_tokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_tokens.
     */
    data: user_tokenCreateManyInput | user_tokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_token update
   */
  export type user_tokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_token
     */
    select?: user_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_token
     */
    omit?: user_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokenInclude<ExtArgs> | null
    /**
     * The data needed to update a user_token.
     */
    data: XOR<user_tokenUpdateInput, user_tokenUncheckedUpdateInput>
    /**
     * Choose, which user_token to update.
     */
    where: user_tokenWhereUniqueInput
  }

  /**
   * user_token updateMany
   */
  export type user_tokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_tokens.
     */
    data: XOR<user_tokenUpdateManyMutationInput, user_tokenUncheckedUpdateManyInput>
    /**
     * Filter which user_tokens to update
     */
    where?: user_tokenWhereInput
    /**
     * Limit how many user_tokens to update.
     */
    limit?: number
  }

  /**
   * user_token upsert
   */
  export type user_tokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_token
     */
    select?: user_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_token
     */
    omit?: user_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokenInclude<ExtArgs> | null
    /**
     * The filter to search for the user_token to update in case it exists.
     */
    where: user_tokenWhereUniqueInput
    /**
     * In case the user_token found by the `where` argument doesn't exist, create a new user_token with this data.
     */
    create: XOR<user_tokenCreateInput, user_tokenUncheckedCreateInput>
    /**
     * In case the user_token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_tokenUpdateInput, user_tokenUncheckedUpdateInput>
  }

  /**
   * user_token delete
   */
  export type user_tokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_token
     */
    select?: user_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_token
     */
    omit?: user_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokenInclude<ExtArgs> | null
    /**
     * Filter which user_token to delete.
     */
    where: user_tokenWhereUniqueInput
  }

  /**
   * user_token deleteMany
   */
  export type user_tokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tokens to delete
     */
    where?: user_tokenWhereInput
    /**
     * Limit how many user_tokens to delete.
     */
    limit?: number
  }

  /**
   * user_token.user
   */
  export type user_token$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * user_token without action
   */
  export type user_tokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_token
     */
    select?: user_tokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_token
     */
    omit?: user_tokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tokenInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    path: 'path',
    name: 'name',
    size: 'size',
    type: 'type',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const Level_pendidikanScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nama: 'nama',
    keterangan: 'keterangan',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type Level_pendidikanScalarFieldEnum = (typeof Level_pendidikanScalarFieldEnum)[keyof typeof Level_pendidikanScalarFieldEnum]


  export const PesertaScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nama_lengkap: 'nama_lengkap',
    kewarganegaraan: 'kewarganegaraan',
    nik: 'nik',
    nik_hash: 'nik_hash',
    tanggal_lahir: 'tanggal_lahir',
    jenis_kelamin: 'jenis_kelamin',
    no_hp: 'no_hp',
    email: 'email',
    tempat_lahir: 'tempat_lahir',
    level_pendidikan_id: 'level_pendidikan_id',
    provinsi_id: 'provinsi_id',
    alamat: 'alamat',
    lat: 'lat',
    lng: 'lng',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type PesertaScalarFieldEnum = (typeof PesertaScalarFieldEnum)[keyof typeof PesertaScalarFieldEnum]


  export const T_kecamatanScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nama: 'nama',
    latitude: 'latitude',
    longitude: 'longitude',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type T_kecamatanScalarFieldEnum = (typeof T_kecamatanScalarFieldEnum)[keyof typeof T_kecamatanScalarFieldEnum]


  export const T_kelurahanScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nama: 'nama',
    latitude: 'latitude',
    longitude: 'longitude',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type T_kelurahanScalarFieldEnum = (typeof T_kelurahanScalarFieldEnum)[keyof typeof T_kelurahanScalarFieldEnum]


  export const T_kotaScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nama: 'nama',
    latitude: 'latitude',
    longitude: 'longitude',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type T_kotaScalarFieldEnum = (typeof T_kotaScalarFieldEnum)[keyof typeof T_kotaScalarFieldEnum]


  export const T_provinsiScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nama: 'nama',
    latitude: 'latitude',
    longitude: 'longitude',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type T_provinsiScalarFieldEnum = (typeof T_provinsiScalarFieldEnum)[keyof typeof T_provinsiScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    username: 'username',
    admin_id: 'admin_id',
    peserta_id: 'peserta_id',
    user_role_id: 'user_role_id',
    otp: 'otp',
    otp_expired: 'otp_expired',
    complete_onboarding: 'complete_onboarding',
    token: 'token',
    refresh_token: 'refresh_token',
    verified: 'verified',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_permissionScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    description: 'description',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type User_permissionScalarFieldEnum = (typeof User_permissionScalarFieldEnum)[keyof typeof User_permissionScalarFieldEnum]


  export const User_roleScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type User_roleScalarFieldEnum = (typeof User_roleScalarFieldEnum)[keyof typeof User_roleScalarFieldEnum]


  export const User_role_permissionScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    user_role_id: 'user_role_id',
    user_permission_id: 'user_permission_id',
    status: 'status',
    created_at: 'created_at',
    created_by: 'created_by',
    updated_at: 'updated_at',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type User_role_permissionScalarFieldEnum = (typeof User_role_permissionScalarFieldEnum)[keyof typeof User_role_permissionScalarFieldEnum]


  export const User_tokenScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    user_id: 'user_id',
    name: 'name',
    secret: 'secret',
    private_key: 'private_key',
    public_key: 'public_key',
    status: 'status',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    deleted_at: 'deleted_at'
  };

  export type User_tokenScalarFieldEnum = (typeof User_tokenScalarFieldEnum)[keyof typeof User_tokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const adminOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  export const fileOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    path: 'path',
    name: 'name',
    type: 'type',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type fileOrderByRelevanceFieldEnum = (typeof fileOrderByRelevanceFieldEnum)[keyof typeof fileOrderByRelevanceFieldEnum]


  export const level_pendidikanOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    nama: 'nama',
    keterangan: 'keterangan',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type level_pendidikanOrderByRelevanceFieldEnum = (typeof level_pendidikanOrderByRelevanceFieldEnum)[keyof typeof level_pendidikanOrderByRelevanceFieldEnum]


  export const pesertaOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    nama_lengkap: 'nama_lengkap',
    nik: 'nik',
    nik_hash: 'nik_hash',
    no_hp: 'no_hp',
    email: 'email',
    tempat_lahir: 'tempat_lahir',
    provinsi_id: 'provinsi_id',
    alamat: 'alamat',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type pesertaOrderByRelevanceFieldEnum = (typeof pesertaOrderByRelevanceFieldEnum)[keyof typeof pesertaOrderByRelevanceFieldEnum]


  export const t_kecamatanOrderByRelevanceFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nama: 'nama',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type t_kecamatanOrderByRelevanceFieldEnum = (typeof t_kecamatanOrderByRelevanceFieldEnum)[keyof typeof t_kecamatanOrderByRelevanceFieldEnum]


  export const t_kelurahanOrderByRelevanceFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nama: 'nama',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type t_kelurahanOrderByRelevanceFieldEnum = (typeof t_kelurahanOrderByRelevanceFieldEnum)[keyof typeof t_kelurahanOrderByRelevanceFieldEnum]


  export const t_kotaOrderByRelevanceFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nama: 'nama',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type t_kotaOrderByRelevanceFieldEnum = (typeof t_kotaOrderByRelevanceFieldEnum)[keyof typeof t_kotaOrderByRelevanceFieldEnum]


  export const t_provinsiOrderByRelevanceFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nama: 'nama',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type t_provinsiOrderByRelevanceFieldEnum = (typeof t_provinsiOrderByRelevanceFieldEnum)[keyof typeof t_provinsiOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    username: 'username',
    otp: 'otp',
    token: 'token',
    refresh_token: 'refresh_token',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const user_permissionOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    description: 'description',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type user_permissionOrderByRelevanceFieldEnum = (typeof user_permissionOrderByRelevanceFieldEnum)[keyof typeof user_permissionOrderByRelevanceFieldEnum]


  export const user_roleOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type user_roleOrderByRelevanceFieldEnum = (typeof user_roleOrderByRelevanceFieldEnum)[keyof typeof user_roleOrderByRelevanceFieldEnum]


  export const user_role_permissionOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type user_role_permissionOrderByRelevanceFieldEnum = (typeof user_role_permissionOrderByRelevanceFieldEnum)[keyof typeof user_role_permissionOrderByRelevanceFieldEnum]


  export const user_tokenOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    secret: 'secret',
    private_key: 'private_key',
    public_key: 'public_key',
    description: 'description',
    created_by: 'created_by',
    updated_by: 'updated_by'
  };

  export type user_tokenOrderByRelevanceFieldEnum = (typeof user_tokenOrderByRelevanceFieldEnum)[keyof typeof user_tokenOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'peserta_kewarganegaraan'
   */
  export type Enumpeserta_kewarganegaraanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'peserta_kewarganegaraan'>
    


  /**
   * Reference to a field of type 'peserta_jenis_kelamin'
   */
  export type Enumpeserta_jenis_kelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'peserta_jenis_kelamin'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    uuid?: StringNullableFilter<"admin"> | string | null
    name?: StringFilter<"admin"> | string
    status?: IntFilter<"admin"> | number
    created_at?: DateTimeFilter<"admin"> | Date | string
    updated_at?: DateTimeNullableFilter<"admin"> | Date | string | null
    created_by?: StringNullableFilter<"admin"> | string | null
    updated_by?: StringNullableFilter<"admin"> | string | null
    deleted_at?: DateTimeNullableFilter<"admin"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    name?: StringFilter<"admin"> | string
    status?: IntFilter<"admin"> | number
    created_at?: DateTimeFilter<"admin"> | Date | string
    updated_at?: DateTimeNullableFilter<"admin"> | Date | string | null
    created_by?: StringNullableFilter<"admin"> | string | null
    updated_by?: StringNullableFilter<"admin"> | string | null
    deleted_at?: DateTimeNullableFilter<"admin"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id" | "uuid">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    uuid?: StringNullableWithAggregatesFilter<"admin"> | string | null
    name?: StringWithAggregatesFilter<"admin"> | string
    status?: IntWithAggregatesFilter<"admin"> | number
    created_at?: DateTimeWithAggregatesFilter<"admin"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"admin"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"admin"> | string | null
    updated_by?: StringNullableWithAggregatesFilter<"admin"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"admin"> | Date | string | null
  }

  export type fileWhereInput = {
    AND?: fileWhereInput | fileWhereInput[]
    OR?: fileWhereInput[]
    NOT?: fileWhereInput | fileWhereInput[]
    id?: BigIntFilter<"file"> | bigint | number
    uuid?: StringFilter<"file"> | string
    path?: StringFilter<"file"> | string
    name?: StringFilter<"file"> | string
    size?: IntFilter<"file"> | number
    type?: StringFilter<"file"> | string
    created_at?: DateTimeFilter<"file"> | Date | string
    updated_at?: DateTimeNullableFilter<"file"> | Date | string | null
    created_by?: StringFilter<"file"> | string
    updated_by?: StringFilter<"file"> | string
  }

  export type fileOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    path?: SortOrder
    name?: SortOrder
    size?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    _relevance?: fileOrderByRelevanceInput
  }

  export type fileWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: fileWhereInput | fileWhereInput[]
    OR?: fileWhereInput[]
    NOT?: fileWhereInput | fileWhereInput[]
    uuid?: StringFilter<"file"> | string
    path?: StringFilter<"file"> | string
    name?: StringFilter<"file"> | string
    size?: IntFilter<"file"> | number
    type?: StringFilter<"file"> | string
    created_at?: DateTimeFilter<"file"> | Date | string
    updated_at?: DateTimeNullableFilter<"file"> | Date | string | null
    created_by?: StringFilter<"file"> | string
    updated_by?: StringFilter<"file"> | string
  }, "id">

  export type fileOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    path?: SortOrder
    name?: SortOrder
    size?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    _count?: fileCountOrderByAggregateInput
    _avg?: fileAvgOrderByAggregateInput
    _max?: fileMaxOrderByAggregateInput
    _min?: fileMinOrderByAggregateInput
    _sum?: fileSumOrderByAggregateInput
  }

  export type fileScalarWhereWithAggregatesInput = {
    AND?: fileScalarWhereWithAggregatesInput | fileScalarWhereWithAggregatesInput[]
    OR?: fileScalarWhereWithAggregatesInput[]
    NOT?: fileScalarWhereWithAggregatesInput | fileScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"file"> | bigint | number
    uuid?: StringWithAggregatesFilter<"file"> | string
    path?: StringWithAggregatesFilter<"file"> | string
    name?: StringWithAggregatesFilter<"file"> | string
    size?: IntWithAggregatesFilter<"file"> | number
    type?: StringWithAggregatesFilter<"file"> | string
    created_at?: DateTimeWithAggregatesFilter<"file"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"file"> | Date | string | null
    created_by?: StringWithAggregatesFilter<"file"> | string
    updated_by?: StringWithAggregatesFilter<"file"> | string
  }

  export type level_pendidikanWhereInput = {
    AND?: level_pendidikanWhereInput | level_pendidikanWhereInput[]
    OR?: level_pendidikanWhereInput[]
    NOT?: level_pendidikanWhereInput | level_pendidikanWhereInput[]
    id?: IntFilter<"level_pendidikan"> | number
    uuid?: StringFilter<"level_pendidikan"> | string
    nama?: StringFilter<"level_pendidikan"> | string
    keterangan?: StringNullableFilter<"level_pendidikan"> | string | null
    status?: IntFilter<"level_pendidikan"> | number
    created_at?: DateTimeFilter<"level_pendidikan"> | Date | string
    updated_at?: DateTimeNullableFilter<"level_pendidikan"> | Date | string | null
    created_by?: StringNullableFilter<"level_pendidikan"> | string | null
    updated_by?: StringNullableFilter<"level_pendidikan"> | string | null
    deleted_at?: DateTimeNullableFilter<"level_pendidikan"> | Date | string | null
  }

  export type level_pendidikanOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: level_pendidikanOrderByRelevanceInput
  }

  export type level_pendidikanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    nama?: string
    AND?: level_pendidikanWhereInput | level_pendidikanWhereInput[]
    OR?: level_pendidikanWhereInput[]
    NOT?: level_pendidikanWhereInput | level_pendidikanWhereInput[]
    keterangan?: StringNullableFilter<"level_pendidikan"> | string | null
    status?: IntFilter<"level_pendidikan"> | number
    created_at?: DateTimeFilter<"level_pendidikan"> | Date | string
    updated_at?: DateTimeNullableFilter<"level_pendidikan"> | Date | string | null
    created_by?: StringNullableFilter<"level_pendidikan"> | string | null
    updated_by?: StringNullableFilter<"level_pendidikan"> | string | null
    deleted_at?: DateTimeNullableFilter<"level_pendidikan"> | Date | string | null
  }, "id" | "uuid" | "nama">

  export type level_pendidikanOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: level_pendidikanCountOrderByAggregateInput
    _avg?: level_pendidikanAvgOrderByAggregateInput
    _max?: level_pendidikanMaxOrderByAggregateInput
    _min?: level_pendidikanMinOrderByAggregateInput
    _sum?: level_pendidikanSumOrderByAggregateInput
  }

  export type level_pendidikanScalarWhereWithAggregatesInput = {
    AND?: level_pendidikanScalarWhereWithAggregatesInput | level_pendidikanScalarWhereWithAggregatesInput[]
    OR?: level_pendidikanScalarWhereWithAggregatesInput[]
    NOT?: level_pendidikanScalarWhereWithAggregatesInput | level_pendidikanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"level_pendidikan"> | number
    uuid?: StringWithAggregatesFilter<"level_pendidikan"> | string
    nama?: StringWithAggregatesFilter<"level_pendidikan"> | string
    keterangan?: StringNullableWithAggregatesFilter<"level_pendidikan"> | string | null
    status?: IntWithAggregatesFilter<"level_pendidikan"> | number
    created_at?: DateTimeWithAggregatesFilter<"level_pendidikan"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"level_pendidikan"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"level_pendidikan"> | string | null
    updated_by?: StringNullableWithAggregatesFilter<"level_pendidikan"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"level_pendidikan"> | Date | string | null
  }

  export type pesertaWhereInput = {
    AND?: pesertaWhereInput | pesertaWhereInput[]
    OR?: pesertaWhereInput[]
    NOT?: pesertaWhereInput | pesertaWhereInput[]
    id?: BigIntFilter<"peserta"> | bigint | number
    uuid?: StringFilter<"peserta"> | string
    nama_lengkap?: StringFilter<"peserta"> | string
    kewarganegaraan?: Enumpeserta_kewarganegaraanFilter<"peserta"> | $Enums.peserta_kewarganegaraan
    nik?: StringFilter<"peserta"> | string
    nik_hash?: StringFilter<"peserta"> | string
    tanggal_lahir?: DateTimeFilter<"peserta"> | Date | string
    jenis_kelamin?: Enumpeserta_jenis_kelaminFilter<"peserta"> | $Enums.peserta_jenis_kelamin
    no_hp?: StringNullableFilter<"peserta"> | string | null
    email?: StringFilter<"peserta"> | string
    tempat_lahir?: StringNullableFilter<"peserta"> | string | null
    level_pendidikan_id?: IntNullableFilter<"peserta"> | number | null
    provinsi_id?: StringNullableFilter<"peserta"> | string | null
    alamat?: StringNullableFilter<"peserta"> | string | null
    lat?: DecimalNullableFilter<"peserta"> | Decimal | DecimalJsLike | number | string | null
    lng?: DecimalNullableFilter<"peserta"> | Decimal | DecimalJsLike | number | string | null
    status?: IntFilter<"peserta"> | number
    created_at?: DateTimeFilter<"peserta"> | Date | string
    updated_at?: DateTimeNullableFilter<"peserta"> | Date | string | null
    created_by?: StringNullableFilter<"peserta"> | string | null
    updated_by?: StringNullableFilter<"peserta"> | string | null
    deleted_at?: DateTimeNullableFilter<"peserta"> | Date | string | null
    user?: UserListRelationFilter
  }

  export type pesertaOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama_lengkap?: SortOrder
    kewarganegaraan?: SortOrder
    nik?: SortOrder
    nik_hash?: SortOrder
    tanggal_lahir?: SortOrder
    jenis_kelamin?: SortOrder
    no_hp?: SortOrderInput | SortOrder
    email?: SortOrder
    tempat_lahir?: SortOrderInput | SortOrder
    level_pendidikan_id?: SortOrderInput | SortOrder
    provinsi_id?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user?: userOrderByRelationAggregateInput
    _relevance?: pesertaOrderByRelevanceInput
  }

  export type pesertaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    nik_hash?: string
    AND?: pesertaWhereInput | pesertaWhereInput[]
    OR?: pesertaWhereInput[]
    NOT?: pesertaWhereInput | pesertaWhereInput[]
    nama_lengkap?: StringFilter<"peserta"> | string
    kewarganegaraan?: Enumpeserta_kewarganegaraanFilter<"peserta"> | $Enums.peserta_kewarganegaraan
    nik?: StringFilter<"peserta"> | string
    tanggal_lahir?: DateTimeFilter<"peserta"> | Date | string
    jenis_kelamin?: Enumpeserta_jenis_kelaminFilter<"peserta"> | $Enums.peserta_jenis_kelamin
    no_hp?: StringNullableFilter<"peserta"> | string | null
    email?: StringFilter<"peserta"> | string
    tempat_lahir?: StringNullableFilter<"peserta"> | string | null
    level_pendidikan_id?: IntNullableFilter<"peserta"> | number | null
    provinsi_id?: StringNullableFilter<"peserta"> | string | null
    alamat?: StringNullableFilter<"peserta"> | string | null
    lat?: DecimalNullableFilter<"peserta"> | Decimal | DecimalJsLike | number | string | null
    lng?: DecimalNullableFilter<"peserta"> | Decimal | DecimalJsLike | number | string | null
    status?: IntFilter<"peserta"> | number
    created_at?: DateTimeFilter<"peserta"> | Date | string
    updated_at?: DateTimeNullableFilter<"peserta"> | Date | string | null
    created_by?: StringNullableFilter<"peserta"> | string | null
    updated_by?: StringNullableFilter<"peserta"> | string | null
    deleted_at?: DateTimeNullableFilter<"peserta"> | Date | string | null
    user?: UserListRelationFilter
  }, "id" | "uuid" | "nik_hash">

  export type pesertaOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama_lengkap?: SortOrder
    kewarganegaraan?: SortOrder
    nik?: SortOrder
    nik_hash?: SortOrder
    tanggal_lahir?: SortOrder
    jenis_kelamin?: SortOrder
    no_hp?: SortOrderInput | SortOrder
    email?: SortOrder
    tempat_lahir?: SortOrderInput | SortOrder
    level_pendidikan_id?: SortOrderInput | SortOrder
    provinsi_id?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: pesertaCountOrderByAggregateInput
    _avg?: pesertaAvgOrderByAggregateInput
    _max?: pesertaMaxOrderByAggregateInput
    _min?: pesertaMinOrderByAggregateInput
    _sum?: pesertaSumOrderByAggregateInput
  }

  export type pesertaScalarWhereWithAggregatesInput = {
    AND?: pesertaScalarWhereWithAggregatesInput | pesertaScalarWhereWithAggregatesInput[]
    OR?: pesertaScalarWhereWithAggregatesInput[]
    NOT?: pesertaScalarWhereWithAggregatesInput | pesertaScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"peserta"> | bigint | number
    uuid?: StringWithAggregatesFilter<"peserta"> | string
    nama_lengkap?: StringWithAggregatesFilter<"peserta"> | string
    kewarganegaraan?: Enumpeserta_kewarganegaraanWithAggregatesFilter<"peserta"> | $Enums.peserta_kewarganegaraan
    nik?: StringWithAggregatesFilter<"peserta"> | string
    nik_hash?: StringWithAggregatesFilter<"peserta"> | string
    tanggal_lahir?: DateTimeWithAggregatesFilter<"peserta"> | Date | string
    jenis_kelamin?: Enumpeserta_jenis_kelaminWithAggregatesFilter<"peserta"> | $Enums.peserta_jenis_kelamin
    no_hp?: StringNullableWithAggregatesFilter<"peserta"> | string | null
    email?: StringWithAggregatesFilter<"peserta"> | string
    tempat_lahir?: StringNullableWithAggregatesFilter<"peserta"> | string | null
    level_pendidikan_id?: IntNullableWithAggregatesFilter<"peserta"> | number | null
    provinsi_id?: StringNullableWithAggregatesFilter<"peserta"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"peserta"> | string | null
    lat?: DecimalNullableWithAggregatesFilter<"peserta"> | Decimal | DecimalJsLike | number | string | null
    lng?: DecimalNullableWithAggregatesFilter<"peserta"> | Decimal | DecimalJsLike | number | string | null
    status?: IntWithAggregatesFilter<"peserta"> | number
    created_at?: DateTimeWithAggregatesFilter<"peserta"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"peserta"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"peserta"> | string | null
    updated_by?: StringNullableWithAggregatesFilter<"peserta"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"peserta"> | Date | string | null
  }

  export type t_kecamatanWhereInput = {
    AND?: t_kecamatanWhereInput | t_kecamatanWhereInput[]
    OR?: t_kecamatanWhereInput[]
    NOT?: t_kecamatanWhereInput | t_kecamatanWhereInput[]
    id?: StringFilter<"t_kecamatan"> | string
    uuid?: StringFilter<"t_kecamatan"> | string
    nama?: StringFilter<"t_kecamatan"> | string
    latitude?: FloatFilter<"t_kecamatan"> | number
    longitude?: FloatFilter<"t_kecamatan"> | number
    created_at?: DateTimeNullableFilter<"t_kecamatan"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"t_kecamatan"> | Date | string | null
    created_by?: StringNullableFilter<"t_kecamatan"> | string | null
    updated_by?: StringNullableFilter<"t_kecamatan"> | string | null
    deleted_at?: DateTimeNullableFilter<"t_kecamatan"> | Date | string | null
  }

  export type t_kecamatanOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: t_kecamatanOrderByRelevanceInput
  }

  export type t_kecamatanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uuid?: string
    AND?: t_kecamatanWhereInput | t_kecamatanWhereInput[]
    OR?: t_kecamatanWhereInput[]
    NOT?: t_kecamatanWhereInput | t_kecamatanWhereInput[]
    nama?: StringFilter<"t_kecamatan"> | string
    latitude?: FloatFilter<"t_kecamatan"> | number
    longitude?: FloatFilter<"t_kecamatan"> | number
    created_at?: DateTimeNullableFilter<"t_kecamatan"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"t_kecamatan"> | Date | string | null
    created_by?: StringNullableFilter<"t_kecamatan"> | string | null
    updated_by?: StringNullableFilter<"t_kecamatan"> | string | null
    deleted_at?: DateTimeNullableFilter<"t_kecamatan"> | Date | string | null
  }, "id" | "uuid">

  export type t_kecamatanOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: t_kecamatanCountOrderByAggregateInput
    _avg?: t_kecamatanAvgOrderByAggregateInput
    _max?: t_kecamatanMaxOrderByAggregateInput
    _min?: t_kecamatanMinOrderByAggregateInput
    _sum?: t_kecamatanSumOrderByAggregateInput
  }

  export type t_kecamatanScalarWhereWithAggregatesInput = {
    AND?: t_kecamatanScalarWhereWithAggregatesInput | t_kecamatanScalarWhereWithAggregatesInput[]
    OR?: t_kecamatanScalarWhereWithAggregatesInput[]
    NOT?: t_kecamatanScalarWhereWithAggregatesInput | t_kecamatanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_kecamatan"> | string
    uuid?: StringWithAggregatesFilter<"t_kecamatan"> | string
    nama?: StringWithAggregatesFilter<"t_kecamatan"> | string
    latitude?: FloatWithAggregatesFilter<"t_kecamatan"> | number
    longitude?: FloatWithAggregatesFilter<"t_kecamatan"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"t_kecamatan"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"t_kecamatan"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"t_kecamatan"> | string | null
    updated_by?: StringNullableWithAggregatesFilter<"t_kecamatan"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"t_kecamatan"> | Date | string | null
  }

  export type t_kelurahanWhereInput = {
    AND?: t_kelurahanWhereInput | t_kelurahanWhereInput[]
    OR?: t_kelurahanWhereInput[]
    NOT?: t_kelurahanWhereInput | t_kelurahanWhereInput[]
    id?: StringFilter<"t_kelurahan"> | string
    uuid?: StringFilter<"t_kelurahan"> | string
    nama?: StringFilter<"t_kelurahan"> | string
    latitude?: FloatFilter<"t_kelurahan"> | number
    longitude?: FloatFilter<"t_kelurahan"> | number
    created_at?: DateTimeNullableFilter<"t_kelurahan"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"t_kelurahan"> | Date | string | null
    created_by?: StringNullableFilter<"t_kelurahan"> | string | null
    updated_by?: StringNullableFilter<"t_kelurahan"> | string | null
    deleted_at?: DateTimeNullableFilter<"t_kelurahan"> | Date | string | null
  }

  export type t_kelurahanOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: t_kelurahanOrderByRelevanceInput
  }

  export type t_kelurahanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uuid?: string
    AND?: t_kelurahanWhereInput | t_kelurahanWhereInput[]
    OR?: t_kelurahanWhereInput[]
    NOT?: t_kelurahanWhereInput | t_kelurahanWhereInput[]
    nama?: StringFilter<"t_kelurahan"> | string
    latitude?: FloatFilter<"t_kelurahan"> | number
    longitude?: FloatFilter<"t_kelurahan"> | number
    created_at?: DateTimeNullableFilter<"t_kelurahan"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"t_kelurahan"> | Date | string | null
    created_by?: StringNullableFilter<"t_kelurahan"> | string | null
    updated_by?: StringNullableFilter<"t_kelurahan"> | string | null
    deleted_at?: DateTimeNullableFilter<"t_kelurahan"> | Date | string | null
  }, "id" | "uuid">

  export type t_kelurahanOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: t_kelurahanCountOrderByAggregateInput
    _avg?: t_kelurahanAvgOrderByAggregateInput
    _max?: t_kelurahanMaxOrderByAggregateInput
    _min?: t_kelurahanMinOrderByAggregateInput
    _sum?: t_kelurahanSumOrderByAggregateInput
  }

  export type t_kelurahanScalarWhereWithAggregatesInput = {
    AND?: t_kelurahanScalarWhereWithAggregatesInput | t_kelurahanScalarWhereWithAggregatesInput[]
    OR?: t_kelurahanScalarWhereWithAggregatesInput[]
    NOT?: t_kelurahanScalarWhereWithAggregatesInput | t_kelurahanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_kelurahan"> | string
    uuid?: StringWithAggregatesFilter<"t_kelurahan"> | string
    nama?: StringWithAggregatesFilter<"t_kelurahan"> | string
    latitude?: FloatWithAggregatesFilter<"t_kelurahan"> | number
    longitude?: FloatWithAggregatesFilter<"t_kelurahan"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"t_kelurahan"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"t_kelurahan"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"t_kelurahan"> | string | null
    updated_by?: StringNullableWithAggregatesFilter<"t_kelurahan"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"t_kelurahan"> | Date | string | null
  }

  export type t_kotaWhereInput = {
    AND?: t_kotaWhereInput | t_kotaWhereInput[]
    OR?: t_kotaWhereInput[]
    NOT?: t_kotaWhereInput | t_kotaWhereInput[]
    id?: StringFilter<"t_kota"> | string
    uuid?: StringFilter<"t_kota"> | string
    nama?: StringFilter<"t_kota"> | string
    latitude?: FloatFilter<"t_kota"> | number
    longitude?: FloatFilter<"t_kota"> | number
    created_at?: DateTimeNullableFilter<"t_kota"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"t_kota"> | Date | string | null
    created_by?: StringNullableFilter<"t_kota"> | string | null
    updated_by?: StringNullableFilter<"t_kota"> | string | null
    deleted_at?: DateTimeNullableFilter<"t_kota"> | Date | string | null
  }

  export type t_kotaOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: t_kotaOrderByRelevanceInput
  }

  export type t_kotaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uuid?: string
    AND?: t_kotaWhereInput | t_kotaWhereInput[]
    OR?: t_kotaWhereInput[]
    NOT?: t_kotaWhereInput | t_kotaWhereInput[]
    nama?: StringFilter<"t_kota"> | string
    latitude?: FloatFilter<"t_kota"> | number
    longitude?: FloatFilter<"t_kota"> | number
    created_at?: DateTimeNullableFilter<"t_kota"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"t_kota"> | Date | string | null
    created_by?: StringNullableFilter<"t_kota"> | string | null
    updated_by?: StringNullableFilter<"t_kota"> | string | null
    deleted_at?: DateTimeNullableFilter<"t_kota"> | Date | string | null
  }, "id" | "uuid">

  export type t_kotaOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: t_kotaCountOrderByAggregateInput
    _avg?: t_kotaAvgOrderByAggregateInput
    _max?: t_kotaMaxOrderByAggregateInput
    _min?: t_kotaMinOrderByAggregateInput
    _sum?: t_kotaSumOrderByAggregateInput
  }

  export type t_kotaScalarWhereWithAggregatesInput = {
    AND?: t_kotaScalarWhereWithAggregatesInput | t_kotaScalarWhereWithAggregatesInput[]
    OR?: t_kotaScalarWhereWithAggregatesInput[]
    NOT?: t_kotaScalarWhereWithAggregatesInput | t_kotaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_kota"> | string
    uuid?: StringWithAggregatesFilter<"t_kota"> | string
    nama?: StringWithAggregatesFilter<"t_kota"> | string
    latitude?: FloatWithAggregatesFilter<"t_kota"> | number
    longitude?: FloatWithAggregatesFilter<"t_kota"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"t_kota"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"t_kota"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"t_kota"> | string | null
    updated_by?: StringNullableWithAggregatesFilter<"t_kota"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"t_kota"> | Date | string | null
  }

  export type t_provinsiWhereInput = {
    AND?: t_provinsiWhereInput | t_provinsiWhereInput[]
    OR?: t_provinsiWhereInput[]
    NOT?: t_provinsiWhereInput | t_provinsiWhereInput[]
    id?: StringFilter<"t_provinsi"> | string
    uuid?: StringFilter<"t_provinsi"> | string
    nama?: StringFilter<"t_provinsi"> | string
    latitude?: FloatFilter<"t_provinsi"> | number
    longitude?: FloatFilter<"t_provinsi"> | number
    created_at?: DateTimeNullableFilter<"t_provinsi"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"t_provinsi"> | Date | string | null
    created_by?: StringNullableFilter<"t_provinsi"> | string | null
    updated_by?: StringNullableFilter<"t_provinsi"> | string | null
    deleted_at?: DateTimeNullableFilter<"t_provinsi"> | Date | string | null
  }

  export type t_provinsiOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _relevance?: t_provinsiOrderByRelevanceInput
  }

  export type t_provinsiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uuid?: string
    AND?: t_provinsiWhereInput | t_provinsiWhereInput[]
    OR?: t_provinsiWhereInput[]
    NOT?: t_provinsiWhereInput | t_provinsiWhereInput[]
    nama?: StringFilter<"t_provinsi"> | string
    latitude?: FloatFilter<"t_provinsi"> | number
    longitude?: FloatFilter<"t_provinsi"> | number
    created_at?: DateTimeNullableFilter<"t_provinsi"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"t_provinsi"> | Date | string | null
    created_by?: StringNullableFilter<"t_provinsi"> | string | null
    updated_by?: StringNullableFilter<"t_provinsi"> | string | null
    deleted_at?: DateTimeNullableFilter<"t_provinsi"> | Date | string | null
  }, "id" | "uuid">

  export type t_provinsiOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: t_provinsiCountOrderByAggregateInput
    _avg?: t_provinsiAvgOrderByAggregateInput
    _max?: t_provinsiMaxOrderByAggregateInput
    _min?: t_provinsiMinOrderByAggregateInput
    _sum?: t_provinsiSumOrderByAggregateInput
  }

  export type t_provinsiScalarWhereWithAggregatesInput = {
    AND?: t_provinsiScalarWhereWithAggregatesInput | t_provinsiScalarWhereWithAggregatesInput[]
    OR?: t_provinsiScalarWhereWithAggregatesInput[]
    NOT?: t_provinsiScalarWhereWithAggregatesInput | t_provinsiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"t_provinsi"> | string
    uuid?: StringWithAggregatesFilter<"t_provinsi"> | string
    nama?: StringWithAggregatesFilter<"t_provinsi"> | string
    latitude?: FloatWithAggregatesFilter<"t_provinsi"> | number
    longitude?: FloatWithAggregatesFilter<"t_provinsi"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"t_provinsi"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"t_provinsi"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"t_provinsi"> | string | null
    updated_by?: StringNullableWithAggregatesFilter<"t_provinsi"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"t_provinsi"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: BigIntFilter<"user"> | bigint | number
    uuid?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    admin_id?: IntNullableFilter<"user"> | number | null
    peserta_id?: BigIntNullableFilter<"user"> | bigint | number | null
    user_role_id?: IntNullableFilter<"user"> | number | null
    otp?: StringNullableFilter<"user"> | string | null
    otp_expired?: DateTimeNullableFilter<"user"> | Date | string | null
    complete_onboarding?: BoolNullableFilter<"user"> | boolean | null
    token?: StringNullableFilter<"user"> | string | null
    refresh_token?: StringNullableFilter<"user"> | string | null
    verified?: IntNullableFilter<"user"> | number | null
    status?: IntFilter<"user"> | number
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    created_by?: StringFilter<"user"> | string
    updated_by?: StringNullableFilter<"user"> | string | null
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
    admin?: XOR<AdminNullableScalarRelationFilter, adminWhereInput> | null
    peserta?: XOR<PesertaNullableScalarRelationFilter, pesertaWhereInput> | null
    user_role?: XOR<User_roleNullableScalarRelationFilter, user_roleWhereInput> | null
    user_token?: User_tokenListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    admin_id?: SortOrderInput | SortOrder
    peserta_id?: SortOrderInput | SortOrder
    user_role_id?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otp_expired?: SortOrderInput | SortOrder
    complete_onboarding?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    admin?: adminOrderByWithRelationInput
    peserta?: pesertaOrderByWithRelationInput
    user_role?: user_roleOrderByWithRelationInput
    user_token?: user_tokenOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    uuid?: string
    username?: string
    admin_id?: number
    user_role_id?: number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    peserta_id?: BigIntNullableFilter<"user"> | bigint | number | null
    otp?: StringNullableFilter<"user"> | string | null
    otp_expired?: DateTimeNullableFilter<"user"> | Date | string | null
    complete_onboarding?: BoolNullableFilter<"user"> | boolean | null
    token?: StringNullableFilter<"user"> | string | null
    refresh_token?: StringNullableFilter<"user"> | string | null
    verified?: IntNullableFilter<"user"> | number | null
    status?: IntFilter<"user"> | number
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    created_by?: StringFilter<"user"> | string
    updated_by?: StringNullableFilter<"user"> | string | null
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
    admin?: XOR<AdminNullableScalarRelationFilter, adminWhereInput> | null
    peserta?: XOR<PesertaNullableScalarRelationFilter, pesertaWhereInput> | null
    user_role?: XOR<User_roleNullableScalarRelationFilter, user_roleWhereInput> | null
    user_token?: User_tokenListRelationFilter
  }, "id" | "uuid" | "username" | "admin_id" | "user_role_id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    admin_id?: SortOrderInput | SortOrder
    peserta_id?: SortOrderInput | SortOrder
    user_role_id?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    otp_expired?: SortOrderInput | SortOrder
    complete_onboarding?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"user"> | bigint | number
    uuid?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    admin_id?: IntNullableWithAggregatesFilter<"user"> | number | null
    peserta_id?: BigIntNullableWithAggregatesFilter<"user"> | bigint | number | null
    user_role_id?: IntNullableWithAggregatesFilter<"user"> | number | null
    otp?: StringNullableWithAggregatesFilter<"user"> | string | null
    otp_expired?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    complete_onboarding?: BoolNullableWithAggregatesFilter<"user"> | boolean | null
    token?: StringNullableWithAggregatesFilter<"user"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"user"> | string | null
    verified?: IntNullableWithAggregatesFilter<"user"> | number | null
    status?: IntWithAggregatesFilter<"user"> | number
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    created_by?: StringWithAggregatesFilter<"user"> | string
    updated_by?: StringNullableWithAggregatesFilter<"user"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type user_permissionWhereInput = {
    AND?: user_permissionWhereInput | user_permissionWhereInput[]
    OR?: user_permissionWhereInput[]
    NOT?: user_permissionWhereInput | user_permissionWhereInput[]
    id?: IntFilter<"user_permission"> | number
    uuid?: StringNullableFilter<"user_permission"> | string | null
    name?: StringFilter<"user_permission"> | string
    description?: StringNullableFilter<"user_permission"> | string | null
    status?: IntFilter<"user_permission"> | number
    created_at?: DateTimeFilter<"user_permission"> | Date | string
    updated_at?: DateTimeNullableFilter<"user_permission"> | Date | string | null
    created_by?: StringFilter<"user_permission"> | string
    updated_by?: StringNullableFilter<"user_permission"> | string | null
    deleted_at?: DateTimeNullableFilter<"user_permission"> | Date | string | null
    user_role_permission?: User_role_permissionListRelationFilter
  }

  export type user_permissionOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user_role_permission?: user_role_permissionOrderByRelationAggregateInput
    _relevance?: user_permissionOrderByRelevanceInput
  }

  export type user_permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    name?: string
    AND?: user_permissionWhereInput | user_permissionWhereInput[]
    OR?: user_permissionWhereInput[]
    NOT?: user_permissionWhereInput | user_permissionWhereInput[]
    description?: StringNullableFilter<"user_permission"> | string | null
    status?: IntFilter<"user_permission"> | number
    created_at?: DateTimeFilter<"user_permission"> | Date | string
    updated_at?: DateTimeNullableFilter<"user_permission"> | Date | string | null
    created_by?: StringFilter<"user_permission"> | string
    updated_by?: StringNullableFilter<"user_permission"> | string | null
    deleted_at?: DateTimeNullableFilter<"user_permission"> | Date | string | null
    user_role_permission?: User_role_permissionListRelationFilter
  }, "id" | "uuid" | "name">

  export type user_permissionOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: user_permissionCountOrderByAggregateInput
    _avg?: user_permissionAvgOrderByAggregateInput
    _max?: user_permissionMaxOrderByAggregateInput
    _min?: user_permissionMinOrderByAggregateInput
    _sum?: user_permissionSumOrderByAggregateInput
  }

  export type user_permissionScalarWhereWithAggregatesInput = {
    AND?: user_permissionScalarWhereWithAggregatesInput | user_permissionScalarWhereWithAggregatesInput[]
    OR?: user_permissionScalarWhereWithAggregatesInput[]
    NOT?: user_permissionScalarWhereWithAggregatesInput | user_permissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_permission"> | number
    uuid?: StringNullableWithAggregatesFilter<"user_permission"> | string | null
    name?: StringWithAggregatesFilter<"user_permission"> | string
    description?: StringNullableWithAggregatesFilter<"user_permission"> | string | null
    status?: IntWithAggregatesFilter<"user_permission"> | number
    created_at?: DateTimeWithAggregatesFilter<"user_permission"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_permission"> | Date | string | null
    created_by?: StringWithAggregatesFilter<"user_permission"> | string
    updated_by?: StringNullableWithAggregatesFilter<"user_permission"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"user_permission"> | Date | string | null
  }

  export type user_roleWhereInput = {
    AND?: user_roleWhereInput | user_roleWhereInput[]
    OR?: user_roleWhereInput[]
    NOT?: user_roleWhereInput | user_roleWhereInput[]
    id?: IntFilter<"user_role"> | number
    uuid?: StringNullableFilter<"user_role"> | string | null
    name?: StringFilter<"user_role"> | string
    created_at?: DateTimeFilter<"user_role"> | Date | string
    updated_at?: DateTimeNullableFilter<"user_role"> | Date | string | null
    created_by?: StringFilter<"user_role"> | string
    updated_by?: StringNullableFilter<"user_role"> | string | null
    deleted_at?: DateTimeNullableFilter<"user_role"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    user_role_permission?: User_role_permissionListRelationFilter
  }

  export type user_roleOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    user_role_permission?: user_role_permissionOrderByRelationAggregateInput
    _relevance?: user_roleOrderByRelevanceInput
  }

  export type user_roleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    name?: string
    AND?: user_roleWhereInput | user_roleWhereInput[]
    OR?: user_roleWhereInput[]
    NOT?: user_roleWhereInput | user_roleWhereInput[]
    created_at?: DateTimeFilter<"user_role"> | Date | string
    updated_at?: DateTimeNullableFilter<"user_role"> | Date | string | null
    created_by?: StringFilter<"user_role"> | string
    updated_by?: StringNullableFilter<"user_role"> | string | null
    deleted_at?: DateTimeNullableFilter<"user_role"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    user_role_permission?: User_role_permissionListRelationFilter
  }, "id" | "uuid" | "name">

  export type user_roleOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: user_roleCountOrderByAggregateInput
    _avg?: user_roleAvgOrderByAggregateInput
    _max?: user_roleMaxOrderByAggregateInput
    _min?: user_roleMinOrderByAggregateInput
    _sum?: user_roleSumOrderByAggregateInput
  }

  export type user_roleScalarWhereWithAggregatesInput = {
    AND?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[]
    OR?: user_roleScalarWhereWithAggregatesInput[]
    NOT?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_role"> | number
    uuid?: StringNullableWithAggregatesFilter<"user_role"> | string | null
    name?: StringWithAggregatesFilter<"user_role"> | string
    created_at?: DateTimeWithAggregatesFilter<"user_role"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_role"> | Date | string | null
    created_by?: StringWithAggregatesFilter<"user_role"> | string
    updated_by?: StringNullableWithAggregatesFilter<"user_role"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"user_role"> | Date | string | null
  }

  export type user_role_permissionWhereInput = {
    AND?: user_role_permissionWhereInput | user_role_permissionWhereInput[]
    OR?: user_role_permissionWhereInput[]
    NOT?: user_role_permissionWhereInput | user_role_permissionWhereInput[]
    id?: IntFilter<"user_role_permission"> | number
    uuid?: StringNullableFilter<"user_role_permission"> | string | null
    user_role_id?: IntFilter<"user_role_permission"> | number
    user_permission_id?: IntFilter<"user_role_permission"> | number
    status?: IntFilter<"user_role_permission"> | number
    created_at?: DateTimeFilter<"user_role_permission"> | Date | string
    created_by?: StringFilter<"user_role_permission"> | string
    updated_at?: DateTimeNullableFilter<"user_role_permission"> | Date | string | null
    updated_by?: StringNullableFilter<"user_role_permission"> | string | null
    deleted_at?: DateTimeNullableFilter<"user_role_permission"> | Date | string | null
    user_permission?: XOR<User_permissionScalarRelationFilter, user_permissionWhereInput>
    user_role?: XOR<User_roleScalarRelationFilter, user_roleWhereInput>
  }

  export type user_role_permissionOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    user_role_id?: SortOrder
    user_permission_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user_permission?: user_permissionOrderByWithRelationInput
    user_role?: user_roleOrderByWithRelationInput
    _relevance?: user_role_permissionOrderByRelevanceInput
  }

  export type user_role_permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: user_role_permissionWhereInput | user_role_permissionWhereInput[]
    OR?: user_role_permissionWhereInput[]
    NOT?: user_role_permissionWhereInput | user_role_permissionWhereInput[]
    user_role_id?: IntFilter<"user_role_permission"> | number
    user_permission_id?: IntFilter<"user_role_permission"> | number
    status?: IntFilter<"user_role_permission"> | number
    created_at?: DateTimeFilter<"user_role_permission"> | Date | string
    created_by?: StringFilter<"user_role_permission"> | string
    updated_at?: DateTimeNullableFilter<"user_role_permission"> | Date | string | null
    updated_by?: StringNullableFilter<"user_role_permission"> | string | null
    deleted_at?: DateTimeNullableFilter<"user_role_permission"> | Date | string | null
    user_permission?: XOR<User_permissionScalarRelationFilter, user_permissionWhereInput>
    user_role?: XOR<User_roleScalarRelationFilter, user_roleWhereInput>
  }, "id" | "uuid">

  export type user_role_permissionOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrderInput | SortOrder
    user_role_id?: SortOrder
    user_permission_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: user_role_permissionCountOrderByAggregateInput
    _avg?: user_role_permissionAvgOrderByAggregateInput
    _max?: user_role_permissionMaxOrderByAggregateInput
    _min?: user_role_permissionMinOrderByAggregateInput
    _sum?: user_role_permissionSumOrderByAggregateInput
  }

  export type user_role_permissionScalarWhereWithAggregatesInput = {
    AND?: user_role_permissionScalarWhereWithAggregatesInput | user_role_permissionScalarWhereWithAggregatesInput[]
    OR?: user_role_permissionScalarWhereWithAggregatesInput[]
    NOT?: user_role_permissionScalarWhereWithAggregatesInput | user_role_permissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_role_permission"> | number
    uuid?: StringNullableWithAggregatesFilter<"user_role_permission"> | string | null
    user_role_id?: IntWithAggregatesFilter<"user_role_permission"> | number
    user_permission_id?: IntWithAggregatesFilter<"user_role_permission"> | number
    status?: IntWithAggregatesFilter<"user_role_permission"> | number
    created_at?: DateTimeWithAggregatesFilter<"user_role_permission"> | Date | string
    created_by?: StringWithAggregatesFilter<"user_role_permission"> | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_role_permission"> | Date | string | null
    updated_by?: StringNullableWithAggregatesFilter<"user_role_permission"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"user_role_permission"> | Date | string | null
  }

  export type user_tokenWhereInput = {
    AND?: user_tokenWhereInput | user_tokenWhereInput[]
    OR?: user_tokenWhereInput[]
    NOT?: user_tokenWhereInput | user_tokenWhereInput[]
    id?: IntFilter<"user_token"> | number
    uuid?: StringFilter<"user_token"> | string
    user_id?: BigIntNullableFilter<"user_token"> | bigint | number | null
    name?: StringNullableFilter<"user_token"> | string | null
    secret?: StringFilter<"user_token"> | string
    private_key?: StringFilter<"user_token"> | string
    public_key?: StringFilter<"user_token"> | string
    status?: IntFilter<"user_token"> | number
    description?: StringNullableFilter<"user_token"> | string | null
    created_at?: DateTimeFilter<"user_token"> | Date | string
    updated_at?: DateTimeNullableFilter<"user_token"> | Date | string | null
    created_by?: StringNullableFilter<"user_token"> | string | null
    updated_by?: StringNullableFilter<"user_token"> | string | null
    deleted_at?: DateTimeNullableFilter<"user_token"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type user_tokenOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    secret?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: user_tokenOrderByRelevanceInput
  }

  export type user_tokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: user_tokenWhereInput | user_tokenWhereInput[]
    OR?: user_tokenWhereInput[]
    NOT?: user_tokenWhereInput | user_tokenWhereInput[]
    user_id?: BigIntNullableFilter<"user_token"> | bigint | number | null
    name?: StringNullableFilter<"user_token"> | string | null
    secret?: StringFilter<"user_token"> | string
    private_key?: StringFilter<"user_token"> | string
    public_key?: StringFilter<"user_token"> | string
    status?: IntFilter<"user_token"> | number
    description?: StringNullableFilter<"user_token"> | string | null
    created_at?: DateTimeFilter<"user_token"> | Date | string
    updated_at?: DateTimeNullableFilter<"user_token"> | Date | string | null
    created_by?: StringNullableFilter<"user_token"> | string | null
    updated_by?: StringNullableFilter<"user_token"> | string | null
    deleted_at?: DateTimeNullableFilter<"user_token"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "id" | "uuid">

  export type user_tokenOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    secret?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: user_tokenCountOrderByAggregateInput
    _avg?: user_tokenAvgOrderByAggregateInput
    _max?: user_tokenMaxOrderByAggregateInput
    _min?: user_tokenMinOrderByAggregateInput
    _sum?: user_tokenSumOrderByAggregateInput
  }

  export type user_tokenScalarWhereWithAggregatesInput = {
    AND?: user_tokenScalarWhereWithAggregatesInput | user_tokenScalarWhereWithAggregatesInput[]
    OR?: user_tokenScalarWhereWithAggregatesInput[]
    NOT?: user_tokenScalarWhereWithAggregatesInput | user_tokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_token"> | number
    uuid?: StringWithAggregatesFilter<"user_token"> | string
    user_id?: BigIntNullableWithAggregatesFilter<"user_token"> | bigint | number | null
    name?: StringNullableWithAggregatesFilter<"user_token"> | string | null
    secret?: StringWithAggregatesFilter<"user_token"> | string
    private_key?: StringWithAggregatesFilter<"user_token"> | string
    public_key?: StringWithAggregatesFilter<"user_token"> | string
    status?: IntWithAggregatesFilter<"user_token"> | number
    description?: StringNullableWithAggregatesFilter<"user_token"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"user_token"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_token"> | Date | string | null
    created_by?: StringNullableWithAggregatesFilter<"user_token"> | string | null
    updated_by?: StringNullableWithAggregatesFilter<"user_token"> | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"user_token"> | Date | string | null
  }

  export type adminCreateInput = {
    uuid?: string | null
    name: string
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
    user?: userCreateNestedOneWithoutAdminInput
  }

  export type adminUncheckedCreateInput = {
    id?: number
    uuid?: string | null
    name: string
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
    user?: userUncheckedCreateNestedOneWithoutAdminInput
  }

  export type adminUpdateInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUncheckedUpdateOneWithoutAdminNestedInput
  }

  export type adminCreateManyInput = {
    id?: number
    uuid?: string | null
    name: string
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type adminUpdateManyMutationInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type fileCreateInput = {
    id?: bigint | number
    uuid?: string
    path: string
    name: string
    size?: number
    type: string
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by: string
  }

  export type fileUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    path: string
    name: string
    size?: number
    type: string
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by: string
  }

  export type fileUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type fileUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type fileCreateManyInput = {
    id?: bigint | number
    uuid?: string
    path: string
    name: string
    size?: number
    type: string
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by: string
  }

  export type fileUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type fileUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type level_pendidikanCreateInput = {
    uuid: string
    nama: string
    keterangan?: string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type level_pendidikanUncheckedCreateInput = {
    id?: number
    uuid: string
    nama: string
    keterangan?: string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type level_pendidikanUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type level_pendidikanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type level_pendidikanCreateManyInput = {
    id?: number
    uuid: string
    nama: string
    keterangan?: string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type level_pendidikanUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type level_pendidikanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pesertaCreateInput = {
    id?: bigint | number
    uuid: string
    nama_lengkap: string
    kewarganegaraan?: $Enums.peserta_kewarganegaraan
    nik: string
    nik_hash: string
    tanggal_lahir: Date | string
    jenis_kelamin?: $Enums.peserta_jenis_kelamin
    no_hp?: string | null
    email: string
    tempat_lahir?: string | null
    level_pendidikan_id?: number | null
    provinsi_id?: string | null
    alamat?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
    user?: userCreateNestedManyWithoutPesertaInput
  }

  export type pesertaUncheckedCreateInput = {
    id?: bigint | number
    uuid: string
    nama_lengkap: string
    kewarganegaraan?: $Enums.peserta_kewarganegaraan
    nik: string
    nik_hash: string
    tanggal_lahir: Date | string
    jenis_kelamin?: $Enums.peserta_jenis_kelamin
    no_hp?: string | null
    email: string
    tempat_lahir?: string | null
    level_pendidikan_id?: number | null
    provinsi_id?: string | null
    alamat?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
    user?: userUncheckedCreateNestedManyWithoutPesertaInput
  }

  export type pesertaUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    kewarganegaraan?: Enumpeserta_kewarganegaraanFieldUpdateOperationsInput | $Enums.peserta_kewarganegaraan
    nik?: StringFieldUpdateOperationsInput | string
    nik_hash?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_kelamin?: Enumpeserta_jenis_kelaminFieldUpdateOperationsInput | $Enums.peserta_jenis_kelamin
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    level_pendidikan_id?: NullableIntFieldUpdateOperationsInput | number | null
    provinsi_id?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateManyWithoutPesertaNestedInput
  }

  export type pesertaUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    kewarganegaraan?: Enumpeserta_kewarganegaraanFieldUpdateOperationsInput | $Enums.peserta_kewarganegaraan
    nik?: StringFieldUpdateOperationsInput | string
    nik_hash?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_kelamin?: Enumpeserta_jenis_kelaminFieldUpdateOperationsInput | $Enums.peserta_jenis_kelamin
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    level_pendidikan_id?: NullableIntFieldUpdateOperationsInput | number | null
    provinsi_id?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUncheckedUpdateManyWithoutPesertaNestedInput
  }

  export type pesertaCreateManyInput = {
    id?: bigint | number
    uuid: string
    nama_lengkap: string
    kewarganegaraan?: $Enums.peserta_kewarganegaraan
    nik: string
    nik_hash: string
    tanggal_lahir: Date | string
    jenis_kelamin?: $Enums.peserta_jenis_kelamin
    no_hp?: string | null
    email: string
    tempat_lahir?: string | null
    level_pendidikan_id?: number | null
    provinsi_id?: string | null
    alamat?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type pesertaUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    kewarganegaraan?: Enumpeserta_kewarganegaraanFieldUpdateOperationsInput | $Enums.peserta_kewarganegaraan
    nik?: StringFieldUpdateOperationsInput | string
    nik_hash?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_kelamin?: Enumpeserta_jenis_kelaminFieldUpdateOperationsInput | $Enums.peserta_jenis_kelamin
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    level_pendidikan_id?: NullableIntFieldUpdateOperationsInput | number | null
    provinsi_id?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pesertaUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    kewarganegaraan?: Enumpeserta_kewarganegaraanFieldUpdateOperationsInput | $Enums.peserta_kewarganegaraan
    nik?: StringFieldUpdateOperationsInput | string
    nik_hash?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_kelamin?: Enumpeserta_jenis_kelaminFieldUpdateOperationsInput | $Enums.peserta_jenis_kelamin
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    level_pendidikan_id?: NullableIntFieldUpdateOperationsInput | number | null
    provinsi_id?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_kecamatanCreateInput = {
    id: string
    uuid?: string
    nama: string
    latitude?: number
    longitude?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type t_kecamatanUncheckedCreateInput = {
    id: string
    uuid?: string
    nama: string
    latitude?: number
    longitude?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type t_kecamatanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_kecamatanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_kecamatanCreateManyInput = {
    id: string
    uuid?: string
    nama: string
    latitude?: number
    longitude?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type t_kecamatanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_kecamatanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_kelurahanCreateInput = {
    id: string
    uuid?: string
    nama: string
    latitude?: number
    longitude?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type t_kelurahanUncheckedCreateInput = {
    id: string
    uuid?: string
    nama: string
    latitude?: number
    longitude?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type t_kelurahanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_kelurahanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_kelurahanCreateManyInput = {
    id: string
    uuid?: string
    nama: string
    latitude?: number
    longitude?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type t_kelurahanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_kelurahanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_kotaCreateInput = {
    id: string
    uuid?: string
    nama: string
    latitude?: number
    longitude?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type t_kotaUncheckedCreateInput = {
    id: string
    uuid?: string
    nama: string
    latitude?: number
    longitude?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type t_kotaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_kotaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_kotaCreateManyInput = {
    id: string
    uuid?: string
    nama: string
    latitude?: number
    longitude?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type t_kotaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_kotaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_provinsiCreateInput = {
    id: string
    uuid?: string
    nama: string
    latitude?: number
    longitude?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type t_provinsiUncheckedCreateInput = {
    id: string
    uuid?: string
    nama: string
    latitude?: number
    longitude?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type t_provinsiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_provinsiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_provinsiCreateManyInput = {
    id: string
    uuid?: string
    nama: string
    latitude?: number
    longitude?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type t_provinsiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type t_provinsiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    id?: bigint | number
    uuid?: string
    username: string
    otp?: string | null
    otp_expired?: Date | string | null
    complete_onboarding?: boolean | null
    token?: string | null
    refresh_token?: string | null
    verified?: number | null
    status: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    admin?: adminCreateNestedOneWithoutUserInput
    peserta?: pesertaCreateNestedOneWithoutUserInput
    user_role?: user_roleCreateNestedOneWithoutUserInput
    user_token?: user_tokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string
    username: string
    admin_id?: number | null
    peserta_id?: bigint | number | null
    user_role_id?: number | null
    otp?: string | null
    otp_expired?: Date | string | null
    complete_onboarding?: boolean | null
    token?: string | null
    refresh_token?: string | null
    verified?: number | null
    status: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    user_token?: user_tokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: adminUpdateOneWithoutUserNestedInput
    peserta?: pesertaUpdateOneWithoutUserNestedInput
    user_role?: user_roleUpdateOneWithoutUserNestedInput
    user_token?: user_tokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    peserta_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_role_id?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_token?: user_tokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: bigint | number
    uuid?: string
    username: string
    admin_id?: number | null
    peserta_id?: bigint | number | null
    user_role_id?: number | null
    otp?: string | null
    otp_expired?: Date | string | null
    complete_onboarding?: boolean | null
    token?: string | null
    refresh_token?: string | null
    verified?: number | null
    status: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    peserta_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_role_id?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_permissionCreateInput = {
    uuid?: string | null
    name: string
    description?: string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    user_role_permission?: user_role_permissionCreateNestedManyWithoutUser_permissionInput
  }

  export type user_permissionUncheckedCreateInput = {
    id?: number
    uuid?: string | null
    name: string
    description?: string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    user_role_permission?: user_role_permissionUncheckedCreateNestedManyWithoutUser_permissionInput
  }

  export type user_permissionUpdateInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_role_permission?: user_role_permissionUpdateManyWithoutUser_permissionNestedInput
  }

  export type user_permissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_role_permission?: user_role_permissionUncheckedUpdateManyWithoutUser_permissionNestedInput
  }

  export type user_permissionCreateManyInput = {
    id?: number
    uuid?: string | null
    name: string
    description?: string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_permissionUpdateManyMutationInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_permissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_roleCreateInput = {
    uuid?: string | null
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    user?: userCreateNestedOneWithoutUser_roleInput
    user_role_permission?: user_role_permissionCreateNestedManyWithoutUser_roleInput
  }

  export type user_roleUncheckedCreateInput = {
    id?: number
    uuid?: string | null
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    user?: userUncheckedCreateNestedOneWithoutUser_roleInput
    user_role_permission?: user_role_permissionUncheckedCreateNestedManyWithoutUser_roleInput
  }

  export type user_roleUpdateInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutUser_roleNestedInput
    user_role_permission?: user_role_permissionUpdateManyWithoutUser_roleNestedInput
  }

  export type user_roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUncheckedUpdateOneWithoutUser_roleNestedInput
    user_role_permission?: user_role_permissionUncheckedUpdateManyWithoutUser_roleNestedInput
  }

  export type user_roleCreateManyInput = {
    id?: number
    uuid?: string | null
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_roleUpdateManyMutationInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_role_permissionCreateInput = {
    uuid?: string | null
    status?: number
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
    user_permission: user_permissionCreateNestedOneWithoutUser_role_permissionInput
    user_role: user_roleCreateNestedOneWithoutUser_role_permissionInput
  }

  export type user_role_permissionUncheckedCreateInput = {
    id?: number
    uuid?: string | null
    user_role_id: number
    user_permission_id: number
    status?: number
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_role_permissionUpdateInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_permission?: user_permissionUpdateOneRequiredWithoutUser_role_permissionNestedInput
    user_role?: user_roleUpdateOneRequiredWithoutUser_role_permissionNestedInput
  }

  export type user_role_permissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    user_role_id?: IntFieldUpdateOperationsInput | number
    user_permission_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_role_permissionCreateManyInput = {
    id?: number
    uuid?: string | null
    user_role_id: number
    user_permission_id: number
    status?: number
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_role_permissionUpdateManyMutationInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_role_permissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    user_role_id?: IntFieldUpdateOperationsInput | number
    user_permission_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_tokenCreateInput = {
    uuid?: string
    name?: string | null
    secret: string
    private_key: string
    public_key: string
    status?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
    user?: userCreateNestedOneWithoutUser_tokenInput
  }

  export type user_tokenUncheckedCreateInput = {
    id?: number
    uuid?: string
    user_id?: bigint | number | null
    name?: string | null
    secret: string
    private_key: string
    public_key: string
    status?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_tokenUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutUser_tokenNestedInput
  }

  export type user_tokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_tokenCreateManyInput = {
    id?: number
    uuid?: string
    user_id?: bigint | number | null
    name?: string | null
    secret: string
    private_key: string
    public_key: string
    status?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_tokenUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_tokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type fileOrderByRelevanceInput = {
    fields: fileOrderByRelevanceFieldEnum | fileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type fileCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    path?: SortOrder
    name?: SortOrder
    size?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type fileAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type fileMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    path?: SortOrder
    name?: SortOrder
    size?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type fileMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    path?: SortOrder
    name?: SortOrder
    size?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type fileSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
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

  export type level_pendidikanOrderByRelevanceInput = {
    fields: level_pendidikanOrderByRelevanceFieldEnum | level_pendidikanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type level_pendidikanCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    keterangan?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type level_pendidikanAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type level_pendidikanMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    keterangan?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type level_pendidikanMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    keterangan?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type level_pendidikanSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type Enumpeserta_kewarganegaraanFilter<$PrismaModel = never> = {
    equals?: $Enums.peserta_kewarganegaraan | Enumpeserta_kewarganegaraanFieldRefInput<$PrismaModel>
    in?: $Enums.peserta_kewarganegaraan[]
    notIn?: $Enums.peserta_kewarganegaraan[]
    not?: NestedEnumpeserta_kewarganegaraanFilter<$PrismaModel> | $Enums.peserta_kewarganegaraan
  }

  export type Enumpeserta_jenis_kelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.peserta_jenis_kelamin | Enumpeserta_jenis_kelaminFieldRefInput<$PrismaModel>
    in?: $Enums.peserta_jenis_kelamin[]
    notIn?: $Enums.peserta_jenis_kelamin[]
    not?: NestedEnumpeserta_jenis_kelaminFilter<$PrismaModel> | $Enums.peserta_jenis_kelamin
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pesertaOrderByRelevanceInput = {
    fields: pesertaOrderByRelevanceFieldEnum | pesertaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pesertaCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama_lengkap?: SortOrder
    kewarganegaraan?: SortOrder
    nik?: SortOrder
    nik_hash?: SortOrder
    tanggal_lahir?: SortOrder
    jenis_kelamin?: SortOrder
    no_hp?: SortOrder
    email?: SortOrder
    tempat_lahir?: SortOrder
    level_pendidikan_id?: SortOrder
    provinsi_id?: SortOrder
    alamat?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type pesertaAvgOrderByAggregateInput = {
    id?: SortOrder
    level_pendidikan_id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    status?: SortOrder
  }

  export type pesertaMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama_lengkap?: SortOrder
    kewarganegaraan?: SortOrder
    nik?: SortOrder
    nik_hash?: SortOrder
    tanggal_lahir?: SortOrder
    jenis_kelamin?: SortOrder
    no_hp?: SortOrder
    email?: SortOrder
    tempat_lahir?: SortOrder
    level_pendidikan_id?: SortOrder
    provinsi_id?: SortOrder
    alamat?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type pesertaMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama_lengkap?: SortOrder
    kewarganegaraan?: SortOrder
    nik?: SortOrder
    nik_hash?: SortOrder
    tanggal_lahir?: SortOrder
    jenis_kelamin?: SortOrder
    no_hp?: SortOrder
    email?: SortOrder
    tempat_lahir?: SortOrder
    level_pendidikan_id?: SortOrder
    provinsi_id?: SortOrder
    alamat?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type pesertaSumOrderByAggregateInput = {
    id?: SortOrder
    level_pendidikan_id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    status?: SortOrder
  }

  export type Enumpeserta_kewarganegaraanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.peserta_kewarganegaraan | Enumpeserta_kewarganegaraanFieldRefInput<$PrismaModel>
    in?: $Enums.peserta_kewarganegaraan[]
    notIn?: $Enums.peserta_kewarganegaraan[]
    not?: NestedEnumpeserta_kewarganegaraanWithAggregatesFilter<$PrismaModel> | $Enums.peserta_kewarganegaraan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpeserta_kewarganegaraanFilter<$PrismaModel>
    _max?: NestedEnumpeserta_kewarganegaraanFilter<$PrismaModel>
  }

  export type Enumpeserta_jenis_kelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.peserta_jenis_kelamin | Enumpeserta_jenis_kelaminFieldRefInput<$PrismaModel>
    in?: $Enums.peserta_jenis_kelamin[]
    notIn?: $Enums.peserta_jenis_kelamin[]
    not?: NestedEnumpeserta_jenis_kelaminWithAggregatesFilter<$PrismaModel> | $Enums.peserta_jenis_kelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpeserta_jenis_kelaminFilter<$PrismaModel>
    _max?: NestedEnumpeserta_jenis_kelaminFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type t_kecamatanOrderByRelevanceInput = {
    fields: t_kecamatanOrderByRelevanceFieldEnum | t_kecamatanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_kecamatanCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type t_kecamatanAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type t_kecamatanMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type t_kecamatanMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type t_kecamatanSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type t_kelurahanOrderByRelevanceInput = {
    fields: t_kelurahanOrderByRelevanceFieldEnum | t_kelurahanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_kelurahanCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type t_kelurahanAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type t_kelurahanMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type t_kelurahanMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type t_kelurahanSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type t_kotaOrderByRelevanceInput = {
    fields: t_kotaOrderByRelevanceFieldEnum | t_kotaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_kotaCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type t_kotaAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type t_kotaMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type t_kotaMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type t_kotaSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type t_provinsiOrderByRelevanceInput = {
    fields: t_provinsiOrderByRelevanceFieldEnum | t_provinsiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type t_provinsiCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type t_provinsiAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type t_provinsiMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type t_provinsiMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type t_provinsiSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
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

  export type AdminNullableScalarRelationFilter = {
    is?: adminWhereInput | null
    isNot?: adminWhereInput | null
  }

  export type PesertaNullableScalarRelationFilter = {
    is?: pesertaWhereInput | null
    isNot?: pesertaWhereInput | null
  }

  export type User_roleNullableScalarRelationFilter = {
    is?: user_roleWhereInput | null
    isNot?: user_roleWhereInput | null
  }

  export type User_tokenListRelationFilter = {
    every?: user_tokenWhereInput
    some?: user_tokenWhereInput
    none?: user_tokenWhereInput
  }

  export type user_tokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    admin_id?: SortOrder
    peserta_id?: SortOrder
    user_role_id?: SortOrder
    otp?: SortOrder
    otp_expired?: SortOrder
    complete_onboarding?: SortOrder
    token?: SortOrder
    refresh_token?: SortOrder
    verified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    peserta_id?: SortOrder
    user_role_id?: SortOrder
    verified?: SortOrder
    status?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    admin_id?: SortOrder
    peserta_id?: SortOrder
    user_role_id?: SortOrder
    otp?: SortOrder
    otp_expired?: SortOrder
    complete_onboarding?: SortOrder
    token?: SortOrder
    refresh_token?: SortOrder
    verified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    admin_id?: SortOrder
    peserta_id?: SortOrder
    user_role_id?: SortOrder
    otp?: SortOrder
    otp_expired?: SortOrder
    complete_onboarding?: SortOrder
    token?: SortOrder
    refresh_token?: SortOrder
    verified?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    peserta_id?: SortOrder
    user_role_id?: SortOrder
    verified?: SortOrder
    status?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
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

  export type User_role_permissionListRelationFilter = {
    every?: user_role_permissionWhereInput
    some?: user_role_permissionWhereInput
    none?: user_role_permissionWhereInput
  }

  export type user_role_permissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_permissionOrderByRelevanceInput = {
    fields: user_permissionOrderByRelevanceFieldEnum | user_permissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_permissionCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_permissionAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type user_permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_permissionMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_permissionSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
  }

  export type user_roleOrderByRelevanceInput = {
    fields: user_roleOrderByRelevanceFieldEnum | user_roleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_roleCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_roleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type user_roleMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_roleMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_roleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type User_permissionScalarRelationFilter = {
    is?: user_permissionWhereInput
    isNot?: user_permissionWhereInput
  }

  export type User_roleScalarRelationFilter = {
    is?: user_roleWhereInput
    isNot?: user_roleWhereInput
  }

  export type user_role_permissionOrderByRelevanceInput = {
    fields: user_role_permissionOrderByRelevanceFieldEnum | user_role_permissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_role_permissionCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_role_id?: SortOrder
    user_permission_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_role_permissionAvgOrderByAggregateInput = {
    id?: SortOrder
    user_role_id?: SortOrder
    user_permission_id?: SortOrder
    status?: SortOrder
  }

  export type user_role_permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_role_id?: SortOrder
    user_permission_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_role_permissionMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_role_id?: SortOrder
    user_permission_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    created_by?: SortOrder
    updated_at?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_role_permissionSumOrderByAggregateInput = {
    id?: SortOrder
    user_role_id?: SortOrder
    user_permission_id?: SortOrder
    status?: SortOrder
  }

  export type user_tokenOrderByRelevanceInput = {
    fields: user_tokenOrderByRelevanceFieldEnum | user_tokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_tokenCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    secret?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    status?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_tokenAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
  }

  export type user_tokenMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    secret?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    status?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_tokenMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    secret?: SortOrder
    private_key?: SortOrder
    public_key?: SortOrder
    status?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
    deleted_at?: SortOrder
  }

  export type user_tokenSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
  }

  export type userCreateNestedOneWithoutAdminInput = {
    create?: XOR<userCreateWithoutAdminInput, userUncheckedCreateWithoutAdminInput>
    connectOrCreate?: userCreateOrConnectWithoutAdminInput
    connect?: userWhereUniqueInput
  }

  export type userUncheckedCreateNestedOneWithoutAdminInput = {
    create?: XOR<userCreateWithoutAdminInput, userUncheckedCreateWithoutAdminInput>
    connectOrCreate?: userCreateOrConnectWithoutAdminInput
    connect?: userWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneWithoutAdminNestedInput = {
    create?: XOR<userCreateWithoutAdminInput, userUncheckedCreateWithoutAdminInput>
    connectOrCreate?: userCreateOrConnectWithoutAdminInput
    upsert?: userUpsertWithoutAdminInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAdminInput, userUpdateWithoutAdminInput>, userUncheckedUpdateWithoutAdminInput>
  }

  export type userUncheckedUpdateOneWithoutAdminNestedInput = {
    create?: XOR<userCreateWithoutAdminInput, userUncheckedCreateWithoutAdminInput>
    connectOrCreate?: userCreateOrConnectWithoutAdminInput
    upsert?: userUpsertWithoutAdminInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAdminInput, userUpdateWithoutAdminInput>, userUncheckedUpdateWithoutAdminInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type userCreateNestedManyWithoutPesertaInput = {
    create?: XOR<userCreateWithoutPesertaInput, userUncheckedCreateWithoutPesertaInput> | userCreateWithoutPesertaInput[] | userUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: userCreateOrConnectWithoutPesertaInput | userCreateOrConnectWithoutPesertaInput[]
    createMany?: userCreateManyPesertaInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutPesertaInput = {
    create?: XOR<userCreateWithoutPesertaInput, userUncheckedCreateWithoutPesertaInput> | userCreateWithoutPesertaInput[] | userUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: userCreateOrConnectWithoutPesertaInput | userCreateOrConnectWithoutPesertaInput[]
    createMany?: userCreateManyPesertaInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type Enumpeserta_kewarganegaraanFieldUpdateOperationsInput = {
    set?: $Enums.peserta_kewarganegaraan
  }

  export type Enumpeserta_jenis_kelaminFieldUpdateOperationsInput = {
    set?: $Enums.peserta_jenis_kelamin
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type userUpdateManyWithoutPesertaNestedInput = {
    create?: XOR<userCreateWithoutPesertaInput, userUncheckedCreateWithoutPesertaInput> | userCreateWithoutPesertaInput[] | userUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: userCreateOrConnectWithoutPesertaInput | userCreateOrConnectWithoutPesertaInput[]
    upsert?: userUpsertWithWhereUniqueWithoutPesertaInput | userUpsertWithWhereUniqueWithoutPesertaInput[]
    createMany?: userCreateManyPesertaInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutPesertaInput | userUpdateWithWhereUniqueWithoutPesertaInput[]
    updateMany?: userUpdateManyWithWhereWithoutPesertaInput | userUpdateManyWithWhereWithoutPesertaInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutPesertaNestedInput = {
    create?: XOR<userCreateWithoutPesertaInput, userUncheckedCreateWithoutPesertaInput> | userCreateWithoutPesertaInput[] | userUncheckedCreateWithoutPesertaInput[]
    connectOrCreate?: userCreateOrConnectWithoutPesertaInput | userCreateOrConnectWithoutPesertaInput[]
    upsert?: userUpsertWithWhereUniqueWithoutPesertaInput | userUpsertWithWhereUniqueWithoutPesertaInput[]
    createMany?: userCreateManyPesertaInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutPesertaInput | userUpdateWithWhereUniqueWithoutPesertaInput[]
    updateMany?: userUpdateManyWithWhereWithoutPesertaInput | userUpdateManyWithWhereWithoutPesertaInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type adminCreateNestedOneWithoutUserInput = {
    create?: XOR<adminCreateWithoutUserInput, adminUncheckedCreateWithoutUserInput>
    connectOrCreate?: adminCreateOrConnectWithoutUserInput
    connect?: adminWhereUniqueInput
  }

  export type pesertaCreateNestedOneWithoutUserInput = {
    create?: XOR<pesertaCreateWithoutUserInput, pesertaUncheckedCreateWithoutUserInput>
    connectOrCreate?: pesertaCreateOrConnectWithoutUserInput
    connect?: pesertaWhereUniqueInput
  }

  export type user_roleCreateNestedOneWithoutUserInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput
    connect?: user_roleWhereUniqueInput
  }

  export type user_tokenCreateNestedManyWithoutUserInput = {
    create?: XOR<user_tokenCreateWithoutUserInput, user_tokenUncheckedCreateWithoutUserInput> | user_tokenCreateWithoutUserInput[] | user_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_tokenCreateOrConnectWithoutUserInput | user_tokenCreateOrConnectWithoutUserInput[]
    createMany?: user_tokenCreateManyUserInputEnvelope
    connect?: user_tokenWhereUniqueInput | user_tokenWhereUniqueInput[]
  }

  export type user_tokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_tokenCreateWithoutUserInput, user_tokenUncheckedCreateWithoutUserInput> | user_tokenCreateWithoutUserInput[] | user_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_tokenCreateOrConnectWithoutUserInput | user_tokenCreateOrConnectWithoutUserInput[]
    createMany?: user_tokenCreateManyUserInputEnvelope
    connect?: user_tokenWhereUniqueInput | user_tokenWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type adminUpdateOneWithoutUserNestedInput = {
    create?: XOR<adminCreateWithoutUserInput, adminUncheckedCreateWithoutUserInput>
    connectOrCreate?: adminCreateOrConnectWithoutUserInput
    upsert?: adminUpsertWithoutUserInput
    disconnect?: adminWhereInput | boolean
    delete?: adminWhereInput | boolean
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutUserInput, adminUpdateWithoutUserInput>, adminUncheckedUpdateWithoutUserInput>
  }

  export type pesertaUpdateOneWithoutUserNestedInput = {
    create?: XOR<pesertaCreateWithoutUserInput, pesertaUncheckedCreateWithoutUserInput>
    connectOrCreate?: pesertaCreateOrConnectWithoutUserInput
    upsert?: pesertaUpsertWithoutUserInput
    disconnect?: pesertaWhereInput | boolean
    delete?: pesertaWhereInput | boolean
    connect?: pesertaWhereUniqueInput
    update?: XOR<XOR<pesertaUpdateToOneWithWhereWithoutUserInput, pesertaUpdateWithoutUserInput>, pesertaUncheckedUpdateWithoutUserInput>
  }

  export type user_roleUpdateOneWithoutUserNestedInput = {
    create?: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput
    upsert?: user_roleUpsertWithoutUserInput
    disconnect?: user_roleWhereInput | boolean
    delete?: user_roleWhereInput | boolean
    connect?: user_roleWhereUniqueInput
    update?: XOR<XOR<user_roleUpdateToOneWithWhereWithoutUserInput, user_roleUpdateWithoutUserInput>, user_roleUncheckedUpdateWithoutUserInput>
  }

  export type user_tokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_tokenCreateWithoutUserInput, user_tokenUncheckedCreateWithoutUserInput> | user_tokenCreateWithoutUserInput[] | user_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_tokenCreateOrConnectWithoutUserInput | user_tokenCreateOrConnectWithoutUserInput[]
    upsert?: user_tokenUpsertWithWhereUniqueWithoutUserInput | user_tokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_tokenCreateManyUserInputEnvelope
    set?: user_tokenWhereUniqueInput | user_tokenWhereUniqueInput[]
    disconnect?: user_tokenWhereUniqueInput | user_tokenWhereUniqueInput[]
    delete?: user_tokenWhereUniqueInput | user_tokenWhereUniqueInput[]
    connect?: user_tokenWhereUniqueInput | user_tokenWhereUniqueInput[]
    update?: user_tokenUpdateWithWhereUniqueWithoutUserInput | user_tokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_tokenUpdateManyWithWhereWithoutUserInput | user_tokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_tokenScalarWhereInput | user_tokenScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type user_tokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_tokenCreateWithoutUserInput, user_tokenUncheckedCreateWithoutUserInput> | user_tokenCreateWithoutUserInput[] | user_tokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_tokenCreateOrConnectWithoutUserInput | user_tokenCreateOrConnectWithoutUserInput[]
    upsert?: user_tokenUpsertWithWhereUniqueWithoutUserInput | user_tokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_tokenCreateManyUserInputEnvelope
    set?: user_tokenWhereUniqueInput | user_tokenWhereUniqueInput[]
    disconnect?: user_tokenWhereUniqueInput | user_tokenWhereUniqueInput[]
    delete?: user_tokenWhereUniqueInput | user_tokenWhereUniqueInput[]
    connect?: user_tokenWhereUniqueInput | user_tokenWhereUniqueInput[]
    update?: user_tokenUpdateWithWhereUniqueWithoutUserInput | user_tokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_tokenUpdateManyWithWhereWithoutUserInput | user_tokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_tokenScalarWhereInput | user_tokenScalarWhereInput[]
  }

  export type user_role_permissionCreateNestedManyWithoutUser_permissionInput = {
    create?: XOR<user_role_permissionCreateWithoutUser_permissionInput, user_role_permissionUncheckedCreateWithoutUser_permissionInput> | user_role_permissionCreateWithoutUser_permissionInput[] | user_role_permissionUncheckedCreateWithoutUser_permissionInput[]
    connectOrCreate?: user_role_permissionCreateOrConnectWithoutUser_permissionInput | user_role_permissionCreateOrConnectWithoutUser_permissionInput[]
    createMany?: user_role_permissionCreateManyUser_permissionInputEnvelope
    connect?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
  }

  export type user_role_permissionUncheckedCreateNestedManyWithoutUser_permissionInput = {
    create?: XOR<user_role_permissionCreateWithoutUser_permissionInput, user_role_permissionUncheckedCreateWithoutUser_permissionInput> | user_role_permissionCreateWithoutUser_permissionInput[] | user_role_permissionUncheckedCreateWithoutUser_permissionInput[]
    connectOrCreate?: user_role_permissionCreateOrConnectWithoutUser_permissionInput | user_role_permissionCreateOrConnectWithoutUser_permissionInput[]
    createMany?: user_role_permissionCreateManyUser_permissionInputEnvelope
    connect?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
  }

  export type user_role_permissionUpdateManyWithoutUser_permissionNestedInput = {
    create?: XOR<user_role_permissionCreateWithoutUser_permissionInput, user_role_permissionUncheckedCreateWithoutUser_permissionInput> | user_role_permissionCreateWithoutUser_permissionInput[] | user_role_permissionUncheckedCreateWithoutUser_permissionInput[]
    connectOrCreate?: user_role_permissionCreateOrConnectWithoutUser_permissionInput | user_role_permissionCreateOrConnectWithoutUser_permissionInput[]
    upsert?: user_role_permissionUpsertWithWhereUniqueWithoutUser_permissionInput | user_role_permissionUpsertWithWhereUniqueWithoutUser_permissionInput[]
    createMany?: user_role_permissionCreateManyUser_permissionInputEnvelope
    set?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    disconnect?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    delete?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    connect?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    update?: user_role_permissionUpdateWithWhereUniqueWithoutUser_permissionInput | user_role_permissionUpdateWithWhereUniqueWithoutUser_permissionInput[]
    updateMany?: user_role_permissionUpdateManyWithWhereWithoutUser_permissionInput | user_role_permissionUpdateManyWithWhereWithoutUser_permissionInput[]
    deleteMany?: user_role_permissionScalarWhereInput | user_role_permissionScalarWhereInput[]
  }

  export type user_role_permissionUncheckedUpdateManyWithoutUser_permissionNestedInput = {
    create?: XOR<user_role_permissionCreateWithoutUser_permissionInput, user_role_permissionUncheckedCreateWithoutUser_permissionInput> | user_role_permissionCreateWithoutUser_permissionInput[] | user_role_permissionUncheckedCreateWithoutUser_permissionInput[]
    connectOrCreate?: user_role_permissionCreateOrConnectWithoutUser_permissionInput | user_role_permissionCreateOrConnectWithoutUser_permissionInput[]
    upsert?: user_role_permissionUpsertWithWhereUniqueWithoutUser_permissionInput | user_role_permissionUpsertWithWhereUniqueWithoutUser_permissionInput[]
    createMany?: user_role_permissionCreateManyUser_permissionInputEnvelope
    set?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    disconnect?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    delete?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    connect?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    update?: user_role_permissionUpdateWithWhereUniqueWithoutUser_permissionInput | user_role_permissionUpdateWithWhereUniqueWithoutUser_permissionInput[]
    updateMany?: user_role_permissionUpdateManyWithWhereWithoutUser_permissionInput | user_role_permissionUpdateManyWithWhereWithoutUser_permissionInput[]
    deleteMany?: user_role_permissionScalarWhereInput | user_role_permissionScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutUser_roleInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput
    connect?: userWhereUniqueInput
  }

  export type user_role_permissionCreateNestedManyWithoutUser_roleInput = {
    create?: XOR<user_role_permissionCreateWithoutUser_roleInput, user_role_permissionUncheckedCreateWithoutUser_roleInput> | user_role_permissionCreateWithoutUser_roleInput[] | user_role_permissionUncheckedCreateWithoutUser_roleInput[]
    connectOrCreate?: user_role_permissionCreateOrConnectWithoutUser_roleInput | user_role_permissionCreateOrConnectWithoutUser_roleInput[]
    createMany?: user_role_permissionCreateManyUser_roleInputEnvelope
    connect?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedOneWithoutUser_roleInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput
    connect?: userWhereUniqueInput
  }

  export type user_role_permissionUncheckedCreateNestedManyWithoutUser_roleInput = {
    create?: XOR<user_role_permissionCreateWithoutUser_roleInput, user_role_permissionUncheckedCreateWithoutUser_roleInput> | user_role_permissionCreateWithoutUser_roleInput[] | user_role_permissionUncheckedCreateWithoutUser_roleInput[]
    connectOrCreate?: user_role_permissionCreateOrConnectWithoutUser_roleInput | user_role_permissionCreateOrConnectWithoutUser_roleInput[]
    createMany?: user_role_permissionCreateManyUser_roleInputEnvelope
    connect?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
  }

  export type userUpdateOneWithoutUser_roleNestedInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput
    upsert?: userUpsertWithoutUser_roleInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_roleInput, userUpdateWithoutUser_roleInput>, userUncheckedUpdateWithoutUser_roleInput>
  }

  export type user_role_permissionUpdateManyWithoutUser_roleNestedInput = {
    create?: XOR<user_role_permissionCreateWithoutUser_roleInput, user_role_permissionUncheckedCreateWithoutUser_roleInput> | user_role_permissionCreateWithoutUser_roleInput[] | user_role_permissionUncheckedCreateWithoutUser_roleInput[]
    connectOrCreate?: user_role_permissionCreateOrConnectWithoutUser_roleInput | user_role_permissionCreateOrConnectWithoutUser_roleInput[]
    upsert?: user_role_permissionUpsertWithWhereUniqueWithoutUser_roleInput | user_role_permissionUpsertWithWhereUniqueWithoutUser_roleInput[]
    createMany?: user_role_permissionCreateManyUser_roleInputEnvelope
    set?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    disconnect?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    delete?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    connect?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    update?: user_role_permissionUpdateWithWhereUniqueWithoutUser_roleInput | user_role_permissionUpdateWithWhereUniqueWithoutUser_roleInput[]
    updateMany?: user_role_permissionUpdateManyWithWhereWithoutUser_roleInput | user_role_permissionUpdateManyWithWhereWithoutUser_roleInput[]
    deleteMany?: user_role_permissionScalarWhereInput | user_role_permissionScalarWhereInput[]
  }

  export type userUncheckedUpdateOneWithoutUser_roleNestedInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput
    upsert?: userUpsertWithoutUser_roleInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_roleInput, userUpdateWithoutUser_roleInput>, userUncheckedUpdateWithoutUser_roleInput>
  }

  export type user_role_permissionUncheckedUpdateManyWithoutUser_roleNestedInput = {
    create?: XOR<user_role_permissionCreateWithoutUser_roleInput, user_role_permissionUncheckedCreateWithoutUser_roleInput> | user_role_permissionCreateWithoutUser_roleInput[] | user_role_permissionUncheckedCreateWithoutUser_roleInput[]
    connectOrCreate?: user_role_permissionCreateOrConnectWithoutUser_roleInput | user_role_permissionCreateOrConnectWithoutUser_roleInput[]
    upsert?: user_role_permissionUpsertWithWhereUniqueWithoutUser_roleInput | user_role_permissionUpsertWithWhereUniqueWithoutUser_roleInput[]
    createMany?: user_role_permissionCreateManyUser_roleInputEnvelope
    set?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    disconnect?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    delete?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    connect?: user_role_permissionWhereUniqueInput | user_role_permissionWhereUniqueInput[]
    update?: user_role_permissionUpdateWithWhereUniqueWithoutUser_roleInput | user_role_permissionUpdateWithWhereUniqueWithoutUser_roleInput[]
    updateMany?: user_role_permissionUpdateManyWithWhereWithoutUser_roleInput | user_role_permissionUpdateManyWithWhereWithoutUser_roleInput[]
    deleteMany?: user_role_permissionScalarWhereInput | user_role_permissionScalarWhereInput[]
  }

  export type user_permissionCreateNestedOneWithoutUser_role_permissionInput = {
    create?: XOR<user_permissionCreateWithoutUser_role_permissionInput, user_permissionUncheckedCreateWithoutUser_role_permissionInput>
    connectOrCreate?: user_permissionCreateOrConnectWithoutUser_role_permissionInput
    connect?: user_permissionWhereUniqueInput
  }

  export type user_roleCreateNestedOneWithoutUser_role_permissionInput = {
    create?: XOR<user_roleCreateWithoutUser_role_permissionInput, user_roleUncheckedCreateWithoutUser_role_permissionInput>
    connectOrCreate?: user_roleCreateOrConnectWithoutUser_role_permissionInput
    connect?: user_roleWhereUniqueInput
  }

  export type user_permissionUpdateOneRequiredWithoutUser_role_permissionNestedInput = {
    create?: XOR<user_permissionCreateWithoutUser_role_permissionInput, user_permissionUncheckedCreateWithoutUser_role_permissionInput>
    connectOrCreate?: user_permissionCreateOrConnectWithoutUser_role_permissionInput
    upsert?: user_permissionUpsertWithoutUser_role_permissionInput
    connect?: user_permissionWhereUniqueInput
    update?: XOR<XOR<user_permissionUpdateToOneWithWhereWithoutUser_role_permissionInput, user_permissionUpdateWithoutUser_role_permissionInput>, user_permissionUncheckedUpdateWithoutUser_role_permissionInput>
  }

  export type user_roleUpdateOneRequiredWithoutUser_role_permissionNestedInput = {
    create?: XOR<user_roleCreateWithoutUser_role_permissionInput, user_roleUncheckedCreateWithoutUser_role_permissionInput>
    connectOrCreate?: user_roleCreateOrConnectWithoutUser_role_permissionInput
    upsert?: user_roleUpsertWithoutUser_role_permissionInput
    connect?: user_roleWhereUniqueInput
    update?: XOR<XOR<user_roleUpdateToOneWithWhereWithoutUser_role_permissionInput, user_roleUpdateWithoutUser_role_permissionInput>, user_roleUncheckedUpdateWithoutUser_role_permissionInput>
  }

  export type userCreateNestedOneWithoutUser_tokenInput = {
    create?: XOR<userCreateWithoutUser_tokenInput, userUncheckedCreateWithoutUser_tokenInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_tokenInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneWithoutUser_tokenNestedInput = {
    create?: XOR<userCreateWithoutUser_tokenInput, userUncheckedCreateWithoutUser_tokenInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_tokenInput
    upsert?: userUpsertWithoutUser_tokenInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_tokenInput, userUpdateWithoutUser_tokenInput>, userUncheckedUpdateWithoutUser_tokenInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
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

  export type NestedEnumpeserta_kewarganegaraanFilter<$PrismaModel = never> = {
    equals?: $Enums.peserta_kewarganegaraan | Enumpeserta_kewarganegaraanFieldRefInput<$PrismaModel>
    in?: $Enums.peserta_kewarganegaraan[]
    notIn?: $Enums.peserta_kewarganegaraan[]
    not?: NestedEnumpeserta_kewarganegaraanFilter<$PrismaModel> | $Enums.peserta_kewarganegaraan
  }

  export type NestedEnumpeserta_jenis_kelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.peserta_jenis_kelamin | Enumpeserta_jenis_kelaminFieldRefInput<$PrismaModel>
    in?: $Enums.peserta_jenis_kelamin[]
    notIn?: $Enums.peserta_jenis_kelamin[]
    not?: NestedEnumpeserta_jenis_kelaminFilter<$PrismaModel> | $Enums.peserta_jenis_kelamin
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumpeserta_kewarganegaraanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.peserta_kewarganegaraan | Enumpeserta_kewarganegaraanFieldRefInput<$PrismaModel>
    in?: $Enums.peserta_kewarganegaraan[]
    notIn?: $Enums.peserta_kewarganegaraan[]
    not?: NestedEnumpeserta_kewarganegaraanWithAggregatesFilter<$PrismaModel> | $Enums.peserta_kewarganegaraan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpeserta_kewarganegaraanFilter<$PrismaModel>
    _max?: NestedEnumpeserta_kewarganegaraanFilter<$PrismaModel>
  }

  export type NestedEnumpeserta_jenis_kelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.peserta_jenis_kelamin | Enumpeserta_jenis_kelaminFieldRefInput<$PrismaModel>
    in?: $Enums.peserta_jenis_kelamin[]
    notIn?: $Enums.peserta_jenis_kelamin[]
    not?: NestedEnumpeserta_jenis_kelaminWithAggregatesFilter<$PrismaModel> | $Enums.peserta_jenis_kelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpeserta_jenis_kelaminFilter<$PrismaModel>
    _max?: NestedEnumpeserta_jenis_kelaminFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type userCreateWithoutAdminInput = {
    id?: bigint | number
    uuid?: string
    username: string
    otp?: string | null
    otp_expired?: Date | string | null
    complete_onboarding?: boolean | null
    token?: string | null
    refresh_token?: string | null
    verified?: number | null
    status: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    peserta?: pesertaCreateNestedOneWithoutUserInput
    user_role?: user_roleCreateNestedOneWithoutUserInput
    user_token?: user_tokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAdminInput = {
    id?: bigint | number
    uuid?: string
    username: string
    peserta_id?: bigint | number | null
    user_role_id?: number | null
    otp?: string | null
    otp_expired?: Date | string | null
    complete_onboarding?: boolean | null
    token?: string | null
    refresh_token?: string | null
    verified?: number | null
    status: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    user_token?: user_tokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAdminInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAdminInput, userUncheckedCreateWithoutAdminInput>
  }

  export type userUpsertWithoutAdminInput = {
    update: XOR<userUpdateWithoutAdminInput, userUncheckedUpdateWithoutAdminInput>
    create: XOR<userCreateWithoutAdminInput, userUncheckedCreateWithoutAdminInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAdminInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAdminInput, userUncheckedUpdateWithoutAdminInput>
  }

  export type userUpdateWithoutAdminInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peserta?: pesertaUpdateOneWithoutUserNestedInput
    user_role?: user_roleUpdateOneWithoutUserNestedInput
    user_token?: user_tokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAdminInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    peserta_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_role_id?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_token?: user_tokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutPesertaInput = {
    id?: bigint | number
    uuid?: string
    username: string
    otp?: string | null
    otp_expired?: Date | string | null
    complete_onboarding?: boolean | null
    token?: string | null
    refresh_token?: string | null
    verified?: number | null
    status: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    admin?: adminCreateNestedOneWithoutUserInput
    user_role?: user_roleCreateNestedOneWithoutUserInput
    user_token?: user_tokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPesertaInput = {
    id?: bigint | number
    uuid?: string
    username: string
    admin_id?: number | null
    user_role_id?: number | null
    otp?: string | null
    otp_expired?: Date | string | null
    complete_onboarding?: boolean | null
    token?: string | null
    refresh_token?: string | null
    verified?: number | null
    status: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    user_token?: user_tokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPesertaInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPesertaInput, userUncheckedCreateWithoutPesertaInput>
  }

  export type userCreateManyPesertaInputEnvelope = {
    data: userCreateManyPesertaInput | userCreateManyPesertaInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutPesertaInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutPesertaInput, userUncheckedUpdateWithoutPesertaInput>
    create: XOR<userCreateWithoutPesertaInput, userUncheckedCreateWithoutPesertaInput>
  }

  export type userUpdateWithWhereUniqueWithoutPesertaInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutPesertaInput, userUncheckedUpdateWithoutPesertaInput>
  }

  export type userUpdateManyWithWhereWithoutPesertaInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutPesertaInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: BigIntFilter<"user"> | bigint | number
    uuid?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    admin_id?: IntNullableFilter<"user"> | number | null
    peserta_id?: BigIntNullableFilter<"user"> | bigint | number | null
    user_role_id?: IntNullableFilter<"user"> | number | null
    otp?: StringNullableFilter<"user"> | string | null
    otp_expired?: DateTimeNullableFilter<"user"> | Date | string | null
    complete_onboarding?: BoolNullableFilter<"user"> | boolean | null
    token?: StringNullableFilter<"user"> | string | null
    refresh_token?: StringNullableFilter<"user"> | string | null
    verified?: IntNullableFilter<"user"> | number | null
    status?: IntFilter<"user"> | number
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeNullableFilter<"user"> | Date | string | null
    created_by?: StringFilter<"user"> | string
    updated_by?: StringNullableFilter<"user"> | string | null
    deleted_at?: DateTimeNullableFilter<"user"> | Date | string | null
  }

  export type adminCreateWithoutUserInput = {
    uuid?: string | null
    name: string
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type adminUncheckedCreateWithoutUserInput = {
    id?: number
    uuid?: string | null
    name: string
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type adminCreateOrConnectWithoutUserInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutUserInput, adminUncheckedCreateWithoutUserInput>
  }

  export type pesertaCreateWithoutUserInput = {
    id?: bigint | number
    uuid: string
    nama_lengkap: string
    kewarganegaraan?: $Enums.peserta_kewarganegaraan
    nik: string
    nik_hash: string
    tanggal_lahir: Date | string
    jenis_kelamin?: $Enums.peserta_jenis_kelamin
    no_hp?: string | null
    email: string
    tempat_lahir?: string | null
    level_pendidikan_id?: number | null
    provinsi_id?: string | null
    alamat?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type pesertaUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    uuid: string
    nama_lengkap: string
    kewarganegaraan?: $Enums.peserta_kewarganegaraan
    nik: string
    nik_hash: string
    tanggal_lahir: Date | string
    jenis_kelamin?: $Enums.peserta_jenis_kelamin
    no_hp?: string | null
    email: string
    tempat_lahir?: string | null
    level_pendidikan_id?: number | null
    provinsi_id?: string | null
    alamat?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type pesertaCreateOrConnectWithoutUserInput = {
    where: pesertaWhereUniqueInput
    create: XOR<pesertaCreateWithoutUserInput, pesertaUncheckedCreateWithoutUserInput>
  }

  export type user_roleCreateWithoutUserInput = {
    uuid?: string | null
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    user_role_permission?: user_role_permissionCreateNestedManyWithoutUser_roleInput
  }

  export type user_roleUncheckedCreateWithoutUserInput = {
    id?: number
    uuid?: string | null
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    user_role_permission?: user_role_permissionUncheckedCreateNestedManyWithoutUser_roleInput
  }

  export type user_roleCreateOrConnectWithoutUserInput = {
    where: user_roleWhereUniqueInput
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
  }

  export type user_tokenCreateWithoutUserInput = {
    uuid?: string
    name?: string | null
    secret: string
    private_key: string
    public_key: string
    status?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_tokenUncheckedCreateWithoutUserInput = {
    id?: number
    uuid?: string
    name?: string | null
    secret: string
    private_key: string
    public_key: string
    status?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_tokenCreateOrConnectWithoutUserInput = {
    where: user_tokenWhereUniqueInput
    create: XOR<user_tokenCreateWithoutUserInput, user_tokenUncheckedCreateWithoutUserInput>
  }

  export type user_tokenCreateManyUserInputEnvelope = {
    data: user_tokenCreateManyUserInput | user_tokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type adminUpsertWithoutUserInput = {
    update: XOR<adminUpdateWithoutUserInput, adminUncheckedUpdateWithoutUserInput>
    create: XOR<adminCreateWithoutUserInput, adminUncheckedCreateWithoutUserInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutUserInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutUserInput, adminUncheckedUpdateWithoutUserInput>
  }

  export type adminUpdateWithoutUserInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adminUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pesertaUpsertWithoutUserInput = {
    update: XOR<pesertaUpdateWithoutUserInput, pesertaUncheckedUpdateWithoutUserInput>
    create: XOR<pesertaCreateWithoutUserInput, pesertaUncheckedCreateWithoutUserInput>
    where?: pesertaWhereInput
  }

  export type pesertaUpdateToOneWithWhereWithoutUserInput = {
    where?: pesertaWhereInput
    data: XOR<pesertaUpdateWithoutUserInput, pesertaUncheckedUpdateWithoutUserInput>
  }

  export type pesertaUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    kewarganegaraan?: Enumpeserta_kewarganegaraanFieldUpdateOperationsInput | $Enums.peserta_kewarganegaraan
    nik?: StringFieldUpdateOperationsInput | string
    nik_hash?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_kelamin?: Enumpeserta_jenis_kelaminFieldUpdateOperationsInput | $Enums.peserta_jenis_kelamin
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    level_pendidikan_id?: NullableIntFieldUpdateOperationsInput | number | null
    provinsi_id?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pesertaUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    kewarganegaraan?: Enumpeserta_kewarganegaraanFieldUpdateOperationsInput | $Enums.peserta_kewarganegaraan
    nik?: StringFieldUpdateOperationsInput | string
    nik_hash?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis_kelamin?: Enumpeserta_jenis_kelaminFieldUpdateOperationsInput | $Enums.peserta_jenis_kelamin
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: NullableStringFieldUpdateOperationsInput | string | null
    level_pendidikan_id?: NullableIntFieldUpdateOperationsInput | number | null
    provinsi_id?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_roleUpsertWithoutUserInput = {
    update: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
    where?: user_roleWhereInput
  }

  export type user_roleUpdateToOneWithWhereWithoutUserInput = {
    where?: user_roleWhereInput
    data: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>
  }

  export type user_roleUpdateWithoutUserInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_role_permission?: user_role_permissionUpdateManyWithoutUser_roleNestedInput
  }

  export type user_roleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_role_permission?: user_role_permissionUncheckedUpdateManyWithoutUser_roleNestedInput
  }

  export type user_tokenUpsertWithWhereUniqueWithoutUserInput = {
    where: user_tokenWhereUniqueInput
    update: XOR<user_tokenUpdateWithoutUserInput, user_tokenUncheckedUpdateWithoutUserInput>
    create: XOR<user_tokenCreateWithoutUserInput, user_tokenUncheckedCreateWithoutUserInput>
  }

  export type user_tokenUpdateWithWhereUniqueWithoutUserInput = {
    where: user_tokenWhereUniqueInput
    data: XOR<user_tokenUpdateWithoutUserInput, user_tokenUncheckedUpdateWithoutUserInput>
  }

  export type user_tokenUpdateManyWithWhereWithoutUserInput = {
    where: user_tokenScalarWhereInput
    data: XOR<user_tokenUpdateManyMutationInput, user_tokenUncheckedUpdateManyWithoutUserInput>
  }

  export type user_tokenScalarWhereInput = {
    AND?: user_tokenScalarWhereInput | user_tokenScalarWhereInput[]
    OR?: user_tokenScalarWhereInput[]
    NOT?: user_tokenScalarWhereInput | user_tokenScalarWhereInput[]
    id?: IntFilter<"user_token"> | number
    uuid?: StringFilter<"user_token"> | string
    user_id?: BigIntNullableFilter<"user_token"> | bigint | number | null
    name?: StringNullableFilter<"user_token"> | string | null
    secret?: StringFilter<"user_token"> | string
    private_key?: StringFilter<"user_token"> | string
    public_key?: StringFilter<"user_token"> | string
    status?: IntFilter<"user_token"> | number
    description?: StringNullableFilter<"user_token"> | string | null
    created_at?: DateTimeFilter<"user_token"> | Date | string
    updated_at?: DateTimeNullableFilter<"user_token"> | Date | string | null
    created_by?: StringNullableFilter<"user_token"> | string | null
    updated_by?: StringNullableFilter<"user_token"> | string | null
    deleted_at?: DateTimeNullableFilter<"user_token"> | Date | string | null
  }

  export type user_role_permissionCreateWithoutUser_permissionInput = {
    uuid?: string | null
    status?: number
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
    user_role: user_roleCreateNestedOneWithoutUser_role_permissionInput
  }

  export type user_role_permissionUncheckedCreateWithoutUser_permissionInput = {
    id?: number
    uuid?: string | null
    user_role_id: number
    status?: number
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_role_permissionCreateOrConnectWithoutUser_permissionInput = {
    where: user_role_permissionWhereUniqueInput
    create: XOR<user_role_permissionCreateWithoutUser_permissionInput, user_role_permissionUncheckedCreateWithoutUser_permissionInput>
  }

  export type user_role_permissionCreateManyUser_permissionInputEnvelope = {
    data: user_role_permissionCreateManyUser_permissionInput | user_role_permissionCreateManyUser_permissionInput[]
    skipDuplicates?: boolean
  }

  export type user_role_permissionUpsertWithWhereUniqueWithoutUser_permissionInput = {
    where: user_role_permissionWhereUniqueInput
    update: XOR<user_role_permissionUpdateWithoutUser_permissionInput, user_role_permissionUncheckedUpdateWithoutUser_permissionInput>
    create: XOR<user_role_permissionCreateWithoutUser_permissionInput, user_role_permissionUncheckedCreateWithoutUser_permissionInput>
  }

  export type user_role_permissionUpdateWithWhereUniqueWithoutUser_permissionInput = {
    where: user_role_permissionWhereUniqueInput
    data: XOR<user_role_permissionUpdateWithoutUser_permissionInput, user_role_permissionUncheckedUpdateWithoutUser_permissionInput>
  }

  export type user_role_permissionUpdateManyWithWhereWithoutUser_permissionInput = {
    where: user_role_permissionScalarWhereInput
    data: XOR<user_role_permissionUpdateManyMutationInput, user_role_permissionUncheckedUpdateManyWithoutUser_permissionInput>
  }

  export type user_role_permissionScalarWhereInput = {
    AND?: user_role_permissionScalarWhereInput | user_role_permissionScalarWhereInput[]
    OR?: user_role_permissionScalarWhereInput[]
    NOT?: user_role_permissionScalarWhereInput | user_role_permissionScalarWhereInput[]
    id?: IntFilter<"user_role_permission"> | number
    uuid?: StringNullableFilter<"user_role_permission"> | string | null
    user_role_id?: IntFilter<"user_role_permission"> | number
    user_permission_id?: IntFilter<"user_role_permission"> | number
    status?: IntFilter<"user_role_permission"> | number
    created_at?: DateTimeFilter<"user_role_permission"> | Date | string
    created_by?: StringFilter<"user_role_permission"> | string
    updated_at?: DateTimeNullableFilter<"user_role_permission"> | Date | string | null
    updated_by?: StringNullableFilter<"user_role_permission"> | string | null
    deleted_at?: DateTimeNullableFilter<"user_role_permission"> | Date | string | null
  }

  export type userCreateWithoutUser_roleInput = {
    id?: bigint | number
    uuid?: string
    username: string
    otp?: string | null
    otp_expired?: Date | string | null
    complete_onboarding?: boolean | null
    token?: string | null
    refresh_token?: string | null
    verified?: number | null
    status: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    admin?: adminCreateNestedOneWithoutUserInput
    peserta?: pesertaCreateNestedOneWithoutUserInput
    user_token?: user_tokenCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_roleInput = {
    id?: bigint | number
    uuid?: string
    username: string
    admin_id?: number | null
    peserta_id?: bigint | number | null
    otp?: string | null
    otp_expired?: Date | string | null
    complete_onboarding?: boolean | null
    token?: string | null
    refresh_token?: string | null
    verified?: number | null
    status: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    user_token?: user_tokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_roleInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>
  }

  export type user_role_permissionCreateWithoutUser_roleInput = {
    uuid?: string | null
    status?: number
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
    user_permission: user_permissionCreateNestedOneWithoutUser_role_permissionInput
  }

  export type user_role_permissionUncheckedCreateWithoutUser_roleInput = {
    id?: number
    uuid?: string | null
    user_permission_id: number
    status?: number
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_role_permissionCreateOrConnectWithoutUser_roleInput = {
    where: user_role_permissionWhereUniqueInput
    create: XOR<user_role_permissionCreateWithoutUser_roleInput, user_role_permissionUncheckedCreateWithoutUser_roleInput>
  }

  export type user_role_permissionCreateManyUser_roleInputEnvelope = {
    data: user_role_permissionCreateManyUser_roleInput | user_role_permissionCreateManyUser_roleInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutUser_roleInput = {
    update: XOR<userUpdateWithoutUser_roleInput, userUncheckedUpdateWithoutUser_roleInput>
    create: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_roleInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_roleInput, userUncheckedUpdateWithoutUser_roleInput>
  }

  export type userUpdateWithoutUser_roleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: adminUpdateOneWithoutUserNestedInput
    peserta?: pesertaUpdateOneWithoutUserNestedInput
    user_token?: user_tokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_roleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    peserta_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_token?: user_tokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_role_permissionUpsertWithWhereUniqueWithoutUser_roleInput = {
    where: user_role_permissionWhereUniqueInput
    update: XOR<user_role_permissionUpdateWithoutUser_roleInput, user_role_permissionUncheckedUpdateWithoutUser_roleInput>
    create: XOR<user_role_permissionCreateWithoutUser_roleInput, user_role_permissionUncheckedCreateWithoutUser_roleInput>
  }

  export type user_role_permissionUpdateWithWhereUniqueWithoutUser_roleInput = {
    where: user_role_permissionWhereUniqueInput
    data: XOR<user_role_permissionUpdateWithoutUser_roleInput, user_role_permissionUncheckedUpdateWithoutUser_roleInput>
  }

  export type user_role_permissionUpdateManyWithWhereWithoutUser_roleInput = {
    where: user_role_permissionScalarWhereInput
    data: XOR<user_role_permissionUpdateManyMutationInput, user_role_permissionUncheckedUpdateManyWithoutUser_roleInput>
  }

  export type user_permissionCreateWithoutUser_role_permissionInput = {
    uuid?: string | null
    name: string
    description?: string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_permissionUncheckedCreateWithoutUser_role_permissionInput = {
    id?: number
    uuid?: string | null
    name: string
    description?: string | null
    status?: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_permissionCreateOrConnectWithoutUser_role_permissionInput = {
    where: user_permissionWhereUniqueInput
    create: XOR<user_permissionCreateWithoutUser_role_permissionInput, user_permissionUncheckedCreateWithoutUser_role_permissionInput>
  }

  export type user_roleCreateWithoutUser_role_permissionInput = {
    uuid?: string | null
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    user?: userCreateNestedOneWithoutUser_roleInput
  }

  export type user_roleUncheckedCreateWithoutUser_role_permissionInput = {
    id?: number
    uuid?: string | null
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    user?: userUncheckedCreateNestedOneWithoutUser_roleInput
  }

  export type user_roleCreateOrConnectWithoutUser_role_permissionInput = {
    where: user_roleWhereUniqueInput
    create: XOR<user_roleCreateWithoutUser_role_permissionInput, user_roleUncheckedCreateWithoutUser_role_permissionInput>
  }

  export type user_permissionUpsertWithoutUser_role_permissionInput = {
    update: XOR<user_permissionUpdateWithoutUser_role_permissionInput, user_permissionUncheckedUpdateWithoutUser_role_permissionInput>
    create: XOR<user_permissionCreateWithoutUser_role_permissionInput, user_permissionUncheckedCreateWithoutUser_role_permissionInput>
    where?: user_permissionWhereInput
  }

  export type user_permissionUpdateToOneWithWhereWithoutUser_role_permissionInput = {
    where?: user_permissionWhereInput
    data: XOR<user_permissionUpdateWithoutUser_role_permissionInput, user_permissionUncheckedUpdateWithoutUser_role_permissionInput>
  }

  export type user_permissionUpdateWithoutUser_role_permissionInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_permissionUncheckedUpdateWithoutUser_role_permissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_roleUpsertWithoutUser_role_permissionInput = {
    update: XOR<user_roleUpdateWithoutUser_role_permissionInput, user_roleUncheckedUpdateWithoutUser_role_permissionInput>
    create: XOR<user_roleCreateWithoutUser_role_permissionInput, user_roleUncheckedCreateWithoutUser_role_permissionInput>
    where?: user_roleWhereInput
  }

  export type user_roleUpdateToOneWithWhereWithoutUser_role_permissionInput = {
    where?: user_roleWhereInput
    data: XOR<user_roleUpdateWithoutUser_role_permissionInput, user_roleUncheckedUpdateWithoutUser_role_permissionInput>
  }

  export type user_roleUpdateWithoutUser_role_permissionInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutUser_roleNestedInput
  }

  export type user_roleUncheckedUpdateWithoutUser_role_permissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUncheckedUpdateOneWithoutUser_roleNestedInput
  }

  export type userCreateWithoutUser_tokenInput = {
    id?: bigint | number
    uuid?: string
    username: string
    otp?: string | null
    otp_expired?: Date | string | null
    complete_onboarding?: boolean | null
    token?: string | null
    refresh_token?: string | null
    verified?: number | null
    status: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
    admin?: adminCreateNestedOneWithoutUserInput
    peserta?: pesertaCreateNestedOneWithoutUserInput
    user_role?: user_roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_tokenInput = {
    id?: bigint | number
    uuid?: string
    username: string
    admin_id?: number | null
    peserta_id?: bigint | number | null
    user_role_id?: number | null
    otp?: string | null
    otp_expired?: Date | string | null
    complete_onboarding?: boolean | null
    token?: string | null
    refresh_token?: string | null
    verified?: number | null
    status: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type userCreateOrConnectWithoutUser_tokenInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_tokenInput, userUncheckedCreateWithoutUser_tokenInput>
  }

  export type userUpsertWithoutUser_tokenInput = {
    update: XOR<userUpdateWithoutUser_tokenInput, userUncheckedUpdateWithoutUser_tokenInput>
    create: XOR<userCreateWithoutUser_tokenInput, userUncheckedCreateWithoutUser_tokenInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_tokenInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_tokenInput, userUncheckedUpdateWithoutUser_tokenInput>
  }

  export type userUpdateWithoutUser_tokenInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: adminUpdateOneWithoutUserNestedInput
    peserta?: pesertaUpdateOneWithoutUserNestedInput
    user_role?: user_roleUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_tokenInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    peserta_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_role_id?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateManyPesertaInput = {
    id?: bigint | number
    uuid?: string
    username: string
    admin_id?: number | null
    user_role_id?: number | null
    otp?: string | null
    otp_expired?: Date | string | null
    complete_onboarding?: boolean | null
    token?: string | null
    refresh_token?: string | null
    verified?: number | null
    status: number
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by: string
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type userUpdateWithoutPesertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: adminUpdateOneWithoutUserNestedInput
    user_role?: user_roleUpdateOneWithoutUserNestedInput
    user_token?: user_tokenUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPesertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_role_id?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_token?: user_tokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutPesertaInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    admin_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_role_id?: NullableIntFieldUpdateOperationsInput | number | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otp_expired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    complete_onboarding?: NullableBoolFieldUpdateOperationsInput | boolean | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_tokenCreateManyUserInput = {
    id?: number
    uuid?: string
    name?: string | null
    secret: string
    private_key: string
    public_key: string
    status?: number
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    created_by?: string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_tokenUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_tokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_tokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: StringFieldUpdateOperationsInput | string
    private_key?: StringFieldUpdateOperationsInput | string
    public_key?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_role_permissionCreateManyUser_permissionInput = {
    id?: number
    uuid?: string | null
    user_role_id: number
    status?: number
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_role_permissionUpdateWithoutUser_permissionInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_role?: user_roleUpdateOneRequiredWithoutUser_role_permissionNestedInput
  }

  export type user_role_permissionUncheckedUpdateWithoutUser_permissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    user_role_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_role_permissionUncheckedUpdateManyWithoutUser_permissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    user_role_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_role_permissionCreateManyUser_roleInput = {
    id?: number
    uuid?: string | null
    user_permission_id: number
    status?: number
    created_at?: Date | string
    created_by: string
    updated_at?: Date | string | null
    updated_by?: string | null
    deleted_at?: Date | string | null
  }

  export type user_role_permissionUpdateWithoutUser_roleInput = {
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_permission?: user_permissionUpdateOneRequiredWithoutUser_role_permissionNestedInput
  }

  export type user_role_permissionUncheckedUpdateWithoutUser_roleInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    user_permission_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_role_permissionUncheckedUpdateManyWithoutUser_roleInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    user_permission_id?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by?: StringFieldUpdateOperationsInput | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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