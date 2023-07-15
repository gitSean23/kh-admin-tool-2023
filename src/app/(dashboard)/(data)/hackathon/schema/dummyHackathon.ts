// Schema Reference
// --------------------
// id: ID 
// name: String!
// numAttendees: Int
// attendees: [String]
// events: [String]
// year: Int!
// month: Int!
// day: Int!

const dummyHackathon = [
    {
        id: 420,
        name: "KH 2023",
        year: 2023,
        month: 9,
        day: 12
    },

    {
        id: 421,
        name: "KH 2021",
        numAttendees: 989,
        year: 2021,
        month: 10,
        day: 14
    },

    {
        id: 422,
        name: "KH 2022",
        numAttendees: 456,
        year: 2022,
        month: 10,
        day: 8
    }
]

export default dummyHackathon