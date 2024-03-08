import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($name: String!, $email: String!, $password:String!){
    addUser(name: $name, email: $email, password: $password){
        name
        email
        password
    }
}`;

export const CREATE_TRIP= gql`
mutation createTrip($userId: ID!, $budget:Int!, $where:String!, $description: String!, $departureDate:String!, $returnDate:String!, $img: String, $joined: Boolean!){
    createTrip(userdId: $userId, budget:$budget, where: $where, description: $description, departureDate: $departureDate, returnDate:$returnDate, img: $img, joined:$joined){
        _id
        budget
        where
        description
        departureDate
        returnDate
        img
        joined
    }
}`;

// this one may need some work
export const JOIN_TRIP=gql`
mutation joinTrip($tripId:ID!, $userId: ID!){
    joinTrip(tripId: $tripID, userId: $userId){
        _id
    }
}`;

export const UPDATE_TRIP =gql`
mutation updateTrip($tripId: ID!, $tripName: String!, $budget: Float!, $location: String!, $details:String! ){
    updateTrip(tripId: $tripId, tripName: $tripName, budget: $budget, location: $location, details: $details){
        _id
        budget
        location
        details
    }
}`;

export const DELETE_TRIP =gql`
mutation deleteTrip($tripId: ID!){
    deleteTrip(tripId: $tripID){
        _id
    }
}
`;