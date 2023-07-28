import styles from './home.module.scss';

export default function Home() {
  return (
    <main>
      <div className={styles.intro}>
        <div><p>Hello – I'm Nikola Salim,</p></div>
        <div><p>a front-end developer on a quest</p></div>
        <div><p>to make the internet look good</p></div>
        <div><p>and applications feel right.</p></div>
      </div>
    </main>
  )
}
