const typeDefs = `
type Trip {
    _id: ID
    budget: Int
    where: String!
    description: String
    user: String!
    img: String
    departureDate: String!
    returnDate: String!
    createdAt: String!
    joined: Boolean
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
        budget: Int!
        where: String!
        description: String!
        user: ID!
        img: String
        departureDate: String!
        returnDate: String!
        joined: Boolean!
    ): Trip

    joinTrip (tripId: ID!, userId: ID!): Trip

    updateTrip(
            _id: ID!
            tripName: String
            budget: Float
            where: String
            description: String
    ): Trip

        login(email: String!, password: String!): Auth
}

deleteTrip(
    tripId: ID!
): ID
`




module.exports = typeDefs;