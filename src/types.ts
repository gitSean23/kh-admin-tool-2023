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

export function generateAttendees(): Attendee[] {
  let attendees: Attendee[] = [];
  for (let i = 0; i < 10; i++) {
    attendees.push({
      id: (i + 1).toString(),
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      phoneNumber: "1234567890",
      pronouns: {
        objective: "he/him",
        subjective: "him",
      },
      age: 18,
      role: "Attendee",

      isAccepted: true,
      isConfirmed: true,
      isCheckedIn: true,
      discord: "JohnDoe#1234",
      userLink: "https://www.google.com",
      school: "UCF",
      oAuth: "Google",
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

export function getAmount(tier: string) {
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
