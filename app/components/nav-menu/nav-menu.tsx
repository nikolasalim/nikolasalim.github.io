import styles from './nav-menu.module.scss'

export default function NavMenu() {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.topNav}>
        <div>PROJECTS</div>
        <div>ABOUT</div>
      </div>
      <div className={styles.bottomNav}>
        <div>BLOG</div>
        <div>OTHER</div>
      </div>
    </div>
  )
}