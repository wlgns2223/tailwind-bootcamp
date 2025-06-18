import React from "react";
import styles from "./FlexDemo.module.css";

export default function FlexDemoModule() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Flex Examples (CSS Module)</h2>
      <div className={styles.row}>
        <div className={styles.rowItem}>Flex 1</div>
        <div className={styles.rowItem}>Flex 1</div>
        <div className={styles.rowItem}>Flex 1</div>
      </div>
      <div className={styles.column}>
        <div className={styles.columnItem}>Item 1</div>
        <div className={styles.columnItem}>Item 2</div>
        <div className={styles.columnItem}>Item 3</div>
      </div>
    </section>
  );
}
