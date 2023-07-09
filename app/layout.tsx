import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.test}>test</div>
        {children}
      </body>
    </html>
  )
}
