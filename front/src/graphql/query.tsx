import { gql } from "@apollo/client";

const GET_STATUS = gql`
  query GetStatus {
    getStatus {
      result
    }
  }
`;

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
    }
  }
`;

const GET_CONVERSATIONS = gql`
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

const GET_CONVERSATIONS_BY_USER = gql`
  query GetConversationsByUser($userId: String!) {
    conversationsByUser(userId: $userId) {
      id
      name
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
      username
    }
  }
`;

const CREATE_CONVERSATION = gql`
  mutation CreateConversation($user1Id: String!, $user2Id: String!) {
    createConversation(user1Id: $user1Id, user2Id: $user2Id) {
      id
      name
    }
  }
`;

const SEND_MESSAGE = gql`
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
