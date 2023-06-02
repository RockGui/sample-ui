/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import * as beet from '@metaplex-foundation/beet'

/**
 * Arguments used to create {@link CollectionPermissions}
 * @category Accounts
 * @category generated
 */
export type CollectionPermissionsArgs = {
  collection: web3.PublicKey
  user: web3.PublicKey
  isAdmin: boolean
  canCreateMetadata: boolean
  canEditMetadata: boolean
  canDeleteMetadata: boolean
  canEditCollection: boolean
  canDeleteCollection: boolean
}

export const collectionPermissionsDiscriminator = [
  131, 186, 116, 108, 51, 86, 189, 111,
]
/**
 * Holds the data for the {@link CollectionPermissions} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class CollectionPermissions implements CollectionPermissionsArgs {
  private constructor(
    readonly collection: web3.PublicKey,
    readonly user: web3.PublicKey,
    readonly isAdmin: boolean,
    readonly canCreateMetadata: boolean,
    readonly canEditMetadata: boolean,
    readonly canDeleteMetadata: boolean,
    readonly canEditCollection: boolean,
    readonly canDeleteCollection: boolean
  ) {}

  /**
   * Creates a {@link CollectionPermissions} instance from the provided args.
   */
  static fromArgs(args: CollectionPermissionsArgs) {
    return new CollectionPermissions(
      args.collection,
      args.user,
      args.isAdmin,
      args.canCreateMetadata,
      args.canEditMetadata,
      args.canDeleteMetadata,
      args.canEditCollection,
      args.canDeleteCollection
    )
  }

  /**
   * Deserializes the {@link CollectionPermissions} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [CollectionPermissions, number] {
    return CollectionPermissions.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link CollectionPermissions} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<CollectionPermissions> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(
        `Unable to find CollectionPermissions account at ${address}`
      )
    }
    return CollectionPermissions.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'AJ5Hh5q4HegZWWu1ScY7ZRA6zELXmRzEWS5EXFSKqBC6'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(
      programId,
      collectionPermissionsBeet
    )
  }

  /**
   * Deserializes the {@link CollectionPermissions} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [CollectionPermissions, number] {
    return collectionPermissionsBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link CollectionPermissions} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return collectionPermissionsBeet.serialize({
      accountDiscriminator: collectionPermissionsDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link CollectionPermissions}
   */
  static get byteSize() {
    return collectionPermissionsBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link CollectionPermissions} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      CollectionPermissions.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link CollectionPermissions} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === CollectionPermissions.byteSize
  }

  /**
   * Returns a readable version of {@link CollectionPermissions} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      collection: this.collection.toBase58(),
      user: this.user.toBase58(),
      isAdmin: this.isAdmin,
      canCreateMetadata: this.canCreateMetadata,
      canEditMetadata: this.canEditMetadata,
      canDeleteMetadata: this.canDeleteMetadata,
      canEditCollection: this.canEditCollection,
      canDeleteCollection: this.canDeleteCollection,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const collectionPermissionsBeet = new beet.BeetStruct<
  CollectionPermissions,
  CollectionPermissionsArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['collection', beetSolana.publicKey],
    ['user', beetSolana.publicKey],
    ['isAdmin', beet.bool],
    ['canCreateMetadata', beet.bool],
    ['canEditMetadata', beet.bool],
    ['canDeleteMetadata', beet.bool],
    ['canEditCollection', beet.bool],
    ['canDeleteCollection', beet.bool],
  ],
  CollectionPermissions.fromArgs,
  'CollectionPermissions'
)