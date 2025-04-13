'use client';

import { MDXRemote } from 'next-mdx-remote';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/utils/animations';
import { ComponentProps } from 'react';

interface MDXContentProps {
  source: {
    compiledSource: string;
    scope?: Record<string, unknown>;
    frontmatter?: Record<string, unknown>;
  };
}

const components = {
  h1: (props: ComponentProps<'h1'>) => (
    <h1
      className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
      {...props}
    />
  ),
  h2: (props: ComponentProps<'h2'>) => (
    <h2
      className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8"
      {...props}
    />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p
      className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
      {...props}
    />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300" {...props} />
  ),
  li: (props: ComponentProps<'li'>) => (
    <li className="mb-2" {...props} />
  ),
  code: (props: ComponentProps<'code'>) => (
    <code
      className="bg-gray-100 dark:bg-zinc-800 rounded px-2 py-1 text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: ComponentProps<'pre'>) => (
    <pre
      className="bg-gray-100 dark:bg-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto"
      {...props}
    />
  ),
};

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn('up', 0.2)}
      className="prose dark:prose-invert max-w-none"
    >
      <MDXRemote {...source} components={components} />
    </motion.div>
  );
} 