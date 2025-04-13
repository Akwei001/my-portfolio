'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/app/utils/animations';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-4" />
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  your.email@example.com
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-4" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-4" />
                <span className="text-gray-600 dark:text-gray-300">
                  London, UK
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-zinc-900 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-zinc-900 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-md focus:ring-purple-500 focus:border-purple-500 dark:bg-zinc-900 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 