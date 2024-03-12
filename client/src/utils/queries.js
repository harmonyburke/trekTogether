import { gql } from "@apollo/client";

export const QUERY_TRIPS = gql`
  query allTrips {
    trips {
      _id
      budget
      where
      description
      userId
      username
      # img
      departureDate
      returnDate
      createdAt
      joined
    }
  }
`;

export const QUERY_SINGLE_TRIP = gql`
  query singleTrip($tripId: ID!) {
    trip(tripId: $tripId) {
      _id
      budget
      where
      description
      userId
      username
      # img
      departureDate
      returnDate
      createdAt
      joined
    }
  }
`;

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      password
      trips
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($usedId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      password
      trips
    }
  }
`;
