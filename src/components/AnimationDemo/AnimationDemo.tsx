import styles from "./AnimationDemo.module.css";

export default function AnimationDemoModule() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Animation Examples</h2>
      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.spin}`}>Spinning Card</div>
        <div className={`${styles.card} ${styles.pulse}`}>Pulsing Card</div>
        <div className={`${styles.card} ${styles.bounce}`}>Bouncing Card</div>
      </div>

      {/* 고급 애니메이션 예제 */}
      <div className={styles.advancedGrid}>
        <div className={`${styles.card} ${styles.ping}`}>Ping Effect</div>
        <div className={`${styles.card} ${styles.hover}`}>Hover Animation</div>
      </div>
    </div>
  );
}
