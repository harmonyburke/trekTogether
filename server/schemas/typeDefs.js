const typeDefs = `#graphql
type Trip {
    _id: ID
    budget: Int
    where: String!
    description: String
    userId: ID!
    username: String
    img: String
    departureDate: String!
    returnDate: String!
    createdAt: String!
    joined: Boolean
}

type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    trips: [Trip]
}

type Auth {
    username: String!
    email: String!
    password: String!
    token: ID
    user: User
}

type Query {
    users: [User]
    trips: [Trip]
    trip(
    tripId: ID!
    ): Trip
}

type Mutation {
    addUser(
        username: String!
        email: String!
        password: String!
    ): Auth
    
    createTrip(
        budget: Int!
        where: String!
        description: String!
        departureDate: String!
        returnDate: String!
        
    ): Trip

    joinTrip (tripId: ID!, userId: ID!): Trip

    updateTrip(
            tripId: ID!
            budget: Float
            where: String
            description: String
            joined: Boolean
    ): Trip

    
    login(email: String!, password: String!): Auth


    deleteTrip(
            tripId: ID!
        ): Trip
}
`;

module.exports = typeDefs;
