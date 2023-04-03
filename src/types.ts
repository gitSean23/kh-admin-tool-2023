import { faker } from "@faker-js/faker";

export type Attendee = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  pronouns: Pronouns;
  age: number;
  role: string;
  oAuth: string;
  isAccepted: boolean;
  isConfirmed: boolean;
  isCheckedIn: boolean;
  discord: string;
  userLink: string;
  school: string;
};

// Generate dummy attendees
export function generateRandomAttendees(length: number): Attendee[] {
  let attendees: Attendee[] = [];
  for (let i = 0; i < length; i++) {
    attendees.push({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      pronouns: {
        objective: faker.word.noun(),
        subjective: faker.word.noun(),
      },
      age: faker.datatype.number(100),
      role: faker.name.jobTitle(),
      oAuth: faker.word.noun(),
      isAccepted: false,
      isConfirmed: false,
      isCheckedIn: false,
      discord: faker.internet.userName(),
      userLink: faker.internet.url(),
      school: faker.company.name(),
    });
  }
  return attendees;
}

export type Event = {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  hackathon: Hackathon;
  id: string;
  location: string;
};

export type User = {
  age?: number;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  hackathons: Hackathon[];
  id: string;
  phoneNumber: string;
  pronouns: Pronouns;
  role: Role;
};

export type Pronouns = {
  objective: string;
  subjective: string;
};

export type Role = "Admin" | "Normal" | "Owns" | "Sponsor";

export type Sponsor = {
  name: string;
  description?: String;
  hackathons: Hackathon[];
  id: string;
  logo?: string;
  since: Date;
  tier: string;
  website?: string;
};

export type HackathonTier =
  | "Bronze"
  | "Silver"
  | "Gold"
  | "Platinum"
  | "Custom";

export const tiers = ["Bronze", "Silver", "Gold", "Platinum", "Custom"];

export function isValidTier(value: string) {
  return tiers.includes(value);
}

export function getAmountFromTier(tier: string) {
  switch (tier) {
    case "Bronze":
      return 3000;
    case "Silver":
      return 5000;
    case "Gold":
      return 7000;
    case "Platinum":
      return 10000;
    default:
      return 0;
  }
}

export function generateRandomSponsors(length: number) {
  let sponsors: Sponsor[] = [];
  for (let i = 0; i < length; i++) {
    sponsors.push({
      name: faker.company.name(),
      description: faker.lorem.paragraph(),
      hackathons: [],
      id: faker.datatype.uuid(),
      logo: faker.image.imageUrl(),
      since: new Date(),
      tier: faker.helpers.arrayElement(tiers),
      website: faker.internet.url(),
    });
  }
  return sponsors;
}

export type Hackathon = {
  attendees: User[];
  events: Event[];
  id: string;
  sponsors: Sponsor[];
  startDate: Date;
  endDate: Date;
  status: HackathonStatus;
  term: Term;
};

export type Term = {
  semester: Semester;
  year: number;
};

export type HackathonStatus = "Future" | "Past" | "Present";

export type Semester = "Fall" | "Spring" | "Summer";

export let dummyHackathonData: Hackathon[] = [
  {
    attendees: [],
    events: [],
    id: "1234567890",
    sponsors: [],
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
    status: "Present",
    term: {
      semester: "Fall",
      year: 2022,
    },
  },
];
