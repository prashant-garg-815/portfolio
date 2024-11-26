export type Date = {
  month: String;
  year: Number;
}
export type Experience = {
  startDate: Date
  endDate?: Date
  designation: String
  organisation: String
  details: string[]
  techStack: String[]
}




export const NAME = 'Prashant Garg';
export const ROLE = 'Software Engineer II';
export const TAGLINE = 'With a problem-solving mindset, I’m always drawn to exploring new challenges and experiences.'
export const ABOUT_ME = [
  'I am a developer passionate about solving problems. I actively engage in solving complex problems, clearing up bottlenecks.',
  'My current role revolves around improving the performance of frontend layer of the search engine. Over the years tonne of features have been added and has made the UI very bulky, laggy and tightly coupled with redux. So currently, we are dividing the UI into functional micro-apps to make components modular and easy to reuse and more optimized.',
  'In my spare time I like to spend time reading books, watching F1, exploring parts of the city and traveling.',
]
export const EXPERIENCE: Experience[] = [
  {
    startDate: {
      month: 'Oct',
      year: 2022
    },

    designation: 'Software Engineer II',
    organisation: 'AlphaSense',
    details: [
      'Implemented Source Operator, allowing user to quickly apply the required document source without the need to navigate to a separate modal and search from over thousands of types',
      'Worked on transitioning the filters to a more modular and easy read and more generic layout',
      'Built the UI layer of the Assistant, a AI powered tool which give you relevant insights from the document',
      'Refactored tightly couple features into generic micro-apps allowing various teams to reuse them for their purpose without the need to create one for themselves thus reducing code duplication'
    ],
    techStack: ['ReactJs', 'Node.js', 'graphQL']
  }, {
    startDate: {
      month: 'June',
      year: 2022
    },
    endDate: {
      month: 'Oct',
      year: 2022
    },
    designation: 'Software Engineer',
    organisation: 'Sentieo, An AlphaSense Company',
    details: [
      'Implemented a in-house feature control management system to eliminate the reliance of SalesForce for it'
    ],
    techStack: ['ReactJs', 'gRPC']
  }, {
    startDate: {
      month: 'May',
      year: 2021
    },
    endDate: {
      month: 'June',
      year: 2022
    },
    designation: 'System Engineer',
    organisation: 'TCS',
    details: [
      'Built an <strong style="color: #e5e7eb">Ansible</strong> installer to install and setup <strong>Postgres</strong> and <strong>RabbitMq</strong>.',
      'Added two way authentication for postgres',
      'PocketIgnio ka DB normalisation'
    ],
    techStack: ['Ansible', 'Bash Scripting', 'SprintBoot']
  }
]

export const disclaimer = "Inspired by Brittany's design and developed entirely by yours truly. If you want to have one for yourself you can checkout <a href='https://www.google.com'>this repo</a>. Feel free to for it. It takes efforts to build things from scratch so request you to give due credits!"