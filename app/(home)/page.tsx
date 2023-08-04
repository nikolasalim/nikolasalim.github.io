import styles from './home.module.scss';

export default function Home() {
  const techStack = ['Angular', 'Typescript', 'HTML', 'SCSS', 'React', 'Next.js', 'Capacitor', 'Ionic', 'Playwright', 'Git']
  const designStack = ['Photoshop', 'Illustrator', 'Figma']
  const languages = ['English', 'Portuguese']
  return (
    <main className={styles.content}>
      <div className={styles.intro}>
        <div className={styles.lineWrapper}><p>Hello – I'm Nikola Salim,</p></div>
        <div className={styles.lineWrapper}><p>a front-end developer on a quest</p></div>
        <div className={styles.lineWrapper}><p>to make the internet look good</p></div>
        <div className={styles.lineWrapper}><p>and applications feel right.</p></div>
      </div>
      <div className={styles.additionalInfo}>
        <div className={styles.bio}>
          <p>As a developer, I have great interest in building products that resonate with people, bridging the gap between great designs and great implementation.</p>
          <br/>
          <p>And as a person, I've always been curious about everything – which is especially handy when a big part of your job is learning new things every day.</p>
          <button className={styles.downloadBtn}>
            ☞ Download CV
          </button>
        </div>
        <div className={styles.stackContainer}>
          <div className={styles.stackList}>
            {techStack.map((item, i) => (
              <span className={styles.techItem} key={i}>{item}</span>
            ))}
            {designStack.map((item, i) => (
              <span className={styles.designItem} key={i}>{item}</span>
            ))}
            {languages.map((item, i) => (
              <span className={styles.langItem} key={i}>{item}</span>
            ))}
          </div>
          <div className={styles.legendContainer}>
            <div className={styles.legendWrapper}>
              <span className={`${styles.legendCircle} ${styles.tech}`}></span>Tech
            </div>
            <div className={styles.legendWrapper}>
              <span className={styles.legendCircle}></span>Design
            </div>
            <div className={styles.legendWrapper}>
              <span className={`${styles.legendCircle} ${styles.lang}`}></span>Languages
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
