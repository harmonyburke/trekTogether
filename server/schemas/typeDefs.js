const typeDefs = `
type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    trips: [String]
}

type Trip {
    _id: ID!
    tripName: String!
    budget: Float!
    location: String!
    details: String!
    travelers: [User]
}

type Query {
    users: [User]
    trips: [Trip]
}

type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    createTrips(tripName: String!, budget: Float!, location: String!, details: String!): Trip
    joinTrip(tripId: ID!, userId: ID!): Trip
}
`

module.exports = typeDefs;