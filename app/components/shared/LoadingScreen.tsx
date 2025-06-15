'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const fullText = '</Akwei>'

  // Handle mounting state
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle typing animation only after mounting
  useEffect(() => {
    if (!mounted) return

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [mounted])

  // Don't render anything until mounted
  if (!mounted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-zinc-900 z-[100]">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="mb-6 font-mono text-4xl font-semibold text-purple-600 md:text-6xl dark:text-purple-400">
            Loading...
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-zinc-900 z-[100]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center min-h-screen text-center"
      >
        <h1 className="mb-6 font-mono text-4xl font-semibold text-purple-600 md:text-6xl dark:text-purple-400">
          {displayText}
          <span className="animate-pulse">_</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Loading...
        </p>
      </motion.div>
    </div>
  )
} 