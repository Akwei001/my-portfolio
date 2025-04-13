'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/utils/animations';

interface Resource {
  name: string;
  description: string;
  url: string;
}

interface ResourceCategory {
  category: string;
  items: Resource[];
}

interface ResourcesContentProps {
  resources: ResourceCategory[];
}

export default function ResourcesContent({ resources }: ResourcesContentProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn('up', 0.2)}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Resources
      </h1>
      <div className="space-y-12">
        {resources.map((category) => (
          <div key={category.category}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 