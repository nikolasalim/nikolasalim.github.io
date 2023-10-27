import styles from './about.module.scss';
import Image from "next/image";

export default function About() {
  const techStack = ['Angular', 'Typescript', 'HTML', 'SCSS', 'React', 'Next.js', 'Capacitor', 'Ionic', 'Playwright', 'Git']
  const designStack = ['Photoshop', 'Illustrator', 'Figma']
  const languages = ['English', 'Portuguese']

  return (
    <main className={styles.content}>
      <div className={`${styles.intro} ${styles.desktop}`}>
        <div className={styles.lineWrapper}><p>Hello – I&apos;m Nikola Salim,</p></div>
        <div className={styles.lineWrapper}><p>a front-end developer on a quest</p></div>
        <div className={styles.lineWrapper}><p>to make the internet look good</p></div>
        <div className={styles.lineWrapper}><p>and applications feel right.</p></div>
      </div>
      <div className={`${styles.intro} ${styles.mobile}`}>
        <div className={styles.lineWrapper}><p>Hello – I&apos;m Nikola Salim,</p></div>
        <div className={styles.lineWrapper}><p>a front-end developer</p></div>
        <div className={styles.lineWrapper}><p>on a quest to make</p></div>
        <div className={styles.lineWrapper}><p>the internet look good</p></div>
        <div className={styles.lineWrapper}><p>and applications feel right.</p></div>
      </div>
      <div className={styles.additionalInfo}>
        <div className={styles.bio}>
          <p>As a developer, I have great interest in building products that resonate with people, bridging the gap between great designs and great implementation.</p>
          <br/>
          <p>And as a person, I&apos;ve always been curious about everything – which is especially handy when a big part of my job is learning new things every day.</p>
          <div className={styles.linksContainer}>
            <a href="https://drive.google.com/file/d/1c8VQi7TZLhkeXoW7kRo02-VT-m98fnVk/view?usp=sharing" target="_blank" className={styles.downloadBtn}><span className={styles.downloadBtnIcon}>☞</span> Download CV</a>
            <a href="https://github.com/nikolasalim" target="_blank"><Image src="/assets/images/icon-github.svg" alt="github" height="24" width="24"/></a>
            <a href="https://www.linkedin.com/in/nikolasalim/" target="_blank"><Image src="/assets/images/icon-linkedin.svg" alt="linkedIn" height="24" width="24"/></a>
          </div>
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
