"use client"

import styles from './nav-menu.module.scss'
import Link from 'next/link';
import SoonTag from '@/app/components/soon-tag/soon-tag';
import React, {RefObject, useEffect, useRef, useState} from "react";

export default function NavMenu() {

  const navProjectRef: RefObject<HTMLAnchorElement> = useRef(null);
  const navAboutRef: RefObject<HTMLAnchorElement> = useRef(null);
  const navBlogRef: RefObject<HTMLAnchorElement> = useRef(null);
  const navOtherRef: RefObject<HTMLAnchorElement> = useRef(null);

  const [navProjectWidth, setNavProjectWidth] = useState<number>();
  const [navAboutWidth, setNavAboutWidth] = useState<number>();
  const [navBlogWidth, setNavBlogWidth] = useState<number>();
  const [navOtherWidth, setNavOtherWidth] = useState<number>();

  useEffect(() => {
    if (navProjectRef.current && navAboutRef.current && navBlogRef.current && navOtherRef.current){
      setNavProjectWidth(navProjectRef?.current?.clientWidth)
      setNavAboutWidth(navAboutRef?.current?.clientWidth)
      setNavBlogWidth(navBlogRef?.current?.clientWidth)
      setNavOtherWidth(navOtherRef?.current?.clientWidth)
    }
  }, [])

  return (
    <>
      <div className={styles.topNav}>
        <Link href="/" className={styles.navLink} ref={navProjectRef} style={{width: navProjectWidth}}>
          <span className={styles.navItem}>PROJECTS</span>
          <span className={styles.soonTagWrapper}><SoonTag/></span>
        </Link>
        <Link href="/" className={styles.navLink} ref={navAboutRef} style={{width: navAboutWidth}}>
          <span className={styles.navItem}>ABOUT</span>
          <span className={styles.soonTagWrapper}><SoonTag/></span>
        </Link>
      </div>
      <div className={styles.bottomNav}>
        <Link href="/" className={styles.navLink} ref={navBlogRef} style={{width: navBlogWidth}}>
          <span className={styles.navItem}>BLOG</span>
          <span className={styles.soonTagWrapper}><SoonTag/></span>
        </Link>
        <Link href="/" className={styles.navLink} ref={navOtherRef} style={{width: navOtherWidth}}>
          <span className={styles.navItem}>OTHER</span>
          <span className={styles.soonTagWrapper}><SoonTag/></span>
        </Link>
      </div>
    </>
  )
}