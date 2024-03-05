const typeDefs = `
type Trip {
    _id: ID
    tripName: String!
    budget: Float!
    location: String!
    details: String!
    travelers: [User]
}

type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    trips: [Trip]
}

type Auth {
    token: ID
    user: User
}

type Query {
    users: [User]
    trips: [Trip]
    trip(_id: ID!): Trip
}

type Mutation {
    addUser(
        name: String!
        email: String!
        password: String!
        ): Auth
        createTrip(
            tripName: String!
            budget: Float!
            location: String!
            details: String!
        ): Trip
        joinTrip(tripId: ID!, userId: ID!): Trip
        updateTrip(
            _id: ID!
            tripName: String
            budget: Float
            location: String
            details: String
        ): Trip
        login(email: String!, password: String!): Auth
}
`

module.exports = typeDefs;