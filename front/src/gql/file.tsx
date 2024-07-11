import { gql } from "@apollo/client";
import * as React from "react";
import * as Apollo from "@apollo/client";
import * as ApolloReactComponents from "@apollo/client/react/components";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type Conversation = {
  __typename?: "Conversation";
  id: Scalars["ID"]["output"];
  messages: Array<Message>;
  name: Scalars["String"]["output"];
  user1: User;
  user2: User;
};

export type Message = {
  __typename?: "Message";
  creationDate: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  text: Scalars["String"]["output"];
  user: User;
};

export type Mutation = {
  __typename?: "Mutation";
  createConversation: Conversation;
  createUser: User;
  sendMessage: Message;
};

export type MutationCreateConversationArgs = {
  user1Id: Scalars["String"]["input"];
  user2Id: Scalars["String"]["input"];
};

export type MutationCreateUserArgs = {
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type MutationSendMessageArgs = {
  conversationId: Scalars["String"]["input"];
  text: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  conversations: Array<Conversation>;
  conversationsByUser: Array<Conversation>;
  getStatus: Status;
  messagesByConversation: Array<Message>;
  messagesByUsers: Array<Message>;
  users: Array<User>;
};

export type QueryConversationsByUserArgs = {
  userId: Scalars["String"]["input"];
};

export type QueryMessagesByConversationArgs = {
  conversationId: Scalars["String"]["input"];
};

export type QueryMessagesByUsersArgs = {
  user1Id: Scalars["String"]["input"];
  user2Id: Scalars["String"]["input"];
};

export type Status = {
  __typename?: "Status";
  result: Scalars["String"]["output"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"]["output"];
  password: Scalars["String"]["output"];
  username: Scalars["String"]["output"];
};

export type GetStatusQueryVariables = Exact<{ [key: string]: never }>;

export type GetStatusQuery = {
  __typename?: "Query";
  getStatus: { __typename?: "Status"; result: string };
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: "Query";
  users: Array<{ __typename?: "User"; id: string; username: string }>;
};

export type GetConversationsQueryVariables = Exact<{ [key: string]: never }>;

export type GetConversationsQuery = {
  __typename?: "Query";
  conversations: Array<{
    __typename?: "Conversation";
    id: string;
    name: string;
    user1: { __typename?: "User"; id: string; username: string };
    user2: { __typename?: "User"; id: string; username: string };
    messages: Array<{
      __typename?: "Message";
      id: string;
      text: string;
      creationDate: any;
    }>;
  }>;
};

export type GetConversationsByUserQueryVariables = Exact<{
  userId: Scalars["String"]["input"];
}>;

export type GetConversationsByUserQuery = {
  __typename?: "Query";
  conversationsByUser: Array<{
    __typename?: "Conversation";
    id: string;
    name: string;
  }>;
};

export type CreateUserMutationVariables = Exact<{
  username: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser: { __typename?: "User"; id: string; username: string };
};

export type CreateConversationMutationVariables = Exact<{
  user1Id: Scalars["String"]["input"];
  user2Id: Scalars["String"]["input"];
}>;

export type CreateConversationMutation = {
  __typename?: "Mutation";
  createConversation: { __typename?: "Conversation"; id: string; name: string };
};

export type SendMessageMutationVariables = Exact<{
  conversationId: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
  text: Scalars["String"]["input"];
}>;

export type SendMessageMutation = {
  __typename?: "Mutation";
  sendMessage: {
    __typename?: "Message";
    id: string;
    text: string;
    creationDate: any;
  };
};

export const GetStatusDocument = gql`
  query GetStatus {
    getStatus {
      result
    }
  }
`;
export type GetStatusComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetStatusQuery,
    GetStatusQueryVariables
  >,
  "query"
>;

export const GetStatusComponent = (props: GetStatusComponentProps) => (
  <ApolloReactComponents.Query<GetStatusQuery, GetStatusQueryVariables>
    query={GetStatusDocument}
    {...props}
  />
);

/**
 * __useGetStatusQuery__
 *
 * To run a query within a React component, call `useGetStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatusQuery(
  baseOptions?: Apollo.QueryHookOptions<GetStatusQuery, GetStatusQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetStatusQuery, GetStatusQueryVariables>(
    GetStatusDocument,
    options
  );
}
export function useGetStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStatusQuery,
    GetStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetStatusQuery, GetStatusQueryVariables>(
    GetStatusDocument,
    options
  );
}
export function useGetStatusSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetStatusQuery,
    GetStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetStatusQuery, GetStatusQueryVariables>(
    GetStatusDocument,
    options
  );
}
export type GetStatusQueryHookResult = ReturnType<typeof useGetStatusQuery>;
export type GetStatusLazyQueryHookResult = ReturnType<
  typeof useGetStatusLazyQuery
>;
export type GetStatusSuspenseQueryHookResult = ReturnType<
  typeof useGetStatusSuspenseQuery
>;
export type GetStatusQueryResult = Apollo.QueryResult<
  GetStatusQuery,
  GetStatusQueryVariables
>;
export const GetUsersDocument = gql`
  query GetUsers {
    users {
      id
      username
    }
  }
`;
export type GetUsersComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
  "query"
>;

export const GetUsersComponent = (props: GetUsersComponentProps) => (
  <ApolloReactComponents.Query<GetUsersQuery, GetUsersQueryVariables>
    query={GetUsersDocument}
    {...props}
  />
);

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export function useGetUsersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersSuspenseQueryHookResult = ReturnType<
  typeof useGetUsersSuspenseQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const GetConversationsDocument = gql`
  query GetConversations {
    conversations {
      id
      name
      user1 {
        id
        username
      }
      user2 {
        id
        username
      }
      messages {
        id
        text
        creationDate
      }
    }
  }
`;
export type GetConversationsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetConversationsQuery,
    GetConversationsQueryVariables
  >,
  "query"
>;

export const GetConversationsComponent = (
  props: GetConversationsComponentProps
) => (
  <ApolloReactComponents.Query<
    GetConversationsQuery,
    GetConversationsQueryVariables
  >
    query={GetConversationsDocument}
    {...props}
  />
);

/**
 * __useGetConversationsQuery__
 *
 * To run a query within a React component, call `useGetConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConversationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetConversationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetConversationsQuery,
    GetConversationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetConversationsQuery, GetConversationsQueryVariables>(
    GetConversationsDocument,
    options
  );
}
export function useGetConversationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetConversationsQuery,
    GetConversationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetConversationsQuery,
    GetConversationsQueryVariables
  >(GetConversationsDocument, options);
}
export function useGetConversationsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetConversationsQuery,
    GetConversationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetConversationsQuery,
    GetConversationsQueryVariables
  >(GetConversationsDocument, options);
}
export type GetConversationsQueryHookResult = ReturnType<
  typeof useGetConversationsQuery
>;
export type GetConversationsLazyQueryHookResult = ReturnType<
  typeof useGetConversationsLazyQuery
>;
export type GetConversationsSuspenseQueryHookResult = ReturnType<
  typeof useGetConversationsSuspenseQuery
>;
export type GetConversationsQueryResult = Apollo.QueryResult<
  GetConversationsQuery,
  GetConversationsQueryVariables
>;
export const GetConversationsByUserDocument = gql`
  query GetConversationsByUser($userId: String!) {
    conversationsByUser(userId: $userId) {
      id
      name
    }
  }
`;
export type GetConversationsByUserComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetConversationsByUserQuery,
    GetConversationsByUserQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetConversationsByUserQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetConversationsByUserComponent = (
  props: GetConversationsByUserComponentProps
) => (
  <ApolloReactComponents.Query<
    GetConversationsByUserQuery,
    GetConversationsByUserQueryVariables
  >
    query={GetConversationsByUserDocument}
    {...props}
  />
);

/**
 * __useGetConversationsByUserQuery__
 *
 * To run a query within a React component, call `useGetConversationsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetConversationsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetConversationsByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetConversationsByUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetConversationsByUserQuery,
    GetConversationsByUserQueryVariables
  > &
    (
      | { variables: GetConversationsByUserQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetConversationsByUserQuery,
    GetConversationsByUserQueryVariables
  >(GetConversationsByUserDocument, options);
}
export function useGetConversationsByUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetConversationsByUserQuery,
    GetConversationsByUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetConversationsByUserQuery,
    GetConversationsByUserQueryVariables
  >(GetConversationsByUserDocument, options);
}
export function useGetConversationsByUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetConversationsByUserQuery,
    GetConversationsByUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetConversationsByUserQuery,
    GetConversationsByUserQueryVariables
  >(GetConversationsByUserDocument, options);
}
export type GetConversationsByUserQueryHookResult = ReturnType<
  typeof useGetConversationsByUserQuery
>;
export type GetConversationsByUserLazyQueryHookResult = ReturnType<
  typeof useGetConversationsByUserLazyQuery
>;
export type GetConversationsByUserSuspenseQueryHookResult = ReturnType<
  typeof useGetConversationsByUserSuspenseQuery
>;
export type GetConversationsByUserQueryResult = Apollo.QueryResult<
  GetConversationsByUserQuery,
  GetConversationsByUserQueryVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
      username
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export type CreateUserComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
  "mutation"
>;

export const CreateUserComponent = (props: CreateUserComponentProps) => (
  <ApolloReactComponents.Mutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >
    mutation={CreateUserDocument}
    {...props}
  />
);

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const CreateConversationDocument = gql`
  mutation CreateConversation($user1Id: String!, $user2Id: String!) {
    createConversation(user1Id: $user1Id, user2Id: $user2Id) {
      id
      name
    }
  }
`;
export type CreateConversationMutationFn = Apollo.MutationFunction<
  CreateConversationMutation,
  CreateConversationMutationVariables
>;
export type CreateConversationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateConversationMutation,
    CreateConversationMutationVariables
  >,
  "mutation"
>;

export const CreateConversationComponent = (
  props: CreateConversationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateConversationMutation,
    CreateConversationMutationVariables
  >
    mutation={CreateConversationDocument}
    {...props}
  />
);

/**
 * __useCreateConversationMutation__
 *
 * To run a mutation, you first call `useCreateConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConversationMutation, { data, loading, error }] = useCreateConversationMutation({
 *   variables: {
 *      user1Id: // value for 'user1Id'
 *      user2Id: // value for 'user2Id'
 *   },
 * });
 */
export function useCreateConversationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateConversationMutation,
    CreateConversationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateConversationMutation,
    CreateConversationMutationVariables
  >(CreateConversationDocument, options);
}
export type CreateConversationMutationHookResult = ReturnType<
  typeof useCreateConversationMutation
>;
export type CreateConversationMutationResult =
  Apollo.MutationResult<CreateConversationMutation>;
export type CreateConversationMutationOptions = Apollo.BaseMutationOptions<
  CreateConversationMutation,
  CreateConversationMutationVariables
>;
export const SendMessageDocument = gql`
  mutation SendMessage(
    $conversationId: String!
    $userId: String!
    $text: String!
  ) {
    sendMessage(conversationId: $conversationId, userId: $userId, text: $text) {
      id
      text
      creationDate
    }
  }
`;
export type SendMessageMutationFn = Apollo.MutationFunction<
  SendMessageMutation,
  SendMessageMutationVariables
>;
export type SendMessageComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    SendMessageMutation,
    SendMessageMutationVariables
  >,
  "mutation"
>;

export const SendMessageComponent = (props: SendMessageComponentProps) => (
  <ApolloReactComponents.Mutation<
    SendMessageMutation,
    SendMessageMutationVariables
  >
    mutation={SendMessageDocument}
    {...props}
  />
);

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      conversationId: // value for 'conversationId'
 *      userId: // value for 'userId'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useSendMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendMessageMutation,
    SendMessageMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(
    SendMessageDocument,
    options
  );
}
export type SendMessageMutationHookResult = ReturnType<
  typeof useSendMessageMutation
>;
export type SendMessageMutationResult =
  Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<
  SendMessageMutation,
  SendMessageMutationVariables
>;