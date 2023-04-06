# 2023 KnightHacks Admin Tool

This is the new repo for KnightHacks' administration tool built in Next.js with the app directory. It is to be used by our hackathon organizers to manage the data of all hackathons hosted by KnightHacks.

## Installation

```shell
git clone git@github.com:KnightHacks/admin-tool-2023.git
cd admin-tool-2023
npm i
```

Before going any further, you will need to add an .env.local file at the root of your directory containing the following contents:

```env
API_ENDPOINT= # https://api-dev.knighthacks.org/ or http://localhost:4000/
```

## Getting Started

To run a live development server, run the following script in a terminal:

```shell
npm run dev
```

This will host the admin tool locally at <http://localhost:3000/> by default. As you make updates to the code, they should be reflected automatically on the page

Learn more about the Next.js app directory here <https://beta.nextjs.org/docs/app-directory-roadmap>
