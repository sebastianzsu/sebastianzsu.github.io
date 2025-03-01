import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Sebastian',
  subtitle: "I'm a full stack software engineer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'Hi, I am a Full Stack Software Development Engineer with 5+ years of experience and expertise in Business-driven applications, Data Analytics, Ecommerce software, and growth engineering.',
  paragraphTwo: '',
  paragraphThree: '',
  resume:
    'https://github.com/sebastianzsu/my-personal-blog/blob/main/src/context/Sebastian-resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'messaging.jpg',
    title: 'In-App messaging',
    info:
      'Designed and implemented an in-app messaging service for buyers and sellers to communicate (Sending texts and images) in online marketplace',
    info2:
      'Implemented APIs to store and retreive recent contacts, tagged conversations, and unread messages count',
    info3: 'Developed notification system integrated with Twilio’s API to improve user engagements',
    info4: 'Developed notification system integrated with Twilio’s API to improve user engagements',
    url: 'Lead implementation of new feature that adds broadcast message service support',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'iam.jpg',
    title: 'IAM: Identity and Access Management',
    info:
      'Designed and implemented an Identity and Access control management service with RBAC for an internal customer care portal',
    info2:
      'Built RESTful API for (CRUD) users, roles, and permissions, and create/delete user-to-roles and role-to-permissions mapping',
    info3:
      'Implemented activity log for read/write operations for important resources using Spring AOP with multi-threading',
    info4: 'Implemented schedule task and smtp email service for notification of change and alerts',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'flink.png',
    title: 'Apache Flink Optimization',
    info:
      'Built a streaming data application to aggregate search data and visualize search event click-through rate for travel marketing channels such as top 50 travel destinations',
    info2:
      'Made substantial improvements in terms of query time, latency, throughput, and cached data in database',
    info3: '',
    info4: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'database.png',
    title: 'Relational Database Management System',
    info:
      ' Built a streaming data application to aggregate search data and visualize search event click-through rate for travel marketing channels such as top 50 travel destinations',
    info2:
      'Made substantial improvements in terms of query time, latency, throughput, and cached data in database',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Email: sebzsu1299@gmail.com',
  btn: '',
  email: 'sebzsu1299@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/sebzsu1299',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sebzsu1299/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sebastianzsu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
