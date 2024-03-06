const typeDefs = `
type Trip {
    _id: ID
    where: String!
    departureDate: String!
    returnDate: String!
    budget: Float!
    travelers: [User]
    description: String!
    createdAt: String!
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
    trip(
        _id: ID!
        ): Trip
}

type Mutation {
    addUser(
        name: String!
        email: String!
        password: String!
    ): Auth

    createTrip(
        where: String!
        departureDate: String!
        returnDate: String!
        budget: Float!
        description: String!
        createdAt: String!
    ): Trip

    joinTrip(
        tripId: ID!
        userId: ID!
    ): Trip

    updateTrip(
         _id: ID!
        where: String
        departureDate: String
        returnDate: String
        budget: Float
        description: String
        createdAt: String
    ): Trip

    deleteTrip(
        tripId: ID!
    ): ID

     login(
        email: String!
        password: String!
    ): Auth
}
`

module.exports = typeDefs;