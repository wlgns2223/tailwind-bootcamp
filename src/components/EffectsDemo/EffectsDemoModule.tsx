import React from "react";
import styles from "./EffectsDemo.module.css";

export default function EffectsDemoModule() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Effects Demo (CSS Module)</h2>

      {/* Box Shadow Examples */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Box Shadow</h3>
        <div className={styles.grid}>
          <div className={`${styles.box} ${styles.shadowSmall}`}>Small</div>
          <div className={`${styles.box} ${styles.shadowMedium}`}>Medium</div>
          <div className={`${styles.box} ${styles.shadowLarge}`}>Large</div>
          <div className={`${styles.box} ${styles.shadowColored}`}>Colored</div>
        </div>
      </div>

      {/* Opacity Examples */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Opacity</h3>
        <div className={styles.grid}>
          <div className={`${styles.box} ${styles.opacity25}`}>25%</div>
          <div className={`${styles.box} ${styles.opacity50}`}>50%</div>
          <div className={`${styles.box} ${styles.opacity75}`}>75%</div>
          <div className={`${styles.box} ${styles.opacity100}`}>100%</div>
        </div>
      </div>

      {/* Scale Examples */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Scale</h3>
        <div className={styles.grid}>
          <div className={`${styles.box} ${styles.scale75}`}>75%</div>
          <div className={styles.box}>100%</div>
          <div className={`${styles.box} ${styles.scale125}`}>125%</div>
        </div>
      </div>

      {/* Rotate Examples */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Rotate</h3>
        <div className={styles.grid}>
          <div className={styles.box}>0°</div>
          <div className={`${styles.box} ${styles.rotate45}`}>45°</div>
          <div className={`${styles.box} ${styles.rotate90}`}>90°</div>
        </div>
      </div>

      {/* Translate Examples */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Translate</h3>
        <div className={styles.grid}>
          <div className={`${styles.box} ${styles.translateX}`}>X: 20px</div>
          <div className={`${styles.box} ${styles.translateY}`}>Y: -20px</div>
          <div className={`${styles.box} ${styles.translateXY}`}>X&Y</div>
        </div>
      </div>

      {/* Hover Effects */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Hover Effects (hover to see)</h3>
        <div className={styles.grid}>
          <div className={`${styles.box} ${styles.hoverScale}`}>Scale</div>
          <div className={`${styles.box} ${styles.hoverShadow}`}>Shadow</div>
          <div className={`${styles.box} ${styles.hoverRotate}`}>Rotate</div>
          <div className={`${styles.box} ${styles.combined}`}>Combined</div>
        </div>
      </div>
    </section>
  );
}
