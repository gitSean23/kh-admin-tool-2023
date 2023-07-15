import {gql} from "@apollo/client";

const typeDefs = gql`
  type Query {
    getHackathon(name: String!): Hackathon # might require id in the future
    getAllHackathons: [Hackathon]
  }

  type Hackathons {
    hackathonList: [Hackathon]!
  }

  # input HackathonInput {
  #     name: String!
  #     year: Int
  #     month: Int
  #     day: Int
  #     events: [String]
  #     attendees: [String]
  #     numAttendees: Int
  # }

  type Hackathon {
    id: ID # Optional, if user doesn't specify an id, we can generate a random new one. We can also prevent dups by using a bloom filter
    name: String!
    numAttendees: Int
    attendees: [String]
    events: [String]
    year: Int!
    month: Int!
    day: Int!
  }
`;

export default typeDefs;
