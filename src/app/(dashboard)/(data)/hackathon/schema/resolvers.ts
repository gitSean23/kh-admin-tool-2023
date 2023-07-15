import dummyHackathon from "./dummyHackathon";

const resolvers = {
  Query: {
    getHackathon(name: string) {
      return dummyHackathon;
    },

    getAllHackathons() {
      return dummyHackathon;
    },
  },
};

export default resolvers;
