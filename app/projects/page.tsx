import ProjectsContent from './ProjectsContent';

// Sample projects data - you can replace this with your actual projects
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, animations, and a blog section.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://your-portfolio.com',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and secure checkout.',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://your-ecommerce.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    tags: ['React', 'Firebase', 'Redux', 'Material UI'],
    github: 'https://github.com/yourusername/taskmanager',
    live: 'https://your-taskmanager.com',
  },
  {
    title: 'Real-time Chat',
    description: 'A real-time chat application with private messaging, group chats, and file sharing.',
    tags: ['Socket.io', 'React', 'Node.js', 'Express'],
    github: 'https://github.com/yourusername/chat-app',
    live: 'https://your-chat-app.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that provides real-time weather data and forecasts with interactive maps.',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/weather-dashboard',
    live: 'https://your-weather-dashboard.com',
  },
  {
    title: 'Recipe Finder',
    description: 'A recipe finder application that helps users discover and save recipes based on ingredients.',
    tags: ['Next.js', 'Spoonacular API', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/yourusername/recipe-finder',
    live: 'https://your-recipe-finder.com',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 pt-16">
      <ProjectsContent projects={projects} />
    </main>
  );
} 