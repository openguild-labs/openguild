'use client'

import Link from './Link'

type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced'

interface CodeCampCardProps {
  title: string
  description: string
  author?: string
  difficulty?: DifficultyLevel
  task?: string
  githubUrl?: string
  href?: string
}

const difficultyColors: Record<DifficultyLevel, string> = {
  beginner: 'bg-green-500',
  intermediate: 'bg-yellow-500',
  advanced: 'bg-red-500',
}

export default function CodeCampCard({
  title,
  description,
  author,
  difficulty = 'beginner',
  task,
  githubUrl,
  href,
}: CodeCampCardProps) {
  return (
    <div
      className="group relative block bg-white p-6 transition-all hover:translate-x-1 hover:translate-y-1 dark:bg-gray-800"
      style={{
        border: '3px solid #1a1a1a',
        boxShadow: '6px 6px 0px #1a1a1a',
      }}
    >
      {/* Header Row - Code Icon and Difficulty Badge */}
      <div className="mb-6 flex items-start justify-between">
        {/* Code Icon */}
        <div className="flex h-20 w-20 items-center justify-center bg-primary-100 dark:bg-primary-900/30">
          <span
            className="text-3xl font-bold text-primary-500"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            {'<>'}
          </span>
        </div>

        {/* Difficulty Badge */}
        <span
          className={`rounded px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${difficultyColors[difficulty]}`}
          style={{ fontFamily: 'var(--font-vcr)' }}
        >
          {difficulty}
        </span>
      </div>

      {/* Title */}
      <h3
        className="mb-4 text-lg font-bold uppercase leading-tight text-gray-900 dark:text-white md:text-xl"
        style={{ fontFamily: 'var(--font-vcr)' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>

      {/* Dotted Separator */}
      <div className="mb-4 border-b border-dashed border-gray-300 dark:border-gray-600"></div>

      {/* Author */}
      {author && (
        <div className="mb-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span style={{ fontFamily: 'var(--font-vcr)' }}>PIC: {author}</span>
        </div>
      )}

      {/* Task with Checkmark */}
      {task && (
        <div className="mb-6 flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
          <svg
            className="mt-0.5 h-4 w-4 shrink-0 text-primary-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{task}</span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        {/* Main Link Button */}
        {href && (
          <Link
            href={href}
            className="flex w-full items-center justify-center gap-2 bg-primary-500 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-primary-600"
            style={{
              fontFamily: 'var(--font-vcr)',
              border: '2px solid #1a1a1a',
            }}
          >
            Learn more
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        )}

        {/* GitHub Button */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 border-2 border-[#6366f1] py-3 text-xs font-bold uppercase tracking-wider text-[#6366f1] transition-all hover:bg-[#6366f1] hover:text-white"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}
