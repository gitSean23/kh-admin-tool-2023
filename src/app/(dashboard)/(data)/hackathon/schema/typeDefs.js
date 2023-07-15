"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@apollo/client");
var typeDefs = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    getHackathon(name: String!): Hackathon # might require id in the future\n    getAllHackathons: [Hackathon]\n  }\n\n  type Hackathons {\n    hackathonList: [Hackathon]!\n  }\n\n  # input HackathonInput {\n  #     name: String!\n  #     year: Int\n  #     month: Int\n  #     day: Int\n  #     events: [String]\n  #     attendees: [String]\n  #     numAttendees: Int\n  # }\n\n  type Hackathon {\n    id: ID # Optional, if user doesn't specify an id, we can generate a random new one. We can also prevent dups by using a bloom filter\n    name: String!\n    numAttendees: Int\n    attendees: [String]\n    events: [String]\n    year: Int!\n    month: Int!\n    day: Int!\n  }\n"], ["\n  type Query {\n    getHackathon(name: String!): Hackathon # might require id in the future\n    getAllHackathons: [Hackathon]\n  }\n\n  type Hackathons {\n    hackathonList: [Hackathon]!\n  }\n\n  # input HackathonInput {\n  #     name: String!\n  #     year: Int\n  #     month: Int\n  #     day: Int\n  #     events: [String]\n  #     attendees: [String]\n  #     numAttendees: Int\n  # }\n\n  type Hackathon {\n    id: ID # Optional, if user doesn't specify an id, we can generate a random new one. We can also prevent dups by using a bloom filter\n    name: String!\n    numAttendees: Int\n    attendees: [String]\n    events: [String]\n    year: Int!\n    month: Int!\n    day: Int!\n  }\n"])));
exports.default = typeDefs;
var templateObject_1;
