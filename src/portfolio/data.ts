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
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vehicula nulla. Aliquam diam ligula, aliquam at accumsan at, tincidunt cursus turpis. Sed eleifend vulputate consequat. Donec tempus dui sed fringilla pharetra. Nunc vitae quam ultricies, faucibus nisl nec, congue diam. Mauris iaculis nulla lectus, nec venenatis metus imperdiet vitae. Ut eget massa ligula.',
  'Praesent pharetra, velit suscipit luctus imperdiet, orci dui vehicula nisl, sit amet ullamcorper risus nisl nec libero. Duis consequat lobortis nulla id dapibus. Vestibulum laoreet enim id tortor faucibus, vel congue ligula sagittis. Praesent viverra dolor maximus nulla malesuada posuere. Nullam tincidunt imperdiet nibh a ultrices. Fusce convallis risus eleifend massa dictum mattis. Maecenas pretium sapien tortor, a blandit risus facilisis ac.'
]
export const EXPERIENCE: Experience[] = [
  {
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
      'Python gRPC service for feature management'
    ],
    techStack: ['React', 'gRPC']
  }, {
    startDate: {
      month: 'Oct',
      year: 2022
    },

    designation: 'Software Engineer II',
    organisation: 'AlphaSense',
    details: [
      'Source Operator', 'Vertical Filters', 'Assistant', 'Statement Panel'
    ],
    techStack: ['React', 'Node.js', 'graphQL']
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
      'Python gRPC service for feature management'
    ],
    techStack: ['React', 'gRPC']
  }, {
    startDate: {
      month: 'Oct',
      year: 2022
    },

    designation: 'Software Engineer II',
    organisation: 'AlphaSense',
    details: [
      'Source Operator', 'Vertical Filters', 'Assistant', 'Statement Panel'
    ],
    techStack: ['React', 'Node.js', 'graphQL']
  }
]

export const disclaimer = "Inspired by Brittany's design and developed entirely by yours truly. If you want to have one for yourself you can checkout <a href='https://www.google.com'>this repo</a>. Feel free to for it. It takes efforts to build things from scratch so request you to give due credits!"