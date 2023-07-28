import styles from './home.module.scss';

export default function Home() {
  return (
    <main>
      <div className={styles.intro}>
        <p>Hello – I'm Nikola Salim,</p>
        <p>a front-end developer on a quest</p>
        <p>to make the internet look good</p>
        <p>and applications feel right.</p>
      </div>
    </main>
  )
}
