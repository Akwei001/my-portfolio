'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/app/utils/animations';
import AnimatedText from '../shared/AnimatedText';

export default function Hero() {
  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up', 0.2)}
          className="text-center"
        >
          <AnimatedText
            text="Hi, I'm Akwei"
            className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            delay={0.1}
          />
          <AnimatedText
            text="Frontend Developer"
            className="text-2xl sm:text-4xl text-purple-600 dark:text-purple-400 mb-8"
            delay={0.2}
          />
          <motion.p
            variants={fadeIn('up', 0.3)}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            I build modern, responsive, and accessible web applications using React, Next.js, and TypeScript.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="mt-8 flex justify-center space-x-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-md hover:bg-purple-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 