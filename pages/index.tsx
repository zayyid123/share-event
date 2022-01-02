import MyAnimation from "../components/animation";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout>
        <div className={styles.description}>
          <div className={styles["description-sme"]}>
            <h2>Share My Event</h2>
            <h3>Let’s <span>find</span> your</h3>
            <h3><span>event</span> today</h3>
            <p>You are free to share and find updated information about online events</p>
          </div>
          <div className={styles.myLottie}>
            <MyAnimation></MyAnimation>
          </div>
        </div>
      </Layout>
    </>
  )
}
