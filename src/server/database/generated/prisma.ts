import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messages: <T = Message[]>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    channels: <T = Channel[]>(args: { where?: ChannelWhereInput, orderBy?: ChannelOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tokens: <T = Token[]>(args: { where?: TokenWhereInput, orderBy?: TokenOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    channel: <T = Channel | null>(args: { where: ChannelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    token: <T = Token | null>(args: { where: TokenWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    channelsConnection: <T = ChannelConnection>(args: { where?: ChannelWhereInput, orderBy?: ChannelOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tokensConnection: <T = TokenConnection>(args: { where?: TokenWhereInput, orderBy?: TokenOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createChannel: <T = Channel>(args: { data: ChannelCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createToken: <T = Token>(args: { data: TokenCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateChannel: <T = Channel | null>(args: { data: ChannelUpdateInput, where: ChannelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateToken: <T = Token | null>(args: { data: TokenUpdateInput, where: TokenWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteChannel: <T = Channel | null>(args: { where: ChannelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteToken: <T = Token | null>(args: { where: TokenWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertChannel: <T = Channel>(args: { where: ChannelWhereUniqueInput, create: ChannelCreateInput, update: ChannelUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertToken: <T = Token>(args: { where: TokenWhereUniqueInput, create: TokenCreateInput, update: TokenUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateInput, where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyChannels: <T = BatchPayload>(args: { data: ChannelUpdateInput, where?: ChannelWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTokens: <T = BatchPayload>(args: { data: TokenUpdateInput, where?: TokenWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyChannels: <T = BatchPayload>(args: { where?: ChannelWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTokens: <T = BatchPayload>(args: { where?: TokenWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    channel: <T = ChannelSubscriptionPayload | null>(args: { where?: ChannelSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    token: <T = TokenSubscriptionPayload | null>(args: { where?: TokenSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  Channel: (where?: ChannelWhereInput) => Promise<boolean>
  Token: (where?: TokenWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateChannel {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateToken {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Channel implements Node {
  id: ID!
  title: String!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

"""A connection to a list of items."""
type ChannelConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ChannelEdge]!
  aggregate: AggregateChannel!
}

input ChannelCreateInput {
  title: String!
  messages: MessageCreateManyWithoutChannelInput
}

input ChannelCreateOneWithoutMessagesInput {
  create: ChannelCreateWithoutMessagesInput
  connect: ChannelWhereUniqueInput
}

input ChannelCreateWithoutMessagesInput {
  title: String!
}

"""An edge in a connection."""
type ChannelEdge {
  """The item at the end of the edge."""
  node: Channel!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ChannelOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ChannelPreviousValues {
  id: ID!
  title: String!
}

type ChannelSubscriptionPayload {
  mutation: MutationType!
  node: Channel
  updatedFields: [String!]
  previousValues: ChannelPreviousValues
}

input ChannelSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ChannelSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChannelSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChannelSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChannelWhereInput
}

input ChannelUpdateInput {
  title: String
  messages: MessageUpdateManyWithoutChannelInput
}

input ChannelUpdateOneWithoutMessagesInput {
  create: ChannelCreateWithoutMessagesInput
  connect: ChannelWhereUniqueInput
  delete: Boolean
  update: ChannelUpdateWithoutMessagesDataInput
  upsert: ChannelUpsertWithoutMessagesInput
}

input ChannelUpdateWithoutMessagesDataInput {
  title: String
}

input ChannelUpsertWithoutMessagesInput {
  update: ChannelUpdateWithoutMessagesDataInput!
  create: ChannelCreateWithoutMessagesInput!
}

input ChannelWhereInput {
  """Logical AND on all given filters."""
  AND: [ChannelWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChannelWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChannelWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
}

input ChannelWhereUniqueInput {
  id: ID
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Message implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
  author(where: UserWhereInput): User!
  channel(where: ChannelWhereInput): Channel!
}

"""A connection to a list of items."""
type MessageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  text: String!
  author: UserCreateOneWithoutMessagesInput!
  channel: ChannelCreateOneWithoutMessagesInput!
}

input MessageCreateManyWithoutAuthorInput {
  create: [MessageCreateWithoutAuthorInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutChannelInput {
  create: [MessageCreateWithoutChannelInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutAuthorInput {
  text: String!
  channel: ChannelCreateOneWithoutMessagesInput!
}

input MessageCreateWithoutChannelInput {
  text: String!
  author: UserCreateOneWithoutMessagesInput!
}

"""An edge in a connection."""
type MessageEdge {
  """The item at the end of the edge."""
  node: Message!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  text_ASC
  text_DESC
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
}

input MessageUpdateInput {
  text: String
  author: UserUpdateOneWithoutMessagesInput
  channel: ChannelUpdateOneWithoutMessagesInput
}

input MessageUpdateManyWithoutAuthorInput {
  create: [MessageCreateWithoutAuthorInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutAuthorInput!]
}

input MessageUpdateManyWithoutChannelInput {
  create: [MessageCreateWithoutChannelInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutChannelInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutChannelInput!]
}

input MessageUpdateWithoutAuthorDataInput {
  text: String
  channel: ChannelUpdateOneWithoutMessagesInput
}

input MessageUpdateWithoutChannelDataInput {
  text: String
  author: UserUpdateOneWithoutMessagesInput
}

input MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutAuthorDataInput!
}

input MessageUpdateWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutChannelDataInput!
}

input MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutAuthorDataInput!
  create: MessageCreateWithoutAuthorInput!
}

input MessageUpsertWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutChannelDataInput!
  create: MessageCreateWithoutChannelInput!
}

input MessageWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
  channel: ChannelWhereInput
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createMessage(data: MessageCreateInput!): Message!
  createChannel(data: ChannelCreateInput!): Channel!
  createToken(data: TokenCreateInput!): Token!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateChannel(data: ChannelUpdateInput!, where: ChannelWhereUniqueInput!): Channel
  updateToken(data: TokenUpdateInput!, where: TokenWhereUniqueInput!): Token
  deleteUser(where: UserWhereUniqueInput!): User
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteChannel(where: ChannelWhereUniqueInput!): Channel
  deleteToken(where: TokenWhereUniqueInput!): Token
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  upsertChannel(where: ChannelWhereUniqueInput!, create: ChannelCreateInput!, update: ChannelUpdateInput!): Channel!
  upsertToken(where: TokenWhereUniqueInput!, create: TokenCreateInput!, update: TokenUpdateInput!): Token!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyMessages(data: MessageUpdateInput!, where: MessageWhereInput): BatchPayload!
  updateManyChannels(data: ChannelUpdateInput!, where: ChannelWhereInput): BatchPayload!
  updateManyTokens(data: TokenUpdateInput!, where: TokenWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  deleteManyChannels(where: ChannelWhereInput): BatchPayload!
  deleteManyTokens(where: TokenWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel]!
  tokens(where: TokenWhereInput, orderBy: TokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Token]!
  user(where: UserWhereUniqueInput!): User
  message(where: MessageWhereUniqueInput!): Message
  channel(where: ChannelWhereUniqueInput!): Channel
  token(where: TokenWhereUniqueInput!): Token
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  channelsConnection(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChannelConnection!
  tokensConnection(where: TokenWhereInput, orderBy: TokenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TokenConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  channel(where: ChannelSubscriptionWhereInput): ChannelSubscriptionPayload
  token(where: TokenSubscriptionWhereInput): TokenSubscriptionPayload
}

type Token implements Node {
  id: ID!
  token: String!
}

"""A connection to a list of items."""
type TokenConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TokenEdge]!
  aggregate: AggregateToken!
}

input TokenCreateInput {
  token: String!
}

input TokenCreateOneInput {
  create: TokenCreateInput
  connect: TokenWhereUniqueInput
}

"""An edge in a connection."""
type TokenEdge {
  """The item at the end of the edge."""
  node: Token!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TokenOrderByInput {
  id_ASC
  id_DESC
  token_ASC
  token_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TokenPreviousValues {
  id: ID!
  token: String!
}

type TokenSubscriptionPayload {
  mutation: MutationType!
  node: Token
  updatedFields: [String!]
  previousValues: TokenPreviousValues
}

input TokenSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TokenSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TokenSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TokenSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TokenWhereInput
}

input TokenUpdateDataInput {
  token: String
}

input TokenUpdateInput {
  token: String
}

input TokenUpdateOneInput {
  create: TokenCreateInput
  connect: TokenWhereUniqueInput
  delete: Boolean
  update: TokenUpdateDataInput
  upsert: TokenUpsertNestedInput
}

input TokenUpsertNestedInput {
  update: TokenUpdateDataInput!
  create: TokenCreateInput!
}

input TokenWhereInput {
  """Logical AND on all given filters."""
  AND: [TokenWhereInput!]

  """Logical OR on all given filters."""
  OR: [TokenWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TokenWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  token: String

  """All values that are not equal to given value."""
  token_not: String

  """All values that are contained in given list."""
  token_in: [String!]

  """All values that are not contained in given list."""
  token_not_in: [String!]

  """All values less than the given value."""
  token_lt: String

  """All values less than or equal the given value."""
  token_lte: String

  """All values greater than the given value."""
  token_gt: String

  """All values greater than or equal the given value."""
  token_gte: String

  """All values containing the given string."""
  token_contains: String

  """All values not containing the given string."""
  token_not_contains: String

  """All values starting with the given string."""
  token_starts_with: String

  """All values not starting with the given string."""
  token_not_starts_with: String

  """All values ending with the given string."""
  token_ends_with: String

  """All values not ending with the given string."""
  token_not_ends_with: String
}

input TokenWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  password: String!
  username: String!
  email: String
  role: String
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  refreshToken(where: TokenWhereInput): Token!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  password: String!
  username: String!
  email: String
  role: String
  messages: MessageCreateManyWithoutAuthorInput
  refreshToken: TokenCreateOneInput!
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutMessagesInput {
  password: String!
  username: String!
  email: String
  role: String
  refreshToken: TokenCreateOneInput!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  password_ASC
  password_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  password: String!
  username: String!
  email: String
  role: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  password: String
  username: String
  email: String
  role: String
  messages: MessageUpdateManyWithoutAuthorInput
  refreshToken: TokenUpdateOneInput
}

input UserUpdateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
}

input UserUpdateWithoutMessagesDataInput {
  password: String
  username: String
  email: String
  role: String
  refreshToken: TokenUpdateOneInput
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  role: String

  """All values that are not equal to given value."""
  role_not: String

  """All values that are contained in given list."""
  role_in: [String!]

  """All values that are not contained in given list."""
  role_not_in: [String!]

  """All values less than the given value."""
  role_lt: String

  """All values less than or equal the given value."""
  role_lte: String

  """All values greater than the given value."""
  role_gt: String

  """All values greater than or equal the given value."""
  role_gte: String

  """All values containing the given string."""
  role_contains: String

  """All values not containing the given string."""
  role_not_contains: String

  """All values starting with the given string."""
  role_starts_with: String

  """All values not starting with the given string."""
  role_not_starts_with: String

  """All values ending with the given string."""
  role_ends_with: String

  """All values not ending with the given string."""
  role_not_ends_with: String
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  refreshToken: TokenWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'password_ASC' |
  'password_DESC' |
  'username_ASC' |
  'username_DESC' |
  'email_ASC' |
  'email_DESC' |
  'role_ASC' |
  'role_DESC'

export type MessageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'text_ASC' |
  'text_DESC'

export type ChannelOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TokenOrderByInput =   'id_ASC' |
  'id_DESC' |
  'token_ASC' |
  'token_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface MessageCreateInput {
  text: String
  author: UserCreateOneWithoutMessagesInput
  channel: ChannelCreateOneWithoutMessagesInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  role?: String
  role_not?: String
  role_in?: String[] | String
  role_not_in?: String[] | String
  role_lt?: String
  role_lte?: String
  role_gt?: String
  role_gte?: String
  role_contains?: String
  role_not_contains?: String
  role_starts_with?: String
  role_not_starts_with?: String
  role_ends_with?: String
  role_not_ends_with?: String
  messages_every?: MessageWhereInput
  messages_some?: MessageWhereInput
  messages_none?: MessageWhereInput
  refreshToken?: TokenWhereInput
}

export interface ChannelCreateInput {
  title: String
  messages?: MessageCreateManyWithoutChannelInput
}

export interface TokenWhereInput {
  AND?: TokenWhereInput[] | TokenWhereInput
  OR?: TokenWhereInput[] | TokenWhereInput
  NOT?: TokenWhereInput[] | TokenWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  token?: String
  token_not?: String
  token_in?: String[] | String
  token_not_in?: String[] | String
  token_lt?: String
  token_lte?: String
  token_gt?: String
  token_gte?: String
  token_contains?: String
  token_not_contains?: String
  token_starts_with?: String
  token_not_starts_with?: String
  token_ends_with?: String
  token_not_ends_with?: String
}

export interface TokenUpsertNestedInput {
  update: TokenUpdateDataInput
  create: TokenCreateInput
}

export interface ChannelUpdateOneWithoutMessagesInput {
  create?: ChannelCreateWithoutMessagesInput
  connect?: ChannelWhereUniqueInput
  delete?: Boolean
  update?: ChannelUpdateWithoutMessagesDataInput
  upsert?: ChannelUpsertWithoutMessagesInput
}

export interface TokenUpdateDataInput {
  token?: String
}

export interface MessageCreateManyWithoutChannelInput {
  create?: MessageCreateWithoutChannelInput[] | MessageCreateWithoutChannelInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface TokenUpdateOneInput {
  create?: TokenCreateInput
  connect?: TokenWhereUniqueInput
  delete?: Boolean
  update?: TokenUpdateDataInput
  upsert?: TokenUpsertNestedInput
}

export interface TokenSubscriptionWhereInput {
  AND?: TokenSubscriptionWhereInput[] | TokenSubscriptionWhereInput
  OR?: TokenSubscriptionWhereInput[] | TokenSubscriptionWhereInput
  NOT?: TokenSubscriptionWhereInput[] | TokenSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TokenWhereInput
}

export interface MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutAuthorDataInput
  create: MessageCreateWithoutAuthorInput
}

export interface MessageSubscriptionWhereInput {
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MessageWhereInput
}

export interface UserCreateInput {
  password: String
  username: String
  email?: String
  role?: String
  messages?: MessageCreateManyWithoutAuthorInput
  refreshToken: TokenCreateOneInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface MessageCreateManyWithoutAuthorInput {
  create?: MessageCreateWithoutAuthorInput[] | MessageCreateWithoutAuthorInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface MessageWhereUniqueInput {
  id?: ID_Input
}

export interface MessageCreateWithoutAuthorInput {
  text: String
  channel: ChannelCreateOneWithoutMessagesInput
}

export interface TokenWhereUniqueInput {
  id?: ID_Input
}

export interface ChannelCreateOneWithoutMessagesInput {
  create?: ChannelCreateWithoutMessagesInput
  connect?: ChannelWhereUniqueInput
}

export interface MessageUpsertWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateWithoutChannelDataInput
  create: MessageCreateWithoutChannelInput
}

export interface ChannelCreateWithoutMessagesInput {
  title: String
}

export interface MessageUpdateWithWhereUniqueWithoutChannelInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutChannelDataInput
}

export interface TokenCreateOneInput {
  create?: TokenCreateInput
  connect?: TokenWhereUniqueInput
}

export interface ChannelUpdateInput {
  title?: String
  messages?: MessageUpdateManyWithoutChannelInput
}

export interface TokenCreateInput {
  token: String
}

export interface UserUpdateWithoutMessagesDataInput {
  password?: String
  username?: String
  email?: String
  role?: String
  refreshToken?: TokenUpdateOneInput
}

export interface ChannelUpsertWithoutMessagesInput {
  update: ChannelUpdateWithoutMessagesDataInput
  create: ChannelCreateWithoutMessagesInput
}

export interface MessageUpdateInput {
  text?: String
  author?: UserUpdateOneWithoutMessagesInput
  channel?: ChannelUpdateOneWithoutMessagesInput
}

export interface UserCreateOneWithoutMessagesInput {
  create?: UserCreateWithoutMessagesInput
  connect?: UserWhereUniqueInput
}

export interface ChannelSubscriptionWhereInput {
  AND?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput
  OR?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput
  NOT?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ChannelWhereInput
}

export interface UserCreateWithoutMessagesInput {
  password: String
  username: String
  email?: String
  role?: String
  refreshToken: TokenCreateOneInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface ChannelUpdateWithoutMessagesDataInput {
  title?: String
}

export interface TokenUpdateInput {
  token?: String
}

export interface MessageUpdateManyWithoutChannelInput {
  create?: MessageCreateWithoutChannelInput[] | MessageCreateWithoutChannelInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutChannelInput[] | MessageUpdateWithWhereUniqueWithoutChannelInput
  upsert?: MessageUpsertWithWhereUniqueWithoutChannelInput[] | MessageUpsertWithWhereUniqueWithoutChannelInput
}

export interface UserUpdateOneWithoutMessagesInput {
  create?: UserCreateWithoutMessagesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutMessagesDataInput
  upsert?: UserUpsertWithoutMessagesInput
}

export interface MessageCreateWithoutChannelInput {
  text: String
  author: UserCreateOneWithoutMessagesInput
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[] | MessageWhereInput
  OR?: MessageWhereInput[] | MessageWhereInput
  NOT?: MessageWhereInput[] | MessageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
  channel?: ChannelWhereInput
}

export interface MessageUpdateWithoutAuthorDataInput {
  text?: String
  channel?: ChannelUpdateOneWithoutMessagesInput
}

export interface MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateWithoutAuthorDataInput
}

export interface MessageUpdateManyWithoutAuthorInput {
  create?: MessageCreateWithoutAuthorInput[] | MessageCreateWithoutAuthorInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueWithoutAuthorInput[] | MessageUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: MessageUpsertWithWhereUniqueWithoutAuthorInput[] | MessageUpsertWithWhereUniqueWithoutAuthorInput
}

export interface UserUpdateInput {
  password?: String
  username?: String
  email?: String
  role?: String
  messages?: MessageUpdateManyWithoutAuthorInput
  refreshToken?: TokenUpdateOneInput
}

export interface ChannelWhereUniqueInput {
  id?: ID_Input
}

export interface ChannelWhereInput {
  AND?: ChannelWhereInput[] | ChannelWhereInput
  OR?: ChannelWhereInput[] | ChannelWhereInput
  NOT?: ChannelWhereInput[] | ChannelWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  messages_every?: MessageWhereInput
  messages_some?: MessageWhereInput
  messages_none?: MessageWhereInput
}

export interface UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput
  create: UserCreateWithoutMessagesInput
}

export interface MessageUpdateWithoutChannelDataInput {
  text?: String
  author?: UserUpdateOneWithoutMessagesInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface TokenPreviousValues {
  id: ID_Output
  token: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  password: String
  username: String
  email?: String
  role?: String
  messages?: Message[]
  refreshToken: Token
}

export interface BatchPayload {
  count: Long
}

export interface AggregateToken {
  count: Int
}

export interface Message extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
  author: User
  channel: Channel
}

export interface Channel extends Node {
  id: ID_Output
  title: String
  messages?: Message[]
}

/*
 * An edge in a connection.

 */
export interface TokenEdge {
  node: Token
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface TokenConnection {
  pageInfo: PageInfo
  edges: TokenEdge[]
  aggregate: AggregateToken
}

export interface AggregateChannel {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ChannelConnection {
  pageInfo: PageInfo
  edges: ChannelEdge[]
  aggregate: AggregateChannel
}

export interface ChannelPreviousValues {
  id: ID_Output
  title: String
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message
  cursor: String
}

export interface ChannelSubscriptionPayload {
  mutation: MutationType
  node?: Channel
  updatedFields?: String[]
  previousValues?: ChannelPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface TokenSubscriptionPayload {
  mutation: MutationType
  node?: Token
  updatedFields?: String[]
  previousValues?: TokenPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ChannelEdge {
  node: Channel
  cursor: String
}

export interface MessagePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  text: String
}

export interface MessageSubscriptionPayload {
  mutation: MutationType
  node?: Message
  updatedFields?: String[]
  previousValues?: MessagePreviousValues
}

export interface Token extends Node {
  id: ID_Output
  token: String
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  password: String
  username: String
  email?: String
  role?: String
}

export interface AggregateMessage {
  count: Int
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo: PageInfo
  edges: MessageEdge[]
  aggregate: AggregateMessage
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string