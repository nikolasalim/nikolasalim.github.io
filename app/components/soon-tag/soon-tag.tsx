import styles from './soon-tag.module.scss'

export default function SoonTag() {
  return (
    <div className={styles.soonTag}>
      <span className={styles.star}>✦</span>SOON<span className={styles.star}>✦</span>
    </div>
  )
}