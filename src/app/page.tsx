import styles from "./page.module.css";
import Image from "next/image";
import gitLogo from "../../public/img/gitLogo.svg";
import personalPhoto from "../../public/img/personPhtp.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.App_header}>
        {/* [x] 第一頁 打招呼 */}
        <div className={styles.box_left}>
          <h1>Hello</h1>
          <p>
            I’m Yun-Jou Lai
            <br />
            This is my resume
          </p>
          <Image src={gitLogo} alt='githubLogo' width={40} />
          <br />
          <a href='https://github.com/Gray3325'>https://github.com/Gray3325</a>
        </div>
        <div className={styles.page_1_card}>
          <div className={styles.personalPhoto}></div>
          <p>Yun-Jou Lai</p>
        </div>
      </header>
      <div className={styles.page_2_skill}>
        {/* [x] 第二頁 技能部分 */}

        <h1>Skills</h1>

        <div className={styles.skills}>
          {/* 放技能的地方 */}
          <p>React</p>
          <p>Bootstrap</p>
          <p>Fimga</p>
          <p>Javascript</p>
          <p>CSS</p>
          <p>HTML</p>
          <p>MySQL</p>
          <p>Node</p>
          <p>GitHub</p>
        </div>
      </div>
      <div className={styles.page_3_education}>
        {/*[ ] 第三頁 學歷部分 */}
        <h1>Education</h1>
        
      </div>
    </main>
  );
}
