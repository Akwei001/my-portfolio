import ProjectsContent from './ProjectsContent';

// Sample projects data - you can replace this with your actual projects
const projects = [
  {
    title: 'HiraKana Game',
    description: 'A personal project to practice coding and to help with studying for the Japanese Language Proficiency test level 5. The app consist of a Hiragana/Katakana quiz, a memory game and vocabulary list',
    image: '/gamehome.png',
    tags: ['React', 'React Router', 'Tailwind CSS', 'Cypress'],
    github: 'https://extraordinary-pony-659a22.netlify.app',
    live: 'https://github.com/Akwei001/Jgame',
  },
  {
    title: 'Amplify Player',
    description: 'A full-stack music player app created using AWS amplify. Users can create a login, and upload their own files to the database.The app uses a React front end connected to a Dynamo Db database via Graph Ql.',
    image: '/Amplify Player.png',
    tags: ['JavaScript', 'React', 'AWS', 'Graph QL', 'DynamoDb'],
    github: 'https://github.com/Akwei001/amplify-player',
    live: 'https://master.drp46atynvtc.amplifyapp.com/',
  },
  {
    title: 'Raduno',
    description: 'Catch up without the fuss. Our app allows a group of people (friends, family, colleagues etc) to plan social events by making it easy to set up polls and vote on on the event location, event dates etc. It is solving the problems around organising activities for a group of people, and the friction that is usually involved in getting group decisions quickly and democratically.',
    tags: ['React', 'CSS', 'Postgresql'],
    github: 'https://github.com/Akwei001/final-project-front-end-hexcode',
    live: 'https://raduno-plans.netlify.app/',
  },
  {
    title: 'PinIt',
    description: 'Save your links. We were give a task to improve the lives of fellow Bootcampers. Our idea was an app that would allow bootcampers to save links to articles and videos.',
    tags: ['React ', 'Postgresql', 'CSS'],
    github: 'https://github.com/SchoolOfCode/national-project-week-professional-artists',
    live: 'https://pinitapp.netlify.app/',
  },
   {
    title: 'Sanity e-commerce',
    description: 'A fully responsive e-commerce application with payment functionality. It is built using NextJS featuring serverside rendering and static generation, as well as React context for state management. Sanity was used for content management, allowing clients to change the home page and product details. Stripe is fully integrated with all advanced cart functionalities to allow payments to be taken.',
    tags: ['NextJS', 'Sanity', 'Stripe'],
    github: 'https://github.com/Akwei001/e-commerce',
    live: 'https://akwei-ecommerce-sanity-stripe.vercel.app/',
  },
  {
    title: 'Property landing page',
    description: 'A landing page for a property rental company. It is built using NextJS and TailwindCSS.',
    tags: ['NextJS', 'TailwindCSS'],
    github: 'https://github.com/Akwei001/property-landing-page',
    live: 'https://vercel.com/akwei001/property-landing-page-z2qc/H4USCkijzN5yjcQPnhiF12LR2xv6',
  }, 
  //  {
  //   title: '',
  //   description: '',
  //   tags: ['', '', '', ''],
  //   github: '',
  //   live: '',
  // },

];

export default function ProjectsPage() {
  return (
    <main className="pt-16 min-h-screen bg-white dark:bg-zinc-900">
      <ProjectsContent projects={projects} />
    </main>
  );
} 