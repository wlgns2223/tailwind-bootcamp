import React from "react";
import styles from "./GridDemo.module.css";

export default function GridDemoModule() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Grid Examples (CSS Module)</h2>
      <div className={styles.grid}>
        <div className={styles.cell}>Grid 1</div>
        <div className={styles.cell}>Grid 2</div>
        <div className={styles.cell}>Grid 3</div>
        <div className={`${styles.cell} ${styles.span2}`}>Span 2 Columns</div>
        <div className={styles.cell}>Grid 5</div>
        <div className={styles.cell}>Grid 6</div>
      </div>
      <div className={styles.flow}>
        <div className={styles.spanRow2}>Row Span 2</div>
        <div className={styles.flowItem}>Item 2</div>
        <div className={styles.flowItem}>Item 3</div>
      </div>
    </section>
  );
}
