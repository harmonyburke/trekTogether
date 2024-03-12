import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      username
      email
      password
    }
  }
`;

export const CREATE_TRIP = gql`
  mutation createTrip(
    $budget: Int!
    $where: String!
    $description: String!
    $departureDate: String!
    $returnDate: String!
  ) {
    createTrip(
      budget: $budget
      where: $where
      description: $description
      departureDate: $departureDate
      returnDate: $returnDate
    ) {
      _id
      budget
      where
      description
      departureDate
      returnDate
    }
  }
`;

// this one may need some work
export const JOIN_TRIP = gql`
  mutation joinTrip($tripId: ID!, $userId: ID!) {
    joinTrip(tripId: $tripID, userId: $userId) {
      _id
    }
  }
`;

export const UPDATE_TRIP = gql`
  mutation updateTrip(
    $tripId: ID!
    $budget: Float!
    $where: String!
    $description: String!
  ) {
    updateTrip(
      tripId: $tripId
      budget: $budget
      where: $where
      description: $description
    ) {
      _id
      budget
      where
      description
    }
  }
`;

export const DELETE_TRIP = gql`
  mutation deleteTrip($tripId: ID!) {
    deleteTrip(tripId: $tripId) {
      _id
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
