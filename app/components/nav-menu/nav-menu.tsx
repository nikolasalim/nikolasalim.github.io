import styles from './nav-menu.module.scss'
import Link from 'next/link';

export default function NavMenu() {
  return (
    <>
      <div className={styles.topNav}>
        <Link href="/" className={styles.navLink}>PROJECTS</Link>
        <Link href="/" className={styles.navLink}>ABOUT</Link>
      </div>
      <div className={styles.bottomNav}>
        <Link href="/" className={styles.navLink}>BLOG</Link>
        <Link href="/" className={styles.navLink}>OTHER</Link>
      </div>
    </>
  )
}