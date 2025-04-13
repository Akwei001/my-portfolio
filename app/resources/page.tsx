import Navigation from '../components/layout/Navigation';
import ResourcesContent from './ResourcesContent';

const resources = [
  {
    category: 'Design',
    items: [
      {
        name: 'Figma',
        description: 'Design and prototype tool',
        url: 'https://www.figma.com',
      },
      {
        name: 'Dribbble',
        description: 'Design inspiration',
        url: 'https://dribbble.com',
      },
    ],
  },
  {
    category: 'Development',
    items: [
      {
        name: 'Next.js',
        description: 'React framework',
        url: 'https://nextjs.org',
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework',
        url: 'https://tailwindcss.com',
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900">
      <Navigation />
      <ResourcesContent resources={resources} />
    </main>
  );
} 