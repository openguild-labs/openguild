'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { ReactFlowProvider } from 'reactflow'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      <ReactFlowProvider>{children}</ReactFlowProvider>
    </ThemeProvider>
  )
}
