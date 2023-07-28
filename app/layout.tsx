import './styles/globals.scss';
import styles from './layout.module.scss';
import type { Metadata } from 'next';
import NavMenu from "@/app/components/nav-menu/nav-menu";

export const metadata: Metadata = {
  title: 'Nikola Salim – Front-end Developer',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.bodyWrapper}>
          {children}
        </div>
        <NavMenu/>
      </body>
    </html>
  )
}
