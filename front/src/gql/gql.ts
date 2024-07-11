/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetStatus {\n    getStatus {\n      result\n    }\n  }\n": types.GetStatusDocument,
    "\n  query GetUsers {\n    users {\n      id\n      username\n    }\n  }\n": types.GetUsersDocument,
    "\n  query GetConversations {\n    conversations {\n      id\n      name\n      user1 {\n        id\n        username\n      }\n      user2 {\n        id\n        username\n      }\n      messages {\n        id\n        text\n        creationDate\n      }\n    }\n  }\n": types.GetConversationsDocument,
    "\n  query GetConversationsByUser($userId: String!) {\n    conversationsByUser(userId: $userId) {\n      id\n      name\n    }\n  }\n": types.GetConversationsByUserDocument,
    "\n  mutation CreateUser($username: String!, $password: String!) {\n    createUser(username: $username, password: $password) {\n      id\n      username\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation CreateConversation($user1Id: String!, $user2Id: String!) {\n    createConversation(user1Id: $user1Id, user2Id: $user2Id) {\n      id\n      name\n    }\n  }\n": types.CreateConversationDocument,
    "\n  mutation SendMessage(\n    $conversationId: String!\n    $userId: String!\n    $text: String!\n  ) {\n    sendMessage(conversationId: $conversationId, userId: $userId, text: $text) {\n      id\n      text\n      creationDate\n    }\n  }\n": types.SendMessageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStatus {\n    getStatus {\n      result\n    }\n  }\n"): (typeof documents)["\n  query GetStatus {\n    getStatus {\n      result\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUsers {\n    users {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  query GetUsers {\n    users {\n      id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetConversations {\n    conversations {\n      id\n      name\n      user1 {\n        id\n        username\n      }\n      user2 {\n        id\n        username\n      }\n      messages {\n        id\n        text\n        creationDate\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetConversations {\n    conversations {\n      id\n      name\n      user1 {\n        id\n        username\n      }\n      user2 {\n        id\n        username\n      }\n      messages {\n        id\n        text\n        creationDate\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetConversationsByUser($userId: String!) {\n    conversationsByUser(userId: $userId) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetConversationsByUser($userId: String!) {\n    conversationsByUser(userId: $userId) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($username: String!, $password: String!) {\n    createUser(username: $username, password: $password) {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($username: String!, $password: String!) {\n    createUser(username: $username, password: $password) {\n      id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateConversation($user1Id: String!, $user2Id: String!) {\n    createConversation(user1Id: $user1Id, user2Id: $user2Id) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation CreateConversation($user1Id: String!, $user2Id: String!) {\n    createConversation(user1Id: $user1Id, user2Id: $user2Id) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SendMessage(\n    $conversationId: String!\n    $userId: String!\n    $text: String!\n  ) {\n    sendMessage(conversationId: $conversationId, userId: $userId, text: $text) {\n      id\n      text\n      creationDate\n    }\n  }\n"): (typeof documents)["\n  mutation SendMessage(\n    $conversationId: String!\n    $userId: String!\n    $text: String!\n  ) {\n    sendMessage(conversationId: $conversationId, userId: $userId, text: $text) {\n      id\n      text\n      creationDate\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;