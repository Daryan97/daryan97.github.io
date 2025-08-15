// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Daryan97', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Car Dealership',
          description:
            'A Mini project that is developed using Spring Boot Framework.',
          imageUrl:
            'https://img.freepik.com/free-photo/business-parking-empty-carpark-abstract_1203-5195.jpg',
          link: 'https://car.daryandev.com',
        },
        {
          title: 'Notes App',
          description:
            'A simple notes app that is developed using Python Flask.',
          imageUrl:
            'https://img.freepik.com/free-photo/office-desk-with-pencils-notebook-cards-keyboard_23-2147647796.jpg',
          link: 'https://notes.daryandev.com',
        },
      ],
    },
  },
  seo: {
    title: 'Daryan Latif',
    description: 'Portfolio of Daryan Latif - Software Engineer, Web Developer, and Application Developer.',
    imageURL: 'https://ik.imagekit.io/daryandev/My_Picture2_square.jpg',
  },
  social: {
    linkedin: 'Daryan997',
    twitter: 'Daryan997',
    mastodon: '',
    researchGate: '',
    facebook: 'Daryan997',
    instagram: 'daryan_latif',
    reddit: 'Daryan997',
    threads: 'daryan_latif',
    youtube: 'Daryan997', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'Daryan',
    stackoverflow: '6707321/daryan', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'Daryan997',
    website: 'https://daryandev.com',
    phone: '+9647702170491',
    email: 'contact@daryandev.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1GuusImEp7Q7_64_Zd8yTr8_6vdPG2AKj/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'C++',
    'PHP',
    'HTML',
    'CSS',
    'JavaScript',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Spring Boot',
    'Python',
    'Oracle Database',
  ],
  experiences: [
    {
      company: 'Star Saeed',
      position: 'IT Specialist',
      from: 'July 2021',
      to: 'November 2021',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Leadership Skills',
      body: 'Leader\'s Dream',
      year: 'May 22, 2021',
      link: '',
    },
    {
      name: 'AWS Academy Cloud Foundations',
      body: 'Amazon Web Services',
      year: 'May 29, 2022',
      link: 'https://www.credly.com/badges/d66c12bd-7d6e-494a-9b5c-6471e32f5d13/public_url',
    },
    {
      name: 'Certificate of participation',
      body: 'Certificate of participation in the seminar "Quantum Biology"',
      year: 'December 20, 2023',
      link: 'https://drive.google.com/file/d/1sMjTCPmo79av20ysdyzKoI9-_mqdldKU/view?usp=sharing',
    },
    {
      name: 'Introduction to Web Development',
      body: 'Certificate of contribution as assistant to the completion of the course',
      year: 'April 7, 2024',
      link: 'https://drive.google.com/file/d/1-IWnAFodT_NKgBLeRcbvtSfMsbBv4x2B/view?usp=sharing',
    },
  ],
  educations: [
    {
      institution: 'Kurdistan Technical Institute',
      degree: 'Diploma in Computer Science',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'Qaiwan International University',
      degree: 'Bachelor in Software Engineering',
      from: '2021',
      to: 'present',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'daryan', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-FD5HN364F7', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3358455',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#01558f',
      secondary: '#007dae',
      accent: '#00a3b2',
      neutral: '#01558f',
      'base-100': '#01558f',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
