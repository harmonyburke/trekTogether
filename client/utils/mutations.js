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
mutation updateTrip($tripId: ID!, $budget: Float!, $where: String!, $description:String! ){
    updateTrip(tripId: $tripId, budget: $budget, where: $where, description: $description){
        _id
        budget
        where
        description
    }
}`;

export const DELETE_TRIP =gql`
mutation deleteTrip($tripId: ID!){
    deleteTrip(tripId: $tripID){
        _id
    }
}
`;


export const LOGIN= gql`
mutation login($email: String, $password: String){
    login (email: $email, password: $password ){
        token
        user{
            _id
            name
        }
    }
}
`