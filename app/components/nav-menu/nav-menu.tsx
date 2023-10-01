"use client"

import styles from './nav-menu.module.scss'
import Link from 'next/link';
import SoonTag from '@/app/components/soon-tag/soon-tag';
import {usePathname} from "next/navigation";
import { useEffect, useState} from "react";

export default function NavMenu() {
  const pathname: string = usePathname();
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    isMobile ? <MobileNavMenu pathname={pathname}/> : <FullNavMenu pathname={pathname}/>
  )
}

const MobileNavMenu = ({ pathname }: Pathname ) => {
  return (
    <>
      <div className={styles.topNav}>
        <div className={styles.navLink}>
          <span className={styles.navItem}>MENU</span>
        </div>
      </div>
    </>
  )
}

const FullNavMenu = ({ pathname }: Pathname) => {
  return (
    <>
      <div className={styles.topNav}>
        <Link href="/" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>
          <span className={styles.navItem}>ABOUT</span>
        </Link>
        <Link href="/" className={styles.navLink}>
          <span className={styles.navItem}>PROJECTS</span>
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

interface Pathname {
  pathname: string
}