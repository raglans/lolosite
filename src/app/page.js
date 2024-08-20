import styles from "./page.module.css";
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.center} ${styles.our_approach}`}>
          <h3 className={`${styles.subtitle} ${dancing_script.className}`} style={{margin: '0'}}>Introducing</h3>
          <h1 className={styles.title}>LoLo®</h1>
          <div style={{margin:'30px'}}>
            <h3 className={`${styles.subtitle} ${dancing_script.className}`} style={{margin:'0'}}>A Hyperlocal</h3>
            <h3 className={`${styles.subtitle} ${dancing_script.className}`} style={{margin:'0'}}>Events </h3>
            <h3 className={`${styles.subtitle} ${dancing_script.className}`} style={{margin:'0'}}>App</h3>
          </div>
          <div>
            <h3 className={`${styles.subtitle} ${dancing_script.className}`}>Coming Soon</h3>
          </div>
        <div className={`${styles.center} ${styles.our_approach}`}>
          <p style={{padding:'15%'}}>Our team is working on a new mobile application to help you plan your entertainment in the Lower Mainland Area. You will be able to search out cool eateries, breweries, and special events.</p>
          <div>
            <h3 className={`${styles.subtitle} ${dancing_script.className}`}>Stay tuned</h3>
          </div>
          <p style={{width:'55%', textAlign: 'right'}}>The LoLo® Team</p>
        </div>
      </div>
    </main>
  );
}
