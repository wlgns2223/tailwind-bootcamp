import React from "react";
import styles from "./GradientDemo.module.css";

export default function GradientDemoModule() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Gradient Demo (CSS Module)</h2>

      {/* Linear Gradients */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Linear Gradients</h3>
        <div className={styles.grid}>
          <div className={`${styles.gradientBox} ${styles.linearHorizontal}`}>
            Horizontal
          </div>
          <div className={`${styles.gradientBox} ${styles.linearVertical}`}>
            Vertical
          </div>
          <div className={`${styles.gradientBox} ${styles.linearDiagonal}`}>
            Diagonal
          </div>
          <div className={`${styles.gradientBox} ${styles.linearAngled}`}>
            45° Angle
          </div>
        </div>
      </div>

      {/* Radial Gradients */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Radial Gradients</h3>
        <div className={styles.grid}>
          <div className={`${styles.gradientBox} ${styles.radialCenter}`}>
            Center Circle
          </div>
          <div className={`${styles.gradientBox} ${styles.radialCorner}`}>
            Corner Circle
          </div>
          <div className={`${styles.gradientBox} ${styles.radialEllipse}`}>
            Ellipse
          </div>
        </div>
      </div>

      {/* Multi-stop Gradients */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Multi-stop Gradients</h3>
        <div className={styles.grid}>
          <div className={`${styles.gradientBox} ${styles.multiStop}`}>
            Rainbow Stops
          </div>
          <div className={`${styles.gradientBox} ${styles.multiStopComplex}`}>
            Complex Stops
          </div>
        </div>
      </div>

      {/* Text Gradients */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Text Gradients</h3>
        <div className={styles.textGradient}>Gradient Text Effect</div>
      </div>

      {/* Border Gradients */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Border Gradients</h3>
        <div className={styles.grid}>
          <div className={styles.borderGradient}>Gradient Border</div>
        </div>
      </div>

      {/* Animated & Hover Effects */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Interactive Gradients</h3>
        <div className={styles.grid}>
          <div className={`${styles.gradientBox} ${styles.animatedGradient}`}>
            Animated
          </div>
          <div className={`${styles.gradientBox} ${styles.hoverGradient}`}>
            Hover Me
          </div>
        </div>
      </div>
    </section>
  );
}
