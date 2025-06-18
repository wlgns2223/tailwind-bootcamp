import React from "react";
import styles from "./StyleDemo.module.css";

export default function StyleDemoModule() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Style Demo (CSS Module)</h2>

      {/* Font sizes */}
      <div className={styles.fontSizeLarge}>Large font (2rem)</div>
      <div className={styles.fontSizeMedium}>Medium font (1.25rem)</div>
      <div className={styles.fontSizeSmall}>Small font (1rem)</div>

      {/* Font weights */}
      <div className={styles.fontLight}>Light weight (300)</div>
      <div className={styles.fontBold}>Bold weight (700)</div>

      {/* Text alignment */}
      <div className={styles.textLeft}>Left aligned text</div>
      <div className={styles.textCenter}>Center aligned text</div>
      <div className={styles.textRight}>Right aligned text</div>

      {/* Text color */}
      <div className={styles.textPrimary}>Primary text color (#1d4ed8)</div>

      {/* Background color */}
      <div className={styles.bgHighlight}>Highlighted background (#bfdbfe)</div>

      {/* Borders */}
      <div className={styles.borderExample}>
        Border example (2px solid #2563eb)
      </div>

      {/* Border radius */}
      <div className={styles.roundedExample}>Rounded example (0.75rem)</div>
    </section>
  );
}
