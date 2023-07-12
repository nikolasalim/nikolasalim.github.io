import styles from './nav-menu.module.scss'
import Link from 'next/link';
import SoonTag from '@/app/components/soon-tag/soon-tag';

export default function NavMenu() {
  return (
    <>
      <div className={styles.topNav}>
        <Link href="/" className={styles.navLink}>
          PROJECTS
          <span className={styles.soonTagWrapper}><SoonTag/></span>
        </Link>
        <Link href="/" className={styles.navLink}>
          ABOUT
          <span className={styles.soonTagWrapper}><SoonTag/></span>
        </Link>
      </div>
      <div className={styles.bottomNav}>
        <Link href="/" className={styles.navLink}>
          BLOG
          <span className={styles.soonTagWrapper}><SoonTag/></span>
        </Link>
        <Link href="/" className={styles.navLink}>
          OTHER
          <span className={styles.soonTagWrapper}><SoonTag/></span>
        </Link>
      </div>
    </>
  )
}