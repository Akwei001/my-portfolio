'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/app/utils/animations';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  live?: string;
}

interface ProjectsContentProps {
  projects: Project[];
}

export default function ProjectsContent({ projects }: ProjectsContentProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8"
    >
      <motion.h1
        variants={fadeIn('up', 0.2)}
        className="mb-8 text-4xl font-bold text-gray-900 dark:text-white"
      >
        My Projects
      </motion.h1>
      <motion.p
        variants={fadeIn('up', 0.3)}
        className="max-w-3xl mb-12 text-lg text-gray-600 dark:text-gray-300"
      >
        Here are some of the projects I've worked on. Each project represents a unique challenge
        and learning experience in my journey as a developer.
      </motion.p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={fadeIn('up', 0.2 + index * 0.1)}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg dark:bg-zinc-800 hover:shadow-xl"
          >
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 flex items-center justify-center">
                <span className="text-lg font-medium text-purple-800 dark:text-purple-200">
                  {project.title}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-sm text-purple-800 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 transition-colors dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 transition-colors dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 