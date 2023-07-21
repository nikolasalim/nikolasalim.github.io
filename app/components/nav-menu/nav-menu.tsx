"use client"

import styles from './nav-menu.module.scss'
import Link from 'next/link';
import SoonTag from '@/app/components/soon-tag/soon-tag';

export default function NavMenu() {

  return (
    <>
      <div className={styles.topNav}>
        <Link href="/" className={styles.navLink}>
          <span className={styles.navItem}>PROJECTS</span>
          <span className={styles.soonTagWrapper}><SoonTag/></span>
        </Link>
        <Link href="/" className={styles.navLink}>
          <span className={styles.navItem}>ABOUT</span>
          <span className={styles.soonTagWrapper}><SoonTag/></span>
        </Link>
      </div>
      <div className={styles.bottomNav}>
        <Link href="/" className={styles.navLink}>
          <span className={styles.navItem}>BLOG</span>
          <span className={styles.soonTagWrapper}><SoonTag/></span>
        </Link>
        <Link href="/" className={styles.navLink}>
          <span className={styles.navItem}>OTHER</span>
          <span className={styles.soonTagWrapper}><SoonTag/></span>
        </Link>
      </div>
    </>
  )
}