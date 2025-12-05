'use client'

import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <>
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-full transform bg-white duration-300 ease-in-out dark:bg-gray-950 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button className="mr-8 mt-11 h-8 w-8" aria-label="Toggle Menu" onClick={onToggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-8 px-12">
          {headerNavLinks.map((link) => {
            const isCtaButton = link.className === 'cta-button'
            return (
              <div key={link.title} className="py-4">
                <Link
                  href={link.href}
                  className={
                    isCtaButton
                      ? 'inline-block bg-primary-500 px-6 py-3 text-lg font-bold uppercase tracking-wider text-white'
                      : 'text-xl font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100'
                  }
                  style={
                    isCtaButton
                      ? {
                          fontFamily: 'var(--font-vcr)',
                          border: '3px solid #1a1a1a',
                          boxShadow: '4px 4px 0px #1a1a1a',
                        }
                      : { fontFamily: 'var(--font-vcr)' }
                  }
                  onClick={onToggleNav}
                >
                  {isCtaButton ? '🚀 Join CODECAMP!' : link.title}
                </Link>
              </div>
            )
          })}
        </nav>
      </div>
    </>
  )
}

export default MobileNav
