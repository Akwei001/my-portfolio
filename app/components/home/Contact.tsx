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
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="p-8 bg-white rounded-lg shadow-lg dark:bg-zinc-800"
          >
            <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <EnvelopeIcon className="mr-4 w-6 h-6 text-purple-600 dark:text-purple-400" />
                <a
                  href="mailto:akwei1@gmail.com?subject=Portfolio%20Contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  akwei1@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="mr-4 w-6 h-6 text-purple-600 dark:text-purple-400" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  +44 7875905670
                </a>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="mr-4 w-6 h-6 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-600 dark:text-gray-300">
                  Birmingham, UK
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="p-8 bg-white rounded-lg shadow-lg dark:bg-zinc-800"
          >
            <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
              Send a Message
            </h3>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
                const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
                const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';
                const subject = encodeURIComponent('Portfolio Contact');
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
                window.location.href = `mailto:akwei1@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="px-4 py-2 w-full rounded-md border border-gray-300 dark:border-zinc-700 focus:ring-purple-500 focus:border-purple-500 dark:bg-zinc-900 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="px-4 py-2 w-full rounded-md border border-gray-300 dark:border-zinc-700 focus:ring-purple-500 focus:border-purple-500 dark:bg-zinc-900 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="px-4 py-2 w-full rounded-md border border-gray-300 dark:border-zinc-700 focus:ring-purple-500 focus:border-purple-500 dark:bg-zinc-900 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 w-full text-white bg-purple-600 rounded-md transition-colors hover:bg-purple-700"
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