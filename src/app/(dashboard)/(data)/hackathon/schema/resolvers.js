"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dummyHackathon_1 = require("./dummyHackathon");
var resolvers = {
    Query: {
        getHackathon: function (name) {
            return dummyHackathon_1.default;
        },
        getAllHackathons: function () {
            return dummyHackathon_1.default;
        },
    },
};
exports.default = resolvers;
