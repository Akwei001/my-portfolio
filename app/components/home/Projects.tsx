'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/app/utils/animations';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
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
    image: '/amplifyplayer.png',
    tags: ['JavaScript', 'React', 'AWS', 'Graph QL', 'DynamoDb'],
    github: 'https://github.com/Akwei001/amplify-player',
    live: 'https://master.drp46atynvtc.amplifyapp.com/',
  },
];

export default function Projects() {
  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16"
      id="projects"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn('up', 0.2 + index * 0.1)}
              className="overflow-hidden bg-white rounded-lg shadow-lg transition-shadow dark:bg-zinc-800 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
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
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 