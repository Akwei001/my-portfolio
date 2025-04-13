'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/utils/animations';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

interface BlogContentProps {
  posts: BlogPost[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn('up', 0.2)}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {post.description}
            </p>
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </Link>
        ))}
      </div>
    </motion.div>
  );
} 