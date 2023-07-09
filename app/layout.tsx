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
        <div className={styles.navWrapper}>
          <div className={styles.topNav}>
            <div>Projects</div>
            <div>About</div>
          </div>
          <div className={styles.bottomNav}>
            <div>Blog</div>
            <div>Other</div>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
