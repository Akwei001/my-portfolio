'use client'
import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-zinc-900">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">Page Not Found</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 text-white bg-purple-600 rounded-lg transition-colors hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 