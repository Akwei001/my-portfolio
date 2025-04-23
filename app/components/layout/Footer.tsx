'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/utils/animations';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      variants={fadeIn('up', 0.2)}
      className="bg-white border-t border-gray-200 dark:bg-zinc-900 dark:border-zinc-800"
    >
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Akwei. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
} 