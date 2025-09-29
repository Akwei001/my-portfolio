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
      {
        name: 'Coolors',
        description: 'Palette generators for design inspiration',
        url: 'https://coolors.co',
      },
      {
        name: 'Unsplash',
        description: 'Free stock images for web design',
        url: '',
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
  // Add more resources as needed
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 pt-16">
      <ResourcesContent resources={resources} />
    </main>
  );
} 